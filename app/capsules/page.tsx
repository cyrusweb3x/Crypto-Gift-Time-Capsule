"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { Wallet, Copy, Check, Gift, Inbox, Loader2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract } from "ethers";

// --- Configuration ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const BASE_SEPOLIA_ID = "0x14a34"; // 84532
// Minimal ABI for fetching and withdrawing
const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "giftCounter",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_giftId", "type": "uint256" }],
    "name": "getGiftDetails",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "id", "type": "uint256" },
          { "internalType": "address", "name": "sender", "type": "address" },
          { "internalType": "address", "name": "recipient", "type": "address" },
          { "internalType": "address", "name": "tokenAddress", "type": "address" },
          { "internalType": "uint256", "name": "amount", "type": "uint256" },
          { "internalType": "uint256", "name": "unlockTime", "type": "uint256" },
          { "internalType": "bool", "name": "isWithdrawn", "type": "bool" },
          { "internalType": "bool", "name": "isCancelled", "type": "bool" },
          { "internalType": "string", "name": "message", "type": "string" }
        ],
        "internalType": "struct CryptoGiftCapsule.Gift",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_giftId", "type": "uint256" }],
    "name": "withdrawGift",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

type TabType = "sent" | "received";
type FilterType = "all" | "ETH" | "USDC";

// Define the shape of our capsule data
interface CapsuleData {
  id: string;
  sender?: string;
  recipient?: string;
  amount: string;
  token: "ETH" | "USDC";
  unlockDate: Date;
  isUnlocked: boolean;
  isWithdrawn: boolean; // Added to track status
  isAnonymous: boolean;
  message: string;
  txHash: string;
  nftTokenId?: string;
}

export default function CapsulesPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);

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

  // --- Wallet Connection ---
  const handleConnect = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    try {
      const _provider = new ethers.BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      const _address = await _signer.getAddress();
      const network = await _provider.getNetwork();

      if (network.chainId !== 84532n) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BASE_SEPOLIA_ID }],
          });
        } catch (e) {
          console.error("Wrong network", e);
        }
      }

      setProvider(_provider);
      setSigner(_signer);
      setAddress(_address);
      setIsConnected(true);
    } catch (error) {
      console.error("Connection Failed", error);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
    setMySentCapsules([]);
    setMyReceivedCapsules([]);
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      handleConnect();
    }
  }, []);

  // --- Fetch Data from Contract ---
  const fetchCapsules = useCallback(async () => {
    if (!provider || !address) return;

    setIsLoadingData(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      const counter = await contract.giftCounter();
      const totalGifts = Number(counter);

      const sent: CapsuleData[] = [];
      const received: CapsuleData[] = [];

      // Loop through all gifts (reverse order to show newest first)
      // Note: In production, use an Indexer (Graph) for efficiency. 
      // This loop is fine for demo/hackathon scale.
      for (let i = totalGifts; i >= 1; i--) {
        try {
          const gift = await contract.getGiftDetails(i);
          
          // gift is a Result object matching the struct
          // Struct: id, sender, recipient, tokenAddress, amount, unlockTime, isWithdrawn, isCancelled, message
          
          const gSender = gift.sender;
          const gRecipient = gift.recipient;
          
          // Filter logic
          const isSender = gSender.toLowerCase() === address.toLowerCase();
          const isRecipient = gRecipient.toLowerCase() === address.toLowerCase();

          if (!isSender && !isRecipient) continue;

          // Process Data
          const isEth = gift.tokenAddress === ethers.ZeroAddress;
          const tokenSymbol = isEth ? "ETH" : "USDC"; // Simplification for demo
          const formattedAmount = ethers.formatEther(gift.amount);
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
            isAnonymous: false, // Contract doesn't store this, defaulting to false
            message: gift.message,
            txHash: "", // Not stored in contract state, could be fetched via events if needed
            nftTokenId: gift.id.toString(), // Token ID is same as Gift ID
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

  // Trigger fetch when connected
  useEffect(() => {
    if (isConnected) {
      fetchCapsules();
    }
  }, [isConnected, fetchCapsules]);

  // --- Claim Logic ---
  const handleClaim = async () => {
    if (!selectedCapsule || !signer) return;
    
    setIsClaiming(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.withdrawGift(selectedCapsule.id);
      console.log("Claim Tx:", tx.hash);
      await tx.wait();
      
      alert("Gift successfully claimed!");
      setSelectedCapsule(null);
      fetchCapsules(); // Refresh data
    } catch (error: any) {
      console.error("Claim Error:", error);
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

  // Filter Data for UI
  const sentCapsules = mySentCapsules.filter(
    (c) => filter === "all" || c.token === filter
  );
  // For received, typically we only show Not Withdrawn ones in "Pending" or show all with status
  // Here we show all but style them differently if withdrawn
  const receivedCapsules = myReceivedCapsules.filter(
    (c) => filter === "all" || c.token === filter
  );

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
            {/* Wallet Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Wallet className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <button
                      onClick={handleCopyAddress}
                      className="flex items-center gap-2 font-mono text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {`${address.slice(0, 6)}...${address.slice(-4)}`}
                      {copied ? (
                        <Check className="h-3 w-3 text-success" />
                      ) : (
                        <Copy className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={fetchCapsules} 
                    disabled={isLoadingData}
                >
                    <RefreshCw className={cn("h-4 w-4", isLoadingData && "animate-spin")} />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary p-3">
                  <p className="text-xs text-muted-foreground">Gifts Sent</p>
                  <p className="text-lg font-semibold text-foreground">{mySentCapsules.length}</p>
                </div>
                <div className="rounded-xl bg-secondary p-3">
                  <p className="text-xs text-muted-foreground">Gifts Received</p>
                  <p className="text-lg font-semibold text-foreground">{myReceivedCapsules.length}</p>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="mb-4 flex gap-2 rounded-xl bg-secondary p-1">
              <TabButton
                isActive={activeTab === "sent"}
                onClick={() => setActiveTab("sent")}
                label="Sent"
              />
              <TabButton
                isActive={activeTab === "received"}
                onClick={() => setActiveTab("received")}
                label="Received"
              />
            </div>

            {/* Filter Chips */}
            <div className="mb-4 flex gap-2">
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

            {/* Capsules List */}
            <AnimatePresence mode="wait">
                {isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="mt-2 text-sm text-muted-foreground">Loading gifts...</p>
                    </div>
                ) : activeTab === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-3"
                >
                  {sentCapsules.length > 0 ? (
                    sentCapsules.map((capsule) => (
                      <CapsuleCard
                        key={capsule.id}
                        type="sent"
                        recipient={capsule.recipient || ""}
                        amount={capsule.amount}
                        token={capsule.token}
                        unlockDate={capsule.unlockDate}
                        isUnlocked={capsule.isUnlocked}
                        message={capsule.message}
                        txHash={capsule.txHash}
                        // For sent items, we might want to show if it was claimed
                        isWithdrawn={capsule.isWithdrawn} 
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Gift className="h-12 w-12 text-muted-foreground" />}
                      title="No gifts sent"
                      description="Send your first gift!"
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="received"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-3"
                >
                  {receivedCapsules.length > 0 ? (
                    receivedCapsules.map((capsule) => (
                      <CapsuleCard
                        key={capsule.id}
                        type="received"
                        sender={capsule.sender}
                        amount={capsule.amount}
                        token={capsule.token}
                        unlockDate={capsule.unlockDate}
                        isUnlocked={capsule.isUnlocked}
                        isWithdrawn={capsule.isWithdrawn}
                        message={capsule.message}
                        txHash={capsule.txHash}
                        onClaim={
                          // Only allow claim if unlocked AND not already withdrawn
                          (capsule.isUnlocked && !capsule.isWithdrawn)
                            ? () => setSelectedCapsule(capsule)
                            : undefined
                        }
                        onClick={() => setSelectedCapsule(capsule)}
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Inbox className="h-12 w-12 text-muted-foreground" />}
                      title="No gifts yet"
                      description="Share your address to receive gifts!"
                    />
                  )}
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
          onClose={() => {
              if(!isClaiming) setSelectedCapsule(null)
          }}
          type="detail"
          gift={{
            token: selectedCapsule.token,
            amount: selectedCapsule.amount,
            sender: selectedCapsule.sender,
            recipient: selectedCapsule.recipient,
            unlockDate: selectedCapsule.unlockDate,
            message: selectedCapsule.message,
            txHash: selectedCapsule.txHash,
            nftTokenId: selectedCapsule.nftTokenId,
            isAnonymous: selectedCapsule.isAnonymous,
            isWithdrawn: selectedCapsule.isWithdrawn,
          }}
          // If modal is open for a withdrawable gift, show claim button
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

function NotConnectedState({ onConnect }: { onConnect: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20"
      >
        <Wallet className="h-12 w-12 text-muted-foreground" />
      </motion.div>
      <h2 className="mb-2 text-xl font-semibold text-foreground">
        Connect Your Wallet
      </h2>
      <p className="mb-6 text-center text-muted-foreground">
        Connect to view your capsules
      </p>
      <Button
        onClick={onConnect}
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
      >
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    </motion.div>
  );
}

function TabButton({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative flex-1 rounded-lg py-2 text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="tab-bg"
          className="absolute inset-0 rounded-lg bg-card shadow-sm"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative">{label}</span>
    </motion.button>
  );
}

function FilterChip({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </motion.button>
  );
}

function EmptyState({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-12"
    >
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary">
        {icon}
      </div>
      <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}