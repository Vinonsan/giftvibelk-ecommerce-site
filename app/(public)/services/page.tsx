import type { Metadata } from "next";
import PageChildren from "./PageChildren";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Giftvibelk services including curated gift boxes, custom gift planning, and thoughtful delivery coordination across Sri Lanka.",
  keywords: [
    "gift services sri lanka",
    "curated gift boxes sri lanka",
    "custom gift planning sri lanka",
    "gift delivery services sri lanka",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Giftvibelk Services | Gifting Solutions in Sri Lanka",
    description:
      "See how Giftvibelk helps with curated gifts, custom orders, and smooth delivery experiences across Sri Lanka.",
    url: "/services",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giftvibelk Services | Gifting Solutions in Sri Lanka",
    description:
      "Browse Giftvibelk services for curated gifting, custom orders, and premium delivery support.",
  },
};

export default function ServicesPage() {
  return <PageChildren />;
}
