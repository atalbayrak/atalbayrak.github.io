import type { Metadata, Viewport } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";
import { PersonStructuredData } from "../person-structured-data";

const siteUrl = "https://atalbayrak.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Engineer — Ahmet Taha Albayrak",
  description:
    "AI Engineer building production computer vision, multimodal AI, agentic systems, MLOps, and edge inference solutions.",
  authors: [{ name: "Ahmet Taha Albayrak", url: siteUrl }],
  creator: "Ahmet Taha Albayrak",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "Multimodal AI",
    "Agentic AI",
    "MLOps",
    "Edge AI",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "tr-TR": "/tr/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI Engineer — Ahmet Taha Albayrak",
    description:
      "Building production computer vision, multimodal AI, and agentic systems.",
    siteName: "Ahmet Taha Albayrak",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahmet Taha Albayrak — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer — Ahmet Taha Albayrak",
    description:
      "Building production computer vision, multimodal AI, and agentic systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PersonStructuredData />
        {children}
      </body>
    </html>
  );
}
