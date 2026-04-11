// components/miniapp-guard.tsx

"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import QRCode from "react-qr-code";

// ✅ সঠিক URL - এটা scan করলে Base App এ mini app open হবে
const MINIAPP_URL = "https://base.app/miniapp/basecapsule.space";

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
      <div className="min-h-screen bg-[#0052FF] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
      </div>
    );
  }

  // Base App এর বাইরে হলে block করুন
  if (!isAllowed) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
        style={{
          background: "linear-gradient(135deg, #0052FF 0%, #0033CC 50%, #001A8C 100%)",
        }}
      >
        {/* Top decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20" />

        {/* Glowing circle behind icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150" />
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5">
            <span className="text-5xl">💎</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-white mb-1 tracking-tight">
          Base Capsule
        </h1>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
            Mini App
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
        <p className="text-white/70 font-medium mb-8 max-w-xs text-sm leading-relaxed">
          This app is only available inside the{" "}
          <span className="text-white font-bold">Base App</span>.
          Scan the QR code or tap below to open it.
        </p>

        {/* QR Code */}
        <div
          className="p-4 rounded-3xl mb-3 shadow-2xl"
          style={{ background: "white" }}
        >
          <QRCode
            value={MINIAPP_URL}
            size={180}
            bgColor="#ffffff"
            fgColor="#0052FF"
            level="M"
          />
        </div>
        <p className="text-white/40 text-xs font-medium mb-8">
          📷 Scan with your phone camera
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          {/* Primary Button */}
          <a
            href={MINIAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#0052FF] font-black px-6 py-4 rounded-2xl hover:bg-white/90 active:scale-95 transition-all text-sm shadow-lg shadow-black/20"
          >
            <span>Open in Base App</span>
            <span>→</span>
          </a>

          {/* Secondary Button */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-6 py-4 rounded-2xl hover:bg-white/10 active:scale-95 transition-all text-sm backdrop-blur-sm"
          >
            {copied ? (
              <>
                <span>✓</span>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <span>⎘</span>
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Base branding */}
        <div className="flex items-center gap-2 mt-10">
          <div className="h-4 w-4 rounded-full bg-white/20 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
          <p className="text-white/30 text-xs font-bold">
            basecapsule.space
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}