"use client";

import React from "react"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmountInputProps {
  token: "ETH" | "USDC";
  value: string;
  onChange: (value: string) => void;
  balance?: string;
  error?: string;
}

const ethQuickAmounts = ["0.01", "0.05", "0.1"];
const usdcQuickAmounts = ["5", "10", "25"];

export function AmountInput({
  token,
  value,
  onChange,
  balance = "0.00",
  error,
}: AmountInputProps) {
  const quickAmounts = token === "ETH" ? ethQuickAmounts : usdcQuickAmounts;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Gift Amount</label>
      <div
        className={cn(
          "rounded-xl border bg-card p-4 transition-all",
          error
            ? "border-destructive"
            : "border-border focus-within:border-primary"
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
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
          <input
            type="text"
            inputMode="decimal"
            placeholder="0.00"
            value={value}
            onChange={handleInputChange}
            className="w-full bg-transparent text-2xl font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <span className="shrink-0 text-lg font-medium text-muted-foreground">
            {token}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {quickAmounts.map((amount) => (
          <motion.button
            key={amount}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(amount)}
            className={cn(
              "flex-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
              value === amount && "border-primary bg-primary/10"
            )}
          >
            {token === "ETH" ? amount : `$${amount}`}
          </motion.button>
        ))}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange("")}
          className={cn(
            "flex-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
            !quickAmounts.includes(value) && value !== "" && "border-primary bg-primary/10"
          )}
        >
          Custom
        </motion.button>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          {token === "ETH" ? "Estimated gas: ~$0.01" : "Stablecoin (USDC)"}
        </span>
        <span className="text-muted-foreground">
          Balance: {balance} {token}
        </span>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
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
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 6v2m0 8v2m-2-9.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5" />
    </svg>
  );
}
