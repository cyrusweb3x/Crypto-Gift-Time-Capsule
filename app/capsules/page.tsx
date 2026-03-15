// app/capsules/page.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { Wallet, Copy, Check, Gift, Inbox, Loader2, RefreshCw, User, PartyPopper, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, formatEther } from "ethers";
import contractAbi from "@/contractAbi.json";

import { getName, getAvatar } from "@coinbase/onchainkit/identity";
import { base } from "viem/chains";

const CONTRACT_ADDRESS = "0x96e6ad1Dd470A4934B544fF3A6c6dCB9e2DD43A3";
const BASE_CHAIN_ID = "0x2105"; // 8453 in Hex
const STORAGE_KEY = "yupp_wallet_connected";

const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const ERC20_ABI = ["function balanceOf(address) view returns (uint256)"];

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
  if (!addr || addr.length < 10) return addr;
  if (!addr.startsWith("0x")) return addr; 
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

export default function CapsulesPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  
  const [ethBalance, setEthBalance] = useState("0.00");
  const [usdcBalance, setUsdcBalance] = useState("0.00");

  const [activeTab, setActiveTab] = useState<"sent" | "received">("received");
  const [filter, setFilter] = useState<"all" | "ETH" | "USDC">("all");
  const [copied, setCopied] = useState(false);
  const [mySentCapsules, setMySentCapsules] = useState<any[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState<any | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [successModalData, setSuccessModalData] = useState<{ amount: string, token: string } | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);

  const fetchBalances = async (acc: string, _provider: BrowserProvider) => {
      try {
          const bal = await _provider.getBalance(acc);
          setEthBalance(Number(formatEther(bal)).toFixed(4));
          
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, _provider);
          const usdcBal = await usdcContract.balanceOf(acc);
          setUsdcBalance(Number(formatUnits(usdcBal, 6)).toFixed(2));
      } catch (e) { console.error("Balance fetch error", e); }
  };

  const setupWallet = async (acc: string, _provider: BrowserProvider) => {
      const _signer = await _provider.getSigner();
      const network = await _provider.getNetwork();
      
      // Force switch to Base network if not connected to it
      if (Number(network.chainId) !== 8453) {
          try {
              await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: BASE_CHAIN_ID }],
              });
          } catch (e) { 
              console.error("Please switch to Base Network!", e); 
              alert("Please switch your wallet to the Base Network to view gifts.");
          }
      }
      setProvider(_provider);
      setSigner(_signer);
      setAddress(acc);
      setIsConnected(true);
      localStorage.setItem(STORAGE_KEY, "true");
      
      await fetchBalances(acc, _provider);
      
      try {
          const name = await getName({ address: acc as `0x${string}`, chain: base });
          if (name) {
              setBasename(name);
              const avt = await getAvatar({ ensName: name, chain: base });
              setAvatar(avt || null);
          }
      } catch (e) { 
          // Silently handle identity lookup error
      }
  };

  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
        const _provider = new BrowserProvider(window.ethereum);
        const accounts = await _provider.send("eth_accounts", []);
        if (accounts.length > 0) setupWallet(accounts[0], _provider);
    } catch (e) { console.error("Silent connect error", e); }
  }, []);

  const handleConnect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts[0]) setupWallet(accounts[0], _provider);
    } catch (error) { console.error("Connection Failed", error); }
  }, []);

  const confirmDisconnect = useCallback(() => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
    setBasename(null);
    setAvatar(null);
    setEthBalance("0.00");
    setUsdcBalance("0.00");
    setMySentCapsules([]);
    setMyReceivedCapsules([]);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
    if (typeof window !== "undefined" && window.ethereum) {
        window.ethereum.on("accountsChanged", (accs: string[]) => {
            if (accs.length === 0) confirmDisconnect();
            else checkConnection();
        });
        // RELOAD ON NETWORK CHANGE (Crucial Fix)
        window.ethereum.on("chainChanged", () => {
            window.location.reload();
        });
    }
  }, [checkConnection, confirmDisconnect]);

  const fetchCapsules = useCallback(async (isSilent = false) => {
    if (!provider || !address) return;
    
    // Check Chain ID before making calls
    try {
        const network = await provider.getNetwork();
        if (Number(network.chainId) !== 8453) {
            console.error("Wrong network for data fetching. Chain:", Number(network.chainId));
            return; // Exit if not on Base, wait for reload
        }
    } catch (e) {
        console.error("Network check failed", e);
        return;
    }

    if (!isSilent) setIsLoadingData(true);
    else setIsBackgroundLoading(true);

    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, provider);
      const sent: any[] = [];
      const received: any[] = [];

      // RPC-Friendly Sequential Batch Fetcher
      const fetchInBatches = async (total: number, fetchFn: (id: number) => Promise<any>, batchSize = 3) => {
          const results = [];
          for (let i = total; i >= 0; i -= batchSize) {
              const promises = [];
              for (let j = 0; j < batchSize && (i - j) >= 0; j++) {
                  promises.push(
                      fetchFn(i - j).catch((err) => {
                          console.warn(`Missing/Error on ID ${i-j}`);
                          return null;
                      })
                  );
              }
              const batchResults = await Promise.all(promises);
              results.push(...batchResults.filter(Boolean));
              await new Promise(resolve => setTimeout(resolve, 150)); // Delay prevents RPC block
          }
          return results;
      };

      try {
          const totalGifts = Number(await contract.giftCounter());
          console.log(`Checking up to ${totalGifts} regular gifts...`);

          const rawGifts = await fetchInBatches(totalGifts, (id) => contract.getGiftDetails(id));

          rawGifts.forEach((gift: any) => {
            if (!gift) return;
            try {
              const gId = (gift.id ?? gift[0]).toString();
              const gSender = (gift.sender ?? gift[1]).toString();
              const gRecipient = (gift.recipient ?? gift[2]).toString();
              const gTokenAddress = (gift.tokenAddress ?? gift[3]).toString();
              const gAmount = gift.amount ?? gift[4];
              const gUnlockTime = gift.unlockTime ?? gift[5];
              const gIsAnonymous = gift.isAnonymous ?? gift[6];
              const gIsWithdrawn = gift.isWithdrawn ?? gift[7];
              const gMessage = gift.message ?? gift[9] ?? "";

              if (!gSender || !gRecipient) return;

              const isSender = gSender.toLowerCase() === address.toLowerCase();
              const isRecipient = gRecipient.toLowerCase() === address.toLowerCase();

              if (!isSender && !isRecipient) return;

              const { content, isAnonymous } = parseGiftMessage(gMessage);
              const isEth = (gTokenAddress === ethers.ZeroAddress);
              const tokenSymbol = isEth ? "ETH" : "USDC";
              const decimals = isEth ? 18 : 6; 
              const formattedAmount = formatUnits(gAmount, decimals);
              const unlockDate = new Date(Number(gUnlockTime) * 1000);
              const isUnlocked = new Date() >= unlockDate;
              
              const baseData = {
                id: `gift-${gId}`,
                sender: gSender, recipient: gRecipient, amount: formattedAmount,
                token: tokenSymbol, unlockDate: unlockDate, isUnlocked: isUnlocked,
                isWithdrawn: gIsWithdrawn, isAnonymous: isAnonymous || gIsAnonymous,
                message: content, realMessage: content, txHash: "", isRedPacket: false
              };

              if (isSender) sent.push(baseData);
              if (isRecipient) {
                const recData = { ...baseData };
                if (!isUnlocked) recData.message = "🔒 Message is hidden until unlocked";
                received.push(recData);
              }
            } catch (err) { console.error("Gift Data Parse Error:", err); }
          });
      } catch (err) { console.error("Failed to read giftCounter (Likely Wrong Network):", err); }

      try {
          const totalRPs = Number(await contract.redPacketCounter());
          console.log(`Checking up to ${totalRPs} red packets...`);
          const myClaims: { [key: string]: string } = {};
          
          try {
              const currentBlock = await provider.getBlockNumber();
              const fromBlock = Math.max(0, currentBlock - 50000); // Expanded block range
              const claimFilter = contract.filters.RedPacketClaimed(null, address);
              const rawLogs = await contract.queryFilter(claimFilter, fromBlock, "latest");
              
              rawLogs.forEach((_log: any) => {
                  if (_log.args) {
                      const pId = _log.args[0].toString();
                      const val = _log.args[2]; 
                      myClaims[pId] = val.toString(); 
                  }
              });
          } catch(e) { console.warn("Event filter failed, relying on fallback...", e); } 

          const rawRPs = await fetchInBatches(totalRPs, (id) => contract.getRedPacketDetails(id));

          for (const rp of rawRPs) {
              if (!rp) continue;
              try {
                  const rpId = rp[0].toString();
                  const rpSender = rp[1].toString();
                  const rpTokenAddress = rp[2].toString();
                  const rpTotalAmount = rp[3];
                  const rpRemainingAmount = rp[4];
                  const rpTotalClaimers = Number(rp[5]);
                  const rpRemainingClaimers = Number(rp[6]);
                  const rpUnlockTime = rp[7];
                  const rpIsAnonymous = rp[9];
                  const rpIsCancelled = rp[10];
                  const rpMessage = rp[11] || "";

                  if (!rpSender || rpSender === ethers.ZeroAddress) continue;

                  const { content, isAnonymous } = parseGiftMessage(rpMessage);
                  const isEth = rpTokenAddress === ethers.ZeroAddress;
                  const tokenSymbol = isEth ? "ETH" : "USDC";
                  const decimals = isEth ? 18 : 6;
                  
                  const claimedCount = rpTotalClaimers > 0 ? rpTotalClaimers - rpRemainingClaimers : 0;
                  const isEnded = (rpRemainingClaimers === 0 && rpTotalClaimers > 0) || Number(rpRemainingAmount) === 0 || rpIsCancelled;

                  if (rpSender.toLowerCase() === address.toLowerCase()) {
                      sent.push({
                          id: `rp-${rpId}`,
                          sender: rpSender,
                          recipient: `Red Packet (${claimedCount}/${rpTotalClaimers} Claimed)`,
                          amount: formatUnits(rpTotalAmount, decimals),
                          token: tokenSymbol,
                          unlockDate: Number(rpUnlockTime) > 0 ? new Date(Number(rpUnlockTime) * 1000) : new Date(),
                          isUnlocked: true,
                          isWithdrawn: isEnded, 
                          isAnonymous: isAnonymous || rpIsAnonymous,
                          message: content,
                          realMessage: content,
                          txHash: "",
                          isRedPacket: true
                      });
                  }

                  let hasClaimed = false;
                  let exactAmountStr = "";

                  if (myClaims[rpId]) {
                      hasClaimed = true;
                      exactAmountStr = formatUnits(myClaims[rpId], decimals);
                  } else {
                      try {
                          const userClaimed = await contract.hasClaimedRedPacket(rpId, address);
                          if (userClaimed) {
                              hasClaimed = true;
                              
                              let fetchedExact = null;
                              try { fetchedExact = await contract.claimedAmounts(rpId, address); } catch(e){}
                              if(!fetchedExact) { try { fetchedExact = await contract.getClaimedAmount(rpId, address); } catch(e){} }
                              
                              if (fetchedExact && Number(fetchedExact) > 0) {
                                  exactAmountStr = formatUnits(fetchedExact, decimals);
                              } else {
                                  const avgAmt = Number(formatUnits(rpTotalAmount, decimals)) / rpTotalClaimers;
                                  exactAmountStr = avgAmt.toString();
                              }
                          }
                      } catch (e) { /* Silently skip if function doesn't exist */ }
                  }

                  if (hasClaimed) {
                      let displayAmt = exactAmountStr;
                      if (displayAmt) {
                          displayAmt = parseFloat(displayAmt).toFixed(6).replace(/\.?0+$/, '');
                      }

                      received.push({
                          id: `rp-claim-${rpId}`,
                          sender: rpSender,
                          recipient: address,
                          amount: displayAmt,
                          token: tokenSymbol,
                          unlockDate: Number(rpUnlockTime) > 0 ? new Date(Number(rpUnlockTime) * 1000) : new Date(),
                          isUnlocked: true,
                          isWithdrawn: true, 
                          isAnonymous: isAnonymous || rpIsAnonymous,
                          message: content,
                          realMessage: content,
                          txHash: "",
                          isRedPacket: true
                      });
                  }

              } catch (err) { console.error("Red Packet Parse Error:", err); }
          }
      } catch (err) { console.error("Failed to read redPacketCounter:", err); }

      const sortByIdDesc = (a: any, b: any) => {
          const numA = parseInt(a.id.toString().replace(/\D/g, '')) || 0;
          const numB = parseInt(b.id.toString().replace(/\D/g, '')) || 0;
          return numB - numA;
      };

      sent.sort(sortByIdDesc);
      received.sort(sortByIdDesc);

      console.log(`Found: ${sent.length} Sent, ${received.length} Received`);
      setMySentCapsules(sent);
      setMyReceivedCapsules(received);

      fetchBalances(address, provider);
      
    } catch (error) { console.error("Critical Fetch Error:", error); } 
    finally { 
        setIsLoadingData(false); 
        setIsBackgroundLoading(false);
    }
  }, [provider, address]);

  useEffect(() => {
    if (provider && address) {
        fetchCapsules(); 
        const interval = setInterval(() => {
            fetchCapsules(true); 
        }, 15000); // Changed to 15s to reduce RPC load
        return () => clearInterval(interval);
    }
  }, [provider, address, fetchCapsules]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const setupTimers = (capsules: any[], setCapsules: any) => {
      capsules.forEach((capsule) => {
        if (!capsule.isUnlocked && !capsule.isWithdrawn && capsule.unlockDate) {
          const timeUntilUnlock = new Date(capsule.unlockDate).getTime() - Date.now();
          if (timeUntilUnlock > 0 && timeUntilUnlock < 86400000) {
            const timerId = setTimeout(() => {
              setCapsules((currentCapsules: any[]) =>
                currentCapsules.map((c) => c.id === capsule.id ? { ...c, isUnlocked: true, message: c.realMessage || c.message } : c)
              );
            }, timeUntilUnlock + 1000); 
            timers.push(timerId);
          }
        }
      });
    };
    setupTimers(myReceivedCapsules, setMyReceivedCapsules);
    setupTimers(mySentCapsules, setMySentCapsules);
    return () => timers.forEach(clearTimeout);
  }, [myReceivedCapsules, mySentCapsules]);

  const handleClaim = async () => {
    if (!selectedCapsule || !signer || selectedCapsule.isRedPacket) return;
    setIsClaiming(true);
    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);
      const tx = await contract.withdrawGift(selectedCapsule.id.replace('gift-', ''));
      await tx.wait();
      
      const claimedAmount = selectedCapsule.amount;
      const claimedToken = selectedCapsule.token;
      
      setMyReceivedCapsules((prev) => prev.map((c) => c.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c));
      setSelectedCapsule(null); 
      setSuccessModalData({ amount: claimedAmount, token: claimedToken });
      
      fetchCapsules(true);
    } catch (error: any) { alert("Claim failed: " + (error.reason || error.message)); } 
    finally { setIsClaiming(false); }
  };

  const handleCopyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  const sentCapsules = mySentCapsules.filter(c => filter === "all" || c.token === filter);
  const receivedCapsules = myReceivedCapsules.filter(c => filter === "all" || c.token === filter);

  return (
    <div className="min-h-screen bg-background pb-20 relative font-sans text-foreground">
      <Header isConnected={isConnected} address={address} onConnect={handleConnect} onDisconnect={() => setShowDisconnectAlert(true)} />
      <main className="mx-auto max-w-[480px] px-6 py-8">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            <div className="mb-8 rounded-3xl bg-secondary p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm">
                    {avatar ? <img src={avatar} alt="Profile" className="h-full w-full object-cover" /> : <div className="flex h-full w-full items-center justify-center bg-blue-100 text-primary"><User className="h-6 w-6" /></div>}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{basename || "Base User"}</h3>
                    <button onClick={handleCopyAddress} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      {shortenAddress(address)}
                      {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-background p-4 shadow-sm">
                 <span className="text-sm font-bold text-muted-foreground">Wallet Balances</span>
                 <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-xl font-black text-foreground">{ethBalance}</span>
                    <span className="text-sm font-bold bg-secondary px-3 py-1 rounded-full text-foreground">ETH</span>
                 </div>
                 <div className="flex justify-between items-center pt-1">
                    <span className="text-xl font-black text-blue-600">{usdcBalance}</span>
                    <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-600">USDC</span>
                 </div>
              </div>
            </div>

            <div className="mb-6 flex rounded-full bg-secondary p-1">
              <TabButton isActive={activeTab === "received"} onClick={() => setActiveTab("received")} label="Received" />
              <TabButton isActive={activeTab === "sent"} onClick={() => setActiveTab("sent")} label="Sent" />
            </div>

            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FilterChip isActive={filter === "all"} onClick={() => setFilter("all")} label="All" />
              <FilterChip isActive={filter === "ETH"} onClick={() => setFilter("ETH")} label="ETH" />
              <FilterChip isActive={filter === "USDC"} onClick={() => setFilter("USDC")} label="USDC" />
            </div>

            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-lg flex items-center gap-2">
                   {activeTab === "sent" ? "Sent Gifts" : "Inbox"}
                   {isBackgroundLoading && <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />}
               </h3>
               <Button variant="ghost" size="icon" onClick={() => fetchCapsules(false)} disabled={isLoadingData} className="rounded-full hover:bg-secondary">
                  <RefreshCw className={cn("h-4 w-4", isLoadingData && "animate-spin")} />
                </Button>
            </div>

            <AnimatePresence mode="wait">
              {isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? (
                 <div className="flex flex-col items-center justify-center py-20 text-muted-foreground"><Loader2 className="h-8 w-8 animate-spin mb-2" /><p>Loading on-chain data...</p></div>
              ) : activeTab === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {sentCapsules.length > 0 ? sentCapsules.map((c) => (
                    <CapsuleCard 
                      key={c.id} 
                      type="sent" 
                      recipient={c.isRedPacket ? c.recipient : shortenAddress(c.recipient)} 
                      amount={c.amount} 
                      token={c.token} 
                      unlockDate={c.unlockDate} 
                      isUnlocked={c.isUnlocked} 
                      message={c.message} 
                      txHash={c.txHash} 
                      isWithdrawn={c.isWithdrawn} 
                    />
                  )) : <EmptyState icon={<Gift />} title="No gifts sent" description="Create a new gift to get started." />}
                </motion.div>
              ) : (
                <motion.div key="received" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  {receivedCapsules.length > 0 ? receivedCapsules.map((c) => (
                    <CapsuleCard 
                      key={c.id} 
                      type="received" 
                      sender={
                        c.isRedPacket 
                          ? `🧧 Red Packet from ${c.isAnonymous ? "Secret" : shortenAddress(c.sender)}` 
                          : (c.isAnonymous ? "Secret Sender" : shortenAddress(c.sender))
                      } 
                      amount={c.amount} 
                      token={c.token} 
                      unlockDate={c.unlockDate} 
                      isUnlocked={c.isUnlocked} 
                      isWithdrawn={c.isWithdrawn} 
                      message={c.message} 
                      txHash={c.txHash} 
                      onClaim={(c.isUnlocked && !c.isWithdrawn && !c.isRedPacket) ? () => setSelectedCapsule(c) : undefined} 
                      onClick={() => setSelectedCapsule(c)} 
                    />
                  )) : <EmptyState icon={<Inbox />} title="Inbox Empty" description="Share your address to receive gifts." />}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
      <BottomNav />
      
      {selectedCapsule && (
        <GiftModal 
          isOpen={!!selectedCapsule} 
          onClose={() => !isClaiming && setSelectedCapsule(null)} 
          type="detail" 
          gift={{ 
            ...selectedCapsule, 
            sender: selectedCapsule.isRedPacket
              ? `🧧 Red Packet from ${selectedCapsule.isAnonymous ? "Secret" : shortenAddress(selectedCapsule.sender || "")}`
              : (selectedCapsule.isAnonymous ? "Anonymous" : shortenAddress(selectedCapsule.sender || ""))
          }} 
          onClaim={(selectedCapsule.isUnlocked && !selectedCapsule.isWithdrawn && activeTab === 'received' && !selectedCapsule.isRedPacket) ? handleClaim : undefined} 
          isClaiming={isClaiming}
        />
      )}

      <AnimatePresence>
        {successModalData && (
          <SuccessModal 
            isOpen={!!successModalData} 
            onClose={() => setSuccessModalData(null)} 
            amount={successModalData.amount} 
            token={successModalData.token} 
          />
        )}
      </AnimatePresence>

      <DisconnectModal isOpen={showDisconnectAlert} onClose={() => setShowDisconnectAlert(false)} onConfirm={confirmDisconnect} />
    </div>
  );
}

function FilterChip({ isActive, onClick, label }: any) {
    return (
        <button 
            onClick={onClick} 
            className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-colors border", 
                isActive 
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20" 
                  : "bg-white border-gray-200 text-black hover:bg-gray-100" 
            )}
        >
            {label}
        </button>
    );
}

function SuccessModal({ isOpen, onClose, amount, token }: { isOpen: boolean; onClose: () => void; amount: string; token: string }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <PartyPopper className="h-10 w-10 text-blue-600 animate-bounce" />
          </div>
          <h2 className="mb-2 text-2xl font-black text-foreground">Unlocked!</h2>
          <p className="mb-6 font-medium text-muted-foreground">You just claimed your gift.</p>
          <div className="mb-8 flex flex-col items-center justify-center rounded-2xl bg-secondary py-6">
            <span className="text-4xl font-black text-blue-600">{amount}</span>
            <span className="text-sm font-bold text-muted-foreground">{token}</span>
          </div>
          <Button onClick={onClose} className="h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white">
            Close
          </Button>
        </motion.div>
      </div>
    );
}

function DisconnectModal({ isOpen, onClose, onConfirm }: any) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">Disconnect Wallet?</h3>
                <p className="mb-6 text-sm text-muted-foreground">You will need to reconnect to view your gifts.</p>
                <div className="grid grid-cols-2 gap-3">
                    <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">Cancel</Button>
                    <Button onClick={onConfirm} variant="destructive" className="rounded-xl font-bold bg-red-600 hover:bg-red-700">Disconnect</Button>
                </div>
            </motion.div>
        </div>
    );
}

function NotConnectedState({ onConnect }: { onConnect: () => void }) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
            <Wallet className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl font-black mb-2">Connect Wallet</h2>
        <p className="text-muted-foreground mb-8 max-w-[200px]">Connect Wallet to view your gifts.</p>
        <Button onClick={onConnect} className="h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none">Connect</Button>
      </div>
    );
}

function TabButton({ isActive, onClick, label }: any) {
    return (
        <button onClick={onClick} className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", isActive ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground")}>
            {label}
        </button>
    );
}

function EmptyState({ icon, title, description }: any) {
    return (
        <div className="flex flex-col items-center justify-center py-16 rounded-3xl border border-dashed border-border bg-secondary/30">
            <div className="mb-4 text-muted-foreground/50 text-4xl">{icon}</div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}