// app/layout.tsx

import React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { MiniAppGuard } from "@/components/miniapp-guard";
import "./globals.css";

export const metadata: Metadata = {
  title: "Base Capsule",
  description:
    "Send crypto gifts that unlock in the future. Time-locked gifting secured on Base.",
  generator: "v0.app",
  other: {
    "base:app_id": "69ae9a67f6467f4d78d3041c",
    "fc:miniapp": JSON.stringify({
      version: "next",
      imageUrl: "https://basecapsule.space/og-image.png",
      button: {
        title: "Launch Base Capsule",
        action: {
          type: "launch_miniapp",
          name: "Base Capsule",
          url: "https://basecapsule.space",
          splashImageUrl: "https://basecapsule.space/placeholder-logo.png",
          splashBackgroundColor: "#0A0A0B",
        },
      },
    }),
    "talentapp:project_verification":
      "7ac959f85cd4b4f4f41d0e09c11abe51aa50ad2389e4e78d707ae3556edb830b173737697f05a563b832f652ed09e8ae719c3d0103533af0c0431176a2399785",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <MiniAppGuard>
          {children}
        </MiniAppGuard>
        <Toaster theme="dark" position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
