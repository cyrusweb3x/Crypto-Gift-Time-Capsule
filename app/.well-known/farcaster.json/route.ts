// app/.well-known/farcaster.json/route.ts

export async function GET() {
  const manifest = {
    "accountAssociation": {
      "header": "eyJmaWQiOjI4Njk4NDAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhhYTZFQjQ3QzQzZTljOUMxYmM5RDRGNzg0NTlmMjUwQTY2YjVkODdlIn0",
      "payload": "eyJkb21haW4iOiJiYXNlY2Fwc3VsZS5zcGFjZSJ9",
      "signature": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABdNJ0-UQ7Y57WmrhNdkAI58r8HI8gZQhDtUGxdbisaOFwMAUm0q01pxMIVW25VLcwO4Hi4e0t0-JZTp9PqJrqjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiQ19wcXBFNER0U2FqMDQ5S3ZkMFhWZ3pkTUhGUjN1TjJOU2U1blBxZDBQQSIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    "miniapp": {
      "version": "1",
      "name": "CryptoGift Capsule",
      "homeUrl": "https://basecapsule.space",
      "iconUrl": "https://basecapsule.space/placeholder-logo.png",
      "splashImageUrl": "https://basecapsule.space/placeholder-logo.png",
      "splashBackgroundColor": "#0A0A0B",
      "primaryCategory": "finance",
      "tags": ["crypto", "gift", "miniapp", "baseapp"],
      "heroImageUrl": "https://basecapsule.space/og-image.png",
      "tagline": "Time-locked gifting secured on Base."
    }
  };

  return Response.json(manifest);
}