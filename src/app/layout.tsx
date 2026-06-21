import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bincpremix.com.au"),
  title: {
    default: "BINC Premix Concrete | Launceston Concreting Specialists",
    template: "%s | BINC Premix Concrete",
  },
  description:
    "BINC Premix Concrete delivers quality residential and commercial concreting across Launceston and Northern Tasmania. Driveways, slabs, commercial floors and premix supply. Call 03 6331 0000.",
  keywords: [
    "premix concrete Launceston",
    "concreting Launceston",
    "concrete contractor Tasmania",
    "residential concreting Launceston",
    "commercial concreting Tasmania",
    "exposed aggregate driveway Launceston",
    "concrete slab Launceston",
    "driveway concreting Launceston",
  ],
  authors: [{ name: "BINC Premix Concrete" }],
  creator: "BINC Premix Concrete",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.bincpremix.com.au",
    siteName: "BINC Premix Concrete",
    title: "BINC Premix Concrete | Launceston Concreting Specialists",
    description:
      "Quality residential and commercial concreting across Launceston and Northern Tasmania. Call 03 6331 0000.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BINC Premix Concrete – Launceston Concreting Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BINC Premix Concrete | Launceston Concreting Specialists",
    description: "Quality residential and commercial concreting across Launceston and Northern Tasmania.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
