"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowRight, CheckCircle2, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CapsuleCardProps {
  type: "sent" | "received";
  sender?: string;
  recipient?: string;
  amount: string;
  token: string;
  unlockDate: Date | string | number;
  isUnlocked: boolean;
  isWithdrawn?: boolean;
  message?: string;
  txHash?: string;
  onClaim?: () => void;
  onClick?: () => void;
  isRedPacket?: boolean;
  maxClaimers?: number;
  claimedCount?: number;
  remainingClaimers?: number;
  remainingAmount?: string;
}

const toSafeDate = (unlockDate: Date | string | number): Date => {
  try {
    if (unlockDate instanceof Date && !isNaN(unlockDate.getTime()))
      return unlockDate;
    if (typeof unlockDate === "number") {
      const d = new Date(unlockDate);
      if (!isNaN(d.getTime())) return d;
    }
    if (typeof unlockDate === "string") {
      const d = new Date(unlockDate);
      if (!isNaN(d.getTime())) return d;
    }
  } catch {}
  return new Date(Date.now() + 86_400_000);
};

export function CapsuleCard({
  type,
  sender,
  recipient,
  amount,
  token,
  unlockDate,
  isUnlocked,
  isWithdrawn,
  message,
  txHash,
  onClaim,
  onClick,
  isRedPacket = false,
  maxClaimers,
  claimedCount,
  remainingClaimers,
  remainingAmount,
}: CapsuleCardProps) {
  const [timeLeft, setTimeLeft] = useState("");
  const safeDateObj = toSafeDate(unlockDate);

  useEffect(() => {
    if (isWithdrawn || isUnlocked) return;

    const updateTimer = () => {
      try {
        const diff = safeDateObj.getTime() - Date.now();
        if (diff <= 0) {
          setTimeLeft("Ready");
          return;
        }
        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (days > 0)        setTimeLeft(`${days}d ${hours}h left`);
        else if (hours > 0)  setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        else                 setTimeLeft(`${minutes}m ${seconds}s`);
      } catch {
        setTimeLeft("--");
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [safeDateObj, isWithdrawn, isUnlocked]);

  const displayDate = (() => {
    try {
      return safeDateObj.toLocaleDateString();
    } catch {
      return "--";
    }
  })();

  const claimProgress =
    maxClaimers && maxClaimers > 0
      ? Math.round(((claimedCount ?? 0) / maxClaimers) * 100)
      : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50"
    >
      {/* Red Packet Badge */}
      {isRedPacket && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-bl-xl rounded-tr-2xl">
          🧧 RED PACKET
        </div>
      )}

      {/* Top Row */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex flex-col overflow-hidden">
          <span className="text-[10px] uppercase text-muted-foreground">
            {type === "sent" ? "To:" : "From:"}
          </span>
          <span className="truncate text-sm font-semibold text-foreground max-w-[180px]">
            {type === "sent"
              ? isRedPacket
                ? "Multiple Recipients"
                : recipient
              : sender}
          </span>
        </div>

        {/* Status Badge */}
        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border",
            isWithdrawn
              ? "bg-muted text-muted-foreground border-border"
              : isUnlocked
              ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
              : "bg-orange-500/10 text-orange-600 border-orange-500/20"
          )}
        >
          {isWithdrawn ? (
            <>
              {isRedPacket ? "Cancelled" : "Claimed"}
              <CheckCircle2 className="h-3 w-3" />
            </>
          ) : isUnlocked ? (
            <>
              Unlocked <Unlock className="h-3 w-3" />
            </>
          ) : (
            <>
              Locked <Lock className="h-3 w-3" />
            </>
          )}
        </div>
      </div>

      {/* Amount Row */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          {token === "ETH" ? (
            <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center font-bold text-xs">
              Ξ
            </div>
          ) : (
            <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs">
              $
            </div>
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground">
            {amount}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              {token}
            </span>
          </h4>
          {/* Remaining amount — Red Packet only */}
          {isRedPacket && remainingAmount && !isWithdrawn && (
            <p className="text-xs text-muted-foreground">
              {remainingAmount} {token} remaining
            </p>
          )}
        </div>
      </div>

      {/* ✅ Message — সবসময় দেখাবে যদি থাকে */}
      {message && message.trim() !== "" && (
        <div className="mb-3 rounded-xl bg-secondary/60 px-3 py-2">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {message}
          </p>
        </div>
      )}

      {/* Red Packet Progress */}
      {isRedPacket &&
        maxClaimers !== undefined &&
        claimedCount !== undefined && (
          <div className="mb-3 rounded-xl bg-secondary/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-bold text-muted-foreground">
                  Claims
                </span>
              </div>
              <span className="text-xs font-black text-foreground">
                {claimedCount} / {maxClaimers}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{ width: `${claimProgress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-muted-foreground">
                {claimProgress}% claimed
              </span>
              <span className="text-[10px] text-muted-foreground">
                {remainingClaimers ?? maxClaimers - claimedCount} spots left
              </span>
            </div>
          </div>
        )}

      {/* ✅ TxHash — থাকলে দেখাবে */}
      {txHash && txHash.trim() !== "" && (
        <div className="mb-3">
          <a
            href={`https://basescan.org/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] text-blue-500 hover:text-blue-700 underline underline-offset-2 break-all"
          >
            View on Basescan ↗
          </a>
        </div>
      )}

      {/* Bottom Row */}
      <div className="flex items-center justify-between border-t border-border pt-3">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">
            {isUnlocked && !isWithdrawn ? "Status" : "Unlock Date"}
          </span>
          <span
            className={cn(
              "text-xs font-bold tabular-nums",
              !isUnlocked && !isWithdrawn
                ? "text-orange-600"
                : "text-foreground"
            )}
          >
            {!isUnlocked && !isWithdrawn
              ? `Opens in ${timeLeft}`
              : isUnlocked && !isWithdrawn
              ? "Ready to Claim"
              : displayDate}
          </span>
        </div>

        {onClaim ? (
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onClaim();
            }}
            className="h-8 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
          >
            {isRedPacket ? "Claim 🧧" : "Claim"}
          </Button>
        ) : (
          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </motion.div>
  );
}