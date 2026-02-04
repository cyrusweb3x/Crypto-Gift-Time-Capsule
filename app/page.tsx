"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { Lock, Diamond, Shield, ExternalLink, Gift } from "lucide-react";

export default function HomePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    setIsConnected(true);
    setAddress("0x1234567890abcdef1234567890abcdef12345678");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <main className="mx-auto max-w-[480px] px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8 text-center">
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
            className="mb-3 text-3xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CryptoGift Capsule
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
            Secured on Base.
          </motion.p>
        </section>

        {/* Feature Cards */}
        <section className="mb-8 space-y-4">
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
        <section className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Why Trust Us?
          </h2>
          <ul className="mb-4 space-y-2">
            <TrustItem text="Open source & auditable" />
            <TrustItem text="Audited smart contracts" />
            <TrustItem text="Secured by Base L2" />
          </ul>
          <div className="flex items-center gap-4 border-t border-border pt-4">
            <TrustLink href="#" text="View Contract" />
            <TrustLink href="#" text="GitHub" />
            <TrustLink href="#" text="Docs" />
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-3 gap-3">
          <StatCard value="2,450+" label="Gifts Sent" />
          <StatCard value="$124K" label="Value Locked" />
          <StatCard value="1.2K" label="Active Users" />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

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
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="h-1.5 w-1.5 rounded-full bg-success" />
      {text}
    </li>
  );
}

function TrustLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-sm text-primary underline underline-offset-2 hover:text-accent"
    >
      {text}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="rounded-xl border border-border bg-card p-4 text-center"
    >
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
}
