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
"[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapsuleCard",
    ()=>CapsuleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-ssr] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CapsuleCard({ type, sender, recipient, amount, token, unlockDate, isUnlocked, isWithdrawn, onClaim, onClick }) {
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // --- Real-time Countdown Logic (Updated for Seconds) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isWithdrawn || isUnlocked) return;
        const updateTimer = ()=>{
            const now = new Date();
            const diff = unlockDate.getTime() - now.getTime();
            if (diff <= 0) {
                setTimeLeft("Ready");
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(diff % (1000 * 60) / 1000);
            let timeString = "";
            if (days > 0) {
                // যদি ১ দিনের বেশি বাকি থাকে, সেকেন্ড দেখানোর দরকার নেই
                timeString = `${days}d ${hours}h left`;
            } else if (hours > 0) {
                timeString = `${hours}h ${minutes}m ${seconds}s`;
            } else {
                // ১ ঘন্টার কম সময় বাকি থাকলে মিনিট ও সেকেন্ড দেখাবে
                timeString = `${minutes}m ${seconds}s`;
            }
            setTimeLeft(timeString);
        };
        updateTimer();
        // Update every second (1000ms) instead of 60000ms
        const interval = setInterval(updateTimer, 1000);
        return ()=>clearInterval(interval);
    }, [
        unlockDate,
        isWithdrawn,
        isUnlocked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.01
        },
        whileTap: {
            scale: 0.99
        },
        onClick: onClick,
        className: "group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase text-muted-foreground",
                                children: type === "sent" ? "To:" : "From:"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-sm font-semibold text-foreground max-w-[180px]",
                                children: type === "sent" ? recipient : sender
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border", isWithdrawn ? "bg-muted text-muted-foreground border-border" : isUnlocked ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-orange-500/10 text-orange-600 border-orange-500/20"),
                        children: isWithdrawn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Claimed ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                    lineNumber: 103,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true) : isUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Unlocked ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                    lineNumber: 105,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Locked ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                    lineNumber: 107,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-secondary",
                        children: token === "ETH" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-6 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center font-bold text-xs",
                            children: "Ξ"
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                            lineNumber: 116,
                            columnNumber: 14
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-6 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                            lineNumber: 118,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-bold text-foreground",
                            children: [
                                amount,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-normal text-muted-foreground",
                                    children: token
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                    lineNumber: 123,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-t border-border pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-muted-foreground",
                                children: isUnlocked && !isWithdrawn ? "Status" : "Unlock Date"
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold tabular-nums", !isUnlocked && !isWithdrawn ? "text-orange-600" : "text-foreground"),
                                children: !isUnlocked && !isWithdrawn ? `Opens in ${timeLeft}` : isUnlocked && !isWithdrawn ? "Ready to Claim" : unlockDate.toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    onClaim ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onClaim();
                        },
                        // Claim button is now Blue
                        className: "h-8 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all",
                        children: "Claim"
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity"
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx",
        lineNumber: 77,
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
"[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CapsulesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/bottom-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$capsule$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/capsule-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$gift$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/gift-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/ethers/lib.esm/utils/units.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$contractAbi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/contractAbi.json (json)");
// app/capsule/page.tsx
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
const CONTRACT_ADDRESS = "0x80ad25915F08Eb42423588c1872E7664D2E1Cc1c";
const BASE_SEPOLIA_ID = "0x14a34";
const STORAGE_KEY = "yupp_wallet_connected";
// Helpers
const parseGiftMessage = (rawMsg)=>{
    try {
        const decoded = atob(rawMsg);
        const json = JSON.parse(decoded);
        return {
            content: json.content || "",
            isAnonymous: !!json.isAnonymous
        };
    } catch (e) {
        return {
            content: rawMsg,
            isAnonymous: false
        };
    }
};
const shortenAddress = (addr)=>{
    if (!addr || addr.length < 10) return addr;
    // If it's a generic text like "Red Packet", don't shorten it
    if (!addr.startsWith("0x")) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};
function CapsulesPage() {
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signer, setSigner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [basename, setBasename] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ethBalance, setEthBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.00");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("received");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mySentCapsules, setMySentCapsules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [myReceivedCapsules, setMyReceivedCapsules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingData, setIsLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCapsule, setSelectedCapsule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClaiming, setIsClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successModalData, setSuccessModalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDisconnectAlert, setShowDisconnectAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Wallet Connection Logic ---
    const checkConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    const setupWallet = async (acc, _provider)=>{
        const _signer = await _provider.getSigner();
        const network = await _provider.getNetwork();
        if (network.chainId !== 84532n) {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: BASE_SEPOLIA_ID
                        }
                    ]
                });
            } catch (e) {
                console.error(e);
            }
        }
        setProvider(_provider);
        setSigner(_signer);
        setAddress(acc);
        setIsConnected(true);
        localStorage.setItem(STORAGE_KEY, "true");
        const bal = await _provider.getBalance(acc);
        setEthBalance(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(bal)).toFixed(4));
        try {
            const name = await _provider.lookupAddress(acc);
            if (name) {
                setBasename(name);
                const avt = await _provider.getAvatar(name);
                setAvatar(avt);
            }
        } catch (e) {}
    };
    const handleConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    const confirmDisconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsConnected(false);
        setAddress("");
        setProvider(null);
        setSigner(null);
        setBasename(null);
        setAvatar(null);
        setEthBalance("0.00");
        setMySentCapsules([]);
        setMyReceivedCapsules([]);
        localStorage.removeItem(STORAGE_KEY);
        setShowDisconnectAlert(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localStorage.getItem(STORAGE_KEY) === "true") checkConnection();
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accs)=>{
                if (accs.length === 0) confirmDisconnect();
                else checkConnection();
            });
        }
    }, [
        checkConnection,
        confirmDisconnect
    ]);
    // --- Optimized Data Fetching Logic (Gifts + Red Packets) ---
    const fetchCapsules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!provider || !address) return;
        setIsLoadingData(true);
        try {
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$contractAbi$2e$json__$28$json$29$__["default"], provider);
            const sent = [];
            const received = [];
            // ==========================================
            // 1. Fetch Normal Gifts
            // ==========================================
            try {
                const counter = await contract.giftCounter();
                const totalGifts = Number(counter);
                const promises = [];
                for(let i = totalGifts; i >= 1; i--)promises.push(contract.getGiftDetails(i).catch(()=>null));
                const rawGifts = await Promise.all(promises);
                rawGifts.forEach((gift)=>{
                    if (!gift) return;
                    try {
                        const gId = gift.id || gift[0];
                        // FIX: Added 'creator' and 'from' fallback to correctly identify USDC sent via Relayer/Proxy
                        const gSender = (gift.creator || gift.from || gift.sender || gift[1] || "").toString();
                        const gRecipient = (gift.recipient || gift.to || gift[2] || "").toString();
                        const gTokenAddress = gift.tokenAddress || gift[3];
                        const gAmount = gift.amount || gift[4];
                        const gUnlockTime = gift.unlockTime || gift[5];
                        const gIsWithdrawn = gift.isWithdrawn ?? gift[6];
                        const gMessage = gift.message || gift[8] || "";
                        if (!gSender || !gRecipient) return;
                        const isSender = gSender.toLowerCase() === address.toLowerCase();
                        const isRecipient = gRecipient.toLowerCase() === address.toLowerCase();
                        if (!isSender && !isRecipient) return;
                        const { content, isAnonymous } = parseGiftMessage(gMessage);
                        const isEth = gTokenAddress === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
                        const tokenSymbol = isEth ? "ETH" : "USDC";
                        const decimals = isEth ? 18 : 6;
                        const formattedAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(gAmount, decimals);
                        const unlockDate = new Date(Number(gUnlockTime) * 1000);
                        const isUnlocked = new Date() >= unlockDate;
                        const baseCapsuleData = {
                            id: gId.toString(),
                            sender: gSender,
                            recipient: gRecipient,
                            amount: formattedAmount,
                            token: tokenSymbol,
                            unlockDate: unlockDate,
                            isUnlocked: isUnlocked,
                            isWithdrawn: gIsWithdrawn,
                            isAnonymous: isAnonymous,
                            message: content,
                            realMessage: content,
                            txHash: "",
                            nftTokenId: gId.toString(),
                            isRedPacket: false
                        };
                        if (isSender) sent.push(baseCapsuleData);
                        if (isRecipient) {
                            const receivedData = {
                                ...baseCapsuleData
                            };
                            if (!isUnlocked) receivedData.message = "🔒 Message is hidden until unlocked";
                            received.push(receivedData);
                        }
                    } catch (err) {
                        console.error("Error processing regular gift", err);
                    }
                });
            } catch (err) {
                console.error("Error fetching regular gifts", err);
            }
            // ==========================================
            // 2. Fetch Red Packets (Sent Data)
            // ==========================================
            try {
                if (contract.redPacketCounter && contract.getRedPacketDetails) {
                    const rpCounter = await contract.redPacketCounter();
                    const totalRPs = Number(rpCounter);
                    const rpPromises = [];
                    for(let i = totalRPs; i >= 1; i--)rpPromises.push(contract.getRedPacketDetails(i).catch(()=>null));
                    const rawRPs = await Promise.all(rpPromises);
                    rawRPs.forEach((rp)=>{
                        if (!rp) return;
                        try {
                            const rpId = rp.id || rp[0];
                            const rpSender = (rp.creator || rp.sender || rp[1] || "").toString();
                            const rpTokenAddress = rp.tokenAddress || rp[2] || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
                            const rpAmount = rp.totalAmount || rp.amount || rp[3];
                            const rpMessage = rp.message || rp[6] || "";
                            if (!rpSender) return;
                            const isSender = rpSender.toLowerCase() === address.toLowerCase();
                            if (isSender) {
                                const { content, isAnonymous } = parseGiftMessage(rpMessage);
                                const isEth = rpTokenAddress === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
                                const tokenSymbol = isEth ? "ETH" : "USDC";
                                const decimals = isEth ? 18 : 6;
                                const formattedAmount = rpAmount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(rpAmount, decimals) : "0";
                                sent.push({
                                    id: `rp-${rpId.toString()}`,
                                    sender: rpSender,
                                    recipient: "Red Packet (Multiple)",
                                    amount: formattedAmount,
                                    token: tokenSymbol,
                                    unlockDate: new Date(),
                                    isUnlocked: true,
                                    isWithdrawn: false,
                                    isAnonymous: isAnonymous,
                                    message: content,
                                    realMessage: content,
                                    txHash: "",
                                    isRedPacket: true
                                });
                            }
                        } catch (err) {
                            console.error("Error processing red packet", err);
                        }
                    });
                }
            } catch (err) {
                console.warn("Red packet functions might not exist or differ in ABI names.", err);
            }
            setMySentCapsules(sent);
            setMyReceivedCapsules(received);
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally{
            setIsLoadingData(false);
        }
    }, [
        provider,
        address
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isConnected) fetchCapsules();
    }, [
        isConnected,
        fetchCapsules
    ]);
    // --- Auto Unlock Timer Logic (Updated for both Received & Sent) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timers = [];
        const setupTimers = (capsules, setCapsules)=>{
            capsules.forEach((capsule)=>{
                if (!capsule.isUnlocked && !capsule.isWithdrawn && capsule.unlockDate) {
                    const now = Date.now();
                    const unlockTime = new Date(capsule.unlockDate).getTime();
                    const timeUntilUnlock = unlockTime - now;
                    if (timeUntilUnlock > 0 && timeUntilUnlock < 86400000) {
                        const timerId = setTimeout(()=>{
                            setCapsules((currentCapsules)=>currentCapsules.map((c)=>{
                                    if (c.id === capsule.id) {
                                        return {
                                            ...c,
                                            isUnlocked: true,
                                            message: c.realMessage || c.message
                                        };
                                    }
                                    return c;
                                }));
                        }, timeUntilUnlock + 1000);
                        timers.push(timerId);
                    }
                }
            });
        };
        setupTimers(myReceivedCapsules, setMyReceivedCapsules);
        setupTimers(mySentCapsules, setMySentCapsules);
        return ()=>timers.forEach(clearTimeout);
    }, [
        myReceivedCapsules,
        mySentCapsules
    ]);
    // --- Claim Logic (Updated for Instant UI Update) ---
    const handleClaim = async ()=>{
        if (!selectedCapsule || !signer) return;
        setIsClaiming(true);
        try {
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$contractAbi$2e$json__$28$json$29$__["default"], signer);
            const tx = await contract.withdrawGift(selectedCapsule.id);
            await tx.wait();
            const claimedAmount = selectedCapsule.amount;
            const claimedToken = selectedCapsule.token;
            // 1. Optimistic Update: সাথে সাথেই UI থেকে Claim বাটন সরিয়ে Claimed দেখানোর জন্য
            setMyReceivedCapsules((prev)=>prev.map((c)=>c.id === selectedCapsule.id ? {
                        ...c,
                        isWithdrawn: true
                    } : c));
            // 2. মডাল বন্ধ করে সাকসেস মেসেজ দেখানো
            setSelectedCapsule(null);
            setSuccessModalData({
                amount: claimedAmount,
                token: claimedToken
            });
            // 3. ব্যালেন্স ইনস্ট্যান্ট আপডেট করা
            const bal = await provider?.getBalance(address);
            if (bal) setEthBalance(Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(bal)).toFixed(4));
            // 4. ৩ সেকেন্ড পর ব্যাকগ্রাউন্ডে ডেটা রিফ্রেশ করা (যাতে ব্লকচেইন নোড সিঙ্ক হওয়ার সময় পায়)
            setTimeout(()=>{
                fetchCapsules();
            }, 3000);
        } catch (error) {
            alert("Claim failed: " + (error.reason || error.message));
        } finally{
            setIsClaiming(false);
        }
    };
    const handleCopyAddress = async ()=>{
        if (!address) return;
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            const textArea = document.createElement("textarea");
            textArea.value = address;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
                setCopied(true);
                setTimeout(()=>setCopied(false), 2000);
            } catch (e) {
                console.error("Fallback copy failed", e);
            }
            document.body.removeChild(textArea);
        }
    };
    const sentCapsules = mySentCapsules.filter((c)=>filter === "all" || c.token === filter);
    const receivedCapsules = myReceivedCapsules.filter((c)=>filter === "all" || c.token === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-20 relative font-sans text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                isConnected: isConnected,
                address: address,
                onConnect: handleConnect,
                onDisconnect: ()=>setShowDisconnectAlert(true)
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-[480px] px-6 py-8",
                children: !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotConnectedState, {
                    onConnect: handleConnect
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 rounded-3xl bg-secondary p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 overflow-hidden rounded-full border-2 border-background bg-white shadow-sm",
                                                children: avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: avatar,
                                                    alt: "Profile",
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 31
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full w-full items-center justify-center bg-blue-100 text-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 196
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 107
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-foreground",
                                                        children: basename || "Base User"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCopyAddress,
                                                        className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                                                        children: [
                                                            shortenAddress(address),
                                                            copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-3 w-3 text-green-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 80
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-2xl bg-background p-4 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-muted-foreground",
                                            children: "Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-black text-foreground",
                                            children: [
                                                ethBalance,
                                                " ETH"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex rounded-full bg-secondary p-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    isActive: activeTab === "received",
                                    onClick: ()=>setActiveTab("received"),
                                    label: "Received"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                                    isActive: activeTab === "sent",
                                    onClick: ()=>setActiveTab("sent"),
                                    label: "Sent"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                                    isActive: filter === "all",
                                    onClick: ()=>setFilter("all"),
                                    label: "All"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                                    isActive: filter === "ETH",
                                    onClick: ()=>setFilter("ETH"),
                                    label: "ETH"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                                    isActive: filter === "USDC",
                                    onClick: ()=>setFilter("USDC"),
                                    label: "USDC"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg",
                                    children: activeTab === "sent" ? "Sent Gifts" : "Inbox"
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: fetchCapsules,
                                    disabled: isLoadingData,
                                    className: "rounded-full hover:bg-secondary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isLoadingData && "animate-spin")
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: isLoadingData && sentCapsules.length === 0 && receivedCapsules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center py-20 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-8 w-8 animate-spin mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading on-chain data..."
                                    }, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 154
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                lineNumber: 428,
                                columnNumber: 18
                            }, this) : activeTab === "sent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "space-y-4",
                                children: sentCapsules.length > 0 ? sentCapsules.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$capsule$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CapsuleCard"], {
                                        type: "sent",
                                        recipient: c.isRedPacket ? "Red Packet" : shortenAddress(c.recipient),
                                        amount: c.amount,
                                        token: c.token,
                                        unlockDate: c.unlockDate,
                                        isUnlocked: c.isUnlocked,
                                        message: c.message,
                                        txHash: c.txHash,
                                        isWithdrawn: c.isWithdrawn
                                    }, c.id, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {}, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 42
                                    }, void 0),
                                    title: "No gifts sent",
                                    description: "Create a new gift to get started."
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 24
                                }, this)
                            }, "sent", false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                lineNumber: 430,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "space-y-4",
                                children: receivedCapsules.length > 0 ? receivedCapsules.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$capsule$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CapsuleCard"], {
                                        type: "received",
                                        sender: c.isAnonymous ? "Secret Sender" : shortenAddress(c.sender),
                                        amount: c.amount,
                                        token: c.token,
                                        unlockDate: c.unlockDate,
                                        isUnlocked: c.isUnlocked,
                                        isWithdrawn: c.isWithdrawn,
                                        message: c.message,
                                        txHash: c.txHash,
                                        onClaim: c.isUnlocked && !c.isWithdrawn ? ()=>setSelectedCapsule(c) : undefined,
                                        onClick: ()=>setSelectedCapsule(c)
                                    }, c.id, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {}, void 0, false, {
                                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 42
                                    }, void 0),
                                    title: "Inbox Empty",
                                    description: "Share your address to receive gifts."
                                }, void 0, false, {
                                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 24
                                }, this)
                            }, "received", false, {
                                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                                lineNumber: 447,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            selectedCapsule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$gift$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiftModal"], {
                isOpen: !!selectedCapsule,
                onClose: ()=>!isClaiming && setSelectedCapsule(null),
                type: "detail",
                gift: {
                    ...selectedCapsule,
                    sender: selectedCapsule.isAnonymous ? "Anonymous" : shortenAddress(selectedCapsule.sender || "")
                },
                onClaim: selectedCapsule.isUnlocked && !selectedCapsule.isWithdrawn && activeTab === 'received' ? handleClaim : undefined,
                isClaiming: isClaiming
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: successModalData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessModal, {
                    isOpen: !!successModalData,
                    onClose: ()=>setSuccessModalData(null),
                    amount: successModalData.amount,
                    token: successModalData.token
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DisconnectModal, {
                isOpen: showDisconnectAlert,
                onClose: ()=>setShowDisconnectAlert(false),
                onConfirm: confirmDisconnect
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
// --- Subcomponents ---
function FilterChip({ isActive, onClick, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-4 py-2 text-xs font-bold transition-colors border", isActive ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20" : "bg-white border-gray-200 text-black hover:bg-gray-100"),
        children: label
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 508,
        columnNumber: 9
    }, this);
}
function SuccessModal({ isOpen, onClose, amount, token }) {
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
            exit: {
                opacity: 0,
                scale: 0.95
            },
            className: "relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl dark:bg-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                        className: "h-10 w-10 text-blue-600 animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                        lineNumber: 528,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 527,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-2 text-2xl font-black text-foreground",
                    children: "Unlocked!"
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 530,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 font-medium text-muted-foreground",
                    children: "You just claimed your gift."
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 531,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-col items-center justify-center rounded-2xl bg-secondary py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-black text-blue-600",
                            children: amount
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold text-muted-foreground",
                            children: token
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 532,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onClose,
                    className: "h-14 w-full rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 536,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
            lineNumber: 526,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 525,
        columnNumber: 7
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
                        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                        lineNumber: 550,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 549,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-bold text-foreground",
                    children: "Disconnect Wallet?"
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 552,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-sm text-muted-foreground",
                    children: "You will need to reconnect to view your gifts."
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 553,
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
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 555,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onConfirm,
                            variant: "destructive",
                            className: "rounded-xl font-bold bg-red-600 hover:bg-red-700",
                            children: "Disconnect"
                        }, void 0, false, {
                            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                            lineNumber: 556,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 554,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
            lineNumber: 548,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 547,
        columnNumber: 9
    }, this);
}
function NotConnectedState({ onConnect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-24 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                    className: "h-10 w-10 text-primary"
                }, void 0, false, {
                    fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                    lineNumber: 567,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 566,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-black mb-2",
                children: "Connect Wallet"
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 569,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground mb-8 max-w-[200px]",
                children: "Connect Wallet to view your gifts."
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 570,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onConnect,
                className: "h-12 w-full max-w-[200px] rounded-full text-base font-bold shadow-none",
                children: "Connect"
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 571,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 565,
        columnNumber: 7
    }, this);
}
function TabButton({ isActive, onClick, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-full py-2.5 text-sm font-bold transition-all duration-200", isActive ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-foreground"),
        children: label
    }, void 0, false, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 578,
        columnNumber: 9
    }, this);
}
function EmptyState({ icon, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-16 rounded-3xl border border-dashed border-border bg-secondary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-muted-foreground/50 text-4xl",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 587,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-bold text-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 588,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: description
            }, void 0, false, {
                fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
                lineNumber: 589,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Time capsule/Gift Time Capsule/app/capsules/page.tsx",
        lineNumber: 586,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c83f971b._.js.map