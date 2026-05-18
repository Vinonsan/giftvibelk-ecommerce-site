import type { Metadata } from "next";

import "./globals.css";

import { StoreProvider } from "@/lib/redux/hooks";
import { getJsonLd, siteConfig } from "@/lib/seo";

const jsonLd = JSON.stringify(getJsonLd()).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GiftVibeLK | Online Gift Shop & Gift Delivery in Sri Lanka",
    template: "%s | GiftVibeLK",
  },
  description:
    "Shop birthday gifts, flower delivery, surprise boxes, cakes, and personalized gifts online in Sri Lanka with GiftVibeLK.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Gift ecommerce",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GiftVibeLK | Online Gift Shop & Gift Delivery in Sri Lanka",
    description:
      "Curated gift boxes, birthday gifts, flower delivery, cakes, surprise boxes, and personalized gifts across Sri Lanka.",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/images/birthday.png",
        width: 1200,
        height: 630,
        alt: "GiftVibeLK online gift delivery in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GiftVibeLK | Online Gift Shop & Gift Delivery in Sri Lanka",
    description:
      "Birthday gifts, flower delivery, surprise boxes, cakes, and personalized gifts in Sri Lanka.",
    images: ["/images/birthday.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
