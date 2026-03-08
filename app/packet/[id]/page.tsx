"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Users, AlertCircle, Loader2, CheckCircle2, Gift, ArrowRight } from "lucide-react";
import { ConfettiEffect } from "@/components/confetti-effect";

// Web3 Imports (Wagmi)
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import contractAbi from "@/contractAbi.json";

// আপনার স্মার্ট কন্ট্রাক্ট অ্যাড্রেস
const CONTRACT_ADDRESS = "0x80ad25915F08Eb42423588c1872E7664D2E1Cc1c";

// Helper: Message Decode করা (Capsule পেজের মত)
const parseGiftMessage = (rawMsg: string) => {
  try {
    const decoded = atob(rawMsg);
    const json = JSON.parse(decoded);
    return { content: json.content || "", isAnonymous: !!json.isAnonymous };
  } catch (e) {
    return { content: rawMsg, isAnonymous: false };
  }
};

const shortenAddress = (addr: string) => {
  if (!addr) return "Unknown";
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

export default function RedPacketClaimPage() {
  const params = useParams();
  const router = useRouter();
  const packetId = params.id as string;
  const { address, isConnected } = useAccount();

  // টাইমার এবং UI স্টেট
  const [timeLeft, setTimeLeft] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [success, setSuccess] = useState(false);

  // 1. Contract থেকে প্যাকেট ডেটা রিড করা (প্রতি 5 সেকেন্ডে রিয়েল-টাইম আপডেট)
  const { data: rawPacketData, isLoading: isReading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "getRedPacketDetails", 
    args: [BigInt(packetId || 0)],
    query: {
      refetchInterval: 5000, // Real-time sync
    },
  });

  // 2. ইউজার অলরেডি ক্লেইম করেছে কিনা তা চেক করা
  const { data: hasClaimed } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "hasClaimedRedPacket",
    args: [BigInt(packetId || 0), address as `0x${string}`],
    query: {
      refetchInterval: 5000,
      enabled: !!address, // Address থাকলে তবেই চেক করবে
    },
  });

  // 3. Contract এ Claim ফাংশন কল করা
  const { data: hash, isPending: isClaiming, writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  // ডেটা পার্সিং (ABI এর Tuple ইনডেক্স অনুযায়ী)
  const packetData = rawPacketData as any;
  const rawSender = packetData?.[1] || "";
  const remainingAmount = Number(packetData?.[4] || 0);
  const totalClaimers = Number(packetData?.[5] || 0);
  const remainingClaimers = Number(packetData?.[6] || 0);
  const unlockTimestamp = Number(packetData?.[7] || 0) * 1000;
  const isCancelled = packetData?.[10] || false;
  const rawMessage = packetData?.[11] || "";

  const claimedCount = totalClaimers - remainingClaimers;
  const isEnded = remainingClaimers === 0 || remainingAmount === 0 || isCancelled;
  
  const parsedMsg = parseGiftMessage(rawMessage);
  const displaySender = packetData?.[9] || parsedMsg.isAnonymous ? "Secret Sender" : shortenAddress(rawSender);

  // টাইমার লজিক (Day + Hour + Min + Sec)
  useEffect(() => {
    if (!unlockTimestamp) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = unlockTimestamp - now;

      if (remaining <= 0) {
        setIsUnlocked(true);
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setIsUnlocked(false);
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [unlockTimestamp]);

  // ট্রানজেকশন কনফার্মেশন ট্র্যাকিং
  useEffect(() => {
    if (isConfirmed) {
      setSuccess(true);
    }
  }, [isConfirmed]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    
    return `${days > 0 ? `${days}d ` : ''}${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
  };

  // ক্লেইম হ্যান্ডলার
  const handleClaim = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    try {
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: contractAbi,
        functionName: "claimRedPacket", 
        args: [BigInt(packetId)],
      });
    } catch (error: any) {
      console.error("Claim Failed:", error);
      // Optional: Handle "AlreadyClaimed" error UI
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none" />
      
      <Header isConnected={isConnected} address={address || ""} onConnect={() => {}} onDisconnect={() => {}} />
      <ConfettiEffect trigger={success} />

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        
        {isReading && !packetData ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-red-500" />
            <p className="text-muted-foreground font-medium animate-pulse">Scanning On-Chain Packet...</p>
          </div>
        ) : (
          <AnimatePresence>
            {/* The Red Packet Envelope Design */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-sm bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-[2.5rem] p-8 text-center text-white shadow-[0_20px_50px_rgba(220,38,38,0.3)] relative overflow-hidden border border-red-400/30"
            >
                {/* Envelope Flap Design Element */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent rounded-b-[50%] border-b border-white/10 shadow-sm"></div>

                <div className="relative z-10 mt-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-inner border-4 border-red-600 shadow-[0_0_20px_rgba(253,224,71,0.4)]"
                    >
                        <span className="text-4xl">🧧</span>
                    </motion.div>
                    
                    <h2 className="text-2xl font-black mb-1 truncate px-2 text-yellow-50 drop-shadow-md">{displaySender}</h2>
                    <p className="text-red-200 font-medium mb-6 text-sm uppercase tracking-widest">Sent a Red Packet</p>

                    <div className="bg-black/20 rounded-2xl p-4 mb-8 backdrop-blur-md border border-white/5">
                        <p className="font-medium text-red-50 text-lg">"{parsedMsg.content || "Best wishes! 🚀"}"</p>
                    </div>

                    {!success ? (
                        <>
                            {hasClaimed ? (
                                /* ইউজার অলরেডি ক্লেইম করে থাকলে */
                                <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20">
                                    <CheckCircle2 className="mx-auto h-8 w-8 text-green-400 mb-2" />
                                    <p className="text-xl font-black text-white/90 uppercase tracking-wider mb-1">CLAIMED</p>
                                    <p className="text-sm text-green-100">You already got your share!</p>
                                </div>
                            ) : isEnded ? (
                                /* প্যাকেট শেষ হয়ে গেলে END মেসেজ */
                                <div className="bg-black/40 rounded-3xl p-6 backdrop-blur-md border border-red-400/30">
                                    <AlertCircle className="mx-auto h-8 w-8 text-red-300 mb-2" />
                                    <p className="text-2xl font-black text-white/90 uppercase tracking-widest mb-1">ENDED</p>
                                    <p className="text-sm text-red-200">This packet is fully claimed.</p>
                                </div>
                            ) : isUnlocked ? (
                                /* প্যাকেট আনলক হলে ক্লেইম অপশন */
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <Button 
                                      onClick={handleClaim} 
                                      disabled={isClaiming || isConfirming} 
                                      className="w-full h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 disabled:opacity-70 text-red-950 text-xl font-black shadow-[0_10px_30px_rgba(253,224,71,0.3)] transition-all"
                                    >
                                        {isConfirming ? "Confirming tx..." : isClaiming ? "Opening..." : "OPEN PACKET"}
                                    </Button>
                                </motion.div>
                            ) : (
                                /* টাইমার (Day, Hour, Min, Sec) */
                                <div className="bg-black/30 rounded-3xl p-6 backdrop-blur-md border border-white/10">
                                    <Lock className="mx-auto h-6 w-6 text-yellow-300 mb-2" />
                                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Unlocks In</p>
                                    <p className="text-2xl font-black tabular-nums font-mono text-yellow-50 drop-shadow-md">{formatTime(timeLeft)}</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-2">
                            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
                              <Gift className="h-8 w-8 text-yellow-300" />
                            </div>
                            <h1 className="text-2xl font-black text-yellow-300 drop-shadow-md mb-2">Successfully Claimed!</h1>
                            <p className="text-red-100 text-sm mb-6">Funds have been added to your balance.</p>
                            
                            <Button 
                               onClick={() => router.push('/capsules')} 
                               variant="secondary"
                               className="w-full rounded-full bg-white/20 hover:bg-white/30 text-white font-bold border border-white/30 backdrop-blur-md"
                            >
                               Check Inbox <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Stats Below Envelope */}
        {!isReading && packetData && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="w-full max-w-sm mt-8 flex justify-between px-6 py-4 bg-secondary/50 backdrop-blur-sm rounded-full border border-border shadow-sm text-sm font-bold text-muted-foreground"
          >
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary"/> 
                <span className={isEnded ? "text-red-500" : "text-foreground"}>
                  {claimedCount} / {totalClaimers} Claimed
                </span>
              </span>
              <span className="font-mono bg-background px-3 py-1 rounded-full text-xs border border-border shadow-inner">ID: #{packetId}</span>
          </motion.div>
        )}

      </main>
    </div>
  );
}