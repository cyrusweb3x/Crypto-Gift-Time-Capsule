import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const baseUrl = "https://www.basecapsule.space";
  const ogImage = `${baseUrl}/og-image.png`;

  return {
    title: "🧧 You've received a Red Packet! — Base Capsule",
    description:
      "Someone sent you a time-locked crypto Red Packet on Base. Open it now!",
    openGraph: {
      title: "🧧 You've received a Red Packet!",
      description:
        "Someone sent you a crypto gift on Base Capsule. Tap to claim your share!",
      url: `${baseUrl}/packet/${params.id}`,
      siteName: "Base Capsule",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Base Capsule Red Packet",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "🧧 You've received a Red Packet!",
      description:
        "Someone sent you a crypto gift on Base Capsule. Tap to claim your share!",
      images: [ogImage],
    },
    other: {
      // Farcaster / Warpcast frame meta
      "fc:frame": "vNext",
      "fc:frame:image": ogImage,
      "fc:frame:button:1": "🧧 Claim Red Packet",
      "fc:frame:post_url": `${baseUrl}/packet/${params.id}`,
    },
  };
}

export default function PacketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}