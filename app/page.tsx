// app/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { Lock, Diamond, Shield, ExternalLink, Gift, FileText, Github } from "lucide-react";
import { createPublicClient, http, formatEther } from "viem";
import { baseSepolia } from "viem/chains";

// Contract Configuration
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";

// Minimal ABI to fetch capsules
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
  // State for Real-time stats
  const [stats, setStats] = useState({
    giftsSent: "...",
    valueLocked: "...",
    activeUsers: "...",
  });

  // Fetch Real-time Data from Blockchain
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
          // 1. Total Gifts
          const totalGifts = data.length;

          // 2. Value Locked (Sum of all amounts)
          const totalValueWei = data.reduce(
            (acc, curr) => acc + BigInt(curr.amount),
            BigInt(0)
          );
          // Convert Wei to ETH and format
          const totalValueEth = formatEther(totalValueWei);
          const formattedValue = parseFloat(totalValueEth).toFixed(4); // Show 4 decimal places

          // 3. Active Users (Unique Senders + Recipients)
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
        // Fallback or keep "..."
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header without connect logic props */}
      <Header />

      <main className="mx-auto max-w-[480px] px-4 py-6">
        {/* Hero Section */}
        <section className="mb-10 text-center">
          <motion.div
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 40px rgba(0,82,255,0.3)",
                "0 0 60px rgba(0,82,255,0.5)",
                "0 0 40px rgba(0,82,255,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Gift className="h-12 w-12 text-primary-foreground" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent drop-shadow-sm">
              Gift Time Capsule
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Send crypto gifts that unlock in the future.
            <br />
            Secured on Base Sepolia.
          </motion.p>
        </section>

        {/* Feature Cards */}
        <section className="mb-10 space-y-4">
          <FeatureCard
            icon={<Lock className="h-6 w-6 text-primary" />}
            title="Time-Locked Gifts"
            description="Set exact date & time for your gift to unlock"
            delay={0.2}
          />
          <FeatureCard
            icon={<Diamond className="h-6 w-6 text-accent" />}
            title="NFT Key System"
            description="Each gift generates a unique NFT key for the recipient"
            delay={0.3}
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-success" />}
            title="On-Chain Security"
            description="Smart contracts on Base ensure trust & transparency"
            delay={0.4}
          />
        </section>

        {/* Trust Section */}
        <section className="mb-10 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Why Trust Us?
          </h2>
          <ul className="mb-6 space-y-3">
            <TrustItem text="Open source & auditable code" />
            <TrustItem text="Verified Smart Contracts" />
            <TrustItem text="Secured by Base L2 Network" />
          </ul>
          <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
            <TrustLink 
              href="https://base-sepolia.blockscout.com/address/0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc" 
              text="View Contract"
              icon={<ExternalLink className="h-3 w-3" />}
            />
            <TrustLink 
              href="https://github.com/cyrusweb3x/Crypto-Gift-Time-Capsule" 
              text="GitHub" 
              icon={<Github className="h-3 w-3" />}
            />
            <TrustLink 
              href="https://drive.google.com/file/d/14U56v5iqSL2GM2349a1xseV0v8Z-oITo/view?usp" 
              text="Audit Report" 
              icon={<FileText className="h-3 w-3" />}
            />
          </div>
        </section>

        {/* Real-time Stats Row */}
        <section className="grid grid-cols-3 gap-3">
          <StatCard value={stats.giftsSent} label="Gifts Sent" delay={0.5} />
          <StatCard value={stats.valueLocked} label="Value Locked" delay={0.6} />
          <StatCard value={stats.activeUsers} label="Active Users" delay={0.7} />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

// --- Sub Components ---

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,82,255,0.1)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/50">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
      {text}
    </li>
  );
}

function TrustLink({ href, text, icon }: { href: string; text: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors duration-200"
    >
      {text}
      {icon}
    </a>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/80 p-3 text-center backdrop-blur shadow-sm"
    >
      <p className="text-lg font-bold text-foreground break-all">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </motion.div>
  );
}