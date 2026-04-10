(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/copyToClipboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyToClipboard",
    ()=>copyToClipboard
]);
'use client';
async function copyToClipboard({ copyValue, onSuccess, onError }) {
    try {
        await navigator.clipboard.writeText(copyValue);
        onSuccess == null ? void 0 : onSuccess();
    } catch (err) {
        onError == null ? void 0 : onError(err);
    }
}
;
 //# sourceMappingURL=copyToClipboard.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/prefixStringParts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefixStringParts",
    ()=>prefixStringParts
]);
function prefixStringParts(string, prefix) {
    return string.replace(// Match any non-whitespace characters that:
    // 1. Are at the start of the string (^) OR preceded by whitespace (\s)
    // 2. Don't already start with the prefix
    new RegExp(`(^|\\s)(?!${prefix})(\\S+)`, "g"), `$1${prefix}$2`);
}
;
 //# sourceMappingURL=prefixStringParts.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "border",
    ()=>border,
    "cn",
    ()=>cn,
    "prefixClassName",
    ()=>prefixClassName,
    "pressable",
    ()=>pressable,
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$prefixStringParts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/prefixStringParts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
const twMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
    prefix: "ock",
    extend: {
        theme: {
            color: [
                "ock-foreground",
                "ock-foreground-muted",
                "ock-foreground-inverse",
                "ock-foreground-disabled",
                "ock-background",
                "ock-background-hover",
                "ock-background-active",
                "ock-background-alternate",
                "ock-background-alternate-hover",
                "ock-background-alternate-active",
                "ock-background-inverse",
                "ock-background-inverse-hover",
                "ock-background-inverse-active",
                "ock-background-reverse",
                "ock-primary",
                "ock-primary-hover",
                "ock-primary-active",
                "ock-primary-washed",
                "ock-primary-disabled",
                "ock-secondary",
                "ock-secondary-hover",
                "ock-secondary-active",
                "ock-error",
                "ock-warning",
                "ock-success",
                "ock-success-background",
                "ock-line"
            ]
        },
        classGroups: {
            shadow: [
                "ock-default"
            ],
            "font-family": [
                "ock"
            ],
            rounded: [
                "ock-default",
                "ock-inner"
            ]
        }
    }
});
function cn(...inputs) {
    return twMerge((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const prefixClassName = (className)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$prefixStringParts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixStringParts"])(className, "ock:");
};
const text = {
    base: prefixClassName("font-ock"),
    body: prefixClassName("font-ock font-normal text-base"),
    caption: prefixClassName("font-ock font-semibold text-xs"),
    headline: prefixClassName("font-ock font-semibold"),
    label1: prefixClassName("font-ock font-semibold text-sm"),
    label2: prefixClassName("font-ock text-sm"),
    legal: prefixClassName("font-ock text-xs"),
    title1: prefixClassName("font-ock font-semibold text-2xl"),
    title3: prefixClassName("font-ock font-semibold text-xl")
};
const pressable = {
    default: prefixClassName(`cursor-pointer bg-ock-background hover:bg-ock-background-hover active:bg-ock-background-active focus:bg-ock-background-active`),
    alternate: prefixClassName(`cursor-pointer bg-ock-background-alternate hover:bg-ock-background-alternate-hover active:bg-ock-background-alternate-active focus:bg-ock-background-alternate-active`),
    inverse: prefixClassName(`cursor-pointer bg-ock-background-inverse hover:bg-ock-background-inverse-hover active:bg-ock-background-inverse-active focus:bg-ock-background-inverse-active`),
    primary: prefixClassName(`cursor-pointer bg-ock-primary hover:bg-ock-primary-hover active:bg-ock-primary-active focus:bg-ock-primary-active`),
    secondary: prefixClassName(`cursor-pointer bg-ock-secondary hover:bg-ock-secondary-hover active:bg-ock-secondary-active focus:bg-ock-secondary-active`),
    coinbaseBranding: prefixClassName("cursor-pointer bg-[#0052FF] hover:bg-[#0045D8]"),
    disabled: prefixClassName("opacity-[0.38] pointer-events-none")
};
const border = {
    lineDefault: prefixClassName("border-ock-line border")
};
;
 //# sourceMappingURL=theme.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getSlicedAddress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSlicedAddress",
    ()=>getSlicedAddress
]);
const getSlicedAddress = (address)=>{
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
;
 //# sourceMappingURL=getSlicedAddress.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/hooks/useValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValue",
    ()=>useValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useValue(object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useValue.useMemo": ()=>object
    }["useValue.useMemo"], [
        object
    ]);
}
;
 //# sourceMappingURL=useValue.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/OnchainKitConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ONCHAIN_KIT_CONFIG",
    ()=>ONCHAIN_KIT_CONFIG,
    "getOnchainKitConfig",
    ()=>getOnchainKitConfig,
    "setOnchainKitConfig",
    ()=>setOnchainKitConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
const ONCHAIN_KIT_CONFIG = {
    apiKey: null,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    config: {
        analytics: true,
        analyticsUrl: null,
        appearance: {
            name: null,
            logo: null,
            mode: null,
            theme: null
        },
        paymaster: null,
        wallet: {
            display: null,
            termsUrl: null,
            privacyUrl: null,
            supportedWallets: {
                rabby: false,
                trust: false,
                frame: false
            }
        }
    },
    rpcUrl: null,
    projectId: null,
    sessionId: null,
    miniKit: {
        enabled: false
    }
};
const getOnchainKitConfig = (configName)=>{
    return ONCHAIN_KIT_CONFIG[configName];
};
const setOnchainKitConfig = (properties)=>{
    Object.assign(ONCHAIN_KIT_CONFIG, properties);
    return getOnchainKitConfig;
};
;
 //# sourceMappingURL=OnchainKitConfig.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/useOnchainKit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnchainKitContext",
    ()=>OnchainKitContext,
    "useOnchainKit",
    ()=>useOnchainKit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$OnchainKitConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/OnchainKitConfig.js [app-client] (ecmascript)");
'use client';
;
;
const OnchainKitContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$OnchainKitConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONCHAIN_KIT_CONFIG"]);
function useOnchainKit() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OnchainKitContext);
}
;
 //# sourceMappingURL=useOnchainKit.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdentityContext",
    ()=>IdentityContext,
    "IdentityProvider",
    ()=>IdentityProvider,
    "useIdentityContext",
    ()=>useIdentityContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$hooks$2f$useValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/hooks/useValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/useOnchainKit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const emptyContext = {};
const IdentityContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(emptyContext);
function useIdentityContext() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(IdentityContext);
}
function IdentityProvider(props) {
    const { chain: contextChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnchainKit"])();
    const accountChain = props.chain ?? contextChain;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$hooks$2f$useValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValue"])({
        address: props.address || "",
        chain: accountChain,
        schemaId: props.schemaId
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IdentityContext.Provider, {
        value,
        children: props.children
    });
}
;
 //# sourceMappingURL=IdentityProvider.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Address",
    ()=>Address
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$copyToClipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/copyToClipboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSlicedAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getSlicedAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function Address({ address = null, className, isSliced = true, hasCopyAddressOnClick = true }) {
    const [copyText, setCopyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Copy");
    const { address: contextAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const accountAddress = address ?? contextAddress;
    if (!accountAddress) {
        console.error("Address: an Ethereum address must be provided to the Identity or Address component.");
        return null;
    }
    const addressContent = isSliced ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSlicedAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlicedAddress"])(accountAddress) : accountAddress;
    if (!hasCopyAddressOnClick) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            "data-testid": "ockAddress",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:text-ock-foreground-muted", __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].label2, className),
            children: addressContent
        });
    }
    const handleClick = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$copyToClipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])({
            copyValue: accountAddress,
            onSuccess: ()=>{
                setCopyText("Copied");
                setTimeout(()=>setCopyText("Copy"), 2e3);
            },
            onError: (err)=>{
                console.error("Failed to copy address:", err);
                setCopyText("Failed to copy");
                setTimeout(()=>setCopyText("Copy"), 2e3);
            }
        });
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        "data-testid": "ockAddress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:text-ock-foreground-muted", __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].label2, className, "ock:group ock:relative ock:cursor-pointer"),
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        role: "button",
        "aria-label": `Copy address ${accountAddress}`,
        children: [
            addressContent,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressable"].alternate, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].legal, "ock:text-ock-foreground", "ock:border-ock-background", "ock:rounded-ock-default", "ock:absolute ock:top-full ock:left-[0%] ock:z-10 ock:mt-0.5 ock:px-1.5 ock:py-0.5 ock:opacity-0 ock:transition-opacity ock:group-hover:opacity-100"),
                "aria-live": "polite",
                children: copyText
            })
        ]
    });
}
;
 //# sourceMappingURL=Address.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChainPublicClient",
    ()=>getChainPublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$OnchainKitConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/OnchainKitConfig.js [app-client] (ecmascript)");
;
;
;
function getChainPublicClient(chain) {
    const apiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$OnchainKitConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOnchainKitConfig"])("apiKey");
    const defaultPublicClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$OnchainKitConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOnchainKitConfig"])("defaultPublicClients");
    if (defaultPublicClients == null ? void 0 : defaultPublicClients[chain.id]) {
        return defaultPublicClients == null ? void 0 : defaultPublicClients[chain.id];
    }
    if (apiKey && (chain === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"] || chain === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"])) {
        const network = chain === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"] ? "base" : "base-sepolia";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(`https://api.developer.coinbase.com/rpc/v1/${network}/${apiKey}`)
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain,
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
    });
}
;
 //# sourceMappingURL=getChainPublicClient.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBase",
    ()=>isBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
function isBase({ chainId, isMainnetOnly = false }) {
    if (isMainnetOnly && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"].id) {
        return true;
    }
    if (!isMainnetOnly && (chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id || chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"].id)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=isBase.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isEthereum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEthereum",
    ()=>isEthereum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
;
function isEthereum({ chainId, isMainnetOnly = false }) {
    if (isMainnetOnly && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id) {
        return true;
    }
    if (!isMainnetOnly && (chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id || chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=isEthereum.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_DEFAULT_PROFILE_PICTURES",
    ()=>BASE_DEFAULT_PROFILE_PICTURES,
    "COINBASE_VERIFIED_ACCOUNT_SCHEMA_ID",
    ()=>COINBASE_VERIFIED_ACCOUNT_SCHEMA_ID,
    "RESOLVER_ADDRESSES_BY_CHAIN_ID",
    ()=>RESOLVER_ADDRESSES_BY_CHAIN_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
const RESOLVER_ADDRESSES_BY_CHAIN_ID = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id]: "0x6533C94869D28fAA8dF77cc63f9e2b2D6Cf77eBA",
    [__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"].id]: "0xC6d566A56A1aFf6508b41f6c90ff131615583BCD"
};
const BASE_DEFAULT_PROFILE_PICTURES1 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72801)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2596.93 1721.27C2605.58 1648.75 2610.21 1574.9 2610.21 1500C2610.21 1425.1 2605.58 1351.4 2596.93 1278.73C2770.3 1177.28 2815.96 914.534 2631.1 772.941C2553.96 713.858 2472.05 660.593 2385.96 614.042C2339.26 528.102 2286.14 446.041 2227.06 368.904C2085.47 184.192 1822.72 229.699 1721.27 403.071C1648.75 394.417 1574.9 389.792 1500 389.792C1425.1 389.792 1351.4 394.417 1278.73 403.071C1177.28 229.699 914.534 184.043 772.941 368.904C713.858 446.041 660.593 527.953 614.042 614.042C528.102 660.742 446.041 713.858 368.904 772.941C184.192 914.534 229.699 1177.28 403.071 1278.73C394.417 1351.25 389.792 1425.1 389.792 1500C389.792 1574.9 394.417 1648.6 403.071 1721.27C229.699 1822.72 184.043 2085.47 368.904 2227.06C446.041 2286.14 527.953 2339.41 614.042 2385.96C660.742 2471.9 713.858 2553.96 772.941 2631.1C914.534 2815.81 1177.28 2770.3 1278.73 2596.93C1351.25 2605.58 1425.1 2610.21 1500 2610.21C1574.9 2610.21 1648.6 2605.58 1721.27 2596.93C1822.72 2770.3 2085.47 2815.96 2227.06 2631.1C2286.14 2553.96 2339.41 2472.05 2385.96 2385.96C2471.9 2339.26 2553.96 2286.14 2631.1 2227.06C2815.81 2085.47 2770.3 1822.72 2596.93 1721.27Z" fill="white"/><path d="M1391.06 1500C1391.06 1647.89 1358.4 1781.62 1305.74 1878.28C1253.03 1975.05 1180.69 2034 1101.53 2034C1022.36 2034 950.031 1975.05 897.314 1878.28C844.66 1781.62 812 1647.89 812 1500C812 1352.11 844.66 1218.38 897.314 1121.72C950.031 1024.95 1022.36 966 1101.53 966C1180.69 966 1253.03 1024.95 1305.74 1121.72C1358.4 1218.38 1391.06 1352.11 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1102.57" cy="1194.93" rx="126.414" ry="231.934" fill="white"/><path d="M2187.16 1500C2187.16 1647.89 2154.5 1781.62 2101.84 1878.28C2049.13 1975.05 1976.79 2034 1897.63 2034C1818.46 2034 1746.13 1975.05 1693.41 1878.28C1640.76 1781.62 1608.1 1647.89 1608.1 1500C1608.1 1352.11 1640.76 1218.38 1693.41 1121.72C1746.13 1024.95 1818.46 966 1897.63 966C1976.79 966 2049.13 1024.95 2101.84 1121.72C2154.5 1218.38 2187.16 1352.11 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1896.58" cy="1194.93" rx="126.414" ry="231.934" fill="white"/></g><defs><clipPath id="clip0_5569_72801"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES2 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72809)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2188.12 1131.95C2691.11 591.187 2356.8 256.94 1815.91 759.826C1767.57 804.826 1737.56 866.494 1733.32 932.403C1733.32 933.767 1733.17 934.979 1733.02 936.343C1722.56 1094.68 1853.35 1225.44 2011.72 1214.98C2013.08 1214.98 2014.29 1214.83 2015.66 1214.68C2081.58 1210.44 2143.26 1180.44 2188.27 1132.1L2188.12 1131.95Z" fill="white"/><path d="M759.879 1816.05C256.885 2356.81 591.204 2691.06 1132.08 2188.17C1180.43 2143.17 1210.44 2081.51 1214.68 2015.6C1214.68 2014.23 1214.83 2013.02 1214.98 2011.66C1225.44 1853.32 1094.65 1722.56 936.283 1733.02C934.919 1733.02 933.706 1733.17 932.342 1733.32C866.418 1737.56 804.738 1767.56 759.727 1815.9L759.879 1816.05Z" fill="white"/><path d="M1131.96 759.922C591.247 256.826 256.881 591.264 759.869 1132.09C804.865 1180.43 866.527 1210.44 932.431 1214.68C933.794 1214.68 935.006 1214.83 936.37 1214.98C1094.69 1225.44 1225.44 1094.66 1214.98 936.309C1214.98 934.946 1214.83 933.733 1214.68 932.369C1210.44 866.452 1180.44 804.777 1132.11 759.771L1131.96 759.922Z" fill="white"/><path d="M1816.05 2188.12C2356.81 2691.11 2691.06 2356.8 2188.17 1815.91C2143.17 1767.57 2081.51 1737.56 2015.6 1733.32C2014.23 1733.32 2013.02 1733.17 2011.66 1733.02C1853.32 1722.56 1722.56 1853.35 1733.02 2011.72C1733.02 2013.08 1733.17 2014.29 1733.32 2015.66C1737.56 2081.58 1767.56 2143.26 1815.9 2188.27L1816.05 2188.12Z" fill="white"/><path d="M1737.18 727.02C1710.36 -10.3398 1237.66 -10.3398 1210.84 727.02C1208.42 792.869 1230.84 857.658 1274.48 907.31C1275.39 908.37 1276.14 909.278 1277.05 910.338C1381.59 1029.62 1566.43 1029.62 1670.97 910.338C1671.88 909.278 1672.63 908.37 1673.54 907.31C1717.18 857.81 1739.45 793.02 1737.18 727.02Z" fill="white"/><path d="M727.02 1210.82C-10.3398 1237.64 -10.3398 1710.34 727.02 1737.16C792.869 1739.58 857.658 1717.16 907.31 1673.52C908.218 1672.62 909.278 1671.86 910.338 1670.95C1029.62 1566.41 1029.62 1381.57 910.338 1277.03C909.278 1276.12 908.37 1275.37 907.31 1274.46C857.81 1230.82 793.02 1208.55 727.02 1210.82Z" fill="white"/><path d="M2040.69 1274.48C2039.63 1275.39 2038.72 1276.14 2037.66 1277.05C1918.38 1381.59 1918.38 1566.43 2037.66 1670.97C2038.72 1671.88 2039.63 1672.63 2040.69 1673.54C2090.19 1717.18 2154.98 1739.45 2220.98 1737.18C2958.34 1710.36 2958.34 1237.66 2220.98 1210.84C2155.13 1208.42 2090.34 1230.84 2040.69 1274.48Z" fill="white"/><path d="M1210.82 2220.98C1237.64 2958.34 1710.34 2958.34 1737.16 2220.98C1739.58 2155.13 1717.16 2090.34 1673.52 2040.69C1672.62 2039.63 1671.86 2038.72 1670.95 2037.66C1566.41 1918.38 1381.57 1918.38 1277.03 2037.66C1276.12 2038.72 1275.37 2039.63 1274.46 2040.69C1230.82 2090.19 1208.55 2154.98 1210.82 2220.98Z" fill="white"/><circle cx="1474.5" cy="1474.5" r="886.5" fill="white"/><path d="M1391.06 1500C1391.06 1352.11 1358.4 1218.38 1305.74 1121.72C1253.03 1024.95 1180.69 966 1101.53 966C1022.36 966 950.031 1024.95 897.314 1121.72C844.66 1218.38 812 1352.11 812 1500C812 1647.89 844.66 1781.62 897.314 1878.28C950.031 1975.05 1022.36 2034 1101.53 2034C1180.69 2034 1253.03 1975.05 1305.74 1878.28C1358.4 1781.62 1391.06 1647.89 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 976.16 2037)" fill="white"/><path d="M2187.16 1500C2187.16 1352.11 2154.5 1218.38 2101.84 1121.72C2049.12 1024.95 1976.79 966 1897.63 966C1818.46 966 1746.13 1024.95 1693.41 1121.72C1640.76 1218.38 1608.1 1352.11 1608.1 1500C1608.1 1647.89 1640.76 1781.62 1693.41 1878.28C1746.13 1975.05 1818.46 2034 1897.63 2034C1976.79 2034 2049.12 1975.05 2101.84 1878.28C2154.5 1781.62 2187.16 1647.89 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 1770.17 2037)" fill="white"/></g><defs><clipPath id="clip0_5569_72809"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES3 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72826)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M587.596 2230.75C839.799 2148.27 1126.41 2048.74 1282.85 1934.35C1406.13 1849.79 1458.98 1757.13 1483.16 1651.34C1488.13 1629.73 1511.93 1629.73 1516.8 1651.34C1540.98 1757.01 1593.83 1849.67 1717.11 1934.35C1873.55 2048.74 2160.26 2148.28 2412.36 2230.75C2681.77 2308.44 2735.86 2334.34 2656.73 2207.31C2588.97 2088.63 2388.28 1817.51 2407.39 1489.82C2407.39 1489.21 2407.39 1488.59 2407.39 1487.86C2397.17 1162.25 2598.34 899.36 2662.18 786.079C2737.77 664.821 2675.65 693.54 2406.72 771.597C2154.43 854.195 1870.3 953.362 1715.2 1067.5C1593.25 1151.7 1540.79 1203.99 1516.8 1309.05C1511.83 1330.65 1488.03 1330.65 1483.16 1309.05C1459.17 1203.87 1406.71 1151.7 1284.76 1067.5C1129.66 953.362 845.533 854.195 593.234 771.597C324.307 693.54 262.284 664.821 337.782 786.079C401.621 899.36 602.791 1162.37 592.47 1488.1C592.47 1488.72 592.47 1489.33 592.47 1490.07C611.583 1817.76 410.891 2088.87 343.134 2207.55C264.004 2334.46 318.095 2308.68 587.5 2231L587.596 2230.75Z" fill="white"/><path d="M769.249 587.596C851.725 839.799 951.26 1126.41 1065.65 1282.85C1150.21 1406.13 1242.87 1458.98 1348.66 1483.16C1370.26 1488.13 1370.26 1511.93 1348.66 1516.8C1242.99 1540.98 1150.33 1593.83 1065.65 1717.11C951.26 1873.55 851.725 2160.26 769.249 2412.36C691.56 2681.77 665.664 2735.86 792.691 2656.73C911.372 2588.97 1182.49 2388.28 1510.18 2407.39C1510.79 2407.39 1511.41 2407.39 1512.14 2407.39C1837.75 2397.17 2100.64 2598.34 2213.92 2662.18C2335.18 2737.77 2306.46 2675.65 2228.4 2406.72C2145.8 2154.43 2046.64 1870.3 1932.5 1715.2C1848.3 1593.25 1796.01 1540.79 1690.95 1516.8C1669.35 1511.83 1669.35 1488.03 1690.95 1483.16C1796.13 1459.17 1848.3 1406.71 1932.5 1284.76C2046.64 1129.66 2145.8 845.533 2228.4 593.234C2306.46 324.307 2335.18 262.284 2213.92 337.782C2100.64 401.621 1837.63 602.791 1511.9 592.47C1511.28 592.47 1510.67 592.47 1509.93 592.47C1182.24 611.583 911.127 410.891 792.446 343.134C665.541 264.004 691.315 318.095 769.004 587.5L769.249 587.596Z" fill="white"/><path d="M1391.06 1500C1391.06 1352.11 1358.4 1218.38 1305.74 1121.72C1253.03 1024.95 1180.69 966 1101.53 966C1022.36 966 950.031 1024.95 897.314 1121.72C844.66 1218.38 812 1352.11 812 1500C812 1647.89 844.66 1781.62 897.314 1878.28C950.031 1975.05 1022.36 2034 1101.53 2034C1180.69 2034 1253.03 1975.05 1305.74 1878.28C1358.4 1781.62 1391.06 1647.89 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 976.159 2037)" fill="white"/><path d="M2187.16 1500C2187.16 1352.11 2154.5 1218.38 2101.84 1121.72C2049.12 1024.95 1976.79 966 1897.63 966C1818.46 966 1746.13 1024.95 1693.41 1121.72C1640.76 1218.38 1608.1 1352.11 1608.1 1500C1608.1 1647.89 1640.76 1781.62 1693.41 1878.28C1746.13 1975.05 1818.46 2034 1897.63 2034C1976.79 2034 2049.12 1975.05 2101.84 1878.28C2154.5 1781.62 2187.16 1647.89 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="126.414" cy="231.934" rx="126.414" ry="231.934" transform="matrix(1 0 0 -1 1770.17 2037)" fill="white"/></g><defs><clipPath id="clip0_5569_72826"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES4 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72835)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2713.13 1500C2731.2 1680.92 2615.13 1818.15 2507.78 1924.42C2394.7 2032.13 2290.44 2108.88 2200.88 2200.61C2109.15 2290.16 2032.22 2394.61 1924.51 2507.68C1818.15 2615.04 1680.92 2731.11 1500 2713.13C1319.08 2731.2 1181.85 2615.13 1075.58 2507.78C967.866 2394.7 891.12 2290.44 799.389 2200.88C709.837 2109.15 605.39 2032.22 492.315 1924.51C384.962 1818.15 268.89 1680.92 286.873 1500C268.799 1319.08 384.871 1181.85 492.224 1075.58C605.299 967.866 709.564 891.12 799.116 799.389C890.848 709.837 967.775 605.39 1075.49 492.315C1181.85 384.871 1319.08 268.799 1500 286.873C1680.92 268.799 1818.15 384.871 1924.42 492.224C2032.13 605.299 2108.88 709.564 2200.61 799.116C2290.16 890.848 2394.61 967.775 2507.68 1075.49C2615.04 1181.85 2731.11 1319.08 2713.13 1500Z" fill="white"/><path d="M1391.06 1500C1391.06 1647.89 1358.4 1781.62 1305.74 1878.28C1253.03 1975.05 1180.69 2034 1101.53 2034C1022.36 2034 950.031 1975.05 897.314 1878.28C844.66 1781.62 812 1647.89 812 1500C812 1352.11 844.66 1218.38 897.314 1121.72C950.031 1024.95 1022.36 966 1101.53 966C1180.69 966 1253.03 1024.95 1305.74 1121.72C1358.4 1218.38 1391.06 1352.11 1391.06 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1102.57" cy="1194.93" rx="126.414" ry="231.934" fill="white"/><path d="M2187.16 1500C2187.16 1647.89 2154.5 1781.62 2101.84 1878.28C2049.12 1975.05 1976.79 2034 1897.63 2034C1818.46 2034 1746.13 1975.05 1693.41 1878.28C1640.76 1781.62 1608.1 1647.89 1608.1 1500C1608.1 1352.11 1640.76 1218.38 1693.41 1121.72C1746.13 1024.95 1818.46 966 1897.63 966C1976.79 966 2049.12 1024.95 2101.84 1121.72C2154.5 1218.38 2187.16 1352.11 2187.16 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1896.58" cy="1194.93" rx="126.414" ry="231.934" fill="white"/></g><defs><clipPath id="clip0_5569_72835"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES5 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72843)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2321.64 1500C3048.65 1727.51 2902.59 1900.1 2182.54 1787.44C2625.43 2169.27 2494.23 2265.93 1974.71 1974.53C2266.19 2493.97 2169.44 2625.34 1787.53 2182.54C1900.19 2902.68 1727.6 3048.65 1500 2321.64C1272.49 3048.65 1099.9 2902.59 1212.56 2182.54C830.733 2625.43 734.069 2494.23 1025.47 1974.71C506.03 2266.19 374.655 2169.44 817.464 1787.53C97.3173 1900.19 -48.6455 1727.6 678.356 1500C-48.6455 1272.49 97.4051 1099.9 817.464 1212.56C374.567 830.733 505.767 734.069 1025.29 1025.47C733.806 506.03 830.558 374.655 1212.47 817.464C1099.81 97.3173 1272.4 -48.6455 1500 678.356C1727.51 -48.6455 1900.1 97.4051 1787.44 817.464C2169.27 374.567 2265.93 505.767 1974.53 1025.29C2493.97 733.806 2625.34 830.558 2182.54 1212.47C2902.68 1099.81 3048.65 1272.4 2321.64 1500Z" fill="white"/><path d="M1402.29 1500.15C1402.29 1632.88 1372.98 1752.91 1325.73 1839.64C1278.42 1926.48 1213.56 1979.29 1142.65 1979.29C1071.73 1979.29 1006.87 1926.48 959.562 1839.64C912.315 1752.91 883 1632.88 883 1500.15C883 1367.41 912.315 1247.38 959.562 1160.65C1006.87 1073.81 1071.73 1021 1142.65 1021C1213.56 1021 1278.42 1073.81 1325.73 1160.65C1372.98 1247.38 1402.29 1367.41 1402.29 1500.15Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="998.466" cy="1500.14" rx="113.501" ry="208.242" fill="white"/><path d="M2117.07 1500.15C2117.07 1632.88 2087.76 1752.91 2040.51 1839.64C1993.2 1926.48 1928.34 1979.29 1857.42 1979.29C1786.51 1979.29 1721.65 1926.48 1674.34 1839.64C1627.09 1752.91 1597.78 1632.88 1597.78 1500.15C1597.78 1367.41 1627.09 1247.38 1674.34 1160.65C1721.65 1073.81 1786.51 1021 1857.42 1021C1928.34 1021 1993.2 1073.81 2040.51 1160.65C2087.76 1247.38 2117.07 1367.41 2117.07 1500.15Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1712.74" cy="1498.06" rx="113.501" ry="208.242" fill="white"/></g><defs><clipPath id="clip0_5569_72843"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES6 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72851)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M2538.7 1207.34C2483.17 1184.33 2431.23 1159.94 2382.18 1133.9C2398.44 1080.86 2417.87 1026.85 2440.88 971.324C2548.89 711.06 2287.94 450.106 2027.68 558.125C1972.15 581.134 1918.14 600.699 1865.1 616.819C1839.06 567.907 1814.67 515.827 1791.66 460.302C1684.05 199.899 1314.94 199.899 1207.34 460.302C1184.33 515.827 1159.94 567.769 1133.9 616.819C1080.86 600.561 1026.85 581.134 971.324 558.125C711.06 450.106 450.106 711.06 558.125 971.324C581.134 1026.85 600.699 1080.86 616.819 1133.9C567.907 1159.94 515.827 1184.33 460.302 1207.34C199.899 1314.94 199.899 1684.05 460.302 1791.66C515.827 1814.67 567.769 1839.06 616.819 1865.1C600.561 1918.14 581.134 1972.15 558.125 2027.68C450.106 2287.94 711.06 2548.89 971.324 2440.88C1026.85 2417.87 1080.86 2398.3 1133.9 2382.18C1159.94 2431.09 1184.33 2483.17 1207.34 2538.7C1314.94 2799.1 1684.05 2799.1 1791.66 2538.7C1814.67 2483.17 1839.06 2431.23 1865.1 2382.18C1918.14 2398.44 1972.15 2417.87 2027.68 2440.88C2287.94 2548.89 2548.89 2287.94 2440.88 2027.68C2417.87 1972.15 2398.3 1918.14 2382.18 1865.1C2431.09 1839.06 2483.17 1814.67 2538.7 1791.66C2799.1 1684.05 2799.1 1314.94 2538.7 1207.34ZM1735.31 1727.87C1732.83 1730.35 1730.35 1732.83 1727.87 1735.31C1697.42 1766.58 1662.15 1790.01 1624.53 1806.13C1587.47 1820.46 1547.24 1828.17 1504.94 1827.62C1501.36 1827.62 1497.92 1827.62 1494.33 1827.62C1452.04 1828.17 1411.67 1820.32 1374.74 1806.13C1337.13 1790.01 1301.86 1766.58 1271.41 1735.31C1268.93 1732.83 1266.45 1730.35 1263.97 1727.87C1232.69 1697.42 1209.27 1662.15 1193.15 1624.53C1178.82 1587.61 1171.1 1547.24 1171.65 1504.94C1171.65 1501.36 1171.65 1497.92 1171.65 1494.33C1171.1 1452.04 1178.96 1411.67 1193.15 1374.74C1209.27 1337.13 1232.69 1301.86 1263.97 1271.41C1266.45 1268.93 1268.93 1266.45 1271.41 1263.97C1301.86 1232.69 1337.13 1209.27 1374.74 1193.15C1411.67 1178.82 1452.04 1171.1 1494.33 1171.65C1497.92 1171.65 1501.36 1171.65 1504.94 1171.65C1547.24 1171.1 1587.61 1178.96 1624.53 1193.15C1662.15 1209.27 1697.42 1232.69 1727.87 1263.97C1730.35 1266.45 1732.83 1268.93 1735.31 1271.41C1766.58 1301.86 1790.01 1337.13 1806.13 1374.74C1820.46 1411.8 1828.17 1452.04 1827.62 1494.33C1827.62 1497.92 1827.62 1501.36 1827.62 1504.94C1828.17 1547.24 1820.32 1587.61 1806.13 1624.53C1790.01 1662.15 1766.58 1697.42 1735.31 1727.87Z" fill="white"/><circle cx="1476" cy="1442" r="443" fill="white"/><path d="M1400.59 1202.5C1400.59 1334.79 1371.37 1454.31 1324.38 1540.58C1277.28 1627.04 1213.04 1679 1143.3 1679C1073.56 1679 1009.31 1627.04 962.215 1540.58C915.221 1454.31 886 1334.79 886 1202.5C886 1070.21 915.221 950.688 962.215 864.42C1009.31 777.961 1073.56 726 1143.3 726C1213.04 726 1277.28 777.961 1324.38 864.42C1371.37 950.688 1400.59 1070.21 1400.59 1202.5Z" fill="#155DFD" stroke="white" stroke-width="10"/><ellipse cx="1141.26" cy="931.03" rx="113.349" ry="207.963" fill="white"/><path d="M2114.41 1202.5C2114.41 1334.79 2085.19 1454.31 2038.19 1540.58C1991.1 1627.04 1926.85 1679 1857.11 1679C1787.37 1679 1723.13 1627.04 1676.03 1540.58C1629.04 1454.31 1599.82 1334.79 1599.82 1202.5C1599.82 1070.21 1629.04 950.688 1676.03 864.42C1723.13 777.961 1787.37 726 1857.11 726C1926.85 726 1991.1 777.961 2038.19 864.42C2085.19 950.688 2114.41 1070.21 2114.41 1202.5Z" fill="#155DFD" stroke="white" stroke-width="10"/><ellipse cx="1861.96" cy="928.963" rx="113.349" ry="207.963" fill="white"/></g><defs><clipPath id="clip0_5569_72851"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES7 = `<svg width="3000" height="3000" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5569_72860)"><rect width="3000" height="3000" fill="#155DFD"/><circle cx="1500" cy="1500" r="1500" fill="#155DFD"/><path d="M1500.19 1499.87C1365.57 1351.79 1298.1 1205.48 1296.93 988.1C1296.16 779.052 1361.71 498.983 1502.29 274.909C1565.01 170.441 1645.1 119.866 1696.41 125.097C1750.22 129.37 1775.2 189.413 1785.5 284.511C1806.04 473.278 1775.29 803.798 1990.99 1009.07C2196.26 1224.77 2526.78 1194.09 2715.59 1214.68C2810.65 1224.78 2870.69 1249.84 2874.93 1303.61C2880.12 1354.96 2829.55 1435.05 2725.08 1497.77C2501.01 1638.35 2220.94 1703.91 2011.89 1703.13C1794.55 1702 1648.19 1634.49 1500.12 1499.87L1500.19 1499.87Z" fill="white"/><path d="M1499.98 1500.01C1634.61 1648.08 1702.07 1794.4 1703.24 2011.77C1704.02 2220.82 1638.47 2500.89 1497.89 2724.97C1435.16 2829.43 1355.07 2880.01 1303.77 2874.78C1249.96 2870.5 1224.97 2810.46 1214.68 2715.36C1194.13 2526.6 1224.89 2196.08 1009.18 1990.81C803.914 1775.1 473.394 1805.78 284.59 1785.2C189.528 1775.09 129.486 1750.03 125.249 1696.26C120.055 1644.91 170.63 1564.82 275.098 1502.1C499.172 1361.52 779.24 1295.97 988.289 1296.75C1205.63 1297.88 1351.98 1365.38 1500.06 1500.01L1499.98 1500.01Z" fill="white"/><path d="M1481.64 1518.29C1630.16 1383.18 1776.72 1315.24 1994.12 1313.37C2203.19 1311.92 2483.08 1376.57 2706.72 1516.45C2811 1578.84 2861.32 1658.78 2855.93 1710.11C2851.48 1763.93 2791.35 1789.12 2696.21 1799.72C2507.36 1820.87 2176.9 1791.18 1970.91 2007.57C1754.52 2213.55 1784.15 2544.01 1762.95 2732.9C1752.54 2828.01 1727.28 2888.14 1673.49 2892.55C1622.12 2897.91 1542.19 2847.58 1479.79 2743.31C1339.92 2519.66 1275.26 2239.77 1276.71 2030.7C1278.54 1813.33 1346.52 1666.75 1481.64 1518.22L1481.64 1518.29Z" fill="white"/><path d="M1481.81 1518.43C1333.29 1653.54 1186.74 1721.48 969.339 1723.34C760.267 1724.79 480.38 1660.13 256.734 1520.25C152.457 1457.85 102.133 1377.92 107.529 1326.59C111.975 1272.76 172.103 1247.58 267.243 1236.98C456.094 1215.83 786.549 1245.53 992.528 1029.15C1208.91 823.167 1179.28 492.713 1200.47 303.825C1210.92 208.685 1236.11 148.557 1289.93 144.111C1341.3 138.752 1421.23 189.076 1483.63 293.353C1623.51 516.999 1688.17 796.885 1686.72 1005.96C1684.9 1223.32 1616.92 1369.91 1481.81 1518.43Z" fill="white"/><path d="M1403.24 1500C1403.24 1630.77 1374.36 1749 1327.82 1834.44C1281.21 1919.99 1217.33 1972 1147.49 1972C1077.65 1972 1013.76 1919.99 967.153 1834.44C920.611 1749 891.731 1630.77 891.731 1500C891.731 1369.23 920.611 1251 967.153 1165.56C1013.76 1080.01 1077.65 1028 1147.49 1028C1217.33 1028 1281.21 1080.01 1327.82 1165.56C1374.36 1251 1403.24 1369.23 1403.24 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1148.41" cy="1230.16" rx="111.819" ry="205.156" fill="white"/><path d="M2107.42 1500C2107.42 1630.77 2078.55 1749 2032 1834.44C1985.4 1919.99 1921.51 1972 1851.67 1972C1781.83 1972 1717.94 1919.99 1671.34 1834.44C1624.79 1749 1595.92 1630.77 1595.92 1500C1595.92 1369.23 1624.79 1251 1671.34 1165.56C1717.94 1080.01 1781.83 1028 1851.67 1028C1921.51 1028 1985.4 1080.01 2032 1165.56C2078.55 1251 2107.42 1369.23 2107.42 1500Z" fill="#155DFD" stroke="white" stroke-width="6"/><ellipse cx="1850.75" cy="1230.16" rx="111.819" ry="205.156" fill="white"/></g><defs><clipPath id="clip0_5569_72860"><rect width="3000" height="3000" fill="white"/></clipPath></defs></svg>`;
const BASE_DEFAULT_PROFILE_PICTURES = [
    BASE_DEFAULT_PROFILE_PICTURES1,
    BASE_DEFAULT_PROFILE_PICTURES2,
    BASE_DEFAULT_PROFILE_PICTURES3,
    BASE_DEFAULT_PROFILE_PICTURES4,
    BASE_DEFAULT_PROFILE_PICTURES5,
    BASE_DEFAULT_PROFILE_PICTURES6,
    BASE_DEFAULT_PROFILE_PICTURES7
];
const COINBASE_VERIFIED_ACCOUNT_SCHEMA_ID = "0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9";
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getBaseDefaultProfilePictureIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseDefaultProfilePictureIndex",
    ()=>getBaseDefaultProfilePictureIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/hash/sha256.js [app-client] (ecmascript)");
;
const getBaseDefaultProfilePictureIndex = (name, optionsLength)=>{
    const nameAsUint8Array = Uint8Array.from(name.split("").map((letter)=>letter.charCodeAt(0)));
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(nameAsUint8Array);
    const hashValue = Number.parseInt(hash, 16);
    const remainder = hashValue % optionsLength;
    const index = remainder;
    return index;
};
;
 //# sourceMappingURL=getBaseDefaultProfilePictureIndex.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getBaseDefaultProfilePicture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseDefaultProfilePicture",
    ()=>getBaseDefaultProfilePicture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePictureIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getBaseDefaultProfilePictureIndex.js [app-client] (ecmascript)");
;
;
const getBaseDefaultProfilePicture = (username)=>{
    const profilePictureIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePictureIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseDefaultProfilePictureIndex"])(username, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_DEFAULT_PROFILE_PICTURES"].length);
    const selectedProfilePicture = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_DEFAULT_PROFILE_PICTURES"][profilePictureIndex];
    const base64Svg = btoa(selectedProfilePicture);
    const dataUri = `data:image/svg+xml;base64,${base64Svg}`;
    return dataUri;
};
;
 //# sourceMappingURL=getBaseDefaultProfilePicture.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/isBasename.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBasename",
    ()=>isBasename
]);
const isBasename = (username)=>{
    if (username.endsWith(".base.eth")) {
        return true;
    }
    if (username.endsWith(".basetest.eth")) {
        return true;
    }
    return false;
};
;
 //# sourceMappingURL=isBasename.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvatar",
    ()=>getAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isEthereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/ens/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePicture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getBaseDefaultProfilePicture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$isBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/isBasename.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const getAvatar = async ({ ensName, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] })=>{
    const chainIsBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase"])({
        chainId: chain.id
    });
    const chainIsEthereum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEthereum"])({
        chainId: chain.id
    });
    const chainSupportsUniversalResolver = chainIsEthereum || chainIsBase;
    const usernameIsBasename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$isBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBasename"])(ensName);
    if (!chainSupportsUniversalResolver) {
        return Promise.reject("ChainId not supported, avatar resolution is only supported on Ethereum and Base.");
    }
    let client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(chain);
    let baseEnsAvatar = null;
    if (chainIsBase) {
        try {
            baseEnsAvatar = await client.getEnsAvatar({
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(ensName),
                universalResolverAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOLVER_ADDRESSES_BY_CHAIN_ID"][chain.id]
            });
            if (baseEnsAvatar) {
                return baseEnsAvatar;
            }
        } catch  {}
    }
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    const mainnetEnsAvatar = await client.getEnsAvatar({
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(ensName)
    });
    if (mainnetEnsAvatar) {
        return mainnetEnsAvatar;
    }
    if (usernameIsBasename) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePicture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseDefaultProfilePicture"])(ensName);
    }
    return null;
};
;
 //# sourceMappingURL=getAvatar.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CACHE_TIME",
    ()=>DEFAULT_CACHE_TIME,
    "DEFAULT_QUERY_OPTIONS",
    ()=>DEFAULT_QUERY_OPTIONS,
    "DEFAULT_STALE_TIME",
    ()=>DEFAULT_STALE_TIME
]);
const DEFAULT_CACHE_TIME = 1e3 * 60 * 30;
const DEFAULT_STALE_TIME = 1e3 * 60 * 5;
const DEFAULT_QUERY_OPTIONS = {
    /** Determines how long inactive/unused data remains in the cache */ gcTime: DEFAULT_CACHE_TIME,
    /** Determines how long data remains "fresh" before it's considered stale. */ staleTime: DEFAULT_STALE_TIME,
    /** Whether the query should refetch when the window is focused */ refetchOnWindowFocus: false
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAvatar",
    ()=>useAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useAvatar = ({ ensName, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const queryKey = [
        "useAvatar",
        ensName,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useAvatar.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatar"])({
                    ensName,
                    chain
                })
        }["useAvatar.useQuery"],
        enabled: !!ensName,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useAvatar.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/abis/L2ResolverAbi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>L2ResolverAbi
]);
const L2ResolverAbi = [
    {
        inputs: [
            {
                internalType: "contract ENS",
                name: "ens_",
                type: "address"
            },
            {
                internalType: "address",
                name: "registrarController_",
                type: "address"
            },
            {
                internalType: "address",
                name: "reverseRegistrar_",
                type: "address"
            },
            {
                internalType: "address",
                name: "owner_",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "AlreadyInitialized",
        type: "error"
    },
    {
        inputs: [],
        name: "CantSetSelfAsDelegate",
        type: "error"
    },
    {
        inputs: [],
        name: "CantSetSelfAsOperator",
        type: "error"
    },
    {
        inputs: [],
        name: "NewOwnerIsZeroAddress",
        type: "error"
    },
    {
        inputs: [],
        name: "NoHandoverRequest",
        type: "error"
    },
    {
        inputs: [],
        name: "Unauthorized",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "contentType",
                type: "uint256"
            }
        ],
        name: "ABIChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "address",
                name: "a",
                type: "address"
            }
        ],
        name: "AddrChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "newAddress",
                type: "bytes"
            }
        ],
        name: "AddressChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "delegate",
                type: "address"
            },
            {
                indexed: true,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "Approved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "hash",
                type: "bytes"
            }
        ],
        name: "ContenthashChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "record",
                type: "bytes"
            }
        ],
        name: "DNSRecordChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            }
        ],
        name: "DNSRecordDeleted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "lastzonehash",
                type: "bytes"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "zonehash",
                type: "bytes"
            }
        ],
        name: "DNSZonehashChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            },
            {
                indexed: false,
                internalType: "address",
                name: "implementer",
                type: "address"
            }
        ],
        name: "InterfaceChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "NameChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pendingOwner",
                type: "address"
            }
        ],
        name: "OwnershipHandoverCanceled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pendingOwner",
                type: "address"
            }
        ],
        name: "OwnershipHandoverRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        name: "PubkeyChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newRegistrarController",
                type: "address"
            }
        ],
        name: "RegistrarControllerUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newReverseRegistrar",
                type: "address"
            }
        ],
        name: "ReverseRegistrarUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "string",
                name: "indexedKey",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string"
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string"
            }
        ],
        name: "TextChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "newVersion",
                type: "uint64"
            }
        ],
        name: "VersionChanged",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "contentTypes",
                type: "uint256"
            }
        ],
        name: "ABI",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "addr",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            }
        ],
        name: "addr",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "delegate",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "cancelOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "clearRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pendingOwner",
                type: "address"
            }
        ],
        name: "completeOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "contenthash",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32"
            },
            {
                internalType: "uint16",
                name: "resource",
                type: "uint16"
            }
        ],
        name: "dnsRecord",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ens",
        outputs: [
            {
                internalType: "contract ENS",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32"
            }
        ],
        name: "hasDNSRecords",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "interfaceImplementer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "delegate",
                type: "address"
            }
        ],
        name: "isApprovedFor",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            }
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            }
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "nodehash",
                type: "bytes32"
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            }
        ],
        name: "multicallWithNodeCheck",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "result",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pendingOwner",
                type: "address"
            }
        ],
        name: "ownershipHandoverExpiresAt",
        outputs: [
            {
                internalType: "uint256",
                name: "result",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "pubkey",
        outputs: [
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        name: "recordVersions",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "registrarController",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "requestOwnershipHandover",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "resolve",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reverseRegistrar",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "contentType",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "setABI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "coinType",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "a",
                type: "bytes"
            }
        ],
        name: "setAddr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "a",
                type: "address"
            }
        ],
        name: "setAddr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "hash",
                type: "bytes"
            }
        ],
        name: "setContenthash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "setDNSRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            },
            {
                internalType: "address",
                name: "implementer",
                type: "address"
            }
        ],
        name: "setInterface",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "newName",
                type: "string"
            }
        ],
        name: "setName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32"
            }
        ],
        name: "setPubkey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "registrarController_",
                type: "address"
            }
        ],
        name: "setRegistrarController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "reverseRegistrar_",
                type: "address"
            }
        ],
        name: "setReverseRegistrar",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "key",
                type: "string"
            },
            {
                internalType: "string",
                name: "value",
                type: "string"
            }
        ],
        name: "setText",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "hash",
                type: "bytes"
            }
        ],
        name: "setZonehash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "key",
                type: "string"
            }
        ],
        name: "text",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }
        ],
        name: "zonehash",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
;
 //# sourceMappingURL=L2ResolverAbi.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/convertChainIdToCoinType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertChainIdToCoinType",
    ()=>convertChainIdToCoinType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
const convertChainIdToCoinType = (chainId)=>{
    if (chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id) {
        return "addr";
    }
    const cointype = (2147483648 | chainId) >>> 0;
    return cointype.toString(16).toLocaleUpperCase();
};
;
 //# sourceMappingURL=convertChainIdToCoinType.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/convertReverseNodeToBytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertReverseNodeToBytes",
    ()=>convertReverseNodeToBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/ens/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/abi/encodePacked.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertChainIdToCoinType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/convertChainIdToCoinType.js [app-client] (ecmascript)");
;
;
const convertReverseNodeToBytes = (address, chainId)=>{
    const addressFormatted = address.toLocaleLowerCase();
    const addressNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(addressFormatted.substring(2));
    const chainCoinType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertChainIdToCoinType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChainIdToCoinType"])(chainId);
    const baseReverseNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(`${chainCoinType.toLocaleUpperCase()}.reverse`);
    const addressReverseNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodePacked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacked"])([
        "bytes32",
        "bytes32"
    ], [
        baseReverseNode,
        addressNode
    ]));
    return addressReverseNode;
};
;
 //# sourceMappingURL=convertReverseNodeToBytes.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddress",
    ()=>getAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
const getAddress = async ({ name })=>{
    const mainnetClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    const address = await mainnetClient.getEnsAddress({
        name
    });
    return address ?? null;
};
;
 //# sourceMappingURL=getAddress.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getName",
    ()=>getName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isEthereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$abis$2f$L2ResolverAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/abis/L2ResolverAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertReverseNodeToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/convertReverseNodeToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddress.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const getName = async ({ address, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] })=>{
    const chainIsBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase"])({
        chainId: chain.id
    });
    const chainIsEthereum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEthereum"])({
        chainId: chain.id
    });
    const chainSupportsUniversalResolver = chainIsEthereum || chainIsBase;
    if (!chainSupportsUniversalResolver) {
        return Promise.reject("ChainId not supported, name resolution is only supported on Ethereum and Base.");
    }
    if (!address) {
        return null;
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(chain);
    if (chainIsBase) {
        const addressReverseNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertReverseNodeToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertReverseNodeToBytes"])(address, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"].id);
        try {
            const basename = await client.readContract({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$abis$2f$L2ResolverAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOLVER_ADDRESSES_BY_CHAIN_ID"][chain.id],
                functionName: "name",
                args: [
                    addressReverseNode
                ]
            });
            if (basename) {
                try {
                    const resolvedAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])({
                        name: basename
                    });
                    if (resolvedAddress && resolvedAddress.toLowerCase() === address.toLowerCase()) {
                        return basename;
                    }
                } catch (error) {
                    console.error("Error during basename forward resolution verification:", error);
                }
            }
        } catch  {}
    }
    const fallbackClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    try {
        const ensName = await fallbackClient.getEnsName({
            address
        });
        if (ensName) {
            try {
                const resolvedAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])({
                    name: ensName
                });
                if (resolvedAddress && resolvedAddress.toLowerCase() === address.toLowerCase()) {
                    return ensName;
                }
            } catch (error) {
                console.error("Error during ENS forward resolution verification:", error);
            }
        }
    } catch  {}
    return null;
};
;
 //# sourceMappingURL=getName.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useName",
    ()=>useName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useName = ({ address, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const queryKey = [
        "useName",
        address,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useName.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getName"])({
                    address,
                    chain
                })
        }["useName.useQuery"],
        enabled: !!address,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useName.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/findComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findComponent",
    ()=>findComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function findComponent(Component) {
    return (child)=>{
        const childType = child == null ? void 0 : child.type;
        if (childType && typeof childType === "object" && "_payload" in childType) {
            const serverPayload = childType;
            return serverPayload._payload.value[2] === Component.name;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child) && child.type === Component;
    };
}
;
 //# sourceMappingURL=findComponent.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/defaultAvatarSVG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultAvatarSVG",
    ()=>defaultAvatarSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const defaultAvatarSVG = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
    "data-testid": "ock-defaultAvatarSVG",
    role: "img",
    "aria-label": "ock-defaultAvatarSVG",
    width: "100%",
    height: "100%",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ock:h-full ock:w-full",
    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        d: "M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40ZM25.6641 13.9974C25.6641 10.8692 23.1282 8.33333 20.0001 8.33333C16.8719 8.33333 14.336 10.8692 14.336 13.9974C14.336 17.1256 16.8719 19.6615 20.0001 19.6615C23.1282 19.6615 25.6641 17.1256 25.6641 13.9974ZM11.3453 23.362L9.53476 28.1875C12.2141 30.8475 15.9019 32.493 19.974 32.5H20.026C24.0981 32.493 27.7859 30.8475 30.4653 28.1874L28.6547 23.362C28.0052 21.625 26.3589 20.4771 24.5162 20.4318C24.4557 20.4771 22.462 21.9271 20 21.9271C17.538 21.9271 15.5443 20.4771 15.4839 20.4318C13.6412 20.462 11.9948 21.625 11.3453 23.362Z",
        className: "ock:fill-ock-foreground"
    })
});
;
 //# sourceMappingURL=defaultAvatarSVG.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/defaultLoadingSVG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLoadingSVG",
    ()=>defaultLoadingSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const defaultLoadingSVG = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
    "data-testid": "ock-defaultLoadingSVG",
    role: "img",
    "aria-label": "ock-defaultLoadingSVG",
    width: "100%",
    height: "100%",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
        cx: "50",
        cy: "50",
        r: "45",
        stroke: "#333",
        fill: "none",
        strokeWidth: "10",
        strokeLinecap: "round",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 50 50",
            to: "360 50 50",
            dur: "1s",
            repeatCount: "indefinite"
        })
    })
});
;
 //# sourceMappingURL=defaultLoadingSVG.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easChainBase",
    ()=>easChainBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/base.js [app-client] (ecmascript)");
;
const easChainBase = {
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base"].id,
    easGraphqlAPI: "https://base.easscan.org/graphql",
    schemaUids: [
        /**
     * VERIFIED_COUNTRY
     * https://base.easscan.org/schema/view/0x1801901fabd0e6189356b4fb52bb0ab855276d84f7ec140839fbd1f6801ca065
     */ "0x1801901fabd0e6189356b4fb52bb0ab855276d84f7ec140839fbd1f6801ca065",
        /**
     * VERIFIED_ACCOUNT
     * https://base.easscan.org/schema/view/0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9
     */ "0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
    ]
};
;
 //# sourceMappingURL=base.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/baseSepolia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easChainBaseSepolia",
    ()=>easChainBaseSepolia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
;
const easChainBaseSepolia = {
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"].id,
    easGraphqlAPI: "https://base-sepolia.easscan.org/graphql",
    schemaUids: [
        /**
     * VERIFIED_COUNTRY
     * https://base-sepolia.easscan.org/schema/view/0xef54ae90f47a187acc050ce631c55584fd4273c0ca9456ab21750921c3a84028
     */ "0xef54ae90f47a187acc050ce631c55584fd4273c0ca9456ab21750921c3a84028",
        /**
     * VERIFIED_ACCOUNT
     * https://base-sepolia.easscan.org/schema/view/0x2f34a2ffe5f87b2f45fbc7c784896b768d77261e2f24f77341ae43751c765a69
     */ "0x2f34a2ffe5f87b2f45fbc7c784896b768d77261e2f24f77341ae43751c765a69"
    ]
};
;
 //# sourceMappingURL=baseSepolia.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/optimism.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easChainOptimism",
    ()=>easChainOptimism
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/optimism.js [app-client] (ecmascript)");
;
const easChainOptimism = {
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimism"].id,
    easGraphqlAPI: "https://optimism.easscan.org/graphql",
    schemaUids: [
        /** N_A
     * https://optimism.easscan.org/schema/view/0xac4c92fc5c7babed88f78a917cdbcdc1c496a8f4ab2d5b2ec29402736b2cf929
     */ "0xac4c92fc5c7babed88f78a917cdbcdc1c496a8f4ab2d5b2ec29402736b2cf929",
        /** GITCOIN_PASSPORT_SCORES_V1:
     * https://optimism.easscan.org/schema/view/0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89
     */ "0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89",
        /** OPTIMISM_GOVERNANCE_SEASON_4_CO_GRANT_PARTICIPANT:
     * https://optimism.easscan.org/schema/view/0x401a80196f3805c57b00482ae2b575a9f270562b6b6de7711af9837f08fa0faf
     */ "0x401a80196f3805c57b00482ae2b575a9f270562b6b6de7711af9837f08fa0faf"
    ]
};
;
 //# sourceMappingURL=optimism.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/easSupportedChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easSupportedChains",
    ()=>easSupportedChains,
    "getChainEASGraphQLAPI",
    ()=>getChainEASGraphQLAPI,
    "isChainSupported",
    ()=>isChainSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/baseSepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/definitions/optimism.js [app-client] (ecmascript)");
;
;
;
const easSupportedChains = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainBase"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainBase"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainBaseSepolia"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainBaseSepolia"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainOptimism"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$definitions$2f$optimism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easChainOptimism"]
};
function isChainSupported(chain) {
    return chain.id in easSupportedChains;
}
function getChainEASGraphQLAPI(chain) {
    var _a;
    return ((_a = easSupportedChains[chain.id]) == null ? void 0 : _a.easGraphqlAPI) ?? "";
}
;
 //# sourceMappingURL=easSupportedChains.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/createEasGraphQLClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEasGraphQLClient",
    ()=>createEasGraphQLClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$easSupportedChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/easSupportedChains.js [app-client] (ecmascript)");
;
;
function createEasGraphQLClient(chain) {
    const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$easSupportedChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainEASGraphQLAPI"])(chain);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GraphQLClient"](endpoint);
}
;
 //# sourceMappingURL=createEasGraphQLClient.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/attestations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attestationQuery",
    ()=>attestationQuery,
    "getAttestationQueryVariables",
    ()=>getAttestationQueryVariables,
    "getAttestationsByFilter",
    ()=>getAttestationsByFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$createEasGraphQLClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/createEasGraphQLClient.js [app-client] (ecmascript)");
;
;
;
const attestationQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gql"]`
  query AttestationsForUsers(
    $where: AttestationWhereInput
    $distinct: [AttestationScalarFieldEnum!]
    $take: Int
  ) {
    attestations(where: $where, distinct: $distinct, take: $take) {
      id
      txid
      schemaId
      attester
      recipient
      revoked
      revocationTime
      expirationTime
      time
      timeCreated
      decodedDataJson
    }
  }
`;
function getAttestationQueryVariables(address, filters) {
    const checksummedAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address);
    const conditions = {
        recipient: {
            equals: checksummedAddress
        },
        revoked: {
            equals: filters.revoked
        }
    };
    if (typeof filters.expirationTime === "number") {
        conditions.OR = [
            {
                expirationTime: {
                    equals: 0
                }
            },
            {
                expirationTime: {
                    gt: filters.expirationTime
                }
            }
        ];
    }
    if ((filters == null ? void 0 : filters.schemas) && filters.schemas.length > 0) {
        conditions.schemaId = {
            in: filters.schemas
        };
    }
    return {
        where: {
            AND: [
                conditions
            ]
        },
        distinct: [
            "schemaId"
        ],
        take: filters.limit
    };
}
async function getAttestationsByFilter(address, chain, filters) {
    const easGraphqlClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$createEasGraphQLClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEasGraphQLClient"])(chain);
    const attestationQueryVariables = getAttestationQueryVariables(address, filters);
    const { attestations } = await easGraphqlClient.request(attestationQuery, attestationQueryVariables);
    return attestations;
}
;
 //# sourceMappingURL=attestations.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAttestations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttestations",
    ()=>getAttestations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$attestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/attestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$easSupportedChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/easSupportedChains.js [app-client] (ecmascript)");
;
;
async function getAttestations(address, chain, options) {
    if (!address) {
        console.log("Error in getAttestation: Address is not provided");
        return [];
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$easSupportedChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChainSupported"])(chain)) {
        console.log("Error in getAttestation: Chain is not supported");
        return [];
    }
    try {
        const defaultQueryVariablesFilter = {
            revoked: false,
            expirationTime: Math.round(Date.now() / 1e3),
            limit: 10
        };
        const queryVariablesFilter = {
            ...defaultQueryVariablesFilter,
            ...options
        };
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$attestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttestationsByFilter"])(address, chain, queryVariablesFilter);
    } catch (error) {
        console.log(`Error in getAttestation: ${error.message}`);
        return [];
    }
}
;
 //# sourceMappingURL=getAttestations.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAttestations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttestations",
    ()=>useAttestations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAttestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
;
;
;
function useAttestations({ address, chain, schemaId }, queryOptions) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "useAttestations",
            address,
            chain == null ? void 0 : chain.id,
            schemaId
        ],
        queryFn: {
            "useAttestations.useQuery[result]": async ()=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttestations"])(address, chain, {
                    schemas: [
                        schemaId
                    ]
                });
            }
        }["useAttestations.useQuery[result]"],
        enabled: !!address && !!schemaId,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
    return result.data || [];
}
;
 //# sourceMappingURL=useAttestations.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/badgeSvg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "badgeSvg",
    ()=>badgeSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const badgeSvg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
    role: "img",
    "aria-label": "ock-badgeSvg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ock:h-full ock:w-full",
    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        d: "M8.12957 3.73002L5.11957 6.74002L3.77957 5.40002C3.49957 5.12002 3.04957 5.12002 2.76957 5.40002C2.48957 5.68002 2.48957 6.13002 2.76957 6.41002L4.10957 7.75002L4.59957 8.24002C4.90957 8.55002 5.41957 8.55002 5.72957 8.24002L9.17957 4.79002C9.45957 4.51002 9.45957 4.06002 9.17957 3.78002L9.12957 3.73002C8.84957 3.45002 8.39957 3.45002 8.11957 3.73002H8.12957Z",
        "data-testid": "ock-badgeSvg",
        className: "ock:fill-ock-foreground-inverse"
    })
});
;
 //# sourceMappingURL=badgeSvg.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zIndex",
    ()=>zIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
;
const zIndex = {
    base: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-0"),
    navigation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-1"),
    dropdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-10"),
    tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-20"),
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-40"),
    notification: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixClassName"])("z-50")
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Badge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAttestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$badgeSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/badgeSvg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/useOnchainKit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Badge({ className, tooltip = false }) {
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { address, schemaId: contextSchemaId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const { chain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnchainKit"])();
    const attestations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttestations"])({
        address,
        chain,
        schemaId: tooltip ? contextSchemaId ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE_VERIFIED_ACCOUNT_SCHEMA_ID"] : null
    });
    const displayText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Badge.useMemo[displayText]": ()=>{
            if (!tooltip) {
                return null;
            }
            return typeof tooltip === "string" ? tooltip : extractAttestationName(attestations[0]);
        }
    }["Badge.useMemo[displayText]"], [
        tooltip,
        attestations
    ]);
    const ariaLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Badge.useMemo[ariaLabel]": ()=>{
            if (displayText) {
                return `Verification badge: ${displayText}`;
            }
            return "Verification badge";
        }
    }["Badge.useMemo[ariaLabel]"], [
        displayText
    ]);
    const badgeSize = "12px";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "ock:relative ock:inline-flex",
        "data-testid": "ockBadgeContainer",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:bg-ock-primary", "ock:border-ock-background", "ock:rounded-ock-default", tooltip && "ock:cursor-pointer", className),
                style: {
                    height: badgeSize,
                    width: badgeSize,
                    maxHeight: badgeSize,
                    maxWidth: badgeSize
                },
                "aria-label": ariaLabel,
                "data-testid": "ockBadge",
                ...tooltip && {
                    onMouseEnter: ()=>setShowTooltip(true),
                    onMouseLeave: ()=>setShowTooltip(false)
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$badgeSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["badgeSvg"]
            }),
            showTooltip && tooltip && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:rounded-ock-default", "ock:border-ock-background", __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressable"].alternate, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].legal, "ock:text-ock-foreground", __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zIndex"].tooltip, "ock:-translate-x-1/2 ock:absolute ock:bottom-full ock:left-1/2 ock:mb-1 ock:transform", "ock:whitespace-nowrap ock:px-1.5 ock:py-0.5"),
                "data-testid": "ockBadgeTooltip",
                children: [
                    displayText,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:-translate-x-1/2 ock:absolute ock:top-full ock:left-1/2 ock:transform")
                    })
                ]
            })
        ]
    });
}
function extractAttestationName(attestation) {
    var _a;
    if (!(attestation == null ? void 0 : attestation.decodedDataJson)) {
        return "Verified";
    }
    try {
        const decodedData = JSON.parse(attestation.decodedDataJson);
        if (Array.isArray(decodedData) && ((_a = decodedData[0]) == null ? void 0 : _a.name)) {
            return decodedData[0].name;
        }
        const value = Object.values(decodedData)[0];
        if (typeof value === "string") {
            return value;
        }
        if (value && typeof value === "object" && "value" in value && typeof value.value === "string") {
            return value.value;
        }
    } catch  {}
    return "Verified";
}
;
 //# sourceMappingURL=Badge.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/DisplayBadge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisplayBadge",
    ()=>DisplayBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAttestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/useOnchainKit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
;
;
;
;
function DisplayBadge({ children, address }) {
    const { chain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnchainKit"])();
    const { schemaId: contextSchemaId, address: contextAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const attestations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttestations"])({
        address: address ?? contextAddress,
        chain,
        schemaId: contextSchemaId ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COINBASE_VERIFIED_ACCOUNT_SCHEMA_ID"]
    });
    if (attestations.length === 0) {
        return null;
    }
    return children;
}
;
 //# sourceMappingURL=DisplayBadge.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/findComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$defaultAvatarSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/defaultAvatarSVG.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$defaultLoadingSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/defaultLoadingSVG.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$DisplayBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/DisplayBadge.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Avatar({ address = null, chain, className, defaultComponent, loadingComponent, children, ...props }) {
    const { address: contextAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const accountAddress = address ?? contextAddress;
    if (!accountAddress) {
        console.error("Avatar: an Ethereum address must be provided to the Identity or Avatar component.");
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarContent, {
        address,
        chain,
        className,
        defaultComponent,
        loadingComponent,
        ...props,
        children
    });
}
function AvatarContent({ address = null, chain, className, defaultComponent, loadingComponent, children, name: nameOverride, avatar: avatarOverride, ...props }) {
    const { address: contextAddress, chain: contextChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const accountAddress = address ?? contextAddress;
    const accountChain = chain ?? contextChain;
    const { data: name, isLoading: isLoadingName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useName"])({
        address: accountAddress,
        chain: accountChain
    });
    const { data: avatar, isLoading: isLoadingAvatar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvatar"])({
        ensName: name ?? "",
        chain: accountChain
    }, {
        enabled: !!name
    });
    const { resolvedName, resolvedAvatar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvatarContent.useMemo": ()=>{
            return {
                resolvedName: nameOverride ?? name ?? "",
                resolvedAvatar: avatarOverride ?? avatar ?? ""
            };
        }
    }["AvatarContent.useMemo"], [
        name,
        avatar,
        nameOverride,
        avatarOverride
    ]);
    const badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AvatarContent.useMemo[badge]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"]));
        }
    }["AvatarContent.useMemo[badge]"], [
        children
    ]);
    const defaultAvatar = defaultComponent || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$defaultAvatarSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultAvatarSVG"];
    const loadingAvatar = loadingComponent || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$defaultLoadingSVG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLoadingSVG"];
    if (isLoadingName || isLoadingAvatar) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:h-8 ock:w-8 ock:overflow-hidden ock:rounded-full", className),
            children: loadingAvatar
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarRenderer, {
        avatar: resolvedAvatar,
        name: resolvedName,
        defaultAvatar,
        badge,
        accountAddress,
        className,
        ...props
    });
}
function AvatarRenderer({ className, avatar, name, defaultAvatar, badge, accountAddress, ...rest }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "ock:relative",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "data-testid": "ockAvatar_ImageContainer",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:h-10 ock:w-10 ock:overflow-hidden ock:rounded-full", className),
                children: name && avatar ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                    className: "ock:min-h-full ock:min-w-full ock:object-cover",
                    "data-testid": "ockAvatar_Image",
                    loading: "lazy",
                    width: "100%",
                    height: "100%",
                    decoding: "async",
                    src: avatar,
                    alt: name,
                    ...rest
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:border-ock-background", "ock:h-full ock:w-full ock:border"),
                    children: defaultAvatar
                })
            }),
            badge && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$DisplayBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisplayBadge"], {
                address: accountAddress,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    "data-testid": "ockAvatar_BadgeContainer",
                    className: "ock:-bottom-0.5 ock:-right-0.5 ock:absolute ock:flex ock:h-[15px] ock:w-[15px] ock:items-center ock:justify-center ock:rounded-full ock:bg-transparent",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "ock:flex ock:h-3 ock:w-3 ock:items-center ock:justify-center",
                        children: badge
                    })
                })
            })
        ]
    });
}
;
 //# sourceMappingURL=Avatar.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/getRoundedAmount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoundedAmount",
    ()=>getRoundedAmount
]);
function getRoundedAmount(balance, fractionDigits) {
    var _a;
    if (balance === "0") {
        return balance;
    }
    const parsedBalance = Number.parseFloat(balance);
    const result = (_a = Number(parsedBalance)) == null ? void 0 : _a.toFixed(fractionDigits).replace(/0+$/, "");
    if (parsedBalance > 0 && Number.parseFloat(result) === 0) {
        return "0";
    }
    return result;
}
;
 //# sourceMappingURL=getRoundedAmount.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/swap/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_DEFAULT_MAX_SLIPPAGE",
    ()=>FALLBACK_DEFAULT_MAX_SLIPPAGE,
    "GENERAL_SWAP_BALANCE_ERROR_CODE",
    ()=>GENERAL_SWAP_BALANCE_ERROR_CODE,
    "GENERAL_SWAP_ERROR_CODE",
    ()=>GENERAL_SWAP_ERROR_CODE,
    "GENERAL_SWAP_QUOTE_ERROR_CODE",
    ()=>GENERAL_SWAP_QUOTE_ERROR_CODE,
    "LOW_LIQUIDITY_ERROR_CODE",
    ()=>LOW_LIQUIDITY_ERROR_CODE,
    "ONRAMP_PAYMENT_METHODS",
    ()=>ONRAMP_PAYMENT_METHODS,
    "PERMIT2_CONTRACT_ADDRESS",
    ()=>PERMIT2_CONTRACT_ADDRESS,
    "SLIPPAGE_SETTINGS",
    ()=>SLIPPAGE_SETTINGS,
    "SwapMessage",
    ()=>SwapMessage,
    "TOO_MANY_REQUESTS_ERROR_CODE",
    ()=>TOO_MANY_REQUESTS_ERROR_CODE,
    "UNCAUGHT_SWAP_ERROR_CODE",
    ()=>UNCAUGHT_SWAP_ERROR_CODE,
    "UNCAUGHT_SWAP_QUOTE_ERROR_CODE",
    ()=>UNCAUGHT_SWAP_QUOTE_ERROR_CODE,
    "UNIVERSALROUTER_CONTRACT_ADDRESS",
    ()=>UNIVERSALROUTER_CONTRACT_ADDRESS,
    "UNSUPPORTED_AMOUNT_REFERENCE_ERROR_CODE",
    ()=>UNSUPPORTED_AMOUNT_REFERENCE_ERROR_CODE,
    "USER_REJECTED_ERROR_CODE",
    ()=>USER_REJECTED_ERROR_CODE
]);
const FALLBACK_DEFAULT_MAX_SLIPPAGE = 3;
const GENERAL_SWAP_ERROR_CODE = "SWAP_ERROR";
const GENERAL_SWAP_QUOTE_ERROR_CODE = "SWAP_QUOTE_ERROR";
const GENERAL_SWAP_BALANCE_ERROR_CODE = "SWAP_BALANCE_ERROR";
const LOW_LIQUIDITY_ERROR_CODE = "SWAP_QUOTE_LOW_LIQUIDITY_ERROR";
const PERMIT2_CONTRACT_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
const TOO_MANY_REQUESTS_ERROR_CODE = "TOO_MANY_REQUESTS_ERROR";
const UNCAUGHT_SWAP_QUOTE_ERROR_CODE = "UNCAUGHT_SWAP_QUOTE_ERROR";
const UNCAUGHT_SWAP_ERROR_CODE = "UNCAUGHT_SWAP_ERROR";
const UNIVERSALROUTER_CONTRACT_ADDRESS = "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD";
const USER_REJECTED_ERROR_CODE = "USER_REJECTED";
const UNSUPPORTED_AMOUNT_REFERENCE_ERROR_CODE = "UNSUPPORTED_AMOUNT_REFERENCE_ERROR";
const SwapMessage = {
    BALANCE_ERROR: "Error fetching token balance",
    CONFIRM_IN_WALLET: "Confirm in wallet",
    FETCHING_QUOTE: "Fetching quote...",
    FETCHING_BALANCE: "Fetching balance...",
    INCOMPLETE_FIELD: "Complete the fields to continue",
    INSUFFICIENT_BALANCE: "Insufficient balance",
    LOW_LIQUIDITY: "Insufficient liquidity for this trade.",
    SWAP_IN_PROGRESS: "Swap in progress...",
    TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
    USER_REJECTED: "User rejected the transaction",
    UNSUPPORTED_AMOUNT_REFERENCE: "useAggregator does not support amountReference: to, please use useAggregator: false"
};
const SLIPPAGE_SETTINGS = {
    AUTO: "Auto",
    CUSTOM: "Custom"
};
const ONRAMP_PAYMENT_METHODS = [
    {
        id: "CRYPTO_ACCOUNT",
        name: "Coinbase",
        description: "Buy with your Coinbase account",
        icon: "coinbasePay"
    },
    {
        id: "APPLE_PAY",
        name: "Apple Pay",
        description: "Up to $500/week",
        icon: "applePay"
    },
    {
        id: "CARD",
        name: "Debit Card",
        description: "Up to $500/week",
        icon: "creditCard"
    }
];
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/swap/utils/getSwapErrorCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSwapErrorCode",
    ()=>getSwapErrorCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/swap/constants.js [app-client] (ecmascript)");
;
function getSwapErrorCode(context, errorCode) {
    if (errorCode === -32001) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOO_MANY_REQUESTS_ERROR_CODE"];
    }
    if (errorCode === -32602) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOW_LIQUIDITY_ERROR_CODE"];
    }
    if (context === "uncaught-swap") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNCAUGHT_SWAP_ERROR_CODE"];
    }
    if (context === "uncaught-quote") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNCAUGHT_SWAP_QUOTE_ERROR_CODE"];
    }
    if (context === "quote") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_SWAP_QUOTE_ERROR_CODE"];
    }
    if (context === "balance") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_SWAP_BALANCE_ERROR_CODE"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_SWAP_ERROR_CODE"];
}
;
 //# sourceMappingURL=getSwapErrorCode.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/wallet/hooks/useGetETHBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetETHBalance",
    ()=>useGetETHBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$getRoundedAmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/getRoundedAmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$utils$2f$getSwapErrorCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/swap/utils/getSwapErrorCode.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ETH_DECIMALS = 18;
function useGetETHBalance(address) {
    const ethBalanceResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalance"])({
        address,
        query: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"]
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGetETHBalance.useMemo": ()=>{
            var _a, _b, _c, _d;
            let error;
            if (ethBalanceResponse == null ? void 0 : ethBalanceResponse.error) {
                error = {
                    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$swap$2f$utils$2f$getSwapErrorCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSwapErrorCode"])("balance"),
                    error: (_a = ethBalanceResponse == null ? void 0 : ethBalanceResponse.error) == null ? void 0 : _a.message,
                    message: ""
                };
            }
            if (!((_b = ethBalanceResponse == null ? void 0 : ethBalanceResponse.data) == null ? void 0 : _b.value) && ((_c = ethBalanceResponse == null ? void 0 : ethBalanceResponse.data) == null ? void 0 : _c.value) !== 0n) {
                return {
                    convertedBalance: "",
                    roundedBalance: "",
                    error,
                    response: ethBalanceResponse
                };
            }
            const convertedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])((_d = ethBalanceResponse == null ? void 0 : ethBalanceResponse.data) == null ? void 0 : _d.value, ETH_DECIMALS);
            const roundedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$getRoundedAmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoundedAmount"])(convertedBalance, 8);
            return {
                convertedBalance,
                error,
                response: ethBalanceResponse,
                roundedBalance
            };
        }
    }["useGetETHBalance.useMemo"], [
        ethBalanceResponse
    ]);
}
;
 //# sourceMappingURL=useGetETHBalance.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/EthBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthBalance",
    ()=>EthBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$getRoundedAmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/getRoundedAmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$wallet$2f$hooks$2f$useGetETHBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/wallet/hooks/useGetETHBalance.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function EthBalance({ address, className }) {
    const { address: contextAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    if (!contextAddress && !address) {
        console.error("Address: an Ethereum address must be provided to the Identity or EthBalance component.");
        return null;
    }
    const { convertedBalance: balance, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$wallet$2f$hooks$2f$useGetETHBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetETHBalance"])(address ?? contextAddress);
    if (!balance || error) {
        return null;
    }
    const roundedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$getRoundedAmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoundedAmount"])(balance, 4);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        "data-testid": "ockEthBalance",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].label2, "ock:text-ock-foreground-muted", className),
        "aria-label": `ETH balance: ${roundedBalance} Ethereum`,
        children: [
            roundedBalance,
            " ETH"
        ]
    });
}
;
 //# sourceMappingURL=EthBalance.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Name.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Name",
    ()=>Name
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSlicedAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getSlicedAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/findComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$DisplayBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/DisplayBadge.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Name({ address = null, className, children, chain, name: nameOverride, ...props }) {
    const { address: contextAddress, chain: contextChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const accountAddress = address ?? contextAddress;
    const accountChain = chain ?? contextChain;
    const { data: name, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useName"])({
        address: accountAddress,
        chain: accountChain
    });
    const badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Name.useMemo[badge]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"]));
        }
    }["Name.useMemo[badge]"], [
        children
    ]);
    const ariaLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Name.useMemo[ariaLabel]": ()=>{
            if (name) {
                return `User identity: ${name}, verified name`;
            }
            return `User identity: ${accountAddress}, Ethereum address`;
        }
    }["Name.useMemo[ariaLabel]"], [
        accountAddress,
        name
    ]);
    if (!contextAddress && !address) {
        console.error("Name: an Ethereum address must be provided to the Identity or Name component.");
        return null;
    }
    if (isLoading) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "ock:flex ock:items-center ock:gap-1",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                "data-testid": "ockIdentity_Text",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"].headline, "ock:text-ock-foreground", className),
                ...props,
                "aria-label": ariaLabel,
                children: nameOverride || name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSlicedAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlicedAddress"])(accountAddress)
            }),
            badge && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$DisplayBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisplayBadge"], {
                address: accountAddress,
                children: badge
            })
        ]
    });
}
;
 //# sourceMappingURL=Name.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getSocials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSocials",
    ()=>getSocials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/ens/normalize.js [app-client] (ecmascript)");
;
;
;
const getSocials = async ({ ensName })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    const normalizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(ensName);
    const fetchTextRecord = async (key)=>{
        try {
            const result = await client.getEnsText({
                name: normalizedName,
                key
            });
            return result || null;
        } catch (error) {
            console.warn(`Failed to fetch ENS text record for ${key}:`, error);
            return null;
        }
    };
    const [twitter, github, farcaster, website] = await Promise.all([
        fetchTextRecord("com.twitter"),
        fetchTextRecord("com.github"),
        fetchTextRecord("xyz.farcaster"),
        fetchTextRecord("url")
    ]);
    return {
        twitter,
        github,
        farcaster,
        website
    };
};
;
 //# sourceMappingURL=getSocials.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useSocials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocials",
    ()=>useSocials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSocials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getSocials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useSocials = ({ ensName, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const queryKey = [
        "useSocials",
        ensName,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useSocials.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getSocials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocials"])({
                    ensName
                })
        }["useSocials.useQuery"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useSocials.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/githubSvg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "githubSvg",
    ()=>githubSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const githubSvg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
    "data-testid": "ock-githubSvg",
    role: "img",
    "aria-label": "ock-githubSvg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    className: "ock:h-full ock:w-full",
    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
        className: "ock:fill-ock-foreground"
    })
});
;
 //# sourceMappingURL=githubSvg.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/twitterSvg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twitterSvg",
    ()=>twitterSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const twitterSvg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    "data-testid": "ock-twitterSvg",
    role: "img",
    "aria-label": "ock-twitterSvg",
    width: "100%",
    height: "100%",
    viewBox: "-1 -1 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    className: "ock:h-full ock:w-full",
    children: [
        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("g", {
            clipPath: "url(#clip0_6998_47)",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M7.14163 5.07857L11.6089 0H10.5503L6.67137 4.40965L3.57328 0H0L4.68492 6.66817L0 11.9938H1.05866L5.15491 7.33709L8.42672 11.9938H12L7.14137 5.07857H7.14163ZM5.69165 6.72692L5.21697 6.06292L1.44011 0.779407H3.06615L6.11412 5.04337L6.5888 5.70737L10.5508 11.2499H8.92476L5.69165 6.72718V6.72692Z",
                className: "ock:fill-ock-foreground"
            })
        }),
        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("clipPath", {
                id: "clip0_6998_47",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                    width: "12",
                    height: "12",
                    fill: "white"
                })
            })
        })
    ]
});
;
 //# sourceMappingURL=twitterSvg.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/warpcastSvg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warpcastSvg",
    ()=>warpcastSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const warpcastSvg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
    "data-testid": "ock-warpcastSvg",
    role: "img",
    "aria-label": "ock-warpcastSvg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 13 12",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ock:fill-ock-foreground ock:w-full ock:h-full",
    children: [
        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M2.23071 0H10.6153V12H9.38451V6.50322H9.37245C9.23641 4.98404 7.96783 3.79353 6.42299 3.79353C4.87815 3.79353 3.60957 4.98404 3.47354 6.50322H3.46147V12H2.23071V0Z",
            className: "ock:fill-ock-foreground"
        }),
        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M0 1.70312L0.499999 3.40635H0.923066V10.2967C0.71065 10.2967 0.538456 10.47 0.538456 10.6838V11.1483H0.461541C0.249125 11.1483 0.0769147 11.3216 0.0769147 11.5354V11.9999H4.38458V11.5354C4.38458 11.3216 4.21239 11.1483 3.99998 11.1483H3.92306V10.6838C3.92306 10.47 3.75085 10.2967 3.53843 10.2967H3.07691V1.70312H0Z",
            className: "ock:fill-ock-foreground"
        }),
        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M9.46163 10.2967C9.24921 10.2967 9.077 10.47 9.077 10.6838V11.1483H9.00009C8.78767 11.1483 8.61548 11.3216 8.61548 11.5354V11.9999H12.9231V11.5354C12.9231 11.3216 12.7509 11.1483 12.5385 11.1483H12.4616V10.6838C12.4616 10.47 12.2894 10.2967 12.077 10.2967V3.40635H12.5001L13.0001 1.70312H9.92315V10.2967H9.46163Z",
            className: "ock:fill-ock-foreground"
        })
    ]
});
;
 //# sourceMappingURL=warpcastSvg.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/websiteSvg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "websiteSvg",
    ()=>websiteSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const websiteSvg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
    "data-testid": "ock-websiteSvg",
    role: "img",
    "aria-label": "ock-websiteSvg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    className: "ock:fill-ock-foreground ock:h-full ock:w-full",
    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 0C9.31356 0 12 2.68644 12 6C12 9.31356 9.31356 12 6 12C2.69689 12 0.0245556 9.35356 0 6C0.0244789 2.64689 2.69689 0 6 0ZM9.34844 9.97867C9.15053 9.88544 8.9422 9.80002 8.72553 9.72346C8.56251 10.0854 8.36772 10.4313 8.13856 10.7412C8.57762 10.5427 8.98439 10.2854 9.34844 9.97867ZM7.95156 9.49742C7.46353 9.38284 6.9427 9.30992 6.4 9.28597V11.1381C7.04791 10.9365 7.58233 10.2766 7.95156 9.49742ZM5.6 9.28597C5.05729 9.30993 4.53646 9.38284 4.04844 9.49742C4.41771 10.2766 4.95209 10.936 5.6 11.1375V9.28597ZM3.27456 9.72347C3.05737 9.80003 2.84956 9.88544 2.65164 9.97868C3.01571 10.2854 3.42248 10.5427 3.86153 10.7412C3.63237 10.4313 3.43758 10.0854 3.27456 9.72347ZM2.05267 9.38492C2.34486 9.2318 2.65736 9.09534 2.98809 8.97763C2.73913 8.21044 2.58288 7.33386 2.54799 6.40008H0.815211C0.901669 7.53597 1.35323 8.5703 2.05277 9.38497L2.05267 9.38492ZM3.75156 8.74742C4.33229 8.60263 4.95367 8.512 5.6 8.48545V6.4H3.34844C3.3823 7.25677 3.52553 8.05522 3.75157 8.74733L3.75156 8.74742ZM6.4 8.48545C7.04636 8.51201 7.66767 8.60263 8.24844 8.74794C8.47449 8.05523 8.61771 7.25728 8.65157 6.40061L6.40001 6.40009L6.4 8.48545ZM9.012 8.97763C9.34273 9.09534 9.65576 9.2318 9.94742 9.38492C10.6469 8.56982 11.0984 7.53603 11.185 6.40003H9.4522C9.4173 7.33389 9.26106 8.21048 9.0121 8.97759L9.012 8.97763ZM9.94742 2.61508C9.65523 2.7682 9.34273 2.90466 9.012 3.02237C9.26096 3.78956 9.41721 4.66614 9.4521 5.59992H11.1849C11.0984 4.46403 10.6469 3.4297 9.94732 2.61503L9.94742 2.61508ZM8.24853 3.25258C7.6678 3.39737 7.04642 3.488 6.40009 3.51456V5.6H8.65164C8.61779 4.74323 8.47456 3.94478 8.24852 3.25267L8.24853 3.25258ZM5.60009 3.51456C4.95373 3.48799 4.33242 3.39737 3.75164 3.25206C3.5256 3.94477 3.38238 4.74328 3.34852 5.59994H5.60008L5.60009 3.51456ZM2.98809 3.02237C2.65736 2.90466 2.34433 2.7682 2.05267 2.61508C1.35319 3.43018 0.901667 4.46397 0.815111 5.59997H2.54789C2.58278 4.66611 2.73903 3.78952 2.98799 3.02241L2.98809 3.02237ZM2.65163 2.02132C2.84954 2.11455 3.05788 2.19997 3.27454 2.27653C3.43757 1.91456 3.63236 1.56872 3.86152 1.25882C3.42246 1.45726 3.01569 1.71456 2.65163 2.02132ZM4.04852 2.50257C4.53654 2.61714 5.05738 2.69007 5.60008 2.71402V0.861911C4.95217 1.06348 4.41774 1.72337 4.04852 2.50258V2.50257ZM6.40008 2.71402C6.94279 2.69006 7.46362 2.61715 7.95163 2.50257C7.58237 1.7234 7.04747 1.06346 6.40008 0.8619V2.71402ZM8.72552 2.27652C8.94271 2.19996 9.15052 2.11454 9.34843 2.02131C8.98437 1.71454 8.5776 1.45724 8.13855 1.25881C8.36771 1.56923 8.5625 1.91454 8.72552 2.27652Z"
    })
});
;
 //# sourceMappingURL=websiteSvg.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/SocialPlatformDetails.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLATFORM_CONFIG",
    ()=>PLATFORM_CONFIG,
    "SocialPlatformDetails",
    ()=>SocialPlatformDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$githubSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/githubSvg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$twitterSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/twitterSvg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$warpcastSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/warpcastSvg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$websiteSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/svg/websiteSvg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
;
;
;
;
;
;
const PLATFORM_CONFIG = {
    twitter: {
        href: (value)=>`https://x.com/${value}`,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$twitterSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twitterSvg"],
        ariaLabel: (value)=>`Visit ${value} on X (formerly Twitter)`
    },
    github: {
        href: (value)=>`https://github.com/${value}`,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$githubSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["githubSvg"],
        ariaLabel: (value)=>`Visit ${value} on GitHub`
    },
    farcaster: {
        href: (value)=>{
            const username = value.split("/").pop();
            return `https://warpcast.com/${username}`;
        },
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$warpcastSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warpcastSvg"],
        ariaLabel: (value)=>{
            const username = value.split("/").pop();
            return `Visit ${username} on Farcaster (Warpcast)`;
        }
    },
    website: {
        href: (value)=>value,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$svg$2f$websiteSvg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["websiteSvg"],
        ariaLabel: (value)=>`Visit ${value}`
    }
};
function SocialPlatformDetails({ platform, value }) {
    const config = PLATFORM_CONFIG[platform];
    const ariaLabel = config.ariaLabel(value);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("a", {
        href: config.href(value),
        target: "_blank",
        rel: "noopener noreferrer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressable"].default, "ock:rounded-ock-default", "ock:border-ock-background", "ock:flex ock:items-center ock:justify-center ock:p-2"),
        "data-testid": `ockSocials_${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
        "aria-label": ariaLabel,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: "ock:sr-only",
                children: platform
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:flex ock:h-4 ock:w-4 ock:items-center ock:justify-center"),
                children: config.icon
            })
        ]
    });
}
;
 //# sourceMappingURL=SocialPlatformDetails.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Socials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Socials",
    ()=>Socials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useSocials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useSocials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$SocialPlatformDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/SocialPlatformDetails.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function Socials({ address, chain, className }) {
    const { address: contextAddress, chain: contextChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdentityContext"])();
    const accountAddress = address ?? contextAddress;
    const accountChain = chain ?? contextChain;
    const { data: name, isLoading: isLoadingName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useName"])({
        address: accountAddress,
        chain: accountChain
    });
    const { data: socials, isLoading: isLoadingSocials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useSocials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocials"])({
        ensName: name ?? "",
        chain: accountChain
    }, {
        enabled: !!name
    });
    if (!accountAddress) {
        console.error("Socials: an Ethereum address must be provided to the Socials component.");
        return null;
    }
    if (isLoadingName || isLoadingSocials) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className
        });
    }
    if (!socials || Object.values(socials).every((value)=>!value)) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:border-ock-background", "ock:mt-2 ock:w-full ock:pl-1", className),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "left-4 flex space-x-2",
            children: Object.entries(socials).map(([platform, value])=>value && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$SocialPlatformDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialPlatformDetails"], {
                    platform,
                    value
                }, platform))
        })
    });
}
;
 //# sourceMappingURL=Socials.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdentityLayout",
    ()=>IdentityLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/utils/findComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$EthBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/EthBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Socials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Socials.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function IdentityLayout({ children, className, hasCopyAddressOnClick }) {
    const { avatar, name, address: addressComponent, ethBalance, socials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IdentityLayout.useMemo": ()=>{
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const addressElement = childrenArray.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"]));
            return {
                avatar: childrenArray.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"])),
                name: childrenArray.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"])),
                address: addressElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(addressElement, {
                    hasCopyAddressOnClick
                }) : void 0,
                ethBalance: childrenArray.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$EthBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthBalance"])),
                socials: childrenArray.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$utils$2f$findComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Socials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socials"]))
            };
        }
    }["IdentityLayout.useMemo"], [
        children,
        hasCopyAddressOnClick
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:bg-ock-background", "ock:flex ock:flex-col ock:px-4 ock:py-1", className),
        "data-testid": "ockIdentityLayout_container",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "ock:flex ock:items-center ock:space-x-3",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "ock:flex-shrink-0",
                        children: avatar
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "ock:flex ock:flex-col",
                        children: [
                            name,
                            addressComponent && !ethBalance && addressComponent,
                            !addressComponent && ethBalance && ethBalance,
                            addressComponent && ethBalance && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "ock:flex ock:items-center ock:gap-1",
                                children: [
                                    addressComponent,
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        className: "text-ock-foreground-muted",
                                        children: "·"
                                    }),
                                    ethBalance
                                ]
                            })
                        ]
                    })
                ]
            }),
            socials
        ]
    });
}
;
 //# sourceMappingURL=IdentityLayout.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Identity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Identity",
    ()=>Identity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityLayout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/useOnchainKit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Identity({ address: addressProp, chain, children, className, hasCopyAddressOnClick, schemaId }) {
    const { chain: contextChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$useOnchainKit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnchainKit"])();
    const accountChain = chain ?? contextChain;
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    if (!address && !addressProp) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentityProvider"], {
        address: addressProp || address,
        schemaId,
        chain: accountChain,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityLayout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentityLayout"], {
            className,
            hasCopyAddressOnClick,
            children
        })
    });
}
;
 //# sourceMappingURL=Identity.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdentityCard",
    ()=>IdentityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Socials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Socials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/styles/theme.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function IdentityCard({ address, chain, className = "", schemaId, badgeTooltip }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Identity"], {
        address,
        chain,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ock:rounded-ock-default", __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$styles$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"].lineDefault, "ock:bg-ock-background", "ock:items-left ock:flex ock:min-w-[300px] ock:p-4", className),
        schemaId,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"], {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    tooltip: badgeTooltip
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"], {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Socials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socials"], {})
        ]
    });
}
;
 //# sourceMappingURL=IdentityCard.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddresses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddresses",
    ()=>getAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
const getAddresses = async ({ names })=>{
    if (!names || names.length === 0) {
        return [];
    }
    const mainnetClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    const results = Array(names.length).fill(null);
    try {
        const validItems = names.map((name, index)=>name ? {
                name,
                index
            } : null).filter((item)=>item !== null);
        if (validItems.length === 0) {
            return results;
        }
        const addressPromises = validItems.map(({ name, index })=>mainnetClient.getEnsAddress({
                name
            }).then((address)=>{
                return {
                    index,
                    address
                };
            }).catch((error)=>{
                console.error(`Error resolving address for ${name}:`, error);
                return {
                    index,
                    address: null
                };
            }));
        const resolvedAddresses = await Promise.all(addressPromises);
        resolvedAddresses.forEach(({ index, address })=>{
            results[index] = address;
        });
    } catch (error) {
        console.error("Error resolving addresses in batch:", error);
        return Array(names.length).fill(null);
    }
    return results;
};
;
 //# sourceMappingURL=getAddresses.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvatars",
    ()=>getAvatars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isEthereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/ens/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePicture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getBaseDefaultProfilePicture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$isBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/isBasename.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const getAvatars = async ({ ensNames, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] })=>{
    if (!ensNames || ensNames.length === 0) {
        return [];
    }
    const chainIsBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase"])({
        chainId: chain.id
    });
    const chainIsEthereum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEthereum"])({
        chainId: chain.id
    });
    const chainSupportsUniversalResolver = chainIsEthereum || chainIsBase;
    if (!chainSupportsUniversalResolver) {
        return Promise.reject("ChainId not supported, avatar resolution is only supported on Ethereum and Base.");
    }
    const results = Array(ensNames.length).fill(null);
    const basenameIndices = [];
    ensNames.forEach((name, index)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$isBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBasename"])(name)) {
            basenameIndices.push(index);
        }
    });
    if (chainIsBase && basenameIndices.length > 0) {
        const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(chain);
        try {
            const baseAvatarPromises = basenameIndices.map((index)=>client.getEnsAvatar({
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(ensNames[index]),
                    universalResolverAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOLVER_ADDRESSES_BY_CHAIN_ID"][chain.id]
                }).catch((error)=>{
                    console.error(`Error resolving Base avatar for ${ensNames[index]}:`, error);
                    return null;
                }));
            const baseAvatarResults = await Promise.all(baseAvatarPromises);
            baseAvatarResults.forEach((avatar, i)=>{
                const originalIndex = basenameIndices[i];
                if (avatar) {
                    results[originalIndex] = avatar;
                }
            });
        } catch (error) {
            console.error("Error resolving Base avatars in batch:", error);
        }
    }
    const fallbackClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    try {
        const ensAvatarPromises = ensNames.map((name, index)=>{
            if (results[index] !== null) {
                return Promise.resolve(null);
            }
            return fallbackClient.getEnsAvatar({
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(name)
            }).catch((error)=>{
                console.error(`Error resolving ENS avatar for ${name}:`, error);
                return null;
            });
        });
        const ensAvatarResults = await Promise.all(ensAvatarPromises);
        ensAvatarResults.forEach((avatar, index)=>{
            if (avatar && results[index] === null) {
                results[index] = avatar;
            }
        });
    } catch (error) {
        console.error("Error resolving ENS avatars in batch:", error);
    }
    for (const index of basenameIndices){
        if (results[index] === null) {
            results[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getBaseDefaultProfilePicture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseDefaultProfilePicture"])(ensNames[index]);
        }
    }
    return results;
};
;
 //# sourceMappingURL=getAvatars.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNames",
    ()=>getNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/network/getChainPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/core/utils/isEthereum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$abis$2f$L2ResolverAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/abis/L2ResolverAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertReverseNodeToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/convertReverseNodeToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddresses.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const getNames = async ({ addresses, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] })=>{
    if (!addresses || addresses.length === 0) {
        return [];
    }
    const chainIsBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase"])({
        chainId: chain.id
    });
    const chainIsEthereum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$utils$2f$isEthereum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEthereum"])({
        chainId: chain.id
    });
    const chainSupportsUniversalResolver = chainIsEthereum || chainIsBase;
    if (!chainSupportsUniversalResolver) {
        return Promise.reject("ChainId not supported, name resolution is only supported on Ethereum and Base.");
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(chain);
    const results = Array(addresses.length).fill(null);
    if (chainIsBase) {
        try {
            const calls = addresses.map((address)=>({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOLVER_ADDRESSES_BY_CHAIN_ID"][chain.id],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$abis$2f$L2ResolverAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    functionName: "name",
                    args: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$convertReverseNodeToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertReverseNodeToBytes"])(address, chain.id)
                    ]
                }));
            const batchResults = await client.multicall({
                contracts: calls,
                allowFailure: true
            });
            const basenamesWithIndices = [];
            for(let index = 0; index < batchResults.length; index++){
                const result = batchResults[index];
                if (result.status === "success" && result.result) {
                    const basename = result.result;
                    basenamesWithIndices.push({
                        basename,
                        index
                    });
                }
            }
            if (basenamesWithIndices.length > 0) {
                try {
                    const basenames = basenamesWithIndices.map(({ basename })=>basename);
                    const resolvedAddresses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddresses"])({
                        names: basenames
                    });
                    for(let i = 0; i < basenamesWithIndices.length; i++){
                        const { basename, index } = basenamesWithIndices[i];
                        const resolvedAddress = resolvedAddresses[i];
                        if (resolvedAddress && resolvedAddress.toLowerCase() === addresses[index].toLowerCase()) {
                            results[index] = basename;
                        }
                    }
                } catch (error) {
                    console.error("Error during batch basename forward resolution verification:", error);
                }
            }
            if (results.every((result)=>result !== null)) {
                return results;
            }
        } catch (error) {
            console.error("Error resolving Base names in batch:", error);
        }
    }
    const fallbackClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$core$2f$network$2f$getChainPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainPublicClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]);
    const unresolvedIndices = results.map((result, index)=>result === null ? index : -1).filter((index)=>index !== -1);
    if (unresolvedIndices.length > 0) {
        try {
            const ensPromises = unresolvedIndices.map((index)=>fallbackClient.getEnsName({
                    address: addresses[index]
                }).catch((error)=>{
                    console.error(`Error resolving ENS name for ${addresses[index]}:`, error);
                    return null;
                }));
            const ensResults = await Promise.all(ensPromises);
            const ensNamesWithIndices = [];
            for(let i = 0; i < ensResults.length; i++){
                const ensName = ensResults[i];
                const originalIndex = unresolvedIndices[i];
                if (ensName) {
                    ensNamesWithIndices.push({
                        ensName,
                        originalIndex
                    });
                }
            }
            if (ensNamesWithIndices.length > 0) {
                try {
                    const ensNames = ensNamesWithIndices.map(({ ensName })=>ensName);
                    const resolvedAddresses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddresses"])({
                        names: ensNames
                    });
                    for(let i = 0; i < ensNamesWithIndices.length; i++){
                        const { ensName, originalIndex } = ensNamesWithIndices[i];
                        const resolvedAddress = resolvedAddresses[i];
                        if (resolvedAddress && resolvedAddress.toLowerCase() === addresses[originalIndex].toLowerCase()) {
                            results[originalIndex] = ensName;
                        }
                    }
                } catch (error) {
                    console.error("Error during batch ENS forward resolution verification:", error);
                }
            }
        } catch (error) {
            console.error("Error resolving ENS names in batch:", error);
        }
    }
    return results;
};
;
 //# sourceMappingURL=getNames.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAddress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddress",
    ()=>useAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useAddress = ({ name, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const queryKey = [
        "useAddress",
        name,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useAddress.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])({
                    name
                })
        }["useAddress.useQuery"],
        enabled: !!name,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useAddress.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAddresses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddresses",
    ()=>useAddresses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
;
;
;
const useAddresses = ({ names }, queryOptions)=>{
    const namesKey = names.join(",");
    const queryKey = [
        "useAddresses",
        namesKey
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useAddresses.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddresses"])({
                    names
                })
        }["useAddresses.useQuery"],
        enabled: !!names.length,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useAddresses.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAvatars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAvatars",
    ()=>useAvatars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useAvatars = ({ ensNames, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const namesKey = ensNames.join(",");
    const queryKey = [
        "useAvatars",
        namesKey,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useAvatars.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatars"])({
                    ensNames,
                    chain
                })
        }["useAvatars.useQuery"],
        enabled: !!ensNames.length,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useAvatars.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNames",
    ()=>useNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
;
;
;
;
const useNames = ({ addresses, chain = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"] }, queryOptions)=>{
    const addressesKey = addresses.join(",");
    const queryKey = [
        "useNames",
        addressesKey,
        chain.id
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: {
            "useNames.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNames"])({
                    addresses,
                    chain
                })
        }["useNames.useQuery"],
        enabled: !!addresses.length,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_QUERY_OPTIONS"],
        ...queryOptions
    });
};
;
 //# sourceMappingURL=useNames.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$EthBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/EthBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Name$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Name.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$Socials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/Socials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$isBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/isBasename.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$components$2f$IdentityCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/components/IdentityCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAddresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAttestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getAvatars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getAvatars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$utils$2f$getNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/utils/getNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAddresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAddresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAttestations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAttestations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useAvatars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useAvatars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$onchainkit$40$1$2e$1$2e$2_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$_6ecc8029663c758be789830e52dffe33$2f$node_modules$2f40$coinbase$2f$onchainkit$2f$dist$2f$identity$2f$hooks$2f$useNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@coinbase+onchainkit@1.1.2_@tanstack+query-core@5.90.20_@types+react-dom@19.2.3_@types+_6ecc8029663c758be789830e52dffe33/node_modules/@coinbase/onchainkit/dist/identity/hooks/useNames.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=0e804_%40coinbase_onchainkit_dist_87a7ed5b._.js.map