// app/page.tsx

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { TrustSection } from "@/components/trust-section"; 
import { Lock, Diamond, Shield, Gift, ArrowRight, AlertCircle, Users } from "lucide-react";
import { ethers, BrowserProvider, Contract, formatEther, formatUnits, JsonRpcProvider } from "ethers";
import { Button } from "@/components/ui/button";
import { sdk } from "@farcaster/miniapp-sdk";
import contractAbi from "@/contractAbi.json";

// Contract Configuration 
const CONTRACT_ADDRESS = "0xC8367b5EEc810677581575594225D7409e3E68C4";
const BASE_CHAIN_ID = "0x2105"; // 8453 in hex
const BASE_CHAIN_ID_BIGINT = BigInt(8453);
const PUBLIC_RPC = "https://mainnet.base.org"; 

export default function HomePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);

  const [stats, setStats] = useState({
    giftsSent: "...",
    ethLocked: "...",
    usdcLocked: "...",
  });

  useEffect(() => {
    const initSdk = async () => {
      try {
        sdk.actions.ready();
      } catch (error) {}
    };
    initSdk();
  }, []);

  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setIsConnected(true);
        localStorage.setItem("yupp_wallet_connected", "true");
      }
    } catch (error) {}
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      if (accounts[0]) {
        const network = await provider.getNetwork();
        if (network.chainId !== BASE_CHAIN_ID_BIGINT) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: BASE_CHAIN_ID }],
            });
          } catch (error) {}
        }
        setAddress(accounts[0]);
        setIsConnected(true);
        localStorage.setItem("yupp_wallet_connected", "true");
      }
    } catch (error) {}
  }, []);

  const confirmDisconnect = useCallback(() => {
    setIsConnected(false);
    setAddress("");
    localStorage.removeItem("yupp_wallet_connected");
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("yupp_wallet_connected") === "true") checkConnection();
    if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accs: string[]) => {
            if (accs.length > 0) { setAddress(accs[0]); setIsConnected(true); } 
            else { confirmDisconnect(); }
        });
    }
  }, [checkConnection, confirmDisconnect]);

  // Read data via Event Logs bypass the private mapping restrictions
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const provider = new JsonRpcProvider(PUBLIC_RPC);
        const contract = new Contract(CONTRACT_ADDRESS, contractAbi, provider);
        
        let totalGiftsCount = 0;
        let totalEthValue = 0;
        let totalUsdcValue = 0;

        try {
            const giftCounter = await contract.giftCounter();
            const rpCounter = await contract.redPacketCounter();
            totalGiftsCount = Number(giftCounter) + Number(rpCounter);

            // Fetch creation events from recent blocks
            const blockNum = await provider.getBlockNumber();
            const startBlock = Math.max(0, blockNum - 200000); // Last few days depending on Base block speed

            const giftLogs = await contract.queryFilter(contract.filters.GiftCreated(), startBlock, "latest");
            giftLogs.forEach((log: any) => {
                const token = log.args[4];
                const amt = log.args[6];
                if (token === ethers.ZeroAddress) totalEthValue += parseFloat(formatEther(amt));
                else totalUsdcValue += parseFloat(formatUnits(amt, 6));
            });

            const rpLogs = await contract.queryFilter(contract.filters.RedPacketCreated(), startBlock, "latest");
            rpLogs.forEach((log: any) => {
                const token = log.args[2];
                const amt = log.args[3];
                if (token === ethers.ZeroAddress) totalEthValue += parseFloat(formatEther(amt));
                else totalUsdcValue += parseFloat(formatUnits(amt, 6));
            });

        } catch (e) {}

        setStats({
          giftsSent: totalGiftsCount.toString(),
          ethLocked: `${totalEthValue.toFixed(4)}`,
          usdcLocked: `${totalUsdcValue.toFixed(2)}`,
        });

      } catch (error) { 
          setStats({ giftsSent: "0", ethLocked: "0.00", usdcLocked: "0.00" });
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header isConnected={isConnected} address={address} onConnect={handleConnect} onDisconnect={() => setShowDisconnectAlert(true)} />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        <section className="mb-12 flex flex-col items-center text-center">
          <motion.div
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Gift className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-5xl font-black tracking-tighter text-foreground">
            Gift Time <br/> <span className="text-primary">Base Capsule</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-xs text-lg font-medium text-muted-foreground">
            Send time-locked crypto gifts & Red Packets that unlock in the future.
          </motion.p>
        </section>

        <section className="mb-12 grid grid-cols-3 gap-2">
            <StatCard value={stats.giftsSent} label="Created" delay={0.2} />
            <StatCard value={stats.ethLocked} label="ETH Locked" delay={0.3} />
            <StatCard value={stats.usdcLocked} label="USDC Locked" delay={0.4} />
        </section>

        <section className="mb-12 space-y-3">
          <FeatureCard icon={<Lock className="h-5 w-5" />} title="Time-Locked" description="Set exact unlock time for gifts." delay={0.2} />
          <FeatureCard icon={<Users className="h-5 w-5" />} title="Red Packets" description="Share crypto with multiple friends at once." delay={0.3} />
          <FeatureCard icon={<Diamond className="h-5 w-5" />} title="NFT Keys" description="Recipient gets a unique key." delay={0.4} />
          <FeatureCard icon={<Shield className="h-5 w-5" />} title="On-Chain" description="Trustless Base smart contracts." delay={0.5} />
        </section>

        <section className="rounded-3xl bg-secondary/50 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Transparency</h2>
          <div className="space-y-4">
             <TrustLink href={`https://basescan.org/address/${CONTRACT_ADDRESS}#code`} text="View Contract on Basescan" />
             <TrustLink href="https://github.com/cyrusweb3x/Crypto-Gift-Time-Capsule" text="View Source Code" />
          </div>
        </section>

        <TrustSection />
      </main>

      <BottomNav />
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

function FeatureCard({ icon, title, description, delay }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="group flex items-center gap-4 rounded-2xl border border-transparent bg-secondary px-5 py-4 transition-all hover:border-primary/20 hover:bg-white dark:hover:bg-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">{icon}</div>
      <div>
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function TrustLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{text}</span>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }} className="flex flex-col items-center justify-center rounded-2xl bg-secondary p-4 text-center">
      <p className="text-lg font-black text-foreground break-all">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
    </motion.div>
  );
}