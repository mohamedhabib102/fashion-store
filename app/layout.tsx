import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProviderNextAuth from "@/utils/ProviderNextAuth";


const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "XIV Fashion Store | Premium Clothing & Collections",
    template: "%s | XIV Fashion Store"
  },
  description: "Explore our latest premium fashion collections. High-quality apparel for men, women, and kids with modern designs and classic styles.",
  keywords: ["Fashion", "Clothing", "Premium Store", "Online Shopping", "Men's Fashion", "Women's Fashion", "Kids' Clothing"],
  authors: [{ name: "XIV Fashion" }],
  creator: "XIV Fashion Team",
  publisher: "XIV Fashion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "XIV Fashion Store | Premium Clothing & Collections",
    description: "Discover exclusive premium clothing and the latest fashion trends. Elevate your wardrobe with XIV.",
    url: '/',
    siteName: "XIV Fashion Store",
    images: [
      {
        url: '/logo.png', // يتم اختياره كصورة افتراضية للمشاركة
        width: 800,
        height: 600,
        alt: 'XIV Fashion Store Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "XIV Fashion Store",
    description: "Exclusive premium clothing and fashion trends.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} antialiased`}
      >
        <ProviderNextAuth>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </ProviderNextAuth>
      </body>
    </html>
  );
}
