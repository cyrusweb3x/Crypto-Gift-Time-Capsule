// components/miniapp-guard.tsx

"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import QRCode from "react-qr-code";

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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="h-6 w-6 rounded-full border-2 border-gray-200 border-t-[#0052FF] animate-spin" />
      </div>
    );
  }

  // Base App এর বাইরে হলে block করুন
  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">

        {/* Logo area */}
        <div className="mb-8">
          <div className="mx-auto mb-5 h-16 w-16 rounded-2xl bg-[#0052FF] flex items-center justify-center shadow-lg shadow-[#0052FF]/30">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" fill="white" fillOpacity="0.9"/>
              <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" fill="#0052FF"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-1">
            Base Capsule
          </h1>
          <span className="inline-flex items-center gap-1.5 bg-[#0052FF]/10 text-[#0052FF] text-xs font-bold px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0052FF]" />
            Base Mini App
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mb-8">
          Open this app inside the{" "}
          <span className="text-gray-900 font-semibold">Base App</span>{" "}
          to send time-locked crypto gifts.
        </p>

        {/* QR Code Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 mb-3 w-full max-w-[280px]">
          <div className="bg-white rounded-2xl p-3 shadow-sm mb-4">
            <QRCode
              value={MINIAPP_URL}
              size={200}
              bgColor="#ffffff"
              fgColor="#111111"
              level="M"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p className="text-gray-400 text-xs font-medium">
            Scan with your phone camera
          </p>
        </div>

        <p className="text-gray-300 text-xs mb-8">or</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <a
            href={MINIAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#0052FF] text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-[#0047E1] active:scale-95 transition-all text-sm shadow-lg shadow-[#0052FF]/25"
          >
            Open in Base App
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold px-6 py-3.5 rounded-2xl hover:bg-gray-200 active:scale-95 transition-all text-sm"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="#6B7280" strokeWidth="1.5"/>
                  <path d="M11 5V4C11 3.17 10.33 2.5 9.5 2.5H4C3.17 2.5 2.5 3.17 2.5 4V9.5C2.5 10.33 3.17 11 4 11H5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Copy Link
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#0052FF]" />
          <p className="text-gray-300 text-xs font-medium">basecapsule.space</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}