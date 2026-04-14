import type { Metadata } from "next";
import Footer from "./components/layouts/Footer";
import { Geist } from "next/font/google";
import Header from "./components/layouts/Header";
import "./globals.css";
import { defaultOpenGraph, defaultTwitter, siteConfig } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Giftvibelk",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-LK" className={`${geistSans.variable} h-full w-full antialiased`}>
     
      <body suppressHydrationWarning className="flex flex-col">
         <Header />
        <main className="flex flex-col gap-12 px-8 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
