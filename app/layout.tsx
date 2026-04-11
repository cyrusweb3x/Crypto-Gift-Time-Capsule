// app/layout.tsx

import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Base Capsule",
  description: "Send crypto gifts that unlock in the future. Time-locked gifting secured on Base.",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}