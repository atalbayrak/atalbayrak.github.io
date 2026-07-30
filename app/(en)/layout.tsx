import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";

const siteUrl = "https://atalbayrak.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Engineer — Ahmet Taha Albayrak",
  description:
    "AI Engineer specializing in computer vision, multimodal generative AI, agentic systems, MLOps and edge inference.",
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
      "Building production AI across computer vision, multimodal systems and autonomous agents.",
    siteName: "Ahmet Taha Albayrak",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Ahmet Taha Albayrak — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer — Ahmet Taha Albayrak",
    description:
      "Building production AI across computer vision, multimodal systems and autonomous agents.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
