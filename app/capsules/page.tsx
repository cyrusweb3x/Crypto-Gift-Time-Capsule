// app/capsule/page.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { Wallet, Copy, Check, Gift, Inbox, Loader2, RefreshCw, User, PartyPopper, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, formatEther } from "ethers";
import contractAbi from "@/contractAbi.json";

const CONTRACT_ADDRESS = "0x80ad25915F08Eb42423588c1872E7664D2E1Cc1c";
const BASE_SEPOLIA_ID = "0x14a34"; 
const STORAGE_KEY = "yupp_wallet_connected";

// Helpers
const parseGiftMessage = (rawMsg: string) => {
    try {
      const decoded = atob(rawMsg);
      const json = JSON.parse(decoded);
      return { content: json.content || "", isAnonymous: !!json.isAnonymous };
    } catch (e) {
      return { content: rawMsg, isAnonymous: false };
    }
  };
  
const shortenAddress = (addr: string) => {
  if (!addr || addr.length < 10) return addr;
  // If it's a generic text like "Red Packet", don't shorten it
  if (!addr.startsWith("0x")) return addr; 
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

export default function CapsulesPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");
  const [activeTab, setActiveTab] = useState<"sent" | "received">("received");
  const [filter, setFilter] = useState<"all" | "ETH" | "USDC">("all");
  const [copied, setCopied] = useState(false);
  const [mySentCapsules, setMySentCapsules] = useState<any[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState<any | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [successModalData, setSuccessModalData] = useState<{ amount: string, token: string } | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);

  // --- Wallet Connection Logic ---
  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
        const _provider = new BrowserProvider(window.ethereum);
        const accounts = await _provider.send("eth_accounts", []);
        if (accounts.length > 0) {
            setupWallet(accounts[0], _provider);
        }
    } catch (e) { console.error("Silent connect error", e); }
  }, []);

  const setupWallet = async (acc: string, _provider: BrowserProvider) => {
      const _signer = await _provider.getSigner();
      const network = await _provider.getNetwork();
      if (network.chainId !== 84532n) {
          try {
              await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: BASE_SEPOLIA_ID }],
              });
          } catch (e) { console.error(e); }
      }
      setProvider(_provider);
      setSigner(_signer);
      setAddress(acc);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true");
      
      const bal = await _provider.getBalance(acc);
      setEthBalance(Number(formatEther(bal)).toFixed(4));
      
      try {
          const name = await _provider.lookupAddress(acc);
          if (name) {
              setBasename(name);
              const avt = await _provider.getAvatar(name);
              setAvatar(avt);
          }
      } catch (e) {}
  };

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts[0]) setupWallet(accounts[0], _provider);
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
    setMySentCapsules([]);
    setMyReceivedCapsules([]);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
    if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accs: string[]) => {
            if (accs.length === 0) confirmDisconnect();
            else checkConnection();
        });
    }
  }, [checkConnection, confirmDisconnect]);

  // --- Optimized Data Fetching Logic (Gifts + Red Packets) ---
  const fetchCapsules = useCallback(async () => {
    if (!provider || !address) return;
    setIsLoadingData(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, provider);
      
      const sent: any[] = [];
      const received: any[] = [];

      // ==========================================
      // 1. Fetch Normal Gifts
      // ==========================================
      try {
          const counter = await contract.giftCounter();
          const totalGifts = Number(counter);
          const promises = [];
          for (let i = totalGifts; i >= 1; i--) promises.push(contract.getGiftDetails(i).catch(() => null));
          
          const rawGifts = await Promise.all(promises);

          rawGifts.forEach((gift: any) => {
            if (!gift) return;
            try {
              const gId = gift.id || gift[0];
              // FIX: Added 'creator' and 'from' fallback to correctly identify USDC sent via Relayer/Proxy
              const gSender = (gift.creator || gift.from || gift.sender || gift[1] || "").toString();
              const gRecipient = (gift.recipient || gift.to || gift[2] || "").toString();
              const gTokenAddress = gift.tokenAddress || gift[3];
              const gAmount = gift.amount || gift[4];
              const gUnlockTime = gift.unlockTime || gift[5];
              const gIsWithdrawn = gift.isWithdrawn ?? gift[6];
              const gMessage = gift.message || gift[8] || "";

              if (!gSender || !gRecipient) return;

              const isSender = gSender.toLowerCase() === address.toLowerCase();
              const isRecipient = gRecipient.toLowerCase() === address.toLowerCase();

              if (!isSender && !isRecipient) return;

              const { content, isAnonymous } = parseGiftMessage(gMessage);
              const isEth = gTokenAddress === ethers.ZeroAddress;
              const tokenSymbol = isEth ? "ETH" : "USDC";
              const decimals = isEth ? 18 : 6; 
              const formattedAmount = formatUnits(gAmount, decimals);
              const unlockDate = new Date(Number(gUnlockTime) * 1000);
              const isUnlocked = new Date() >= unlockDate;
              
              const baseCapsuleData = {
                id: gId.toString(),
                sender: gSender,
                recipient: gRecipient,
                amount: formattedAmount,
                token: tokenSymbol,
                unlockDate: unlockDate,
                isUnlocked: isUnlocked,
                isWithdrawn: gIsWithdrawn,
                isAnonymous: isAnonymous,
                message: content,
                realMessage: content, 
                txHash: "", 
                nftTokenId: gId.toString(),
                isRedPacket: false
              };

              if (isSender) sent.push(baseCapsuleData);
              if (isRecipient) {
                const receivedData = { ...baseCapsuleData };
                if (!isUnlocked) receivedData.message = "🔒 Message is hidden until unlocked";
                received.push(receivedData);
              }
            } catch (err) { console.error("Error processing regular gift", err); }
          });
      } catch (err) { console.error("Error fetching regular gifts", err); }

      // ==========================================
      // 2. Fetch Red Packets (Sent Data)
      // ==========================================
      try {
          if (contract.redPacketCounter && contract.getRedPacketDetails) {
              const rpCounter = await contract.redPacketCounter();
              const totalRPs = Number(rpCounter);
              const rpPromises = [];
              for (let i = totalRPs; i >= 1; i--) rpPromises.push(contract.getRedPacketDetails(i).catch(() => null));
              
              const rawRPs = await Promise.all(rpPromises);

              rawRPs.forEach((rp: any) => {
                  if (!rp) return;
                  try {
                      const rpId = rp.id || rp[0];
                      const rpSender = (rp.creator || rp.sender || rp[1] || "").toString();
                      const rpTokenAddress = rp.tokenAddress || rp[2] || ethers.ZeroAddress;
                      const rpAmount = rp.totalAmount || rp.amount || rp[3]; 
                      const rpMessage = rp.message || rp[6] || "";

                      if (!rpSender) return;

                      const isSender = rpSender.toLowerCase() === address.toLowerCase();

                      if (isSender) {
                          const { content, isAnonymous } = parseGiftMessage(rpMessage);
                          const isEth = rpTokenAddress === ethers.ZeroAddress;
                          const tokenSymbol = isEth ? "ETH" : "USDC";
                          const decimals = isEth ? 18 : 6; 
                          const formattedAmount = rpAmount ? formatUnits(rpAmount, decimals) : "0";
                          
                          sent.push({
                              id: `rp-${rpId.toString()}`,
                              sender: rpSender,
                              recipient: "Red Packet (Multiple)",
                              amount: formattedAmount,
                              token: tokenSymbol,
                              unlockDate: new Date(),
                              isUnlocked: true,
                              isWithdrawn: false, 
                              isAnonymous: isAnonymous,
                              message: content,
                              realMessage: content,
                              txHash: "",
                              isRedPacket: true
                          });
                      }
                  } catch (err) { console.error("Error processing red packet", err); }
              });
          }
      } catch (err) { console.warn("Red packet functions might not exist or differ in ABI names.", err); }

      setMySentCapsules(sent);
      setMyReceivedCapsules(received);
    } catch (error) { console.error("Fetch Error:", error); } 
    finally { setIsLoadingData(false); }
  }, [provider, address]);

  useEffect(() => {
    if (isConnected) fetchCapsules();
  }, [isConnected, fetchCapsules]);

  // --- Auto Unlock Timer Logic (Updated for both Received & Sent) ---
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const setupTimers = (capsules: any[], setCapsules: any) => {
      capsules.forEach((capsule) => {
        if (!capsule.isUnlocked && !capsule.isWithdrawn && capsule.unlockDate) {
          const now = Date.now();
          const unlockTime = new Date(capsule.unlockDate).getTime();
          const timeUntilUnlock = unlockTime - now;

          if (timeUntilUnlock > 0 && timeUntilUnlock < 86400000) {
            const timerId = setTimeout(() => {
              setCapsules((currentCapsules: any[]) =>
                currentCapsules.map((c) => {
                  if (c.id === capsule.id) {
                    return {
                      ...c,
                      isUnlocked: true,
                      message: c.realMessage || c.message,
                    };
                  }
                  return c;
                })
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

  // --- Claim Logic (Updated for Instant UI Update) ---
  const handleClaim = async () => {
    if (!selectedCapsule || !signer) return;
    setIsClaiming(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);
      const tx = await contract.withdrawGift(selectedCapsule.id);
      await tx.wait();
      
      const claimedAmount = selectedCapsule.amount;
      const claimedToken = selectedCapsule.token;
      
      // 1. Optimistic Update: সাথে সাথেই UI থেকে Claim বাটন সরিয়ে Claimed দেখানোর জন্য
      setMyReceivedCapsules((prev) => 
        prev.map((c) => c.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c)
      );

      // 2. মডাল বন্ধ করে সাকসেস মেসেজ দেখানো
      setSelectedCapsule(null); 
      setSuccessModalData({ amount: claimedAmount, token: claimedToken });
      
      // 3. ব্যালেন্স ইনস্ট্যান্ট আপডেট করা
      const bal = await provider?.getBalance(address);
      if(bal) setEthBalance(Number(formatEther(bal)).toFixed(4));

      // 4. ৩ সেকেন্ড পর ব্যাকগ্রাউন্ডে ডেটা রিফ্রেশ করা (যাতে ব্লকচেইন নোড সিঙ্ক হওয়ার সময় পায়)
      setTimeout(() => {
          fetchCapsules();
      }, 3000);

    } catch (error: any) { alert("Claim failed: " + (error.reason || error.message)); } 
    finally { setIsClaiming(false); }
  };

  const handleCopyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = address;
      textArea.style.position = "fixed"; 
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("Fallback copy failed", e);
      }
      document.body.removeChild(textArea);
    }
  };

  const sentCapsules = mySentCapsules.filter(c => filter === "all" || c.token === filter);
  const receivedCapsules = myReceivedCapsules.filter(c => filter === "all" || c.token === filter);

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
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm">
                    {avatar ? <img src={avatar} alt="Profile" className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center bg-blue-100 text-primary"><User className="h-6 w-6" /></div>}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{basename || "Base User"}</h3>
                    <button onClick={handleCopyAddress} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      {shortenAddress(address)}
                      {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-background p-4 shadow-sm">
                 <span className="text-sm font-bold text-muted-foreground">Balance</span>
                 <span className="text-xl font-black text-foreground">{ethBalance} ETH</span>
              </div>
            </div>

            {/* Controls */}
            <div className="mb-6 flex rounded-full bg-secondary p-1">
              <TabButton isActive={activeTab === "received"} onClick={() => setActiveTab("received")} label="Received" />
              <TabButton isActive={activeTab === "sent"} onClick={() => setActiveTab("sent")} label="Sent" />
            </div>

            {/* Filter Chips */}
            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FilterChip isActive={filter === "all"} onClick={() => setFilter("all")} label="All" />
              <FilterChip isActive={filter === "ETH"} onClick={() => setFilter("ETH")} label="ETH" />
              <FilterChip isActive={filter === "USDC"} onClick={() => setFilter("USDC")} label="USDC" />
            </div>

            {/* List */}
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-lg">{activeTab === "sent" ? "Sent Gifts" : "Inbox"}</h3>
               <Button variant="ghost" size="icon" onClick={fetchCapsules} disabled={isLoadingData} className="rounded-full hover:bg-secondary">
                  <RefreshCw className={cn("h-4 w-4", isLoadingData && "animate-spin")} />
                </Button>
            </div>

            <AnimatePresence mode="wait">
              {isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? (
                 <div className="flex flex-col items-center justify-center py-20 text-muted-foreground"><Loader2 className="h-8 w-8 animate-spin mb-2" /><p>Loading on-chain data...</p></div>
              ) : activeTab === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {sentCapsules.length > 0 ? sentCapsules.map((c) => (
                    <CapsuleCard 
                      key={c.id} 
                      type="sent" 
                      recipient={c.isRedPacket ? "Red Packet" : shortenAddress(c.recipient)} 
                      amount={c.amount} 
                      token={c.token} 
                      unlockDate={c.unlockDate} 
                      isUnlocked={c.isUnlocked} 
                      message={c.message} 
                      txHash={c.txHash} 
                      isWithdrawn={c.isWithdrawn} 
                    />
                  )) : <EmptyState icon={<Gift />} title="No gifts sent" description="Create a new gift to get started." />}
                </motion.div>
              ) : (
                <motion.div key="received" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {receivedCapsules.length > 0 ? receivedCapsules.map((c) => (
                    <CapsuleCard 
                      key={c.id} 
                      type="received" 
                      sender={c.isAnonymous ? "Secret Sender" : shortenAddress(c.sender)} 
                      amount={c.amount} 
                      token={c.token} 
                      unlockDate={c.unlockDate} 
                      isUnlocked={c.isUnlocked} 
                      isWithdrawn={c.isWithdrawn} 
                      message={c.message} 
                      txHash={c.txHash} 
                      onClaim={(c.isUnlocked && !c.isWithdrawn) ? () => setSelectedCapsule(c) : undefined} 
                      onClick={() => setSelectedCapsule(c)} 
                    />
                  )) : <EmptyState icon={<Inbox />} title="Inbox Empty" description="Share your address to receive gifts." />}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
      <BottomNav />
      
      {/* Detail Modal */}
      {selectedCapsule && (
        <GiftModal 
          isOpen={!!selectedCapsule} 
          onClose={() => !isClaiming && setSelectedCapsule(null)} 
          type="detail" 
          gift={{ 
            ...selectedCapsule, 
            sender: selectedCapsule.isAnonymous ? "Anonymous" : shortenAddress(selectedCapsule.sender || "") 
          }} 
          onClaim={(selectedCapsule.isUnlocked && !selectedCapsule.isWithdrawn && activeTab === 'received') ? handleClaim : undefined} 
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

      <DisconnectModal isOpen={showDisconnectAlert} onClose={() => setShowDisconnectAlert(false)} onConfirm={confirmDisconnect} />
    </div>
  );
}

// --- Subcomponents ---

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

function SuccessModal({ isOpen, onClose, amount, token }: { isOpen: boolean; onClose: () => void; amount: string; token: string }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <PartyPopper className="h-10 w-10 text-blue-600 animate-bounce" />
          </div>
          <h2 className="mb-2 text-2xl font-black text-foreground">Unlocked!</h2>
          <p className="mb-6 font-medium text-muted-foreground">You just claimed your gift.</p>
          <div className="mb-8 flex flex-col items-center justify-center rounded-2xl bg-secondary py-6">
            <span className="text-4xl font-black text-blue-600">{amount}</span>
            <span className="text-sm font-bold text-muted-foreground">{token}</span>
          </div>
          <Button onClick={onClose} className="h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
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
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">Disconnect Wallet?</h3>
                <p className="mb-6 text-sm text-muted-foreground">You will need to reconnect to view your gifts.</p>
                <div className="grid grid-cols-2 gap-3">
                    <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">Cancel</Button>
                    <Button onClick={onConfirm} variant="destructive" className="rounded-xl font-bold bg-red-600 hover:bg-red-700">Disconnect</Button>
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
        <p className="text-muted-foreground mb-8 max-w-[200px]">Connect Wallet to view your gifts.</p>
        <Button onClick={onConnect} className="h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none">Connect</Button>
      </div>
    );
}

function TabButton({ isActive, onClick, label }: any) {
    return (
        <button onClick={onClick} className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", isActive ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground")}>
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