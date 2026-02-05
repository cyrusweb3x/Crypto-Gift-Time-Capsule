"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { ConfettiEffect } from "@/components/confetti-effect";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Calendar, Clock, Clipboard, Info, Loader2, Gift, Wallet, CheckCircle2, AlertTriangle, User, UserX
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, parseUnits, ZeroAddress } from "ethers";

// --- Constants ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const CHAIN_ID_HEX = "0x14a34"; // Base Sepolia
const CHAIN_ID_DECIMAL = 84532;

// --- ABIs ---
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)"
];

const GIFT_CONTRACT_ABI = [
  "function createGift(address _recipient, address _tokenAddress, uint256 _amount, uint256 _unlockTime, string _message) payable"
];

// --- Helper Hooks ---

// 1. Hook for robust wallet connection
function useEvmWallet() {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [address, setAddress] = useState<string>("");
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

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
      }
    } catch (e) {
      console.error("Connection failed:", e);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const ensureChain = useCallback(async () => {
    if (!window.ethereum) return false;
    try {
      const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
      if (currentChainId === CHAIN_ID_HEX) return true;

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CHAIN_ID_HEX }],
      });
      // Refresh provider after switch
      const _provider = new BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      setProvider(_provider);
      setSigner(_signer);
      setChainId(CHAIN_ID_DECIMAL);
      return true;
    } catch (error) {
      console.error("Chain switch failed:", error);
      return false;
    }
  }, []);

  // Auto connect via eth_accounts (silent)
  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;
    
    const checkConnection = async () => {
      const _provider = new BrowserProvider(window.ethereum);
      const accounts = await _provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        const network = await _provider.getNetwork();
        const _signer = await _provider.getSigner();
        setProvider(_provider);
        setSigner(_signer);
        setAddress(accounts[0]);
        setChainId(Number(network.chainId));
      }
    };

    checkConnection();

    // Listeners
    const handleAccountsChanged = (accs: string[]) => {
      if (accs.length === 0) {
        setAddress("");
        setSigner(null);
      } else {
        setAddress(accs[0]);
        // Re-initialize signer/provider is safest
        checkConnection(); 
      }
    };
    
    const handleChainChanged = () => window.location.reload(); // Best practice for chain change

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
        if (window.ethereum) {
            window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
            window.ethereum.removeListener("chainChanged", handleChainChanged);
        }
    };
  }, []);

  return { provider, signer, address, chainId, connect, isConnecting, ensureChain };
}

// --- Main Component ---

export default function CreatePage() {
  const { provider, signer, address, chainId, connect, isConnecting, ensureChain } = useEvmWallet();

  // State
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
  const [amount, setAmount] = useState("");
  const [recipientInput, setRecipientInput] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  // Status State
  const [balances, setBalances] = useState({ ETH: "0.0", USDC: "0.0" });
  const [usdcDecimals, setUsdcDecimals] = useState(6); // Default 6
  const [isResolving, setIsResolving] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(false);
  const [loadingStep, setLoadingStep] = useState<"IDLE" | "APPROVING" | "CREATING">("IDLE");
  const [txHash, setTxHash] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 1. Fetch Balances & Decimals
  useEffect(() => {
    if (!address || !provider) return;
    
    const fetchData = async () => {
      try {
        // ETH
        const ethRaw = await provider.getBalance(address);
        
        // USDC
        const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
        const usdcRaw = await usdcContract.balanceOf(address);
        const decimals = await usdcContract.decimals(); // Dynamic fetch
        
        setUsdcDecimals(Number(decimals));
        setBalances({
          ETH: formatUnits(ethRaw, 18),
          USDC: formatUnits(usdcRaw, decimals)
        });
      } catch (e) {
        console.error("Balance fetch error:", e);
      }
    };
    fetchData();
    // Poll every 10s for updates
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [address, provider]);

  // 2. Check Approval Requirement
  useEffect(() => {
    if (selectedToken === "USDC" && address && signer) {
      const checkAllowance = async () => {
        try {
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
          const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
          
          // If input amount is valid, check against it, otherwise check against 0
          let checkAmount = BigInt(0);
          try {
             checkAmount = parseUnits(amount || "0", usdcDecimals);
          } catch {}

          if (allowance < checkAmount && checkAmount > BigInt(0)) {
            setNeedsApproval(true);
          } else {
             // If we have infinite approval (very large number), we don't need approval
             // Or if amount is 0, we assume no approval needed yet
             setNeedsApproval(allowance === BigInt(0) && parseFloat(amount) > 0);
          }
        } catch (e) { console.error(e); }
      };
      checkAllowance();
    } else {
      setNeedsApproval(false);
    }
  }, [selectedToken, amount, address, signer, usdcDecimals]);

  // 3. Address Resolution
  const handleRecipientChange = async (val: string) => {
    setRecipientInput(val);
    setErrors(prev => ({ ...prev, recipient: "" }));
    
    if (!val) {
      setResolvedAddress("");
      return;
    }

    if (ethers.isAddress(val)) {
      setResolvedAddress(val);
      return;
    }

    // Resolve ENS/Basename
    setIsResolving(true);
    try {
      if (provider) {
        const resolved = await provider.resolveName(val);
        if (resolved) {
          setResolvedAddress(resolved);
        } else {
          setResolvedAddress(""); // Invalid name
        }
      }
    } catch {
      setResolvedAddress("");
    } finally {
      setIsResolving(false);
    }
  };

  // 4. Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Amount
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = "Enter valid amount";
    } else {
      const bal = selectedToken === "ETH" ? balances.ETH : balances.USDC;
      if (parseFloat(amount) > parseFloat(bal)) newErrors.amount = "Insufficient balance";
    }

    // Address
    if (!resolvedAddress) newErrors.recipient = "Invalid address or name";

    // Time
    if (!unlockDate || !unlockTime) {
      newErrors.date = "Select date & time";
    } else {
      const targetTime = new Date(`${unlockDate}T${unlockTime}`);
      const minTime = new Date(Date.now() + 60 * 1000); // 1 minute from now
      if (targetTime < minTime) {
        newErrors.date = "Time must be at least 1 min in future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 5. Submit Handler
  const handleSubmit = async () => {
    if (!validate()) return;
    if (!signer) {
        connect();
        return;
    }
    
    // Ensure Chain
    const correctChain = await ensureChain();
    if (!correctChain) {
        setErrors({ submit: "Wrong network. Switch to Base Sepolia." });
        return;
    }

    try {
      setLoadingStep("IDLE");
      
      const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
      const giftContract = new Contract(CONTRACT_ADDRESS, GIFT_CONTRACT_ABI, signer);
      
      // Calculate Amounts safely
      const decimals = selectedToken === "ETH" ? 18 : usdcDecimals;
      const amountWei = parseUnits(amount, decimals);
      const unlockTimestamp = Math.floor(new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000);

      // --- Obfuscate Message (Base64) ---
      // This is NOT encryption, but it hides raw text from casual block explorer reading
      const obfuscatedMessage = btoa(message || ""); 

      // --- Step A: Approval (if USDC) ---
      if (selectedToken === "USDC") {
        const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
        if (allowance < amountWei) {
            setLoadingStep("APPROVING");
            // Approve Max to avoid future prompts
            const txApprove = await usdcContract.approve(CONTRACT_ADDRESS, ethers.MaxUint256);
            await txApprove.wait();
        }
      }

      // --- Step B: Create Gift ---
      setLoadingStep("CREATING");
      
      const tokenArg = selectedToken === "ETH" ? ZeroAddress : USDC_ADDRESS;
      const valueArg = selectedToken === "ETH" ? amountWei : 0;

      const tx = await giftContract.createGift(
        resolvedAddress,
        tokenArg,
        amountWei,
        unlockTimestamp,
        obfuscatedMessage,
        { value: valueArg }
      );

      await tx.wait();
      setTxHash(tx.hash);
      setShowSuccess(true);
      
      // Reset Form
      setAmount("");
      setMessage("");
      setLoadingStep("IDLE");

    } catch (err: any) {
      console.error(err);
      setLoadingStep("IDLE");
      if (err.code === "ACTION_REJECTED") return; // User rejected
      setErrors({ submit: "Transaction failed. Check console." });
    }
  };

  const handlePaste = async () => {
      try {
          const text = await navigator.clipboard.readText();
          handleRecipientChange(text);
      } catch {}
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header
        isConnected={!!address}
        address={address}
        onConnect={connect}
        onDisconnect={() => window.location.reload()}
      />

      <ConfettiEffect trigger={showSuccess} />

      <main className="mx-auto max-w-[480px] px-4 py-6">
        {/* Intro */}
        <div className="mb-6 text-center">
             <h1 className="text-2xl font-bold">Create Gift</h1>
             <p className="text-muted-foreground text-sm">Send crypto locked until a future date</p>
        </div>

        {/* Network Warning */}
        {chainId && chainId !== CHAIN_ID_DECIMAL && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-yellow-500/10 p-3 text-yellow-500 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Wrong Network. <button onClick={ensureChain} className="underline font-bold">Switch to Base Sepolia</button></span>
            </div>
        )}

        <div className="space-y-4">
          
          {/* 1. Asset Selection */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="mb-3 flex justify-between text-xs text-muted-foreground">
                <span>Select Asset</span>
                <span>Balance: {selectedToken === "ETH" ? parseFloat(balances.ETH).toFixed(4) : parseFloat(balances.USDC).toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => setSelectedToken("ETH")}
                    className={cn("flex-1 rounded-xl border p-3 font-medium transition-all", selectedToken === "ETH" ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-secondary")}
                >
                    ETH
                </button>
                <button 
                    onClick={() => setSelectedToken("USDC")}
                    className={cn("flex-1 rounded-xl border p-3 font-medium transition-all", selectedToken === "USDC" ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-secondary")}
                >
                    USDC
                </button>
            </div>
          </div>

          {/* 2. Amount */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <label className="text-sm font-medium">Amount</label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-secondary p-3">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-transparent text-lg font-bold outline-none placeholder:text-muted-foreground"
                />
                <span className="text-sm font-bold text-muted-foreground">{selectedToken}</span>
            </div>
            {errors.amount && <p className="mt-2 text-xs text-red-500">{errors.amount}</p>}
          </div>

           {/* 3. Recipient */}
           <div className="rounded-2xl border border-border bg-card p-4">
            <label className="text-sm font-medium">To (Address / Basename)</label>
            <div className="relative mt-2">
                <input 
                    value={recipientInput}
                    onChange={(e) => handleRecipientChange(e.target.value)}
                    placeholder="0x... or friend.base.eth"
                    className="w-full rounded-xl border border-border bg-secondary p-3 pr-10 text-sm outline-none focus:border-primary"
                />
                <button onClick={handlePaste} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
                    <Clipboard className="h-4 w-4" />
                </button>
            </div>
            {isResolving && <p className="mt-1 text-xs text-muted-foreground animate-pulse">Resolving name...</p>}
            {resolvedAddress && resolvedAddress !== recipientInput && (
                <p className="mt-1 text-xs text-green-500">Resolved: {resolvedAddress.slice(0,6)}...{resolvedAddress.slice(-4)}</p>
            )}
            {errors.recipient && <p className="mt-2 text-xs text-red-500">{errors.recipient}</p>}
          </div>

          {/* 4. Message (Hidden) */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium">Message</label>
                <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                    <Info className="h-3 w-3" /> Hidden until unlock
                </div>
            </div>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say something special..."
                className="h-20 w-full resize-none rounded-xl border border-border bg-secondary p-3 text-sm outline-none focus:border-primary"
            />
          </div>

          {/* 5. Time & Date */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <label className="text-sm font-medium">Unlock Time</label>
            <div className="mt-2 flex gap-3">
                <input 
                    type="date" 
                    value={unlockDate}
                    onChange={(e) => setUnlockDate(e.target.value)}
                    className="flex-1 rounded-xl border border-border bg-secondary p-3 text-sm outline-none"
                />
                <input 
                    type="time" 
                    value={unlockTime}
                    onChange={(e) => setUnlockTime(e.target.value)}
                    className="flex-1 rounded-xl border border-border bg-secondary p-3 text-sm outline-none"
                />
            </div>
            {errors.date && <p className="mt-2 text-xs text-red-500">{errors.date}</p>}
          </div>

          {/* Action Button */}
          <Button
            onClick={handleSubmit}
            disabled={loadingStep !== "IDLE" || !address || isConnecting}
            className="w-full py-6 text-lg font-bold shadow-lg"
          >
            {loadingStep === "APPROVING" ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Approving USDC...
                </>
            ) : loadingStep === "CREATING" ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Wrapping Gift...
                </>
            ) : !address ? (
                "Connect Wallet"
            ) : (
                <>
                    <Gift className="mr-2 h-5 w-5" />
                    Create Gift
                </>
            )}
          </Button>

          {errors.submit && <p className="text-center text-sm text-red-500">{errors.submit}</p>}

        </div>
      </main>
      
      <BottomNav />
      
      {/* Success Modal */}
      <GiftModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="success"
        gift={{
             token: selectedToken,
             amount: amount,
             recipient: resolvedAddress,
             unlockDate: new Date(`${unlockDate}T${unlockTime}`),
             message: message, // Passed plain here for preview, but on chain it's base64
             txHash: txHash,
             nftTokenId: "Minted",
             isAnonymous: isAnonymous
        }}
        onSendAnother={() => {
            setShowSuccess(false);
            setAmount("");
            setMessage("");
        }}
      />
    </div>
  );
}