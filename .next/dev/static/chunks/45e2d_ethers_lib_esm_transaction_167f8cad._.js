(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accessListify",
    ()=>accessListify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
function accessSetify(addr, storageKeys) {
    return {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(addr),
        storageKeys: storageKeys.map((storageKey, index)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
            return storageKey.toLowerCase();
        })
    };
}
function accessListify(value) {
    if (Array.isArray(value)) {
        return value.map((set, index)=>{
            if (Array.isArray(set)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(set.length === 2, "invalid slot set", `value[${index}]`, set);
                return accessSetify(set[0], set[1]);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(set != null && typeof set === "object", "invalid address-slot set", "value", value);
            return accessSetify(set.address, set.storageKeys);
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(value != null && typeof value === "object", "invalid access list", "value", value);
    const result = Object.keys(value).map((addr)=>{
        const storageKeys = value[addr].reduce((accum, storageKey)=>{
            accum[storageKey] = true;
            return accum;
        }, {});
        return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b)=>a.address.localeCompare(b.address));
    return result;
} //# sourceMappingURL=accesslist.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeAddress",
    ()=>computeAddress,
    "recoverAddress",
    ()=>recoverAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/signing-key.js [app-client] (ecmascript)");
;
;
function computeAddress(key) {
    let pubkey;
    if (typeof key === "string") {
        pubkey = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"].computePublicKey(key, false);
    } else {
        pubkey = key.publicKey;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])("0x" + pubkey.substring(4)).substring(26));
}
function recoverAddress(digest, signature) {
    return computeAddress(__TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"].recoverPublicKey(digest, signature));
} //# sourceMappingURL=address.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/authorization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authorizationify",
    ()=>authorizationify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
;
;
;
function authorizationify(auth) {
    return {
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(auth.address),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(auth.nonce != null ? auth.nonce : 0),
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(auth.chainId != null ? auth.chainId : 0),
        signature: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(auth.signature)
    };
} //# sourceMappingURL=authorization.js.map
}),
"[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transaction",
    ()=>Transaction,
    "splitBlobCells",
    ()=>splitBlobCells
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/constants/addresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/sha2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/crypto/signing-key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/rlp-decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/rlp-encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Time capsule/Gift Time Capsule/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/ethers/lib.esm/transaction/address.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const BN_0 = BigInt(0);
const BN_2 = BigInt(2);
const BN_27 = BigInt(27);
const BN_28 = BigInt(28);
const BN_35 = BigInt(35);
const BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const inspect = Symbol.for("nodejs.util.inspect.custom");
const BLOB_SIZE = 4096 * 32;
const CELL_COUNT = 128;
function splitBlobCells(_proof, cellCount) {
    if (cellCount == null) {
        cellCount = CELL_COUNT;
    }
    const cellProofs = [];
    const proof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(_proof);
    const cellSize = proof.length / cellCount;
    for(let i = 0; i < proof.length; i += cellSize){
        cellProofs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(proof.subarray(i, i + cellSize)));
    }
    return cellProofs;
}
function getKzgLibrary(kzg) {
    const blobToKzgCommitment = (blob)=>{
        if ("computeBlobProof" in kzg) {
            // micro-ecc-signer; check for computeBlobProof since this API
            // expects a string while the kzg-wasm below expects a Unit8Array
            if ("blobToKzgCommitment" in kzg && typeof kzg.blobToKzgCommitment === "function") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(kzg.blobToKzgCommitment((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob)));
            }
        } else if ("blobToKzgCommitment" in kzg && typeof kzg.blobToKzgCommitment === "function") {
            // kzg-wasm <0.5.0; blobToKzgCommitment(Uint8Array) => Uint8Array
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(kzg.blobToKzgCommitment(blob));
        }
        // kzg-wasm >= 0.5.0; blobToKZGCommitment(string) => string
        if ("blobToKZGCommitment" in kzg && typeof kzg.blobToKZGCommitment === "function") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(kzg.blobToKZGCommitment((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob)));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported KZG library", "kzg", kzg);
    };
    const computeBlobKzgProof = (blob, commitment)=>{
        // micro-ecc-signer
        if ("computeBlobProof" in kzg && typeof kzg.computeBlobProof === "function") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(kzg.computeBlobProof((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(commitment)));
        }
        // kzg-wasm <0.5.0; computeBlobKzgProof(Uint8Array, Uint8Array) => Uint8Array
        if ("computeBlobKzgProof" in kzg && typeof kzg.computeBlobKzgProof === "function") {
            return kzg.computeBlobKzgProof(blob, commitment);
        }
        // kzg-wasm >= 0.5.0; computeBlobKZGProof(string, string) => string
        if ("computeBlobKZGProof" in kzg && typeof kzg.computeBlobKZGProof === "function") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(kzg.computeBlobKZGProof((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(commitment)));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported KZG library", "kzg", kzg);
    };
    return {
        blobToKzgCommitment,
        computeBlobKzgProof
    };
}
function getVersionedHash(version, hash) {
    let versioned = version.toString(16);
    while(versioned.length < 2){
        versioned = "0" + versioned;
    }
    versioned += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$sha2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(hash).substring(4);
    return "0x" + versioned;
}
function handleAddress(value) {
    if (value === "0x") {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(value);
}
function handleAccessList(value, param) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(value);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, error.message, param, value);
    }
}
function handleAuthorizationList(value, param) {
    try {
        if (!Array.isArray(value)) {
            throw new Error("authorizationList: invalid array");
        }
        const result = [];
        for(let i = 0; i < value.length; i++){
            const auth = value[i];
            if (!Array.isArray(auth)) {
                throw new Error(`authorization[${i}]: invalid array`);
            }
            if (auth.length !== 6) {
                throw new Error(`authorization[${i}]: wrong length`);
            }
            if (!auth[1]) {
                throw new Error(`authorization[${i}]: null address`);
            }
            result.push({
                address: handleAddress(auth[1]),
                nonce: handleUint(auth[2], "nonce"),
                chainId: handleUint(auth[0], "chainId"),
                signature: __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from({
                    yParity: handleNumber(auth[3], "yParity"),
                    r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(auth[4], 32),
                    s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(auth[5], 32)
                })
            });
        }
        return result;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, error.message, param, value);
    }
}
function handleNumber(_value, param) {
    if (_value === "0x") {
        return 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(_value, param);
}
function handleUint(_value, param) {
    if (_value === "0x") {
        return BN_0;
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(_value, param);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
    return value;
}
function formatNumber(_value, name) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(_value, "value");
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(result.length <= 32, `value too large`, `tx.${name}`, value);
    return result;
}
function formatAccessList(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(value).map((set)=>[
            set.address,
            set.storageKeys
        ]);
}
function formatAuthorizationList(value) {
    return value.map((a)=>{
        return [
            formatNumber(a.chainId, "chainId"),
            a.address,
            formatNumber(a.nonce, "nonce"),
            formatNumber(a.signature.yParity, "yParity"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(a.signature.r),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(a.signature._s)
        ];
    });
}
function formatHashes(value, param) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(value), `invalid ${param}`, "value", value);
    for(let i = 0; i < value.length; i++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value[i], 32), "invalid ${ param } hash", `value[${i}]`, value[i]);
    }
    return value;
}
function _parseLegacy(data) {
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
    const tx = {
        type: 0,
        nonce: handleNumber(fields[0], "nonce"),
        gasPrice: handleUint(fields[1], "gasPrice"),
        gasLimit: handleUint(fields[2], "gasLimit"),
        to: handleAddress(fields[3]),
        value: handleUint(fields[4], "value"),
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(fields[5]),
        chainId: BN_0
    };
    // Legacy unsigned transaction
    if (fields.length === 6) {
        return tx;
    }
    const v = handleUint(fields[6], "v");
    const r = handleUint(fields[7], "r");
    const s = handleUint(fields[8], "s");
    if (r === BN_0 && s === BN_0) {
        // EIP-155 unsigned transaction
        tx.chainId = v;
    } else {
        // Compute the EIP-155 chain ID (or 0 for legacy)
        let chainId = (v - BN_35) / BN_2;
        if (chainId < BN_0) {
            chainId = BN_0;
        }
        tx.chainId = chainId;
        // Signed Legacy Transaction
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(chainId !== BN_0 || v === BN_27 || v === BN_28, "non-canonical legacy v", "v", fields[6]);
        tx.signature = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from({
            r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(fields[7], 32),
            s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(fields[8], 32),
            v
        });
    //tx.hash = keccak256(data);
    }
    return tx;
}
function _serializeLegacy(tx, sig) {
    const fields = [
        formatNumber(tx.nonce, "nonce"),
        formatNumber(tx.gasPrice || 0, "gasPrice"),
        formatNumber(tx.gasLimit, "gasLimit"),
        tx.to || "0x",
        formatNumber(tx.value, "value"),
        tx.data
    ];
    let chainId = BN_0;
    if (tx.chainId != BN_0) {
        // A chainId was provided; if non-zero we'll use EIP-155
        chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(tx.chainId, "tx.chainId");
        // We have a chainId in the tx and an EIP-155 v in the signature,
        // make sure they agree with each other
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
    } else if (tx.signature) {
        // No explicit chainId, but EIP-155 have a derived implicit chainId
        const legacy = tx.signature.legacyChainId;
        if (legacy != null) {
            chainId = legacy;
        }
    }
    // Requesting an unsigned transaction
    if (!sig) {
        // We have an EIP-155 transaction (chainId was specified and non-zero)
        if (chainId !== BN_0) {
            fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(chainId));
            fields.push("0x");
            fields.push("0x");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields);
    }
    // @TODO: We should probably check that tx.signature, chainId, and sig
    //        match but that logic could break existing code, so schedule
    //        this for the next major bump.
    // Compute the EIP-155 v
    let v = BigInt(27 + sig.yParity);
    if (chainId !== BN_0) {
        v = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].getChainIdV(chainId, sig.v);
    } else if (BigInt(sig.v) !== v) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "tx.chainId/sig.v mismatch", "sig", sig);
    }
    // Add the signature
    fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(v));
    fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.r));
    fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig._s));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields);
}
function _parseEipSignature(tx, fields) {
    let yParity;
    try {
        yParity = handleNumber(fields[0], "yParity");
        if (yParity !== 0 && yParity !== 1) {
            throw new Error("bad yParity");
        }
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid yParity", "yParity", fields[0]);
    }
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(fields[1], 32);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(fields[2], 32);
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from({
        r,
        s,
        yParity
    });
    tx.signature = signature;
}
function _parseEip1559(data) {
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(data).slice(1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(data));
    const tx = {
        type: 2,
        chainId: handleUint(fields[0], "chainId"),
        nonce: handleNumber(fields[1], "nonce"),
        maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
        maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
        gasPrice: null,
        gasLimit: handleUint(fields[4], "gasLimit"),
        to: handleAddress(fields[5]),
        value: handleUint(fields[6], "value"),
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(fields[7]),
        accessList: handleAccessList(fields[8], "accessList")
    };
    // Unsigned EIP-1559 Transaction
    if (fields.length === 9) {
        return tx;
    }
    //tx.hash = keccak256(data);
    _parseEipSignature(tx, fields.slice(9));
    return tx;
}
function _serializeEip1559(tx, sig) {
    const fields = [
        formatNumber(tx.chainId, "chainId"),
        formatNumber(tx.nonce, "nonce"),
        formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
        formatNumber(tx.gasLimit, "gasLimit"),
        tx.to || "0x",
        formatNumber(tx.value, "value"),
        tx.data,
        formatAccessList(tx.accessList || [])
    ];
    if (sig) {
        fields.push(formatNumber(sig.yParity, "yParity"));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.r));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.s));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        "0x02",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields)
    ]);
}
function _parseEip2930(data) {
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(data).slice(1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(data));
    const tx = {
        type: 1,
        chainId: handleUint(fields[0], "chainId"),
        nonce: handleNumber(fields[1], "nonce"),
        gasPrice: handleUint(fields[2], "gasPrice"),
        gasLimit: handleUint(fields[3], "gasLimit"),
        to: handleAddress(fields[4]),
        value: handleUint(fields[5], "value"),
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(fields[6]),
        accessList: handleAccessList(fields[7], "accessList")
    };
    // Unsigned EIP-2930 Transaction
    if (fields.length === 8) {
        return tx;
    }
    //tx.hash = keccak256(data);
    _parseEipSignature(tx, fields.slice(8));
    return tx;
}
function _serializeEip2930(tx, sig) {
    const fields = [
        formatNumber(tx.chainId, "chainId"),
        formatNumber(tx.nonce, "nonce"),
        formatNumber(tx.gasPrice || 0, "gasPrice"),
        formatNumber(tx.gasLimit, "gasLimit"),
        tx.to || "0x",
        formatNumber(tx.value, "value"),
        tx.data,
        formatAccessList(tx.accessList || [])
    ];
    if (sig) {
        fields.push(formatNumber(sig.yParity, "recoveryParam"));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.r));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.s));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        "0x01",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields)
    ]);
}
function _parseEip4844(data) {
    let fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(data).slice(1));
    let typeName = "3";
    let blobWrapperVersion = null;
    let blobs = null;
    // Parse the network format
    if (fields.length === 4 && Array.isArray(fields[0])) {
        // EIP-4844 format with sidecar
        typeName = "3 (network format)";
        const fBlobs = fields[1], fCommits = fields[2], fProofs = fields[3];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fBlobs), "invalid network format: blobs not an array", "fields[1]", fBlobs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fCommits), "invalid network format: commitments not an array", "fields[2]", fCommits);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fProofs), "invalid network format: proofs not an array", "fields[3]", fProofs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(fBlobs.length === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
        blobs = [];
        for(let i = 0; i < fields[1].length; i++){
            blobs.push({
                data: fBlobs[i],
                commitment: fCommits[i],
                proof: fProofs[i]
            });
        }
        fields = fields[0];
    } else if (fields.length === 5 && Array.isArray(fields[0])) {
        // EIP-7594 format with sidecar
        typeName = "3 (EIP-7594 network format)";
        blobWrapperVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(fields[1]);
        const fBlobs = fields[2], fCommits = fields[3], fProofs = fields[4];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(blobWrapperVersion === 1, `unsupported EIP-7594 network format version: ${blobWrapperVersion}`, "fields[1]", blobWrapperVersion);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fBlobs), "invalid EIP-7594 network format: blobs not an array", "fields[2]", fBlobs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fCommits), "invalid EIP-7594 network format: commitments not an array", "fields[3]", fCommits);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fProofs), "invalid EIP-7594 network format: proofs not an array", "fields[4]", fProofs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(fBlobs.length * CELL_COUNT === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
        blobs = [];
        for(let i = 0; i < fBlobs.length; i++){
            const proof = [];
            for(let j = 0; j < CELL_COUNT; j++){
                proof.push(fProofs[i * CELL_COUNT + j]);
            }
            blobs.push({
                data: fBlobs[i],
                commitment: fCommits[i],
                proof: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(proof)
            });
        }
        fields = fields[0];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fields) && (fields.length === 11 || fields.length === 14), `invalid field count for transaction type: ${typeName}`, "data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(data));
    const tx = {
        type: 3,
        chainId: handleUint(fields[0], "chainId"),
        nonce: handleNumber(fields[1], "nonce"),
        maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
        maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
        gasPrice: null,
        gasLimit: handleUint(fields[4], "gasLimit"),
        to: handleAddress(fields[5]),
        value: handleUint(fields[6], "value"),
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(fields[7]),
        accessList: handleAccessList(fields[8], "accessList"),
        maxFeePerBlobGas: handleUint(fields[9], "maxFeePerBlobGas"),
        blobVersionedHashes: fields[10],
        blobWrapperVersion
    };
    if (blobs) {
        tx.blobs = blobs;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(tx.to != null, `invalid address for transaction type: ${typeName}`, "data", data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(tx.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", data);
    for(let i = 0; i < tx.blobVersionedHashes.length; i++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(tx.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", data);
    }
    // Unsigned EIP-4844 Transaction
    if (fields.length === 11) {
        return tx;
    }
    // @TODO: Do we need to do this? This is only called internally
    // and used to verify hashes; it might save time to not do this
    //tx.hash = keccak256(concat([ "0x03", encodeRlp(fields) ]));
    _parseEipSignature(tx, fields.slice(11));
    return tx;
}
function _serializeEip4844(tx, sig, blobs) {
    const fields = [
        formatNumber(tx.chainId, "chainId"),
        formatNumber(tx.nonce, "nonce"),
        formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
        formatNumber(tx.gasLimit, "gasLimit"),
        tx.to || __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"],
        formatNumber(tx.value, "value"),
        tx.data,
        formatAccessList(tx.accessList || []),
        formatNumber(tx.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
        formatHashes(tx.blobVersionedHashes || [], "blobVersionedHashes")
    ];
    if (sig) {
        fields.push(formatNumber(sig.yParity, "yParity"));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.r));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.s));
        // We have blobs; return the network wrapped format
        if (blobs) {
            // Use EIP-7594
            if (tx.blobWrapperVersion != null) {
                const wrapperVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(tx.blobWrapperVersion);
                const cellProofs = [];
                for (const { proof } of blobs){
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(proof);
                    const cellSize = p.length / CELL_COUNT;
                    for(let i = 0; i < p.length; i += cellSize){
                        cellProofs.push(p.subarray(i, i + cellSize));
                    }
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                    "0x03",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])([
                        fields,
                        wrapperVersion,
                        blobs.map((b)=>b.data),
                        blobs.map((b)=>b.commitment),
                        cellProofs
                    ])
                ]);
            }
            // Fall back onto classic EIP-4844 behavior
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                "0x03",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])([
                    fields,
                    blobs.map((b)=>b.data),
                    blobs.map((b)=>b.commitment),
                    blobs.map((b)=>b.proof)
                ])
            ]);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        "0x03",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields)
    ]);
}
function _parseEip7702(data) {
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeRlp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(data).slice(1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(fields) && (fields.length === 10 || fields.length === 13), "invalid field count for transaction type: 4", "data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(data));
    const tx = {
        type: 4,
        chainId: handleUint(fields[0], "chainId"),
        nonce: handleNumber(fields[1], "nonce"),
        maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
        maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
        gasPrice: null,
        gasLimit: handleUint(fields[4], "gasLimit"),
        to: handleAddress(fields[5]),
        value: handleUint(fields[6], "value"),
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(fields[7]),
        accessList: handleAccessList(fields[8], "accessList"),
        authorizationList: handleAuthorizationList(fields[9], "authorizationList")
    };
    // Unsigned EIP-7702 Transaction
    if (fields.length === 10) {
        return tx;
    }
    _parseEipSignature(tx, fields.slice(10));
    return tx;
}
function _serializeEip7702(tx, sig) {
    const fields = [
        formatNumber(tx.chainId, "chainId"),
        formatNumber(tx.nonce, "nonce"),
        formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
        formatNumber(tx.gasLimit, "gasLimit"),
        tx.to || "0x",
        formatNumber(tx.value, "value"),
        tx.data,
        formatAccessList(tx.accessList || []),
        formatAuthorizationList(tx.authorizationList || [])
    ];
    if (sig) {
        fields.push(formatNumber(sig.yParity, "yParity"));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.r));
        fields.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(sig.s));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        "0x04",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$rlp$2d$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeRlp"])(fields)
    ]);
}
class Transaction {
    #type;
    #to;
    #data;
    #nonce;
    #gasLimit;
    #gasPrice;
    #maxPriorityFeePerGas;
    #maxFeePerGas;
    #value;
    #chainId;
    #sig;
    #accessList;
    #maxFeePerBlobGas;
    #blobVersionedHashes;
    #kzg;
    #blobs;
    #auths;
    #blobWrapperVersion;
    /**
     *  The transaction type.
     *
     *  If null, the type will be automatically inferred based on
     *  explicit properties.
     */ get type() {
        return this.#type;
    }
    set type(value) {
        switch(value){
            case null:
                this.#type = null;
                break;
            case 0:
            case "legacy":
                this.#type = 0;
                break;
            case 1:
            case "berlin":
            case "eip-2930":
                this.#type = 1;
                break;
            case 2:
            case "london":
            case "eip-1559":
                this.#type = 2;
                break;
            case 3:
            case "cancun":
            case "eip-4844":
                this.#type = 3;
                break;
            case 4:
            case "pectra":
            case "eip-7702":
                this.#type = 4;
                break;
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported transaction type", "type", value);
        }
    }
    /**
     *  The name of the transaction type.
     */ get typeName() {
        switch(this.type){
            case 0:
                return "legacy";
            case 1:
                return "eip-2930";
            case 2:
                return "eip-1559";
            case 3:
                return "eip-4844";
            case 4:
                return "eip-7702";
        }
        return null;
    }
    /**
     *  The ``to`` address for the transaction or ``null`` if the
     *  transaction is an ``init`` transaction.
     */ get to() {
        const value = this.#to;
        if (value == null && this.type === 3) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"];
        }
        return value;
    }
    set to(value) {
        this.#to = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(value);
    }
    /**
     *  The transaction nonce.
     */ get nonce() {
        return this.#nonce;
    }
    set nonce(value) {
        this.#nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(value, "value");
    }
    /**
     *  The gas limit.
     */ get gasLimit() {
        return this.#gasLimit;
    }
    set gasLimit(value) {
        this.#gasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value);
    }
    /**
     *  The gas price.
     *
     *  On legacy networks this defines the fee that will be paid. On
     *  EIP-1559 networks, this should be ``null``.
     */ get gasPrice() {
        const value = this.#gasPrice;
        if (value == null && (this.type === 0 || this.type === 1)) {
            return BN_0;
        }
        return value;
    }
    set gasPrice(value) {
        this.#gasPrice = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "gasPrice");
    }
    /**
     *  The maximum priority fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */ get maxPriorityFeePerGas() {
        const value = this.#maxPriorityFeePerGas;
        if (value == null) {
            if (this.type === 2 || this.type === 3) {
                return BN_0;
            }
            return null;
        }
        return value;
    }
    set maxPriorityFeePerGas(value) {
        this.#maxPriorityFeePerGas = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "maxPriorityFeePerGas");
    }
    /**
     *  The maximum total fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */ get maxFeePerGas() {
        const value = this.#maxFeePerGas;
        if (value == null) {
            if (this.type === 2 || this.type === 3) {
                return BN_0;
            }
            return null;
        }
        return value;
    }
    set maxFeePerGas(value) {
        this.#maxFeePerGas = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "maxFeePerGas");
    }
    /**
     *  The transaction data. For ``init`` transactions this is the
     *  deployment code.
     */ get data() {
        return this.#data;
    }
    set data(value) {
        this.#data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(value);
    }
    /**
     *  The amount of ether (in wei) to send in this transactions.
     */ get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "value");
    }
    /**
     *  The chain ID this transaction is valid on.
     */ get chainId() {
        return this.#chainId;
    }
    set chainId(value) {
        this.#chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value);
    }
    /**
     *  If signed, the signature for this transaction.
     */ get signature() {
        return this.#sig || null;
    }
    set signature(value) {
        this.#sig = value == null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(value);
    }
    isValid() {
        const sig = this.signature;
        if (sig && !sig.isValid()) {
            return false;
        }
        const auths = this.authorizationList;
        if (auths) {
            for (const auth of auths){
                if (!auth.signature.isValid()) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     *  The access list.
     *
     *  An access list permits discounted (but pre-paid) access to
     *  bytecode and state variable access within contract execution.
     */ get accessList() {
        const value = this.#accessList || null;
        if (value == null) {
            if (this.type === 1 || this.type === 2 || this.type === 3) {
                // @TODO: in v7, this should assign the value or become
                // a live object itself, otherwise mutation is inconsistent
                return [];
            }
            return null;
        }
        return value;
    }
    set accessList(value) {
        this.#accessList = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(value);
    }
    get authorizationList() {
        const value = this.#auths || null;
        if (value == null) {
            if (this.type === 4) {
                // @TODO: in v7, this should become a live object itself,
                // otherwise mutation is inconsistent
                return [];
            }
        }
        return value;
    }
    set authorizationList(auths) {
        this.#auths = auths == null ? null : auths.map((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorizationify"])(a));
    }
    /**
     *  The max fee per blob gas for Cancun transactions.
     */ get maxFeePerBlobGas() {
        const value = this.#maxFeePerBlobGas;
        if (value == null && this.type === 3) {
            return BN_0;
        }
        return value;
    }
    set maxFeePerBlobGas(value) {
        this.#maxFeePerBlobGas = value == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "maxFeePerBlobGas");
    }
    /**
     *  The BLOb versioned hashes for Cancun transactions.
     */ get blobVersionedHashes() {
        // @TODO: Mutation is inconsistent; if unset, the returned value
        // cannot mutate the object, if set it can
        let value = this.#blobVersionedHashes;
        if (value == null && this.type === 3) {
            return [];
        }
        return value;
    }
    set blobVersionedHashes(value) {
        if (value != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Array.isArray(value), "blobVersionedHashes must be an Array", "value", value);
            value = value.slice();
            for(let i = 0; i < value.length; i++){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value[i], 32), "invalid blobVersionedHash", `value[${i}]`, value[i]);
            }
        }
        this.#blobVersionedHashes = value;
    }
    /**
     *  The BLObs for the Transaction, if any.
     *
     *  If ``blobs`` is non-``null``, then the [[seriailized]]
     *  will return the network formatted sidecar, otherwise it
     *  will return the standard [[link-eip-2718]] payload. The
     *  [[unsignedSerialized]] is unaffected regardless.
     *
     *  When setting ``blobs``, either fully valid [[Blob]] objects
     *  may be specified (i.e. correctly padded, with correct
     *  committments and proofs) or a raw [[BytesLike]] may
     *  be provided.
     *
     *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
     *  be already set. The blob will be correctly padded and the
     *  [[KzgLibrary]] will be used to compute the committment and
     *  proof for the blob.
     *
     *  A BLOb is a sequence of field elements, each of which must
     *  be within the BLS field modulo, so some additional processing
     *  may be required to encode arbitrary data to ensure each 32 byte
     *  field is within the valid range.
     *
     *  Setting this automatically populates [[blobVersionedHashes]],
     *  overwriting any existing values. Setting this to ``null``
     *  does **not** remove the [[blobVersionedHashes]], leaving them
     *  present.
     */ get blobs() {
        if (this.#blobs == null) {
            return null;
        }
        return this.#blobs.map((b)=>Object.assign({}, b));
    }
    set blobs(_blobs) {
        if (_blobs == null) {
            this.#blobs = null;
            return;
        }
        const blobs = [];
        const versionedHashes = [];
        for(let i = 0; i < _blobs.length; i++){
            const blob = _blobs[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBytesLike"])(blob)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.#kzg, "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
                    operation: "set blobs()"
                });
                let data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(blob);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(data.length <= BLOB_SIZE, "blob is too large", `blobs[${i}]`, blob);
                // Pad blob if necessary
                if (data.length !== BLOB_SIZE) {
                    const padded = new Uint8Array(BLOB_SIZE);
                    padded.set(data);
                    data = padded;
                }
                const commit = this.#kzg.blobToKzgCommitment(data);
                const proof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(this.#kzg.computeBlobKzgProof(data, commit));
                blobs.push({
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(data),
                    commitment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(commit),
                    proof
                });
                versionedHashes.push(getVersionedHash(1, commit));
            } else {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob.data);
                const commitment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob.commitment);
                const proof = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(blob.proof);
                blobs.push({
                    data,
                    commitment,
                    proof
                });
                versionedHashes.push(getVersionedHash(1, commitment));
            }
        }
        this.#blobs = blobs;
        this.#blobVersionedHashes = versionedHashes;
    }
    get kzg() {
        return this.#kzg;
    }
    set kzg(kzg) {
        if (kzg == null) {
            this.#kzg = null;
        } else {
            this.#kzg = getKzgLibrary(kzg);
        }
    }
    get blobWrapperVersion() {
        return this.#blobWrapperVersion;
    }
    set blobWrapperVersion(value) {
        this.#blobWrapperVersion = value;
    }
    /**
     *  Creates a new Transaction with default values.
     */ constructor(){
        this.#type = null;
        this.#to = null;
        this.#nonce = 0;
        this.#gasLimit = BN_0;
        this.#gasPrice = null;
        this.#maxPriorityFeePerGas = null;
        this.#maxFeePerGas = null;
        this.#data = "0x";
        this.#value = BN_0;
        this.#chainId = BN_0;
        this.#sig = null;
        this.#accessList = null;
        this.#maxFeePerBlobGas = null;
        this.#blobVersionedHashes = null;
        this.#kzg = null;
        this.#blobs = null;
        this.#auths = null;
        this.#blobWrapperVersion = null;
    }
    /**
     *  The transaction hash, if signed. Otherwise, ``null``.
     */ get hash() {
        if (this.signature == null) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.#getSerialized(true, false));
    }
    /**
     *  The pre-image hash of this transaction.
     *
     *  This is the digest that a [[Signer]] must sign to authorize
     *  this transaction.
     */ get unsignedHash() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.unsignedSerialized);
    }
    /**
     *  The sending address, if signed. Otherwise, ``null``.
     */ get from() {
        if (this.signature == null) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])(this.unsignedHash, this.signature.getCanonical());
    }
    /**
     *  The public key of the sender, if signed. Otherwise, ``null``.
     */ get fromPublicKey() {
        if (this.signature == null) {
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signing$2d$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SigningKey"].recoverPublicKey(this.unsignedHash, this.signature.getCanonical());
    }
    /**
     *  Returns true if signed.
     *
     *  This provides a Type Guard that properties requiring a signed
     *  transaction are non-null.
     */ isSigned() {
        return this.signature != null;
    }
    #getSerialized(signed, sidecar) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!signed || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
            operation: ".serialized"
        });
        const sig = signed ? this.signature : null;
        switch(this.inferType()){
            case 0:
                return _serializeLegacy(this, sig);
            case 1:
                return _serializeEip2930(this, sig);
            case 2:
                return _serializeEip1559(this, sig);
            case 3:
                return _serializeEip4844(this, sig, sidecar ? this.blobs : null);
            case 4:
                return _serializeEip7702(this, sig);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
            operation: ".serialized"
        });
    }
    /**
     *  The serialized transaction.
     *
     *  This throws if the transaction is unsigned. For the pre-image,
     *  use [[unsignedSerialized]].
     */ get serialized() {
        return this.#getSerialized(true, true);
    }
    /**
     *  The transaction pre-image.
     *
     *  The hash of this is the digest which needs to be signed to
     *  authorize this transaction.
     */ get unsignedSerialized() {
        return this.#getSerialized(false, false);
    }
    /**
     *  Return the most "likely" type; currently the highest
     *  supported transaction type.
     */ inferType() {
        const types = this.inferTypes();
        // Prefer London (EIP-1559) over Cancun (BLOb)
        if (types.indexOf(2) >= 0) {
            return 2;
        }
        // Return the highest inferred type
        return types.pop();
    }
    /**
     *  Validates the explicit properties and returns a list of compatible
     *  transaction types.
     */ inferTypes() {
        // Checks that there are no conflicting properties set
        const hasGasPrice = this.gasPrice != null;
        const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
        const hasAccessList = this.accessList != null;
        const hasBlob = this.#maxFeePerBlobGas != null || this.#blobVersionedHashes;
        //if (hasGasPrice && hasFee) {
        //    throw new Error("transaction cannot have gasPrice and maxFeePerGas");
        //}
        if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
                value: this
            });
        }
        //if (this.type === 2 && hasGasPrice) {
        //    throw new Error("eip-1559 transaction cannot have gasPrice");
        //}
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
            value: this
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", {
            value: this
        });
        const types = [];
        // Explicit type
        if (this.type != null) {
            types.push(this.type);
        } else {
            if (this.authorizationList && this.authorizationList.length) {
                types.push(4);
            } else if (hasFee) {
                types.push(2);
            } else if (hasGasPrice) {
                types.push(1);
                if (!hasAccessList) {
                    types.push(0);
                }
            } else if (hasAccessList) {
                types.push(1);
                types.push(2);
            } else if (hasBlob && this.to) {
                types.push(3);
            } else {
                types.push(0);
                types.push(1);
                types.push(2);
                types.push(3);
            }
        }
        types.sort();
        return types;
    }
    /**
     *  Returns true if this transaction is a legacy transaction (i.e.
     *  ``type === 0``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */ isLegacy() {
        return this.type === 0;
    }
    /**
     *  Returns true if this transaction is berlin hardform transaction (i.e.
     *  ``type === 1``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */ isBerlin() {
        return this.type === 1;
    }
    /**
     *  Returns true if this transaction is london hardform transaction (i.e.
     *  ``type === 2``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */ isLondon() {
        return this.type === 2;
    }
    /**
     *  Returns true if this transaction is an [[link-eip-4844]] BLOB
     *  transaction.
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */ isCancun() {
        return this.type === 3;
    }
    /**
     *  Create a copy of this transaciton.
     */ clone() {
        return Transaction.from(this);
    }
    /**
     *  Return a JSON-friendly object.
     */ toJSON() {
        const s = (v)=>{
            if (v == null) {
                return null;
            }
            return v.toString();
        };
        return {
            type: this.type,
            to: this.to,
            //            from: this.from,
            data: this.data,
            nonce: this.nonce,
            gasLimit: s(this.gasLimit),
            gasPrice: s(this.gasPrice),
            maxPriorityFeePerGas: s(this.maxPriorityFeePerGas),
            maxFeePerGas: s(this.maxFeePerGas),
            value: s(this.value),
            chainId: s(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList
        };
    }
    [inspect]() {
        return this.toString();
    }
    toString() {
        const output = [];
        const add = (key)=>{
            let value = this[key];
            if (typeof value === "string") {
                value = JSON.stringify(value);
            }
            output.push(`${key}: ${value}`);
        };
        if (this.type) {
            add("type");
        }
        add("to");
        add("data");
        add("nonce");
        add("gasLimit");
        add("value");
        if (this.chainId != null) {
            add("chainId");
        }
        if (this.signature) {
            add("from");
            output.push(`signature: ${this.signature.toString()}`);
        }
        // @TODO: accessList
        // @TODO: blobs (might make output huge; maybe just include a flag?)
        const auths = this.authorizationList;
        if (auths) {
            const outputAuths = [];
            for (const auth of auths){
                const o = [];
                o.push(`address: ${JSON.stringify(auth.address)}`);
                if (auth.nonce != null) {
                    o.push(`nonce: ${auth.nonce}`);
                }
                if (auth.chainId != null) {
                    o.push(`chainId: ${auth.chainId}`);
                }
                if (auth.signature) {
                    o.push(`signature: ${auth.signature.toString()}`);
                }
                outputAuths.push(`Authorization { ${o.join(", ")} }`);
            }
            output.push(`authorizations: [ ${outputAuths.join(", ")} ]`);
        }
        return `Transaction { ${output.join(", ")} }`;
    }
    /**
     *  Create a **Transaction** from a serialized transaction or a
     *  Transaction-like object.
     */ static from(tx) {
        if (tx == null) {
            return new Transaction();
        }
        if (typeof tx === "string") {
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(tx);
            if (payload[0] >= 0x7f) {
                return Transaction.from(_parseLegacy(payload));
            }
            switch(payload[0]){
                case 1:
                    return Transaction.from(_parseEip2930(payload));
                case 2:
                    return Transaction.from(_parseEip1559(payload));
                case 3:
                    return Transaction.from(_parseEip4844(payload));
                case 4:
                    return Transaction.from(_parseEip7702(payload));
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                operation: "from"
            });
        }
        const result = new Transaction();
        if (tx.type != null) {
            result.type = tx.type;
        }
        if (tx.to != null) {
            result.to = tx.to;
        }
        if (tx.nonce != null) {
            result.nonce = tx.nonce;
        }
        if (tx.gasLimit != null) {
            result.gasLimit = tx.gasLimit;
        }
        if (tx.gasPrice != null) {
            result.gasPrice = tx.gasPrice;
        }
        if (tx.maxPriorityFeePerGas != null) {
            result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
        }
        if (tx.maxFeePerGas != null) {
            result.maxFeePerGas = tx.maxFeePerGas;
        }
        if (tx.maxFeePerBlobGas != null) {
            result.maxFeePerBlobGas = tx.maxFeePerBlobGas;
        }
        if (tx.data != null) {
            result.data = tx.data;
        }
        if (tx.value != null) {
            result.value = tx.value;
        }
        if (tx.chainId != null) {
            result.chainId = tx.chainId;
        }
        if (tx.signature != null) {
            result.signature = __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(tx.signature);
        }
        if (tx.accessList != null) {
            result.accessList = tx.accessList;
        }
        if (tx.authorizationList != null) {
            result.authorizationList = tx.authorizationList;
        }
        // This will get overwritten by blobs, if present
        if (tx.blobVersionedHashes != null) {
            result.blobVersionedHashes = tx.blobVersionedHashes;
        }
        // Make sure we assign the kzg before assigning blobs, which
        // require the library in the event raw blob data is provided.
        if (tx.kzg != null) {
            result.kzg = tx.kzg;
        }
        if (tx.blobWrapperVersion != null) {
            result.blobWrapperVersion = tx.blobWrapperVersion;
        }
        if (tx.blobs != null) {
            result.blobs = tx.blobs;
        }
        if (tx.hash != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(result.isSigned(), "unsigned transaction cannot define '.hash'", "tx", tx);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(result.hash === tx.hash, "hash mismatch", "tx", tx);
        }
        if (tx.from != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(result.isSigned(), "unsigned transaction cannot define '.from'", "tx", tx);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Time__capsule$2f$Gift__Time__Capsule$2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
        }
        return result;
    }
} //# sourceMappingURL=transaction.js.map
}),
]);

//# sourceMappingURL=45e2d_ethers_lib_esm_transaction_167f8cad._.js.map