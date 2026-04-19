# Crypto-Gift-Time-Capsule — Full Repository Audit Report

Date: 2026-04-19
Repository: `cyrusweb3x/Crypto-Gift-Time-Capsule`

## 1) Scope and review method

This audit was completed by reading all repository text/code files (93 total) and validating behavior from actual source paths (no speculative assumptions).

Reviewed areas:
- App routes and pages: `app/**`
- Core components: `components/*.tsx`
- Shared UI library components: `components/ui/**`
- Hooks and utils: `hooks/**`, `lib/**`
- Config and metadata: `package.json`, `tsconfig.json`, `next.config.mjs`, `components.json`, PostCSS config, CSS files, README, ignore files
- Contract ABI used by frontend: `contractAbi.json`

## 2) Baseline project checks (as-is)

Commands run:
- `npm install`
- `npm run lint`
- `npm run build`

Observed status:
1. **Lint fails immediately**: `eslint: not found`.
2. `.eslintignore` contains only `*`, which would ignore all files even if ESLint were installed.
3. Build fails in this environment due to external Google Fonts fetch (`next/font` Inter download failure).

## 3) Application flow summary

### 3.1 Home (`app/page.tsx`)
- Initializes Farcaster Mini App SDK.
- Connects wallet via `window.ethereum`.
- Reads on-chain counters (`giftCounter`, `redPacketCounter`) via public RPC and updates stats.

### 3.2 Create (`app/create/page.tsx`)
- Handles wallet connect/switch to Base mainnet.
- Supports single gifts and red packets.
- Resolves recipients by address / Base ENS / fallback resolver paths.
- For USDC flow, checks allowance and approves when required.
- Encodes tx calldata and appends builder attribution suffix before sending.
- Builds red-packet link from parsed receipt logs.

### 3.3 Capsules (`app/capsules/page.tsx`)
- Connects wallet, resolves identities, shows balances.
- Polls all gifts and red packets from contract storage in batches.
- Parses message payloads and token amounts.
- Allows claiming received single gifts.

### 3.4 Packet claim (`app/packet/[id]/page.tsx`)
- Loads packet details by route id (`BigInt(packetId)`), timer/unlock status, claim action.
- Parses claim logs to show claimed amount.

## 4) Verified issues (feasible, evidence-based)

## Critical

### C1) Claimed "hidden/encrypted" message is only Base64-obfuscated, not encrypted
**Evidence**
- Message encoding: `btoa(JSON.stringify(metadata))` in `app/create/page.tsx`.
- Message decoding: `atob(...)` + `JSON.parse(...)` in `app/capsules/page.tsx` and `app/packet/[id]/page.tsx`.

**Impact**
- Anyone reading chain data can decode messages before unlock time.
- This conflicts with "hidden/encrypted until unlock" expectation described in product text.

**Optimization / fix direction**
- Replace obfuscation with real client-side encryption (recipient-key-based or shared-secret model), and only decrypt client-side at unlock conditions.

### C2) Red packet share-link fallback can generate invalid packet IDs
**Evidence**
- Fallback id: `tx.hash.substring(0, 10)` (`app/create/page.tsx`).
- Claim page requires numeric conversion: `BigInt(packetId)` in `app/packet/[id]/page.tsx`.

**Impact**
- If event parsing fails, generated link can be non-numeric, causing packet page/claim failures.

**Optimization / fix direction**
- Never fallback to tx hash prefix for packet id.
- Instead, block until event is parsed (or query contract/event logs deterministically by tx receipt).

## High

### H1) TypeScript build safety is intentionally bypassed
**Evidence**
- `next.config.mjs` has `typescript.ignoreBuildErrors = true`.

**Impact**
- Production builds can ship with unresolved type errors.

**Optimization / fix direction**
- Set `ignoreBuildErrors: false` and resolve type issues incrementally.

### H2) Lint pipeline is non-functional
**Evidence**
- `package.json` defines `"lint": "eslint ."` but no eslint package installed.
- `.eslintignore` contains only `*`.

**Impact**
- No static quality gate is actually protecting the codebase.

**Optimization / fix direction**
- Install/configure ESLint dependencies and remove blanket ignore.

### H3) Wallet event listeners missing cleanup in some pages
**Evidence**
- `app/create/page.tsx` and `app/page.tsx` register `window.ethereum.on(...)` without corresponding cleanup.
- `app/capsules/page.tsx` correctly removes listener.

**Impact**
- Duplicate listeners across remounts and stale callbacks.

**Optimization / fix direction**
- Always return cleanup in `useEffect` for wallet listeners.

### H4) Capsules fetch strategy scales poorly with contract growth
**Evidence**
- Polling every 30s; scans all gift ids and all red-packet ids from counters downward.
- Nested async per-id requests plus delays in `app/capsules/page.tsx`.

**Impact**
- RPC-heavy, slower UI for large history, higher provider costs/rate-limit risk.

**Optimization / fix direction**
- Move to incremental/event-indexed fetching (since last known id/block), cache, and pagination.

## Medium

### M1) "Received" red packet list includes many non-participant packets
**Evidence**
- In red-packet fetch loop, non-creator items are added to received list when packet is unlocked and not cancelled (`app/capsules/page.tsx`), even without proof current user claimed.

**Impact**
- Inbox may include packets user did not participate in.

**Optimization / fix direction**
- Restrict received list to claimed packets (or packets explicitly attributable to user).

### M2) Duplicate hook implementations increase maintenance overhead
**Evidence**
- `hooks/use-toast.ts` and `components/ui/use-toast.ts` duplicate logic.
- `hooks/use-mobile.ts` and `components/ui/use-mobile.tsx` duplicate logic.

**Impact**
- Drift risk and unnecessary code duplication.

**Optimization / fix direction**
- Keep single source of truth and update imports.

### M3) Large amount of unused UI component files
**Evidence**
- Import graph analysis shows many `components/ui/*` files not referenced by app code.

**Impact**
- Larger maintenance surface and cognitive overhead.

**Optimization / fix direction**
- Remove unused components or isolate into separate reusable package if intentionally retained.

### M4) Two global CSS files with only one wired to app
**Evidence**
- App imports `app/globals.css`.
- `styles/globals.css` exists and is not referenced by app routes.

**Impact**
- Confusion and style drift risk.

**Optimization / fix direction**
- Consolidate to one global stylesheet.

### M5) Build depends on runtime fetch to Google Fonts
**Evidence**
- `app/layout.tsx` uses `next/font/google` Inter.
- Build failed in this environment due to font fetch connectivity.

**Impact**
- Build fragility in restricted/offline CI environments.

**Optimization / fix direction**
- Consider self-hosted font (`next/font/local`) or resilient fallback strategy.

## Low

### L1) Unimplemented share actions in red-packet success modal
**Evidence**
- "Share on X (Twitter)" and "Post on Base App" buttons in `app/create/page.tsx` have no handlers.

**Impact**
- Dead UI actions.

**Optimization / fix direction**
- Wire handlers or hide until implemented.

### L2) Broad `any` usage in key flows
**Evidence**
- `any` in modal props, signer state, parsed logs, wallet objects across pages.

**Impact**
- Lower type safety and harder refactors.

**Optimization / fix direction**
- Add typed interfaces for contract tuples/events and ethereum provider objects.

### L3) User-facing errors use blocking `alert(...)` in packet claim flow
**Evidence**
- `alert(...)` in `app/packet/[id]/page.tsx` error paths.

**Impact**
- Inconsistent UX vs app design system.

**Optimization / fix direction**
- Replace with existing toast/modal UI system.

## 5) Security-focused observations

1. On-chain message confidentiality is not currently enforced (Base64 != encryption).
2. Wallet/account listener hygiene is inconsistent (potential state confusion).
3. Frontend quality gates (lint/type check) are currently ineffective, which raises risk for unnoticed security regressions.

## 6) Performance and reliability optimization priorities

Priority 1 (high ROI):
1. Fix packet-id derivation/link generation reliability.
2. Replace full-history polling with incremental/event-driven loading.
3. Restore lint + strict TS build gate.

Priority 2:
4. Add proper listener cleanup and shared wallet connector abstraction.
5. Remove duplicate hooks + prune unused UI components.
6. Consolidate global styles.

Priority 3:
7. Improve error UX consistency (no browser alerts).
8. Implement or remove placeholder share buttons.

## 7) File coverage note

All repository text/code files were read during this audit pass (93 files total). Binary image assets under `public/` were inventoried but not semantically analyzed as executable code.

