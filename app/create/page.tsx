// app/create/page.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { ConfettiEffect } from "@/components/confetti-effect";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import { Clipboard, Loader2, AlertTriangle, User, UserX, AlertCircle, Gift, Copy, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, parseUnits, ZeroAddress } from "ethers";
import { motion, AnimatePresence } from "framer-motion";

// NEW ABI 
import contractAbi from "@/contractAbi.json";

// New Smart Contract Address
const CONTRACT_ADDRESS = "0x80ad25915F08Eb42423588c1872E7664D2E1Cc1c";
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const CHAIN_ID_HEX = "0x14a34"; 
const CHAIN_ID_DECIMAL = 84532;
const STORAGE_KEY = "yupp_wallet_connected";
const ETH_PRESETS = ["0.001", "0.01", "0.05", "0.1", "0.5"];
const USDC_PRESETS = ["5", "10", "20", "50", "100"];

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)", 
  "function approve(address spender, uint256 amount) returns (bool)", 
  "function allowance(address owner, address spender) view returns (uint256)", 
  "function decimals() view returns (uint8)", 
  "function symbol() view returns (string)"
];

// Wallet Hook with Silent Connect
function useEvmWallet() {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [address, setAddress] = useState<string>("");
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);

  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
        const _provider = new BrowserProvider(window.ethereum);
        const accounts = await _provider.send("eth_accounts", []);
        if (accounts.length > 0) {
            const network = await _provider.getNetwork();
            const _signer = await _provider.getSigner();
            setProvider(_provider);
            setSigner(_signer);
            setAddress(accounts[0]);
            setChainId(Number(network.chainId));
            localStorage.setItem(STORAGE_KEY, "true");
        }
    } catch (e) { console.error("Silent connect error", e); }
  }, []);

  const connect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    setIsConnecting(true);
    try {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const network = await _provider.getNetwork();
      if (accounts[0]) {
        const _signer = await _provider.getSigner();
        setProvider(_provider);
        setSigner(_signer);
        setAddress(accounts[0]);
        setChainId(Number(network.chainId));
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch (e) { console.error("Connection failed:", e); } 
    finally { setIsConnecting(false); }
  }, []);

  const confirmDisconnect = useCallback(() => {
    setAddress("");
    setSigner(null);
    setProvider(null);
    setChainId(null);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  const ensureChain = useCallback(async () => {
    if (!window.ethereum) return false;
    try {
      const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
      if (currentChainId === CHAIN_ID_HEX) return true;
      await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: CHAIN_ID_HEX }] });
      const _provider = new BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      setProvider(_provider);
      setSigner(_signer);
      setChainId(CHAIN_ID_DECIMAL);
      return true;
    } catch (error) { console.error("Chain switch failed:", error); return false; }
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
    if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accs: string[]) => {
            if (accs.length === 0) confirmDisconnect();
            else checkConnection();
        });
        window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, [checkConnection, confirmDisconnect]);

  return { provider, signer, address, chainId, connect, disconnect: () => setShowDisconnectAlert(true), confirmDisconnect, showDisconnectAlert, setShowDisconnectAlert, isConnecting, ensureChain };
}

export default function CreatePage() {
  const { provider, signer, address, chainId, connect, disconnect, confirmDisconnect, showDisconnectAlert, setShowDisconnectAlert, isConnecting, ensureChain } = useEvmWallet();

  // Mode State
  const [isRedPacket, setIsRedPacket] = useState(false);

  // Common State
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
  const [amount, setAmount] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [balances, setBalances] = useState({ ETH: "0.0", USDC: "0.0" });
  const [usdcDecimals, setUsdcDecimals] = useState(6);
  const [needsApproval, setNeedsApproval] = useState(false);
  const [loadingStep, setLoadingStep] = useState<"IDLE" | "APPROVING" | "CREATING">("IDLE");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfetti, setShowConfetti] = useState(false);

  // Single Gift State
  const [recipientInput, setRecipientInput] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");
  const [isResolving, setIsResolving] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  // Red Packet State
  const [maxClaimers, setMaxClaimers] = useState("10");
  const [distributionType, setDistributionType] = useState<"EQUAL" | "LUCKY">("EQUAL");
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  // Fetch Balances
  const fetchBalances = useCallback(async () => {
    if (!address || !provider) {
        setBalances({ ETH: "0.0", USDC: "0.0" });
        return;
    }
    try {
        const ethRaw = await provider.getBalance(address);
        const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
        const usdcRaw = await usdcContract.balanceOf(address);
        const decimals = await usdcContract.decimals();
        setUsdcDecimals(Number(decimals));
        setBalances({ ETH: formatUnits(ethRaw, 18), USDC: formatUnits(usdcRaw, decimals) });
      } catch (e) { console.error("Balance fetch error:", e); }
  }, [address, provider]);

  useEffect(() => {
    fetchBalances();
    const interval = setInterval(fetchBalances, 10000);
    return () => clearInterval(interval);
  }, [fetchBalances]);

  // Check Approval
  useEffect(() => {
    if (selectedToken === "USDC" && address && signer) {
      const checkAllowance = async () => {
        try {
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
          const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
          let checkAmount = BigInt(0);
          try { checkAmount = parseUnits(amount || "0", usdcDecimals); } catch {}
          if (allowance < checkAmount && checkAmount > BigInt(0)) { setNeedsApproval(true); } else { setNeedsApproval(allowance === BigInt(0) && parseFloat(amount) > 0); }
        } catch (e) { console.error(e); }
      };
      checkAllowance();
    } else { setNeedsApproval(false); }
  }, [selectedToken, amount, address, signer, usdcDecimals]);

  const handleRecipientChange = async (val: string) => {
    setRecipientInput(val);
    setErrors(prev => ({ ...prev, recipient: "" }));
    if (!val) { setResolvedAddress(""); return; }
    if (ethers.isAddress(val)) { setResolvedAddress(val); return; }
    setIsResolving(true);
    try {
      if (provider) {
        const resolved = await provider.resolveName(val);
        if (resolved) { setResolvedAddress(resolved); } else { setResolvedAddress(""); }
      }
    } catch { setResolvedAddress(""); } finally { setIsResolving(false); }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) { newErrors.amount = "Enter valid amount"; } else {
      const bal = selectedToken === "ETH" ? balances.ETH : balances.USDC;
      if (parseFloat(amount) > parseFloat(bal)) newErrors.amount = "Insufficient balance";
    }
    
    if (!isRedPacket) {
        if (!resolvedAddress) newErrors.recipient = "Invalid address or name";
    } else {
        const claimersNum = Number(maxClaimers);
        if (!maxClaimers || isNaN(claimersNum) || claimersNum <= 0 || !Number.isInteger(claimersNum)) {
            newErrors.claimers = "Enter a valid whole number";
        }
    }

    if (!unlockDate || !unlockTime) { newErrors.date = "Select date & time"; } else {
      const targetTime = new Date(`${unlockDate}T${unlockTime}`);
      const minTime = new Date(Date.now() + 60 * 1000); 
      if (targetTime < minTime) { newErrors.date = "Time must be at least 1 min in future"; }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    if (!signer) { connect(); return; }
    const correctChain = await ensureChain();
    if (!correctChain) { setErrors({ submit: "Wrong network. Switch to Base Sepolia." }); return; }

    try {
      setLoadingStep("IDLE");
      setErrors({}); 
      const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
      
      const giftContract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);
      
      const decimals = selectedToken === "ETH" ? 18 : usdcDecimals;
      const amountWei = parseUnits(amount, decimals);
      
      const unlockTimestamp = Math.floor(new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000);
      const unlockTimeBigInt = BigInt(unlockTimestamp);
      
      const metadata = { content: message || "", isAnonymous: isAnonymous };
      const obfuscatedMessage = btoa(JSON.stringify(metadata));

      if (selectedToken === "USDC") {
        const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
        if (allowance < amountWei) {
            setLoadingStep("APPROVING");
            const txApprove = await usdcContract.approve(CONTRACT_ADDRESS, ethers.MaxUint256);
            await txApprove.wait();
            
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }

      setLoadingStep("CREATING");
      const tokenArg = selectedToken === "ETH" ? ZeroAddress : USDC_ADDRESS;
      const valueArg = selectedToken === "ETH" ? amountWei : BigInt(0); 
      
      let tx;
      
      const txOptions: any = { value: valueArg };
      
      if (isRedPacket) {
          const maxClaimersBigInt = BigInt(Math.floor(Number(maxClaimers)));
          const isLucky = distributionType === "LUCKY";
          
          tx = await giftContract.createRedPacket(
              tokenArg, 
              amountWei, 
              maxClaimersBigInt, 
              unlockTimeBigInt, 
              isLucky,            // bool _isRandom
              isAnonymous,        // bool _isAnonymous (Added)
              obfuscatedMessage,  // string _message
              txOptions
          );
          await tx.wait();
          
          setGeneratedLink(`${window.location.origin}/packet/${tx.hash.slice(0, 10)}`);
          setShowLinkModal(true);
      } else {
          tx = await giftContract.createGift(
              resolvedAddress, 
              tokenArg, 
              amountWei, 
              unlockTimeBigInt, 
              isAnonymous,        // bool _isAnonymous (Added)
              obfuscatedMessage,  // string _message
              txOptions
          );
          await tx.wait();
          
          setSuccessData({
             token: selectedToken, amount: amount, recipient: resolvedAddress, unlockDate: new Date(`${unlockDate}T${unlockTime}`),
             message: message, txHash: tx.hash, nftTokenId: "Minted", isAnonymous: isAnonymous
          });
          setShowGiftModal(true);
      }
      
      setShowConfetti(true);
      setLoadingStep("IDLE");
      fetchBalances();

    } catch (err: any) {
      console.error(err);
      setLoadingStep("IDLE");
      
      if (err.code === "ACTION_REJECTED") {
          setErrors({ submit: "Transaction was rejected by user." });
          return;
      }
      
      let errorMsg = "Transaction failed.";
      if (err.reason) {
          errorMsg = err.reason;
          if (err.reason.includes("require(false)")) {
              errorMsg = "Contract Rejected: The smart contract might not fully support this specific feature (Try ETH or Lucky Draw).";
          }
      } 
      else if (err.data && err.data.message) errorMsg = err.data.message;
      else if (err.message && err.message.length < 50) errorMsg = err.message;
      
      setErrors({ submit: errorMsg });
    }
  };

  const handleResetForm = () => {
    setShowGiftModal(false);
    setShowLinkModal(false);
    setShowConfetti(false);
    setAmount("");
    setRecipientInput("");
    setResolvedAddress("");
    setUnlockDate("");
    setUnlockTime("");
    setMessage("");
    setIsAnonymous(false);
    setSelectedToken("ETH");
    setMaxClaimers("10");
  };

  const handlePaste = async () => { try { const text = await navigator.clipboard.readText(); handleRecipientChange(text); } catch {} };

  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header isConnected={!!address} address={address} onConnect={connect} onDisconnect={disconnect} />
      <ConfettiEffect trigger={showConfetti} />
      
      <main className="mx-auto max-w-[480px] px-6 py-8">
        <div className="mb-8 text-center">
             <h1 className="text-3xl font-black tracking-tight">{isRedPacket ? "Create Red Packet" : "Create Gift"}</h1>
             <p className="font-medium text-muted-foreground">{isRedPacket ? "Create a shareable link for everyone" : "Wrap crypto for the future"}</p>
        </div>

        {chainId && chainId !== CHAIN_ID_DECIMAL && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-yellow-50 p-4 text-yellow-800 border border-yellow-200">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-bold text-sm">Wrong Network. <button onClick={ensureChain} className="underline">Switch to Base</button></span>
            </div>
        )}

        <div className="mb-6 flex rounded-full bg-secondary p-1 border border-border/50">
           <button onClick={() => setIsRedPacket(false)} className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", !isRedPacket ? "bg-white text-black shadow-sm dark:bg-black dark:text-white" : "text-muted-foreground hover:text-foreground")}>
             <span className="flex items-center justify-center gap-2"><Gift className="h-4 w-4"/> Single Gift</span>
           </button>
           <button onClick={() => setIsRedPacket(true)} className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", isRedPacket ? "bg-white text-black shadow-sm dark:bg-black dark:text-white" : "text-muted-foreground hover:text-foreground")}>
             <span className="flex items-center justify-center gap-2">🧧 Red Packet</span>
           </button>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex justify-between items-center text-sm font-bold text-muted-foreground">
                <span>{isRedPacket ? "Total Pool Amount" : "Asset"}</span>
                <span>Bal: {selectedToken === "ETH" ? parseFloat(balances.ETH).toFixed(4) : parseFloat(balances.USDC).toFixed(2)}</span>
            </div>
            <div className="mb-4 flex gap-3">
                <button onClick={() => { setSelectedToken("ETH"); setAmount(""); }} className={cn("flex-1 py-3 rounded-xl font-bold transition-all border-2", selectedToken === "ETH" ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-secondary text-muted-foreground")}>ETH</button>
                <button onClick={() => { setSelectedToken("USDC"); setAmount(""); }} className={cn("flex-1 py-3 rounded-xl font-bold transition-all border-2", selectedToken === "USDC" ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-secondary text-muted-foreground")}>USDC</button>
            </div>
            <div className="relative">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-transparent text-5xl font-black outline-none placeholder:text-muted-foreground/30 text-foreground py-2" />
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {(selectedToken === "ETH" ? ETH_PRESETS : USDC_PRESETS).map((val) => (
                    <button key={val} onClick={() => setAmount(val)} className="rounded-full bg-secondary px-4 py-2 text-xs font-bold text-foreground transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">{val}</button>
                ))}
            </div>
            {errors.amount && <p className="mt-2 text-sm font-bold text-red-500">{errors.amount}</p>}
          </div>

          {!isRedPacket ? (
             <div className="space-y-2">
                <label className="ml-2 text-sm font-bold text-muted-foreground">Recipient</label>
                <div className="relative rounded-2xl bg-secondary p-1">
                    <input value={recipientInput} onChange={(e) => handleRecipientChange(e.target.value)} placeholder="0x... or basename.eth" className="w-full rounded-xl bg-transparent p-4 pr-12 text-lg font-medium outline-none placeholder:text-muted-foreground/50" />
                    <button onClick={handlePaste} className="absolute right-3 top-3 rounded-xl bg-white p-2 shadow-sm hover:bg-gray-50 dark:bg-card"><Clipboard className="h-5 w-5 text-primary" /></button>
                </div>
                {resolvedAddress && resolvedAddress !== recipientInput && <p className="ml-2 text-xs font-bold text-green-600">✓ {resolvedAddress.slice(0,6)}...{resolvedAddress.slice(-4)}</p>}
                {errors.recipient && <p className="ml-2 text-xs font-bold text-red-500">{errors.recipient}</p>}
             </div>
          ) : (
            <>
                <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-muted-foreground">How many people can claim?</label>
                    <div className="relative rounded-2xl bg-secondary p-1">
                        <input type="number" value={maxClaimers} onChange={(e) => setMaxClaimers(e.target.value)} placeholder="e.g. 50" className="w-full rounded-xl bg-transparent p-4 text-xl font-black outline-none text-center" />
                    </div>
                    {errors.claimers && <p className="ml-2 text-xs font-bold text-red-500">{errors.claimers}</p>}
                </div>

                <div className="space-y-2">
                    <label className="ml-2 text-sm font-bold text-muted-foreground">Distribution Type</label>
                    <div className="flex gap-3">
                        <button onClick={() => setDistributionType("EQUAL")} className={cn("flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary", distributionType === "EQUAL" ? "border-primary ring-2 ring-primary/20" : "border-transparent")}>
                            <h3 className="font-black text-foreground">Equal Split</h3>
                            <p className="text-xs text-muted-foreground mt-1">Everyone gets exactly {amount ? (Number(amount)/Number(maxClaimers || 1)).toFixed(4) : "0"} {selectedToken}</p>
                        </button>
                        <button onClick={() => setDistributionType("LUCKY")} className={cn("flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary", distributionType === "LUCKY" ? "border-primary ring-2 ring-primary/20" : "border-transparent")}>
                            <h3 className="font-black text-foreground">Lucky Draw</h3>
                            <p className="text-xs text-muted-foreground mt-1">Random amounts. Early birds get lucky!</p>
                        </button>
                    </div>
                </div>
            </>
          )}

          <div className="space-y-2">
            <label className="ml-2 text-sm font-bold text-muted-foreground">Unlock Date</label>
            <div className="grid grid-cols-2 gap-3">
                <input type="date" value={unlockDate} onChange={(e) => setUnlockDate(e.target.value)} className="w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none" />
                <input type="time" value={unlockTime} onChange={(e) => setUnlockTime(e.target.value)} className="w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none" />
            </div>
            {errors.date && <p className="ml-2 text-xs font-bold text-red-500">{errors.date}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between px-2">
                 <label className="text-sm font-bold text-muted-foreground">Note</label>
                 <span className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 rounded-full">HIDDEN</span>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message for the future..." className="h-24 w-full resize-none rounded-3xl border-none bg-secondary p-5 text-base outline-none focus:ring-2 focus:ring-primary/20" />
          </div>

          <div onClick={() => setIsAnonymous(!isAnonymous)} className="flex cursor-pointer items-center justify-between rounded-2xl border border-border p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", isAnonymous ? "bg-black text-white dark:bg-white dark:text-black" : "bg-secondary text-muted-foreground")}>{isAnonymous ? <UserX className="h-5 w-5" /> : <User className="h-5 w-5" />}</div>
                <div className="flex flex-col"><span className="text-sm font-bold">Anonymous Gift</span><span className="text-xs text-muted-foreground">Hide sender address</span></div>
            </div>
            <div className={cn("h-6 w-11 rounded-full transition-colors relative", isAnonymous ? "bg-primary" : "bg-muted-foreground/30")}>
                <span className={cn("absolute top-1 h-4 w-4 rounded-full bg-white transition-all shadow-sm", isAnonymous ? "left-6" : "left-1")} />
            </div>
          </div>

          <Button onClick={handleSubmit} disabled={loadingStep !== "IDLE" || !address || isConnecting} className="w-full h-14 rounded-full text-lg font-black shadow-lg shadow-primary/20 text-white hover:scale-[1.02] active:scale-[0.98] transition-all">
            {loadingStep === "APPROVING" ? (<span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Approving...</span>) : loadingStep === "CREATING" ? (<span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Minting...</span>) : !address ? "Connect Wallet" : (isRedPacket ? "Create Shareable Link" : "Create Gift")}
          </Button>
          
          {errors.submit && (
              <div className="mt-2 rounded-xl bg-red-50 p-3 border border-red-100">
                  <p className="text-center text-sm font-bold text-red-600">{errors.submit}</p>
              </div>
          )}
        </div>
      </main>
      
      <BottomNav />
      
      <GiftModal isOpen={showGiftModal} onClose={handleResetForm} type="success" gift={successData || {}} onSendAnother={handleResetForm} />
      
      <AnimatePresence>
        {showLinkModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm rounded-3xl bg-white dark:bg-card p-6 text-center shadow-2xl">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <Share2 className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-black text-foreground">Packet Ready!</h3>
                    <p className="mb-6 text-sm text-muted-foreground">Share this link with your friends. Anyone with the link can claim.</p>
                    
                    {/* 👇 3. Link copy button fix করা হয়েছে */}
                    <div className="mb-6 flex items-center justify-between bg-secondary p-4 rounded-2xl border border-border overflow-hidden">
                        <span className="text-sm font-bold truncate mr-2 text-foreground">{generatedLink}</span>
                        <button onClick={() => navigator.clipboard.writeText(generatedLink)} className="p-2 bg-white text-black rounded-full shadow-sm hover:bg-gray-200 flex-shrink-0"><Copy className="h-4 w-4"/></button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {/* 👇 1. Share on X (Twitter) - White background, Black text */}
                        <Button className="rounded-xl font-bold bg-white text-black hover:bg-gray-100 h-12 border-none">Share on X (Twitter)</Button>
                        
                        {/* 👇 2. Post on Base - White background, Blue text */}
<Button className="rounded-xl font-bold bg-black !text-[#0052FF] hover:bg-blue-50 h-12 border-none">
  Post on Base App
</Button>
                        
                        <Button onClick={handleResetForm} variant="ghost" className="rounded-xl font-bold h-12 mt-2">Close</Button>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      <DisconnectModal isOpen={showDisconnectAlert} onClose={() => setShowDisconnectAlert(false)} onConfirm={confirmDisconnect} />
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