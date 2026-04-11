"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────
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
}

// ─── Helper ───────────────────────────────────────────────────────────────────
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
  } catch {
    // ignore
  }
  return new Date(Date.now() + 86_400_000);
};

// ─── Component ────────────────────────────────────────────────────────────────
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
}: CapsuleCardProps) {
  const [timeLeft, setTimeLeft] = useState("");
  const safeDateObj = toSafeDate(unlockDate);

  // ── Countdown Timer ──────────────────────────────────────────────────────
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

  // ── Derived Values ───────────────────────────────────────────────────────
  const displayDate = (() => {
    try { return safeDateObj.toLocaleDateString(); }
    catch { return "--"; }
  })();

  const hasMessage = typeof message === "string" && message.trim() !== "";
  const hasTxHash  = typeof txHash  === "string" && txHash.trim()  !== "";

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50"
    >
      {/* ── Top Row: Address & Status ──────────────────────────────────── */}
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
            <>Claimed <CheckCircle2 className="h-3 w-3" /></>
          ) : isUnlocked ? (
            <>Unlocked <Unlock className="h-3 w-3" /></>
          ) : (
            <>Locked <Lock className="h-3 w-3" /></>
          )}
        </div>
      </div>

      {/* ── Amount Row ────────────────────────────────────────────────── */}
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
        </div>
      </div>

      {/* ── Message ───────────────────────────────────────────────────── */}
      {hasMessage && (
        <div className="mb-3 rounded-xl bg-secondary/60 px-3 py-2">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {message}
          </p>
        </div>
      )}

      {/* ── TxHash Link ───────────────────────────────────────────────── */}
      {hasTxHash && (
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

      {/* ── Bottom Row: Date & Claim ───────────────────────────────────── */}
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
            Claim
          </Button>
        ) : (
          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </motion.div>
  );
}