import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";

const siteUrl = "https://atalbayrak.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ahmet Taha Albayrak — AI Engineer & Co-Founder",
  description:
    "AI Engineer and Co-Founder specializing in computer vision, multimodal generative AI, agentic systems, MLOps and edge inference.",
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
    title: "Ahmet Taha Albayrak — AI Engineer & Co-Founder",
    description:
      "Building production AI across computer vision, multimodal systems and autonomous agents.",
    siteName: "Ahmet Taha Albayrak",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1707,
        height: 907,
        alt: "Ahmet Taha Albayrak — AI Engineer and Co-Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Taha Albayrak — AI Engineer & Co-Founder",
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
