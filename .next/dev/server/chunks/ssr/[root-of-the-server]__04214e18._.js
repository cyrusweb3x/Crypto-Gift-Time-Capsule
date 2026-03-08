module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Time capsule/Gift Time Capsule/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
// components/ui/header.tsx
"use client";
;
;
;
;
;
;
function Header({ isConnected = false, address, onConnect, onDisconnect }) {
    // অ্যাড্রেসটি সুন্দরভাবে ছোট করার লজিক
    const truncatedAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        className: "sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-[480px] items-center justify-between px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center gap-3 cursor-pointer",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/placeholder-logo.png",
                                    alt: "Brand Logo",
                                    fill: true,
                                    className: "object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70",
                                children: "Capsule"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: isConnected ? onDisconnect : onConnect,
                        variant: isConnected ? "outline" : "default",
                        size: "sm",
                        className: `
              relative overflow-hidden font-medium transition-all duration-300
              ${isConnected ? "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30 pl-3 pr-4" : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:opacity-90 hover:shadow-blue-500/30"}
            `,
                        children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-2 flex h-2 w-2 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm",
                                    children: truncatedAddress
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Connect Wallet"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const navItems = [
    {
        href: "/",
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        href: "/create",
        label: "Create",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"]
    },
    {
        href: "/capsules",
        label: "My Capsules",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    }
];
function BottomNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-card/80 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-full max-w-[480px] items-center justify-around px-4",
            children: navItems.map((item)=>{
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative rounded-xl p-2 transition-all duration-300", isActive && "bg-primary/10 shadow-[0_0_20px_rgba(0,82,255,0.3)]"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Time capsule/Gift Time Capsule/components/confetti-effect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfettiEffect",
    ()=>ConfettiEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ConfettiEffect({ trigger }) {
    const [pieces, setPieces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trigger) {
            const colors = [
                "#0052FF",
                "#3B82F6",
                "#10B981",
                "#F59E0B",
                "#EC4899"
            ];
            const newPieces = Array.from({
                length: 50
            }, (_, i)=>({
                    id: i,
                    x: Math.random() * 100,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    delay: Math.random() * 0.5,
                    rotation: Math.random() * 360
                }));
            setPieces(newPieces);
            const timer = setTimeout(()=>setPieces([]), 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        trigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: pieces.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed z-[100] h-3 w-3 rounded-sm",
                style: {
                    left: `${piece.x}%`,
                    top: -20,
                    backgroundColor: piece.color
                },
                initial: {
                    y: 0,
                    opacity: 1,
                    rotate: 0
                },
                animate: {
                    y: window.innerHeight + 100,
                    opacity: 0,
                    rotate: piece.rotation + 720
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 2.5,
                    delay: piece.delay,
                    ease: "easeOut"
                }
            }, piece.id, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/components/confetti-effect.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/confetti-effect.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiftModal",
    ()=>GiftModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function GiftModal({ isOpen, onClose, type, gift, onSendAnother, onClaim, isClaiming, mainActionClass }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = (text)=>{
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    if (!gift) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.95,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.95,
                    opacity: 0
                },
                className: "w-full max-w-[380px] rounded-3xl border border-white/10 bg-[#1a1a1a] text-white p-6 shadow-2xl overflow-hidden relative",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                        lineNumber: 69,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: type === "success" ? "Gift Sent!" : "Gift Details"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4 text-white/70"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this),
                    type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                scale: [
                                    1,
                                    1.1,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            },
                            className: "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                className: "h-10 w-10 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 90,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                            lineNumber: 85,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                        lineNumber: 84,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-400",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-black tracking-tight text-white",
                                        children: [
                                            gift.amount,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: gift.token
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-400",
                                        children: type === "success" || gift.recipient ? "Recipient" : "From"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-sm font-bold text-gray-200",
                                                children: gift.recipient ? `${gift.recipient.slice(0, 6)}...${gift.recipient.slice(-4)}` : gift.isAnonymous ? "Anonymous" : gift.sender ? `${gift.sender.slice(0, 6)}...${gift.sender.slice(-4)}` : "Unknown"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            (gift.recipient || gift.sender) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopy(gift.recipient || gift.sender || ""),
                                                className: "text-gray-500 hover:text-white transition-colors",
                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-3 w-3 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-400",
                                        children: "Unlock Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-gray-200",
                                        children: gift.unlockDate.toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            gift.nftTokenId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/5 bg-white/5 p-4 flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-inner"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-sm text-white",
                                                children: [
                                                    "Key #",
                                                    gift.nftTokenId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                lineNumber: 145,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Unique NFT Key"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                                lineNumber: 146,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 144,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this),
                            gift.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-white/5 p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-1 text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-200 leading-relaxed",
                                        children: [
                                            '"',
                                            gift.message,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 relative z-10",
                        children: [
                            type === "success" && onSendAnother && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onSendAnother,
                                className: "w-full h-12 rounded-full font-bold bg-white text-black hover:bg-gray-200 transition-colors",
                                children: "Send Another"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 161,
                                columnNumber: 17
                            }, this),
                            type === "detail" && onClaim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onClaim,
                                disabled: isClaiming,
                                // FIX: Blue Color Applied Here
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-12 rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]", mainActionClass),
                                children: isClaiming ? "Unlocking..." : "Claim Gift"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Time capsule/Gift Time Capsule/contractAbi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadyWithdrawn","type":"error"},{"inputs":[{"internalType":"uint256","name":"_giftId","type":"uint256"}],"name":"cancelGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_packetId","type":"uint256"}],"name":"cancelRedPacket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_packetId","type":"uint256"}],"name":"claimRedPacket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"},{"internalType":"bool","name":"_isAnonymous","type":"bool"},{"internalType":"string","name":"_message","type":"string"}],"name":"createGift","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_totalAmount","type":"uint256"},{"internalType":"uint256","name":"_totalClaimers","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"},{"internalType":"bool","name":"_isRandom","type":"bool"},{"internalType":"bool","name":"_isAnonymous","type":"bool"},{"internalType":"string","name":"_message","type":"string"}],"name":"createRedPacket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"EtherTransferFailed","type":"error"},{"inputs":[{"internalType":"uint256","name":"unlockTime","type":"uint256"}],"name":"GiftStillLocked","type":"error"},{"inputs":[],"name":"InvalidAddress","type":"error"},{"inputs":[],"name":"InvalidAmount","type":"error"},{"inputs":[],"name":"InvalidClaimersCount","type":"error"},{"inputs":[],"name":"InvalidTime","type":"error"},{"inputs":[],"name":"MismatchEthAmount","type":"error"},{"inputs":[],"name":"NotRecipient","type":"error"},{"inputs":[],"name":"NotSender","type":"error"},{"inputs":[],"name":"PacketEmpty","type":"error"},{"inputs":[],"name":"TokenTransferFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"giftId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"GiftCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"giftId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTime","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAnonymous","type":"bool"}],"name":"GiftCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"giftId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newUnlockTime","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAnonymous","type":"bool"}],"name":"GiftUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"giftId","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"GiftWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"packetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"refundedAmount","type":"uint256"}],"name":"RedPacketCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"packetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RedPacketClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"packetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalClaimers","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isRandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"unlockTime","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAnonymous","type":"bool"}],"name":"RedPacketCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"packetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newUnlockTime","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAnonymous","type":"bool"}],"name":"RedPacketUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"_giftId","type":"uint256"},{"internalType":"uint256","name":"_newUnlockTime","type":"uint256"},{"internalType":"bool","name":"_isAnonymous","type":"bool"}],"name":"updateGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_packetId","type":"uint256"},{"internalType":"uint256","name":"_newUnlockTime","type":"uint256"},{"internalType":"bool","name":"_isAnonymous","type":"bool"}],"name":"updateRedPacket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_giftId","type":"uint256"}],"name":"withdrawGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"_giftId","type":"uint256"}],"name":"getGiftDetails","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"bool","name":"isAnonymous","type":"bool"},{"internalType":"bool","name":"isWithdrawn","type":"bool"},{"internalType":"bool","name":"isCancelled","type":"bool"},{"internalType":"string","name":"message","type":"string"}],"internalType":"struct CryptoGiftCapsuleV4.Gift","name":"viewGift","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_packetId","type":"uint256"}],"name":"getRedPacketDetails","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"totalAmount","type":"uint256"},{"internalType":"uint256","name":"remainingAmount","type":"uint256"},{"internalType":"uint256","name":"totalClaimers","type":"uint256"},{"internalType":"uint256","name":"remainingClaimers","type":"uint256"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"bool","name":"isRandom","type":"bool"},{"internalType":"bool","name":"isAnonymous","type":"bool"},{"internalType":"bool","name":"isCancelled","type":"bool"},{"internalType":"string","name":"message","type":"string"}],"internalType":"struct CryptoGiftCapsuleV4.RedPacket","name":"viewPacket","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"giftCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasClaimedRedPacket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_CLAIMERS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redPacketCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]);}),
"[project]/Time capsule/Gift Time Capsule/app/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$confetti$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/confetti-effect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$gift$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/user-x.js [app-ssr] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/providers/provider-browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/utils/units.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/constants/addresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
// NEW ABI 
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$contractAbi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/contractAbi.json (json)");
// app/create/page.tsx
"use client";
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
// New Smart Contract Address
const CONTRACT_ADDRESS = "0x80ad25915F08Eb42423588c1872E7664D2E1Cc1c";
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const CHAIN_ID_HEX = "0x14a34";
const CHAIN_ID_DECIMAL = 84532;
const STORAGE_KEY = "yupp_wallet_connected";
const ETH_PRESETS = [
    "0.001",
    "0.01",
    "0.05",
    "0.1",
    "0.5"
];
const USDC_PRESETS = [
    "5",
    "10",
    "20",
    "50",
    "100"
];
const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)"
];
// Wallet Hook with Silent Connect
function useEvmWallet() {
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signer, setSigner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chainId, setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDisconnectAlert, setShowDisconnectAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    const confirmDisconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setAddress("");
        setSigner(null);
        setProvider(null);
        setChainId(null);
        localStorage.removeItem(STORAGE_KEY);
        setShowDisconnectAlert(false);
    }, []);
    const ensureChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!window.ethereum) return false;
        try {
            const currentChainId = await window.ethereum.request({
                method: "eth_chainId"
            });
            if (currentChainId === CHAIN_ID_HEX) return true;
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: CHAIN_ID_HEX
                    }
                ]
            });
            const _provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserProvider"](window.ethereum);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accs)=>{
                if (accs.length === 0) confirmDisconnect();
                else checkConnection();
            });
            window.ethereum.on("chainChanged", ()=>window.location.reload());
        }
    }, [
        checkConnection,
        confirmDisconnect
    ]);
    return {
        provider,
        signer,
        address,
        chainId,
        connect,
        disconnect: ()=>setShowDisconnectAlert(true),
        confirmDisconnect,
        showDisconnectAlert,
        setShowDisconnectAlert,
        isConnecting,
        ensureChain
    };
}
function CreatePage() {
    const { provider, signer, address, chainId, connect, disconnect, confirmDisconnect, showDisconnectAlert, setShowDisconnectAlert, isConnecting, ensureChain } = useEvmWallet();
    // Mode State
    const [isRedPacket, setIsRedPacket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Common State
    const [selectedToken, setSelectedToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ETH");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [unlockDate, setUnlockDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [unlockTime, setUnlockTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAnonymous, setIsAnonymous] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [balances, setBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ETH: "0.0",
        USDC: "0.0"
    });
    const [usdcDecimals, setUsdcDecimals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [needsApproval, setNeedsApproval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingStep, setLoadingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("IDLE");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Single Gift State
    const [recipientInput, setRecipientInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [resolvedAddress, setResolvedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isResolving, setIsResolving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGiftModal, setShowGiftModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successData, setSuccessData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Red Packet State
    const [maxClaimers, setMaxClaimers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("10");
    const [distributionType, setDistributionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EQUAL");
    const [showLinkModal, setShowLinkModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedLink, setGeneratedLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Fetch Balances
    const fetchBalances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!address || !provider) {
            setBalances({
                ETH: "0.0",
                USDC: "0.0"
            });
            return;
        }
        try {
            const ethRaw = await provider.getBalance(address);
            const usdcContract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](USDC_ADDRESS, ERC20_ABI, provider);
            const usdcRaw = await usdcContract.balanceOf(address);
            const decimals = await usdcContract.decimals();
            setUsdcDecimals(Number(decimals));
            setBalances({
                ETH: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(ethRaw, 18),
                USDC: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(usdcRaw, decimals)
            });
        } catch (e) {
            console.error("Balance fetch error:", e);
        }
    }, [
        address,
        provider
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBalances();
        const interval = setInterval(fetchBalances, 10000);
        return ()=>clearInterval(interval);
    }, [
        fetchBalances
    ]);
    // Check Approval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedToken === "USDC" && address && signer) {
            const checkAllowance = async ()=>{
                try {
                    const usdcContract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](USDC_ADDRESS, ERC20_ABI, signer);
                    const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
                    let checkAmount = BigInt(0);
                    try {
                        checkAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(amount || "0", usdcDecimals);
                    } catch  {}
                    if (allowance < checkAmount && checkAmount > BigInt(0)) {
                        setNeedsApproval(true);
                    } else {
                        setNeedsApproval(allowance === BigInt(0) && parseFloat(amount) > 0);
                    }
                } catch (e) {
                    console.error(e);
                }
            };
            checkAllowance();
        } else {
            setNeedsApproval(false);
        }
    }, [
        selectedToken,
        amount,
        address,
        signer,
        usdcDecimals
    ]);
    const handleRecipientChange = async (val)=>{
        setRecipientInput(val);
        setErrors((prev)=>({
                ...prev,
                recipient: ""
            }));
        if (!val) {
            setResolvedAddress("");
            return;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(val)) {
            setResolvedAddress(val);
            return;
        }
        setIsResolving(true);
        try {
            if (provider) {
                const resolved = await provider.resolveName(val);
                if (resolved) {
                    setResolvedAddress(resolved);
                } else {
                    setResolvedAddress("");
                }
            }
        } catch  {
            setResolvedAddress("");
        } finally{
            setIsResolving(false);
        }
    };
    const validate = ()=>{
        const newErrors = {};
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            newErrors.amount = "Enter valid amount";
        } else {
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
        if (!unlockDate || !unlockTime) {
            newErrors.date = "Select date & time";
        } else {
            const targetTime = new Date(`${unlockDate}T${unlockTime}`);
            const minTime = new Date(Date.now() + 60 * 1000);
            if (targetTime < minTime) {
                newErrors.date = "Time must be at least 1 min in future";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async ()=>{
        if (!validate()) return;
        if (!signer) {
            connect();
            return;
        }
        const correctChain = await ensureChain();
        if (!correctChain) {
            setErrors({
                submit: "Wrong network. Switch to Base Sepolia."
            });
            return;
        }
        try {
            setLoadingStep("IDLE");
            setErrors({});
            const usdcContract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](USDC_ADDRESS, ERC20_ABI, signer);
            const giftContract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$contractAbi$2e$json__$28$json$29$__["default"], signer);
            const decimals = selectedToken === "ETH" ? 18 : usdcDecimals;
            const amountWei = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(amount, decimals);
            const unlockTimestamp = Math.floor(new Date(`${unlockDate}T${unlockTime}`).getTime() / 1000);
            const unlockTimeBigInt = BigInt(unlockTimestamp);
            const metadata = {
                content: message || "",
                isAnonymous: isAnonymous
            };
            const obfuscatedMessage = btoa(JSON.stringify(metadata));
            if (selectedToken === "USDC") {
                const allowance = await usdcContract.allowance(address, CONTRACT_ADDRESS);
                if (allowance < amountWei) {
                    setLoadingStep("APPROVING");
                    const txApprove = await usdcContract.approve(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].MaxUint256);
                    await txApprove.wait();
                    await new Promise((resolve)=>setTimeout(resolve, 3000));
                }
            }
            setLoadingStep("CREATING");
            const tokenArg = selectedToken === "ETH" ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZeroAddress"] : USDC_ADDRESS;
            const valueArg = selectedToken === "ETH" ? amountWei : BigInt(0);
            let tx;
            const txOptions = {
                value: valueArg
            };
            if (isRedPacket) {
                const maxClaimersBigInt = BigInt(Math.floor(Number(maxClaimers)));
                const isLucky = distributionType === "LUCKY";
                tx = await giftContract.createRedPacket(tokenArg, amountWei, maxClaimersBigInt, unlockTimeBigInt, isLucky, isAnonymous, obfuscatedMessage, txOptions);
                await tx.wait();
                setGeneratedLink(`${window.location.origin}/packet/${tx.hash.slice(0, 10)}`);
                setShowLinkModal(true);
            } else {
                tx = await giftContract.createGift(resolvedAddress, tokenArg, amountWei, unlockTimeBigInt, isAnonymous, obfuscatedMessage, txOptions);
                await tx.wait();
                setSuccessData({
                    token: selectedToken,
                    amount: amount,
                    recipient: resolvedAddress,
                    unlockDate: new Date(`${unlockDate}T${unlockTime}`),
                    message: message,
                    txHash: tx.hash,
                    nftTokenId: "Minted",
                    isAnonymous: isAnonymous
                });
                setShowGiftModal(true);
            }
            setShowConfetti(true);
            setLoadingStep("IDLE");
            fetchBalances();
        } catch (err) {
            console.error(err);
            setLoadingStep("IDLE");
            if (err.code === "ACTION_REJECTED") {
                setErrors({
                    submit: "Transaction was rejected by user."
                });
                return;
            }
            let errorMsg = "Transaction failed.";
            if (err.reason) {
                errorMsg = err.reason;
                if (err.reason.includes("require(false)")) {
                    errorMsg = "Contract Rejected: The smart contract might not fully support this specific feature (Try ETH or Lucky Draw).";
                }
            } else if (err.data && err.data.message) errorMsg = err.data.message;
            else if (err.message && err.message.length < 50) errorMsg = err.message;
            setErrors({
                submit: errorMsg
            });
        }
    };
    const handleResetForm = ()=>{
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
    const handlePaste = async ()=>{
        try {
            const text = await navigator.clipboard.readText();
            handleRecipientChange(text);
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-24 font-sans text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                isConnected: !!address,
                address: address,
                onConnect: connect,
                onDisconnect: disconnect
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$confetti$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfettiEffect"], {
                trigger: showConfetti
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-[480px] px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black tracking-tight",
                                children: isRedPacket ? "Create Red Packet" : "Create Gift"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 359,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-muted-foreground",
                                children: isRedPacket ? "Create a shareable link for everyone" : "Wrap crypto for the future"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 360,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    chainId && chainId !== CHAIN_ID_DECIMAL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-center gap-3 rounded-2xl bg-yellow-50 p-4 text-yellow-800 border border-yellow-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 365,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm",
                                children: [
                                    "Wrong Network. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ensureChain,
                                        className: "underline",
                                        children: "Switch to Base"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 366,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 364,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex rounded-full bg-secondary p-1 border border-border/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsRedPacket(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", !isRedPacket ? "bg-white text-black shadow-sm dark:bg-black dark:text-white" : "text-muted-foreground hover:text-foreground"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 71
                                        }, this),
                                        " Single Gift"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 371,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsRedPacket(true),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", isRedPacket ? "bg-white text-black shadow-sm dark:bg-black dark:text-white" : "text-muted-foreground hover:text-foreground"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2",
                                    children: "🧧 Red Packet"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 374,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[2rem] border border-border bg-card p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex justify-between items-center text-sm font-bold text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isRedPacket ? "Total Pool Amount" : "Asset"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Bal: ",
                                                    selectedToken === "ETH" ? parseFloat(balances.ETH).toFixed(4) : parseFloat(balances.USDC).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedToken("ETH");
                                                    setAmount("");
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 rounded-xl font-bold transition-all border-2", selectedToken === "ETH" ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-secondary text-muted-foreground"),
                                                children: "ETH"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedToken("USDC");
                                                    setAmount("");
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 rounded-xl font-bold transition-all border-2", selectedToken === "USDC" ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-secondary text-muted-foreground"),
                                                children: "USDC"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: "w-full bg-transparent text-5xl font-black outline-none placeholder:text-muted-foreground/30 text-foreground py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide",
                                        children: (selectedToken === "ETH" ? ETH_PRESETS : USDC_PRESETS).map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAmount(val),
                                                className: "rounded-full bg-secondary px-4 py-2 text-xs font-bold text-foreground transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
                                                children: val
                                            }, val, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    errors.amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm font-bold text-red-500",
                                        children: errors.amount
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            !isRedPacket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "ml-2 text-sm font-bold text-muted-foreground",
                                        children: "Recipient"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl bg-secondary p-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: recipientInput,
                                                onChange: (e)=>handleRecipientChange(e.target.value),
                                                placeholder: "0x... or basename.eth",
                                                className: "w-full rounded-xl bg-transparent p-4 pr-12 text-lg font-medium outline-none placeholder:text-muted-foreground/50"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePaste,
                                                className: "absolute right-3 top-3 rounded-xl bg-white p-2 shadow-sm hover:bg-gray-50 dark:bg-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                                    className: "h-5 w-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 150
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this),
                                    resolvedAddress && resolvedAddress !== recipientInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ml-2 text-xs font-bold text-green-600",
                                        children: [
                                            "✓ ",
                                            resolvedAddress.slice(0, 6),
                                            "...",
                                            resolvedAddress.slice(-4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 75
                                    }, this),
                                    errors.recipient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ml-2 text-xs font-bold text-red-500",
                                        children: errors.recipient
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 401,
                                columnNumber: 14
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "ml-2 text-sm font-bold text-muted-foreground",
                                                children: "How many people can claim?"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-2xl bg-secondary p-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: maxClaimers,
                                                    onChange: (e)=>setMaxClaimers(e.target.value),
                                                    placeholder: "e.g. 50",
                                                    className: "w-full rounded-xl bg-transparent p-4 text-xl font-black outline-none text-center"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 21
                                            }, this),
                                            errors.claimers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "ml-2 text-xs font-bold text-red-500",
                                                children: errors.claimers
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "ml-2 text-sm font-bold text-muted-foreground",
                                                children: "Distribution Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setDistributionType("EQUAL"),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary", distributionType === "EQUAL" ? "border-primary ring-2 ring-primary/20" : "border-transparent"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-black text-foreground",
                                                                children: "Equal Split"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: [
                                                                    "Everyone gets exactly ",
                                                                    amount ? (Number(amount) / Number(maxClaimers || 1)).toFixed(4) : "0",
                                                                    " ",
                                                                    selectedToken
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setDistributionType("LUCKY"),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 p-4 rounded-2xl border-2 text-left transition-all bg-secondary", distributionType === "LUCKY" ? "border-primary ring-2 ring-primary/20" : "border-transparent"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-black text-foreground",
                                                                children: "Lucky Draw"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: "Random amounts. Early birds get lucky!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "ml-2 text-sm font-bold text-muted-foreground",
                                        children: "Unlock Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: unlockDate,
                                                onChange: (e)=>setUnlockDate(e.target.value),
                                                className: "w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "time",
                                                value: unlockTime,
                                                onChange: (e)=>setUnlockTime(e.target.value),
                                                className: "w-full rounded-2xl bg-secondary p-4 text-sm font-bold outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ml-2 text-xs font-bold text-red-500",
                                        children: errors.date
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-bold text-muted-foreground",
                                                children: "Note"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 rounded-full",
                                                children: "HIDDEN"
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value),
                                        placeholder: "Write a message for the future...",
                                        className: "h-24 w-full resize-none rounded-3xl border-none bg-secondary p-5 text-base outline-none focus:ring-2 focus:ring-primary/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setIsAnonymous(!isAnonymous),
                                className: "flex cursor-pointer items-center justify-between rounded-2xl border border-border p-4 hover:bg-secondary/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-10 items-center justify-center rounded-full", isAnonymous ? "bg-black text-white dark:bg-white dark:text-black" : "bg-secondary text-muted-foreground"),
                                                children: isAnonymous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 217
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 249
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: "Anonymous Gift"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 48
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Hide sender address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 105
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-6 w-11 rounded-full transition-colors relative", isAnonymous ? "bg-primary" : "bg-muted-foreground/30"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-1 h-4 w-4 rounded-full bg-white transition-all shadow-sm", isAnonymous ? "left-6" : "left-1")
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleSubmit,
                                disabled: loadingStep !== "IDLE" || !address || isConnecting,
                                className: "w-full h-14 rounded-full text-lg font-black shadow-lg shadow-primary/20 text-white hover:scale-[1.02] active:scale-[0.98] transition-all",
                                children: loadingStep === "APPROVING" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 87
                                        }, this),
                                        " Approving..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 45
                                }, this) : loadingStep === "CREATING" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 219
                                        }, this),
                                        " Minting..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 177
                                }, this) : !address ? "Connect Wallet" : isRedPacket ? "Create Shareable Link" : "Create Gift"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 rounded-xl bg-red-50 p-3 border border-red-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm font-bold text-red-600",
                                    children: errors.submit
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 468,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$gift$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiftModal"], {
                isOpen: showGiftModal,
                onClose: handleResetForm,
                type: "success",
                gift: successData || {},
                onSendAnother: handleResetForm
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showLinkModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "w-full max-w-sm rounded-3xl bg-white dark:bg-card p-6 text-center shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    className: "h-8 w-8"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 483,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 text-2xl font-black text-foreground",
                                children: "Packet Ready!"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 486,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-6 text-sm text-muted-foreground",
                                children: "Share this link with your friends. Anyone with the link can claim."
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 487,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center justify-between bg-secondary p-4 rounded-2xl border border-border overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold truncate mr-2 text-foreground",
                                        children: generatedLink
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>navigator.clipboard.writeText(generatedLink),
                                        className: "p-2 bg-white text-black rounded-full shadow-sm hover:bg-gray-200 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 185
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 490,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "rounded-xl font-bold bg-white text-black hover:bg-gray-100 h-12 border-none",
                                        children: "Share on X (Twitter)"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "rounded-xl font-bold bg-black !text-[#0052FF] hover:bg-blue-50 h-12 border-none",
                                        children: "Post on Base App"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleResetForm,
                                        variant: "ghost",
                                        className: "rounded-xl font-bold h-12 mt-2",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                                lineNumber: 495,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 482,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                    lineNumber: 481,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DisconnectModal, {
                isOpen: showDisconnectAlert,
                onClose: ()=>setShowDisconnectAlert(false),
                onConfirm: confirmDisconnect
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
function DisconnectModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                        lineNumber: 522,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                    lineNumber: 521,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-foreground",
                    children: "Disconnect Wallet?"
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                    lineNumber: 524,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-sm text-muted-foreground",
                    children: "You will need to reconnect to view your gifts."
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                    lineNumber: 525,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "secondary",
                            className: "rounded-xl font-bold",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                            lineNumber: 527,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onConfirm,
                            variant: "destructive",
                            className: "rounded-xl font-bold bg-red-600 hover:bg-red-700",
                            children: "Disconnect"
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                            lineNumber: 528,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
                    lineNumber: 526,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
            lineNumber: 520,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/create/page.tsx",
        lineNumber: 519,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04214e18._.js.map