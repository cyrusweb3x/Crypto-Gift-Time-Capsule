// app/packet/[id]/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lock, Unlock, Gift, Users } from "lucide-react";
import { ConfettiEffect } from "@/components/confetti-effect";

export default function RedPacketClaimPage() {
  const params = useParams();
  const packetId = params.id;

  // Dummy Data (This will come from your new Smart Contract)
  const packetData = {
      sender: "0xABC...123",
      totalAmount: "50 USDC",
      claimed: 12,
      maxClaimers: 50,
      unlockTime: new Date(Date.now() + 50000).getTime(), // Unlocks in 50 seconds
      message: "Happy New Year Base fam! 🚀"
  };

  const [timeLeft, setTimeLeft] = useState(packetData.unlockTime - Date.now());
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [success, setSuccess] = useState(false);
  const [claimedAmount, setClaimedAmount] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = packetData.unlockTime - Date.now();
      if (remaining <= 0) {
        setIsUnlocked(true);
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [packetData.unlockTime]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClaim = () => {
    setIsClaiming(true);
    // Call Smart Contract to claim
    setTimeout(() => {
        setIsClaiming(false);
        setSuccess(true);
        setClaimedAmount("2.45 USDC"); // Random lucky amount
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-foreground flex flex-col">
      <Header isConnected={false} address="" onConnect={() => {}} onDisconnect={() => {}} />
      <ConfettiEffect trigger={success} />

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        
        {/* The Red Packet Envelope Design */}
        <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} 
            className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-600 rounded-[2.5rem] p-8 text-center text-white shadow-2xl relative overflow-hidden"
        >
            {/* Design Element */}
            <div className="absolute top-0 left-0 w-full h-32 bg-white/10 rounded-b-[50%]"></div>

            <div className="relative z-10">
                <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-inner border-4 border-red-500">
                    <span className="text-3xl">🧧</span>
                </div>
                
                <h2 className="text-2xl font-black mb-1">{packetData.sender}</h2>
                <p className="text-red-100 font-medium mb-6">Sent a Red Packet</p>

                <div className="bg-red-900/30 rounded-2xl p-4 mb-8">
                    <p className="font-medium text-red-50 text-lg">"{packetData.message}"</p>
                </div>

                {!success ? (
                    <>
                        {isUnlocked ? (
                            <div className="animate-bounce">
                                <Button onClick={handleClaim} disabled={isClaiming} className="w-full h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 text-red-900 text-2xl font-black shadow-lg">
                                    {isClaiming ? "Opening..." : "OPEN PACKET"}
                                </Button>
                            </div>
                        ) : (
                            <div className="bg-black/20 rounded-3xl p-6 backdrop-blur-sm">
                                <Lock className="mx-auto h-6 w-6 text-white/50 mb-2" />
                                <p className="text-sm font-bold text-white/70 uppercase tracking-widest mb-1">Unlocks In</p>
                                <p className="text-4xl font-black tabular-nums font-mono">{formatTime(timeLeft)}</p>
                            </div>
                        )}
                    </>
                ) : (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <p className="text-red-100 font-bold uppercase tracking-wider text-sm mb-2">You Received</p>
                        <h1 className="text-5xl font-black text-yellow-300 drop-shadow-md">{claimedAmount}</h1>
                    </motion.div>
                )}
            </div>
        </motion.div>

        {/* Stats Below Envelope */}
        <div className="w-full max-w-sm mt-8 flex justify-between px-4 text-sm font-bold text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="h-4 w-4"/> {packetData.claimed}/{packetData.maxClaimers} Claimed</span>
            <span>ID: #{packetId}</span>
        </div>

      </main>
    </div>
  );
}