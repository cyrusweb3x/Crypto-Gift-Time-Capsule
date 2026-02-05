// app/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { Lock, Diamond, Shield, ExternalLink, Gift, FileText, Github, ArrowRight } from "lucide-react";
import { createPublicClient, http, formatEther } from "viem";
import { baseSepolia } from "viem/chains";

// Contract Configuration
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";

// Minimal ABI
const CAPSULE_ABI = [
  {
    inputs: [],
    name: "getAllCapsules",
    outputs: [
      {
        components: [
          { name: "id", type: "string" },
          { name: "sender", type: "address" },
          { name: "recipient", type: "address" },
          { name: "unlockDate", type: "uint256" },
          { name: "amount", type: "uint256" },
          { name: "isUnlocked", type: "bool" },
          { name: "isCanceled", type: "bool" },
        ],
        internalType: "struct TimeCapsule.CapsuleData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export default function HomePage() {
  const [stats, setStats] = useState({
    giftsSent: "...",
    valueLocked: "...",
    activeUsers: "...",
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const client = createPublicClient({
          chain: baseSepolia,
          transport: http(),
        });

        const data = (await client.readContract({
          address: CONTRACT_ADDRESS,
          abi: CAPSULE_ABI,
          functionName: "getAllCapsules",
        })) as any[];

        if (data) {
          const totalGifts = data.length;
          const totalValueWei = data.reduce(
            (acc, curr) => acc + BigInt(curr.amount),
            BigInt(0)
          );
          const totalValueEth = formatEther(totalValueWei);
          const formattedValue = parseFloat(totalValueEth).toFixed(4);
          const uniqueUsers = new Set();
          data.forEach((capsule) => {
            uniqueUsers.add(capsule.sender);
            uniqueUsers.add(capsule.recipient);
          });

          setStats({
            giftsSent: totalGifts.toString(),
            valueLocked: `${formattedValue} ETH`,
            activeUsers: uniqueUsers.size.toString(),
          });
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        {/* Hero Section - Base Style: Clean, Big Type */}
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

        {/* Real-time Stats - Base Style: Flat Cards */}
        <section className="mb-12 grid grid-cols-3 gap-2">
            <StatCard value={stats.giftsSent} label="Gifts" delay={0.2} />
            <StatCard value={stats.valueLocked} label="Locked" delay={0.3} />
            <StatCard value={stats.activeUsers} label="Users" delay={0.4} />
        </section>

        {/* Feature Cards - Base Style: Minimal borders */}
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

        {/* Trust Section - Base Style: Clean Links */}
        <section className="rounded-3xl bg-secondary/50 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Transparency
          </h2>
          <div className="space-y-4">
             <TrustLink 
              href="https://base-sepolia.blockscout.com/address/0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc" 
              text="View Contract on Blockscout"
            />
            <TrustLink 
              href="https://github.com/cyrusweb3x/Crypto-Gift-Time-Capsule" 
              text="View Source Code" 
            />
            <TrustLink 
              href="https://drive.google.com/file/d/14U56v5iqSL2GM2349a1xseV0v8Z-oITo/view?usp" 
              text="Security Audit" 
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