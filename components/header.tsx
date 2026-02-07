// components/ui/header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, CheckCircle2 } from "lucide-react";

interface HeaderProps {
  isConnected?: boolean;
  address?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function Header({
  isConnected = false,
  address,
  onConnect,
  onDisconnect,
}: HeaderProps) {
  // অ্যাড্রেসটি সুন্দরভাবে ছোট করার লজিক
  const truncatedAddress = address
    ? `${address.slice(0, 4)}...${address.slice(-4)}`
    : "";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-[480px] items-center justify-between px-4">
        
        {/* Logo Section - Clickable & Animated */}
        <Link href="/" passHref>
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/20">
              <Image
                src="/placeholder-logo.png" // তোমার লোগোর সঠিক পাথ এখানে দাও
                alt="Brand Logo"
                fill
                className="object-cover"
                priority // লোগোটি যেন দ্রুত লোড হয়
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Capsule
            </span>
          </motion.div>
        </Link>

        {/* Wallet Connection Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={isConnected ? onDisconnect : onConnect}
            variant={isConnected ? "outline" : "default"}
            size="sm"
            className={`
              relative overflow-hidden font-medium transition-all duration-300
              ${
                isConnected
                  ? "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30 pl-3 pr-4"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:opacity-90 hover:shadow-blue-500/30"
              }
            `}
          >
            {isConnected ? (
              <>
                <div className="mr-2 flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="font-mono text-sm">{truncatedAddress}</span>
              </>
            ) : (
              <>
                <Wallet className="mr-2 h-4 w-4" />
                <span>Connect Wallet</span>
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}