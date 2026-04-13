"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Copy,
  Check,
  Gift,
  Inbox,
  Loader2,
  RefreshCw,
  User,
  PartyPopper,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ethers,
  BrowserProvider,
  Contract,
  formatUnits,
  formatEther,
} from "ethers";
import contractAbi from "@/contractAbi.json";
import { appendBuilderCode } from "@/lib/builderCode";

// ─── Constants ────────────────────────────────────────────────────────────────
const CONTRACT_ADDRESS = "0xc160E1b43203A4d18E4069437Bc960248f91d847";
const BASE_CHAIN_ID = "0x2105";
const STORAGE_KEY = "yupp_wallet_connected";
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const ERC20_ABI = ["function balanceOf(address) view returns (uint256)"] as const;
const BATCH_SIZE = 5;
const BATCH_DELAY_MS = 80;
const POLL_INTERVAL_MS = 30_000;
const TX_POLL_RETRIES = 45;
const TX_POLL_DELAY_MS = 2_000;
const ZERO_BIG = BigInt(0);

// ─── Types ────────────────────────────────────────────────────────────────────
type FilterType = "all" | "ETH" | "USDC";
type TabType = "sent" | "received";

interface ParsedMessage {
  content: string;
  isAnonymous: boolean;
}

interface Capsule {
  id: string;
  sender: string;
  recipient: string;
  amount: string;
  token: "ETH" | "USDC";
  unlockDate: Date;
  isUnlocked: boolean;
  isWithdrawn: boolean;
  message: string;
  realMessage: string;
  isAnonymous: boolean;
  isRedPacket: boolean;
  isCancelled?: boolean;
  txHash: string;
  isMine: boolean;
  isForMe: boolean;
}

interface SuccessData {
  amount: string;
  token: string;
}

interface Identity {
  name: string | null;
  avatar: string | null;
}

// ─── Pure Helpers ─────────────────────────────────────────────────────────────
const safeParseMessage = (rawMsg: unknown): ParsedMessage => {
  try {
    if (!rawMsg || typeof rawMsg !== "string" || !rawMsg.trim()) {
      return { content: "", isAnonymous: false };
    }
    try {
      const decoded = atob(rawMsg.trim());
      try {
        const json = JSON.parse(decoded) as Record<string, unknown>;
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

const safeFormatEther = (val: unknown): string => {
  try {
    if (val === null || val === undefined) return "0";
    return formatEther(val as Parameters<typeof formatEther>[0]);
  } catch {
    try {
      return String(Number(val) / 1e18);
    } catch {
      return "0";
    }
  }
};

const safeFormatUnits = (val: unknown, dec: number): string => {
  try {
    if (val === null || val === undefined) return "0";
    return formatUnits(val as Parameters<typeof formatUnits>[0], dec);
  } catch {
    try {
      return String(Number(val) / Math.pow(10, dec));
    } catch {
      return "0";
    }
  }
};

const isZeroAddress = (addr: unknown): boolean => {
  try {
    if (!addr || typeof addr !== "string") return true;
    return (
      addr === ethers.ZeroAddress ||
      addr === "0x0000000000000000000000000000000000000000"
    );
  } catch {
    return true;
  }
};

const shortAddress = (addr: unknown): string => {
  try {
    if (!addr || typeof addr !== "string") return "Unknown";
    if (!addr.startsWith("0x")) return String(addr);
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  } catch {
    return "Unknown";
  }
};

const safeUnlockDate = (unlockTime: number): Date => {
  try {
    const ms = unlockTime * 1000;
    const d = new Date(ms);
    if (isNaN(d.getTime())) return new Date(Date.now() + 86_400_000);
    return d;
  } catch {
    return new Date(Date.now() + 86_400_000);
  }
};

const delay = (ms: number): Promise<void> =>
  new Promise((r) => setTimeout(r, ms));

const byIdDesc = (a: Capsule, b: Capsule): number => {
  const na = parseInt(a.id.replace(/\D/g, ""), 10) || 0;
  const nb = parseInt(b.id.replace(/\D/g, ""), 10) || 0;
  return nb - na;
};

// ─── Identity ─────────────────────────────────────────────────────────────────
const safeGetIdentity = async (address: string): Promise<Identity> => {
  try {
    const { getName, getAvatar } = await import("@coinbase/onchainkit/identity");
    const { base } = await import("viem/chains");
    const name = await getName({
      address: address as `0x${string}`,
      chain: base,
    });
    if (name) {
      const avt = await getAvatar({ ensName: name, chain: base });
      return { name, avatar: avt ?? null };
    }
  } catch {
    // silently fail — identity is non-critical
  }
  return { name: null, avatar: null };
};

// ─── Parsers ──────────────────────────────────────────────────────────────────
const parseGift = (
  id: number,
  g: unknown[],
  myAddress: string
): Capsule | null => {
  try {
    const sender = String(g[0] ?? "");
    const recipient = String(g[1] ?? "");
    const tokenAddr = String(g[2] ?? "");
    const amountRaw = g[3] ?? ZERO_BIG;
    const unlockTime = Number(g[4] ?? 0);
    const isWithdrawn = Boolean(g[5]);
    const rawMsg = String(g[6] ?? "");
    const isAnon = Boolean(g[7]);

    if (isZeroAddress(sender)) return null;

    const isETH = isZeroAddress(tokenAddr);
    const token: "ETH" | "USDC" = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(amountRaw)
      : safeFormatUnits(amountRaw, 6);

    const { content } = safeParseMessage(rawMsg);
    const unlockDateObj = safeUnlockDate(unlockTime);
    const isUnlocked = Date.now() >= unlockDateObj.getTime();
    const me = myAddress.toLowerCase();

    return {
      id: `gift-${id}`,
      sender,
      recipient,
      amount,
      token,
      unlockDate: unlockDateObj,
      isUnlocked,
      isWithdrawn,
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: false,
      txHash: "",
      isMine: sender.toLowerCase() === me,
      isForMe: recipient.toLowerCase() === me,
    };
  } catch (err) {
    console.error(`parseGift #${id} failed:`, err);
    return null;
  }
};

const parseRedPacket = (
  id: number,
  rp: unknown[],
  myAddress: string
): Capsule | null => {
  try {
    const creator = String(rp[1] ?? "");
    const tokenAddr = String(rp[2] ?? "");
    const totalAmt = rp[3] ?? ZERO_BIG;
    const unlockTime = Number(rp[7] ?? 0);
    const isAnon = Boolean(rp[9]);
    const isCancelled = Boolean(rp[10]);
    const rawMsg = String(rp[11] ?? "");

    if (isZeroAddress(creator)) return null;

    const isETH = isZeroAddress(tokenAddr);
    const token: "ETH" | "USDC" = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(totalAmt)
      : safeFormatUnits(totalAmt, 6);

    const { content } = safeParseMessage(rawMsg);
    const unlockDateObj = safeUnlockDate(unlockTime);
    const isUnlocked = Date.now() >= unlockDateObj.getTime();
    const me = myAddress.toLowerCase();

    return {
      id: `rp-${id}`,
      sender: creator,
      recipient: "Multiple",
      amount,
      token,
      unlockDate: unlockDateObj,
      isUnlocked,
      isWithdrawn: isCancelled,
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: true,
      isCancelled,
      txHash: "",
      isMine: creator.toLowerCase() === me,
      isForMe: creator.toLowerCase() !== me,
    };
  } catch (err) {
    console.error(`parseRedPacket #${id} failed:`, err);
    return null;
  }
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CapsulesPage() {
  const [mounted, setMounted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<Awaited<
    ReturnType<BrowserProvider["getSigner"]>
  > | null>(null);
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");
  const [usdcBalance, setUsdcBalance] = useState("0.00");
  const [activeTab, setActiveTab] = useState<TabType>("received");
  const [filter, setFilter] = useState<FilterType>("all");
  const [copied, setCopied] = useState(false);
  const [mySentCapsules, setMySentCapsules] = useState<Capsule[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<Capsule[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [successModalData, setSuccessModalData] = useState<SuccessData | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const providerRef = useRef(provider);
  const addressRef = useRef(address);
  useEffect(() => { providerRef.current = provider; }, [provider]);
  useEffect(() => { addressRef.current = address; }, [address]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchBalances = useCallback(
    async (acc: string, _p: BrowserProvider): Promise<void> => {
      try {
        const [bal, ub] = await Promise.all([
          _p.getBalance(acc),
          new Contract(USDC_ADDRESS, ERC20_ABI, _p).balanceOf(acc) as Promise<bigint>,
        ]);
        setEthBalance(Number(formatEther(bal)).toFixed(4));
        setUsdcBalance(Number(formatUnits(ub, 6)).toFixed(2));
      } catch (e) {
        console.error("Balance fetch error:", e);
      }
    },
    []
  );

  const setupWallet = useCallback(
    async (acc: string, _p: BrowserProvider): Promise<void> => {
      try {
        const [_s, net] = await Promise.all([
          _p.getSigner(),
          _p.getNetwork(),
        ]);

        if (Number(net.chainId) !== 8453) {
          try {
            await window.ethereum?.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: BASE_CHAIN_ID }],
            });
          } catch (e) {
            console.error("Chain switch error:", e);
          }
        }

        setProvider(_p);
        setSigner(_s);
        setAddress(acc);
        setIsConnected(true);
        localStorage.setItem(STORAGE_KEY, "true");

        void fetchBalances(acc, _p);
        void safeGetIdentity(acc).then(({ name, avatar: avt }) => {
          if (name) setBasename(name);
          if (avt) setAvatar(avt);
        });
      } catch (e) {
        console.error("setupWallet error:", e);
      }
    },
    [fetchBalances]
  );

  const checkConnection = useCallback(async (): Promise<void> => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = (await _p.send("eth_accounts", [])) as string[];
      if (accs.length > 0) await setupWallet(accs[0], _p);
    } catch (e) {
      console.error("checkConnection error:", e);
    }
  }, [setupWallet]);

  const handleConnect = useCallback(async (): Promise<void> => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      if (accs[0]) await setupWallet(accs[0], _p);
    } catch (e) {
      console.error("handleConnect error:", e);
    }
  }, [setupWallet]);

  const confirmDisconnect = useCallback((): void => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
    setBasename(null);
    setAvatar(null);
    setEthBalance("0.00");
    setUsdcBalance("0.00");
    setMySentCapsules([]);
    setMyReceivedCapsules([]);
    setFetchError(null);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      void checkConnection();
    }
    if (typeof window === "undefined" || !window.ethereum) return;
    const onChange = (accs: string[]): void => {
      if (accs.length === 0) confirmDisconnect();
      else void checkConnection();
    };
    window.ethereum.on("accountsChanged", onChange);
    return () => {
      window.ethereum?.removeListener("accountsChanged", onChange);
    };
  }, [mounted, checkConnection, confirmDisconnect]);

  const fetchCapsules = useCallback(
    async (isSilent = false): Promise<void> => {
      const _p = providerRef.current;
      const _addr = addressRef.current;
      if (!_p || !_addr) return;
      if (!isSilent) setIsLoadingData(true);
      else setIsBackgroundLoading(true);
      setFetchError(null);
      try {
        const contract = new Contract(CONTRACT_ADDRESS, contractAbi, _p);
        const sent: Capsule[] = [];
        const received: Capsule[] = [];

        try {
          const totalGifts = Number(await contract.giftCounter());
          for (let i = totalGifts; i >= 1; i -= BATCH_SIZE) {
            const batch = Array.from({ length: Math.min(BATCH_SIZE, i) }, (_, j) => {
              const gid = i - j;
              return contract.gifts(gid).then((g: unknown) => ({ gid, data: g })).catch(() => null);
            });
            const results = await Promise.all(batch);
            for (const res of results) {
              if (!res) continue;
              const parsed = parseGift(res.gid, res.data as unknown[], _addr);
              if (!parsed) continue;
              if (parsed.isMine) sent.push(parsed);
              if (parsed.isForMe) received.push(parsed);
            }
            if (i > BATCH_SIZE) await delay(BATCH_DELAY_MS);
          }
        } catch (err) { console.error("Gifts fetch error:", err); }

        try {
          const totalRPs = Number(await contract.redPacketCounter());
          for (let i = totalRPs; i >= 1; i -= BATCH_SIZE) {
            const batch = Array.from({ length: Math.min(BATCH_SIZE, i) }, (_, j) => {
              const rid = i - j;
              return contract.redPackets(rid).then((rp: unknown) => ({ rid, data: rp })).catch(() => null);
            });
            const results = await Promise.all(batch);
            for (const res of results) {
              if (!res) continue;
              const parsed = parseRedPacket(res.rid, res.data as unknown[], _addr);
              if (!parsed) continue;
              if (parsed.isMine) sent.push(parsed);
              if (parsed.isForMe) received.push(parsed);
            }
            if (i > BATCH_SIZE) await delay(BATCH_DELAY_MS);
          }
        } catch (err) { console.error("RPs fetch error:", err); }

        setMySentCapsules(sent);
        setMyReceivedCapsules(received);
      } catch (err) {
        console.error("Fetch capsules failed:", err);
        setFetchError("Could not update capsules. Please try again.");
      } finally {
        setIsLoadingData(false);
        setIsBackgroundLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isConnected && address) {
      void fetchCapsules(false);
      const intv = setInterval(() => void fetchCapsules(true), POLL_INTERVAL_MS);
      return () => clearInterval(intv);
    }
  }, [isConnected, address, fetchCapsules]);

  
  const handleClaim = async (): Promise<void> => {
    if (!selectedCapsule || !signer || selectedCapsule.isRedPacket) return;
    setIsClaiming(true);
    setPendingTxHash(null);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);
      const giftId = selectedCapsule.id.split("-")[1];
      const tx = await contract.claimGift(giftId);
      setPendingTxHash(tx.hash);
      const receipt = await tx.wait();

      if (receipt?.status === 1) {
        setMyReceivedCapsules((p) =>
          p.map((c) => (c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c))
        );
        setSuccessModalData({
          amount: selectedCapsule.amount,
          token: selectedCapsule.token,
        });
        setSelectedCapsule(null);
        
        
        await delay(4000);
        void fetchCapsules(true);
      }
    } catch (e) {
      console.error("Claim error:", e);
    } finally {
      setIsClaiming(false);
    }
  };

  if (!mounted) return null;

  const filtered = (activeTab === "received" ? myReceivedCapsules : mySentCapsules).filter(
    (c) => filter === "all" || c.token === filter
  );

  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header isConnected={isConnected} address={address} onDisconnect={() => setShowDisconnectAlert(true)} />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        {isConnected ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center justify-between rounded-3xl bg-card p-6 shadow-sm border border-border/50">
              <div className="flex items-center gap-4">
                
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm flex items-center justify-center">
                  {avatar ? (
                    <img src={avatar} alt="avatar" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-blue-100">
                       <span className="text-xl font-black text-primary uppercase">{basename ? basename.substring(0,1) : <User className="h-6 w-6" />}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{basename || "Base User"}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <span>{shortAddress(address)}</span>
                    <button onClick={() => { navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <NotConnectedState onConnect={handleConnect} />
        )}

        {isConnected && (
          <div className="space-y-6">
            <div className="flex rounded-2xl bg-secondary p-1 border border-border/50">
              {(["received", "sent"] as TabType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={cn(
                    "flex-1 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 capitalize",
                    activeTab === t ? "bg-white text-black shadow-sm" : "text-muted-foreground"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid gap-4">
              {isLoadingData ? (
                <div className="flex flex-col items-center py-20 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-4 text-primary/40" />
                  <p className="text-sm font-bold">Fetching Capsules...</p>
                </div>
              ) : filtered.length > 0 ? (
                filtered.sort(byIdDesc).map((c) => (
                  <CapsuleCard
                    key={c.id}
                    type={activeTab}
                    amount={c.amount}
                    token={c.token}
                    unlockDate={c.unlockDate}
                    isUnlocked={c.isUnlocked}
                    isWithdrawn={c.isWithdrawn}
                    message={c.message}
                    
                    sender={
                      c.isRedPacket 
                        ? `🧧 Red Packet from ${c.isAnonymous ? "Secret" : shortAddress(c.sender)}` 
                        : (c.isAnonymous ? "Secret Sender" : shortAddress(c.sender))
                    }
                    recipient={shortAddress(c.recipient)}
                    
                    onClaim={
                      activeTab === "received" && c.isUnlocked && !c.isWithdrawn && !c.isRedPacket
                        ? () => setSelectedCapsule(c)
                        : undefined
                    }
                    onClick={() => setSelectedCapsule(c)}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                  <Inbox className="h-12 w-12 mb-4" />
                  <p className="font-bold text-lg italic">Empty Box</p>
                </div>
              )}
            </div>
          </div>
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
              ? `🧧 Red Packet from ${selectedCapsule.isAnonymous ? "Secret" : shortAddress(selectedCapsule.sender)}` 
              : (selectedCapsule.isAnonymous ? "Secret Sender" : shortAddress(selectedCapsule.sender)),
          }}
          
          onClaim={(!selectedCapsule.isWithdrawn && selectedCapsule.isUnlocked && !selectedCapsule.isRedPacket) ? handleClaim : undefined}
          isClaiming={isClaiming}
        />
      )}

      {successModalData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-sm rounded-[2.5rem] bg-card p-10 text-center border-2 border-primary/20 shadow-2xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PartyPopper className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-black mb-3">Claimed!</h2>
            <p className="text-muted-foreground mb-8 font-medium">Successfully withdrawn {successModalData.amount} {successModalData.token}.</p>
            <Button onClick={() => setSuccessModalData(null)} className="w-full h-14 rounded-2xl font-black text-lg">Awesome!</Button>
          </motion.div>
        </div>
      )}

      <DisconnectModal isOpen={showDisconnectAlert} onClose={() => setShowDisconnectAlert(false)} onConfirm={confirmDisconnect} />
    </div>
  );
}

function DisconnectModal({ isOpen, onClose, onConfirm }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold">Disconnect Wallet?</h3>
        <p className="mb-6 text-sm text-muted-foreground font-medium">You will need to reconnect to view your gifts.</p>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">Cancel</Button>
          <Button onClick={onConfirm} className="rounded-xl font-bold bg-red-600 hover:bg-red-700 text-white">Disconnect</Button>
        </div>
      </motion.div>
    </div>
  );
}

function NotConnectedState({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Wallet className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-2xl font-black mb-2 tracking-tight">Connect Wallet</h2>
      <p className="text-muted-foreground mb-8 max-w-[240px] font-medium text-sm">Connect your wallet to see your received and sent capsules.</p>
      <Button onClick={onConnect} className="rounded-full px-10 h-14 font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">Connect Now</Button>
    </div>
  );
}