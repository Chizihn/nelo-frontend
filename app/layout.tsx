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
  title: "Nelo",
  description: "Nelo Virtual card",
  keywords: [
    "crypto",
    "WhatsApp",
    "cryptocurrency",
    "buy crypto",
    "sell crypto",
    "virtual card",
    "global access",
  ],
  authors: [{ name: "Zent" }],
  openGraph: {
    title: "Nelo",
    description: "Nelo Virtual card ",
    type: "website",
    locale: "en_US",
    siteName: "Zent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelo",
    description: "Nelo Virtual card ",
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
    },
  },
  verification: {
    google: "your-google-verification-code",
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
