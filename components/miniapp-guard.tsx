// components/miniapp-guard.tsx

"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import QRCode from "react-qr-code";

const MINIAPP_URL = "https://www.base.org/miniapp?url=https://basecapsule.space";

export function MiniAppGuard({ children }: { children: React.ReactNode }) {
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const context = await sdk.context;
        if (context && context.user) {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
        }
      } catch {
        setIsAllowed(false);
      }
    };
    check();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(MINIAPP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  // Loading state
  if (isAllowed === null) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  // Base App এর বাইরে হলে block করুন
  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 text-center">
        
        {/* Icon */}
        <div className="mb-4 text-6xl">🎁</div>

        {/* Title */}
        <h1 className="text-3xl font-black text-white mb-2">
          Base Capsule
        </h1>
        <p className="text-white/50 font-medium mb-8 max-w-xs text-sm">
          This app is only available inside the Base App. Scan the QR code or tap the button below.
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-3xl mb-6 shadow-2xl">
          <QRCode
            value={MINIAPP_URL}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
          />
        </div>
        <p className="text-white/30 text-xs font-medium mb-8">
          Scan with your phone camera to open in Base App
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a
            href={MINIAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-black px-6 py-4 rounded-2xl hover:bg-white/90 transition-all text-sm"
          >
            Open in Base App →
          </a>
          <button
            onClick={handleCopy}
            className="border border-white/20 text-white font-bold px-6 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm"
          >
            {copied ? "✓ Copied!" : "Copy Link"}
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/20 text-xs mt-10">
          basecapsule.space
        </p>
      </div>
    );
  }

  return <>{children}</>;
}