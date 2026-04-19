"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { ConfettiEffect } from "@/components/confetti-effect";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Clipboard, Loader2, AlertTriangle, User, UserX,
  AlertCircle, Gift, Copy, Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ethers, BrowserProvider, Contract, formatUnits,
  parseUnits, ZeroAddress, JsonRpcProvider
} from "ethers";
import { motion, AnimatePresence } from "framer-motion";
import contractAbi from "@/contractAbi.json";
import { appendBuilderCode } from "@/lib/builderCode";
import { encryptMessage } from "@/lib/messageCrypto";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const CONTRACT_ADDRESS = "0xc160E1b43203A4d18E4069437Bc960248f91d847";
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const CHAIN_ID_HEX = "0x2105";
const CHAIN_ID_DECIMAL = 8453;
const STORAGE_KEY = "yupp_wallet_connected";
const ETH_PRESETS = ["0.001", "0.01", "0.05", "0.1", "0.5"];
const USDC_PRESETS = ["5", "10", "20", "50", "100"];

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

const basePublicClient = createPublicClient({
  chain: base,
  transport: http("https://mainnet.base.org"),
});

// ─── safe string helpers (never type workaround) ─────────────────────────────
function strHasDot(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") return true;
  }
  return false;
}

function strContains(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
}
// ─────────────────────────────────────────────────────────────────────────────

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
      const _provider = new BrowserProvider(window.ethereum, "any");
      const accounts: string[] = await _provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        const network = await _provider.getNetwork();
        const _signer = await _provider.getSigner();
        setProvider(_provider);
        setSigner(_signer);
        setAddress(accounts[0]);
        setChainId(Number(network.chainId));
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch (e) {
      console.error("Silent connect error", e);
    }
  }, []);

  const connect = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    setIsConnecting(true);
    try {
      const _provider = new BrowserProvider(window.ethereum, "any");
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const network = await _provider.getNetwork();
      if (accounts[0]) {
        const _signer = await _provider.getSigner();
        setProvider(_provider);
        setSigner(_signer);
        setAddress(accounts[0]);
        setChainId(Number(network.chainId));
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch (e) {
      console.error("Connection failed:", e);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const confirmDisconnect = useCallback(() => {
    setAddress("");
    setSigner(null);
    setProvider(null);
    setChainId(null);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
    if (!window.ethereum) return;
    const eth: any = window.ethereum;
    const onAccountsChanged = (accs: string[]) => {
      if (accs.length === 0) confirmDisconnect();
      else checkConnection();
    };
    const onChainChanged = () => setTimeout(checkConnection, 1000);
    eth.on("accountsChanged", onAccountsChanged);
    eth.on("chainChanged", onChainChanged);
    return () => {
      eth.removeListener("accountsChanged", onAccountsChanged);
      eth.removeListener("chainChanged", onChainChanged);
    };
  }, [checkConnection, confirmDisconnect]);

  return {
    provider,
    signer,
    address,
    chainId,
    connect,
    disconnect: () => setShowDisconnectAlert(true),
    confirmDisconnect,
    showDisconnectAlert,
    setShowDisconnectAlert,
    isConnecting,
  };
}

export default function CreatePage() {
  const {
    provider,
    signer,
    address,
    chainId,
    connect,
    disconnect,
    confirmDisconnect,
    showDisconnectAlert,
    setShowDisconnectAlert,
    isConnecting,
  } = useEvmWallet();

  const [isRedPacket, setIsRedPacket] = useState(false);
  const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
  const [amount, setAmount] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [balances, setBalances] = useState({ ETH: "0.0", USDC: "0.0" });
  const [usdcDecimals, setUsdcDecimals] = useState(6);
  const [usdcAllowance, setUsdcAllowance] = useState<bigint>(BigInt(0));
  const [needsApproval, setNeedsApproval] = useState(false);
  const [loadingStep, setLoadingStep] = useState<"IDLE" | "APPROVING" | "CREATING">("IDLE");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [recipientInput, setRecipientInput] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");
  const [isResolving, setIsResolving] = useState(false);
  const [resolutionError, setResolutionError] = useState<string>("");
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [successData, setSuccessData] = useState<{
    token: string;
    amount: string;
    recipient: string;
    unlockDate: Date;
    message: string;
    txHash: string;
    nftTokenId: string;
    isAnonymous: boolean;
  } | null>(null);
  const [maxClaimers, setMaxClaimers] = useState("10");
  const [distributionType, setDistributionType] = useState<"EQUAL" | "LUCKY">("EQUAL");
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const latestInputRef = useRef<string>("");

  // ─── resolveUsername ──────────────────────────────────────────────────────
  const resolveUsername = async (name: string): Promise<string | null> => {
    try {
      const { normalize, namehash } = await import("viem/ens");
      const node = namehash(normalize(name));
      const registryAddress = "0xB94704422c2a1E396835A571837Aa5AE53285a95";

      const resolverAddress = (await basePublicClient.readContract({
        address: registryAddress as `0x${string}`,
        abi: [
          {
            name: "resolver",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "node", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
        ],
        functionName: "resolver",
        args: [node],
      })) as string;

      const zeroAddr = "0x0000000000000000000000000000000000000000";
      if (!resolverAddress || resolverAddress === zeroAddr) return null;

      const resolved = (await basePublicClient.readContract({
        address: resolverAddress as `0x${string}`,
        abi: [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "node", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
        ],
        functionName: "addr",
        args: [node],
      })) as string;

      if (resolved && resolved !== zeroAddr) return resolved;
    } catch (err) {
      console.error("Base username resolution failed:", err);
    }

    try {
      const { getAddress } = await import("@coinbase/onchainkit/identity");
      const { base: baseChain } = await import("viem/chains");
      const resolved = await getAddress({ name, chain: baseChain });
      if (resolved) return resolved;
    } catch {}

    try {
      const mainnetProvider = new JsonRpcProvider("https://eth.llamarpc.com");
      const resolved = await mainnetProvider.resolveName(name);
      if (resolved) return resolved;
    } catch {}

    return null;
  };

  // ─── handleRecipientChange ────────────────────────────────────────────────
  const handleRecipientChange = (val: string) => {
    const rawVal: string = String(val ?? "");
    setRecipientInput(rawVal);

    // reset everything on every keystroke
    setResolvedAddress("");
    setResolutionError("");
    setIsResolving(false);
    setErrors((prev) => {
      const next: Record<string, string> = { ...prev };
      delete next["recipient"];
      return next;
    });

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }

    const trimmed: string = rawVal.trim();
    latestInputRef.current = trimmed;

    if (trimmed.length === 0) return;

    if (ethers.isAddress(trimmed)) {
      setResolvedAddress(trimmed);
      return;
    }

    // use helper — avoids 'never' inference on .includes()
    if (!strHasDot(trimmed)) return;

    setIsResolving(true);

    debounceTimer.current = setTimeout(async () => {
      const snapshot: string = trimmed;
      try {
        const result = await resolveUsername(snapshot);
        if (latestInputRef.current !== snapshot) return;
        if (result) {
          setResolvedAddress(result);
          setResolutionError("");
        } else {
          setResolvedAddress("");
          setResolutionError("Could not resolve username");
        }
      } catch {
        if (latestInputRef.current !== snapshot) return;
        setResolvedAddress("");
        setResolutionError("Could not resolve username");
      } finally {
        if (latestInputRef.current === snapshot) {
          setIsResolving(false);
        }
      }
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  // ─── ensureMainnetChain ───────────────────────────────────────────────────
  const ensureMainnetChain = async () => {
    if (!window.ethereum) return false;
    try {
      const currentChainId: string = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (currentChainId !== CHAIN_ID_HEX) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_ID_HEX }],
          });
        } catch (switchError: unknown) {
          if ((switchError as { code?: number })?.code === 4902) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: CHAIN_ID_HEX,
                  chainName: "Base",
                  rpcUrls: ["https://mainnet.base.org"],
                  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                  blockExplorerUrls: ["https://basescan.org"],
                },
              ],
            });
          } else {
            throw switchError;
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      return true;
    } catch {
      return false;
    }
  };

  // ─── fetchBalances ────────────────────────────────────────────────────────
  const fetchBalances = useCallback(async () => {
    if (!address || !window.ethereum) return;
    try {
      const _provider = new BrowserProvider(window.ethereum, "any");
      const ethRaw = await _provider.getBalance(address);
      const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, _provider);
      const usdcRaw = await usdcContract.balanceOf(address);
      const decimals = await usdcContract.decimals();
      setUsdcDecimals(Number(decimals));
      setBalances({
        ETH: formatUnits(ethRaw, 18),
        USDC: formatUnits(usdcRaw, decimals),
      });
    } catch (e) {
      console.error("Balance fetch error:", e);
    }
  }, [address]);

  useEffect(() => {
    fetchBalances();
  }, [fetchBalances, chainId]);

  useEffect(() => {
    if (selectedToken === "USDC" && address && window.ethereum) {
      const fetchAllowance = async () => {
        try {
          const _provider = new BrowserProvider(window.ethereum, "any");
          const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, _provider);
          const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
          setUsdcAllowance(allowance);
        } catch (e) {
          console.error("Allowance fetch error:", e);
        }
      };
      fetchAllowance();
    }
  }, [selectedToken, address, chainId]);

  useEffect(() => {
    if (selectedToken === "USDC") {
      let checkAmount = BigInt(0);
      let cleanAmt: string = amount || "0";
      if (cleanAmt.charAt(0) === ".") cleanAmt = "0" + cleanAmt;
      try {
        checkAmount = parseUnits(cleanAmt, usdcDecimals);
      } catch {}
      setNeedsApproval(usdcAllowance < checkAmount && checkAmount > BigInt(0));
    } else {
      setNeedsApproval(false);
    }
  }, [selectedToken, amount, usdcAllowance, usdcDecimals]);

  // ─── validate ─────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors["amount"] = "Enter valid amount";
    } else {
      const bal: string = selectedToken === "ETH" ? balances.ETH : balances.USDC;
      if (parseFloat(amount) > parseFloat(bal))
        newErrors["amount"] = "Insufficient balance";
    }
    if (!isRedPacket) {
      if (!resolvedAddress) newErrors["recipient"] = "Invalid address or name";
    } else {
      const claimersNum = Number(maxClaimers);
      if (
        !maxClaimers ||
        isNaN(claimersNum) ||
        claimersNum <= 0 ||
        !Number.isInteger(claimersNum)
      ) {
        newErrors["claimers"] = "Enter a valid whole number";
      }
    }
    if (!unlockDate || !unlockTime) {
      newErrors["date"] = "Select date & time";
    } else {
      const targetTime = new Date(`${unlockDate}T${unlockTime}`);
      const minTime = new Date(Date.now() + 60 * 1000);
      if (targetTime < minTime)
        newErrors["date"] = "Time must be at least 1 min in future";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── handleSubmit ─────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!validate()) return;
    if (!window.ethereum) { connect(); return; }

    try {
      setLoadingStep("IDLE");
      setErrors({});

      const checkValidChain = await ensureMainnetChain();
      if (!checkValidChain) {
        setErrors({ submit: "Failed to switch to Base Mainnet." });
        return;
      }

      const activeProvider = new BrowserProvider(window.ethereum, "any");
      await activeProvider.getNetwork();
      const activeSigner = await activeProvider.getSigner();
      const ethBalRaw = await activeProvider.getBalance(address);
      const decimals = selectedToken === "ETH" ? 18 : usdcDecimals;

      let cleanAmount: string = amount;
      if (cleanAmount.charAt(0) === ".") cleanAmount = "0" + cleanAmount;
      const amountWei = parseUnits(cleanAmount, decimals);

      if (selectedToken === "ETH") {
        const estimatedGasBuffer = parseUnits("0.0003", 18);
        if (ethBalRaw < amountWei + estimatedGasBuffer) {
          setErrors({
            submit:
              "Insufficient ETH. Leave at least 0.0003 ETH in your wallet to pay for Gas fees.",
          });
          return;
        }
      } else {
        if (ethBalRaw === BigInt(0)) {
          setErrors({
            submit: "You need some ETH on Base Mainnet to pay for Gas fees!",
          });
          return;
        }
      }

      const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, activeSigner);
      const giftContract = new Contract(CONTRACT_ADDRESS, contractAbi, activeSigner);

      const unlockTimestamp = Math.floor(
        new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000
      );
      const unlockTimeBigInt = BigInt(unlockTimestamp);
      const metadata = { content: message || "", isAnonymous };
      // Encrypt message: for single gifts use recipient; for red packets use sender
      const encryptionRecipient = isRedPacket ? address : resolvedAddress;
      const obfuscatedMessage = await encryptMessage(metadata, encryptionRecipient);

      if (selectedToken === "USDC" && usdcAllowance < amountWei) {
        setLoadingStep("APPROVING");
        const approveData = usdcContract.interface.encodeFunctionData("approve", [
          CONTRACT_ADDRESS,
          amountWei,
        ]);
        const approveDataWithCode = appendBuilderCode(approveData);
        const txApprove = await activeSigner.sendTransaction({
          to: USDC_ADDRESS,
          data: approveDataWithCode,
        });
        await txApprove.wait(1);
        setUsdcAllowance(amountWei);
      }

      setLoadingStep("CREATING");
      const tokenArg = selectedToken === "ETH" ? ZeroAddress : USDC_ADDRESS;
      const valueArg = selectedToken === "ETH" ? amountWei : BigInt(0);
      let tx: any;

      if (isRedPacket) {
        const maxClaimersBigInt = BigInt(Math.floor(Number(maxClaimers)));
        const isLucky = distributionType === "LUCKY";
        const rpEncodedData = giftContract.interface.encodeFunctionData(
          "createRedPacket",
          [
            tokenArg,
            amountWei,
            maxClaimersBigInt,
            unlockTimeBigInt,
            isLucky,
            isAnonymous,
            obfuscatedMessage,
          ]
        );
        const rpDataWithCode = appendBuilderCode(rpEncodedData);
        tx = await activeSigner.sendTransaction({
          to: CONTRACT_ADDRESS,
          data: rpDataWithCode,
          value: valueArg,
        });

        const rpReceipt = await tx.wait();
        let newPacketId = "";

        // Parse packet ID from receipt logs
        const extractPacketId = (receipt: typeof rpReceipt): string => {
          if (!receipt) return "";
          const allLogs = Array.from(receipt.logs) as Array<any>;
          for (const log of allLogs) {
            try {
              const parsedLog = (giftContract.interface as any).parseLog({
                topics: log.topics ? Array.from(log.topics) : [],
                data: log.data,
              });
              const logName: string = String((parsedLog as any)?.name ?? "");
              if (logName.indexOf("Created") !== -1) {
                return (parsedLog as any).args[0].toString();
              }
            } catch {}
          }
          return "";
        };

        newPacketId = extractPacketId(rpReceipt);

        // Retry: re-fetch receipt if event parsing failed on first pass
        if (!newPacketId && tx.hash) {
          try {
            await new Promise((r) => setTimeout(r, 3000));
            const retryReceipt = await activeProvider.getTransactionReceipt(tx.hash);
            newPacketId = extractPacketId(retryReceipt);
          } catch {}
        }

        if (!newPacketId) {
          setErrors({ submit: "Red packet created but could not determine packet ID. Check your wallet history on Basescan." });
          setLoadingStep("IDLE");
          return;
        }

        setGeneratedLink(`${window.location.origin}/packet/${newPacketId}`);
        setShowLinkModal(true);
      } else {
        const assetType = selectedToken === "ETH" ? 0 : 1;
        const tokenId = 0;
        const giftEncodedData = giftContract.interface.encodeFunctionData("createGift", [
          assetType,
          tokenArg,
          tokenId,
          amountWei,
          resolvedAddress,
          unlockTimeBigInt,
          isAnonymous,
          obfuscatedMessage,
        ]);
        const giftDataWithCode = appendBuilderCode(giftEncodedData);
        tx = await activeSigner.sendTransaction({
          to: CONTRACT_ADDRESS,
          data: giftDataWithCode,
          value: valueArg,
        });
        const giftReceipt = await tx.wait();
        if (giftReceipt && giftReceipt.status === 1) {
          setSuccessData({
            token: selectedToken,
            amount,
            recipient: resolvedAddress,
            unlockDate: new Date(`${unlockDate}T${unlockTime}`),
            message,
            txHash: tx.hash,
            nftTokenId: "Minted",
            isAnonymous,
          });
          setShowGiftModal(true);
        }
      }

      setShowConfetti(true);
      setLoadingStep("IDLE");
      fetchBalances();
    } catch (err: any) {
      console.error("Tx Error details:", err);
      setLoadingStep("IDLE");

      if (err?.code === "ACTION_REJECTED") {
        setErrors({ submit: "Transaction was rejected by user." });
        return;
      }

      let errorMsg: string = "Transaction failed.";
      if (err?.info?.error?.message) errorMsg = String(err.info.error.message);
      else if (err?.error?.message)  errorMsg = String(err.error.message);
      else if (err?.shortMessage)    errorMsg = String(err.shortMessage);
      else if (err?.reason)          errorMsg = String(err.reason);
      else if (err?.message) {
        const m: string = String(err.message);
        errorMsg = m.length > 100 ? m.substring(0, 100) + "..." : m;
      }

      // use helper — avoids 'never' on .includes()
      if (strContains(errorMsg, "network error"))       errorMsg = "RPC/Network Error.";
      else if (strContains(errorMsg, "insufficient funds")) errorMsg = "Not enough ETH for gas.";

      setErrors({ submit: errorMsg });
    }
  };

  // ─── handleResetForm ──────────────────────────────────────────────────────
  const handleResetForm = () => {
    setShowGiftModal(false);
    setShowLinkModal(false);
    setShowConfetti(false);
    setAmount("");
    setRecipientInput("");
    setResolvedAddress("");
    setResolutionError("");
    setUnlockDate("");
    setUnlockTime("");
    setMessage("");
    setIsAnonymous(false);
    setSelectedToken("ETH");
    setMaxClaimers("10");
    latestInputRef.current = "";
  };

  const handlePaste = async () => {
    try {
      const text: string = await navigator.clipboard.readText();
      if (text && text.trim()) handleRecipientChange(text.trim());
    } catch {}
  };

  // ─── JSX ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <Header
        isConnected={!!address}
        address={address}
        onConnect={connect}
        onDisconnect={disconnect}
      />
      <ConfettiEffect trigger={showConfetti} />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight">
            {isRedPacket ? "Create Red Packet" : "Create Gift"}
          </h1>
          <p className="font-medium text-muted-foreground">
            {isRedPacket
              ? "Create a shareable link for everyone"
              : "Wrap crypto for the future"}
          </p>
        </div>

        {chainId && chainId !== CHAIN_ID_DECIMAL && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-yellow-50 p-4 text-yellow-800 border border-yellow-200">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-bold text-sm">
              Wrong Network.{" "}
              <button onClick={ensureMainnetChain} className="underline">
                Switch to Base
              </button>
            </span>
          </div>
        )}

        {/* ── Tab toggle ── */}
        <div className="mb-6 flex rounded-full bg-secondary p-1 border border-border/50">
          <button
            onClick={() => setIsRedPacket(false)}
            className={cn(
              "flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200",
              !isRedPacket
                ? "bg-white text-black shadow-sm dark:bg-black dark:text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="flex items-center justify-center gap-2">
              <Gift className="h-4 w-4" /> Single Gift
            </span>
          </button>
          <button
            onClick={() => setIsRedPacket(true)}
            className={cn(
              "flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200",
              isRedPacket
                ? "bg-white text-black shadow-sm dark:bg-black dark:text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="flex items-center justify-center gap-2">
              🧧 Red Packet
            </span>
          </button>
        </div>

        <div className="space-y-6">
          {/* ── Amount card ── */}
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex justify-between items-center text-sm font-bold text-muted-foreground">
              <span>{isRedPacket ? "Total Pool Amount" : "Asset"}</span>
              <span>
                Bal:{" "}
                {selectedToken === "ETH"
                  ? parseFloat(balances.ETH).toFixed(4)
                  : parseFloat(balances.USDC).toFixed(2)}
              </span>
            </div>
            <div className="mb-4 flex gap-3">
              <button
                onClick={() => { setSelectedToken("ETH"); setAmount(""); }}
                className={cn(
                  "flex-1 py-3 rounded-xl font-bold transition-all border-2",
                  selectedToken === "ETH"
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent bg-secondary text-muted-foreground"
                )}
              >
                ETH
              </button>
              <button
                onClick={() => { setSelectedToken("USDC"); setAmount(""); }}
                className={cn(
                  "flex-1 py-3 rounded-xl font-bold transition-all border-2",
                  selectedToken === "USDC"
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent bg-secondary text-muted-foreground"
                )}
              >
                USDC
              </button>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-5xl font-black outline-none placeholder:text-muted-foreground/30 text-foreground py-2"
            />
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {(selectedToken === "ETH" ? ETH_PRESETS : USDC_PRESETS).map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className="rounded-full bg-secondary px-4 py-2 text-xs font-bold text-foreground transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  {val}
                </button>
              ))}
            </div>
            {errors["amount"] && (
              <p className="mt-2 text-sm font-bold text-red-500">{errors["amount"]}</p>
            )}
          </div>

          {/* ── Recipient / Red-packet options ── */}
          {!isRedPacket ? (
            <div className="space-y-2">
              <label className="ml-2 text-sm font-bold text-muted-foreground">
                Recipient
              </label>
              <div className="relative rounded-2xl bg-secondary p-1">
                <input
                  value={recipientInput}
                  onChange={(e) => handleRecipientChange(e.target.value)}
                  placeholder="0x... or username.base.eth"
                  className="w-full rounded-xl bg-transparent p-4 pr-12 text-lg font-medium outline-none placeholder:text-muted-foreground/50"
                />
                <button
                  onClick={handlePaste}
                  type="button"
                  title="Paste from clipboard"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-white p-2 shadow-sm hover:bg-gray-50 dark:bg-card transition-colors"
                >
                  <Clipboard className="h-5 w-5 text-primary" />
                </button>
              </div>

              {/* Resolving spinner */}
              {isResolving && (
                <p className="ml-2 text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" /> Resolving username...
                </p>
              )}

              {/* Resolved success */}
              {!isResolving &&
                resolvedAddress &&
                resolvedAddress.toLowerCase() !==
                  recipientInput.trim().toLowerCase() && (
                  <p className="ml-2 text-xs font-bold text-green-600">
                    ✓ {resolvedAddress.substring(0, 6)}...{resolvedAddress.slice(-4)}
                  </p>
                )}

              {/* Resolution error */}
              {!isResolving && resolutionError && (
                <p className="ml-2 text-xs font-bold text-red-500">
                  {resolutionError}
                </p>
              )}

              {/* Validation error (only after submit attempt) */}
              {!isResolving && !resolutionError && errors["recipient"] && (
                <p className="ml-2 text-xs font-bold text-red-500">
                  {errors["recipient"]}
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <label className="ml-2 text-sm font-bold text-muted-foreground">
                  How many people can claim?
                </label>
                <div className="relative rounded-2xl bg-secondary p-1">
                  <input
                    type="number"
                    value={maxClaimers}
                    onChange={(e) => setMaxClaimers(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full rounded-xl bg-transparent p-4 text-xl font-black outline-none text-center"
                  />
                </div>
                {errors["claimers"] && (
                  <p className="ml-2 text-xs font-bold text-red-500">
                    {errors["claimers"]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="ml-2 text-sm font-bold text-muted-foreground">
                  Distribution Type
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDistributionType("EQUAL")}
                    className={cn(
                      "flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary",
                      distributionType === "EQUAL"
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent"
                    )}
                  >
                    <h3 className="font-black text-foreground">Equal Split</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Everyone gets exactly{" "}
                      {amount
                        ? (Number(amount) / Number(maxClaimers || 1)).toFixed(4)
                        : "0"}{" "}
                      {selectedToken}
                    </p>
                  </button>
                  <button
                    onClick={() => setDistributionType("LUCKY")}
                    className={cn(
                      "flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary",
                      distributionType === "LUCKY"
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent"
                    )}
                  >
                    <h3 className="font-black text-foreground">Lucky Draw</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Random amounts. Early birds get lucky!
                    </p>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ── Unlock date ── */}
          <div className="space-y-2">
            <label className="ml-2 text-sm font-bold text-muted-foreground">
              Unlock Date
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={unlockDate}
                onChange={(e) => setUnlockDate(e.target.value)}
                className="w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none"
              />
              <input
                type="time"
                value={unlockTime}
                onChange={(e) => setUnlockTime(e.target.value)}
                className="w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none"
              />
            </div>
            {errors["date"] && (
              <p className="ml-2 text-xs font-bold text-red-500">{errors["date"]}</p>
            )}
          </div>

          {/* ── Message ── */}
          <div className="space-y-2">
            <div className="flex justify-between px-2">
              <label className="text-sm font-bold text-muted-foreground">Note</label>
              <span className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 rounded-full">
                HIDDEN
              </span>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message for the future..."
              className="h-24 w-full resize-none rounded-3xl border-none bg-secondary p-5 text-base outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* ── Anonymous toggle ── */}
          <div
            onClick={() => setIsAnonymous(!isAnonymous)}
            className="flex cursor-pointer items-center justify-between rounded-2xl border border-border p-4 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  isAnonymous
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {isAnonymous ? (
                  <UserX className="h-5 w-5" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Anonymous Gift</span>
                <span className="text-xs text-muted-foreground">
                  Hide sender address
                </span>
              </div>
            </div>
            <div
              className={cn(
                "h-6 w-11 rounded-full transition-colors relative",
                isAnonymous ? "bg-primary" : "bg-muted-foreground/30"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 h-4 w-4 rounded-full bg-white transition-all shadow-sm",
                  isAnonymous ? "left-6" : "left-1"
                )}
              />
            </div>
          </div>

          {/* ── Submit ── */}
          <Button
            onClick={handleSubmit}
            disabled={loadingStep !== "IDLE" || !address || isConnecting}
            className="w-full h-14 rounded-full text-lg font-black shadow-lg shadow-primary/20 text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {loadingStep === "APPROVING" ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" /> Approving...
              </span>
            ) : loadingStep === "CREATING" ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" /> Minting...
              </span>
            ) : !address ? (
              "Connect Wallet"
            ) : isRedPacket ? (
              "Create Shareable Link"
            ) : needsApproval ? (
              "Approve & Create"
            ) : (
              "Create Gift"
            )}
          </Button>

          {errors["submit"] && (
            <div className="mt-2 rounded-xl bg-red-50 p-3 border border-red-100">
              <p className="text-center text-sm font-bold text-red-600">
                {errors["submit"]}
              </p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />

      <GiftModal
        isOpen={showGiftModal}
        onClose={handleResetForm}
        type="success"
        gift={successData ?? undefined}
        onSendAnother={handleResetForm}
      />

      <AnimatePresence>
        {showLinkModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-sm rounded-3xl bg-white dark:bg-card p-6 text-center shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Share2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-black text-foreground">
                Packet Ready!
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Share this link with your friends. Anyone with the link can claim.
              </p>
              <div className="mb-6 flex items-center justify-between bg-secondary p-4 rounded-2xl border border-border overflow-hidden">
                <span className="text-sm font-bold truncate mr-2 text-foreground">
                  {generatedLink}
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(generatedLink)}
                  className="p-2 bg-white text-black rounded-full shadow-sm hover:bg-gray-200 flex-shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  onClick={() => {
                    const text = encodeURIComponent(`I just created a Red Packet on Base! Claim yours here: ${generatedLink}`);
                    window.open(`https://x.com/intent/tweet?text=${text}`, "_blank", "noopener");
                  }}
                  className="rounded-xl font-bold bg-white text-black hover:bg-gray-100 h-12 border-none"
                >
                  Share on X (Twitter)
                </Button>
                <Button
                  onClick={() => {
                    const text = encodeURIComponent(`I just created a Red Packet on Base! Claim yours here: ${generatedLink}`);
                    window.open(`https://warpcast.com/~/compose?text=${text}`, "_blank", "noopener");
                  }}
                  className="rounded-xl font-bold bg-black !text-[#0052FF] hover:bg-blue-50 h-12 border-none"
                >
                  Share on Warpcast
                </Button>
                <Button
                  onClick={handleResetForm}
                  variant="ghost"
                  className="rounded-xl font-bold h-12 mt-2"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DisconnectModal
        isOpen={showDisconnectAlert}
        onClose={() => setShowDisconnectAlert(false)}
        onConfirm={confirmDisconnect}
      />
    </div>
  );
}

function DisconnectModal({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold">Disconnect Wallet?</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          You will need to reconnect to create gifts.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={onClose} variant="secondary" className="rounded-xl font-bold">
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="rounded-xl font-bold bg-red-600 hover:bg-red-700 text-white"
          >
            Disconnect
          </Button>
        </div>
      </motion.div>
    </div>
  );
}