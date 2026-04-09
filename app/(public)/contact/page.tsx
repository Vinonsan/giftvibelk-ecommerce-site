import type { Metadata } from "next";
import PageChildren from "./PageChildren";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Giftvibelk for custom gift orders, delivery coordination, and support for curated gift experiences in Sri Lanka.",
  keywords: [
    "contact giftvibelk",
    "gift order contact sri lanka",
    "custom gift inquiry sri lanka",
    "gift delivery support sri lanka",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Giftvibelk | Gift Support in Sri Lanka",
    description:
      "Get in touch with Giftvibelk for custom orders, curated gifting support, and delivery coordination.",
    url: "/contact",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Giftvibelk | Gift Support in Sri Lanka",
    description:
      "Reach out to Giftvibelk for custom gifting help, thoughtful recommendations, and delivery support.",
  },
};

export default function ContactPage() {
  return <PageChildren />;
}
