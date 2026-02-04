"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Gift, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "detail";
  gift?: {
    token: "ETH" | "USDC";
    amount: string;
    recipient?: string;
    sender?: string;
    unlockDate: Date;
    message?: string;
    txHash?: string;
    nftTokenId?: string;
    isAnonymous?: boolean;
  };
  onSendAnother?: () => void;
  onClaim?: () => void;
}

export function GiftModal({
  isOpen,
  onClose,
  type,
  gift,
  onSendAnother,
  onClaim,
}: GiftModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!gift) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-sm rounded-2xl border border-border bg-card p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {type === "success" ? "Gift Sent Successfully!" : "Gift Details"}
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1 hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {type === "success" && (
              <div className="mb-6 flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent"
                >
                  <Gift className="h-10 w-10 text-primary-foreground" />
                </motion.div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-secondary p-3">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="font-semibold text-foreground">
                  {gift.amount} {gift.token}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-secondary p-3">
                <span className="text-sm text-muted-foreground">
                  {type === "success" || gift.recipient ? "Recipient" : "From"}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-foreground">
                    {gift.recipient
                      ? `${gift.recipient.slice(0, 6)}...${gift.recipient.slice(-4)}`
                      : gift.isAnonymous
                      ? "Anonymous"
                      : gift.sender
                      ? `${gift.sender.slice(0, 6)}...${gift.sender.slice(-4)}`
                      : "Unknown"}
                  </span>
                  {(gift.recipient || gift.sender) && (
                    <button
                      onClick={() => handleCopy(gift.recipient || gift.sender || "")}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-secondary p-3">
                <span className="text-sm text-muted-foreground">Unlock Date</span>
                <span className="text-sm text-foreground">
                  {gift.unlockDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              {gift.nftTokenId && (
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="mb-2 text-xs text-muted-foreground">NFT Key</p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent"
                    />
                    <div>
                      <p className="font-mono text-sm text-foreground">
                        #{gift.nftTokenId}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Unique per gift
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {gift.message && (
                <div className="rounded-xl bg-secondary p-3">
                  <p className="mb-1 text-xs text-muted-foreground">Message</p>
                  <p className="text-sm text-foreground">{gift.message}</p>
                </div>
              )}

              {gift.txHash && (
                <a
                  href={`https://basescan.org/tx/${gift.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Transaction
                </a>
              )}
            </div>

            <div className="mt-6">
              {type === "success" && onSendAnother && (
                <Button
                  onClick={onSendAnother}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Send Another
                </Button>
              )}
              {type === "detail" && onClaim && (
                <Button
                  onClick={onClaim}
                  className="w-full bg-success hover:bg-success/90"
                >
                  Claim Gift
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
