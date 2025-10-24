// app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Orbitron, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nelo.app"),
  title: {
    default: "Nelo - AI-Powered Crypto Payments via WhatsApp",
    template: "%s | Nelo",
  },
  description:
    "Send and receive crypto instantly through WhatsApp with Nelo. Generate virtual cards, access multiple blockchains, and enjoy seamless crypto-to-fiat conversion.",
  keywords: [
    "crypto payments",
    "WhatsApp crypto",
    "cryptocurrency",
    "virtual card",
    "crypto on-ramp",
    "crypto off-ramp",
    "instant crypto transfer",
    "AI payments",
    "blockchain",
    "digital wallet",
    "virtual debit card",
    "crypto wallet",
    "WhatsApp payments",
    "cross-border payments",
    "cryptocurrency exchange",
  ],
  authors: [{ name: "Nelo", url: "https://nelo.app" }],
  creator: "Nelo",
  publisher: "Nelo Technologies",
  applicationName: "Nelo",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  category: "finance",
  openGraph: {
    title: "Nelo - AI-Powered Crypto Payments via WhatsApp",
    description:
      "Send and receive crypto instantly through WhatsApp with Nelo. Generate virtual cards, access multiple blockchains, and enjoy seamless crypto-to-fiat conversion.",
    url: "https://nelo.app",
    siteName: "Nelo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nelo - AI-Powered Crypto Payments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelo - AI-Powered Crypto Payments via WhatsApp",
    description:
      "Send and receive crypto instantly through WhatsApp with Nelo. Generate virtual cards, access multiple blockchains, and enjoy seamless crypto-to-fiat conversion.",
    site: "@neloapp",
    creator: "@neloapp",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
      notranslate: false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    other: {
      yandex: "your-yandex-verification-code",
    },
  },
  alternates: {
    canonical: "https://nelo.app",
    languages: {
      "en-US": "https://nelo.app",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <html lang="en">
        <head>
          <link rel="canonical" href="https://yourdomain.com" />
        </head>
        <body
          className={`${spaceGrotesk.variable} ${orbitron.variable} ${bebasNeue.variable} font-space-grotesk antialiased`}
        >
          {children}
        </body>
      </html>
    </Suspense>
  );
}
