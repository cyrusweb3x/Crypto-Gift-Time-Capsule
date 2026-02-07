"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface HeaderProps {
  isConnected?: boolean;
  address?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function Header({
  isConnected = false,
  address,
  onConnect,
  onDisconnect,
}: HeaderProps) {
  const truncatedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[480px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <motion.div
            className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0,82,255,0.3)",
                "0 0 30px rgba(0,82,255,0.5)",
                "0 0 20px rgba(0,82,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CapsuleIcon className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <span className="text-lg font-semibold text-foreground">Gift Capsule</span>
        </div>

        <Button
          onClick={isConnected ? onDisconnect : onConnect}
          variant={isConnected ? "outline" : "default"}
          size="sm"
          className={
            isConnected
              ? "border-border bg-card hover:bg-secondary"
              : "bg-gradient-to-r from-primary to-accent hover:opacity-90"
          }
        >
          <Wallet className="mr-2 h-4 w-4" />
          {isConnected ? truncatedAddress : "Connect Wallet"}
        </Button>
      </div>
    </header>
  );
}

function CapsuleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0Z" />
      <path d="M6 12h12" />
      <path d="M12 6v12" />
    </svg>
  );
}
