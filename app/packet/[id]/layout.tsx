import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = "https://www.basecapsule.space";
  const ogImage = `${baseUrl}/og-image.png`;
  const packetUrl = `${baseUrl}/packet/${params.id}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "🧧 You received a Red Packet! — Base Capsule",
    description: "Someone sent you a crypto Red Packet on Base. Open it now!",
    openGraph: {
      title: "🧧 You received a Red Packet!",
      description: "Someone sent you a crypto gift on Base Capsule. Tap to claim your share!",
      url: packetUrl,
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
      title: "🧧 You received a Red Packet!",
      description: "Someone sent you a crypto gift on Base Capsule. Tap to claim your share!",
      images: [ogImage],
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