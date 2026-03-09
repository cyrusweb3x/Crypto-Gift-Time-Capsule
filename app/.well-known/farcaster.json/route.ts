// app/.well-known/farcaster.json/route.ts

export async function GET() {
  const manifest = {
    // এই accountAssociation অংশটি আপনাকে Base Build Verification থেকে জেনারেট করে এখানে বসাতে হবে।
    // ওয়েবসাইট লাইভ করার পর Base Build সাইট থেকে জেনারেট করে কোড এনে জাস্ট এই খালি ঘরটি পূরণ করবেন। 
    "accountAssociation": {
      "header": "",
      "payload": "",
      "signature": ""
    },
    "miniapp": {
      "version": "1",
      "name": "CryptoGift Capsule",
      "homeUrl": "https://basecapsule.space",
      "iconUrl": "https://basecapsule.space/icon.png",
      "splashImageUrl": "https://basecapsule.space/splash.png",
      "splashBackgroundColor": "#0A0A0B",
      "primaryCategory": "finance",
      "tags": ["crypto", "gift", "miniapp", "baseapp"],
      "heroImageUrl": "https://basecapsule.space/og-image.png",
      "tagline": "Time-locked gifting secured on Base."
    }
  };

  return Response.json(manifest);
}