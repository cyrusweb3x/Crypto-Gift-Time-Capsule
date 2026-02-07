"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Gift, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "detail";
  gift?: {
    token: string;
    amount: string;
    recipient?: string;
    sender?: string;
    unlockDate: Date;
    message?: string;
    txHash?: string;
    nftTokenId?: string;
    isAnonymous?: boolean;
    isWithdrawn?: boolean; // Added for better logic
  };
  onSendAnother?: () => void;
  onClaim?: () => void;
  isClaiming?: boolean; // Added loading state support
  mainActionClass?: string;
}

export function GiftModal({
  isOpen,
  onClose,
  type,
  gift,
  onSendAnother,
  onClaim,
  isClaiming,
  mainActionClass
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-[380px] rounded-3xl border border-white/10 bg-[#1a1a1a] text-white p-6 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Background Glow Effect */}
             <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-lg font-bold">
                {type === "success" ? "Gift Sent!" : "Gift Details"}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4 text-white/70" />
              </button>
            </div>

            {type === "success" && (
              <div className="mb-6 flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                >
                  <Gift className="h-10 w-10 text-white" />
                </motion.div>
              </div>
            )}

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
                <span className="text-sm font-medium text-gray-400">Amount</span>
                <span className="text-xl font-black tracking-tight text-white">
                  {gift.amount} <span className="text-sm text-gray-400">{gift.token}</span>
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
                <span className="text-sm font-medium text-gray-400">
                  {type === "success" || gift.recipient ? "Recipient" : "From"}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-gray-200">
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
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
                <span className="text-sm font-medium text-gray-400">Unlock Date</span>
                <span className="text-sm font-bold text-gray-200">
                  {gift.unlockDate.toLocaleString("en-US", {
                    month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
                  })}
                </span>
              </div>

              {gift.nftTokenId && (
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-inner" />
                    <div>
                      <p className="font-bold text-sm text-white">Key #{gift.nftTokenId}</p>
                      <p className="text-xs text-gray-400">Unique NFT Key</p>
                    </div>
                </div>
              )}

              {gift.message && (
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <p className="mb-1 text-xs font-bold text-gray-500 uppercase tracking-wider">Message</p>
                  <p className="text-sm text-gray-200 leading-relaxed">"{gift.message}"</p>
                </div>
              )}
            </div>

            <div className="mt-8 relative z-10">
              {type === "success" && onSendAnother && (
                <Button
                  onClick={onSendAnother}
                  className="w-full h-12 rounded-full font-bold bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  Send Another
                </Button>
              )}
              {type === "detail" && onClaim && (
                <Button
                  onClick={onClaim}
                  disabled={isClaiming}
                  // FIX: Blue Color Applied Here
                  className={cn(
                      "w-full h-12 rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]",
                      mainActionClass
                  )}
                >
                  {isClaiming ? "Unlocking..." : "Claim Gift"}
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}