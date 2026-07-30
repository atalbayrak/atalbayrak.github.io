import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Page not found — Ahmet Taha Albayrak",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="not-found-page">
          <div className="not-found-grid" aria-hidden="true" />
          <span>404 · ROUTE NOT FOUND</span>
          <h1>
            This path is outside
            <em>the current system.</em>
          </h1>
          <p>
            Return to the portfolio to explore selected AI engineering work,
            experience, and technical expertise.
          </p>
          <Link href="/">
            Return home <span aria-hidden="true">↗</span>
          </Link>
        </main>
      </body>
    </html>
  );
}
