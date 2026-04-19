// capsule/page.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { CapsuleCard } from "@/components/capsule-card";
import { GiftModal } from "@/components/gift-modal";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Copy,
  Check,
  Gift,
  Inbox,
  Loader2,
  RefreshCw,
  User,
  PartyPopper,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ethers,
  BrowserProvider,
  Contract,
  formatUnits,
  formatEther,
} from "ethers";
import contractAbi from "@/contractAbi.json";
import type {} from "@coinbase/onchainkit/identity";
import { appendBuilderCode } from "@/lib/builderCode";
import { decryptMessage } from "@/lib/messageCrypto";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────
const CONTRACT_ADDRESS = "0xc160E1b43203A4d18E4069437Bc960248f91d847";
const BASE_CHAIN_ID = "0x2105";
const STORAGE_KEY = "yupp_wallet_connected";
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const ERC20_ABI = ["function balanceOf(address) view returns (uint256)"] as const;
const BATCH_SIZE = 5;
const BATCH_DELAY_MS = 80;
const POLL_INTERVAL_MS = 30_000;
const TX_POLL_RETRIES = 45;
const TX_POLL_DELAY_MS = 2_000;
const ZERO_BIG = BigInt(0);
const CLAIM_SUCCESS_DELAY_MS = 4_000;

// ─── Types ────────────────────────────────────────────────────────────────────
type FilterType = "all" | "ETH" | "USDC";
type TabType = "sent" | "received";

interface ParsedMessage {
  content: string;
  isAnonymous: boolean;
}

interface Capsule {
  id: string;
  numericId: number;
  createdAt: number;
  sender: string;
  recipient: string;
  amount: string;
  token: "ETH" | "USDC";
  unlockDate: Date;
  isUnlocked: boolean;
  isWithdrawn: boolean;
  message: string;
  realMessage: string;
  isAnonymous: boolean;
  isRedPacket: boolean;
  isCancelled?: boolean;
  txHash: string;
  isMine: boolean;
  isForMe: boolean;
  senderName?: string | null;
  recipientName?: string | null;
  hasClaimedRedPacket?: boolean;
  rpTotalShares?: number;
  rpRemainingShares?: number;
  rpClaimedShares?: number;
}

interface SuccessData {
  amount: string;
  token: string;
}

interface Identity {
  name: string | null;
  avatar: string | null;
}

// ─── Pure Helpers ─────────────────────────────────────────────────────────────
const safeParseMessage = (rawMsg: unknown): ParsedMessage => {
  try {
    if (!rawMsg || typeof rawMsg !== "string" || !rawMsg.trim()) {
      return { content: "", isAnonymous: false };
    }
    try {
      const decoded = atob(rawMsg.trim());
      try {
        const json = JSON.parse(decoded) as Record<string, unknown>;
        return {
          content: String(json?.content ?? ""),
          isAnonymous: Boolean(json?.isAnonymous),
        };
      } catch {
        return { content: decoded, isAnonymous: false };
      }
    } catch {
      return { content: rawMsg.trim(), isAnonymous: false };
    }
  } catch {
    return { content: "", isAnonymous: false };
  }
};

/** Attempt decryption with the current user's address, falling back to legacy decode. */
const safeDecryptMessage = async (
  rawMsg: unknown,
  recipientAddress: string
): Promise<ParsedMessage> => {
  if (!rawMsg || typeof rawMsg !== "string" || !rawMsg.trim()) {
    return { content: "", isAnonymous: false };
  }
  try {
    return await decryptMessage(String(rawMsg), recipientAddress);
  } catch {
    return safeParseMessage(rawMsg);
  }
};

const safeFormatEther = (val: unknown): string => {
  try {
    if (val === null || val === undefined) return "0";
    return formatEther(val as Parameters<typeof formatEther>[0]);
  } catch {
    try {
      return String(Number(val) / 1e18);
    } catch {
      return "0";
    }
  }
};

const safeFormatUnits = (val: unknown, dec: number): string => {
  try {
    if (val === null || val === undefined) return "0";
    return formatUnits(val as Parameters<typeof formatUnits>[0], dec);
  } catch {
    try {
      return String(Number(val) / Math.pow(10, dec));
    } catch {
      return "0";
    }
  }
};

const isZeroAddress = (addr: unknown): boolean => {
  try {
    if (!addr || typeof addr !== "string") return true;
    return (
      addr === ethers.ZeroAddress ||
      addr === "0x0000000000000000000000000000000000000000"
    );
  } catch {
    return true;
  }
};

const shortAddress = (addr: unknown): string => {
  try {
    if (!addr || typeof addr !== "string") return "Unknown";
    if (!addr.startsWith("0x")) return String(addr);
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  } catch {
    return "Unknown";
  }
};

const safeUnlockDate = (unlockTime: number): Date => {
  try {
    const ms = unlockTime * 1000;
    const d = new Date(ms);
    if (isNaN(d.getTime())) return new Date(Date.now() + 86_400_000);
    return d;
  } catch {
    return new Date(Date.now() + 86_400_000);
  }
};

const delay = (ms: number): Promise<void> =>
  new Promise((r) => setTimeout(r, ms));

const byCreatedAtDesc = (a: Capsule, b: Capsule): number =>
  b.createdAt - a.createdAt;

// ─── Base L2 Resolver (viem) ──────────────────────────────────────────────────
const publicClient = createPublicClient({
  chain: base,
  transport: http("https://mainnet.base.org"),
});

const BASE_REVERSE_REGISTRAR = "0x79EA96012eEa67A83431F1701B3dFf7e37F9E282" as const;
const BASE_L2_RESOLVER = "0xC6d566A56A1aFf6508b41f6c90ff131615583BCD" as const;

const resolveBasename = async (address: string): Promise<string | null> => {
  try {
    
    const node = await publicClient.readContract({
      address: BASE_REVERSE_REGISTRAR,
      abi: [
        {
          name: "node",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "addr", type: "address" }],
          outputs: [{ name: "", type: "bytes32" }],
        },
      ],
      functionName: "node",
      args: [address as `0x${string}`],
    }) as `0x${string}`;

    if (!node) return null;

  
    const name = await publicClient.readContract({
      address: BASE_L2_RESOLVER,
      abi: [
        {
          name: "name",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "node", type: "bytes32" }],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      functionName: "name",
      args: [node],
    }) as string;

    return name && name.length > 0 ? name : null;
  } catch {
    return null;
  }
};

const resolveBasenameAvatar = async (name: string): Promise<string | null> => {
  try {
    const { normalize, namehash } = await import("viem/ens");
    const node = namehash(normalize(name));

    const avatar = await publicClient.readContract({
      address: BASE_L2_RESOLVER,
      abi: [
        {
          name: "text",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "key", type: "string" },
          ],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      functionName: "text",
      args: [node, "avatar"],
    }) as string;

    if (avatar && avatar.length > 0) return avatar;
  } catch { /* fallback */ }

  // Farcaster API — Base App profile picture এখানে থাকে
  try {
    const username = name.replace(".base.eth", "");
    const res = await fetch(
      `https://api.farcaster.xyz/v2/user-by-username?username=${username}`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.ok) {
      const data = await res.json() as {
        result?: { user?: { pfp?: { url?: string } } };
      };
      const pfp = data?.result?.user?.pfp?.url;
      if (pfp) return pfp;
    }
  } catch { /* fallback */ }

  // Neynar API (Farcaster alternative)
  try {
    const username = name.replace(".base.eth", "");
    const res = await fetch(
      `https://api.neynar.com/v1/farcaster/user-by-username?username=${username}`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.ok) {
      const data = await res.json() as {
        result?: { user?: { pfp?: { url?: string } } };
      };
      const pfp = data?.result?.user?.pfp?.url;
      if (pfp) return pfp;
    }
  } catch { /* fallback */ }

  return null;
};

// ─── Identity ─────────────────────────────────────────────────────────────────
const safeGetIdentity = async (address: string): Promise<Identity> => {
  try {
    const name = await resolveBasename(address);
    if (!name) return { name: null, avatar: null };
    const avatar = await resolveBasenameAvatar(name);
    return { name, avatar };
  } catch {
    return { name: null, avatar: null };
  }
};

const resolveIdentities = async (
  addresses: string[]
): Promise<Record<string, string | null>> => {
  const unique = [
    ...new Set(addresses.filter((a) => a && a.startsWith("0x"))),
  ];
  const results: Record<string, string | null> = {};

  await Promise.all(
    unique.map(async (addr) => {
      results[addr.toLowerCase()] = await resolveBasename(addr);
    })
  );

  return results;
};

// ─── Parsers ──────────────────────────────────────────────────────────────────
const parseGift = async (
  id: number,
  g: unknown[],
  myAddress: string
): Promise<Capsule | null> => {
  try {
    const sender = String(g[0] ?? "");
    const recipient = String(g[1] ?? "");
    const tokenAddr = String(g[2] ?? "");
    const amountRaw = g[3] ?? ZERO_BIG;
    const unlockTime = Number(g[4] ?? 0);
    const isWithdrawn = Boolean(g[5]);
    const rawMsg = String(g[6] ?? "");
    const isAnon = Boolean(g[7]);

    if (isZeroAddress(sender)) return null;

    const isETH = isZeroAddress(tokenAddr);
    const token: "ETH" | "USDC" = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(amountRaw)
      : safeFormatUnits(amountRaw, 6);

    const unlockDateObj = safeUnlockDate(unlockTime);
    const isUnlocked = Date.now() >= unlockDateObj.getTime();
    const me = myAddress.toLowerCase();

    // Decrypt message using recipient address (for gifts the recipient holds the key)
    const { content } = await safeDecryptMessage(rawMsg, recipient);

    return {
      id: `gift-${id}`,
      numericId: id,
      createdAt: id,
      sender,
      recipient,
      amount,
      token,
      unlockDate: unlockDateObj,
      isUnlocked,
      isWithdrawn,
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: false,
      txHash: "",
      isMine: sender.toLowerCase() === me,
      isForMe: recipient.toLowerCase() === me,
      senderName: null,
      recipientName: null,
      hasClaimedRedPacket: false,
    };
  } catch (err) {
    console.error(`parseGift #${id} failed:`, err);
    return null;
  }
};

const parseRedPacket = async (
  id: number,
  rp: unknown[],
  myAddress: string,
  claimedAmount?: string
): Promise<Capsule | null> => {
  try {
    const creator = String(rp[1] ?? "");
    const tokenAddr = String(rp[2] ?? "");
    const totalAmt = rp[3] ?? ZERO_BIG;
    const unlockTime = Number(rp[7] ?? 0);
    const isAnon = Boolean(rp[9]);
    const isCancelled = Boolean(rp[10]);
    const rawMsg = String(rp[11] ?? "");

    const totalShares = Number(rp[5] ?? 0);
    const remainingShares = Number(rp[6] ?? 0);
    const claimedShares = totalShares - remainingShares;

    if (isZeroAddress(creator)) return null;

    const isETH = isZeroAddress(tokenAddr);
    const token: "ETH" | "USDC" = isETH ? "ETH" : "USDC";
    const amount = isETH
      ? safeFormatEther(totalAmt)
      : safeFormatUnits(totalAmt, 6);

    // Red packets are encrypted with the creator's address
    const { content } = await safeDecryptMessage(rawMsg, creator);
    const unlockDateObj = safeUnlockDate(unlockTime);
    const isUnlocked = Date.now() >= unlockDateObj.getTime();
    const me = myAddress.toLowerCase();
    const isCreator = creator.toLowerCase() === me;

    const displayAmount = claimedAmount ?? amount;

    return {
      id: `rp-${id}`,
      numericId: id,
      createdAt: id,
      sender: creator,
      recipient: isCreator ? "Multiple Recipients" : "Multiple",
      amount: displayAmount,
      token,
      unlockDate: unlockDateObj,
      isUnlocked,
      isWithdrawn: isCancelled || Boolean(claimedAmount),
      message: isUnlocked ? content : "🔒 Message is hidden until unlocked",
      realMessage: content,
      isAnonymous: isAnon,
      isRedPacket: true,
      isCancelled,
      txHash: "",
      isMine: isCreator,
      isForMe: !isCreator,
      senderName: null,
      recipientName: null,
      hasClaimedRedPacket: Boolean(claimedAmount),
      rpTotalShares: totalShares,
      rpRemainingShares: remainingShares,
      rpClaimedShares: claimedShares,
    };
  } catch (err) {
    console.error(`parseRedPacket #${id} failed:`, err);
    return null;
  }
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CapsulesPage() {
  const [mounted, setMounted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<Awaited<
    ReturnType<BrowserProvider["getSigner"]>
  > | null>(null);
  const [basename, setBasename] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState("0.00");
  const [usdcBalance, setUsdcBalance] = useState("0.00");
  const [activeTab, setActiveTab] = useState<TabType>("received");
  const [filter, setFilter] = useState<FilterType>("all");
  const [copied, setCopied] = useState(false);
  const [mySentCapsules, setMySentCapsules] = useState<Capsule[]>([]);
  const [myReceivedCapsules, setMyReceivedCapsules] = useState<Capsule[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [successModalData, setSuccessModalData] = useState<SuccessData | null>(null);
  const [showDisconnectAlert, setShowDisconnectAlert] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const providerRef = useRef(provider);
  const addressRef = useRef(address);
  useEffect(() => { providerRef.current = provider; }, [provider]);
  useEffect(() => { addressRef.current = address; }, [address]);

  // Incremental fetch tracking
  const lastGiftCounterRef = useRef(0);
  const lastRPCounterRef = useRef(0);
  const lastFetchedAddressRef = useRef("");

  // ── Mount ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    setMounted(true);
  }, []);

  // ── Balances ───────────────────────────────────────────────────────────────
  const fetchBalances = useCallback(
    async (acc: string, _p: BrowserProvider): Promise<void> => {
      try {
        const [bal, ub] = await Promise.all([
          _p.getBalance(acc),
          new Contract(USDC_ADDRESS, ERC20_ABI, _p).balanceOf(acc) as Promise<bigint>,
        ]);
        setEthBalance(Number(formatEther(bal)).toFixed(4));
        setUsdcBalance(Number(formatUnits(ub, 6)).toFixed(2));
      } catch (e) {
        console.error("Balance fetch error:", e);
      }
    },
    []
  );

  // ── Wallet Setup ───────────────────────────────────────────────────────────
  const setupWallet = useCallback(
    async (acc: string, _p: BrowserProvider): Promise<void> => {
      try {
        const [_s, net] = await Promise.all([
          _p.getSigner(),
          _p.getNetwork(),
        ]);

        if (Number(net.chainId) !== 8453) {
          try {
            await window.ethereum?.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: BASE_CHAIN_ID }],
            });
          } catch (e) {
            console.error("Chain switch error:", e);
          }
        }

        setProvider(_p);
        setSigner(_s);
        setAddress(acc);
        setIsConnected(true);
        localStorage.setItem(STORAGE_KEY, "true");

        void fetchBalances(acc, _p);
        void safeGetIdentity(acc).then(({ name, avatar: avt }) => {
          if (name) setBasename(name);
          if (avt) setAvatar(avt);
        });
      } catch (e) {
        console.error("setupWallet error:", e);
      }
    },
    [fetchBalances]
  );

  // ── Connection ─────────────────────────────────────────────────────────────
  const checkConnection = useCallback(async (): Promise<void> => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = (await _p.send("eth_accounts", [])) as string[];
      if (accs.length > 0) await setupWallet(accs[0], _p);
    } catch (e) {
      console.error("checkConnection error:", e);
    }
  }, [setupWallet]);

  const handleConnect = useCallback(async (): Promise<void> => {
    if (typeof window === "undefined" || !window.ethereum) return;
    try {
      const _p = new BrowserProvider(window.ethereum);
      const accs = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      if (accs[0]) await setupWallet(accs[0], _p);
    } catch (e) {
      console.error("handleConnect error:", e);
    }
  }, [setupWallet]);

  const confirmDisconnect = useCallback((): void => {
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
    setFetchError(null);
    localStorage.removeItem(STORAGE_KEY);
    setShowDisconnectAlert(false);
  }, []);

  // ── Auto-connect ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      void checkConnection();
    }
    if (typeof window === "undefined" || !window.ethereum) return;

    const onChange = (accs: string[]): void => {
      if (accs.length === 0) confirmDisconnect();
      else void checkConnection();
    };
    window.ethereum.on("accountsChanged", onChange);
    return () => {
      window.ethereum?.removeListener("accountsChanged", onChange);
    };
  }, [mounted, checkConnection, confirmDisconnect]);

  // ── Fetch Capsules (incremental on silent polls) ────────────────────────────
  const fetchCapsules = useCallback(
    async (isSilent = false): Promise<void> => {
      const _p = providerRef.current;
      const _addr = addressRef.current;
      if (!_p || !_addr) return;

      // Detect address change → force full re-fetch
      const addressChanged = lastFetchedAddressRef.current !== _addr.toLowerCase();
      if (addressChanged) {
        lastGiftCounterRef.current = 0;
        lastRPCounterRef.current = 0;
        lastFetchedAddressRef.current = _addr.toLowerCase();
      }

      // On explicit refresh, also do a full fetch
      const isIncremental = isSilent && !addressChanged && lastGiftCounterRef.current > 0;

      if (!isSilent) setIsLoadingData(true);
      else setIsBackgroundLoading(true);
      setFetchError(null);

      try {
        const contract = new Contract(CONTRACT_ADDRESS, contractAbi, _p);
        const sent: Capsule[] = isIncremental ? [...mySentCapsules] : [];
        const received: Capsule[] = isIncremental ? [...myReceivedCapsules] : [];
        const addressesToResolve: string[] = [];

        // ── Gifts ────────────────────────────────────────────────────────────
        try {
          const totalGifts = Number(await contract.giftCounter());
          const giftStart = isIncremental ? lastGiftCounterRef.current + 1 : 1;

          if (totalGifts >= giftStart) {
            for (let i = totalGifts; i >= giftStart; i -= BATCH_SIZE) {
              const batchEnd = Math.max(giftStart, i - BATCH_SIZE + 1);
              const batch = Array.from(
                { length: i - batchEnd + 1 },
                (_, j) => {
                  const gid = i - j;
                  return contract
                    .gifts(gid)
                    .then((g: unknown) => ({ gid, data: g }))
                    .catch((e: unknown) => {
                      console.warn(`gifts(${gid}) failed:`, e);
                      return null;
                    });
                }
              );
              const results = await Promise.all(batch);
              for (const res of results) {
                if (!res) continue;
                const parsed = await parseGift(res.gid, res.data as unknown[], _addr);
                if (!parsed) continue;

                if (parsed.isMine) {
                  sent.push(parsed);
                  if (parsed.recipient) addressesToResolve.push(parsed.recipient);
                }
                if (parsed.isForMe) {
                  received.push(parsed);
                  if (parsed.sender) addressesToResolve.push(parsed.sender);
                }
              }
              if (i - BATCH_SIZE >= giftStart) await delay(BATCH_DELAY_MS);
            }
          }
          lastGiftCounterRef.current = totalGifts;
        } catch (err) {
          console.error("Gifts fetch error:", err);
        }

        // ── Red Packets ───────────────────────────────────────────────────────
        try {
          const totalRPs = Number(await contract.redPacketCounter());
          const rpStart = isIncremental ? lastRPCounterRef.current + 1 : 1;

          if (totalRPs >= rpStart) {
            for (let i = totalRPs; i >= rpStart; i -= BATCH_SIZE) {
              const batchEnd = Math.max(rpStart, i - BATCH_SIZE + 1);
              const batch = Array.from(
                { length: i - batchEnd + 1 },
                (_, j) => {
                  const rid = i - j;
                  return contract
                    .redPackets(rid)
                    .then((rp: unknown) => ({ rid, data: rp }))
                    .catch((e: unknown) => {
                      console.warn(`redPackets(${rid}) failed:`, e);
                      return null;
                    });
                }
              );
              const results = await Promise.all(batch);

              for (const res of results) {
                if (!res) continue;
                const rpData = res.data as unknown[];
                const creator = String(rpData[1] ?? "");
                const me = _addr.toLowerCase();
                const isCreator = creator.toLowerCase() === me;

                let claimedAmount: string | undefined;
                if (!isCreator) {
                  try {
                    let rawClaimed: bigint | undefined;
                    try {
                      rawClaimed = (await contract.claimedAmounts(res.rid, _addr)) as bigint;
                    } catch {
                      try {
                        rawClaimed = (await contract.getClaimedAmount(res.rid, _addr)) as bigint;
                      } catch {
                        try {
                          rawClaimed = (await contract.claims(res.rid, _addr)) as bigint;
                        } catch {
                          // unknown ABI — skip
                        }
                      }
                    }
                    if (rawClaimed && rawClaimed > ZERO_BIG) {
                      const tokenAddr = String(rpData[2] ?? "");
                      const isETH = isZeroAddress(tokenAddr);
                      claimedAmount = isETH
                        ? safeFormatEther(rawClaimed)
                        : safeFormatUnits(rawClaimed, 6);
                    }
                  } catch {
                    // ignore claim check errors
                  }
                }

                const parsed = await parseRedPacket(res.rid, rpData, _addr, claimedAmount);
                if (!parsed) continue;

                if (isCreator) {
                  sent.push(parsed);
                } else {
                  if (claimedAmount) {
                    received.push({ ...parsed, isForMe: true });
                  }
                  if (parsed.sender) addressesToResolve.push(parsed.sender);
                }
              }
              if (i - BATCH_SIZE >= rpStart) await delay(BATCH_DELAY_MS);
            }
          }
          lastRPCounterRef.current = totalRPs;
        } catch (err) {
          console.error("Red packets fetch error:", err);
        }

        // ── Resolve all usernames at once ──────────────────────────────────
        if (addressesToResolve.length > 0) {
          const identities = await resolveIdentities(addressesToResolve);

          sent.forEach((capsule) => {
            if (!capsule.isRedPacket && capsule.recipient) {
              capsule.recipientName =
                identities[capsule.recipient.toLowerCase()] ?? null;
            }
          });
          received.forEach((capsule) => {
            if (capsule.sender) {
              capsule.senderName =
                identities[capsule.sender.toLowerCase()] ?? null;
            }
          });
        }

        // Deduplicate by id before setting state (incremental may overlap)
        const dedup = (arr: Capsule[]): Capsule[] => {
          const seen = new Set<string>();
          return arr.filter((c) => {
            if (seen.has(c.id)) return false;
            seen.add(c.id);
            return true;
          });
        };

        setMySentCapsules(dedup([...sent]).sort(byCreatedAtDesc));
        setMyReceivedCapsules(dedup([...received]).sort(byCreatedAtDesc));
        void fetchBalances(_addr, _p);
      } catch (err) {
        console.error("fetchCapsules error:", err);
        setFetchError("Failed to load data. Tap refresh to retry.");
      } finally {
        setIsLoadingData(false);
        setIsBackgroundLoading(false);
      }
    },
    [fetchBalances, mySentCapsules, myReceivedCapsules]
  );

  // ── Poll ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!provider || !address) return;
    void fetchCapsules();
    const iv = setInterval(() => void fetchCapsules(true), POLL_INTERVAL_MS);
    return () => clearInterval(iv);
  }, [provider, address, fetchCapsules]);

  // ── Unlock Timers ──────────────────────────────────────────────────────────
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const scheduleUnlock = (
      caps: Capsule[],
      setter: React.Dispatch<React.SetStateAction<Capsule[]>>
    ): void => {
      caps.forEach((c) => {
        if (!c?.unlockDate || c.isUnlocked || c.isWithdrawn) return;
        try {
          const unlockMs =
            c.unlockDate instanceof Date
              ? c.unlockDate.getTime()
              : new Date(c.unlockDate).getTime();
          const ms = unlockMs - Date.now();
          if (ms > 0 && ms < 86_400_000) {
            timers.push(
              setTimeout(() => {
                setter((prev) =>
                  prev.map((x) =>
                    x?.id === c.id
                      ? { ...x, isUnlocked: true, message: x.realMessage || "" }
                      : x
                  )
                );
              }, ms + 1000)
            );
          }
        } catch {
          // ignore
        }
      });
    };

    scheduleUnlock(myReceivedCapsules, setMyReceivedCapsules);
    scheduleUnlock(mySentCapsules, setMySentCapsules);
    return () => timers.forEach(clearTimeout);
  }, [myReceivedCapsules, mySentCapsules]);

  // ── Claim ──────────────────────────────────────────────────────────────────
  const handleClaim = useCallback(async (): Promise<void> => {
    if (!selectedCapsule || !signer || selectedCapsule.isRedPacket) return;
    const giftIdNum = parseInt(
      selectedCapsule.id.replace("gift-", ""),
      10
    );
    if (isNaN(giftIdNum) || giftIdNum <= 0) {
      toast.error("Invalid gift ID");
      return;
    }

    setIsClaiming(true);
    setPendingTxHash(null);

    try {
      const contract = new Contract(CONTRACT_ADDRESS, contractAbi, signer);

      try {
        const g = (await contract.gifts(giftIdNum)) as unknown[];
        if (!g || isZeroAddress(g[0])) {
          toast.error("Gift does not exist");
          return;
        }
        if (Boolean(g[5])) {
          toast.error("Already claimed");
          setMyReceivedCapsules((p) =>
            p.map((c) =>
              c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
            )
          );
          setSelectedCapsule(null);
          return;
        }
      } catch {
        // Pre-flight is best-effort; proceed
      }

      const encoded = contract.interface.encodeFunctionData("withdrawGift", [
        BigInt(giftIdNum),
      ]);
      const dataWithCode = appendBuilderCode(encoded);

      const tx = await signer.sendTransaction({
        to: CONTRACT_ADDRESS,
        data: dataWithCode,
      });
      setPendingTxHash(tx.hash);

      const txProvider = (signer as any).provider ?? provider;
      let receipt: Awaited<ReturnType<BrowserProvider["getTransactionReceipt"]>> | null = null;

      for (let i = 0; i < TX_POLL_RETRIES; i++) {
        await delay(TX_POLL_DELAY_MS);
        try {
          if (txProvider) {
            receipt = await txProvider.getTransactionReceipt(tx.hash);
            if (receipt) break;
          }
        } catch {
          // retry
        }
      }

      if (receipt?.status === 1) {
        setMyReceivedCapsules((p) =>
          p.map((c) =>
            c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
          )
        );
        setSuccessModalData({
          amount: selectedCapsule.amount,
          token: selectedCapsule.token,
        });
        setSelectedCapsule(null);

        await delay(CLAIM_SUCCESS_DELAY_MS);
        void fetchCapsules(true);
      } else if (receipt?.status === 0) {
        toast.error("Transaction failed on-chain.");
      } else {
        toast.info("Still processing — check your wallet and refresh.");
        setSelectedCapsule(null);
      }
    } catch (err: unknown) {
      console.error("handleClaim error:", err);
      const ethErr = err as { code?: string; message?: string; reason?: string };
      if (ethErr?.code === "ACTION_REJECTED") {
        toast.error("Transaction rejected.");
      } else if (ethErr?.message?.includes("AlreadyWithdrawn")) {
        toast.error("Already claimed.");
        setMyReceivedCapsules((p) =>
          p.map((c) =>
            c?.id === selectedCapsule.id ? { ...c, isWithdrawn: true } : c
          )
        );
      } else {
        toast.error(
          "Claim failed: " +
            (ethErr?.reason ?? ethErr?.message ?? "Unknown error")
        );
      }
    } finally {
      setIsClaiming(false);
      setPendingTxHash(null);
    }
  }, [selectedCapsule, signer, provider, fetchCapsules]);

  // ── Copy Address ───────────────────────────────────────────────────────────
  const handleCopy = useCallback(async (): Promise<void> => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access denied
    }
  }, [address]);

  // ── Derived Lists ──────────────────────────────────────────────────────────
  const sentList = mySentCapsules.filter(
    (c) => c && (filter === "all" || c.token === filter)
  );
  const receivedList = myReceivedCapsules.filter(
    (c) => c && (filter === "all" || c.token === filter)
  );

  // ── Display Name ───────────────────────────────────────────────────────────
  const formatDisplayName = (
    capsule: Capsule,
    type: "sent" | "received"
  ): string => {
    if (type === "sent") {
      if (capsule.isRedPacket) return "Multiple Recipients";
      if (capsule.recipientName) return capsule.recipientName;
      return shortAddress(capsule.recipient);
    } else {
      if (capsule.isAnonymous) return "Secret Sender";
      if (capsule.senderName) return capsule.senderName;
      return shortAddress(capsule.sender);
    }
  };

  // ── Claimable check ────────────────────────────────────────────────────────
  const isClaimable = (c: Capsule): boolean =>
    c.isUnlocked && !c.isWithdrawn && !c.isRedPacket && !c.hasClaimedRedPacket;

  // ── Red packet claim stats label ───────────────────────────────────────────
  const rpClaimLabel = (c: Capsule): string | undefined => {
    if (!c.isRedPacket || !c.isMine) return undefined;
    if (!c.rpTotalShares) return undefined;
    const claimed = c.rpClaimedShares ?? 0;
    const total = c.rpTotalShares;
    if (claimed >= total) return "✅ All Claimed";
    return `${claimed}/${total} Claimed`;
  };

  // ── Early return ───────────────────────────────────────────────────────────
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background pb-20 relative font-sans text-foreground">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnect}
        onDisconnect={() => setShowDisconnectAlert(true)}
      />

      <main className="mx-auto max-w-[480px] px-6 py-8">
        {!isConnected ? (
          <NotConnectedState onConnect={handleConnect} />
        ) : (
          <>
            {/* ── Profile Card ────────────────────────────────────────────── */}
            <div className="mb-8 rounded-3xl bg-secondary p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-blue-100">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    {basename ? basename : shortAddress(address)}
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {shortAddress(address)}
                    {copied ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>

              {/* Balances */}
              <div className="flex flex-col gap-3 rounded-2xl bg-background p-4 shadow-sm">
                <span className="text-sm font-bold text-muted-foreground">
                  Wallet Balances
                </span>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-xl font-black">{ethBalance}</span>
                  <span className="text-sm font-bold bg-secondary px-3 py-1 rounded-full">
                    ETH
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xl font-black text-blue-600">
                    {usdcBalance}
                  </span>
                  <span className="text-sm font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-600">
                    USDC
                  </span>
                </div>
              </div>
            </div>

            {/* ── Error Banner ─────────────────────────────────────────────── */}
            {fetchError && (
              <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-600 font-medium flex-1">
                  {fetchError}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => void fetchCapsules(false)}
                  className="text-red-600"
                >
                  Retry
                </Button>
              </div>
            )}

            {/* ── Tabs ─────────────────────────────────────────────────────── */}
            <div className="mb-6 flex rounded-full bg-secondary p-1">
              <TabButton
                isActive={activeTab === "received"}
                onClick={() => setActiveTab("received")}
                label="Received"
              />
              <TabButton
                isActive={activeTab === "sent"}
                onClick={() => setActiveTab("sent")}
                label="Sent"
              />
            </div>

            {/* ── Filters ──────────────────────────────────────────────────── */}
            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FilterChip
                isActive={filter === "all"}
                onClick={() => setFilter("all")}
                label="All"
              />
              <FilterChip
                isActive={filter === "ETH"}
                onClick={() => setFilter("ETH")}
                label="ETH"
              />
              <FilterChip
                isActive={filter === "USDC"}
                onClick={() => setFilter("USDC")}
                label="USDC"
              />
            </div>

            {/* ── List Header ───────────────────────────────────────────────── */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                {activeTab === "sent" ? "Sent Gifts" : "Inbox"}
                {isBackgroundLoading && (
                  <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                )}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => void fetchCapsules(false)}
                disabled={isLoadingData}
                className="rounded-full hover:bg-secondary"
              >
                <RefreshCw
                  className={cn("h-4 w-4", isLoadingData && "animate-spin")}
                />
              </Button>
            </div>

            {/* ── Capsule Lists ─────────────────────────────────────────────── */}
            <AnimatePresence mode="wait">
              {isLoadingData &&
              sentList.length === 0 &&
              receivedList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-2" />
                  <p>Loading on-chain data…</p>
                </div>
              ) : activeTab === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {sentList.length > 0 ? (
                    sentList.map((c) => (
                      <CapsuleCard
                        key={c.id}
                        type="sent"
                        recipient={formatDisplayName(c, "sent")}
                        amount={c.amount}
                        token={c.token}
                        unlockDate={c.unlockDate}
                        isUnlocked={c.isUnlocked}
                        message={c.message}
                        txHash={c.txHash}
                        isWithdrawn={c.isWithdrawn}
                        giftType={c.isRedPacket ? "redpacket" : "single"}
                        rpClaimLabel={rpClaimLabel(c)}
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Gift />}
                      title="No gifts sent"
                      description="Create a new gift to get started."
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="received"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {receivedList.length > 0 ? (
                    receivedList.map((c) => (
                      <CapsuleCard
                        key={c.id}
                        type="received"
                        sender={formatDisplayName(c, "received")}
                        amount={c.amount}
                        token={c.token}
                        unlockDate={c.unlockDate}
                        isUnlocked={c.isUnlocked}
                        isWithdrawn={c.isWithdrawn}
                        message={c.message}
                        txHash={c.txHash}
                        onClaim={
                          isClaimable(c) ? () => setSelectedCapsule(c) : undefined
                        }
                        onClick={() => setSelectedCapsule(c)}
                        giftType={c.isRedPacket ? "redpacket" : "single"}
                      />
                    ))
                  ) : (
                    <EmptyState
                      icon={<Inbox />}
                      title="Inbox Empty"
                      description="Share your address to receive gifts."
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>

      <BottomNav />

      {/* ── Gift Detail Modal ──────────────────────────────────────────────── */}
      {selectedCapsule && (
        <GiftModal
          isOpen={!!selectedCapsule}
          onClose={() => {
            if (!isClaiming) {
              setSelectedCapsule(null);
              setPendingTxHash(null);
            }
          }}
          type="detail"
          gift={{
            ...selectedCapsule,
            sender: formatDisplayName(selectedCapsule, "received"),
          }}
          onClaim={isClaimable(selectedCapsule) ? handleClaim : undefined}
          isClaiming={isClaiming}
        />
      )}

      {/* ── Success Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {successModalData && (
          <SuccessModal
            isOpen
            onClose={() => setSuccessModalData(null)}
            amount={successModalData.amount}
            token={successModalData.token}
          />
        )}
      </AnimatePresence>

      {/* ── Disconnect Confirm ─────────────────────────────────────────────── */}
      <DisconnectModal
        isOpen={showDisconnectAlert}
        onClose={() => setShowDisconnectAlert(false)}
        onConfirm={confirmDisconnect}
      />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FilterChipProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}
function FilterChip({ isActive, onClick, label }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-bold transition-colors border",
        isActive
          ? "bg-blue-600 border-blue-600 text-white shadow-md"
          : "bg-white border-gray-200 text-black hover:bg-gray-100"
      )}
    >
      {label}
    </button>
  );
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}
function TabButton({ isActive, onClick, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200",
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 rounded-3xl border border-dashed border-border bg-secondary/30">
      <div className="mb-4 text-muted-foreground/50 text-4xl">{icon}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  token: string;
}
function SuccessModal({ isOpen, onClose, amount, token }: SuccessModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <PartyPopper className="h-10 w-10 text-blue-600 animate-bounce" />
        </div>
        <h2 className="mb-2 text-2xl font-black">Unlocked!</h2>
        <p className="mb-6 font-medium text-muted-foreground">
          You just claimed your gift.
        </p>
        <div className="mb-8 flex flex-col items-center rounded-2xl bg-secondary py-6">
          <span className="text-4xl font-black text-blue-600">{amount}</span>
          <span className="text-sm font-bold text-muted-foreground">{token}</span>
        </div>
        <Button
          onClick={onClose}
          className="h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white"
        >
          Close
        </Button>
      </motion.div>
    </div>
  );
}

interface DisconnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
function DisconnectModal({ isOpen, onClose, onConfirm }: DisconnectModalProps) {
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
          You will need to reconnect to view your gifts.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onClose}
            variant="secondary"
            className="rounded-xl font-bold"
          >
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

interface NotConnectedStateProps {
  onConnect: () => void;
}
function NotConnectedState({ onConnect }: NotConnectedStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Wallet className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-2xl font-black mb-2">Connect Wallet</h2>
      <p className="text-muted-foreground mb-8 max-w-[200px]">
        Connect to view your gifts.
      </p>
      <Button
        onClick={onConnect}
        className="h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none"
      >
        Connect
      </Button>
    </div>
  );
}