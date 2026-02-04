"use client";

import { motion } from "framer-motion";
import { Lock, Unlock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapsuleCardProps {
  type: "sent" | "received";
  recipient?: string;
  sender?: string;
  amount: string;
  token: "ETH" | "USDC";
  unlockDate: Date;
  isUnlocked: boolean;
  message?: string;
  txHash?: string;
  onClaim?: () => void;
  onClick?: () => void;
}

export function CapsuleCard({
  type,
  recipient,
  sender,
  amount,
  token,
  unlockDate,
  isUnlocked,
  message,
  txHash,
  onClaim,
  onClick,
}: CapsuleCardProps) {
  const timeUntilUnlock = unlockDate.getTime() - Date.now();
  const daysUntilUnlock = Math.max(
    0,
    Math.floor(timeUntilUnlock / (1000 * 60 * 60 * 24))
  );
  const hoursUntilUnlock = Math.max(
    0,
    Math.floor((timeUntilUnlock % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  const progress = isUnlocked
    ? 100
    : Math.min(100, ((Date.now() - (unlockDate.getTime() - 7 * 24 * 60 * 60 * 1000)) / (7 * 24 * 60 * 60 * 1000)) * 100);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,82,255,0.1)]"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              token === "ETH"
                ? "bg-gradient-to-br from-[#627EEA] to-[#8B9FFF]"
                : "bg-gradient-to-br from-[#2775CA] to-[#5BA3E0]"
            )}
          >
            {token === "ETH" ? (
              <EthIcon className="h-5 w-5 text-foreground" />
            ) : (
              <UsdcIcon className="h-5 w-5 text-foreground" />
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {type === "sent" ? "To:" : "From:"}{" "}
              {type === "sent"
                ? recipient
                  ? `${recipient.slice(0, 6)}...${recipient.slice(-4)}`
                  : "Unknown"
                : sender || "Anonymous"}
            </p>
            <p className="text-lg font-semibold text-foreground">
              {amount} {token}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
            isUnlocked
              ? "bg-success/10 text-success"
              : "bg-primary/10 text-primary"
          )}
        >
          {isUnlocked ? (
            <>
              <Unlock className="h-3 w-3" />
              Unlocked
            </>
          ) : (
            <>
              <Lock className="h-3 w-3" />
              Locked
            </>
          )}
        </div>
      </div>

      {!isUnlocked && type === "received" && (
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-muted-foreground">
              Unlocks in {daysUntilUnlock}d {hoursUntilUnlock}h
            </span>
            <span className="text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <p className="text-xs text-muted-foreground">
          {unlockDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>

        {type === "received" && isUnlocked && onClaim && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClaim();
            }}
            className="rounded-lg bg-success px-3 py-1.5 text-xs font-medium text-success-foreground"
          >
            Claim
          </motion.button>
        )}

        {txHash && (
          <a
            href={`https://basescan.org/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="h-3 w-3" />
            View
          </a>
        )}
      </div>
    </motion.div>
  );
}

function EthIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5l-7.5 11.25L12 17.25l7.5-4.5L12 1.5zm0 17.25l-7.5-4.5L12 22.5l7.5-8.25-7.5 4.5z" />
    </svg>
  );
}

function UsdcIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v2m0 8v2m-2-9.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5" />
    </svg>
  );
}
