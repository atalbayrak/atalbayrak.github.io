import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";

const siteUrl = "https://atalbayrak.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yapay Zekâ Mühendisi — Ahmet Taha Albayrak",
  description:
    "Bilgisayarlı görü, çok modlu üretken yapay zekâ, ajan sistemleri, MLOps ve edge çıkarımı alanlarında uzman yapay zekâ mühendisi.",
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
        width: 1730,
        height: 909,
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
  },
};

export default function TurkishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
