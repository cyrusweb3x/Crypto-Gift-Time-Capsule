// app/capsules/page.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Wallet, Copy, Check, Gift, Inbox, Loader2,
  RefreshCw, User, PartyPopper, AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ethers, BrowserProvider, Contract, formatUnits, formatEther
} from "ethers";
import contractAbi from "@/contractAbi.json";

const CONTRACT_ADDRESS = "0xc160E1b43203A4d18E4069437Bc960248f91d847";
const BASE_CHAIN_ID = "0x2105";
const STORAGE_KEY = "yupp_wallet_connected";
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const ERC20_ABI = ["function balanceOf(address) view returns (uint256)"];

// ─── Helpers ──────────────────────────────────────────────────────

const safeParseMessage = (rawMsg: any) => {
  try {
    if (!rawMsg || typeof rawMsg !== "string" || !rawMsg.trim()) {
      return { content: "", isAnonymous: false };
    }
    try {
      const decoded = atob(rawMsg.trim());
      try {
        const json = JSON.parse(decoded);
        return {
          content: String(json?.content ?? ""),
          isAnonymous: Boolean(json?.isAnonymous),
        };
      } catch {
        return { content: decoded, isAnonymous: false };
      }
    } catch {
      return { content: rawMsg.trim(), isAnonymous: false };
    }
  } catch {
    return { content: "", isAnonymous: false };
  }
};

const safeFormatEther = (val: any) => {
  try { return formatEther(val ?? 0n); }
  catch { return "0"; }
};

const safeFormatUnits = (val: any, dec: number) => {
  try { return formatUnits(val ?? 0n, dec); }
  catch { return "0"; }
};

const isZero = (addr: any) => {
  try {
    if (!addr || typeof addr !== "string") return true;
    return (
      addr === ethers.ZeroAddress ||
      addr === "0x0000000000000000000000000000000000000000"
    );
  } catch { return true; }
};

const short = (addr: any) => {
  try {
    if (!addr || typeof addr !== "string") return "Unknown";
    if (!addr.startsWith("0x")) return String(addr);
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  } catch { return "Unknown"; }
};

const safeGetIdentity = async (address: string) => {
  try {
    const { getName, getAvatar } = await import("@coinbase/onchainkit/identity");
    const { base } = await import("viem/chains");
    const name = await getName({ address: address as `0x${string}`, chain: base });
    if (name) {
      const avt = await getAvatar({ ensName: name, chain: base });
      return { name, avatar: avt ?? null };
    }
  } catch { /* non-critical */ }
  return { name: null, avatar: null };
};

// ─── Gift Parser (ABI-correct) ────────────────────────────────────
// gifts() → [0]sender [1]recipient [2]token [3]amount [4]unlockTime
//            [5]isWithdrawn [6]message [7]isAnonymous [8]assetType [9]tokenId

const parseGift = (id: number, g: any, myAddress: string) => {
  try {
    const sender      = String(g[0] ?? "");
    const recipient   = String(g[1] ?? "");
    const tokenAddr   = String(g[2] ?? "");
    const amountRaw   = g[3] ?? 0n;
    const unlockTime  = Number(g[4] ?? 0);
    const isWithdrawn = Boolean(g[5]);
    const rawMsg      = String(g[6] ?? "");
    const isAnon      = Boolean(g[7]);
    // g[8] = assetType (enum), g[9] = tokenId — not needed for display

    if (isZero(sender)) return null;

    const isETH = isZero(tokenAddr);
    const token = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(amountRaw)
      : safeFormatUnits(amountRaw, 6);

    // message field থেকে isAnonymous নাও (contract এ আলাদা field আছে)
    const { content } = safeParseMessage(rawMsg);
    const isUnlocked  = Date.now() >= unlockTime * 1000;

    let unlockDate = "";
    try { unlockDate = new Date(unlockTime * 1000).toISOString(); }
    catch { unlockDate = new Date().toISOString(); }

    const me = myAddress.toLowerCase();

    return {
      id: `gift-${id}`,
      sender,
      recipient,
      amount,
      token,
      unlockDate,
      isUnlocked,
      isWithdrawn,
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: false,
      txHash: "",
      isMine:  sender.toLowerCase() === me,
      isForMe: recipient.toLowerCase() === me,
    };
  } catch (err) {
    console.error(`parseGift #${id} failed:`, err);
    return null;
  }
};

// ─── Red Packet Parser (ABI-correct) ─────────────────────────────
// redPackets() → [0]id [1]creator [2]token [3]totalAmount
//                [4]remainingAmount [5]maxClaimers [6]remainingClaimers
//                [7]unlockTime [8]isLucky [9]isAnonymous [10]isCancelled
//                [11]message

const parseRedPacket = (id: number, rp: any, myAddress: string) => {
  try {
    // [0] is the stored id (uint256), [1] is creator
    const creator      = String(rp[1] ?? "");
    const tokenAddr    = String(rp[2] ?? "");
    const totalAmt     = rp[3] ?? 0n;
    // [4] remainingAmount, [5] maxClaimers, [6] remainingClaimers
    const unlockTime   = Number(rp[7] ?? 0);
    // [8] isLucky
    const isAnon       = Boolean(rp[9]);
    const isCancelled  = Boolean(rp[10]);
    const rawMsg       = String(rp[11] ?? "");

    if (isZero(creator)) return null;

    const isETH  = isZero(tokenAddr);
    const token  = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(totalAmt)
      : safeFormatUnits(totalAmt, 6);

    const { content } = safeParseMessage(rawMsg);
    const isUnlocked  = Date.now() >= unlockTime * 1000;

    let unlockDate = "";
    try { unlockDate = new Date(unlockTime * 1000).toISOString(); }
    catch { unlockDate = new Date().toISOString(); }

    const me = myAddress.toLowerCase();

    return {
      id: `rp-${id}`,
      sender: creator,
      recipient: "Multiple",
      amount,
      token,
      unlockDate,
      isUnlocked,
      isWithdrawn: isCancelled,
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: true,
      isCancelled,
      txHash: "",
      isMine:  creator.toLowerCase() === me,
      isForMe: creator.toLowerCase() !== me,
    };
  } catch (err) {
    console.error(`parseRedPacket #${id} failed:`, err);
    return null;
  }
};

// ─── Main Component ───────────────────────────────────────────────

export default function CapsulesPage() {
  const [mounted, setMounted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");
  const [usdcBalance, setUsdcBalance] = useState("0.00");
  const [activeTab, setActiveTab] = useState<"sent" | "received">("received");
  const [filter, setFilter] = useState<"all" | "ETH" | "USDC">("all");
  const [copied, setCopied] = useState(false);
  const [mySentCapsules, setMySentCapsules] = useState<any[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState<any | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [successModalData, setSuccessModalData] = useState<{ amount: string; token: string } | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const fetchBalances = async (acc: string, _p: BrowserProvider) => {
    try {
      const bal = await _p.getBalance(acc);
      setEthBalance(Number(formatEther(bal)).toFixed(4));
      const usdc = new Contract(USDC_ADDRESS, ERC20_ABI, _p);
      const ub = await usdc.balanceOf(acc);
      setUsdcBalance(Number(formatUnits(ub, 6)).toFixed(2));
    } catch (e) { console.error("Balance error", e); }
  };

  const setupWallet = async (acc: string, _p: BrowserProvider) => {
    try {
      const _s = await _p.getSigner();
      const net = await _p.getNetwork();
      if (Number(net.chainId) !== 8453) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BASE_CHAIN_ID }],
          });
        } catch (e) { console.error("Chain switch:", e); }
      }
      setProvider(_p);
      setSigner(_s);
      setAddress(acc);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true");
      await fetchBalances(acc, _p);
      const { name, avatar: avt } = await safeGetIdentity(acc);
      if (name) setBasename(name);
      if (avt) setAvatar(avt);
    } catch (e) { console.error("setupWallet:", e); }
  };

  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = await _p.send("eth_accounts", []);
      if (accs.length > 0) await setupWallet(accs[0], _p);
    } catch (e) { console.error("checkConnection:", e); }
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accs[0]) await setupWallet(accs[0], _p);
    } catch (e) { console.error("connect:", e); }
  }, []);

  const confirmDisconnect = useCallback(() => {
    setIsConnected(false); setAddress(""); setProvider(null); setSigner(null);
    setBasename(null); setAvatar(null); setEthBalance("0.00"); setUsdcBalance("0.00");
    setMySentCapsules([]); setMyReceivedCapsules([]); setFetchError(null);
    localStorage.removeItem(STORAGE_KEY); setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
    if (typeof window !== "undefined" && window.ethereum) {
      const onChange = (accs: string[]) => {
        if (accs.length === 0) confirmDisconnect(); else checkConnection();
      };
      window.ethereum.on("accountsChanged", onChange);
      return () => window.ethereum?.removeListener("accountsChanged", onChange);
    }
  }, [mounted, checkConnection, confirmDisconnect]);

  // ── fetchCapsules using userSentGifts / userReceivedGifts arrays ──
  const fetchCapsules = useCallback(async (isSilent = false) => {
    if (!provider || !address) return;
    if (!isSilent) setIsLoadingData(true);
    else setIsBackgroundLoading(true);
    setFetchError(null);

    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, provider);
      const sent: any[] = [];
      const received: any[] = [];

      // ── Gifts ────────────────────────────────────────────────────
      try {
        const totalGifts = Number(await contract.giftCounter());
        console.log("giftCounter:", totalGifts);

        if (totalGifts > 0) {
          // Fetch all in batches, filter by address
          const batchSize = 5;
          for (let i = totalGifts; i >= 1; i -= batchSize) {
            const batch: Promise<any>[] = [];
            const ids: number[] = [];

            for (let j = 0; j < batchSize && i - j >= 1; j++) {
              const gid = i - j;
              ids.push(gid);
              batch.push(
                contract.gifts(gid).catch((e: any) => {
                  console.warn(`gifts(${gid}) failed:`, e);
                  return null;
                })
              );
            }

            const results = await Promise.all(batch);
            results.forEach((g, idx) => {
              if (!g) return;
              const parsed = parseGift(ids[idx], g, address);
              if (!parsed) return;
              if (parsed.isMine)  sent.push(parsed);
              if (parsed.isForMe) received.push(parsed);
            });

            if (i > batchSize) await new Promise(r => setTimeout(r, 80));
          }
        }
      } catch (err) {
        console.error("gifts fetch error:", err);
      }

      // ── Red Packets ──────────────────────────────────────────────
      try {
        const totalRPs = Number(await contract.redPacketCounter());
        console.log("redPacketCounter:", totalRPs);

        if (totalRPs > 0) {
          const batchSize = 5;
          for (let i = totalRPs; i >= 1; i -= batchSize) {
            const batch: Promise<any>[] = [];
            const ids: number[] = [];

            for (let j = 0; j < batchSize && i - j >= 1; j++) {
              const rid = i - j;
              ids.push(rid);
              batch.push(
                contract.redPackets(rid).catch((e: any) => {
                  console.warn(`redPackets(${rid}) failed:`, e);
                  return null;
                })
              );
            }

            const results = await Promise.all(batch);
            results.forEach((rp, idx) => {
              if (!rp) return;
              const parsed = parseRedPacket(ids[idx], rp, address);
              if (!parsed) return;
              if (parsed.isMine)  sent.push(parsed);
              if (parsed.isForMe) received.push(parsed);
            });

            if (i > batchSize) await new Promise(r => setTimeout(r, 80));
          }
        }
      } catch (err) {
        console.error("redPackets fetch error:", err);
      }

      const byIdDesc = (a: any, b: any) => {
        const na = parseInt(String(a.id).replace(/\D/g, "")) || 0;
        const nb = parseInt(String(b.id).replace(/\D/g, "")) || 0;
        return nb - na;
      };

      setMySentCapsules(sent.sort(byIdDesc));
      setMyReceivedCapsules(received.sort(byIdDesc));
      fetchBalances(address, provider);

    } catch (err: any) {
      console.error("fetchCapsules:", err);
      setFetchError("Failed to load data. Tap refresh to retry.");
    } finally {
      setIsLoadingData(false);
      setIsBackgroundLoading(false);
    }
  }, [provider, address]);

  useEffect(() => {
    if (provider && address) {
      fetchCapsules();
      const iv = setInterval(() => fetchCapsules(true), 30000);
      return () => clearInterval(iv);
    }
  }, [provider, address, fetchCapsules]);

  // Auto-unlock timer
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const setup = (caps: any[], set: any) => {
      if (!Array.isArray(caps)) return;
      caps.forEach(c => {
        if (!c?.unlockDate || c.isUnlocked || c.isWithdrawn) return;
        try {
          const ms = new Date(c.unlockDate).getTime() - Date.now();
          if (ms > 0 && ms < 86400000) {
            timers.push(setTimeout(() => {
              set((prev: any[]) =>
                prev.map(x => x?.id === c.id
                  ? { ...x, isUnlocked: true, message: x.realMessage || "" }
                  : x)
              );
            }, ms + 1000));
          }
        } catch { /* ignore */ }
      });
    };
    setup(myReceivedCapsules, setMyReceivedCapsules);
    setup(mySentCapsules, setMySentCapsules);
    return () => timers.forEach(clearTimeout);
  }, [myReceivedCapsules, mySentCapsules]);

  const handleClaim = async () => {
    if (!selectedCapsule || !signer || selectedCapsule.isRedPacket) return;
    const giftIdNum = parseInt(String(selectedCapsule.id).replace("gift-", ""));
    if (isNaN(giftIdNum) || giftIdNum <= 0) { alert("Invalid gift ID"); return; }

    setIsClaiming(true); setPendingTxHash(null);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);

      // Pre-check
      try {
        const g = await contract.gifts(giftIdNum);
        if (!g || isZero(g[0])) { alert("Gift does not exist"); setIsClaiming(false); return; }
        if (g[5]) { // isWithdrawn
          alert("Already claimed");
          setMyReceivedCapsules(p => p.map(c => c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c));
          setSelectedCapsule(null); setIsClaiming(false); return;
        }
      } catch { /* continue */ }

      const tx = await contract.withdrawGift(BigInt(giftIdNum));
      setPendingTxHash(tx.hash);

      let receipt = null;
      const txp = signer.provider || provider;
      for (let i = 0; i < 45; i++) {
        await new Promise(r => setTimeout(r, 2000));
        try {
          if (txp) { receipt = await txp.getTransactionReceipt(tx.hash); if (receipt) break; }
        } catch { /* continue */ }
      }

      if (receipt?.status === 1) {
        setMyReceivedCapsules(p => p.map(c => c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c));
        setSuccessModalData({ amount: selectedCapsule.amount, token: selectedCapsule.token });
        setSelectedCapsule(null);
        fetchCapsules(true);
      } else if (receipt?.status === 0) {
        alert("Transaction failed on chain");
      } else {
        alert("Still processing — check wallet and refresh.");
        setSelectedCapsule(null);
      }
    } catch (err: any) {
      console.error("claim:", err);
      if (err?.code === "ACTION_REJECTED") alert("Rejected");
      else if (err?.message?.includes("AlreadyWithdrawn")) {
        alert("Already claimed");
        setMyReceivedCapsules(p => p.map(c => c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c));
      } else {
        alert("Claim failed: " + (err?.reason || err?.message || "Unknown"));
      }
    } finally { setIsClaiming(false); setPendingTxHash(null); }
  };

  const handleCopy = async () => {
    if (!address) return;
    try { await navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { /* ignore */ }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const sentList     = mySentCapsules.filter(c => c && (filter === "all" || c.token === filter));
  const receivedList = myReceivedCapsules.filter(c => c && (filter === "all" || c.token === filter));

  return (
    <div className="min-h-screen bg-background pb-20 relative font-sans text-foreground">
      <Header isConnected={isConnected} address={address} onConnect={handleConnect} onDisconnect={() => setShowDisconnectAlert(true)} />
      <main className="mx-auto max-w-[480px] px-6 py-8">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            {/* Wallet Card */}
            <div className="mb-8 rounded-3xl bg-secondary p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm">
                  {avatar
                    ? <img src={avatar} alt="avatar" className="h-full w-full object-cover" />
                    : <div className="flex h-full w-full items-center justify-center bg-blue-100"><User className="h-6 w-6 text-primary" /></div>}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{basename || "Base User"}</h3>
                  <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    {short(address)}
                    {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-background p-4 shadow-sm">
                <span className="text-sm font-bold text-muted-foreground">Wallet Balances</span>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-xl font-black">{ethBalance}</span>
                  <span className="text-sm font-bold bg-secondary px-3 py-1 rounded-full">ETH</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xl font-black text-blue-600">{usdcBalance}</span>
                  <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-600">USDC</span>
                </div>
              </div>
            </div>

            {/* Error Banner */}
            {fetchError && (
              <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-600 font-medium flex-1">{fetchError}</p>
                <Button variant="ghost" size="sm" onClick={() => fetchCapsules(false)} className="text-red-600">Retry</Button>
              </div>
            )}

            {/* Tabs */}
            <div className="mb-6 flex rounded-full bg-secondary p-1">
              <TabButton isActive={activeTab === "received"} onClick={() => setActiveTab("received")} label="Received" />
              <TabButton isActive={activeTab === "sent"} onClick={() => setActiveTab("sent")} label="Sent" />
            </div>

            {/* Filters */}
            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FilterChip isActive={filter === "all"} onClick={() => setFilter("all")} label="All" />
              <FilterChip isActive={filter === "ETH"} onClick={() => setFilter("ETH")} label="ETH" />
              <FilterChip isActive={filter === "USDC"} onClick={() => setFilter("USDC")} label="USDC" />
            </div>

            {/* Header row */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                {activeTab === "sent" ? "Sent Gifts" : "Inbox"}
                {isBackgroundLoading && <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />}
              </h3>
              <Button variant="ghost" size="icon" onClick={() => fetchCapsules(false)} disabled={isLoadingData} className="rounded-full hover:bg-secondary">
                <RefreshCw className={cn("h-4 w-4", isLoadingData && "animate-spin")} />
              </Button>
            </div>

            {/* List */}
            <AnimatePresence mode="wait">
              {isLoadingData && sentList.length === 0 && receivedList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-2" />
                  <p>Loading on-chain data…</p>
                </div>
              ) : activeTab === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {sentList.length > 0
                    ? sentList.map(c => (
                        <CapsuleCard key={c.id} type="sent"
                          recipient={c.isRedPacket ? "Multiple Recipients" : short(c.recipient)}
                          amount={c.amount} token={c.token} unlockDate={c.unlockDate}
                          isUnlocked={c.isUnlocked} message={c.message} txHash={c.txHash} isWithdrawn={c.isWithdrawn} />
                      ))
                    : <EmptyState icon={<Gift />} title="No gifts sent" description="Create a new gift to get started." />}
                </motion.div>
              ) : (
                <motion.div key="received" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {receivedList.length > 0
                    ? receivedList.map(c => (
                        <CapsuleCard key={c.id} type="received"
                          sender={
                            c.isRedPacket
                              ? `🧧 Red Packet from ${c.isAnonymous ? "Secret" : short(c.sender)}`
                              : c.isAnonymous ? "Secret Sender" : short(c.sender)
                          }
                          amount={c.amount} token={c.token} unlockDate={c.unlockDate}
                          isUnlocked={c.isUnlocked} isWithdrawn={c.isWithdrawn}
                          message={c.message} txHash={c.txHash}
                          onClaim={c.isUnlocked && !c.isWithdrawn && !c.isRedPacket ? () => setSelectedCapsule(c) : undefined}
                          onClick={() => setSelectedCapsule(c)} />
                      ))
                    : <EmptyState icon={<Inbox />} title="Inbox Empty" description="Share your address to receive gifts." />}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
      <BottomNav />

      {selectedCapsule && (
        <GiftModal
          isOpen={!!selectedCapsule}
          onClose={() => { if (!isClaiming) { setSelectedCapsule(null); setPendingTxHash(null); } }}
          type="detail"
          gift={{
            ...selectedCapsule,
            sender: selectedCapsule.isRedPacket
              ? `🧧 Red Packet from ${selectedCapsule.isAnonymous ? "Secret" : short(selectedCapsule.sender)}`
              : selectedCapsule.isAnonymous ? "Anonymous" : short(selectedCapsule.sender),
          }}
          onClaim={handleClaim}
          isClaiming={isClaiming}
        />
      )}

      <AnimatePresence>
        {successModalData && (
          <SuccessModal isOpen onClose={() => setSuccessModalData(null)} amount={successModalData.amount} token={successModalData.token} />
        )}
      </AnimatePresence>

      <DisconnectModal isOpen={showDisconnectAlert} onClose={() => setShowDisconnectAlert(false)} onConfirm={confirmDisconnect} />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────

function FilterChip({ isActive, onClick, label }: any) {
  return (
    <button onClick={onClick}
      className={cn("rounded-full px-4 py-2 text-xs font-bold transition-colors border",
        isActive ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white border-gray-200 text-black hover:bg-gray-100")}>
      {label}
    </button>
  );
}

function TabButton({ isActive, onClick, label }: any) {
  return (
    <button onClick={onClick}
      className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200",
        isActive ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground")}>
      {label}
    </button>
  );
}

function EmptyState({ icon, title, description }: any) {
  return (
    <div className="flex flex-col items-center justify-center py-16 rounded-3xl border border-dashed border-border bg-secondary/30">
      <div className="mb-4 text-muted-foreground/50 text-4xl">{icon}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function SuccessModal({ isOpen, onClose, amount, token }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <PartyPopper className="h-10 w-10 text-blue-600 animate-bounce" />
        </div>
        <h2 className="mb-2 text-2xl font-black">Unlocked!</h2>
        <p className="mb-6 font-medium text-muted-foreground">You just claimed your gift.</p>
        <div className="mb-8 flex flex-col items-center rounded-2xl bg-secondary py-6">
          <span className="text-4xl font-black text-blue-600">{amount}</span>
          <span className="text-sm font-bold text-muted-foreground">{token}</span>
        </div>
        <Button onClick={onClose} className="h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">Close</Button>
      </motion.div>
    </div>
  );
}

function DisconnectModal({ isOpen, onClose, onConfirm }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold">Disconnect Wallet?</h3>
        <p className="mb-6 text-sm text-muted-foreground">You will need to reconnect to view your gifts.</p>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">Cancel</Button>
          <Button onClick={onConfirm} className="rounded-xl font-bold bg-red-600 hover:bg-red-700 text-white">Disconnect</Button>
        </div>
      </motion.div>
    </div>
  );
}

function NotConnectedState({ onConnect }: any) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Wallet className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-2xl font-black mb-2">Connect Wallet</h2>
      <p className="text-muted-foreground mb-8 max-w-[200px]">Connect to view your gifts.</p>
      <Button onClick={onConnect} className="h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none">Connect</Button>
    </div>
  );
}