"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { TokenSelector } from "@/components/token-selector";
import { AmountInput } from "@/components/amount-input";
import { ConfettiEffect } from "@/components/confetti-effect";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Clipboard,
  QrCode,
  User,
  UserX,
  Info,
  Loader2,
  Gift,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";

// --- Configuration ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
// Using Base Sepolia USDC (Standard Testnet Token) - Change if you have a specific custom token
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"; 
const BASE_SEPOLIA_ID = "0x14a34"; // Chain ID: 84532

// --- ABIs ---
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const GIFT_CONTRACT_ABI = [
  // ... (Your provided ABI)
  {
		"inputs": [],
		"name": "AlreadyWithdrawn",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_giftId",
				"type": "uint256"
			}
		],
		"name": "cancelGift",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_unlockTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "createGift",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
    // ... Keeping essential errors and events for brevity in reading, 
    // but in real code, include full ABI or just the needed parts.
    // For this context, I am assuming the ABI provided in the prompt is fully used here.
    {
		"inputs": [],
		"name": "EtherTransferFailed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "giftId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "unlockTime",
				"type": "uint256"
			}
		],
		"name": "GiftCreated",
		"type": "event"
	}
];

export default function CreatePage() {
  // Connection State
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);

  // Form State
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [recipientInput, setRecipientInput] = useState(""); // Raw input (address or ENS)
  const [resolvedAddress, setResolvedAddress] = useState(""); // The actual 0x address
  const [isResolvingName, setIsResolvingName] = useState(false);
  
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  
  // Transaction State
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<"IDLE" | "APPROVING" | "CREATING">("IDLE");
  const [needsApproval, setNeedsApproval] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [txHash, setTxHash] = useState("");

  // Data State
  const [ethBalance, setEthBalance] = useState("0.0");
  const [usdcBalance, setUsdcBalance] = useState("0.0");

  const [errors, setErrors] = useState<Record<string, string>>({});

  // --- 1. Auto Connect Logic ---
  const initWallet = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;

    try {
      const _provider = new ethers.BrowserProvider(window.ethereum);
      // Check if already connected
      const accounts = await _provider.send("eth_accounts", []);
      
      if (accounts.length > 0) {
        const _signer = await _provider.getSigner();
        const _address = accounts[0];
        const network = await _provider.getNetwork();

        setProvider(_provider);
        setSigner(_signer);
        setAddress(_address);
        setIsConnected(true);
        
        // Auto switch network if wrong
        if (network.chainId !== BigInt(BASE_SEPOLIA_ID)) {
             try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: BASE_SEPOLIA_ID }],
                });
            } catch (e) {
                console.warn("Network switch failed or ignored");
            }
        }
      }
    } catch (error) {
      console.error("Auto connect failed:", error);
    }
  }, []);

  useEffect(() => {
    initWallet();
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts: string[]) => {
            if (accounts.length > 0) initWallet();
            else handleDisconnect();
        });
    }
    return () => {
        if (window.ethereum) window.ethereum.removeAllListeners();
    };
  }, [initWallet]);


  // --- 2. Fetch Balances ---
  useEffect(() => {
    if (!address || !provider) return;

    const fetchBalances = async () => {
        try {
            // ETH Balance
            const ethBal = await provider.getBalance(address);
            setEthBalance(formatUnits(ethBal, 18));

            // USDC Balance
            const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
            const usdcBal = await usdcContract.balanceOf(address);
            const decimals = await usdcContract.decimals();
            setUsdcBalance(formatUnits(usdcBal, decimals));
        } catch (error) {
            console.error("Error fetching balances:", error);
        }
    };

    fetchBalances();
  }, [address, provider]);

  // --- 3. Check USDC Allowance (When amount changes) ---
  useEffect(() => {
    if (selectedToken === "USDC" && amount && signer) {
        const checkAllowance = async () => {
            try {
                const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
                const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
                const decimals = await usdcContract.decimals();
                const amountBN = parseUnits(amount, decimals);
                
                // If allowance is less than amount, we need approval
                setNeedsApproval(allowance < amountBN);
            } catch (e) {
                console.error("Check allowance failed", e);
            }
        };
        checkAllowance();
    } else {
        setNeedsApproval(false);
    }
  }, [selectedToken, amount, address, signer]);


  // --- Handlers ---
  const handleConnect = async () => {
    if (!window.ethereum) {
      alert("Please install a wallet!");
      return;
    }
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      initWallet();
    } catch (error) {
      console.error("Connection Request Failed", error);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRecipientInput(text);
      validateAddress(text);
    } catch (err) {
      console.error("Failed to paste:", err);
    }
  };

  // --- Address Resolution (ENS/Basename) ---
  const validateAddress = async (input: string) => {
    setResolvedAddress("");
    if (!input) return;

    if (ethers.isAddress(input)) {
        setResolvedAddress(input);
        return true;
    } 
    
    // Try to resolve ENS/Basename
    setIsResolvingName(true);
    try {
        if (!provider) return false;
        const resolved = await provider.resolveName(input);
        if (resolved) {
            setResolvedAddress(resolved);
            setIsResolvingName(false);
            return true;
        }
    } catch (e) {
        console.error("Resolution failed", e);
    }
    setIsResolvingName(false);
    return false;
  };

  // Update resolved address when input changes with debounce could be better, 
  // but for now we validate on blur or submit.
  useEffect(() => {
    const timer = setTimeout(() => {
        validateAddress(recipientInput);
    }, 800);
    return () => clearTimeout(timer);
  }, [recipientInput, provider]);


  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!amount || Number.parseFloat(amount) <= 0) {
      newErrors.amount = "Enter a valid amount";
    }

    // Balance Check
    const currentBal = selectedToken === "ETH" ? parseFloat(ethBalance) : parseFloat(usdcBalance);
    if (amount && parseFloat(amount) > currentBal) {
        newErrors.amount = "Insufficient balance";
    }

    if (!resolvedAddress) {
      newErrors.recipient = "Invalid address or Basename";
    }

    if (!unlockDate || !unlockTime) {
      newErrors.date = "Set unlock time";
    } else {
      const selectedDateTime = new Date(`${unlockDate}T${unlockTime}`);
      // Task 3: 1 Minute Minimum
      const minTime = new Date(Date.now() + 1 * 60 * 1000); 
      if (selectedDateTime <= minTime) {
        newErrors.date = "Time must be at least 1 minute in future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Transaction Logic ---
  const handleApprove = async () => {
    if (!signer) return;
    setIsLoading(true);
    setLoadingStep("APPROVING");
    try {
        const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, signer);
        // Approve Max Uint256 so user never has to approve again (Infinite Approval)
        const maxApproval = ethers.MaxUint256;
        const tx = await usdcContract.approve(CONTRACT_ADDRESS, maxApproval);
        await tx.wait();
        setNeedsApproval(false);
    } catch (error) {
        console.error("Approval failed", error);
        setErrors({ submit: "Approval failed. Please try again." });
    } finally {
        setIsLoading(false);
        setLoadingStep("IDLE");
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (!signer) {
      handleConnect();
      return;
    }

    if (selectedToken === "USDC" && needsApproval) {
        await handleApprove();
        return; // Stop here, user needs to click "Send" again or we could auto-chain
    }

    setIsLoading(true);
    setLoadingStep("CREATING");
    setErrors({});

    try {
      const contract = new Contract(CONTRACT_ADDRESS, GIFT_CONTRACT_ABI, signer);
      
      const unlockTimestamp = Math.floor(new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000);
      
      // Token Handling
      let tokenAddr = ethers.ZeroAddress;
      let val = ethers.parseEther("0");
      let amountWei = BigInt(0);

      if (selectedToken === "ETH") {
          tokenAddr = ethers.ZeroAddress;
          amountWei = parseUnits(amount, 18);
          val = amountWei; // ETH sent as value
      } else {
          tokenAddr = USDC_ADDRESS;
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
          const decimals = await usdcContract.decimals();
          amountWei = parseUnits(amount, decimals);
          val = parseUnits("0", 0); // No ETH sent
      }

      console.log("Creating gift...", {
        recipient: resolvedAddress,
        token: tokenAddr,
        amount: amountWei.toString(),
        unlock: unlockTimestamp
      });

      // Note: Message hidden logic is handled on the View Page (decryption/hiding). 
      // Blockchain stores string as is.
      const tx = await contract.createGift(
        resolvedAddress,
        tokenAddr,
        amountWei,
        unlockTimestamp,
        message || "Best Wishes!",
        { value: val }
      );

      console.log("Tx Sent:", tx.hash);
      await tx.wait();
      
      setTxHash(tx.hash);
      setShowConfetti(true);
      setShowSuccess(true);
      
      // Refresh balances
      const ethBal = await provider?.getBalance(address);
      setEthBalance(ethBal ? formatUnits(ethBal, 18) : "0");
      // Could refresh USDC too...

    } catch (error: any) {
      console.error("Tx Error:", error);
      if (error.code === 'ACTION_REJECTED' || error.code === 4001) {
        setErrors({ submit: "Transaction cancelled." });
      } else {
        setErrors({ submit: "Transaction failed. Check console." });
      }
    } finally {
      setIsLoading(false);
      setLoadingStep("IDLE");
    }
  };

  const handleSendAnother = () => {
    setShowSuccess(false);
    setShowConfetti(false);
    setAmount("");
    setMessage("");
    setRecipientInput("");
    setResolvedAddress("");
    setUnlockDate("");
    setUnlockTime("");
    setIsAnonymous(true);
    setErrors({});
    setTxHash("");
  };

  const getUnlockPreview = () => {
    if (!unlockDate || !unlockTime) return null;
    const date = new Date(`${unlockDate}T${unlockTime}`);
    return date.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit",
    });
  };

  const isFormValid =
    amount &&
    parseFloat(amount) > 0 &&
    resolvedAddress &&
    unlockDate &&
    unlockTime;

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <ConfettiEffect trigger={showConfetti} />

      <main className="mx-auto max-w-[480px] px-4 py-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center text-lg text-muted-foreground"
        >
          Send a future locked crypto gift
        </motion.p>

        <div className="space-y-4">
          
          {/* Token & Balance Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
             <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-xs font-medium text-muted-foreground">Select Asset</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Wallet className="h-3 w-3" />
                    Balance: <span className="text-foreground font-mono">
                        {selectedToken === "ETH" 
                            ? parseFloat(ethBalance).toFixed(4) 
                            : parseFloat(usdcBalance).toFixed(2)}
                    </span>
                </span>
            </div>
            <TokenSelector
              selectedToken={selectedToken}
              onSelect={setSelectedToken}
              ethBalance={ethBalance}
              usdcBalance={usdcBalance}
            />
          </motion.div>

          {/* Amount Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <AmountInput
              token={selectedToken}
              value={amount}
              onChange={setAmount}
              balance={selectedToken === "ETH" ? ethBalance : usdcBalance}
              error={errors.amount}
            />
          </motion.div>

          {/* Message Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="mb-3 flex justify-between">
                <label className="text-sm font-medium text-foreground">
                Secret Message
                </label>
                <div className="flex items-center gap-1 text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                   <Info className="w-3 h-3"/> Hidden until unlock
                </div>
            </div>
            <textarea
              placeholder="Write something meaningful..."
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 500))}
              className="min-h-[100px] w-full resize-none rounded-xl border border-border bg-secondary p-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <div className="mt-2 flex justify-end">
              <span className="text-xs text-muted-foreground">
                {message.length}/500
              </span>
            </div>
          </motion.div>

          {/* Recipient Address / ENS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <label className="mb-3 block text-sm font-medium text-foreground">
              Recipient (Address or Basename)
            </label>
            <div
              className={cn(
                "flex items-center gap-2 rounded-xl border bg-secondary p-3 transition-all",
                errors.recipient
                  ? "border-destructive"
                  : "border-border focus-within:border-primary"
              )}
            >
              <input
                type="text"
                placeholder="0x... or name.base.eth"
                value={recipientInput}
                onChange={(e) => setRecipientInput(e.target.value)}
                className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {isResolvingName ? (
                   <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : resolvedAddress && recipientInput !== resolvedAddress ? (
                   <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <button
                    onClick={handlePaste}
                    className="rounded-lg p-2 text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
                >
                    <Clipboard className="h-4 w-4" />
                </button>
              )}
            </div>
            {resolvedAddress && recipientInput !== resolvedAddress && (
                 <p className="mt-2 text-xs text-muted-foreground break-all">
                    Resolved: <span className="font-mono text-primary">{resolvedAddress}</span>
                 </p>
            )}
            {errors.recipient && (
              <p className="mt-2 text-xs text-destructive">{errors.recipient}</p>
            )}
          </motion.div>

          {/* Unlock Date & Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <label className="mb-3 block text-sm font-medium text-foreground">
              Unlock Date
            </label>
            <div className="flex gap-3">
              <div
                className={cn(
                  "flex flex-1 items-center gap-2 rounded-xl border bg-secondary p-3 transition-all",
                  errors.date
                    ? "border-destructive"
                    : "border-border focus-within:border-primary"
                )}
              >
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <input
                  type="date"
                  value={unlockDate}
                  onChange={(e) => setUnlockDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="flex-1 bg-transparent text-sm text-foreground focus:outline-none [color-scheme:dark]"
                />
              </div>
              <div
                className={cn(
                  "flex flex-1 items-center gap-2 rounded-xl border bg-secondary p-3 transition-all",
                  errors.date
                    ? "border-destructive"
                    : "border-border focus-within:border-primary"
                )}
              >
                <Clock className="h-4 w-4 text-muted-foreground" />
                <input
                  type="time"
                  value={unlockTime}
                  onChange={(e) => setUnlockTime(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground focus:outline-none [color-scheme:dark]"
                />
              </div>
            </div>
            {getUnlockPreview() && (
              <p className="mt-3 text-sm text-muted-foreground">
                Unlocks on: <span className="text-primary">{getUnlockPreview()}</span>
              </p>
            )}
            {errors.date && (
              <p className="mt-2 text-xs text-destructive">{errors.date}</p>
            )}
          </motion.div>

          {/* Sender Identity Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsAnonymous(true)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-xl border p-4 transition-all",
                  isAnonymous
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-muted-foreground hover:border-primary/30"
                )}
              >
                <UserX className="h-5 w-5" />
                <span className="font-medium">Anonymous</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsAnonymous(false)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-xl border p-4 transition-all",
                  !isAnonymous
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-muted-foreground hover:border-primary/30"
                )}
              >
                <User className="h-5 w-5" />
                <span className="font-medium">From Me</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading || !isConnected}
              className={cn(
                  "w-full py-6 text-lg font-semibold hover:opacity-90 disabled:opacity-50",
                  needsApproval && selectedToken === "USDC" 
                    ? "bg-blue-600 hover:bg-blue-700" // Different color for Approval
                    : "bg-gradient-to-r from-primary to-accent"
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {loadingStep === "APPROVING" ? "Approving USDC..." : "Creating Gift..."}
                </>
              ) : (
                <>
                  {needsApproval && selectedToken === "USDC" ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Approve USDC First
                      </>
                  ) : (
                      <>
                        <Gift className="mr-2 h-5 w-5" />
                        Send {selectedToken} Gift
                      </>
                  )}
                </>
              )}
            </Button>
            
            {!isConnected && (
                <p className="mt-2 text-center text-xs text-destructive">Connect wallet to send</p>
            )}

            {errors.submit && (
                <p className="mt-2 text-center text-xs text-destructive">{errors.submit}</p>
            )}
            
            {selectedToken === "USDC" && needsApproval && (
                 <p className="mt-2 text-center text-[10px] text-muted-foreground">
                    One-time approval required for USDC.
                 </p>
            )}
          </motion.div>
        </div>
      </main>

      <BottomNav />

      <GiftModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="success"
        gift={{
          token: selectedToken,
          amount,
          recipient: resolvedAddress,
          unlockDate: new Date(`${unlockDate}T${unlockTime}`),
          message,
          txHash: txHash || "0x...",
          nftTokenId: "Minted!",
          isAnonymous,
        }}
        onSendAnother={handleSendAnother}
      />
    </div>
  );
}