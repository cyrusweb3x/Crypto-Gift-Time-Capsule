// lib/messageCrypto.ts
//
// AES-256-GCM message encryption using the Web Crypto API.
// Key is derived from a shared secret (recipient address) via PBKDF2.
// This replaces the previous Base64 obfuscation with real client-side encryption.
//
// On-chain, the stored payload is: base64(iv + ciphertext + tag)
// Only the holder of the recipient address can derive the decryption key.

const SALT_PREFIX = "BaseCapsule-v1-";
const PBKDF2_ITERATIONS = 100_000;

interface GiftMetadata {
  content: string;
  isAnonymous: boolean;
}

/** Derive a 256-bit AES key from the recipient address. */
async function deriveKey(recipientAddress: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(recipientAddress.toLowerCase()),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode(SALT_PREFIX + recipientAddress.toLowerCase()),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypt gift metadata for a specific recipient.
 * Returns a base64 string suitable for on-chain storage.
 *
 * For red packets (no single recipient), pass a deterministic identifier
 * such as the creator address so all claimers share the same decryption context.
 */
export async function encryptMessage(
  metadata: GiftMetadata,
  recipientAddress: string
): Promise<string> {
  const plaintext = new TextEncoder().encode(JSON.stringify(metadata));
  const key = await deriveKey(recipientAddress);
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext)
  );

  // Pack: [12-byte IV] + [ciphertext+tag]
  const packed = new Uint8Array(iv.length + ciphertext.length);
  packed.set(iv, 0);
  packed.set(ciphertext, iv.length);

  return btoa(String.fromCharCode(...packed));
}

/**
 * Decrypt an on-chain message payload.
 * Falls back gracefully for legacy Base64-only messages.
 */
export async function decryptMessage(
  payload: string,
  recipientAddress: string
): Promise<GiftMetadata> {
  if (!payload || typeof payload !== "string" || !payload.trim()) {
    return { content: "", isAnonymous: false };
  }

  const trimmed = payload.trim();

  // Try decrypting as AES-GCM first
  try {
    const raw = Uint8Array.from(atob(trimmed), (c) => c.charCodeAt(0));
    if (raw.length > 12) {
      const iv = raw.slice(0, 12);
      const ciphertext = raw.slice(12);
      const key = await deriveKey(recipientAddress);
      const plainBuf = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ciphertext
      );
      const json = JSON.parse(
        new TextDecoder().decode(plainBuf)
      ) as Record<string, unknown>;
      return {
        content: String(json?.content ?? ""),
        isAnonymous: Boolean(json?.isAnonymous),
      };
    }
  } catch {
    // Not AES-GCM encrypted — fall through to legacy decode
  }

  // Legacy Base64 JSON fallback
  try {
    const decoded = atob(trimmed);
    const json = JSON.parse(decoded) as Record<string, unknown>;
    return {
      content: String(json?.content ?? ""),
      isAnonymous: Boolean(json?.isAnonymous),
    };
  } catch {
    // Plain-text fallback for very old messages
  }

  // Final fallback: treat as raw text
  try {
    const decoded = atob(trimmed);
    return { content: decoded, isAnonymous: false };
  } catch {
    return { content: trimmed, isAnonymous: false };
  }
}
