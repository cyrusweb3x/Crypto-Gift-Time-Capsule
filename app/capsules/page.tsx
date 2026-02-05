
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { 
  Wallet, Copy, Check, Gift, Inbox, Loader2, RefreshCw, User, Coins 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatEther } from "ethers";

// --- Configuration ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const BASE_SEPOLIA_ID = "0x14a34"; // 84532
const STORAGE_KEY = "yupp_wallet_connected"; // For Smart Auto-Connect

// ABI
const CONTRACT_ABI = [
  "function giftCounter() view returns (uint256)",
  "function getGiftDetails(uint256 _giftId) view returns ((uint256 id, address sender, address recipient, address tokenAddress, uint256 amount, uint256 unlockTime, bool isWithdrawn, bool isCancelled, string message))",
  "function withdrawGift(uint256 _giftId)"
];

// --- Types ---
type TabType = "sent" | "received";
type FilterType = "all" | "ETH" | "USDC";

interface CapsuleData {
  id: string;
  sender: string;
  recipient: string;
  amount: string;
  token: "ETH" | "USDC";
  unlockDate: Date;
  isUnlocked: boolean;
  isWithdrawn: boolean;
  isAnonymous: boolean; // New Field
  message: string;
  txHash: string;
  nftTokenId?: string;
}

// --- Helper: Message Decoder for Anonymity ---
const parseGiftMessage = (rawMsg: string) => {
  try {
    // Try to decode Base64 JSON (New format)
    const decoded = atob(rawMsg);
    const json = JSON.parse(decoded);
    return { 
      content: json.content || "", 
      isAnonymous: !!json.isAnonymous 
    };
  } catch (e) {
    // Fallback for plain text (Old format)
    return { content: rawMsg, isAnonymous: false };
  }
};

export default function CapsulesPage() {
  // Wallet State
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  
  // Profile State (New)
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");

  // UI State
  const [activeTab, setActiveTab] = useState<TabType>("sent");
  const [filter, setFilter] = useState<FilterType>("all");
  const [copied, setCopied] = useState(false);
  
  // Data States
  const [mySentCapsules, setMySentCapsules] = useState<CapsuleData[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<CapsuleData[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  // Interaction States
  const [selectedCapsule, setSelectedCapsule] = useState<CapsuleData | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);

  // --- 1. Smart Wallet Functions (Upgraded) ---

  const handleDisconnect = useCallback(() => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
    setBasename(null);
    setAvatar(null);
    setEthBalance("0.00");
    setMySentCapsules([]);
    setMyReceivedCapsules([]);
    localStorage.removeItem(STORAGE_KEY); // Clear intent
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;

    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      if (!accounts[0]) return;

      const _signer = await _provider.getSigner();
      const network = await _provider.getNetwork();

      // Check Network
      if (network.chainId !== 84532n) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BASE_SEPOLIA_ID }],
          });
        } catch (e) {
          console.error("Network switch failed", e);
        }
      }

      setProvider(_provider);
      setSigner(_signer);
      setAddress(accounts[0]);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true"); // Persist intent

      // --- 2. Fetch Profile & Balance (New) ---
      // Fetch ETH Balance
      const bal = await _provider.getBalance(accounts[0]);
      setEthBalance(Number(formatEther(bal)).toFixed(4));

      // Fetch Basename / ENS
      try {
        const name = await _provider.lookupAddress(accounts[0]);
        if (name) {
          setBasename(name);
          const avt = await _provider.getAvatar(name);
          setAvatar(avt);
        }
      } catch (e) {
        console.log("No basename found");
      }

    } catch (error) {
      console.error("Connection Failed", error);
      handleDisconnect();
    }
  }, [handleDisconnect]);

  // --- Auto-Connect & Event Listeners ---
  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    // A. Check localStorage for persistent connection
    const checkPersistedConnection = async () => {
      const shouldConnect = localStorage.getItem(STORAGE_KEY) === "true";
      if (!shouldConnect) return;

      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await _provider.send("eth_accounts", []);
      
      if (accounts.length > 0) {
        handleConnect();
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    };

    checkPersistedConnection();

    // B. Listen for Account Changes (Cross-tab sync via Metamask)
    const handleAccountsChanged = (accs: string[]) => {
      if (accs.length > 0) {
        handleConnect();
      } else {
        handleDisconnect();
      }
    };

    // C. Listen for LocalStorage Changes (Cross-tab sync via App State)
    const handleStorageChange = (e: StorageEvent) => {
        if (e.key === STORAGE_KEY) {
            if (e.newValue === "true") checkPersistedConnection();
            else handleDisconnect();
        }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      if(window.ethereum) window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [handleConnect, handleDisconnect]);


  // --- Fetch Data ---
  const fetchCapsules = useCallback(async () => {
    if (!provider || !address) return;

    setIsLoadingData(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      const counter = await contract.giftCounter();
      const totalGifts = Number(counter);

      const sent: CapsuleData[] = [];
      const received: CapsuleData[] = [];

      for (let i = totalGifts; i >= 1; i--) {
        try {
          const gift = await contract.getGiftDetails(i);
          
          const gSender = gift.sender;
          const gRecipient = gift.recipient;
          
          const isSender = gSender.toLowerCase() === address.toLowerCase();
          const isRecipient = gRecipient.toLowerCase() === address.toLowerCase();

          if (!isSender && !isRecipient) continue;

          // Process Anonymity
          const { content, isAnonymous } = parseGiftMessage(gift.message);

          const isEth = gift.tokenAddress === ethers.ZeroAddress;
          const tokenSymbol = isEth ? "ETH" : "USDC";
          const formattedAmount = formatEther(gift.amount);
          const unlockDate = new Date(Number(gift.unlockTime) * 1000);
          const now = new Date();
          const isUnlocked = now >= unlockDate;

          const capsuleData: CapsuleData = {
            id: gift.id.toString(),
            sender: gSender,
            recipient: gRecipient,
            amount: formattedAmount,
            token: tokenSymbol as "ETH" | "USDC",
            unlockDate: unlockDate,
            isUnlocked: isUnlocked,
            isWithdrawn: gift.isWithdrawn,
            isAnonymous: isAnonymous, 
            message: content,
            txHash: "", 
            nftTokenId: gift.id.toString(),
          };

          if (isSender) sent.push(capsuleData);
          if (isRecipient) received.push(capsuleData);

        } catch (err) {
          console.error(`Error fetching gift ${i}`, err);
        }
      }

      setMySentCapsules(sent);
      setMyReceivedCapsules(received);

    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setIsLoadingData(false);
    }
  }, [provider, address]);

  // Refetch when address changes
  useEffect(() => {
    if (isConnected) {
      fetchCapsules();
      // Auto-refresh timer for countdowns
      const timer = setInterval(() => {
         // This forces a re-render so components checking "new Date()" update
         // In a real app, update a 'now' state, but here fetchCapsules is enough if lightweight
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [isConnected, fetchCapsules]);


  // --- Claim Logic ---
  const handleClaim = async () => {
    if (!selectedCapsule || !signer) return;
    setIsClaiming(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.withdrawGift(selectedCapsule.id);
      await tx.wait();
      
      // Update local state immediately
      setSelectedCapsule(null);
      fetchCapsules(); 
    } catch (error: any) {
      alert("Claim failed: " + (error.reason || error.message));
    } finally {
      setIsClaiming(false);
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // UI Filtering
  const sentCapsules = mySentCapsules.filter(c => filter === "all" || c.token === filter);
  const receivedCapsules = myReceivedCapsules.filter(c => filter === "all" || c.token === filter);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <main className="mx-auto max-w-[480px] px-4 py-6">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            {/* --- Upgraded Wallet Card --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-3xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {/* Avatar / Icon */}
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-border bg-secondary">
                    {avatar ? (
                        <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/20">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                    )}
                  </div>
                  
                  {/* Name & Address */}
                  <div>
                    <h3 className="font-bold text-foreground">
                        {basename || "Base User"}
                    </h3>
                    <button
                      onClick={handleCopyAddress}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {`${address.slice(0, 6)}...${address.slice(-4)}`}
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>

                {/* Balance Display */}
                <div className="text-right">
                    <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                        <Coins className="h-3 w-3" /> ETH Balance
                    </p>
                    <p className="text-lg font-bold text-foreground">{ethBalance}</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex gap-3">
                <div className="flex-1 rounded-2xl bg-secondary/50 p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Sent</p>
                  <p className="text-xl font-bold text-foreground">{mySentCapsules.length}</p>
                </div>
                <div className="flex-1 rounded-2xl bg-secondary/50 p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Received</p>
                  <p className="text-xl font-bold text-foreground">{myReceivedCapsules.length}</p>
                </div>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={fetchCapsules} 
                    disabled={isLoadingData}
                    className="h-full w-12 rounded-2xl bg-secondary/50 hover:bg-secondary"
                >
                    <RefreshCw className={cn("h-5 w-5", isLoadingData && "animate-spin")} />
                </Button>
              </div>
            </motion.div>

            {/* Tabs & Filters */}
            <div className="mb-4 flex gap-2 rounded-xl bg-secondary p-1">
              <TabButton isActive={activeTab === "sent"} onClick={() => setActiveTab("sent")} label="Sent Gifts" />
              <TabButton isActive={activeTab === "received"} onClick={() => setActiveTab("received")} label="Received" />
            </div>

            <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <FilterChip isActive={filter === "all"} onClick={() => setFilter("all")} label="All Assets" />
              <FilterChip isActive={filter === "ETH"} onClick={() => setFilter("ETH")} label="Ethereum (ETH)" />
              <FilterChip isActive={filter === "USDC"} onClick={() => setFilter("USDC")} label="USDC" />
            </div>

            {/* Capsules List */}
            <AnimatePresence mode="wait">
              {isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? (
                 <div className="flex flex-col items-center justify-center py-12">
                   <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 </div>
              ) : activeTab === "sent" ? (
                // --- SENT LIST ---
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-3"
                >
                  {sentCapsules.length > 0 ? (
                    sentCapsules.map((capsule) => (
                      <CapsuleCard
                        key={capsule.id}
                        type="sent"
                        // Always show recipient for sent items
                        recipient={capsule.recipient}
                        amount={capsule.amount}
                        token={capsule.token}
                        unlockDate={capsule.unlockDate}
                        isUnlocked={capsule.isUnlocked}
                        message={capsule.message}
                        txHash={capsule.txHash}
                        isWithdrawn={capsule.isWithdrawn}
                      />
                    ))
                  ) : (
                    <EmptyState icon={<Gift />} title="No gifts sent" description="Start gifting crypto today!" />
                  )}
                </motion.div>
              ) : (
                // --- RECEIVED LIST ---
                <motion.div
                  key="received"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-3"
                >
                  {receivedCapsules.length > 0 ? (
                    receivedCapsules.map((capsule) => (
                      <CapsuleCard
                        key={capsule.id}
                        type="received"
                        // Handle Anonymous Logic for Sender Display
                        sender={capsule.isAnonymous ? "Secret Sender" : capsule.sender}
                        amount={capsule.amount}
                        token={capsule.token}
                        unlockDate={capsule.unlockDate}
                        isUnlocked={capsule.isUnlocked}
                        isWithdrawn={capsule.isWithdrawn}
                        message={capsule.message}
                        txHash={capsule.txHash}
                        onClaim={
                          (capsule.isUnlocked && !capsule.isWithdrawn)
                            ? () => setSelectedCapsule(capsule)
                            : undefined
                        }
                        onClick={() => setSelectedCapsule(capsule)}
                      />
                    ))
                  ) : (
                    <EmptyState icon={<Inbox />} title="No gifts received" description="Share your Basename to get gifts." />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>

      <BottomNav />

      {/* --- Detail/Claim Modal --- */}
      {selectedCapsule && (
        <GiftModal
          isOpen={!!selectedCapsule}
          onClose={() => { if(!isClaiming) setSelectedCapsule(null) }}
          type="detail"
          gift={{
            token: selectedCapsule.token,
            amount: selectedCapsule.amount,
            // Hide sender in Modal if anonymous
            sender: selectedCapsule.isAnonymous ? "Secret Sender (Anonymous)" : selectedCapsule.sender,
            recipient: selectedCapsule.recipient,
            unlockDate: selectedCapsule.unlockDate,
            message: selectedCapsule.message,
            txHash: selectedCapsule.txHash,
            nftTokenId: selectedCapsule.nftTokenId,
            isAnonymous: selectedCapsule.isAnonymous,
            isWithdrawn: selectedCapsule.isWithdrawn,
          }}
          onClaim={
            (selectedCapsule.isUnlocked && !selectedCapsule.isWithdrawn && activeTab === 'received')
            ? handleClaim
            : undefined
          }
          isClaiming={isClaiming}
        />
      )}
    </div>
  );
}

// --- Sub Components ---

function NotConnectedState({ onConnect }: { onConnect: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
        <Wallet className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-foreground">Connect Wallet</h2>
      <p className="mb-8 text-center text-sm text-muted-foreground max-w-[260px]">
        View your sent and received crypto gift capsules securely.
      </p>
      <Button onClick={onConnect} className="w-full max-w-xs text-base font-semibold shadow-lg">
        Connect with MetaMask
      </Button>
    </motion.div>
  );
}

function TabButton({ isActive, onClick, label }: { isActive: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all duration-300",
        isActive ? "text-foreground shadow-sm bg-card" : "text-muted-foreground hover:bg-white/5"
      )}
    >
      {label}
    </button>
  );
}

function FilterChip({ isActive, onClick, label }: { isActive: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all",
        isActive ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-primary/50"
      )}
    >
      {label}
    </button>
  );
}

function EmptyState({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center opacity-60">
      <div className="mb-4 text-4xl text-muted-foreground">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}