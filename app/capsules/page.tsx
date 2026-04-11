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
import { ethers, BrowserProvider, Contract, formatUnits, formatEther } from "ethers";
import contractAbi from "@/contractAbi.json";

const CONTRACT_ADDRESS = "0xc160E1b43203A4d18E4069437Bc960248f91d847";
const BASE_CHAIN_ID = "0x2105";
const STORAGE_KEY = "yupp_wallet_connected";
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const ERC20_ABI = ["function balanceOf(address) view returns (uint256)"];

const parseGiftMessage = (rawMsg: string) => {
  if (!rawMsg || typeof rawMsg !== "string") 
    return { content: "", isAnonymous: false };
  try {
    const decoded = atob(rawMsg);
    const json = JSON.parse(decoded);
    return { content: json.content || "", isAnonymous: !!json.isAnonymous };
  } catch {
    return { content: rawMsg, isAnonymous: false };
  }
};

const shortenAddress = (addr: string) => {
  if (!addr || typeof addr !== "string") return "Unknown";
  if (!addr.startsWith("0x")) return addr;
  if (addr.length < 10) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

// ✅ Safe identity fetch - onchainkit crash হলেও app break করবে না
const safeGetIdentity = async (address: string) => {
  try {
    const { getName, getAvatar } = await import("@coinbase/onchainkit/identity");
    const { base } = await import("viem/chains");
    
    const name = await getName({ 
      address: address as `0x${string}`, 
      chain: base 
    });
    
    if (name) {
      const avt = await getAvatar({ ensName: name, chain: base });
      return { name, avatar: avt || null };
    }
  } catch (e) {
    console.warn("Identity lookup failed (non-critical):", e);
  }
  return { name: null, avatar: null };
};

export default function CapsulesPage() {
  const [mounted, setMounted] = useState(false); // ✅ Hydration fix
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
  const [successModalData, setSuccessModalData] = useState<{ 
    amount: string; 
    token: string 
  } | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState<string | null>(null);

  // ✅ Mounted check - SSR crash prevent করে
  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchBalances = async (acc: string, _provider: BrowserProvider) => {
    try {
      const bal = await _provider.getBalance(acc);
      setEthBalance(Number(formatEther(bal)).toFixed(4));

      const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, _provider);
      const usdcBal = await usdcContract.balanceOf(acc);
      setUsdcBalance(Number(formatUnits(usdcBal, 6)).toFixed(2));
    } catch (e) {
      console.error("Balance fetch error", e);
    }
  };

  const setupWallet = async (acc: string, _provider: BrowserProvider) => {
    try {
      const _signer = await _provider.getSigner();
      const network = await _provider.getNetwork();

      if (Number(network.chainId) !== 8453) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BASE_CHAIN_ID }],
          });
        } catch (e) {
          console.error("Chain switch error:", e);
        }
      }

      setProvider(_provider);
      setSigner(_signer);
      setAddress(acc);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true");

      await fetchBalances(acc, _provider);

      // ✅ Dynamic import দিয়ে safe identity fetch
      const { name, avatar: avt } = await safeGetIdentity(acc);
      if (name) setBasename(name);
      if (avt) setAvatar(avt);
      
    } catch (e) {
      console.error("Setup wallet error:", e);
    }
  };

  const checkConnection = useCallback(async () => {
    // ✅ SSR safety check
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await _provider.send("eth_accounts", []);
      if (accounts.length > 0) await setupWallet(accounts[0], _provider);
    } catch (e) {
      console.error("Silent connect error", e);
    }
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      if (accounts[0]) await setupWallet(accounts[0], _provider);
    } catch (error) {
      console.error("Connection Failed", error);
    }
  }, []);

  const confirmDisconnect = useCallback(() => {
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
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    // ✅ mounted check আগে
    if (!mounted) return;
    
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      checkConnection();
    }
    
    if (typeof window !== "undefined" && window.ethereum) {
      const handleAccountsChanged = (accs: string[]) => {
        if (accs.length === 0) confirmDisconnect();
        else checkConnection();
      };
      
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      
      return () => {
        window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, [mounted, checkConnection, confirmDisconnect]);

  const fetchCapsules = useCallback(
    async (isSilent = false) => {
      if (!provider || !address) return;

      if (!isSilent) setIsLoadingData(true);
      else setIsBackgroundLoading(true);

      try {
        const contract = new Contract(CONTRACT_ADDRESS, contractAbi, provider);
        const sent: any[] = [];
        const received: any[] = [];

        const fetchInBatches = async (
          total: number,
          fetchFn: (id: number) => Promise<any>,
          batchSize = 5
        ) => {
          const results: { id: number; data: any }[] = [];
          if (total <= 0) return results;

          for (let i = total; i >= 1; i -= batchSize) {
            const batch: Promise<any>[] = [];
            const batchIds: number[] = [];
            for (let j = 0; j < batchSize && i - j >= 1; j++) {
              const id = i - j;
              batchIds.push(id);
              batch.push(
                fetchFn(id).catch((err) => {
                  console.error(`Fetch error for ID ${id}:`, err);
                  return null;
                })
              );
            }
            const batchResults = await Promise.all(batch);
            batchResults.forEach((data: any, idx: number) => {
              if (data && data[0] !== ethers.ZeroAddress) {
                results.push({ id: batchIds[idx], data });
              }
            });
            if (i > batchSize) {
              await new Promise((resolve) => setTimeout(resolve, 100));
            }
          }
          return results;
        };

        // Fetch Gifts
        try {
          const totalGifts = Number(await contract.giftCounter());
          console.log("Total gifts:", totalGifts);

          if (totalGifts > 0) {
            const rawGifts = await fetchInBatches(totalGifts, (id) =>
              contract.gifts(id)
            );

            rawGifts.forEach((item) => {
              try {
                if (!item?.data) return;
                const { id, data: gift } = item;

                const sender = gift[0];
                const recipient = gift[1];
                const tokenAddr = gift[2];
                const amountRaw = gift[3];
                const unlockTime = Number(gift[4]);
                const isWithdrawn = gift[5];
                const rawMsg = gift[6] || "";

                if (!sender || sender === ethers.ZeroAddress) return;

                const isETH = tokenAddr === ethers.ZeroAddress;
                const tokenSymbol = isETH ? "ETH" : "USDC";
                const amountFormatted = isETH
                  ? formatEther(amountRaw)
                  : formatUnits(amountRaw, 6);

                const { content, isAnonymous } = parseGiftMessage(rawMsg);
                const isUnlocked = Date.now() >= unlockTime * 1000;

                const recData: any = {
                  id: `gift-${id}`,
                  sender,
                  recipient,
                  amount: amountFormatted,
                  token: tokenSymbol,
                  unlockDate: new Date(unlockTime * 1000).toISOString(),
                  isUnlocked,
                  isWithdrawn,
                  message: content,
                  realMessage: content,
                  isAnonymous,
                  isRedPacket: false,
                  txHash: "",
                };

                if (!isUnlocked) {
                  recData.message = "🔒 Message is hidden until unlocked";
                }

                if (sender.toLowerCase() === address.toLowerCase()) {
                  sent.push(recData);
                }
                if (recipient.toLowerCase() === address.toLowerCase()) {
                  received.push(recData);
                }
              } catch (err) {
                console.error("Error parsing gift:", err);
              }
            });
          }
        } catch (err) {
          console.error("Error fetching gifts:", err);
        }

        // Fetch Red Packets
        try {
          const totalRPs = Number(await contract.redPacketCounter());
          console.log("Total red packets:", totalRPs);

          if (totalRPs > 0) {
            const rawRPs = await fetchInBatches(totalRPs, (id) =>
              contract.redPackets(id)
            );

            rawRPs.forEach((item) => {
              try {
                if (!item?.data) return;
                const { id, data: rp } = item;

                const sender = rp[0];
                if (!sender || sender === ethers.ZeroAddress) return;

                const tokenAddr = rp[1];
                const totalAmountRaw = rp[2];
                const unlockTime = Number(rp[3]);
                const rawMsg = rp[4] || "";

                const isETH = tokenAddr === ethers.ZeroAddress;
                const tokenSymbol = isETH ? "ETH" : "USDC";
                const amountFormatted = isETH
                  ? formatEther(totalAmountRaw)
                  : formatUnits(totalAmountRaw, 6);

                const { content, isAnonymous } = parseGiftMessage(rawMsg);
                const isUnlocked = Date.now() >= unlockTime * 1000;

                const rpData: any = {
                  id: `rp-${id}`,
                  sender,
                  recipient: "Multiple",
                  amount: amountFormatted,
                  token: tokenSymbol,
                  unlockDate: new Date(unlockTime * 1000).toISOString(),
                  isUnlocked,
                  isWithdrawn: false,
                  message: content,
                  realMessage: content,
                  isAnonymous,
                  isRedPacket: true,
                  txHash: "",
                };

                if (!isUnlocked) {
                  rpData.message = "🔒 Message is hidden until unlocked";
                }

                if (sender.toLowerCase() === address.toLowerCase()) {
                  sent.push(rpData);
                } else {
                  received.push(rpData);
                }
              } catch (err) {
                console.error("Error parsing red packet:", err);
              }
            });
          }
        } catch (err) {
          console.error("Error fetching red packets:", err);
        }

        const sortByIdDesc = (a: any, b: any) => {
          try {
            const numA = parseInt(String(a.id).replace(/\D/g, "")) || 0;
            const numB = parseInt(String(b.id).replace(/\D/g, "")) || 0;
            return numB - numA;
          } catch {
            return 0;
          }
        };

        sent.sort(sortByIdDesc);
        received.sort(sortByIdDesc);

        setMySentCapsules(sent);
        setMyReceivedCapsules(received);
        fetchBalances(address, provider);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setIsLoadingData(false);
        setIsBackgroundLoading(false);
      }
    },
    [provider, address]
  );

  useEffect(() => {
    if (provider && address) {
      fetchCapsules();
      const interval = setInterval(() => fetchCapsules(true), 30000);
      return () => clearInterval(interval);
    }
  }, [provider, address, fetchCapsules]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const setupTimers = (capsules: any[], setCapsules: any) => {
      if (!capsules || !Array.isArray(capsules)) return;
      capsules.forEach((capsule) => {
        if (!capsule?.unlockDate) return;
        if (!capsule.isUnlocked && !capsule.isWithdrawn) {
          const timeUntilUnlock =
            new Date(capsule.unlockDate).getTime() - Date.now();
          if (timeUntilUnlock > 0 && timeUntilUnlock < 86400000) {
            const timerId = setTimeout(() => {
              setCapsules((curr: any[]) =>
                curr.map((c) =>
                  c?.id === capsule.id
                    ? { ...c, isUnlocked: true, message: c.realMessage || c.message }
                    : c
                )
              );
            }, timeUntilUnlock + 1000);
            timers.push(timerId);
          }
        }
      });
    };
    setupTimers(myReceivedCapsules, setMyReceivedCapsules);
    setupTimers(mySentCapsules, setMySentCapsules);
    return () => timers.forEach(clearTimeout);
  }, [myReceivedCapsules, mySentCapsules]);

  const handleClaim = async () => {
    if (!selectedCapsule || !signer || selectedCapsule.isRedPacket) return;

    let giftIdStr = String(selectedCapsule.id || "");
    if (giftIdStr.includes("gift-")) {
      giftIdStr = giftIdStr.replace("gift-", "");
    }

    const giftIdNum = parseInt(giftIdStr);
    if (isNaN(giftIdNum) || giftIdNum <= 0) {
      alert("Invalid gift ID");
      return;
    }

    setIsClaiming(true);
    setPendingTxHash(null);

    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);

      try {
        const giftDetails = await contract.gifts(giftIdNum);
        if (!giftDetails || giftDetails[0] === ethers.ZeroAddress) {
          alert("This gift does not exist");
          setIsClaiming(false);
          return;
        }
        if (giftDetails[5]) {
          alert("This gift was already claimed");
          setMyReceivedCapsules((prev) =>
            prev.map((c) =>
              c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
            )
          );
          setSelectedCapsule(null);
          setIsClaiming(false);
          return;
        }
      } catch (err) {
        console.log("Pre-check failed", err);
      }

      const tx = await contract.withdrawGift(BigInt(giftIdNum));
      setPendingTxHash(tx.hash);

      let receipt = null;
      const maxAttempts = 45;
      const txProvider = signer.provider || provider;

      for (let i = 0; i < maxAttempts; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        try {
          if (txProvider) {
            receipt = await txProvider.getTransactionReceipt(tx.hash);
            if (receipt) break;
          }
        } catch {
          // continue
        }
      }

      if (receipt && receipt.status === 1) {
        setMyReceivedCapsules((prev) =>
          prev.map((c) =>
            c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
          )
        );
        setSuccessModalData({
          amount: selectedCapsule.amount,
          token: selectedCapsule.token,
        });
        setSelectedCapsule(null);
        fetchCapsules(true);
      } else if (receipt && receipt.status === 0) {
        alert("Transaction failed on blockchain");
      } else {
        alert("Transaction is processing. Check your wallet and refresh.");
        setSelectedCapsule(null);
      }
    } catch (error: any) {
      console.error("Claim error:", error);
      if (error?.code === "ACTION_REJECTED") {
        alert("Transaction was rejected");
      } else if (error?.message?.includes("GiftDoesNotExist")) {
        alert("Error: Gift not found");
      } else if (error?.message?.includes("StillLocked")) {
        alert("Error: Gift is still locked");
      } else if (error?.message?.includes("AlreadyWithdrawn")) {
        alert("This gift was already claimed");
        setMyReceivedCapsules((prev) =>
          prev.map((c) =>
            c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
          )
        );
      } else if (error?.message?.includes("NotAuthorized")) {
        alert("You are not authorized to claim this gift");
      } else {
        alert(
          "Claim failed: " + (error?.reason || error?.message || "Unknown error")
        );
      }
    } finally {
      setIsClaiming(false);
      setPendingTxHash(null);
    }
  };

  const handleCopyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  // ✅ Hydration mismatch prevent করতে
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const sentCapsules = mySentCapsules.filter(
    (c) => c && (filter === "all" || c.token === filter)
  );
  const receivedCapsules = myReceivedCapsules.filter(
    (c) => c && (filter === "all" || c.token === filter)
  );

  return (
    <div className="min-h-screen bg-background pb-20 relative font-sans text-foreground">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnect}
        onDisconnect={() => setShowDisconnectAlert(true)}
      />
      <main className="mx-auto max-w-[480px] px-6 py-8">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            {/* Wallet Card */}
            <div className="mb-8 rounded-3xl bg-secondary p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-blue-100 text-primary">
                        <User className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {basename || "Base User"}
                    </h3>
                    <button
                      onClick={handleCopyAddress}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {shortenAddress(address)}
                      {copied ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-background p-4 shadow-sm">
                <span className="text-sm font-bold text-muted-foreground">
                  Wallet Balances
                </span>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-xl font-black text-foreground">
                    {ethBalance}
                  </span>
                  <span className="text-sm font-bold bg-secondary px-3 py-1 rounded-full text-foreground">
                    ETH
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xl font-black text-blue-600">
                    {usdcBalance}
                  </span>
                  <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-600">
                    USDC
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6 flex rounded-full bg-secondary p-1">
              <TabButton
                isActive={activeTab === "received"}
                onClick={() => setActiveTab("received")}
                label="Received"
              />
              <TabButton
                isActive={activeTab === "sent"}
                onClick={() => setActiveTab("sent")}
                label="Sent"
              />
            </div>

            {/* Filters */}
            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FilterChip
                isActive={filter === "all"}
                onClick={() => setFilter("all")}
                label="All"
              />
              <FilterChip
                isActive={filter === "ETH"}
                onClick={() => setFilter("ETH")}
                label="ETH"
              />
              <FilterChip
                isActive={filter === "USDC"}
                onClick={() => setFilter("USDC")}
                label="USDC"
              />
            </div>

            {/* List Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                {activeTab === "sent" ? "Sent Gifts" : "Inbox"}
                {isBackgroundLoading && (
                  <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                )}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => fetchCapsules(false)}
                disabled={isLoadingData}
                className="rounded-full hover:bg-secondary"
              >
                <RefreshCw
                  className={cn("h-4 w-4", isLoadingData && "animate-spin")}
                />
              </Button>
            </div>

            {/* Capsule List */}
            <AnimatePresence mode="wait">
              {isLoadingData &&
              sentCapsules.length === 0 &&
              receivedCapsules.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-2" />
                  <p>Loading on-chain data...</p>
                </div>
              ) : activeTab === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {sentCapsules.length > 0 ? (
                    sentCapsules.map((c) => (
                      <CapsuleCard
                        key={c.id || Math.random()}
                        type="sent"
                        recipient={
                          c.isRedPacket
                            ? c.recipient
                            : shortenAddress(c.recipient)
                        }
                        amount={c.amount}
                        token={c.token}
                        unlockDate={c.unlockDate}
                        isUnlocked={c.isUnlocked}
                        message={c.message}
                        txHash={c.txHash}
                        isWithdrawn={c.isWithdrawn}
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Gift />}
                      title="No gifts sent"
                      description="Create a new gift to get started."
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="received"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {receivedCapsules.length > 0 ? (
                    receivedCapsules.map((c) => (
                      <CapsuleCard
                        key={c.id || Math.random()}
                        type="received"
                        sender={
                          c.isRedPacket
                            ? `🧧 Red Packet from ${c.isAnonymous ? "Secret" : shortenAddress(c.sender)}`
                            : c.isAnonymous
                            ? "Secret Sender"
                            : shortenAddress(c.sender)
                        }
                        amount={c.amount}
                        token={c.token}
                        unlockDate={c.unlockDate}
                        isUnlocked={c.isUnlocked}
                        isWithdrawn={c.isWithdrawn}
                        message={c.message}
                        txHash={c.txHash}
                        onClaim={
                          c.isUnlocked && !c.isWithdrawn && !c.isRedPacket
                            ? () => setSelectedCapsule(c)
                            : undefined
                        }
                        onClick={() => setSelectedCapsule(c)}
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Inbox />}
                      title="Inbox Empty"
                      description="Share your address to receive gifts."
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
      <BottomNav />

      {/* Gift Detail Modal */}
      {selectedCapsule && (
        <GiftModal
          isOpen={!!selectedCapsule}
          onClose={() => {
            if (!isClaiming) {
              setSelectedCapsule(null);
              setPendingTxHash(null);
            }
          }}
          type="detail"
          gift={{
            ...selectedCapsule,
            sender: selectedCapsule.isRedPacket
              ? `🧧 Red Packet from ${
                  selectedCapsule.isAnonymous
                    ? "Secret"
                    : shortenAddress(selectedCapsule.sender || "")
                }`
              : selectedCapsule.isAnonymous
              ? "Anonymous"
              : shortenAddress(selectedCapsule.sender || ""),
          }}
          onClaim={handleClaim}
          isClaiming={isClaiming}
        />
      )}

      {/* Success Modal */}
      <AnimatePresence>
        {successModalData && (
          <SuccessModal
            isOpen={!!successModalData}
            onClose={() => setSuccessModalData(null)}
            amount={successModalData.amount}
            token={successModalData.token}
          />
        )}
      </AnimatePresence>

      {/* Disconnect Modal */}
      <DisconnectModal
        isOpen={showDisconnectAlert}
        onClose={() => setShowDisconnectAlert(false)}
        onConfirm={confirmDisconnect}
      />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────

function FilterChip({ isActive, onClick, label }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-bold transition-colors border",
        isActive
          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20"
          : "bg-white border-gray-200 text-black hover:bg-gray-100"
      )}
    >
      {label}
    </button>
  );
}

function SuccessModal({
  isOpen,
  onClose,
  amount,
  token,
}: {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  token: string;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <PartyPopper className="h-10 w-10 text-blue-600 animate-bounce" />
        </div>
        <h2 className="mb-2 text-2xl font-black text-foreground">Unlocked!</h2>
        <p className="mb-6 font-medium text-muted-foreground">
          You just claimed your gift.
        </p>
        <div className="mb-8 flex flex-col items-center justify-center rounded-2xl bg-secondary py-6">
          <span className="text-4xl font-black text-blue-600">{amount}</span>
          <span className="text-sm font-bold text-muted-foreground">{token}</span>
        </div>
        <Button
          onClick={onClose}
          className="h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white"
        >
          Close
        </Button>
      </motion.div>
    </div>
  );
}

function DisconnectModal({ isOpen, onClose, onConfirm }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">
          Disconnect Wallet?
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          You will need to reconnect to view your gifts.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            variant="destructive"
            className="rounded-xl font-bold bg-red-600 hover:bg-red-700"
          >
            Disconnect
          </Button>
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
      <h2 className="text-2xl font-black mb-2">Connect Wallet</h2>
      <p className="text-muted-foreground mb-8 max-w-[200px]">
        Connect Wallet to view your gifts.
      </p>
      <Button
        onClick={onConnect}
        className="h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none"
      >
        Connect
      </Button>
    </div>
  );
}

function TabButton({ isActive, onClick, label }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200",
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}

function EmptyState({ icon, title, description }: any) {
  return (
    <div className="flex flex-col items-center justify-center py-16 rounded-3xl border border-dashed border-border bg-secondary/30">
      <div className="mb-4 text-muted-foreground/50 text-4xl">{icon}</div>
      <h4 className="font-bold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}