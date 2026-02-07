// app/page.tsx

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { Lock, Diamond, Shield, Gift, ArrowRight } from "lucide-react";
import { ethers, BrowserProvider, Contract, formatEther, JsonRpcProvider } from "ethers";

// Contract Configuration
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const BASE_SEPOLIA_ID = "0x14a34"; // Chain ID 84532
const PUBLIC_RPC = "https://sepolia.base.org"; // Public RPC for stats

// ABI
const CONTRACT_ABI = [
  "function giftCounter() view returns (uint256)",
  "function getGiftDetails(uint256 _giftId) view returns ((uint256 id, address sender, address recipient, address tokenAddress, uint256 amount, uint256 unlockTime, bool isWithdrawn, bool isCancelled, string message))"
];

export default function HomePage() {
  // --- Wallet State ---
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  // --- Stats State ---
  const [stats, setStats] = useState({
    giftsSent: "...",
    valueLocked: "...",
    activeUsers: "...",
  });

  // --- Wallet Logic (Unified with other pages) ---
  const handleDisconnect = useCallback(() => {
    setIsConnected(false);
    setAddress("");
    localStorage.removeItem("yupp_wallet_connected"); // Using same key as other pages
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      if (accounts[0]) {
        const network = await provider.getNetwork();
        if (network.chainId !== 84532n) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: BASE_SEPOLIA_ID }],
            });
          } catch (error) {
            console.error("Chain switch error", error);
          }
        }
        setAddress(accounts[0]);
        setIsConnected(true);
        localStorage.setItem("yupp_wallet_connected", "true");
      }
    } catch (error) {
      console.error("Connection Failed", error);
    }
  }, []);

  // Check connection on load
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("yupp_wallet_connected") === "true") {
      handleConnect();
    }
    
    // Listen for account changes
    if (typeof window !== "undefined" && window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts: string[]) => {
            if (accounts.length > 0) {
                setAddress(accounts[0]);
                setIsConnected(true);
            } else {
                handleDisconnect();
            }
        });
    }
  }, [handleConnect, handleDisconnect]);


  // --- Stats Fetching Logic ---
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const provider = new JsonRpcProvider(PUBLIC_RPC);
        const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        const counter = await contract.giftCounter();
        const totalGifts = Number(counter);

        let totalEthValue = 0;
        const uniqueUsers = new Set();
        
        // Fetch last 50 gifts for quicker stats, or all if small number (Optimization)
        const fetchLimit = totalGifts; 
        const promises = [];
        
        for (let i = 1; i <= fetchLimit; i++) {
          promises.push(contract.getGiftDetails(i));
        }
        
        const results = await Promise.all(promises);

        results.forEach((gift) => {
          uniqueUsers.add(gift.sender);
          uniqueUsers.add(gift.recipient);
          
          // Sum only ETH values
          if (gift.tokenAddress === ethers.ZeroAddress) {
            totalEthValue += parseFloat(formatEther(gift.amount));
          }
        });

        setStats({
          giftsSent: totalGifts.toString(),
          valueLocked: `${totalEthValue.toFixed(4)} ETH`,
          activeUsers: uniqueUsers.size.toString(),
        });

      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header 
        isConnected={isConnected} 
        address={address} 
        onConnect={handleConnect} 
        onDisconnect={handleDisconnect} 
      />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12 flex flex-col items-center text-center">
          <motion.div
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Gift className="h-10 w-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-black tracking-tighter text-foreground"
          >
            Gift Time <br/> <span className="text-primary">Capsule</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xs text-lg font-medium text-muted-foreground"
          >
            Send crypto gifts that unlock in the future. Secured on Base.
          </motion.p>
        </section>

        {/* Real-time Stats */}
        <section className="mb-12 grid grid-cols-3 gap-2">
            <StatCard value={stats.giftsSent} label="Gifts" delay={0.2} />
            <StatCard value={stats.valueLocked} label="Locked" delay={0.3} />
            <StatCard value={stats.activeUsers} label="Users" delay={0.4} />
        </section>

        {/* Feature Cards */}
        <section className="mb-12 space-y-3">
          <FeatureCard
            icon={<Lock className="h-5 w-5" />}
            title="Time-Locked"
            description="Set exact unlock time."
            delay={0.2}
          />
          <FeatureCard
            icon={<Diamond className="h-5 w-5" />}
            title="NFT Keys"
            description="Recipient gets a unique key."
            delay={0.3}
          />
          <FeatureCard
            icon={<Shield className="h-5 w-5" />}
            title="On-Chain"
            description="Trustless smart contracts."
            delay={0.4}
          />
        </section>

        {/* Trust Section */}
        <section className="rounded-3xl bg-secondary/50 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Transparency
          </h2>
          <div className="space-y-4">
             <TrustLink 
              href={`https://base-sepolia.blockscout.com/address/${CONTRACT_ADDRESS}`} 
              text="View Contract on Blockscout"
            />
            <TrustLink 
              href="https://github.com/cyrusweb3x/Crypto-Gift-Time-Capsule" 
              text="View Source Code" 
            />
            <TrustLink 
              href="#" 
              text="Security Audit (Coming Soon)" 
            />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

// --- Sub Components ---

function FeatureCard({ icon, title, description, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group flex items-center gap-4 rounded-2xl border border-transparent bg-secondary px-5 py-4 transition-all hover:border-primary/20 hover:bg-white dark:hover:bg-card"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function TrustLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between group"
    >
      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{text}</span>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="flex flex-col items-center justify-center rounded-2xl bg-secondary p-4 text-center"
    >
      <p className="text-lg font-black text-foreground break-all">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
    </motion.div>
  );
}