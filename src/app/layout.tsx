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
    default: "BINC Premix Concrete | Sydney's Trusted Concreting Specialists",
    template: "%s | BINC Premix Concrete",
  },
  description:
    "BINC Premix Concrete delivers premium residential, commercial and civil concreting across Greater Sydney. Expert premix supply, professional placement, and guaranteed quality. Call 1800 246 269.",
  keywords: [
    "premix concrete Sydney",
    "concreting contractor Sydney",
    "residential concreting",
    "commercial concreting",
    "civil concreting",
    "concrete supply Sydney",
    "exposed aggregate driveway",
    "concrete slab",
    "driveway concreting",
  ],
  authors: [{ name: "BINC Premix Concrete" }],
  creator: "BINC Premix Concrete",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.bincpremix.com.au",
    siteName: "BINC Premix Concrete",
    title: "BINC Premix Concrete | Sydney's Trusted Concreting Specialists",
    description:
      "Premium residential, commercial & civil concreting across Greater Sydney. Professional premix supply and expert placement. Call 1800 246 269.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BINC Premix Concrete – Sydney Concreting Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BINC Premix Concrete | Sydney's Trusted Concreting Specialists",
    description: "Premium residential, commercial & civil concreting across Greater Sydney.",
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
