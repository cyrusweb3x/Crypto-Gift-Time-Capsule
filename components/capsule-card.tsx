"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CapsuleCardProps {
  type: "sent" | "received";
  sender?: string;
  recipient?: string;
  amount: string;
  token: string; // Changed strict type to string to support flexibility
  unlockDate: Date;
  isUnlocked: boolean;
  isWithdrawn?: boolean;
  message?: string;
  txHash?: string;
  onClaim?: () => void;
  onClick?: () => void;
}

export function CapsuleCard({
  type,
  sender,
  recipient,
  amount,
  token,
  unlockDate,
  isUnlocked,
  isWithdrawn,
  onClaim,
  onClick,
}: CapsuleCardProps) {
  const [timeLeft, setTimeLeft] = useState("");

  // --- Real-time Countdown Logic (Updated for Seconds) ---
  useEffect(() => {
    if (isWithdrawn || isUnlocked) return;
    
    const updateTimer = () => {
      const now = new Date();
      const diff = unlockDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Ready");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      let timeString = "";
      if (days > 0) {
        // যদি ১ দিনের বেশি বাকি থাকে, সেকেন্ড দেখানোর দরকার নেই
        timeString = `${days}d ${hours}h left`;
      } else if (hours > 0) {
        timeString = `${hours}h ${minutes}m ${seconds}s`;
      } else {
        // ১ ঘন্টার কম সময় বাকি থাকলে মিনিট ও সেকেন্ড দেখাবে
        timeString = `${minutes}m ${seconds}s`;
      }

      setTimeLeft(timeString);
    };

    updateTimer();
    // Update every second (1000ms) instead of 60000ms
    const interval = setInterval(updateTimer, 1000); 
    return () => clearInterval(interval);
  }, [unlockDate, isWithdrawn, isUnlocked]);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50"
    >
      {/* Top Row: Sender/Recipient & Status */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex flex-col overflow-hidden">
          <span className="text-[10px] uppercase text-muted-foreground">
            {type === "sent" ? "To:" : "From:"}
          </span>
          <span className="truncate text-sm font-semibold text-foreground max-w-[180px]">
            {type === "sent" ? recipient : sender}
          </span>
        </div>

        {/* Status Badge */}
        <div className={cn("flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border",
          isWithdrawn 
            ? "bg-muted text-muted-foreground border-border"
            : isUnlocked
            ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
            : "bg-orange-500/10 text-orange-600 border-orange-500/20"
        )}>
          {isWithdrawn ? (
            <>Claimed <CheckCircle2 className="h-3 w-3" /></>
          ) : isUnlocked ? (
            <>Unlocked <Unlock className="h-3 w-3" /></>
          ) : (
            <>Locked <Lock className="h-3 w-3" /></>
          )}
        </div>
      </div>

      {/* Middle Row: Amount */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          {token === "ETH" ? (
             <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center font-bold text-xs">Ξ</div>
          ) : (
             <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs">$</div>
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground">
            {amount} <span className="text-sm font-normal text-muted-foreground">{token}</span>
          </h4>
        </div>
      </div>

      {/* Bottom Row: Date & Action */}
      <div className="flex items-center justify-between border-t border-border pt-3">
        <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground">
                {isUnlocked && !isWithdrawn ? "Status" : "Unlock Date"}
            </span>
            <span className={cn("text-xs font-bold tabular-nums", !isUnlocked && !isWithdrawn ? "text-orange-600" : "text-foreground")}>
                {!isUnlocked && !isWithdrawn ? `Opens in ${timeLeft}` : isUnlocked && !isWithdrawn ? "Ready to Claim" : unlockDate.toLocaleDateString()}
            </span>
        </div>

        {onClaim ? (
          <Button 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              onClaim();
            }}
            // Claim button is now Blue
            className="h-8 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
          >
            Claim
          </Button>
        ) : (
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </motion.div>
  );
}