"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { Wallet, Copy, Check, Gift, Inbox, Loader2, RefreshCw, User, Coins, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, formatEther } from "ethers";

// --- Configuration ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const BASE_SEPOLIA_ID = "0x14a34"; 
const STORAGE_KEY = "yupp_wallet_connected";

const CONTRACT_ABI = [
  "function giftCounter() view returns (uint256)",
  "function getGiftDetails(uint256 _giftId) view returns ((uint256 id, address sender, address recipient, address tokenAddress, uint256 amount, uint256 unlockTime, bool isWithdrawn, bool isCancelled, string message))",
  "function withdrawGift(uint256 _giftId)"
];

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
  isAnonymous: boolean;
  message: string;
  txHash: string;
  nftTokenId?: string;
}

// --- Helpers ---
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
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

// --- Success Modal Component ---
function SuccessModal({ isOpen, onClose, amount, token }: { isOpen: boolean; onClose: () => void; amount: string; token: string }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 text-center shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
        
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
          <PartyPopper className="h-10 w-10 text-primary animate-bounce" />
        </div>
        
        <h2 className="mb-2 text-2xl font-bold text-foreground">Congratulations!</h2>
        <p className="mb-6 text-muted-foreground">
          You have successfully claimed your gift.
        </p>
        
        <div className="mb-6 rounded-2xl bg-secondary/50 p-4 border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">Received Amount</p>
          <p className="text-3xl font-bold text-primary mt-1">
            {amount} <span className="text-lg text-foreground">{token}</span>
          </p>
        </div>

        <Button onClick={onClose} className="w-full rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/25">
          Awesome, Thanks!
        </Button>
      </motion.div>
    </div>
  );
}

export default function CapsulesPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  
  // Profile
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");

  const [activeTab, setActiveTab] = useState<TabType>("received");
  const [filter, setFilter] = useState<FilterType>("all");
  const [copied, setCopied] = useState(false);
  
  const [mySentCapsules, setMySentCapsules] = useState<CapsuleData[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<CapsuleData[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  const [selectedCapsule, setSelectedCapsule] = useState<CapsuleData | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);

  // Success Modal State
  const [successModalData, setSuccessModalData] = useState<{ amount: string, token: string } | null>(null);

  // --- Wallet Logic ---
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
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (!accounts[0]) return;

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
      setAddress(accounts[0]);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true");

      const bal = await _provider.getBalance(accounts[0]);
      setEthBalance(Number(formatEther(bal)).toFixed(4));

      try {
        const name = await _provider.lookupAddress(accounts[0]);
        if (name) {
          setBasename(name);
          const avt = await _provider.getAvatar(name);
          setAvatar(avt);
        }
      } catch (e) {}

    } catch (error) {
      console.error("Connection Failed", error);
      handleDisconnect();
    }
  }, [handleDisconnect]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;
    const checkPersisted = async () => {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        const _p = new BrowserProvider(window.ethereum);
        const accs = await _p.send("eth_accounts", []);
        if (accs.length > 0) handleConnect();
      }
    };
    checkPersisted();
    const handleAccChange = (accs: string[]) => accs.length > 0 ? handleConnect() : handleDisconnect();
    window.ethereum.on("accountsChanged", handleAccChange);
    return () => { if(window.ethereum) window.ethereum.removeListener("accountsChanged", handleAccChange); };
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

          const { content, isAnonymous } = parseGiftMessage(gift.message);
          
          // Fix: USDC Decimals
          const isEth = gift.tokenAddress === ethers.ZeroAddress;
          const tokenSymbol = isEth ? "ETH" : "USDC";
          const decimals = isEth ? 18 : 6; 
          const formattedAmount = formatUnits(gift.amount, decimals);
          
          const unlockDate = new Date(Number(gift.unlockTime) * 1000);
          const isUnlocked = new Date() >= unlockDate;
          
          const baseCapsuleData: CapsuleData = {
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

          // Logic for Sender Tab (Sender sees original message)
          if (isSender) {
            sent.push(baseCapsuleData);
          }

          // Logic for Received Tab (Hide message if locked)
          if (isRecipient) {
            const receivedData = { ...baseCapsuleData };
            // --- Message Hidden until Unlock ---
            if (!isUnlocked) {
              receivedData.message = "🔒 Message is hidden until unlocked";
            }
            received.push(receivedData);
          }
          
        } catch (err) { console.error(err); }
      }
      setMySentCapsules(sent);
      setMyReceivedCapsules(received);
    } catch (error) { console.error(error); } 
    finally { setIsLoadingData(false); }
  }, [provider, address]);

  useEffect(() => {
    if (isConnected) fetchCapsules();
  }, [isConnected, fetchCapsules]);

  // --- Claim Logic ---
  const handleClaim = async () => {
    if (!selectedCapsule || !signer) return;
    setIsClaiming(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.withdrawGift(selectedCapsule.id);
      await tx.wait();

      const claimedAmount = selectedCapsule.amount;
      const claimedToken = selectedCapsule.token;
      
      setSelectedCapsule(null); 
      
      // Trigger Success Popup
      setSuccessModalData({ amount: claimedAmount, token: claimedToken });
      
      fetchCapsules(); 
    } catch (error: any) { 
      alert("Claim failed: " + (error.reason || error.message)); 
    } 
    finally { setIsClaiming(false); }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sentCapsules = mySentCapsules.filter(c => filter === "all" || c.token === filter);
  const receivedCapsules = myReceivedCapsules.filter(c => filter === "all" || c.token === filter);

  return (
    <div className="min-h-screen bg-background pb-20 relative">
      <Header isConnected={isConnected} address={address} onConnect={handleConnect} onDisconnect={handleDisconnect} />
      <main className="mx-auto max-w-[480px] px-4 py-6">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            {/* Wallet Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 rounded-3xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-border bg-secondary">
                    {avatar ? <img src={avatar} alt="Profile" className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/20"><User className="h-6 w-6 text-primary" /></div>}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{basename || "Base User"}</h3>
                    <button onClick={handleCopyAddress} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      {shortenAddress(address)}
                      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground"><Coins className="h-3 w-3" /> ETH Balance</p>
                  <p className="text-lg font-bold text-foreground">{ethBalance}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-2xl bg-secondary/50 p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Sent</p>
                  <p className="text-xl font-bold text-foreground">{mySentCapsules.length}</p>
                </div>
                <div className="flex-1 rounded-2xl bg-secondary/50 p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Received</p>
                  <p className="text-xl font-bold text-foreground">{myReceivedCapsules.length}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={fetchCapsules} disabled={isLoadingData} className="h-full w-12 rounded-2xl bg-secondary/50 hover:bg-secondary">
                  <RefreshCw className={cn("h-5 w-5", isLoadingData && "animate-spin")} />
                </Button>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="mb-4 flex gap-2 rounded-xl bg-secondary p-1">
              <TabButton isActive={activeTab === "sent"} onClick={() => setActiveTab("sent")} label="Sent Gifts" />
              <TabButton isActive={activeTab === "received"} onClick={() => setActiveTab("received")} label="Received" />
            </div>
            <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <FilterChip isActive={filter === "all"} onClick={() => setFilter("all")} label="All Assets" />
              <FilterChip isActive={filter === "ETH"} onClick={() => setFilter("ETH")} label="Ethereum (ETH)" />
              <FilterChip isActive={filter === "USDC"} onClick={() => setFilter("USDC")} label="USDC" />
            </div>

            {/* List */}
            <AnimatePresence mode="wait">
              {isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? (
                 <div className="flex flex-col items-center justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
              ) : activeTab === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                  {sentCapsules.length > 0 ? sentCapsules.map((c) => (
                    <CapsuleCard 
                      key={c.id} 
                      type="sent" 
                      recipient={shortenAddress(c.recipient)} 
                      amount={c.amount} 
                      token={c.token} 
                      unlockDate={c.unlockDate} 
                      isUnlocked={c.isUnlocked} 
                      message={c.message} 
                      txHash={c.txHash} 
                      isWithdrawn={c.isWithdrawn} 
                    />
                  )) : <EmptyState icon={<Gift />} title="No gifts sent" description="Start gifting!" />}
                </motion.div>
              ) : (
                <motion.div key="received" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
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
                  )) : <EmptyState icon={<Inbox />} title="No gifts received" description="Share your address!" />}
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
          gift={{ ...selectedCapsule, sender: selectedCapsule.isAnonymous ? "Anonymous" : shortenAddress(selectedCapsule.sender || "") }} 
          onClaim={(selectedCapsule.isUnlocked && !selectedCapsule.isWithdrawn && activeTab === 'received') ? handleClaim : undefined} 
          isClaiming={isClaiming} 
        />
      )}

      {/* Success Modal Popup */}
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

    </div>
  );
}

// Subcomponents
function NotConnectedState({ onConnect }: { onConnect: () => void }) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Wallet className="mb-4 h-12 w-12 text-primary" />
        <h2 className="text-lg font-bold">Connect Wallet</h2>
        <Button onClick={onConnect} className="mt-4">Connect</Button>
      </div>
    );
}
function TabButton({ isActive, onClick, label }: any) {
    return <button onClick={onClick} className={cn("flex-1 py-2 text-sm font-medium rounded-lg", isActive ? "bg-card shadow text-foreground" : "text-muted-foreground")}>{label}</button>;
}
function FilterChip({ isActive, onClick, label }: any) {
    return <button onClick={onClick} className={cn("px-3 py-1 text-xs rounded-full border", isActive ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border")}>{label}</button>;
}
function EmptyState({ icon, title, description }: any) {
    return <div className="text-center py-10 opacity-50"><div className="flex justify-center mb-2 text-4xl">{icon}</div><p>{title}</p><p className="text-xs">{description}</p></div>;
}