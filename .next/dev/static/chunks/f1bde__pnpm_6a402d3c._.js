(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
 //# sourceMappingURL=global-config.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
 //# sourceMappingURL=pipe.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
 //# sourceMappingURL=ease.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
 //# sourceMappingURL=is-easing-array.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
 //# sourceMappingURL=mirror.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
 //# sourceMappingURL=reverse.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
 //# sourceMappingURL=back.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
 //# sourceMappingURL=anticipate.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
 //# sourceMappingURL=circ.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
 //# sourceMappingURL=map.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
 //# sourceMappingURL=progress.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@emotion+is-prop-valid@1.4.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)");
;
// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$9$2e$0$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.2.11_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
// packages/react/compose-refs/src/composeRefs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.11_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
// packages/react/slot/src/Slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$refs$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.2.11_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$refs$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wallet
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Wallet", [
    [
        "path",
        {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6"
        }
    ],
    [
        "path",
        {
            d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
            key: "xoc0q4"
        }
    ]
]);
;
 //# sourceMappingURL=wallet.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>House
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Briefcase
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Briefcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Briefcase", [
    [
        "path",
        {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
]);
;
 //# sourceMappingURL=briefcase.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Briefcase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lock
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
;
 //# sourceMappingURL=lock.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LockOpen
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LockOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LockOpen", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }
    ]
]);
;
 //# sourceMappingURL=lock-open.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript) <export default as Unlock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Unlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gift
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Gift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Gift", [
    [
        "rect",
        {
            x: "3",
            y: "8",
            width: "18",
            height: "4",
            rx: "1",
            key: "bkv52"
        }
    ],
    [
        "path",
        {
            d: "M12 8v13",
            key: "1c76mn"
        }
    ],
    [
        "path",
        {
            d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
            key: "6wjy6b"
        }
    ],
    [
        "path",
        {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
            key: "1ihvrl"
        }
    ]
]);
;
 //# sourceMappingURL=gift.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gift",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Inbox
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Inbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
;
 //# sourceMappingURL=inbox.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefreshCw
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>User
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AES",
    ()=>AES
]);
/*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */ var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AES_key, _AES_Kd, _AES_Ke;
// Number of rounds by keysize
const numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
};
// Round constant words
const rcon = [
    0x01,
    0x02,
    0x04,
    0x08,
    0x10,
    0x20,
    0x40,
    0x80,
    0x1b,
    0x36,
    0x6c,
    0xd8,
    0xab,
    0x4d,
    0x9a,
    0x2f,
    0x5e,
    0xbc,
    0x63,
    0xc6,
    0x97,
    0x35,
    0x6a,
    0xd4,
    0xb3,
    0x7d,
    0xfa,
    0xef,
    0xc5,
    0x91
];
// S-box and Inverse S-box (S is for Substitution)
const S = [
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b,
    0x6f,
    0xc5,
    0x30,
    0x01,
    0x67,
    0x2b,
    0xfe,
    0xd7,
    0xab,
    0x76,
    0xca,
    0x82,
    0xc9,
    0x7d,
    0xfa,
    0x59,
    0x47,
    0xf0,
    0xad,
    0xd4,
    0xa2,
    0xaf,
    0x9c,
    0xa4,
    0x72,
    0xc0,
    0xb7,
    0xfd,
    0x93,
    0x26,
    0x36,
    0x3f,
    0xf7,
    0xcc,
    0x34,
    0xa5,
    0xe5,
    0xf1,
    0x71,
    0xd8,
    0x31,
    0x15,
    0x04,
    0xc7,
    0x23,
    0xc3,
    0x18,
    0x96,
    0x05,
    0x9a,
    0x07,
    0x12,
    0x80,
    0xe2,
    0xeb,
    0x27,
    0xb2,
    0x75,
    0x09,
    0x83,
    0x2c,
    0x1a,
    0x1b,
    0x6e,
    0x5a,
    0xa0,
    0x52,
    0x3b,
    0xd6,
    0xb3,
    0x29,
    0xe3,
    0x2f,
    0x84,
    0x53,
    0xd1,
    0x00,
    0xed,
    0x20,
    0xfc,
    0xb1,
    0x5b,
    0x6a,
    0xcb,
    0xbe,
    0x39,
    0x4a,
    0x4c,
    0x58,
    0xcf,
    0xd0,
    0xef,
    0xaa,
    0xfb,
    0x43,
    0x4d,
    0x33,
    0x85,
    0x45,
    0xf9,
    0x02,
    0x7f,
    0x50,
    0x3c,
    0x9f,
    0xa8,
    0x51,
    0xa3,
    0x40,
    0x8f,
    0x92,
    0x9d,
    0x38,
    0xf5,
    0xbc,
    0xb6,
    0xda,
    0x21,
    0x10,
    0xff,
    0xf3,
    0xd2,
    0xcd,
    0x0c,
    0x13,
    0xec,
    0x5f,
    0x97,
    0x44,
    0x17,
    0xc4,
    0xa7,
    0x7e,
    0x3d,
    0x64,
    0x5d,
    0x19,
    0x73,
    0x60,
    0x81,
    0x4f,
    0xdc,
    0x22,
    0x2a,
    0x90,
    0x88,
    0x46,
    0xee,
    0xb8,
    0x14,
    0xde,
    0x5e,
    0x0b,
    0xdb,
    0xe0,
    0x32,
    0x3a,
    0x0a,
    0x49,
    0x06,
    0x24,
    0x5c,
    0xc2,
    0xd3,
    0xac,
    0x62,
    0x91,
    0x95,
    0xe4,
    0x79,
    0xe7,
    0xc8,
    0x37,
    0x6d,
    0x8d,
    0xd5,
    0x4e,
    0xa9,
    0x6c,
    0x56,
    0xf4,
    0xea,
    0x65,
    0x7a,
    0xae,
    0x08,
    0xba,
    0x78,
    0x25,
    0x2e,
    0x1c,
    0xa6,
    0xb4,
    0xc6,
    0xe8,
    0xdd,
    0x74,
    0x1f,
    0x4b,
    0xbd,
    0x8b,
    0x8a,
    0x70,
    0x3e,
    0xb5,
    0x66,
    0x48,
    0x03,
    0xf6,
    0x0e,
    0x61,
    0x35,
    0x57,
    0xb9,
    0x86,
    0xc1,
    0x1d,
    0x9e,
    0xe1,
    0xf8,
    0x98,
    0x11,
    0x69,
    0xd9,
    0x8e,
    0x94,
    0x9b,
    0x1e,
    0x87,
    0xe9,
    0xce,
    0x55,
    0x28,
    0xdf,
    0x8c,
    0xa1,
    0x89,
    0x0d,
    0xbf,
    0xe6,
    0x42,
    0x68,
    0x41,
    0x99,
    0x2d,
    0x0f,
    0xb0,
    0x54,
    0xbb,
    0x16
];
const Si = [
    0x52,
    0x09,
    0x6a,
    0xd5,
    0x30,
    0x36,
    0xa5,
    0x38,
    0xbf,
    0x40,
    0xa3,
    0x9e,
    0x81,
    0xf3,
    0xd7,
    0xfb,
    0x7c,
    0xe3,
    0x39,
    0x82,
    0x9b,
    0x2f,
    0xff,
    0x87,
    0x34,
    0x8e,
    0x43,
    0x44,
    0xc4,
    0xde,
    0xe9,
    0xcb,
    0x54,
    0x7b,
    0x94,
    0x32,
    0xa6,
    0xc2,
    0x23,
    0x3d,
    0xee,
    0x4c,
    0x95,
    0x0b,
    0x42,
    0xfa,
    0xc3,
    0x4e,
    0x08,
    0x2e,
    0xa1,
    0x66,
    0x28,
    0xd9,
    0x24,
    0xb2,
    0x76,
    0x5b,
    0xa2,
    0x49,
    0x6d,
    0x8b,
    0xd1,
    0x25,
    0x72,
    0xf8,
    0xf6,
    0x64,
    0x86,
    0x68,
    0x98,
    0x16,
    0xd4,
    0xa4,
    0x5c,
    0xcc,
    0x5d,
    0x65,
    0xb6,
    0x92,
    0x6c,
    0x70,
    0x48,
    0x50,
    0xfd,
    0xed,
    0xb9,
    0xda,
    0x5e,
    0x15,
    0x46,
    0x57,
    0xa7,
    0x8d,
    0x9d,
    0x84,
    0x90,
    0xd8,
    0xab,
    0x00,
    0x8c,
    0xbc,
    0xd3,
    0x0a,
    0xf7,
    0xe4,
    0x58,
    0x05,
    0xb8,
    0xb3,
    0x45,
    0x06,
    0xd0,
    0x2c,
    0x1e,
    0x8f,
    0xca,
    0x3f,
    0x0f,
    0x02,
    0xc1,
    0xaf,
    0xbd,
    0x03,
    0x01,
    0x13,
    0x8a,
    0x6b,
    0x3a,
    0x91,
    0x11,
    0x41,
    0x4f,
    0x67,
    0xdc,
    0xea,
    0x97,
    0xf2,
    0xcf,
    0xce,
    0xf0,
    0xb4,
    0xe6,
    0x73,
    0x96,
    0xac,
    0x74,
    0x22,
    0xe7,
    0xad,
    0x35,
    0x85,
    0xe2,
    0xf9,
    0x37,
    0xe8,
    0x1c,
    0x75,
    0xdf,
    0x6e,
    0x47,
    0xf1,
    0x1a,
    0x71,
    0x1d,
    0x29,
    0xc5,
    0x89,
    0x6f,
    0xb7,
    0x62,
    0x0e,
    0xaa,
    0x18,
    0xbe,
    0x1b,
    0xfc,
    0x56,
    0x3e,
    0x4b,
    0xc6,
    0xd2,
    0x79,
    0x20,
    0x9a,
    0xdb,
    0xc0,
    0xfe,
    0x78,
    0xcd,
    0x5a,
    0xf4,
    0x1f,
    0xdd,
    0xa8,
    0x33,
    0x88,
    0x07,
    0xc7,
    0x31,
    0xb1,
    0x12,
    0x10,
    0x59,
    0x27,
    0x80,
    0xec,
    0x5f,
    0x60,
    0x51,
    0x7f,
    0xa9,
    0x19,
    0xb5,
    0x4a,
    0x0d,
    0x2d,
    0xe5,
    0x7a,
    0x9f,
    0x93,
    0xc9,
    0x9c,
    0xef,
    0xa0,
    0xe0,
    0x3b,
    0x4d,
    0xae,
    0x2a,
    0xf5,
    0xb0,
    0xc8,
    0xeb,
    0xbb,
    0x3c,
    0x83,
    0x53,
    0x99,
    0x61,
    0x17,
    0x2b,
    0x04,
    0x7e,
    0xba,
    0x77,
    0xd6,
    0x26,
    0xe1,
    0x69,
    0x14,
    0x63,
    0x55,
    0x21,
    0x0c,
    0x7d
];
// Transformations for encryption
const T1 = [
    0xc66363a5,
    0xf87c7c84,
    0xee777799,
    0xf67b7b8d,
    0xfff2f20d,
    0xd66b6bbd,
    0xde6f6fb1,
    0x91c5c554,
    0x60303050,
    0x02010103,
    0xce6767a9,
    0x562b2b7d,
    0xe7fefe19,
    0xb5d7d762,
    0x4dababe6,
    0xec76769a,
    0x8fcaca45,
    0x1f82829d,
    0x89c9c940,
    0xfa7d7d87,
    0xeffafa15,
    0xb25959eb,
    0x8e4747c9,
    0xfbf0f00b,
    0x41adadec,
    0xb3d4d467,
    0x5fa2a2fd,
    0x45afafea,
    0x239c9cbf,
    0x53a4a4f7,
    0xe4727296,
    0x9bc0c05b,
    0x75b7b7c2,
    0xe1fdfd1c,
    0x3d9393ae,
    0x4c26266a,
    0x6c36365a,
    0x7e3f3f41,
    0xf5f7f702,
    0x83cccc4f,
    0x6834345c,
    0x51a5a5f4,
    0xd1e5e534,
    0xf9f1f108,
    0xe2717193,
    0xabd8d873,
    0x62313153,
    0x2a15153f,
    0x0804040c,
    0x95c7c752,
    0x46232365,
    0x9dc3c35e,
    0x30181828,
    0x379696a1,
    0x0a05050f,
    0x2f9a9ab5,
    0x0e070709,
    0x24121236,
    0x1b80809b,
    0xdfe2e23d,
    0xcdebeb26,
    0x4e272769,
    0x7fb2b2cd,
    0xea75759f,
    0x1209091b,
    0x1d83839e,
    0x582c2c74,
    0x341a1a2e,
    0x361b1b2d,
    0xdc6e6eb2,
    0xb45a5aee,
    0x5ba0a0fb,
    0xa45252f6,
    0x763b3b4d,
    0xb7d6d661,
    0x7db3b3ce,
    0x5229297b,
    0xdde3e33e,
    0x5e2f2f71,
    0x13848497,
    0xa65353f5,
    0xb9d1d168,
    0x00000000,
    0xc1eded2c,
    0x40202060,
    0xe3fcfc1f,
    0x79b1b1c8,
    0xb65b5bed,
    0xd46a6abe,
    0x8dcbcb46,
    0x67bebed9,
    0x7239394b,
    0x944a4ade,
    0x984c4cd4,
    0xb05858e8,
    0x85cfcf4a,
    0xbbd0d06b,
    0xc5efef2a,
    0x4faaaae5,
    0xedfbfb16,
    0x864343c5,
    0x9a4d4dd7,
    0x66333355,
    0x11858594,
    0x8a4545cf,
    0xe9f9f910,
    0x04020206,
    0xfe7f7f81,
    0xa05050f0,
    0x783c3c44,
    0x259f9fba,
    0x4ba8a8e3,
    0xa25151f3,
    0x5da3a3fe,
    0x804040c0,
    0x058f8f8a,
    0x3f9292ad,
    0x219d9dbc,
    0x70383848,
    0xf1f5f504,
    0x63bcbcdf,
    0x77b6b6c1,
    0xafdada75,
    0x42212163,
    0x20101030,
    0xe5ffff1a,
    0xfdf3f30e,
    0xbfd2d26d,
    0x81cdcd4c,
    0x180c0c14,
    0x26131335,
    0xc3ecec2f,
    0xbe5f5fe1,
    0x359797a2,
    0x884444cc,
    0x2e171739,
    0x93c4c457,
    0x55a7a7f2,
    0xfc7e7e82,
    0x7a3d3d47,
    0xc86464ac,
    0xba5d5de7,
    0x3219192b,
    0xe6737395,
    0xc06060a0,
    0x19818198,
    0x9e4f4fd1,
    0xa3dcdc7f,
    0x44222266,
    0x542a2a7e,
    0x3b9090ab,
    0x0b888883,
    0x8c4646ca,
    0xc7eeee29,
    0x6bb8b8d3,
    0x2814143c,
    0xa7dede79,
    0xbc5e5ee2,
    0x160b0b1d,
    0xaddbdb76,
    0xdbe0e03b,
    0x64323256,
    0x743a3a4e,
    0x140a0a1e,
    0x924949db,
    0x0c06060a,
    0x4824246c,
    0xb85c5ce4,
    0x9fc2c25d,
    0xbdd3d36e,
    0x43acacef,
    0xc46262a6,
    0x399191a8,
    0x319595a4,
    0xd3e4e437,
    0xf279798b,
    0xd5e7e732,
    0x8bc8c843,
    0x6e373759,
    0xda6d6db7,
    0x018d8d8c,
    0xb1d5d564,
    0x9c4e4ed2,
    0x49a9a9e0,
    0xd86c6cb4,
    0xac5656fa,
    0xf3f4f407,
    0xcfeaea25,
    0xca6565af,
    0xf47a7a8e,
    0x47aeaee9,
    0x10080818,
    0x6fbabad5,
    0xf0787888,
    0x4a25256f,
    0x5c2e2e72,
    0x381c1c24,
    0x57a6a6f1,
    0x73b4b4c7,
    0x97c6c651,
    0xcbe8e823,
    0xa1dddd7c,
    0xe874749c,
    0x3e1f1f21,
    0x964b4bdd,
    0x61bdbddc,
    0x0d8b8b86,
    0x0f8a8a85,
    0xe0707090,
    0x7c3e3e42,
    0x71b5b5c4,
    0xcc6666aa,
    0x904848d8,
    0x06030305,
    0xf7f6f601,
    0x1c0e0e12,
    0xc26161a3,
    0x6a35355f,
    0xae5757f9,
    0x69b9b9d0,
    0x17868691,
    0x99c1c158,
    0x3a1d1d27,
    0x279e9eb9,
    0xd9e1e138,
    0xebf8f813,
    0x2b9898b3,
    0x22111133,
    0xd26969bb,
    0xa9d9d970,
    0x078e8e89,
    0x339494a7,
    0x2d9b9bb6,
    0x3c1e1e22,
    0x15878792,
    0xc9e9e920,
    0x87cece49,
    0xaa5555ff,
    0x50282878,
    0xa5dfdf7a,
    0x038c8c8f,
    0x59a1a1f8,
    0x09898980,
    0x1a0d0d17,
    0x65bfbfda,
    0xd7e6e631,
    0x844242c6,
    0xd06868b8,
    0x824141c3,
    0x299999b0,
    0x5a2d2d77,
    0x1e0f0f11,
    0x7bb0b0cb,
    0xa85454fc,
    0x6dbbbbd6,
    0x2c16163a
];
const T2 = [
    0xa5c66363,
    0x84f87c7c,
    0x99ee7777,
    0x8df67b7b,
    0x0dfff2f2,
    0xbdd66b6b,
    0xb1de6f6f,
    0x5491c5c5,
    0x50603030,
    0x03020101,
    0xa9ce6767,
    0x7d562b2b,
    0x19e7fefe,
    0x62b5d7d7,
    0xe64dabab,
    0x9aec7676,
    0x458fcaca,
    0x9d1f8282,
    0x4089c9c9,
    0x87fa7d7d,
    0x15effafa,
    0xebb25959,
    0xc98e4747,
    0x0bfbf0f0,
    0xec41adad,
    0x67b3d4d4,
    0xfd5fa2a2,
    0xea45afaf,
    0xbf239c9c,
    0xf753a4a4,
    0x96e47272,
    0x5b9bc0c0,
    0xc275b7b7,
    0x1ce1fdfd,
    0xae3d9393,
    0x6a4c2626,
    0x5a6c3636,
    0x417e3f3f,
    0x02f5f7f7,
    0x4f83cccc,
    0x5c683434,
    0xf451a5a5,
    0x34d1e5e5,
    0x08f9f1f1,
    0x93e27171,
    0x73abd8d8,
    0x53623131,
    0x3f2a1515,
    0x0c080404,
    0x5295c7c7,
    0x65462323,
    0x5e9dc3c3,
    0x28301818,
    0xa1379696,
    0x0f0a0505,
    0xb52f9a9a,
    0x090e0707,
    0x36241212,
    0x9b1b8080,
    0x3ddfe2e2,
    0x26cdebeb,
    0x694e2727,
    0xcd7fb2b2,
    0x9fea7575,
    0x1b120909,
    0x9e1d8383,
    0x74582c2c,
    0x2e341a1a,
    0x2d361b1b,
    0xb2dc6e6e,
    0xeeb45a5a,
    0xfb5ba0a0,
    0xf6a45252,
    0x4d763b3b,
    0x61b7d6d6,
    0xce7db3b3,
    0x7b522929,
    0x3edde3e3,
    0x715e2f2f,
    0x97138484,
    0xf5a65353,
    0x68b9d1d1,
    0x00000000,
    0x2cc1eded,
    0x60402020,
    0x1fe3fcfc,
    0xc879b1b1,
    0xedb65b5b,
    0xbed46a6a,
    0x468dcbcb,
    0xd967bebe,
    0x4b723939,
    0xde944a4a,
    0xd4984c4c,
    0xe8b05858,
    0x4a85cfcf,
    0x6bbbd0d0,
    0x2ac5efef,
    0xe54faaaa,
    0x16edfbfb,
    0xc5864343,
    0xd79a4d4d,
    0x55663333,
    0x94118585,
    0xcf8a4545,
    0x10e9f9f9,
    0x06040202,
    0x81fe7f7f,
    0xf0a05050,
    0x44783c3c,
    0xba259f9f,
    0xe34ba8a8,
    0xf3a25151,
    0xfe5da3a3,
    0xc0804040,
    0x8a058f8f,
    0xad3f9292,
    0xbc219d9d,
    0x48703838,
    0x04f1f5f5,
    0xdf63bcbc,
    0xc177b6b6,
    0x75afdada,
    0x63422121,
    0x30201010,
    0x1ae5ffff,
    0x0efdf3f3,
    0x6dbfd2d2,
    0x4c81cdcd,
    0x14180c0c,
    0x35261313,
    0x2fc3ecec,
    0xe1be5f5f,
    0xa2359797,
    0xcc884444,
    0x392e1717,
    0x5793c4c4,
    0xf255a7a7,
    0x82fc7e7e,
    0x477a3d3d,
    0xacc86464,
    0xe7ba5d5d,
    0x2b321919,
    0x95e67373,
    0xa0c06060,
    0x98198181,
    0xd19e4f4f,
    0x7fa3dcdc,
    0x66442222,
    0x7e542a2a,
    0xab3b9090,
    0x830b8888,
    0xca8c4646,
    0x29c7eeee,
    0xd36bb8b8,
    0x3c281414,
    0x79a7dede,
    0xe2bc5e5e,
    0x1d160b0b,
    0x76addbdb,
    0x3bdbe0e0,
    0x56643232,
    0x4e743a3a,
    0x1e140a0a,
    0xdb924949,
    0x0a0c0606,
    0x6c482424,
    0xe4b85c5c,
    0x5d9fc2c2,
    0x6ebdd3d3,
    0xef43acac,
    0xa6c46262,
    0xa8399191,
    0xa4319595,
    0x37d3e4e4,
    0x8bf27979,
    0x32d5e7e7,
    0x438bc8c8,
    0x596e3737,
    0xb7da6d6d,
    0x8c018d8d,
    0x64b1d5d5,
    0xd29c4e4e,
    0xe049a9a9,
    0xb4d86c6c,
    0xfaac5656,
    0x07f3f4f4,
    0x25cfeaea,
    0xafca6565,
    0x8ef47a7a,
    0xe947aeae,
    0x18100808,
    0xd56fbaba,
    0x88f07878,
    0x6f4a2525,
    0x725c2e2e,
    0x24381c1c,
    0xf157a6a6,
    0xc773b4b4,
    0x5197c6c6,
    0x23cbe8e8,
    0x7ca1dddd,
    0x9ce87474,
    0x213e1f1f,
    0xdd964b4b,
    0xdc61bdbd,
    0x860d8b8b,
    0x850f8a8a,
    0x90e07070,
    0x427c3e3e,
    0xc471b5b5,
    0xaacc6666,
    0xd8904848,
    0x05060303,
    0x01f7f6f6,
    0x121c0e0e,
    0xa3c26161,
    0x5f6a3535,
    0xf9ae5757,
    0xd069b9b9,
    0x91178686,
    0x5899c1c1,
    0x273a1d1d,
    0xb9279e9e,
    0x38d9e1e1,
    0x13ebf8f8,
    0xb32b9898,
    0x33221111,
    0xbbd26969,
    0x70a9d9d9,
    0x89078e8e,
    0xa7339494,
    0xb62d9b9b,
    0x223c1e1e,
    0x92158787,
    0x20c9e9e9,
    0x4987cece,
    0xffaa5555,
    0x78502828,
    0x7aa5dfdf,
    0x8f038c8c,
    0xf859a1a1,
    0x80098989,
    0x171a0d0d,
    0xda65bfbf,
    0x31d7e6e6,
    0xc6844242,
    0xb8d06868,
    0xc3824141,
    0xb0299999,
    0x775a2d2d,
    0x111e0f0f,
    0xcb7bb0b0,
    0xfca85454,
    0xd66dbbbb,
    0x3a2c1616
];
const T3 = [
    0x63a5c663,
    0x7c84f87c,
    0x7799ee77,
    0x7b8df67b,
    0xf20dfff2,
    0x6bbdd66b,
    0x6fb1de6f,
    0xc55491c5,
    0x30506030,
    0x01030201,
    0x67a9ce67,
    0x2b7d562b,
    0xfe19e7fe,
    0xd762b5d7,
    0xabe64dab,
    0x769aec76,
    0xca458fca,
    0x829d1f82,
    0xc94089c9,
    0x7d87fa7d,
    0xfa15effa,
    0x59ebb259,
    0x47c98e47,
    0xf00bfbf0,
    0xadec41ad,
    0xd467b3d4,
    0xa2fd5fa2,
    0xafea45af,
    0x9cbf239c,
    0xa4f753a4,
    0x7296e472,
    0xc05b9bc0,
    0xb7c275b7,
    0xfd1ce1fd,
    0x93ae3d93,
    0x266a4c26,
    0x365a6c36,
    0x3f417e3f,
    0xf702f5f7,
    0xcc4f83cc,
    0x345c6834,
    0xa5f451a5,
    0xe534d1e5,
    0xf108f9f1,
    0x7193e271,
    0xd873abd8,
    0x31536231,
    0x153f2a15,
    0x040c0804,
    0xc75295c7,
    0x23654623,
    0xc35e9dc3,
    0x18283018,
    0x96a13796,
    0x050f0a05,
    0x9ab52f9a,
    0x07090e07,
    0x12362412,
    0x809b1b80,
    0xe23ddfe2,
    0xeb26cdeb,
    0x27694e27,
    0xb2cd7fb2,
    0x759fea75,
    0x091b1209,
    0x839e1d83,
    0x2c74582c,
    0x1a2e341a,
    0x1b2d361b,
    0x6eb2dc6e,
    0x5aeeb45a,
    0xa0fb5ba0,
    0x52f6a452,
    0x3b4d763b,
    0xd661b7d6,
    0xb3ce7db3,
    0x297b5229,
    0xe33edde3,
    0x2f715e2f,
    0x84971384,
    0x53f5a653,
    0xd168b9d1,
    0x00000000,
    0xed2cc1ed,
    0x20604020,
    0xfc1fe3fc,
    0xb1c879b1,
    0x5bedb65b,
    0x6abed46a,
    0xcb468dcb,
    0xbed967be,
    0x394b7239,
    0x4ade944a,
    0x4cd4984c,
    0x58e8b058,
    0xcf4a85cf,
    0xd06bbbd0,
    0xef2ac5ef,
    0xaae54faa,
    0xfb16edfb,
    0x43c58643,
    0x4dd79a4d,
    0x33556633,
    0x85941185,
    0x45cf8a45,
    0xf910e9f9,
    0x02060402,
    0x7f81fe7f,
    0x50f0a050,
    0x3c44783c,
    0x9fba259f,
    0xa8e34ba8,
    0x51f3a251,
    0xa3fe5da3,
    0x40c08040,
    0x8f8a058f,
    0x92ad3f92,
    0x9dbc219d,
    0x38487038,
    0xf504f1f5,
    0xbcdf63bc,
    0xb6c177b6,
    0xda75afda,
    0x21634221,
    0x10302010,
    0xff1ae5ff,
    0xf30efdf3,
    0xd26dbfd2,
    0xcd4c81cd,
    0x0c14180c,
    0x13352613,
    0xec2fc3ec,
    0x5fe1be5f,
    0x97a23597,
    0x44cc8844,
    0x17392e17,
    0xc45793c4,
    0xa7f255a7,
    0x7e82fc7e,
    0x3d477a3d,
    0x64acc864,
    0x5de7ba5d,
    0x192b3219,
    0x7395e673,
    0x60a0c060,
    0x81981981,
    0x4fd19e4f,
    0xdc7fa3dc,
    0x22664422,
    0x2a7e542a,
    0x90ab3b90,
    0x88830b88,
    0x46ca8c46,
    0xee29c7ee,
    0xb8d36bb8,
    0x143c2814,
    0xde79a7de,
    0x5ee2bc5e,
    0x0b1d160b,
    0xdb76addb,
    0xe03bdbe0,
    0x32566432,
    0x3a4e743a,
    0x0a1e140a,
    0x49db9249,
    0x060a0c06,
    0x246c4824,
    0x5ce4b85c,
    0xc25d9fc2,
    0xd36ebdd3,
    0xacef43ac,
    0x62a6c462,
    0x91a83991,
    0x95a43195,
    0xe437d3e4,
    0x798bf279,
    0xe732d5e7,
    0xc8438bc8,
    0x37596e37,
    0x6db7da6d,
    0x8d8c018d,
    0xd564b1d5,
    0x4ed29c4e,
    0xa9e049a9,
    0x6cb4d86c,
    0x56faac56,
    0xf407f3f4,
    0xea25cfea,
    0x65afca65,
    0x7a8ef47a,
    0xaee947ae,
    0x08181008,
    0xbad56fba,
    0x7888f078,
    0x256f4a25,
    0x2e725c2e,
    0x1c24381c,
    0xa6f157a6,
    0xb4c773b4,
    0xc65197c6,
    0xe823cbe8,
    0xdd7ca1dd,
    0x749ce874,
    0x1f213e1f,
    0x4bdd964b,
    0xbddc61bd,
    0x8b860d8b,
    0x8a850f8a,
    0x7090e070,
    0x3e427c3e,
    0xb5c471b5,
    0x66aacc66,
    0x48d89048,
    0x03050603,
    0xf601f7f6,
    0x0e121c0e,
    0x61a3c261,
    0x355f6a35,
    0x57f9ae57,
    0xb9d069b9,
    0x86911786,
    0xc15899c1,
    0x1d273a1d,
    0x9eb9279e,
    0xe138d9e1,
    0xf813ebf8,
    0x98b32b98,
    0x11332211,
    0x69bbd269,
    0xd970a9d9,
    0x8e89078e,
    0x94a73394,
    0x9bb62d9b,
    0x1e223c1e,
    0x87921587,
    0xe920c9e9,
    0xce4987ce,
    0x55ffaa55,
    0x28785028,
    0xdf7aa5df,
    0x8c8f038c,
    0xa1f859a1,
    0x89800989,
    0x0d171a0d,
    0xbfda65bf,
    0xe631d7e6,
    0x42c68442,
    0x68b8d068,
    0x41c38241,
    0x99b02999,
    0x2d775a2d,
    0x0f111e0f,
    0xb0cb7bb0,
    0x54fca854,
    0xbbd66dbb,
    0x163a2c16
];
const T4 = [
    0x6363a5c6,
    0x7c7c84f8,
    0x777799ee,
    0x7b7b8df6,
    0xf2f20dff,
    0x6b6bbdd6,
    0x6f6fb1de,
    0xc5c55491,
    0x30305060,
    0x01010302,
    0x6767a9ce,
    0x2b2b7d56,
    0xfefe19e7,
    0xd7d762b5,
    0xababe64d,
    0x76769aec,
    0xcaca458f,
    0x82829d1f,
    0xc9c94089,
    0x7d7d87fa,
    0xfafa15ef,
    0x5959ebb2,
    0x4747c98e,
    0xf0f00bfb,
    0xadadec41,
    0xd4d467b3,
    0xa2a2fd5f,
    0xafafea45,
    0x9c9cbf23,
    0xa4a4f753,
    0x727296e4,
    0xc0c05b9b,
    0xb7b7c275,
    0xfdfd1ce1,
    0x9393ae3d,
    0x26266a4c,
    0x36365a6c,
    0x3f3f417e,
    0xf7f702f5,
    0xcccc4f83,
    0x34345c68,
    0xa5a5f451,
    0xe5e534d1,
    0xf1f108f9,
    0x717193e2,
    0xd8d873ab,
    0x31315362,
    0x15153f2a,
    0x04040c08,
    0xc7c75295,
    0x23236546,
    0xc3c35e9d,
    0x18182830,
    0x9696a137,
    0x05050f0a,
    0x9a9ab52f,
    0x0707090e,
    0x12123624,
    0x80809b1b,
    0xe2e23ddf,
    0xebeb26cd,
    0x2727694e,
    0xb2b2cd7f,
    0x75759fea,
    0x09091b12,
    0x83839e1d,
    0x2c2c7458,
    0x1a1a2e34,
    0x1b1b2d36,
    0x6e6eb2dc,
    0x5a5aeeb4,
    0xa0a0fb5b,
    0x5252f6a4,
    0x3b3b4d76,
    0xd6d661b7,
    0xb3b3ce7d,
    0x29297b52,
    0xe3e33edd,
    0x2f2f715e,
    0x84849713,
    0x5353f5a6,
    0xd1d168b9,
    0x00000000,
    0xeded2cc1,
    0x20206040,
    0xfcfc1fe3,
    0xb1b1c879,
    0x5b5bedb6,
    0x6a6abed4,
    0xcbcb468d,
    0xbebed967,
    0x39394b72,
    0x4a4ade94,
    0x4c4cd498,
    0x5858e8b0,
    0xcfcf4a85,
    0xd0d06bbb,
    0xefef2ac5,
    0xaaaae54f,
    0xfbfb16ed,
    0x4343c586,
    0x4d4dd79a,
    0x33335566,
    0x85859411,
    0x4545cf8a,
    0xf9f910e9,
    0x02020604,
    0x7f7f81fe,
    0x5050f0a0,
    0x3c3c4478,
    0x9f9fba25,
    0xa8a8e34b,
    0x5151f3a2,
    0xa3a3fe5d,
    0x4040c080,
    0x8f8f8a05,
    0x9292ad3f,
    0x9d9dbc21,
    0x38384870,
    0xf5f504f1,
    0xbcbcdf63,
    0xb6b6c177,
    0xdada75af,
    0x21216342,
    0x10103020,
    0xffff1ae5,
    0xf3f30efd,
    0xd2d26dbf,
    0xcdcd4c81,
    0x0c0c1418,
    0x13133526,
    0xecec2fc3,
    0x5f5fe1be,
    0x9797a235,
    0x4444cc88,
    0x1717392e,
    0xc4c45793,
    0xa7a7f255,
    0x7e7e82fc,
    0x3d3d477a,
    0x6464acc8,
    0x5d5de7ba,
    0x19192b32,
    0x737395e6,
    0x6060a0c0,
    0x81819819,
    0x4f4fd19e,
    0xdcdc7fa3,
    0x22226644,
    0x2a2a7e54,
    0x9090ab3b,
    0x8888830b,
    0x4646ca8c,
    0xeeee29c7,
    0xb8b8d36b,
    0x14143c28,
    0xdede79a7,
    0x5e5ee2bc,
    0x0b0b1d16,
    0xdbdb76ad,
    0xe0e03bdb,
    0x32325664,
    0x3a3a4e74,
    0x0a0a1e14,
    0x4949db92,
    0x06060a0c,
    0x24246c48,
    0x5c5ce4b8,
    0xc2c25d9f,
    0xd3d36ebd,
    0xacacef43,
    0x6262a6c4,
    0x9191a839,
    0x9595a431,
    0xe4e437d3,
    0x79798bf2,
    0xe7e732d5,
    0xc8c8438b,
    0x3737596e,
    0x6d6db7da,
    0x8d8d8c01,
    0xd5d564b1,
    0x4e4ed29c,
    0xa9a9e049,
    0x6c6cb4d8,
    0x5656faac,
    0xf4f407f3,
    0xeaea25cf,
    0x6565afca,
    0x7a7a8ef4,
    0xaeaee947,
    0x08081810,
    0xbabad56f,
    0x787888f0,
    0x25256f4a,
    0x2e2e725c,
    0x1c1c2438,
    0xa6a6f157,
    0xb4b4c773,
    0xc6c65197,
    0xe8e823cb,
    0xdddd7ca1,
    0x74749ce8,
    0x1f1f213e,
    0x4b4bdd96,
    0xbdbddc61,
    0x8b8b860d,
    0x8a8a850f,
    0x707090e0,
    0x3e3e427c,
    0xb5b5c471,
    0x6666aacc,
    0x4848d890,
    0x03030506,
    0xf6f601f7,
    0x0e0e121c,
    0x6161a3c2,
    0x35355f6a,
    0x5757f9ae,
    0xb9b9d069,
    0x86869117,
    0xc1c15899,
    0x1d1d273a,
    0x9e9eb927,
    0xe1e138d9,
    0xf8f813eb,
    0x9898b32b,
    0x11113322,
    0x6969bbd2,
    0xd9d970a9,
    0x8e8e8907,
    0x9494a733,
    0x9b9bb62d,
    0x1e1e223c,
    0x87879215,
    0xe9e920c9,
    0xcece4987,
    0x5555ffaa,
    0x28287850,
    0xdfdf7aa5,
    0x8c8c8f03,
    0xa1a1f859,
    0x89898009,
    0x0d0d171a,
    0xbfbfda65,
    0xe6e631d7,
    0x4242c684,
    0x6868b8d0,
    0x4141c382,
    0x9999b029,
    0x2d2d775a,
    0x0f0f111e,
    0xb0b0cb7b,
    0x5454fca8,
    0xbbbbd66d,
    0x16163a2c
];
// Transformations for decryption
const T5 = [
    0x51f4a750,
    0x7e416553,
    0x1a17a4c3,
    0x3a275e96,
    0x3bab6bcb,
    0x1f9d45f1,
    0xacfa58ab,
    0x4be30393,
    0x2030fa55,
    0xad766df6,
    0x88cc7691,
    0xf5024c25,
    0x4fe5d7fc,
    0xc52acbd7,
    0x26354480,
    0xb562a38f,
    0xdeb15a49,
    0x25ba1b67,
    0x45ea0e98,
    0x5dfec0e1,
    0xc32f7502,
    0x814cf012,
    0x8d4697a3,
    0x6bd3f9c6,
    0x038f5fe7,
    0x15929c95,
    0xbf6d7aeb,
    0x955259da,
    0xd4be832d,
    0x587421d3,
    0x49e06929,
    0x8ec9c844,
    0x75c2896a,
    0xf48e7978,
    0x99583e6b,
    0x27b971dd,
    0xbee14fb6,
    0xf088ad17,
    0xc920ac66,
    0x7dce3ab4,
    0x63df4a18,
    0xe51a3182,
    0x97513360,
    0x62537f45,
    0xb16477e0,
    0xbb6bae84,
    0xfe81a01c,
    0xf9082b94,
    0x70486858,
    0x8f45fd19,
    0x94de6c87,
    0x527bf8b7,
    0xab73d323,
    0x724b02e2,
    0xe31f8f57,
    0x6655ab2a,
    0xb2eb2807,
    0x2fb5c203,
    0x86c57b9a,
    0xd33708a5,
    0x302887f2,
    0x23bfa5b2,
    0x02036aba,
    0xed16825c,
    0x8acf1c2b,
    0xa779b492,
    0xf307f2f0,
    0x4e69e2a1,
    0x65daf4cd,
    0x0605bed5,
    0xd134621f,
    0xc4a6fe8a,
    0x342e539d,
    0xa2f355a0,
    0x058ae132,
    0xa4f6eb75,
    0x0b83ec39,
    0x4060efaa,
    0x5e719f06,
    0xbd6e1051,
    0x3e218af9,
    0x96dd063d,
    0xdd3e05ae,
    0x4de6bd46,
    0x91548db5,
    0x71c45d05,
    0x0406d46f,
    0x605015ff,
    0x1998fb24,
    0xd6bde997,
    0x894043cc,
    0x67d99e77,
    0xb0e842bd,
    0x07898b88,
    0xe7195b38,
    0x79c8eedb,
    0xa17c0a47,
    0x7c420fe9,
    0xf8841ec9,
    0x00000000,
    0x09808683,
    0x322bed48,
    0x1e1170ac,
    0x6c5a724e,
    0xfd0efffb,
    0x0f853856,
    0x3daed51e,
    0x362d3927,
    0x0a0fd964,
    0x685ca621,
    0x9b5b54d1,
    0x24362e3a,
    0x0c0a67b1,
    0x9357e70f,
    0xb4ee96d2,
    0x1b9b919e,
    0x80c0c54f,
    0x61dc20a2,
    0x5a774b69,
    0x1c121a16,
    0xe293ba0a,
    0xc0a02ae5,
    0x3c22e043,
    0x121b171d,
    0x0e090d0b,
    0xf28bc7ad,
    0x2db6a8b9,
    0x141ea9c8,
    0x57f11985,
    0xaf75074c,
    0xee99ddbb,
    0xa37f60fd,
    0xf701269f,
    0x5c72f5bc,
    0x44663bc5,
    0x5bfb7e34,
    0x8b432976,
    0xcb23c6dc,
    0xb6edfc68,
    0xb8e4f163,
    0xd731dcca,
    0x42638510,
    0x13972240,
    0x84c61120,
    0x854a247d,
    0xd2bb3df8,
    0xaef93211,
    0xc729a16d,
    0x1d9e2f4b,
    0xdcb230f3,
    0x0d8652ec,
    0x77c1e3d0,
    0x2bb3166c,
    0xa970b999,
    0x119448fa,
    0x47e96422,
    0xa8fc8cc4,
    0xa0f03f1a,
    0x567d2cd8,
    0x223390ef,
    0x87494ec7,
    0xd938d1c1,
    0x8ccaa2fe,
    0x98d40b36,
    0xa6f581cf,
    0xa57ade28,
    0xdab78e26,
    0x3fadbfa4,
    0x2c3a9de4,
    0x5078920d,
    0x6a5fcc9b,
    0x547e4662,
    0xf68d13c2,
    0x90d8b8e8,
    0x2e39f75e,
    0x82c3aff5,
    0x9f5d80be,
    0x69d0937c,
    0x6fd52da9,
    0xcf2512b3,
    0xc8ac993b,
    0x10187da7,
    0xe89c636e,
    0xdb3bbb7b,
    0xcd267809,
    0x6e5918f4,
    0xec9ab701,
    0x834f9aa8,
    0xe6956e65,
    0xaaffe67e,
    0x21bccf08,
    0xef15e8e6,
    0xbae79bd9,
    0x4a6f36ce,
    0xea9f09d4,
    0x29b07cd6,
    0x31a4b2af,
    0x2a3f2331,
    0xc6a59430,
    0x35a266c0,
    0x744ebc37,
    0xfc82caa6,
    0xe090d0b0,
    0x33a7d815,
    0xf104984a,
    0x41ecdaf7,
    0x7fcd500e,
    0x1791f62f,
    0x764dd68d,
    0x43efb04d,
    0xccaa4d54,
    0xe49604df,
    0x9ed1b5e3,
    0x4c6a881b,
    0xc12c1fb8,
    0x4665517f,
    0x9d5eea04,
    0x018c355d,
    0xfa877473,
    0xfb0b412e,
    0xb3671d5a,
    0x92dbd252,
    0xe9105633,
    0x6dd64713,
    0x9ad7618c,
    0x37a10c7a,
    0x59f8148e,
    0xeb133c89,
    0xcea927ee,
    0xb761c935,
    0xe11ce5ed,
    0x7a47b13c,
    0x9cd2df59,
    0x55f2733f,
    0x1814ce79,
    0x73c737bf,
    0x53f7cdea,
    0x5ffdaa5b,
    0xdf3d6f14,
    0x7844db86,
    0xcaaff381,
    0xb968c43e,
    0x3824342c,
    0xc2a3405f,
    0x161dc372,
    0xbce2250c,
    0x283c498b,
    0xff0d9541,
    0x39a80171,
    0x080cb3de,
    0xd8b4e49c,
    0x6456c190,
    0x7bcb8461,
    0xd532b670,
    0x486c5c74,
    0xd0b85742
];
const T6 = [
    0x5051f4a7,
    0x537e4165,
    0xc31a17a4,
    0x963a275e,
    0xcb3bab6b,
    0xf11f9d45,
    0xabacfa58,
    0x934be303,
    0x552030fa,
    0xf6ad766d,
    0x9188cc76,
    0x25f5024c,
    0xfc4fe5d7,
    0xd7c52acb,
    0x80263544,
    0x8fb562a3,
    0x49deb15a,
    0x6725ba1b,
    0x9845ea0e,
    0xe15dfec0,
    0x02c32f75,
    0x12814cf0,
    0xa38d4697,
    0xc66bd3f9,
    0xe7038f5f,
    0x9515929c,
    0xebbf6d7a,
    0xda955259,
    0x2dd4be83,
    0xd3587421,
    0x2949e069,
    0x448ec9c8,
    0x6a75c289,
    0x78f48e79,
    0x6b99583e,
    0xdd27b971,
    0xb6bee14f,
    0x17f088ad,
    0x66c920ac,
    0xb47dce3a,
    0x1863df4a,
    0x82e51a31,
    0x60975133,
    0x4562537f,
    0xe0b16477,
    0x84bb6bae,
    0x1cfe81a0,
    0x94f9082b,
    0x58704868,
    0x198f45fd,
    0x8794de6c,
    0xb7527bf8,
    0x23ab73d3,
    0xe2724b02,
    0x57e31f8f,
    0x2a6655ab,
    0x07b2eb28,
    0x032fb5c2,
    0x9a86c57b,
    0xa5d33708,
    0xf2302887,
    0xb223bfa5,
    0xba02036a,
    0x5ced1682,
    0x2b8acf1c,
    0x92a779b4,
    0xf0f307f2,
    0xa14e69e2,
    0xcd65daf4,
    0xd50605be,
    0x1fd13462,
    0x8ac4a6fe,
    0x9d342e53,
    0xa0a2f355,
    0x32058ae1,
    0x75a4f6eb,
    0x390b83ec,
    0xaa4060ef,
    0x065e719f,
    0x51bd6e10,
    0xf93e218a,
    0x3d96dd06,
    0xaedd3e05,
    0x464de6bd,
    0xb591548d,
    0x0571c45d,
    0x6f0406d4,
    0xff605015,
    0x241998fb,
    0x97d6bde9,
    0xcc894043,
    0x7767d99e,
    0xbdb0e842,
    0x8807898b,
    0x38e7195b,
    0xdb79c8ee,
    0x47a17c0a,
    0xe97c420f,
    0xc9f8841e,
    0x00000000,
    0x83098086,
    0x48322bed,
    0xac1e1170,
    0x4e6c5a72,
    0xfbfd0eff,
    0x560f8538,
    0x1e3daed5,
    0x27362d39,
    0x640a0fd9,
    0x21685ca6,
    0xd19b5b54,
    0x3a24362e,
    0xb10c0a67,
    0x0f9357e7,
    0xd2b4ee96,
    0x9e1b9b91,
    0x4f80c0c5,
    0xa261dc20,
    0x695a774b,
    0x161c121a,
    0x0ae293ba,
    0xe5c0a02a,
    0x433c22e0,
    0x1d121b17,
    0x0b0e090d,
    0xadf28bc7,
    0xb92db6a8,
    0xc8141ea9,
    0x8557f119,
    0x4caf7507,
    0xbbee99dd,
    0xfda37f60,
    0x9ff70126,
    0xbc5c72f5,
    0xc544663b,
    0x345bfb7e,
    0x768b4329,
    0xdccb23c6,
    0x68b6edfc,
    0x63b8e4f1,
    0xcad731dc,
    0x10426385,
    0x40139722,
    0x2084c611,
    0x7d854a24,
    0xf8d2bb3d,
    0x11aef932,
    0x6dc729a1,
    0x4b1d9e2f,
    0xf3dcb230,
    0xec0d8652,
    0xd077c1e3,
    0x6c2bb316,
    0x99a970b9,
    0xfa119448,
    0x2247e964,
    0xc4a8fc8c,
    0x1aa0f03f,
    0xd8567d2c,
    0xef223390,
    0xc787494e,
    0xc1d938d1,
    0xfe8ccaa2,
    0x3698d40b,
    0xcfa6f581,
    0x28a57ade,
    0x26dab78e,
    0xa43fadbf,
    0xe42c3a9d,
    0x0d507892,
    0x9b6a5fcc,
    0x62547e46,
    0xc2f68d13,
    0xe890d8b8,
    0x5e2e39f7,
    0xf582c3af,
    0xbe9f5d80,
    0x7c69d093,
    0xa96fd52d,
    0xb3cf2512,
    0x3bc8ac99,
    0xa710187d,
    0x6ee89c63,
    0x7bdb3bbb,
    0x09cd2678,
    0xf46e5918,
    0x01ec9ab7,
    0xa8834f9a,
    0x65e6956e,
    0x7eaaffe6,
    0x0821bccf,
    0xe6ef15e8,
    0xd9bae79b,
    0xce4a6f36,
    0xd4ea9f09,
    0xd629b07c,
    0xaf31a4b2,
    0x312a3f23,
    0x30c6a594,
    0xc035a266,
    0x37744ebc,
    0xa6fc82ca,
    0xb0e090d0,
    0x1533a7d8,
    0x4af10498,
    0xf741ecda,
    0x0e7fcd50,
    0x2f1791f6,
    0x8d764dd6,
    0x4d43efb0,
    0x54ccaa4d,
    0xdfe49604,
    0xe39ed1b5,
    0x1b4c6a88,
    0xb8c12c1f,
    0x7f466551,
    0x049d5eea,
    0x5d018c35,
    0x73fa8774,
    0x2efb0b41,
    0x5ab3671d,
    0x5292dbd2,
    0x33e91056,
    0x136dd647,
    0x8c9ad761,
    0x7a37a10c,
    0x8e59f814,
    0x89eb133c,
    0xeecea927,
    0x35b761c9,
    0xede11ce5,
    0x3c7a47b1,
    0x599cd2df,
    0x3f55f273,
    0x791814ce,
    0xbf73c737,
    0xea53f7cd,
    0x5b5ffdaa,
    0x14df3d6f,
    0x867844db,
    0x81caaff3,
    0x3eb968c4,
    0x2c382434,
    0x5fc2a340,
    0x72161dc3,
    0x0cbce225,
    0x8b283c49,
    0x41ff0d95,
    0x7139a801,
    0xde080cb3,
    0x9cd8b4e4,
    0x906456c1,
    0x617bcb84,
    0x70d532b6,
    0x74486c5c,
    0x42d0b857
];
const T7 = [
    0xa75051f4,
    0x65537e41,
    0xa4c31a17,
    0x5e963a27,
    0x6bcb3bab,
    0x45f11f9d,
    0x58abacfa,
    0x03934be3,
    0xfa552030,
    0x6df6ad76,
    0x769188cc,
    0x4c25f502,
    0xd7fc4fe5,
    0xcbd7c52a,
    0x44802635,
    0xa38fb562,
    0x5a49deb1,
    0x1b6725ba,
    0x0e9845ea,
    0xc0e15dfe,
    0x7502c32f,
    0xf012814c,
    0x97a38d46,
    0xf9c66bd3,
    0x5fe7038f,
    0x9c951592,
    0x7aebbf6d,
    0x59da9552,
    0x832dd4be,
    0x21d35874,
    0x692949e0,
    0xc8448ec9,
    0x896a75c2,
    0x7978f48e,
    0x3e6b9958,
    0x71dd27b9,
    0x4fb6bee1,
    0xad17f088,
    0xac66c920,
    0x3ab47dce,
    0x4a1863df,
    0x3182e51a,
    0x33609751,
    0x7f456253,
    0x77e0b164,
    0xae84bb6b,
    0xa01cfe81,
    0x2b94f908,
    0x68587048,
    0xfd198f45,
    0x6c8794de,
    0xf8b7527b,
    0xd323ab73,
    0x02e2724b,
    0x8f57e31f,
    0xab2a6655,
    0x2807b2eb,
    0xc2032fb5,
    0x7b9a86c5,
    0x08a5d337,
    0x87f23028,
    0xa5b223bf,
    0x6aba0203,
    0x825ced16,
    0x1c2b8acf,
    0xb492a779,
    0xf2f0f307,
    0xe2a14e69,
    0xf4cd65da,
    0xbed50605,
    0x621fd134,
    0xfe8ac4a6,
    0x539d342e,
    0x55a0a2f3,
    0xe132058a,
    0xeb75a4f6,
    0xec390b83,
    0xefaa4060,
    0x9f065e71,
    0x1051bd6e,
    0x8af93e21,
    0x063d96dd,
    0x05aedd3e,
    0xbd464de6,
    0x8db59154,
    0x5d0571c4,
    0xd46f0406,
    0x15ff6050,
    0xfb241998,
    0xe997d6bd,
    0x43cc8940,
    0x9e7767d9,
    0x42bdb0e8,
    0x8b880789,
    0x5b38e719,
    0xeedb79c8,
    0x0a47a17c,
    0x0fe97c42,
    0x1ec9f884,
    0x00000000,
    0x86830980,
    0xed48322b,
    0x70ac1e11,
    0x724e6c5a,
    0xfffbfd0e,
    0x38560f85,
    0xd51e3dae,
    0x3927362d,
    0xd9640a0f,
    0xa621685c,
    0x54d19b5b,
    0x2e3a2436,
    0x67b10c0a,
    0xe70f9357,
    0x96d2b4ee,
    0x919e1b9b,
    0xc54f80c0,
    0x20a261dc,
    0x4b695a77,
    0x1a161c12,
    0xba0ae293,
    0x2ae5c0a0,
    0xe0433c22,
    0x171d121b,
    0x0d0b0e09,
    0xc7adf28b,
    0xa8b92db6,
    0xa9c8141e,
    0x198557f1,
    0x074caf75,
    0xddbbee99,
    0x60fda37f,
    0x269ff701,
    0xf5bc5c72,
    0x3bc54466,
    0x7e345bfb,
    0x29768b43,
    0xc6dccb23,
    0xfc68b6ed,
    0xf163b8e4,
    0xdccad731,
    0x85104263,
    0x22401397,
    0x112084c6,
    0x247d854a,
    0x3df8d2bb,
    0x3211aef9,
    0xa16dc729,
    0x2f4b1d9e,
    0x30f3dcb2,
    0x52ec0d86,
    0xe3d077c1,
    0x166c2bb3,
    0xb999a970,
    0x48fa1194,
    0x642247e9,
    0x8cc4a8fc,
    0x3f1aa0f0,
    0x2cd8567d,
    0x90ef2233,
    0x4ec78749,
    0xd1c1d938,
    0xa2fe8cca,
    0x0b3698d4,
    0x81cfa6f5,
    0xde28a57a,
    0x8e26dab7,
    0xbfa43fad,
    0x9de42c3a,
    0x920d5078,
    0xcc9b6a5f,
    0x4662547e,
    0x13c2f68d,
    0xb8e890d8,
    0xf75e2e39,
    0xaff582c3,
    0x80be9f5d,
    0x937c69d0,
    0x2da96fd5,
    0x12b3cf25,
    0x993bc8ac,
    0x7da71018,
    0x636ee89c,
    0xbb7bdb3b,
    0x7809cd26,
    0x18f46e59,
    0xb701ec9a,
    0x9aa8834f,
    0x6e65e695,
    0xe67eaaff,
    0xcf0821bc,
    0xe8e6ef15,
    0x9bd9bae7,
    0x36ce4a6f,
    0x09d4ea9f,
    0x7cd629b0,
    0xb2af31a4,
    0x23312a3f,
    0x9430c6a5,
    0x66c035a2,
    0xbc37744e,
    0xcaa6fc82,
    0xd0b0e090,
    0xd81533a7,
    0x984af104,
    0xdaf741ec,
    0x500e7fcd,
    0xf62f1791,
    0xd68d764d,
    0xb04d43ef,
    0x4d54ccaa,
    0x04dfe496,
    0xb5e39ed1,
    0x881b4c6a,
    0x1fb8c12c,
    0x517f4665,
    0xea049d5e,
    0x355d018c,
    0x7473fa87,
    0x412efb0b,
    0x1d5ab367,
    0xd25292db,
    0x5633e910,
    0x47136dd6,
    0x618c9ad7,
    0x0c7a37a1,
    0x148e59f8,
    0x3c89eb13,
    0x27eecea9,
    0xc935b761,
    0xe5ede11c,
    0xb13c7a47,
    0xdf599cd2,
    0x733f55f2,
    0xce791814,
    0x37bf73c7,
    0xcdea53f7,
    0xaa5b5ffd,
    0x6f14df3d,
    0xdb867844,
    0xf381caaf,
    0xc43eb968,
    0x342c3824,
    0x405fc2a3,
    0xc372161d,
    0x250cbce2,
    0x498b283c,
    0x9541ff0d,
    0x017139a8,
    0xb3de080c,
    0xe49cd8b4,
    0xc1906456,
    0x84617bcb,
    0xb670d532,
    0x5c74486c,
    0x5742d0b8
];
const T8 = [
    0xf4a75051,
    0x4165537e,
    0x17a4c31a,
    0x275e963a,
    0xab6bcb3b,
    0x9d45f11f,
    0xfa58abac,
    0xe303934b,
    0x30fa5520,
    0x766df6ad,
    0xcc769188,
    0x024c25f5,
    0xe5d7fc4f,
    0x2acbd7c5,
    0x35448026,
    0x62a38fb5,
    0xb15a49de,
    0xba1b6725,
    0xea0e9845,
    0xfec0e15d,
    0x2f7502c3,
    0x4cf01281,
    0x4697a38d,
    0xd3f9c66b,
    0x8f5fe703,
    0x929c9515,
    0x6d7aebbf,
    0x5259da95,
    0xbe832dd4,
    0x7421d358,
    0xe0692949,
    0xc9c8448e,
    0xc2896a75,
    0x8e7978f4,
    0x583e6b99,
    0xb971dd27,
    0xe14fb6be,
    0x88ad17f0,
    0x20ac66c9,
    0xce3ab47d,
    0xdf4a1863,
    0x1a3182e5,
    0x51336097,
    0x537f4562,
    0x6477e0b1,
    0x6bae84bb,
    0x81a01cfe,
    0x082b94f9,
    0x48685870,
    0x45fd198f,
    0xde6c8794,
    0x7bf8b752,
    0x73d323ab,
    0x4b02e272,
    0x1f8f57e3,
    0x55ab2a66,
    0xeb2807b2,
    0xb5c2032f,
    0xc57b9a86,
    0x3708a5d3,
    0x2887f230,
    0xbfa5b223,
    0x036aba02,
    0x16825ced,
    0xcf1c2b8a,
    0x79b492a7,
    0x07f2f0f3,
    0x69e2a14e,
    0xdaf4cd65,
    0x05bed506,
    0x34621fd1,
    0xa6fe8ac4,
    0x2e539d34,
    0xf355a0a2,
    0x8ae13205,
    0xf6eb75a4,
    0x83ec390b,
    0x60efaa40,
    0x719f065e,
    0x6e1051bd,
    0x218af93e,
    0xdd063d96,
    0x3e05aedd,
    0xe6bd464d,
    0x548db591,
    0xc45d0571,
    0x06d46f04,
    0x5015ff60,
    0x98fb2419,
    0xbde997d6,
    0x4043cc89,
    0xd99e7767,
    0xe842bdb0,
    0x898b8807,
    0x195b38e7,
    0xc8eedb79,
    0x7c0a47a1,
    0x420fe97c,
    0x841ec9f8,
    0x00000000,
    0x80868309,
    0x2bed4832,
    0x1170ac1e,
    0x5a724e6c,
    0x0efffbfd,
    0x8538560f,
    0xaed51e3d,
    0x2d392736,
    0x0fd9640a,
    0x5ca62168,
    0x5b54d19b,
    0x362e3a24,
    0x0a67b10c,
    0x57e70f93,
    0xee96d2b4,
    0x9b919e1b,
    0xc0c54f80,
    0xdc20a261,
    0x774b695a,
    0x121a161c,
    0x93ba0ae2,
    0xa02ae5c0,
    0x22e0433c,
    0x1b171d12,
    0x090d0b0e,
    0x8bc7adf2,
    0xb6a8b92d,
    0x1ea9c814,
    0xf1198557,
    0x75074caf,
    0x99ddbbee,
    0x7f60fda3,
    0x01269ff7,
    0x72f5bc5c,
    0x663bc544,
    0xfb7e345b,
    0x4329768b,
    0x23c6dccb,
    0xedfc68b6,
    0xe4f163b8,
    0x31dccad7,
    0x63851042,
    0x97224013,
    0xc6112084,
    0x4a247d85,
    0xbb3df8d2,
    0xf93211ae,
    0x29a16dc7,
    0x9e2f4b1d,
    0xb230f3dc,
    0x8652ec0d,
    0xc1e3d077,
    0xb3166c2b,
    0x70b999a9,
    0x9448fa11,
    0xe9642247,
    0xfc8cc4a8,
    0xf03f1aa0,
    0x7d2cd856,
    0x3390ef22,
    0x494ec787,
    0x38d1c1d9,
    0xcaa2fe8c,
    0xd40b3698,
    0xf581cfa6,
    0x7ade28a5,
    0xb78e26da,
    0xadbfa43f,
    0x3a9de42c,
    0x78920d50,
    0x5fcc9b6a,
    0x7e466254,
    0x8d13c2f6,
    0xd8b8e890,
    0x39f75e2e,
    0xc3aff582,
    0x5d80be9f,
    0xd0937c69,
    0xd52da96f,
    0x2512b3cf,
    0xac993bc8,
    0x187da710,
    0x9c636ee8,
    0x3bbb7bdb,
    0x267809cd,
    0x5918f46e,
    0x9ab701ec,
    0x4f9aa883,
    0x956e65e6,
    0xffe67eaa,
    0xbccf0821,
    0x15e8e6ef,
    0xe79bd9ba,
    0x6f36ce4a,
    0x9f09d4ea,
    0xb07cd629,
    0xa4b2af31,
    0x3f23312a,
    0xa59430c6,
    0xa266c035,
    0x4ebc3774,
    0x82caa6fc,
    0x90d0b0e0,
    0xa7d81533,
    0x04984af1,
    0xecdaf741,
    0xcd500e7f,
    0x91f62f17,
    0x4dd68d76,
    0xefb04d43,
    0xaa4d54cc,
    0x9604dfe4,
    0xd1b5e39e,
    0x6a881b4c,
    0x2c1fb8c1,
    0x65517f46,
    0x5eea049d,
    0x8c355d01,
    0x877473fa,
    0x0b412efb,
    0x671d5ab3,
    0xdbd25292,
    0x105633e9,
    0xd647136d,
    0xd7618c9a,
    0xa10c7a37,
    0xf8148e59,
    0x133c89eb,
    0xa927eece,
    0x61c935b7,
    0x1ce5ede1,
    0x47b13c7a,
    0xd2df599c,
    0xf2733f55,
    0x14ce7918,
    0xc737bf73,
    0xf7cdea53,
    0xfdaa5b5f,
    0x3d6f14df,
    0x44db8678,
    0xaff381ca,
    0x68c43eb9,
    0x24342c38,
    0xa3405fc2,
    0x1dc37216,
    0xe2250cbc,
    0x3c498b28,
    0x0d9541ff,
    0xa8017139,
    0x0cb3de08,
    0xb4e49cd8,
    0x56c19064,
    0xcb84617b,
    0x32b670d5,
    0x6c5c7448,
    0xb85742d0
];
// Transformations for decryption key expansion
const U1 = [
    0x00000000,
    0x0e090d0b,
    0x1c121a16,
    0x121b171d,
    0x3824342c,
    0x362d3927,
    0x24362e3a,
    0x2a3f2331,
    0x70486858,
    0x7e416553,
    0x6c5a724e,
    0x62537f45,
    0x486c5c74,
    0x4665517f,
    0x547e4662,
    0x5a774b69,
    0xe090d0b0,
    0xee99ddbb,
    0xfc82caa6,
    0xf28bc7ad,
    0xd8b4e49c,
    0xd6bde997,
    0xc4a6fe8a,
    0xcaaff381,
    0x90d8b8e8,
    0x9ed1b5e3,
    0x8ccaa2fe,
    0x82c3aff5,
    0xa8fc8cc4,
    0xa6f581cf,
    0xb4ee96d2,
    0xbae79bd9,
    0xdb3bbb7b,
    0xd532b670,
    0xc729a16d,
    0xc920ac66,
    0xe31f8f57,
    0xed16825c,
    0xff0d9541,
    0xf104984a,
    0xab73d323,
    0xa57ade28,
    0xb761c935,
    0xb968c43e,
    0x9357e70f,
    0x9d5eea04,
    0x8f45fd19,
    0x814cf012,
    0x3bab6bcb,
    0x35a266c0,
    0x27b971dd,
    0x29b07cd6,
    0x038f5fe7,
    0x0d8652ec,
    0x1f9d45f1,
    0x119448fa,
    0x4be30393,
    0x45ea0e98,
    0x57f11985,
    0x59f8148e,
    0x73c737bf,
    0x7dce3ab4,
    0x6fd52da9,
    0x61dc20a2,
    0xad766df6,
    0xa37f60fd,
    0xb16477e0,
    0xbf6d7aeb,
    0x955259da,
    0x9b5b54d1,
    0x894043cc,
    0x87494ec7,
    0xdd3e05ae,
    0xd33708a5,
    0xc12c1fb8,
    0xcf2512b3,
    0xe51a3182,
    0xeb133c89,
    0xf9082b94,
    0xf701269f,
    0x4de6bd46,
    0x43efb04d,
    0x51f4a750,
    0x5ffdaa5b,
    0x75c2896a,
    0x7bcb8461,
    0x69d0937c,
    0x67d99e77,
    0x3daed51e,
    0x33a7d815,
    0x21bccf08,
    0x2fb5c203,
    0x058ae132,
    0x0b83ec39,
    0x1998fb24,
    0x1791f62f,
    0x764dd68d,
    0x7844db86,
    0x6a5fcc9b,
    0x6456c190,
    0x4e69e2a1,
    0x4060efaa,
    0x527bf8b7,
    0x5c72f5bc,
    0x0605bed5,
    0x080cb3de,
    0x1a17a4c3,
    0x141ea9c8,
    0x3e218af9,
    0x302887f2,
    0x223390ef,
    0x2c3a9de4,
    0x96dd063d,
    0x98d40b36,
    0x8acf1c2b,
    0x84c61120,
    0xaef93211,
    0xa0f03f1a,
    0xb2eb2807,
    0xbce2250c,
    0xe6956e65,
    0xe89c636e,
    0xfa877473,
    0xf48e7978,
    0xdeb15a49,
    0xd0b85742,
    0xc2a3405f,
    0xccaa4d54,
    0x41ecdaf7,
    0x4fe5d7fc,
    0x5dfec0e1,
    0x53f7cdea,
    0x79c8eedb,
    0x77c1e3d0,
    0x65daf4cd,
    0x6bd3f9c6,
    0x31a4b2af,
    0x3fadbfa4,
    0x2db6a8b9,
    0x23bfa5b2,
    0x09808683,
    0x07898b88,
    0x15929c95,
    0x1b9b919e,
    0xa17c0a47,
    0xaf75074c,
    0xbd6e1051,
    0xb3671d5a,
    0x99583e6b,
    0x97513360,
    0x854a247d,
    0x8b432976,
    0xd134621f,
    0xdf3d6f14,
    0xcd267809,
    0xc32f7502,
    0xe9105633,
    0xe7195b38,
    0xf5024c25,
    0xfb0b412e,
    0x9ad7618c,
    0x94de6c87,
    0x86c57b9a,
    0x88cc7691,
    0xa2f355a0,
    0xacfa58ab,
    0xbee14fb6,
    0xb0e842bd,
    0xea9f09d4,
    0xe49604df,
    0xf68d13c2,
    0xf8841ec9,
    0xd2bb3df8,
    0xdcb230f3,
    0xcea927ee,
    0xc0a02ae5,
    0x7a47b13c,
    0x744ebc37,
    0x6655ab2a,
    0x685ca621,
    0x42638510,
    0x4c6a881b,
    0x5e719f06,
    0x5078920d,
    0x0a0fd964,
    0x0406d46f,
    0x161dc372,
    0x1814ce79,
    0x322bed48,
    0x3c22e043,
    0x2e39f75e,
    0x2030fa55,
    0xec9ab701,
    0xe293ba0a,
    0xf088ad17,
    0xfe81a01c,
    0xd4be832d,
    0xdab78e26,
    0xc8ac993b,
    0xc6a59430,
    0x9cd2df59,
    0x92dbd252,
    0x80c0c54f,
    0x8ec9c844,
    0xa4f6eb75,
    0xaaffe67e,
    0xb8e4f163,
    0xb6edfc68,
    0x0c0a67b1,
    0x02036aba,
    0x10187da7,
    0x1e1170ac,
    0x342e539d,
    0x3a275e96,
    0x283c498b,
    0x26354480,
    0x7c420fe9,
    0x724b02e2,
    0x605015ff,
    0x6e5918f4,
    0x44663bc5,
    0x4a6f36ce,
    0x587421d3,
    0x567d2cd8,
    0x37a10c7a,
    0x39a80171,
    0x2bb3166c,
    0x25ba1b67,
    0x0f853856,
    0x018c355d,
    0x13972240,
    0x1d9e2f4b,
    0x47e96422,
    0x49e06929,
    0x5bfb7e34,
    0x55f2733f,
    0x7fcd500e,
    0x71c45d05,
    0x63df4a18,
    0x6dd64713,
    0xd731dcca,
    0xd938d1c1,
    0xcb23c6dc,
    0xc52acbd7,
    0xef15e8e6,
    0xe11ce5ed,
    0xf307f2f0,
    0xfd0efffb,
    0xa779b492,
    0xa970b999,
    0xbb6bae84,
    0xb562a38f,
    0x9f5d80be,
    0x91548db5,
    0x834f9aa8,
    0x8d4697a3
];
const U2 = [
    0x00000000,
    0x0b0e090d,
    0x161c121a,
    0x1d121b17,
    0x2c382434,
    0x27362d39,
    0x3a24362e,
    0x312a3f23,
    0x58704868,
    0x537e4165,
    0x4e6c5a72,
    0x4562537f,
    0x74486c5c,
    0x7f466551,
    0x62547e46,
    0x695a774b,
    0xb0e090d0,
    0xbbee99dd,
    0xa6fc82ca,
    0xadf28bc7,
    0x9cd8b4e4,
    0x97d6bde9,
    0x8ac4a6fe,
    0x81caaff3,
    0xe890d8b8,
    0xe39ed1b5,
    0xfe8ccaa2,
    0xf582c3af,
    0xc4a8fc8c,
    0xcfa6f581,
    0xd2b4ee96,
    0xd9bae79b,
    0x7bdb3bbb,
    0x70d532b6,
    0x6dc729a1,
    0x66c920ac,
    0x57e31f8f,
    0x5ced1682,
    0x41ff0d95,
    0x4af10498,
    0x23ab73d3,
    0x28a57ade,
    0x35b761c9,
    0x3eb968c4,
    0x0f9357e7,
    0x049d5eea,
    0x198f45fd,
    0x12814cf0,
    0xcb3bab6b,
    0xc035a266,
    0xdd27b971,
    0xd629b07c,
    0xe7038f5f,
    0xec0d8652,
    0xf11f9d45,
    0xfa119448,
    0x934be303,
    0x9845ea0e,
    0x8557f119,
    0x8e59f814,
    0xbf73c737,
    0xb47dce3a,
    0xa96fd52d,
    0xa261dc20,
    0xf6ad766d,
    0xfda37f60,
    0xe0b16477,
    0xebbf6d7a,
    0xda955259,
    0xd19b5b54,
    0xcc894043,
    0xc787494e,
    0xaedd3e05,
    0xa5d33708,
    0xb8c12c1f,
    0xb3cf2512,
    0x82e51a31,
    0x89eb133c,
    0x94f9082b,
    0x9ff70126,
    0x464de6bd,
    0x4d43efb0,
    0x5051f4a7,
    0x5b5ffdaa,
    0x6a75c289,
    0x617bcb84,
    0x7c69d093,
    0x7767d99e,
    0x1e3daed5,
    0x1533a7d8,
    0x0821bccf,
    0x032fb5c2,
    0x32058ae1,
    0x390b83ec,
    0x241998fb,
    0x2f1791f6,
    0x8d764dd6,
    0x867844db,
    0x9b6a5fcc,
    0x906456c1,
    0xa14e69e2,
    0xaa4060ef,
    0xb7527bf8,
    0xbc5c72f5,
    0xd50605be,
    0xde080cb3,
    0xc31a17a4,
    0xc8141ea9,
    0xf93e218a,
    0xf2302887,
    0xef223390,
    0xe42c3a9d,
    0x3d96dd06,
    0x3698d40b,
    0x2b8acf1c,
    0x2084c611,
    0x11aef932,
    0x1aa0f03f,
    0x07b2eb28,
    0x0cbce225,
    0x65e6956e,
    0x6ee89c63,
    0x73fa8774,
    0x78f48e79,
    0x49deb15a,
    0x42d0b857,
    0x5fc2a340,
    0x54ccaa4d,
    0xf741ecda,
    0xfc4fe5d7,
    0xe15dfec0,
    0xea53f7cd,
    0xdb79c8ee,
    0xd077c1e3,
    0xcd65daf4,
    0xc66bd3f9,
    0xaf31a4b2,
    0xa43fadbf,
    0xb92db6a8,
    0xb223bfa5,
    0x83098086,
    0x8807898b,
    0x9515929c,
    0x9e1b9b91,
    0x47a17c0a,
    0x4caf7507,
    0x51bd6e10,
    0x5ab3671d,
    0x6b99583e,
    0x60975133,
    0x7d854a24,
    0x768b4329,
    0x1fd13462,
    0x14df3d6f,
    0x09cd2678,
    0x02c32f75,
    0x33e91056,
    0x38e7195b,
    0x25f5024c,
    0x2efb0b41,
    0x8c9ad761,
    0x8794de6c,
    0x9a86c57b,
    0x9188cc76,
    0xa0a2f355,
    0xabacfa58,
    0xb6bee14f,
    0xbdb0e842,
    0xd4ea9f09,
    0xdfe49604,
    0xc2f68d13,
    0xc9f8841e,
    0xf8d2bb3d,
    0xf3dcb230,
    0xeecea927,
    0xe5c0a02a,
    0x3c7a47b1,
    0x37744ebc,
    0x2a6655ab,
    0x21685ca6,
    0x10426385,
    0x1b4c6a88,
    0x065e719f,
    0x0d507892,
    0x640a0fd9,
    0x6f0406d4,
    0x72161dc3,
    0x791814ce,
    0x48322bed,
    0x433c22e0,
    0x5e2e39f7,
    0x552030fa,
    0x01ec9ab7,
    0x0ae293ba,
    0x17f088ad,
    0x1cfe81a0,
    0x2dd4be83,
    0x26dab78e,
    0x3bc8ac99,
    0x30c6a594,
    0x599cd2df,
    0x5292dbd2,
    0x4f80c0c5,
    0x448ec9c8,
    0x75a4f6eb,
    0x7eaaffe6,
    0x63b8e4f1,
    0x68b6edfc,
    0xb10c0a67,
    0xba02036a,
    0xa710187d,
    0xac1e1170,
    0x9d342e53,
    0x963a275e,
    0x8b283c49,
    0x80263544,
    0xe97c420f,
    0xe2724b02,
    0xff605015,
    0xf46e5918,
    0xc544663b,
    0xce4a6f36,
    0xd3587421,
    0xd8567d2c,
    0x7a37a10c,
    0x7139a801,
    0x6c2bb316,
    0x6725ba1b,
    0x560f8538,
    0x5d018c35,
    0x40139722,
    0x4b1d9e2f,
    0x2247e964,
    0x2949e069,
    0x345bfb7e,
    0x3f55f273,
    0x0e7fcd50,
    0x0571c45d,
    0x1863df4a,
    0x136dd647,
    0xcad731dc,
    0xc1d938d1,
    0xdccb23c6,
    0xd7c52acb,
    0xe6ef15e8,
    0xede11ce5,
    0xf0f307f2,
    0xfbfd0eff,
    0x92a779b4,
    0x99a970b9,
    0x84bb6bae,
    0x8fb562a3,
    0xbe9f5d80,
    0xb591548d,
    0xa8834f9a,
    0xa38d4697
];
const U3 = [
    0x00000000,
    0x0d0b0e09,
    0x1a161c12,
    0x171d121b,
    0x342c3824,
    0x3927362d,
    0x2e3a2436,
    0x23312a3f,
    0x68587048,
    0x65537e41,
    0x724e6c5a,
    0x7f456253,
    0x5c74486c,
    0x517f4665,
    0x4662547e,
    0x4b695a77,
    0xd0b0e090,
    0xddbbee99,
    0xcaa6fc82,
    0xc7adf28b,
    0xe49cd8b4,
    0xe997d6bd,
    0xfe8ac4a6,
    0xf381caaf,
    0xb8e890d8,
    0xb5e39ed1,
    0xa2fe8cca,
    0xaff582c3,
    0x8cc4a8fc,
    0x81cfa6f5,
    0x96d2b4ee,
    0x9bd9bae7,
    0xbb7bdb3b,
    0xb670d532,
    0xa16dc729,
    0xac66c920,
    0x8f57e31f,
    0x825ced16,
    0x9541ff0d,
    0x984af104,
    0xd323ab73,
    0xde28a57a,
    0xc935b761,
    0xc43eb968,
    0xe70f9357,
    0xea049d5e,
    0xfd198f45,
    0xf012814c,
    0x6bcb3bab,
    0x66c035a2,
    0x71dd27b9,
    0x7cd629b0,
    0x5fe7038f,
    0x52ec0d86,
    0x45f11f9d,
    0x48fa1194,
    0x03934be3,
    0x0e9845ea,
    0x198557f1,
    0x148e59f8,
    0x37bf73c7,
    0x3ab47dce,
    0x2da96fd5,
    0x20a261dc,
    0x6df6ad76,
    0x60fda37f,
    0x77e0b164,
    0x7aebbf6d,
    0x59da9552,
    0x54d19b5b,
    0x43cc8940,
    0x4ec78749,
    0x05aedd3e,
    0x08a5d337,
    0x1fb8c12c,
    0x12b3cf25,
    0x3182e51a,
    0x3c89eb13,
    0x2b94f908,
    0x269ff701,
    0xbd464de6,
    0xb04d43ef,
    0xa75051f4,
    0xaa5b5ffd,
    0x896a75c2,
    0x84617bcb,
    0x937c69d0,
    0x9e7767d9,
    0xd51e3dae,
    0xd81533a7,
    0xcf0821bc,
    0xc2032fb5,
    0xe132058a,
    0xec390b83,
    0xfb241998,
    0xf62f1791,
    0xd68d764d,
    0xdb867844,
    0xcc9b6a5f,
    0xc1906456,
    0xe2a14e69,
    0xefaa4060,
    0xf8b7527b,
    0xf5bc5c72,
    0xbed50605,
    0xb3de080c,
    0xa4c31a17,
    0xa9c8141e,
    0x8af93e21,
    0x87f23028,
    0x90ef2233,
    0x9de42c3a,
    0x063d96dd,
    0x0b3698d4,
    0x1c2b8acf,
    0x112084c6,
    0x3211aef9,
    0x3f1aa0f0,
    0x2807b2eb,
    0x250cbce2,
    0x6e65e695,
    0x636ee89c,
    0x7473fa87,
    0x7978f48e,
    0x5a49deb1,
    0x5742d0b8,
    0x405fc2a3,
    0x4d54ccaa,
    0xdaf741ec,
    0xd7fc4fe5,
    0xc0e15dfe,
    0xcdea53f7,
    0xeedb79c8,
    0xe3d077c1,
    0xf4cd65da,
    0xf9c66bd3,
    0xb2af31a4,
    0xbfa43fad,
    0xa8b92db6,
    0xa5b223bf,
    0x86830980,
    0x8b880789,
    0x9c951592,
    0x919e1b9b,
    0x0a47a17c,
    0x074caf75,
    0x1051bd6e,
    0x1d5ab367,
    0x3e6b9958,
    0x33609751,
    0x247d854a,
    0x29768b43,
    0x621fd134,
    0x6f14df3d,
    0x7809cd26,
    0x7502c32f,
    0x5633e910,
    0x5b38e719,
    0x4c25f502,
    0x412efb0b,
    0x618c9ad7,
    0x6c8794de,
    0x7b9a86c5,
    0x769188cc,
    0x55a0a2f3,
    0x58abacfa,
    0x4fb6bee1,
    0x42bdb0e8,
    0x09d4ea9f,
    0x04dfe496,
    0x13c2f68d,
    0x1ec9f884,
    0x3df8d2bb,
    0x30f3dcb2,
    0x27eecea9,
    0x2ae5c0a0,
    0xb13c7a47,
    0xbc37744e,
    0xab2a6655,
    0xa621685c,
    0x85104263,
    0x881b4c6a,
    0x9f065e71,
    0x920d5078,
    0xd9640a0f,
    0xd46f0406,
    0xc372161d,
    0xce791814,
    0xed48322b,
    0xe0433c22,
    0xf75e2e39,
    0xfa552030,
    0xb701ec9a,
    0xba0ae293,
    0xad17f088,
    0xa01cfe81,
    0x832dd4be,
    0x8e26dab7,
    0x993bc8ac,
    0x9430c6a5,
    0xdf599cd2,
    0xd25292db,
    0xc54f80c0,
    0xc8448ec9,
    0xeb75a4f6,
    0xe67eaaff,
    0xf163b8e4,
    0xfc68b6ed,
    0x67b10c0a,
    0x6aba0203,
    0x7da71018,
    0x70ac1e11,
    0x539d342e,
    0x5e963a27,
    0x498b283c,
    0x44802635,
    0x0fe97c42,
    0x02e2724b,
    0x15ff6050,
    0x18f46e59,
    0x3bc54466,
    0x36ce4a6f,
    0x21d35874,
    0x2cd8567d,
    0x0c7a37a1,
    0x017139a8,
    0x166c2bb3,
    0x1b6725ba,
    0x38560f85,
    0x355d018c,
    0x22401397,
    0x2f4b1d9e,
    0x642247e9,
    0x692949e0,
    0x7e345bfb,
    0x733f55f2,
    0x500e7fcd,
    0x5d0571c4,
    0x4a1863df,
    0x47136dd6,
    0xdccad731,
    0xd1c1d938,
    0xc6dccb23,
    0xcbd7c52a,
    0xe8e6ef15,
    0xe5ede11c,
    0xf2f0f307,
    0xfffbfd0e,
    0xb492a779,
    0xb999a970,
    0xae84bb6b,
    0xa38fb562,
    0x80be9f5d,
    0x8db59154,
    0x9aa8834f,
    0x97a38d46
];
const U4 = [
    0x00000000,
    0x090d0b0e,
    0x121a161c,
    0x1b171d12,
    0x24342c38,
    0x2d392736,
    0x362e3a24,
    0x3f23312a,
    0x48685870,
    0x4165537e,
    0x5a724e6c,
    0x537f4562,
    0x6c5c7448,
    0x65517f46,
    0x7e466254,
    0x774b695a,
    0x90d0b0e0,
    0x99ddbbee,
    0x82caa6fc,
    0x8bc7adf2,
    0xb4e49cd8,
    0xbde997d6,
    0xa6fe8ac4,
    0xaff381ca,
    0xd8b8e890,
    0xd1b5e39e,
    0xcaa2fe8c,
    0xc3aff582,
    0xfc8cc4a8,
    0xf581cfa6,
    0xee96d2b4,
    0xe79bd9ba,
    0x3bbb7bdb,
    0x32b670d5,
    0x29a16dc7,
    0x20ac66c9,
    0x1f8f57e3,
    0x16825ced,
    0x0d9541ff,
    0x04984af1,
    0x73d323ab,
    0x7ade28a5,
    0x61c935b7,
    0x68c43eb9,
    0x57e70f93,
    0x5eea049d,
    0x45fd198f,
    0x4cf01281,
    0xab6bcb3b,
    0xa266c035,
    0xb971dd27,
    0xb07cd629,
    0x8f5fe703,
    0x8652ec0d,
    0x9d45f11f,
    0x9448fa11,
    0xe303934b,
    0xea0e9845,
    0xf1198557,
    0xf8148e59,
    0xc737bf73,
    0xce3ab47d,
    0xd52da96f,
    0xdc20a261,
    0x766df6ad,
    0x7f60fda3,
    0x6477e0b1,
    0x6d7aebbf,
    0x5259da95,
    0x5b54d19b,
    0x4043cc89,
    0x494ec787,
    0x3e05aedd,
    0x3708a5d3,
    0x2c1fb8c1,
    0x2512b3cf,
    0x1a3182e5,
    0x133c89eb,
    0x082b94f9,
    0x01269ff7,
    0xe6bd464d,
    0xefb04d43,
    0xf4a75051,
    0xfdaa5b5f,
    0xc2896a75,
    0xcb84617b,
    0xd0937c69,
    0xd99e7767,
    0xaed51e3d,
    0xa7d81533,
    0xbccf0821,
    0xb5c2032f,
    0x8ae13205,
    0x83ec390b,
    0x98fb2419,
    0x91f62f17,
    0x4dd68d76,
    0x44db8678,
    0x5fcc9b6a,
    0x56c19064,
    0x69e2a14e,
    0x60efaa40,
    0x7bf8b752,
    0x72f5bc5c,
    0x05bed506,
    0x0cb3de08,
    0x17a4c31a,
    0x1ea9c814,
    0x218af93e,
    0x2887f230,
    0x3390ef22,
    0x3a9de42c,
    0xdd063d96,
    0xd40b3698,
    0xcf1c2b8a,
    0xc6112084,
    0xf93211ae,
    0xf03f1aa0,
    0xeb2807b2,
    0xe2250cbc,
    0x956e65e6,
    0x9c636ee8,
    0x877473fa,
    0x8e7978f4,
    0xb15a49de,
    0xb85742d0,
    0xa3405fc2,
    0xaa4d54cc,
    0xecdaf741,
    0xe5d7fc4f,
    0xfec0e15d,
    0xf7cdea53,
    0xc8eedb79,
    0xc1e3d077,
    0xdaf4cd65,
    0xd3f9c66b,
    0xa4b2af31,
    0xadbfa43f,
    0xb6a8b92d,
    0xbfa5b223,
    0x80868309,
    0x898b8807,
    0x929c9515,
    0x9b919e1b,
    0x7c0a47a1,
    0x75074caf,
    0x6e1051bd,
    0x671d5ab3,
    0x583e6b99,
    0x51336097,
    0x4a247d85,
    0x4329768b,
    0x34621fd1,
    0x3d6f14df,
    0x267809cd,
    0x2f7502c3,
    0x105633e9,
    0x195b38e7,
    0x024c25f5,
    0x0b412efb,
    0xd7618c9a,
    0xde6c8794,
    0xc57b9a86,
    0xcc769188,
    0xf355a0a2,
    0xfa58abac,
    0xe14fb6be,
    0xe842bdb0,
    0x9f09d4ea,
    0x9604dfe4,
    0x8d13c2f6,
    0x841ec9f8,
    0xbb3df8d2,
    0xb230f3dc,
    0xa927eece,
    0xa02ae5c0,
    0x47b13c7a,
    0x4ebc3774,
    0x55ab2a66,
    0x5ca62168,
    0x63851042,
    0x6a881b4c,
    0x719f065e,
    0x78920d50,
    0x0fd9640a,
    0x06d46f04,
    0x1dc37216,
    0x14ce7918,
    0x2bed4832,
    0x22e0433c,
    0x39f75e2e,
    0x30fa5520,
    0x9ab701ec,
    0x93ba0ae2,
    0x88ad17f0,
    0x81a01cfe,
    0xbe832dd4,
    0xb78e26da,
    0xac993bc8,
    0xa59430c6,
    0xd2df599c,
    0xdbd25292,
    0xc0c54f80,
    0xc9c8448e,
    0xf6eb75a4,
    0xffe67eaa,
    0xe4f163b8,
    0xedfc68b6,
    0x0a67b10c,
    0x036aba02,
    0x187da710,
    0x1170ac1e,
    0x2e539d34,
    0x275e963a,
    0x3c498b28,
    0x35448026,
    0x420fe97c,
    0x4b02e272,
    0x5015ff60,
    0x5918f46e,
    0x663bc544,
    0x6f36ce4a,
    0x7421d358,
    0x7d2cd856,
    0xa10c7a37,
    0xa8017139,
    0xb3166c2b,
    0xba1b6725,
    0x8538560f,
    0x8c355d01,
    0x97224013,
    0x9e2f4b1d,
    0xe9642247,
    0xe0692949,
    0xfb7e345b,
    0xf2733f55,
    0xcd500e7f,
    0xc45d0571,
    0xdf4a1863,
    0xd647136d,
    0x31dccad7,
    0x38d1c1d9,
    0x23c6dccb,
    0x2acbd7c5,
    0x15e8e6ef,
    0x1ce5ede1,
    0x07f2f0f3,
    0x0efffbfd,
    0x79b492a7,
    0x70b999a9,
    0x6bae84bb,
    0x62a38fb5,
    0x5d80be9f,
    0x548db591,
    0x4f9aa883,
    0x4697a38d
];
function convertToInt32(bytes) {
    const result = [];
    for(let i = 0; i < bytes.length; i += 4){
        result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }
    return result;
}
class AES {
    get key() {
        return __classPrivateFieldGet(this, _AES_key, "f").slice();
    }
    constructor(key){
        _AES_key.set(this, void 0);
        _AES_Kd.set(this, void 0);
        _AES_Ke.set(this, void 0);
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }
        __classPrivateFieldSet(this, _AES_key, new Uint8Array(key), "f");
        const rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new TypeError('invalid key size (must be 16, 24 or 32 bytes)');
        }
        // encryption round keys
        __classPrivateFieldSet(this, _AES_Ke, [], "f");
        // decryption round keys
        __classPrivateFieldSet(this, _AES_Kd, [], "f");
        for(let i = 0; i <= rounds; i++){
            __classPrivateFieldGet(this, _AES_Ke, "f").push([
                0,
                0,
                0,
                0
            ]);
            __classPrivateFieldGet(this, _AES_Kd, "f").push([
                0,
                0,
                0,
                0
            ]);
        }
        const roundKeyCount = (rounds + 1) * 4;
        const KC = this.key.length / 4;
        // convert the key into ints
        const tk = convertToInt32(this.key);
        // copy values into round key arrays
        let index;
        for(let i = 0; i < KC; i++){
            index = i >> 2;
            __classPrivateFieldGet(this, _AES_Ke, "f")[index][i % 4] = tk[i];
            __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - index][i % 4] = tk[i];
        }
        // key expansion (fips-197 section 5.2)
        let rconpointer = 0;
        let t = KC, tt;
        while(t < roundKeyCount){
            tt = tk[KC - 1];
            tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
            rconpointer += 1;
            // key expansion (for non-256 bit)
            if (KC != 8) {
                for(let i = 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for(let i = 1; i < KC / 2; i++){
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[KC / 2 - 1];
                tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;
                for(let i = KC / 2 + 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            }
            // copy values into round key arrays
            let i = 0, r, c;
            while(i < KC && t < roundKeyCount){
                r = t >> 2;
                c = t % 4;
                __classPrivateFieldGet(this, _AES_Ke, "f")[r][c] = tk[i];
                __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - r][c] = tk[i++];
                t++;
            }
        }
        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for(let r = 1; r < rounds; r++){
            for(let c = 0; c < 4; c++){
                tt = __classPrivateFieldGet(this, _AES_Kd, "f")[r][c];
                __classPrivateFieldGet(this, _AES_Kd, "f")[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
            }
        }
    }
    encrypt(plaintext) {
        if (plaintext.length != 16) {
            throw new TypeError('invalid plaintext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Ke, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(plaintext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Ke, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Ke, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Ke, "f")[rounds][i];
            result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
    decrypt(ciphertext) {
        if (ciphertext.length != 16) {
            throw new TypeError('invalid ciphertext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Kd, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(ciphertext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Kd, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Kd, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Kd, "f")[rounds][i];
            result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
}
_AES_key = new WeakMap(), _AES_Kd = new WeakMap(), _AES_Ke = new WeakMap(); //# sourceMappingURL=aes.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeOfOperation",
    ()=>ModeOfOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)");
;
class ModeOfOperation {
    constructor(name, key, cls){
        if (cls && !(this instanceof cls)) {
            throw new Error(`${name} must be instantiated with "new"`);
        }
        Object.defineProperties(this, {
            aes: {
                enumerable: true,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AES"](key)
            },
            name: {
                enumerable: true,
                value: name
            }
        });
    }
} //# sourceMappingURL=mode.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-cbc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CBC",
    ()=>CBC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
// Cipher Block Chaining
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CBC_iv, _CBC_lastBlock;
;
class CBC extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv){
        super("ECC", key, CBC);
        _CBC_iv.set(this, void 0);
        _CBC_lastBlock.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CBC_lastBlock, this.iv, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CBC_iv, "f"));
    }
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            for(let j = 0; j < 16; j++){
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] ^= plaintext[i + j];
            }
            __classPrivateFieldSet(this, _CBC_lastBlock, this.aes.encrypt(__classPrivateFieldGet(this, _CBC_lastBlock, "f")), "f");
            ciphertext.set(__classPrivateFieldGet(this, _CBC_lastBlock, "f"), i);
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(ciphertext.length);
        for(let i = 0; i < ciphertext.length; i += 16){
            const block = this.aes.decrypt(ciphertext.subarray(i, i + 16));
            for(let j = 0; j < 16; j++){
                plaintext[i + j] = block[j] ^ __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j];
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] = ciphertext[i + j];
            }
        }
        return plaintext;
    }
}
_CBC_iv = new WeakMap(), _CBC_lastBlock = new WeakMap(); //# sourceMappingURL=mode-cbc.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-cfb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CFB",
    ()=>CFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
// Cipher Feedback
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CFB_instances, _CFB_iv, _CFB_shiftRegister, _CFB_shift;
;
class CFB extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv, segmentSize = 8){
        super("CFB", key, CFB);
        _CFB_instances.add(this);
        _CFB_iv.set(this, void 0);
        _CFB_shiftRegister.set(this, void 0);
        // This library currently only handles byte-aligned segmentSize
        if (!Number.isInteger(segmentSize) || segmentSize % 8) {
            throw new TypeError("invalid segmentSize");
        }
        Object.defineProperties(this, {
            segmentSize: {
                enumerable: true,
                value: segmentSize
            }
        });
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CFB_shiftRegister, this.iv, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CFB_iv, "f"));
    }
    encrypt(plaintext) {
        if (8 * plaintext.length % this.segmentSize) {
            throw new TypeError("invalid plaintext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                ciphertext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (8 * ciphertext.length % this.segmentSize) {
            throw new TypeError("invalid ciphertext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const plaintext = new Uint8Array(ciphertext);
        for(let i = 0; i < plaintext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                plaintext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return plaintext;
    }
}
_CFB_iv = new WeakMap(), _CFB_shiftRegister = new WeakMap(), _CFB_instances = new WeakSet(), _CFB_shift = function _CFB_shift(data) {
    const segmentSize = this.segmentSize / 8;
    // Shift the register
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(__classPrivateFieldGet(this, _CFB_shiftRegister, "f").subarray(segmentSize));
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(data.subarray(0, segmentSize), 16 - segmentSize);
}; //# sourceMappingURL=mode-cfb.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ctr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTR",
    ()=>CTR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
// Counter Mode
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CTR_remaining, _CTR_remainingIndex, _CTR_counter;
;
class CTR extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, initialValue){
        super("CTR", key, CTR);
        // Remaining bytes for the one-time pad
        _CTR_remaining.set(this, void 0);
        _CTR_remainingIndex.set(this, void 0);
        // The current counter
        _CTR_counter.set(this, void 0);
        __classPrivateFieldSet(this, _CTR_counter, new Uint8Array(16), "f");
        __classPrivateFieldGet(this, _CTR_counter, "f").fill(0);
        __classPrivateFieldSet(this, _CTR_remaining, __classPrivateFieldGet(this, _CTR_counter, "f"), "f"); // This will be discarded immediately
        __classPrivateFieldSet(this, _CTR_remainingIndex, 16, "f");
        if (initialValue == null) {
            initialValue = 1;
        }
        if (typeof initialValue === "number") {
            this.setCounterValue(initialValue);
        } else {
            this.setCounterBytes(initialValue);
        }
    }
    get counter() {
        return new Uint8Array(__classPrivateFieldGet(this, _CTR_counter, "f"));
    }
    setCounterValue(value) {
        if (!Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
            throw new TypeError("invalid counter initial integer value");
        }
        for(let index = 15; index >= 0; --index){
            __classPrivateFieldGet(this, _CTR_counter, "f")[index] = value % 256;
            value = Math.floor(value / 256);
        }
    }
    setCounterBytes(value) {
        if (value.length !== 16) {
            throw new TypeError("invalid counter initial Uint8Array value length");
        }
        __classPrivateFieldGet(this, _CTR_counter, "f").set(value);
    }
    increment() {
        for(let i = 15; i >= 0; i--){
            if (__classPrivateFieldGet(this, _CTR_counter, "f")[i] === 255) {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i] = 0;
            } else {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i]++;
                break;
            }
        }
    }
    encrypt(plaintext) {
        var _a, _b;
        const crypttext = new Uint8Array(plaintext);
        for(let i = 0; i < crypttext.length; i++){
            if (__classPrivateFieldGet(this, _CTR_remainingIndex, "f") === 16) {
                __classPrivateFieldSet(this, _CTR_remaining, this.aes.encrypt(__classPrivateFieldGet(this, _CTR_counter, "f")), "f");
                __classPrivateFieldSet(this, _CTR_remainingIndex, 0, "f");
                this.increment();
            }
            crypttext[i] ^= __classPrivateFieldGet(this, _CTR_remaining, "f")[__classPrivateFieldSet(this, _CTR_remainingIndex, (_b = __classPrivateFieldGet(this, _CTR_remainingIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return crypttext;
    }
    decrypt(ciphertext) {
        return this.encrypt(ciphertext);
    }
}
_CTR_remaining = new WeakMap(), _CTR_remainingIndex = new WeakMap(), _CTR_counter = new WeakMap(); //# sourceMappingURL=mode-ctr.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ecb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECB",
    ()=>ECB
]);
// Electronic Code Book
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
;
class ECB extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key){
        super("ECB", key, ECB);
    }
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const crypttext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            crypttext.set(this.aes.encrypt(plaintext.subarray(i, i + 16)), i);
        }
        return crypttext;
    }
    decrypt(crypttext) {
        if (crypttext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(crypttext.length);
        for(let i = 0; i < crypttext.length; i += 16){
            plaintext.set(this.aes.decrypt(crypttext.subarray(i, i + 16)), i);
        }
        return plaintext;
    }
} //# sourceMappingURL=mode-ecb.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ofb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OFB",
    ()=>OFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
// Output Feedback
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OFB_iv, _OFB_lastPrecipher, _OFB_lastPrecipherIndex;
;
class OFB extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv){
        super("OFB", key, OFB);
        _OFB_iv.set(this, void 0);
        _OFB_lastPrecipher.set(this, void 0);
        _OFB_lastPrecipherIndex.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _OFB_lastPrecipher, this.iv, "f");
        __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 16, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _OFB_iv, "f"));
    }
    encrypt(plaintext) {
        var _a, _b;
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i++){
            if (__classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f") === 16) {
                __classPrivateFieldSet(this, _OFB_lastPrecipher, this.aes.encrypt(__classPrivateFieldGet(this, _OFB_lastPrecipher, "f")), "f");
                __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 0, "f");
            }
            ciphertext[i] ^= __classPrivateFieldGet(this, _OFB_lastPrecipher, "f")[__classPrivateFieldSet(this, _OFB_lastPrecipherIndex, (_b = __classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        return this.encrypt(ciphertext);
    }
}
_OFB_iv = new WeakMap(), _OFB_lastPrecipher = new WeakMap(), _OFB_lastPrecipherIndex = new WeakMap(); //# sourceMappingURL=mode-ofb.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/padding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pkcs7Pad",
    ()=>pkcs7Pad,
    "pkcs7Strip",
    ()=>pkcs7Strip
]);
function pkcs7Pad(data) {
    const padder = 16 - data.length % 16;
    const result = new Uint8Array(data.length + padder);
    result.set(data);
    for(let i = data.length; i < result.length; i++){
        result[i] = padder;
    }
    return result;
}
function pkcs7Strip(data) {
    if (data.length < 16) {
        throw new TypeError('PKCS#7 invalid length');
    }
    const padder = data[data.length - 1];
    if (padder > 16) {
        throw new TypeError('PKCS#7 padding byte out of range');
    }
    const length = data.length - padder;
    for(let i = 0; i < padder; i++){
        if (data[length + i] !== padder) {
            throw new TypeError('PKCS#7 invalid padding byte');
        }
    }
    return new Uint8Array(data.subarray(0, length));
} //# sourceMappingURL=padding.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/aes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cbc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-cbc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cfb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-cfb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ctr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ecb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ecb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ofb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/mode-ofb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$aes$2d$js$40$4$2e$0$2e$0$2d$beta$2e$5$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/aes-js@4.0.0-beta.5/node_modules/aes-js/lib.esm/padding.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
__turbopack_context__.s([
    "bytesRegex",
    ()=>bytesRegex,
    "execTyped",
    ()=>execTyped,
    "integerRegex",
    ()=>integerRegex,
    "isTupleRegex",
    ()=>isTupleRegex
]);
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiParameter",
    ()=>formatAbiParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
;
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(tupleRegex, abiParameter.type);
        type += `)${result?.array || ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiParameters",
    ()=>formatAbiParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
;
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameter"])(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiItem",
    ()=>formatAbiItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
;
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventModifiers",
    ()=>eventModifiers,
    "execConstructorSignature",
    ()=>execConstructorSignature,
    "execErrorSignature",
    ()=>execErrorSignature,
    "execEventSignature",
    ()=>execEventSignature,
    "execFallbackSignature",
    ()=>execFallbackSignature,
    "execFunctionSignature",
    ()=>execFunctionSignature,
    "execStructSignature",
    ()=>execStructSignature,
    "functionModifiers",
    ()=>functionModifiers,
    "isConstructorSignature",
    ()=>isConstructorSignature,
    "isErrorSignature",
    ()=>isErrorSignature,
    "isEventSignature",
    ()=>isEventSignature,
    "isFallbackSignature",
    ()=>isFallbackSignature,
    "isFunctionSignature",
    ()=>isFunctionSignature,
    "isReceiveSignature",
    ()=>isReceiveSignature,
    "isStructSignature",
    ()=>isStructSignature,
    "modifiers",
    ()=>modifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
;
// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(fallbackSignatureRegex, signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
const eventModifiers = new Set([
    'indexed'
]);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '1.2.3'; //# sourceMappingURL=version.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/version.js [app-client] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidAbiItemError",
    ()=>InvalidAbiItemError,
    "UnknownSolidityTypeError",
    ()=>UnknownSolidityTypeError,
    "UnknownTypeError",
    ()=>UnknownTypeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidAbiItemError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
} //# sourceMappingURL=abiItem.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidAbiParameterError",
    ()=>InvalidAbiParameterError,
    "InvalidAbiParametersError",
    ()=>InvalidAbiParametersError,
    "InvalidAbiTypeParameterError",
    ()=>InvalidAbiTypeParameterError,
    "InvalidFunctionModifierError",
    ()=>InvalidFunctionModifierError,
    "InvalidModifierError",
    ()=>InvalidModifierError,
    "InvalidParameterError",
    ()=>InvalidParameterError,
    "SolidityProtectedKeywordError",
    ()=>SolidityProtectedKeywordError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidAbiParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
} //# sourceMappingURL=abiParameter.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidSignatureError",
    ()=>InvalidSignatureError,
    "InvalidStructSignatureError",
    ()=>InvalidStructSignatureError,
    "UnknownSignatureError",
    ()=>UnknownSignatureError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
} //# sourceMappingURL=signature.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircularReferenceError",
    ()=>CircularReferenceError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class CircularReferenceError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
} //# sourceMappingURL=struct.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidParenthesisError",
    ()=>InvalidParenthesisError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidParenthesisError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
} //# sourceMappingURL=splitParameters.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets {@link parameterCache} cache key namespaced by {@link type} and {@link structs}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`) and ensures different struct definitions with the same name are cached separately.
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @param structs Struct definitions to include in cache key
 * @returns Cache key for {@link parameterCache}
 */ __turbopack_context__.s([
    "getParameterCacheKey",
    ()=>getParameterCacheKey,
    "parameterCache",
    ()=>parameterCache
]);
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return `${param}${structKey}`;
}
const parameterCache = new Map([
    // Unnamed
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    // Named
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    // Indexed
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSolidityKeyword",
    ()=>isSolidityKeyword,
    "isSolidityType",
    ()=>isSolidityType,
    "isValidDataLocation",
    ()=>isValidDataLocation,
    "parseAbiParameter",
    ()=>parseAbiParameter,
    "parseConstructorSignature",
    ()=>parseConstructorSignature,
    "parseErrorSignature",
    ()=>parseErrorSignature,
    "parseEventSignature",
    ()=>parseEventSignature,
    "parseFallbackSignature",
    ()=>parseFallbackSignature,
    "parseFunctionSignature",
    ()=>parseFunctionSignature,
    "parseSignature",
    ()=>parseSignature,
    "splitParameters",
    ()=>splitParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function parseSignature(signature, structs = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunctionSignature"])(signature)) return parseFunctionSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEventSignature"])(signature)) return parseEventSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isErrorSignature"])(signature)) return parseErrorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConstructorSignature"])(signature)) return parseConstructorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFallbackSignature"])(signature)) return parseFallbackSignature(signature);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReceiveSignature"])(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownSignatureError"]({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execFunctionSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"],
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"],
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execEventSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventModifiers"],
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execErrorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execConstructorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execFallbackSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParameterCacheKey"])(param, options?.type, options?.structs);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].has(parameterCacheKey)) return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].get(parameterCacheKey);
    const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleRegex"].test(param);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidParameterError"]({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolidityProtectedKeywordError"]({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else if (match.type === 'address payable') {
        type = 'address';
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownSolidityTypeError"]({
            type
        });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        // Check if resolved `type` is valid if there is a function modifier
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"].has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidFunctionModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidParenthesisError"]({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesRegex"].test(type) || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integerRegex"].test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesRegex"].test(name) || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integerRegex"].test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStructs",
    ()=>parseStructs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execStructSignature"])(signature);
        if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStructSignatureError"]({
            signature
        });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters = [], structs = {}, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleRegex"].test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiTypeParameterError"]({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircularReferenceError"]({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolidityType"])(type)) components.push(abiParameter);
                else throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownTypeError"]({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbi",
    ()=>parseAbi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
function parseAbi(signatures) {
    const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        abi.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbiItem",
    ()=>parseAbiItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature);
    else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature_)) continue;
            abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiItemError"]({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbiParameters",
    ()=>parseAbiParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@3.25.76/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitParameters"])(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiers"]
            }));
        }
    } else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
            const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitParameters"])(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[k], {
                    modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiers"],
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$3$2e$25$2e$76$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiParametersError"]({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
// src/subscribable.ts
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/timeoutManager.ts
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = class {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) {
                console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                    previous: this.#provider,
                    provider
                });
            }
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = false;
        }
    }
    setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addConsumeAwareSignal",
    ()=>addConsumeAwareSignal,
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
    if (a === b) {
        return a;
    }
    if (depth > 500) return b;
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem, depth + 1);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
    let consumed = false;
    let signal;
    Object.defineProperty(object, "signal", {
        enumerable: true,
        get: ()=>{
            signal ??= getSignal();
            if (consumed) {
                return signal;
            }
            consumed = true;
            if (signal.aborted) {
                onCancelled();
            } else {
                signal.addEventListener("abort", onCancelled, {
                    once: true
                });
            }
            return signal;
        }
    });
    return object;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
// src/focusManager.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
// src/notifyManager.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
// src/onlineManager.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
// src/thenable.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    let data;
    promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"])?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
// src/retryer.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
// src/removable.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/query.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...this.#revertState,
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await this.#retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                }
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return this.#retryer.promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        ...successState(action.data, action.dataUpdatedAt),
                        dataUpdateCount: state.dataUpdateCount + 1,
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error",
                        // flag existing data as invalidated if we get a background error
                        // note that "no data" always means stale so we can set unconditionally here
                        isInvalidated: true
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function successState(data, dataUpdatedAt) {
    return {
        data,
        dataUpdatedAt: dataUpdatedAt ?? Date.now(),
        error: null,
        isInvalidated: false,
        status: "success"
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
// src/queryObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const hasResultData = nextResult.data !== void 0;
            const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
            const finalizeThenableIfPossible = (thenable)=>{
                if (isErrorWithoutData) {
                    thenable.reject(nextResult.error);
                } else if (hasResultData) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
// src/infiniteQueryBehavior.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addConsumeAwareSignal"])(object, ()=>context.signal, ()=>cancelled = true);
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteQueryObserver",
    ()=>InfiniteQueryObserver
]);
// src/infiniteQueryObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)");
;
;
var InfiniteQueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"] {
    constructor(client, options){
        super(client, options);
    }
    bindMethods() {
        super.bindMethods();
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(options) {
        super.setOptions({
            ...options,
            behavior: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])()
        });
    }
    getOptimisticResult(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])();
        return super.getOptimisticResult(options);
    }
    fetchNextPage(options) {
        return this.fetch({
            ...options,
            meta: {
                fetchMore: {
                    direction: "forward"
                }
            }
        });
    }
    fetchPreviousPage(options) {
        return this.fetch({
            ...options,
            meta: {
                fetchMore: {
                    direction: "backward"
                }
            }
        });
    }
    createResult(query, options) {
        const { state } = query;
        const parentResult = super.createResult(query, options);
        const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
        const fetchDirection = state.fetchMeta?.fetchMore?.direction;
        const isFetchNextPageError = isError && fetchDirection === "forward";
        const isFetchingNextPage = isFetching && fetchDirection === "forward";
        const isFetchPreviousPageError = isError && fetchDirection === "backward";
        const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
        const result = {
            ...parentResult,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasNextPage"])(options, state.data),
            hasPreviousPage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPreviousPage"])(options, state.data),
            isFetchNextPageError,
            isFetchingNextPage,
            isFetchPreviousPageError,
            isFetchingPreviousPage,
            isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
            isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
        };
        return result;
    }
};
;
 //# sourceMappingURL=infiniteQueryObserver.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
// src/mutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (restored) {
                onContinue();
            } else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                if (this.#mutationCache.config.onMutate) {
                    await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
                }
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
            } catch (e) {
                void Promise.reject(e);
            }
            try {
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
            } catch (e) {
                void Promise.reject(e);
            }
            try {
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
            } catch (e) {
                void Promise.reject(e);
            }
            try {
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
            } catch (e) {
                void Promise.reject(e);
            }
            this.#dispatch({
                type: "error",
                error
            });
            throw error;
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
// src/mutationObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    try {
                        this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                } else if (action?.type === "error") {
                    try {
                        this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "QueryClientProvider.useEffect": ()=>{
            client.mount();
            return ({
                "QueryClientProvider.useEffect": ()=>{
                    client.unmount();
                }
            })["QueryClientProvider.useEffect"];
        }
    }["QueryClientProvider.useEffect"], [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(options.throwOnError, [
        query.state.error,
        query
    ]) : options.throwOnError;
    if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
// src/suspense.ts
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query,
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        query?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery
]);
// src/useInfiniteQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useInfiniteQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteQueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useInfiniteQuery.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (variables, mutateOptions)=>{
            observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/defaultJsonSerializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultJsonSerializer",
    ()=>defaultJsonSerializer
]);
const defaultJsonSerializer = JSON; //# sourceMappingURL=defaultJsonSerializer.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersInstanceToPlainObject",
    ()=>HeadersInstanceToPlainObject,
    "uppercase",
    ()=>uppercase
]);
const uppercase = (str)=>str.toUpperCase();
const HeadersInstanceToPlainObject = (headers)=>{
    const o = {};
    headers.forEach((v, k)=>{
        o[k] = v;
    });
    return o;
}; //# sourceMappingURL=helpers.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/parseArgs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBatchRequestArgs",
    ()=>parseBatchRequestArgs,
    "parseRawRequestArgs",
    ()=>parseRawRequestArgs,
    "parseRawRequestExtendedArgs",
    ()=>parseRawRequestExtendedArgs,
    "parseRequestArgs",
    ()=>parseRequestArgs,
    "parseRequestExtendedArgs",
    ()=>parseRequestExtendedArgs
]);
const parseRequestArgs = (documentOrOptions, variables, requestHeaders)=>{
    return documentOrOptions.document ? documentOrOptions : {
        document: documentOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders)=>{
    return queryOrOptions.query ? queryOrOptions : {
        query: queryOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders)=>{
    return documentsOrOptions.documents ? documentsOrOptions : {
        documents: documentsOrOptions,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseRequestExtendedArgs = (urlOrOptions, document, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.document ? urlOrOptions : {
        url: urlOrOptions,
        document: document,
        variables,
        requestHeaders,
        signal: undefined
    };
};
const parseRawRequestExtendedArgs = (urlOrOptions, query, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.query ? urlOrOptions : {
        url: urlOrOptions,
        query: query,
        variables,
        requestHeaders,
        signal: undefined
    };
}; //# sourceMappingURL=parseArgs.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/resolveRequestDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRequestDocument",
    ()=>resolveRequestDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql@16.13.1/node_modules/graphql/language/parser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql@16.13.1/node_modules/graphql/language/printer.mjs [app-client] (ecmascript)");
;
/**
 * helpers
 */ const extractOperationName = (document)=>{
    let operationName = undefined;
    const operationDefinitions = document.definitions.filter((definition)=>definition.kind === `OperationDefinition`);
    if (operationDefinitions.length === 1) {
        operationName = operationDefinitions[0]?.name?.value;
    }
    return operationName;
};
const resolveRequestDocument = (document)=>{
    if (typeof document === `string`) {
        let operationName = undefined;
        try {
            const parsedDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(document);
            operationName = extractOperationName(parsedDocument);
        } catch (err) {
        // Failed parsing the document, the operationName will be undefined
        }
        return {
            query: document,
            operationName
        };
    }
    const operationName = extractOperationName(document);
    return {
        query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["print"])(document),
        operationName
    };
}; //# sourceMappingURL=resolveRequestDocument.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientError",
    ()=>ClientError
]);
class ClientError extends Error {
    constructor(response, request){
        const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
            response,
            request
        })}`;
        super(message);
        Object.setPrototypeOf(this, ClientError.prototype);
        this.response = response;
        this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === `function`) {
            Error.captureStackTrace(this, ClientError);
        }
    }
    static extractMessage(response) {
        return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
    }
} //# sourceMappingURL=types.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/graphql-ws.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphQLWebSocketClient",
    ()=>GraphQLWebSocketClient
]);
/* eslint-disable */ var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/resolveRequestDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/types.js [app-client] (ecmascript)");
;
;
// import type WebSocket from 'ws'
const CONNECTION_INIT = `connection_init`;
const CONNECTION_ACK = `connection_ack`;
const PING = `ping`;
const PONG = `pong`;
const SUBSCRIBE = `subscribe`;
const NEXT = `next`;
const ERROR = `error`;
const COMPLETE = `complete`;
class GraphQLWebSocketMessage {
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
    get payload() {
        return this._payload;
    }
    constructor(type, payload, id){
        this._type = type;
        this._payload = payload;
        this._id = id;
    }
    get text() {
        const result = {
            type: this.type
        };
        if (this.id != null && this.id != undefined) result.id = this.id;
        if (this.payload != null && this.payload != undefined) result.payload = this.payload;
        return JSON.stringify(result);
    }
    static parse(data, f) {
        const { type, payload, id } = JSON.parse(data);
        return new GraphQLWebSocketMessage(type, f(payload), id);
    }
}
class GraphQLWebSocketClient {
    constructor(socket, { onInit, onAcknowledged, onPing, onPong }){
        this.socketState = {
            acknowledged: false,
            lastRequestId: 0,
            subscriptions: {}
        };
        this.socket = socket;
        socket.addEventListener(`open`, async (e)=>{
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
            socket.send(ConnectionInit(onInit ? await onInit() : null).text);
        });
        socket.addEventListener(`close`, (e)=>{
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
        });
        socket.addEventListener(`error`, (e)=>{
            console.error(e);
        });
        socket.addEventListener(`message`, (e)=>{
            try {
                const message = parseMessage(e.data);
                switch(message.type){
                    case CONNECTION_ACK:
                        {
                            if (this.socketState.acknowledged) {
                                console.warn(`Duplicate CONNECTION_ACK message ignored`);
                            } else {
                                this.socketState.acknowledged = true;
                                if (onAcknowledged) onAcknowledged(message.payload);
                            }
                            return;
                        }
                    case PING:
                        {
                            if (onPing) onPing(message.payload).then((r)=>socket.send(Pong(r).text));
                            else socket.send(Pong(null).text);
                            return;
                        }
                    case PONG:
                        {
                            if (onPong) onPong(message.payload);
                            return;
                        }
                }
                if (!this.socketState.acknowledged) {
                    // Web-socket connection not acknowledged
                    return;
                }
                if (message.id === undefined || message.id === null || !this.socketState.subscriptions[message.id]) {
                    // No subscription identifer or subscription indentifier is not found
                    return;
                }
                const { query, variables, subscriber } = this.socketState.subscriptions[message.id];
                switch(message.type){
                    case NEXT:
                        {
                            if (!message.payload.errors && message.payload.data) {
                                subscriber.next && subscriber.next(message.payload.data);
                            }
                            if (message.payload.errors) {
                                subscriber.error && subscriber.error(new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientError"]({
                                    ...message.payload,
                                    status: 200
                                }, {
                                    query,
                                    variables
                                }));
                            } else {}
                            return;
                        }
                    case ERROR:
                        {
                            subscriber.error && subscriber.error(new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientError"]({
                                errors: message.payload,
                                status: 200
                            }, {
                                query,
                                variables
                            }));
                            return;
                        }
                    case COMPLETE:
                        {
                            subscriber.complete && subscriber.complete();
                            delete this.socketState.subscriptions[message.id];
                            return;
                        }
                }
            } catch (e) {
                // Unexpected errors while handling graphql-ws message
                console.error(e);
                socket.close(1006);
            }
            socket.close(4400, `Unknown graphql-ws message.`);
        });
    }
    makeSubscribe(query, operationName, subscriber, variables) {
        const subscriptionId = (this.socketState.lastRequestId++).toString();
        this.socketState.subscriptions[subscriptionId] = {
            query,
            variables,
            subscriber
        };
        this.socket.send(Subscribe(subscriptionId, {
            query,
            operationName,
            variables
        }).text);
        return ()=>{
            this.socket.send(Complete(subscriptionId).text);
            delete this.socketState.subscriptions[subscriptionId];
        };
    }
    rawRequest(query, variables) {
        return new Promise((resolve, reject)=>{
            let result;
            this.rawSubscribe(query, {
                next: (data, extensions)=>result = {
                        data,
                        extensions
                    },
                error: reject,
                complete: ()=>resolve(result)
            }, variables);
        });
    }
    request(document, variables) {
        return new Promise((resolve, reject)=>{
            let result;
            this.subscribe(document, {
                next: (data)=>result = data,
                error: reject,
                complete: ()=>resolve(result)
            }, variables);
        });
    }
    subscribe(document, subscriber, variables) {
        const { query, operationName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestDocument"])(document);
        return this.makeSubscribe(query, operationName, subscriber, variables);
    }
    rawSubscribe(query, subscriber, variables) {
        return this.makeSubscribe(query, undefined, subscriber, variables);
    }
    ping(payload) {
        this.socket.send(Ping(payload).text);
    }
    close() {
        this.socket.close(1000);
    }
}
GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
;
// Helper functions
function parseMessage(data, f = (a)=>a) {
    const m = GraphQLWebSocketMessage.parse(data, f);
    return m;
}
function ConnectionInit(payload) {
    return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
    return new GraphQLWebSocketMessage(PING, payload, undefined);
}
function Pong(payload) {
    return new GraphQLWebSocketMessage(PONG, payload, undefined);
}
function Subscribe(id, payload) {
    return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
    return new GraphQLWebSocketMessage(COMPLETE, undefined, id);
} //# sourceMappingURL=graphql-ws.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphQLClient",
    ()=>GraphQLClient,
    "batchRequests",
    ()=>batchRequests,
    "default",
    ()=>__TURBOPACK__default__export__,
    "gql",
    ()=>gql,
    "rawRequest",
    ()=>rawRequest,
    "request",
    ()=>request
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$defaultJsonSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/defaultJsonSerializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/parseArgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/resolveRequestDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/cross-fetch@3.2.0/node_modules/cross-fetch/dist/browser-ponyfill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$graphql$2d$ws$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/graphql-request@6.1.0_graphql@16.13.1/node_modules/graphql-request/build/esm/graphql-ws.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Convert the given headers configuration into a plain object.
 */ const resolveHeaders = (headers)=>{
    let oHeaders = {};
    if (headers) {
        if (typeof Headers !== `undefined` && headers instanceof Headers || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ && __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Headers && headers instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Headers) {
            oHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadersInstanceToPlainObject"])(headers);
        } else if (Array.isArray(headers)) {
            headers.forEach(([name, value])=>{
                if (name && value !== undefined) {
                    oHeaders[name] = value;
                }
            });
        } else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * Clean a GraphQL document to send it via a GET query
 */ const cleanQuery = (str)=>str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
/**
 * Create query string for GraphQL request
 */ const buildRequestConfig = (params)=>{
    if (!Array.isArray(params.query)) {
        const params_ = params;
        const search = [
            `query=${encodeURIComponent(cleanQuery(params_.query))}`
        ];
        if (params.variables) {
            search.push(`variables=${encodeURIComponent(params_.jsonSerializer.stringify(params_.variables))}`);
        }
        if (params_.operationName) {
            search.push(`operationName=${encodeURIComponent(params_.operationName)}`);
        }
        return search.join(`&`);
    }
    if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) {
        throw new Error(`Cannot create query with given variable type, array expected`);
    }
    // Batch support
    const params_ = params;
    const payload = params.query.reduce((acc, currentQuery, index)=>{
        acc.push({
            query: cleanQuery(currentQuery),
            variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : undefined
        });
        return acc;
    }, []);
    return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
};
const createHttpMethodFetcher = (method)=>async (params)=>{
        const { url, query, variables, operationName, fetch, fetchOptions, middleware } = params;
        const headers = {
            ...params.headers
        };
        let queryParams = ``;
        let body = undefined;
        if (method === `POST`) {
            body = createRequestBody(query, variables, operationName, fetchOptions.jsonSerializer);
            if (typeof body === `string`) {
                // @ts-expect-error todo
                headers[`Content-Type`] = `application/json`;
            }
        } else {
            // @ts-expect-error todo needs ADT for TS to understand the different states
            queryParams = buildRequestConfig({
                query,
                variables,
                operationName,
                jsonSerializer: fetchOptions.jsonSerializer ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$defaultJsonSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultJsonSerializer"]
            });
        }
        const init = {
            method,
            headers,
            body,
            ...fetchOptions
        };
        let urlResolved = url;
        let initResolved = init;
        if (middleware) {
            const result = await Promise.resolve(middleware({
                ...init,
                url,
                operationName,
                variables
            }));
            const { url: urlNew, ...initNew } = result;
            urlResolved = urlNew;
            initResolved = initNew;
        }
        if (queryParams) {
            urlResolved = `${urlResolved}?${queryParams}`;
        }
        return await fetch(urlResolved, initResolved);
    };
/**
 * GraphQL Client.
 */ class GraphQLClient {
    constructor(url, requestConfig = {}){
        this.url = url;
        this.requestConfig = requestConfig;
        /**
         * Send a GraphQL query to the server.
         */ this.rawRequest = async (...args)=>{
            const [queryOrOptions, variables, requestHeaders] = args;
            const rawRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRawRequestArgs"])(queryOrOptions, variables, requestHeaders);
            const { headers, fetch = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
            const { url } = this;
            if (rawRequestOptions.signal !== undefined) {
                fetchOptions.signal = rawRequestOptions.signal;
            }
            const { operationName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestDocument"])(rawRequestOptions.query);
            return makeRequest({
                url,
                query: rawRequestOptions.query,
                variables: rawRequestOptions.variables,
                headers: {
                    ...resolveHeaders(callOrIdentity(headers)),
                    ...resolveHeaders(rawRequestOptions.requestHeaders)
                },
                operationName,
                fetch,
                method,
                fetchOptions,
                middleware: requestMiddleware
            }).then((response)=>{
                if (responseMiddleware) {
                    responseMiddleware(response);
                }
                return response;
            }).catch((error)=>{
                if (responseMiddleware) {
                    responseMiddleware(error);
                }
                throw error;
            });
        };
    }
    async request(documentOrOptions, ...variablesAndRequestHeaders) {
        const [variables, requestHeaders] = variablesAndRequestHeaders;
        const requestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRequestArgs"])(documentOrOptions, variables, requestHeaders);
        const { headers, fetch = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
        const { url } = this;
        if (requestOptions.signal !== undefined) {
            fetchOptions.signal = requestOptions.signal;
        }
        const { query, operationName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestDocument"])(requestOptions.document);
        return makeRequest({
            url,
            query,
            variables: requestOptions.variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(requestOptions.requestHeaders)
            },
            operationName,
            fetch,
            method,
            fetchOptions,
            middleware: requestMiddleware
        }).then((response)=>{
            if (responseMiddleware) {
                responseMiddleware(response);
            }
            return response.data;
        }).catch((error)=>{
            if (responseMiddleware) {
                responseMiddleware(error);
            }
            throw error;
        });
    }
    // prettier-ignore
    batchRequests(documentsOrOptions, requestHeaders) {
        const batchRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBatchRequestArgs"])(documentsOrOptions, requestHeaders);
        const { headers, ...fetchOptions } = this.requestConfig;
        if (batchRequestOptions.signal !== undefined) {
            fetchOptions.signal = batchRequestOptions.signal;
        }
        const queries = batchRequestOptions.documents.map(({ document })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$resolveRequestDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequestDocument"])(document).query);
        const variables = batchRequestOptions.documents.map(({ variables })=>variables);
        return makeRequest({
            url: this.url,
            query: queries,
            // @ts-expect-error TODO reconcile batch variables into system.
            variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(batchRequestOptions.requestHeaders)
            },
            operationName: undefined,
            fetch: this.requestConfig.fetch ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$3$2e$2$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$browser$2d$ponyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            method: this.requestConfig.method || `POST`,
            fetchOptions,
            middleware: this.requestConfig.requestMiddleware
        }).then((response)=>{
            if (this.requestConfig.responseMiddleware) {
                this.requestConfig.responseMiddleware(response);
            }
            return response.data;
        }).catch((error)=>{
            if (this.requestConfig.responseMiddleware) {
                this.requestConfig.responseMiddleware(error);
            }
            throw error;
        });
    }
    setHeaders(headers) {
        this.requestConfig.headers = headers;
        return this;
    }
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */ setHeader(key, value) {
        const { headers } = this.requestConfig;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-expect-error todo
            headers[key] = value;
        } else {
            this.requestConfig.headers = {
                [key]: value
            };
        }
        return this;
    }
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */ setEndpoint(value) {
        this.url = value;
        return this;
    }
}
const makeRequest = async (params)=>{
    const { query, variables, fetchOptions } = params;
    const fetcher = createHttpMethodFetcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uppercase"])(params.method ?? `post`));
    const isBatchingQuery = Array.isArray(params.query);
    const response = await fetcher(params);
    const result = await getResult(response, fetchOptions.jsonSerializer ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$defaultJsonSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultJsonSerializer"]);
    const successfullyReceivedData = Array.isArray(result) ? !result.some(({ data })=>!data) : Boolean(result.data);
    const successfullyPassedErrorPolicy = Array.isArray(result) || !result.errors || Array.isArray(result.errors) && !result.errors.length || fetchOptions.errorPolicy === `all` || fetchOptions.errorPolicy === `ignore`;
    if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
        // @ts-expect-error TODO fixme
        const { errors: _, ...rest } = Array.isArray(result) ? result : result;
        const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
        const dataEnvelope = isBatchingQuery ? {
            data
        } : data;
        // @ts-expect-error TODO
        return {
            ...dataEnvelope,
            headers: response.headers,
            status: response.status
        };
    } else {
        const errorResult = typeof result === `string` ? {
            error: result
        } : result;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientError"](// @ts-expect-error TODO
        {
            ...errorResult,
            status: response.status,
            headers: response.headers
        }, {
            query,
            variables
        });
    }
};
/**
 * Send a GraphQL Query to the GraphQL server for execution.
 */ const rawRequest = async (...args)=>{
    const [urlOrOptions, query, ...variablesAndRequestHeaders] = args;
    const requestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRawRequestExtendedArgs"])(urlOrOptions, query, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.rawRequest({
        ...requestOptions
    });
};
// prettier-ignore
// eslint-disable-next-line
async function request(urlOrOptions, document, ...variablesAndRequestHeaders) {
    const requestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$parseArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRequestExtendedArgs"])(urlOrOptions, document, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.request({
        ...requestOptions
    });
}
/**
 * Send a batch of GraphQL Document to the GraphQL server for execution.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await batchRequests('https://foo.bar/graphql', [
 * {
 *  query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * },
 * {
 *   query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * }])
 *
 * // You can also pass a GraphQL DocumentNode as query. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await batchRequests('https://foo.bar/graphql', [{ query: gql`...` }])
 * ```
 */ const batchRequests = async (...args)=>{
    const params = parseBatchRequestsArgsExtended(args);
    const client = new GraphQLClient(params.url);
    return client.batchRequests(params);
};
const parseBatchRequestsArgsExtended = (args)=>{
    if (args.length === 1) {
        return args[0];
    } else {
        return {
            url: args[0],
            documents: args[1],
            requestHeaders: args[2],
            signal: undefined
        };
    }
};
const createRequestBody = (query, variables, operationName, jsonSerializer)=>{
    const jsonSerializer_ = jsonSerializer ?? __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$graphql$2d$request$40$6$2e$1$2e$0_graphql$40$16$2e$13$2e$1$2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$defaultJsonSerializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultJsonSerializer"];
    if (!Array.isArray(query)) {
        return jsonSerializer_.stringify({
            query,
            variables,
            operationName
        });
    }
    if (typeof variables !== `undefined` && !Array.isArray(variables)) {
        throw new Error(`Cannot create request body with given variable type, array expected`);
    }
    // Batch support
    const payload = query.reduce((acc, currentQuery, index)=>{
        acc.push({
            query: currentQuery,
            variables: variables ? variables[index] : undefined
        });
        return acc;
    }, []);
    return jsonSerializer_.stringify(payload);
};
const getResult = async (response, jsonSerializer)=>{
    let contentType;
    response.headers.forEach((value, key)=>{
        if (key.toLowerCase() === `content-type`) {
            contentType = value;
        }
    });
    if (contentType && (contentType.toLowerCase().startsWith(`application/json`) || contentType.toLowerCase().startsWith(`application/graphql+json`) || contentType.toLowerCase().startsWith(`application/graphql-response+json`))) {
        return jsonSerializer.parse(await response.text());
    } else {
        return response.text();
    }
};
const callOrIdentity = (value)=>{
    return typeof value === `function` ? value() : value;
};
const gql = (chunks, ...variables)=>{
    return chunks.reduce((acc, chunk, index)=>`${acc}${chunk}${index in variables ? String(variables[index]) : ``}`, ``);
};
;
;
;
const __TURBOPACK__default__export__ = request;
 //# sourceMappingURL=index.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/cross-fetch@3.2.0/node_modules/cross-fetch/dist/browser-ponyfill.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Save global object in a variable
var __global__ = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || ("TURBOPACK compile-time value", "object") !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g;
// Create an object that extends from __global__ without the fetch function
var __globalThis__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
    }
    F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
    return new F();
}();
// Wraps whatwg-fetch with a function scope to hijack the global object
// "globalThis" that's going to be patched
(function(globalThis1) {
    var irrelevant = function(exports1) {
        /* eslint-disable no-prototype-builtins */ var g = typeof globalThis1 !== 'undefined' && globalThis1 || typeof self !== 'undefined' && self || ("TURBOPACK compile-time value", "object") !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g || {};
        var support = {
            searchParams: 'URLSearchParams' in g,
            iterable: 'Symbol' in g && 'iterator' in Symbol,
            blob: 'FileReader' in g && 'Blob' in g && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: 'FormData' in g,
            arrayBuffer: 'ArrayBuffer' in g
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== 'string') {
                name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
                throw new TypeError('Invalid character in header field name: "' + name + '"');
            }
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== 'string') {
                value = String(value);
            }
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) {
                iterator[Symbol.iterator] = function() {
                    return iterator;
                };
            }
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
                headers.forEach(function(value, name) {
                    this.append(name, value);
                }, this);
            } else if (Array.isArray(headers)) {
                headers.forEach(function(header) {
                    if (header.length != 2) {
                        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length);
                    }
                    this.append(header[0], header[1]);
                }, this);
            } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function(name) {
                    this.append(name, headers[name]);
                }, this);
            }
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ', ' + value : value;
        };
        Headers.prototype['delete'] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map){
                if (this.map.hasOwnProperty(name)) {
                    callback.call(thisArg, this.map[name], name, this);
                }
            }
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
            if (body._noBody) return;
            if (body.bodyUsed) {
                return Promise.reject(new TypeError('Already read'));
            }
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
            var encoding = match ? match[1] : 'utf-8';
            reader.readAsText(blob, encoding);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++){
                chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join('');
        }
        function bufferClone(buf) {
            if (buf.slice) {
                return buf.slice(0);
            } else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */ // eslint-disable-next-line no-self-assign
                this.bodyUsed = this.bodyUsed;
                this._bodyInit = body;
                if (!body) {
                    this._noBody = true;
                    this._bodyText = '';
                } else if (typeof body === 'string') {
                    this._bodyText = body;
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                    this._bodyBlob = body;
                } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                    this._bodyFormData = body;
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this._bodyText = body.toString();
                } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                    this._bodyArrayBuffer = bufferClone(body);
                } else {
                    this._bodyText = body = Object.prototype.toString.call(body);
                }
                if (!this.headers.get('content-type')) {
                    if (typeof body === 'string') {
                        this.headers.set('content-type', 'text/plain;charset=UTF-8');
                    } else if (this._bodyBlob && this._bodyBlob.type) {
                        this.headers.set('content-type', this._bodyBlob.type);
                    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    }
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) {
                        return rejected;
                    }
                    if (this._bodyBlob) {
                        return Promise.resolve(this._bodyBlob);
                    } else if (this._bodyArrayBuffer) {
                        return Promise.resolve(new Blob([
                            this._bodyArrayBuffer
                        ]));
                    } else if (this._bodyFormData) {
                        throw new Error('could not read FormData body as blob');
                    } else {
                        return Promise.resolve(new Blob([
                            this._bodyText
                        ]));
                    }
                };
            }
            this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                    var isConsumed = consumed(this);
                    if (isConsumed) {
                        return isConsumed;
                    } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                        return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
                    } else {
                        return Promise.resolve(this._bodyArrayBuffer);
                    }
                } else if (support.blob) {
                    return this.blob().then(readBlobAsArrayBuffer);
                } else {
                    throw new Error('could not read as ArrayBuffer');
                }
            };
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as text');
                } else {
                    return Promise.resolve(this._bodyText);
                }
            };
            if (support.formData) {
                this.formData = function() {
                    return this.text().then(decode);
                };
            }
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            'CONNECT',
            'DELETE',
            'GET',
            'HEAD',
            'OPTIONS',
            'PATCH',
            'POST',
            'PUT',
            'TRACE'
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            if (!(this instanceof Request)) {
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) {
                    throw new TypeError('Already read');
                }
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) {
                    this.headers = new Headers(input.headers);
                }
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else {
                this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || 'same-origin';
            if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || 'GET');
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal || function() {
                if ('AbortController' in g) {
                    var ctrl = new AbortController();
                    return ctrl.signal;
                }
            }();
            this.referrer = null;
            if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                throw new TypeError('Body not allowed for GET or HEAD requests');
            }
            this._initBody(body);
            if (this.method === 'GET' || this.method === 'HEAD') {
                if (options.cache === 'no-store' || options.cache === 'no-cache') {
                    // Search for a '_' parameter in the query string
                    var reParamSearch = /([?&])_=[^&]*/;
                    if (reParamSearch.test(this.url)) {
                        // If it already exists then set the value with the current time
                        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
                    } else {
                        // Otherwise add a new '_' parameter to the end with the current time
                        var reQueryString = /\?/;
                        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
                    }
                }
            }
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split('&').forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split('=');
                    var name = split.shift().replace(/\+/g, ' ');
                    var value = split.join('=').replace(/\+/g, ' ');
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
            // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
            // https://github.com/github/fetch/issues/748
            // https://github.com/zloirock/core-js/issues/751
            preProcessedHeaders.split('\r').map(function(header) {
                return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
            }).forEach(function(line) {
                var parts = line.split(':');
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(':').trim();
                    try {
                        headers.append(key, value);
                    } catch (error) {
                        console.warn('Response ' + error.message);
                    }
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!(this instanceof Response)) {
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            if (!options) {
                options = {};
            }
            this.type = 'default';
            this.status = options.status === undefined ? 200 : options.status;
            if (this.status < 200 || this.status > 599) {
                throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            }
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
            this.headers = new Headers(options.headers);
            this.url = options.url || '';
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 200,
                statusText: ''
            });
            response.ok = false;
            response.status = 0;
            response.type = 'error';
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError('Invalid status code');
            }
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = g.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) {
                    return reject(new exports1.DOMException('Aborted', 'AbortError'));
                }
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                    };
                    // This check if specifically for when a user fetches a file locally from the file system
                    // Only if the status is out of a normal range
                    if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
                        options.status = 200;
                    } else {
                        options.status = xhr.status;
                    }
                    options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                    var body = 'response' in xhr ? xhr.response : xhr.responseText;
                    setTimeout(function() {
                        resolve(new Response(body, options));
                    }, 0);
                };
                xhr.onerror = function() {
                    setTimeout(function() {
                        reject(new TypeError('Network request failed'));
                    }, 0);
                };
                xhr.ontimeout = function() {
                    setTimeout(function() {
                        reject(new TypeError('Network request timed out'));
                    }, 0);
                };
                xhr.onabort = function() {
                    setTimeout(function() {
                        reject(new exports1.DOMException('Aborted', 'AbortError'));
                    }, 0);
                };
                function fixUrl(url) {
                    try {
                        return url === '' && g.location.href ? g.location.href : url;
                    } catch (e) {
                        return url;
                    }
                }
                xhr.open(request.method, fixUrl(request.url), true);
                if (request.credentials === 'include') {
                    xhr.withCredentials = true;
                } else if (request.credentials === 'omit') {
                    xhr.withCredentials = false;
                }
                if ('responseType' in xhr) {
                    if (support.blob) {
                        xhr.responseType = 'blob';
                    } else if (support.arrayBuffer) {
                        xhr.responseType = 'arraybuffer';
                    }
                }
                if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
                    var names = [];
                    Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                        names.push(normalizeName(name));
                        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
                    });
                    request.headers.forEach(function(value, name) {
                        if (names.indexOf(name) === -1) {
                            xhr.setRequestHeader(name, value);
                        }
                    });
                } else {
                    request.headers.forEach(function(value, name) {
                        xhr.setRequestHeader(name, value);
                    });
                }
                if (request.signal) {
                    request.signal.addEventListener('abort', abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) {
                            request.signal.removeEventListener('abort', abortXhr);
                        }
                    };
                }
                xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!g.fetch) {
            g.fetch = fetch;
            g.Headers = Headers;
            g.Request = Request;
            g.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
        return exports1;
    }({});
})(__globalThis__);
// This is a ponyfill, so...
__globalThis__.fetch.ponyfill = true;
delete __globalThis__.fetch.polyfill;
// Choose between native implementation (__global__) or custom implementation (__globalThis__)
var ctx = __global__.fetch ? __global__ : __globalThis__;
exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */ __turbopack_context__.s([
    "getAction",
    ()=>getAction
]);
function getAction(client, actionFn, // Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUnit",
    ()=>getUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/constants/unit.js [app-client] (ecmascript)");
;
function getUnit(unit) {
    if (typeof unit === 'number') return unit;
    if (unit === 'wei') return 0;
    return Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weiUnits"][unit]);
} //# sourceMappingURL=getUnit.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multicall",
    ()=>multicall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/actions/public/multicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
async function multicall(config, parameters) {
    const { allowFailure = true, chainId, contracts, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"], 'multicall');
    return action({
        allowFailure,
        contracts,
        ...rest
    });
} //# sourceMappingURL=multicall.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContract",
    ()=>readContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
function readContract(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
    return action(rest);
} //# sourceMappingURL=readContract.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContracts",
    ()=>readContracts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
;
;
;
async function readContracts(config, parameters) {
    const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
    const contracts = parameters.contracts;
    try {
        const contractsByChainId = {};
        for (const [index, contract] of contracts.entries()){
            const chainId = contract.chainId ?? config.state.chainId;
            if (!contractsByChainId[chainId]) contractsByChainId[chainId] = [];
            contractsByChainId[chainId]?.push({
                contract,
                index
            });
        }
        const promises = ()=>Object.entries(contractsByChainId).map(([chainId, contracts])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"])(config, {
                    ...rest,
                    allowFailure,
                    blockNumber,
                    blockTag,
                    chainId: Number.parseInt(chainId, 10),
                    contracts: contracts.map(({ contract })=>contract)
                }));
        const multicallResults = (await Promise.all(promises())).flat();
        // Reorder the contract results back to the order they were
        // provided in.
        const resultIndexes = Object.values(contractsByChainId).flatMap((contracts)=>contracts.map(({ index })=>index));
        return multicallResults.reduce((results, result, index)=>{
            if (results) results[resultIndexes[index]] = result;
            return results;
        }, []);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw error;
        const promises = ()=>contracts.map((contract)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                    ...contract,
                    blockNumber,
                    blockTag
                }));
        if (allowFailure) return (await Promise.allSettled(promises())).map((result)=>{
            if (result.status === 'fulfilled') return {
                result: result.value,
                status: 'success'
            };
            return {
                error: result.reason,
                result: undefined,
                status: 'failure'
            };
        });
        return await Promise.all(promises());
    }
} //# sourceMappingURL=readContracts.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalance",
    ()=>getBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/viem@2.47.2_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@3.25.76/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
;
;
;
;
;
async function getBalance(config, parameters) {
    const { address, blockNumber, blockTag, chainId, token: tokenAddress, unit = 'ether' } = parameters;
    if (tokenAddress) {
        try {
            return await getTokenBalance(config, {
                balanceAddress: address,
                chainId,
                symbolType: 'string',
                tokenAddress
            });
        } catch (error) {
            // In the chance that there is an error upon decoding the contract result,
            // it could be likely that the contract data is represented as bytes32 instead
            // of a string.
            if (error.name === 'ContractFunctionExecutionError') {
                const balance = await getTokenBalance(config, {
                    balanceAddress: address,
                    chainId,
                    symbolType: 'bytes32',
                    tokenAddress
                });
                const symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(balance.symbol, {
                    dir: 'right'
                }));
                return {
                    ...balance,
                    symbol
                };
            }
            throw error;
        }
    }
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"], 'getBalance');
    const value = await action(blockNumber ? {
        address,
        blockNumber
    } : {
        address,
        blockTag
    });
    const chain = config.chains.find((x)=>x.id === chainId) ?? client.chain;
    return {
        decimals: chain.nativeCurrency.decimals,
        formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit)),
        symbol: chain.nativeCurrency.symbol,
        value
    };
}
async function getTokenBalance(config, parameters) {
    const { balanceAddress, chainId, symbolType, tokenAddress, unit } = parameters;
    const contract = {
        abi: [
            {
                type: 'function',
                name: 'balanceOf',
                stateMutability: 'view',
                inputs: [
                    {
                        type: 'address'
                    }
                ],
                outputs: [
                    {
                        type: 'uint256'
                    }
                ]
            },
            {
                type: 'function',
                name: 'decimals',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: 'uint8'
                    }
                ]
            },
            {
                type: 'function',
                name: 'symbol',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: symbolType
                    }
                ]
            }
        ],
        address: tokenAddress
    };
    const [value, decimals, symbol] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
        allowFailure: false,
        contracts: [
            {
                ...contract,
                functionName: 'balanceOf',
                args: [
                    balanceAddress
                ],
                chainId
            },
            {
                ...contract,
                functionName: 'decimals',
                chainId
            },
            {
                ...contract,
                functionName: 'symbol',
                chainId
            }
        ]
    });
    const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$2_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$3$2e$25$2e$76$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value ?? '0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit ?? decimals));
    return {
        decimals,
        formatted,
        symbol,
        value
    };
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterQueryOptions",
    ()=>filterQueryOptions,
    "hashFn",
    ()=>hashFn,
    "structuralSharing",
    ()=>structuralSharing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+query-core@5.90.20/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function structuralSharing(oldData, newData) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData);
}
function hashFn(queryKey) {
    return JSON.stringify(queryKey, (_, value)=>{
        if (isPlainObject(value)) return Object.keys(value).sort().reduce((result, key)=>{
            result[key] = value[key];
            return result;
        }, {});
        if (typeof value === 'bigint') return value.toString();
        return value;
    });
}
// biome-ignore lint/complexity/noBannedTypes: using
function isPlainObject(value) {
    if (!hasObjectPrototype(value)) {
        return false;
    }
    // If has modified constructor
    const ctor = value.constructor;
    if (typeof ctor === 'undefined') return true;
    // If has modified prototype
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) return false;
    // If constructor does not have an Object-specific method
    // biome-ignore lint/suspicious/noPrototypeBuiltins: using
    if (!prot.hasOwnProperty('isPrototypeOf')) return false;
    // Most likely a plain Object
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}
function filterQueryOptions(options) {
    // destructuring is super fast
    // biome-ignore format: no formatting
    const { // import('@tanstack/query-core').QueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _defaulted, behavior, gcTime, initialData, initialDataUpdatedAt, maxPages, meta, networkMode, queryFn, queryHash, queryKey, queryKeyHashFn, retry, retryDelay, structuralSharing, // import('@tanstack/query-core').InfiniteQueryObserverOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    getPreviousPageParam, getNextPageParam, initialPageParam, // import('@tanstack/react-query').UseQueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _optimisticResults, enabled, notifyOnChangeProps, placeholderData, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus, retryOnMount, select, staleTime, suspense, throwOnError, ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    config, connector, query, ...rest } = options;
    return rest;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalanceQueryKey",
    ()=>getBalanceQueryKey,
    "getBalanceQueryOptions",
    ()=>getBalanceQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBalanceQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            const balance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"])(config, {
                ...parameters,
                address
            });
            return balance ?? null;
        },
        queryKey: getBalanceQueryKey(options)
    };
}
function getBalanceQueryKey(options = {}) {
    return [
        'balance',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/getChainId */ __turbopack_context__.s([
    "getChainId",
    ()=>getChainId
]);
function getChainId(config) {
    return config.state.chainId;
} //# sourceMappingURL=getChainId.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/watchChainId */ __turbopack_context__.s([
    "watchChainId",
    ()=>watchChainId
]);
function watchChainId(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe((state)=>state.chainId, onChange);
} //# sourceMappingURL=watchChainId.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reconnect",
    ()=>reconnect
]);
let isReconnecting = false;
async function reconnect(config, parameters = {}) {
    // If already reconnecting, do nothing
    if (isReconnecting) return [];
    isReconnecting = true;
    config.setState((x)=>({
            ...x,
            status: x.current ? 'reconnecting' : 'connecting'
        }));
    const connectors = [];
    if (parameters.connectors?.length) {
        for (const connector_ of parameters.connectors){
            let connector;
            // "Register" connector if not already created
            if (typeof connector_ === 'function') connector = config._internal.connectors.setup(connector_);
            else connector = connector_;
            connectors.push(connector);
        }
    } else connectors.push(...config.connectors);
    // Try recently-used connectors first
    let recentConnectorId;
    try {
        recentConnectorId = await config.storage?.getItem('recentConnectorId');
    } catch  {}
    const scores = {};
    for (const [, connection] of config.state.connections){
        scores[connection.connector.id] = 1;
    }
    if (recentConnectorId) scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? [
        ...connectors
    ].sort((a, b)=>(scores[a.id] ?? 10) - (scores[b.id] ?? 10)) : connectors;
    // Iterate through each connector and try to connect
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted){
        const provider = await connector.getProvider().catch(()=>undefined);
        if (!provider) continue;
        // If we already have an instance of this connector's provider,
        // then we have already checked it (ie. injected connectors can
        // share the same `window.ethereum` instance, so we don't want to
        // connect to it again).
        if (providers.some((x)=>x === provider)) continue;
        const isAuthorized = await connector.isAuthorized();
        if (!isAuthorized) continue;
        const data = await connector.connect({
            isReconnecting: true
        }).catch(()=>null);
        if (!data) continue;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        config.setState((x)=>{
            const connections = new Map(connected ? x.connections : new Map()).set(connector.uid, {
                accounts: data.accounts,
                chainId: data.chainId,
                connector
            });
            return {
                ...x,
                current: connected ? x.current : connector.uid,
                connections
            };
        });
        connections.push({
            accounts: data.accounts,
            chainId: data.chainId,
            connector
        });
        providers.push(provider);
        connected = true;
    }
    // Prevent overwriting connected status from race condition
    if (config.state.status === 'reconnecting' || config.state.status === 'connecting') {
        // If connecting didn't succeed, set to disconnected
        if (!connected) config.setState((x)=>({
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            }));
        else config.setState((x)=>({
                ...x,
                status: 'connected'
            }));
    }
    isReconnecting = false;
    return connections;
} //# sourceMappingURL=reconnect.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)");
;
function hydrate(config, parameters) {
    const { initialState, reconnectOnMount } = parameters;
    if (initialState && !config._internal.store.persist.hasHydrated()) config.setState({
        ...initialState,
        chainId: config.chains.some((x)=>x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
        connections: reconnectOnMount ? initialState.connections : new Map(),
        status: reconnectOnMount ? 'reconnecting' : 'disconnected'
    });
    return {
        async onMount () {
            if (config._internal.ssr) {
                await config._internal.store.persist.rehydrate();
                if (config._internal.mipd) {
                    config._internal.connectors.setState((connectors)=>{
                        const rdnsSet = new Set();
                        for (const connector of connectors ?? []){
                            if (connector.rdns) {
                                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [
                                    connector.rdns
                                ];
                                for (const rdns of rdnsValues){
                                    rdnsSet.add(rdns);
                                }
                            }
                        }
                        const mipdConnectors = [];
                        const providers = config._internal.mipd?.getProviders() ?? [];
                        for (const provider of providers){
                            if (rdnsSet.has(provider.info.rdns)) continue;
                            const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
                            const connector = config._internal.connectors.setup(connectorFn);
                            mipdConnectors.push(connector);
                        }
                        return [
                            ...connectors,
                            ...mipdConnectors
                        ];
                    });
                }
            }
            if (reconnectOnMount) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconnect"])(config);
            else if (config.storage) // Reset connections that may have been hydrated from storage.
            config.setState((x)=>({
                    ...x,
                    connections: new Map()
                }));
        }
    };
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.22.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`@wagmi/core@${__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances, _BaseError_walk;
;
class BaseError extends Error {
    get docsBaseUrl() {
        return 'https://wagmi.sh/core';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(shortMessage, options = {}){
        super();
        _BaseError_instances.add(this);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiCoreError'
        });
        const details = options.cause instanceof BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
        const docsPath = options.cause instanceof BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...options.metaMessages ? [
                ...options.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (options.cause) this.cause = options.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = options.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
    }
}
_BaseError_instances = new WeakSet(), _BaseError_walk = function _BaseError_walk(err, fn) {
    if (fn?.(err)) return err;
    if (err.cause) return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, err.cause, fn);
    return err;
}; //# sourceMappingURL=base.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/getAccount */ __turbopack_context__.s([
    "getAccount",
    ()=>getAccount
]);
function getAccount(config) {
    const uid = config.state.current;
    const connection = config.state.connections.get(uid);
    const addresses = connection?.accounts;
    const address = addresses?.[0];
    const chain = config.chains.find((chain)=>chain.id === connection?.chainId);
    const status = config.state.status;
    switch(status){
        case 'connected':
            return {
                address: address,
                addresses: addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: true,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'reconnecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: !!address,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: true,
                status
            };
        case 'connecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: false,
                isConnecting: true,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'disconnected':
            return {
                address: undefined,
                addresses: undefined,
                chain: undefined,
                chainId: undefined,
                connector: undefined,
                isConnected: false,
                isConnecting: false,
                isDisconnected: true,
                isReconnecting: false,
                status
            };
    }
} //# sourceMappingURL=getAccount.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Forked from https://github.com/epoberezkin/fast-deep-equal */ __turbopack_context__.s([
    "deepEqual",
    ()=>deepEqual
]);
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;)if (!deepEqual(a[i], b[i])) return false;
            return true;
        }
        if (typeof a.valueOf === 'function' && a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (typeof a.toString === 'function' && a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.hasOwn(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key && !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // biome-ignore lint/suspicious/noSelfCompare: using
    return a !== a && b !== b;
} //# sourceMappingURL=deepEqual.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchAccount",
    ()=>watchAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
;
;
function watchAccount(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config), onChange, {
        equalityFn (a, b) {
            const { connector: aConnector, ...aRest } = a;
            const { connector: bConnector, ...bRest } = b;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(aRest, bRest) && // check connector separately
            aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
        }
    });
} //# sourceMappingURL=watchAccount.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery,
    "useQuery",
    ()=>useQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@tanstack+react-query@5.90.21_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
;
function useQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
}
function useInfiniteQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
} //# sourceMappingURL=query.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hydrate",
    ()=>Hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hydrate.useEffect": ()=>{
            if (!active.current) return;
            if (!config._internal.ssr) return;
            onMount();
            return ({
                "Hydrate.useEffect": ()=>{
                    active.current = false;
                }
            })["Hydrate.useEffect"];
        }
    }["Hydrate.useEffect"], []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiContext",
    ()=>WagmiContext,
    "WagmiProvider",
    ()=>WagmiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.19.5'; //# sourceMappingURL=version.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`wagmi@${__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
;
;
class BaseError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiError'
        });
    }
    get docsBaseUrl() {
        return 'https://wagmi.sh/react';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
} //# sourceMappingURL=base.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiProviderNotFoundError",
    ()=>WagmiProviderNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class WagmiProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiProviderNotFoundError'
        });
    }
} //# sourceMappingURL=context.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConfig(parameters = {}) {
    // biome-ignore lint/correctness/useHookAtTopLevel: false alarm
    const config = parameters.config ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]);
    if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]();
    return config;
} //# sourceMappingURL=useConfig.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChainId",
    ()=>useChainId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useChainId(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChainId.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChainId"])(config, {
                onChange
            })
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"]);
} //# sourceMappingURL=useChainId.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBalance",
    ()=>useBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useBalance(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalanceQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBalance.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStoreWithTracked",
    ()=>useSyncExternalStoreWithTracked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
'use client';
;
;
;
const isPlainObject = (obj)=>typeof obj === 'object' && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]) {
    const trackedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (x)=>x
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"], {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (a, b)=>{
            if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
                for (const key of trackedKeys.current){
                    const equal = isEqual(a[key], b[key]);
                    if (!equal) return false;
                }
                return true;
            }
            return isEqual(a, b);
        }
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyncExternalStoreWithTracked.useMemo": ()=>{
            if (isPlainObject(result)) {
                const trackedResult = {
                    ...result
                };
                let properties = {};
                for (const [key, value] of Object.entries(trackedResult)){
                    properties = {
                        ...properties,
                        [key]: {
                            configurable: false,
                            enumerable: true,
                            get: ({
                                "useSyncExternalStoreWithTracked.useMemo": ()=>{
                                    if (!trackedKeys.current.includes(key)) {
                                        trackedKeys.current.push(key);
                                    }
                                    return value;
                                }
                            })["useSyncExternalStoreWithTracked.useMemo"]
                        }
                    };
                }
                Object.defineProperties(trackedResult, properties);
                return trackedResult;
            }
            return result;
        }
    }["useSyncExternalStoreWithTracked.useMemo"], [
        result
    ]);
} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccount",
    ()=>useAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.20_@types+react@19.2.11_react@19.2.4_types_adcc52402b0e6a2cbfeba141949282c9/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.90.20_@tanstack+react-query@5.90.21_react@19.2.4__@_f24b02f1f69657d951e65f28fb3ad860/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)");
'use client';
;
;
;
function useAccount(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$21_react$40$19$2e$2$2e$4_$5f40$_f24b02f1f69657d951e65f28fb3ad860$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithTracked"])({
        "useAccount.useSyncExternalStoreWithTracked": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
                onChange
            })
    }["useAccount.useSyncExternalStoreWithTracked"], {
        "useAccount.useSyncExternalStoreWithTracked": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$22$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$20_$40$types$2b$react$40$19$2e$2$2e$11_react$40$19$2e$2$2e$4_types_adcc52402b0e6a2cbfeba141949282c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config)
    }["useAccount.useSyncExternalStoreWithTracked"]);
} //# sourceMappingURL=useAccount.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=f1bde__pnpm_6a402d3c._.js.map