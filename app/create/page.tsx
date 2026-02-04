"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ethers, BrowserProvider, Contract } from "ethers";

// --- Configuration ---
const CONTRACT_ADDRESS = "0xAa70c7FCd42ec34EC32F95F9dAdC5A9DC1EAb0Bc";
const BASE_SEPOLIA_ID = "0x14a34"; // 84532
const CONTRACT_ABI = [
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
	{
		"inputs": [],
		"name": "EtherTransferFailed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "unlockTime",
				"type": "uint256"
			}
		],
		"name": "GiftStillLocked",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidAmount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidTime",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MismatchEthAmount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotRecipient",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotSender",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TokenTransferFailed",
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
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GiftCancelled",
		"type": "event"
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
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GiftWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_giftId",
				"type": "uint256"
			}
		],
		"name": "withdrawGift",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_giftId",
				"type": "uint256"
			}
		],
		"name": "getGiftDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "unlockTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isWithdrawn",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isCancelled",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct CryptoGiftCapsule.Gift",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "giftCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default function CreatePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<any>(null);

  // Form state
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [txHash, setTxHash] = useState("");

  // Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  // --- Wallet Connection Logic ---
  const handleConnect = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      setIsLoading(true);
      const _provider = new ethers.BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      const _address = await _signer.getAddress();
      const network = await _provider.getNetwork();

      // Switch to Base Sepolia if needed
      if (network.chainId !== 84532n) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BASE_SEPOLIA_ID }],
          });
        } catch (switchError: any) {
          // If chain is not added, we could add logic to addChain here
          if (switchError.code === 4902) {
             alert("Please add Base Sepolia network to your wallet.");
          } else {
             console.error("Failed to switch network:", switchError);
          }
        }
      }

      setProvider(_provider);
      setSigner(_signer);
      setAddress(_address);
      setIsConnected(true);
    } catch (error) {
      console.error("Connection Failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setSigner(null);
  };

  // Check if wallet is already connected
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      handleConnect();
    }
  }, []);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRecipient(text);
    } catch (err) {
      console.error("Failed to paste:", err);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!amount || Number.parseFloat(amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (!recipient) {
      newErrors.recipient = "Please enter a recipient address";
    } else if (!ethers.isAddress(recipient)) {
      newErrors.recipient = "Invalid Ethereum address";
    }

    if (!unlockDate || !unlockTime) {
      newErrors.date = "Please select unlock date and time";
    } else {
      const selectedDateTime = new Date(`${unlockDate}T${unlockTime}`);
      const minTime = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
      if (selectedDateTime <= minTime) {
        newErrors.date = "Unlock time must be at least 5 minutes in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Contract Interaction ---
  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (!signer) {
      alert("Please connect your wallet first");
      handleConnect();
      return;
    }

    // Currently only supporting ETH as per contract interaction plan
    if (selectedToken !== "ETH") {
      alert("Demo currently supports ETH gifts only. Please select ETH.");
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      
      // Parse inputs
      const amountInWei = ethers.parseEther(amount);
      const unlockTimestamp = Math.floor(new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000);
      const tokenAddress = ethers.ZeroAddress; // ETH

      console.log("Creating gift...", {
        recipient,
        tokenAddress,
        amountInWei,
        unlockTimestamp,
        message
      });

      // Call Contract: createGift(recipient, token, amount, unlockTime, message)
      const tx = await contract.createGift(
        recipient,
        tokenAddress,
        amountInWei,
        unlockTimestamp,
        message || "Best Wishes!", // Default message if empty
        {
          value: amountInWei // Important for ETH transfer
        }
      );

      console.log("Transaction Sent:", tx.hash);
      
      // Wait for confirmation
      await tx.wait();
      
      setTxHash(tx.hash);
      setShowConfetti(true);
      setShowSuccess(true);

    } catch (error: any) {
      console.error("Transaction Error:", error);
      // Handle User Rejected
      if (error.code === 'ACTION_REJECTED' || error.code === 4001) {
        setErrors({ submit: "Transaction rejected by user." });
      } else {
        setErrors({ submit: error.reason || error.message || "Transaction failed." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnother = () => {
    setShowSuccess(false);
    setShowConfetti(false);
    setAmount("");
    setMessage("");
    setRecipient("");
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
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const isFormValid =
    amount &&
    Number.parseFloat(amount) > 0 &&
    recipient &&
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
          Send a surprise to someone special
        </motion.p>

        <div className="space-y-4">
          {/* Token Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <TokenSelector
              selectedToken={selectedToken}
              onSelect={setSelectedToken}
              ethBalance="--" // Ideally fetch this from provider
              usdcBalance="--"
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
              balance={selectedToken === "ETH" ? "--" : "--"}
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
            <label className="mb-3 block text-sm font-medium text-foreground">
              Your Message
            </label>
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

          {/* Recipient Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <label className="mb-3 block text-sm font-medium text-foreground">
              Recipient Wallet
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
                placeholder="0x..."
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={handlePaste}
                className="rounded-lg p-2 text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
              >
                <Clipboard className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 text-muted-foreground hover:bg-card hover:text-foreground transition-colors">
                <QrCode className="h-4 w-4" />
              </button>
            </div>
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
                Gift unlocks on: <span className="text-primary">{getUnlockPreview()}</span>
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
            <label className="mb-3 block text-sm font-medium text-foreground">
              Sender Identity
            </label>
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
                <span className="font-medium">Reveal Identity</span>
              </motion.button>
            </div>
            <p className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <Info className="h-3 w-3" />
              Recipient will {isAnonymous ? "not " : ""}see your address (UI only, public on chain)
            </p>
          </motion.div>

          {/* NFT Key Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-3 rounded-xl bg-primary/5 p-4"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-xs text-muted-foreground">
              This gift mints a unique NFT key to the recipient. The NFT is required to
              claim the gift and cannot unlock someone else&apos;s capsule.
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent py-6 text-lg font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Gift className="mr-2 h-5 w-5" />
                  Send {selectedToken} Gift
                </>
              )}
            </Button>
            {errors.submit && (
                <p className="mt-2 text-center text-xs text-destructive">{errors.submit}</p>
            )}
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Network fee paid in ETH
            </p>
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
          recipient,
          unlockDate: new Date(`${unlockDate}T${unlockTime}`),
          message,
          txHash: txHash || "0x...",
          nftTokenId: "Generated on-chain",
          isAnonymous,
        }}
        onSendAnother={handleSendAnother}
      />
    </div>
  );
}