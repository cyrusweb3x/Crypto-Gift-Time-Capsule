"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TokenSelectorProps {
  selectedToken: "ETH" | "USDC";
  onSelect: (token: "ETH" | "USDC") => void;
  ethBalance?: string;
  usdcBalance?: string;
}

export function TokenSelector({
  selectedToken,
  onSelect,
  ethBalance = "0.00",
  usdcBalance = "0.00",
}: TokenSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Gift Token</label>
      <div className="flex gap-2 rounded-xl bg-secondary p-1">
        <TokenButton
          token="ETH"
          isSelected={selectedToken === "ETH"}
          onClick={() => onSelect("ETH")}
        />
        <TokenButton
          token="USDC"
          isSelected={selectedToken === "USDC"}
          onClick={() => onSelect("USDC")}
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          {selectedToken === "ETH" ? (
            <EthIcon className="h-4 w-4" />
          ) : (
            <UsdcIcon className="h-4 w-4" />
          )}
          Balance: {selectedToken === "ETH" ? ethBalance : usdcBalance}{" "}
          {selectedToken}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
          <BaseIcon className="h-3 w-3" />
          Base
        </span>
      </div>
    </div>
  );
}

function TokenButton({
  token,
  isSelected,
  onClick,
}: {
  token: "ETH" | "USDC";
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors",
        isSelected
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {isSelected && (
        <motion.div
          layoutId="token-selector-bg"
          className="absolute inset-0 rounded-lg bg-card shadow-sm"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {token === "ETH" ? (
          <EthIcon className="h-4 w-4" />
        ) : (
          <UsdcIcon className="h-4 w-4" />
        )}
        {token}
      </span>
    </motion.button>
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

function BaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
