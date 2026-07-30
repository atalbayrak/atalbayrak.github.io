import type { Metadata, Viewport } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";
import { PersonStructuredData } from "../person-structured-data";

const siteUrl = "https://atalbayrak.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yapay Zekâ Mühendisi — Ahmet Taha Albayrak",
  description:
    "Üretim bilgisayarlı görü, çok modlu AI, ajan sistemleri, MLOps ve edge çıkarımı çözümleri geliştiren Yapay Zekâ Mühendisi.",
  authors: [{ name: "Ahmet Taha Albayrak", url: siteUrl }],
  creator: "Ahmet Taha Albayrak",
  keywords: [
    "Yapay Zekâ Mühendisi",
    "Bilgisayarlı Görü",
    "Çok Modlu AI",
    "Ajan Sistemleri",
    "MLOps",
    "Edge AI",
  ],
  alternates: {
    canonical: "/tr/",
    languages: {
      "en-US": "/",
      "tr-TR": "/tr/",
    },
  },
  openGraph: {
    type: "website",
    url: "/tr/",
    title: "Ahmet Taha Albayrak — Yapay Zekâ Mühendisi",
    description:
      "Bilgisayarlı görü, çok modlu sistemler ve otonom ajanlarda üretim odaklı yapay zekâ.",
    siteName: "Ahmet Taha Albayrak",
    locale: "tr_TR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahmet Taha Albayrak — Yapay Zekâ Mühendisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Taha Albayrak — Yapay Zekâ Mühendisi",
    description:
      "Bilgisayarlı görü, çok modlu sistemler ve otonom ajanlarda üretim odaklı yapay zekâ.",
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

export default function TurkishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PersonStructuredData />
        {children}
      </body>
    </html>
  );
}
