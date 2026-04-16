import type { Metadata } from "next";
import { defaultOpenGraph, defaultTwitter } from "@/app/lib/seo";
import PageChildren from "./PageChildren";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Giftvibelk for gifting support, product inquiries, delivery details, and custom order requests in Sri Lanka.",
  keywords: [
    "contact giftvibelk",
    "gift delivery sri lanka contact",
    "custom gifts sri lanka contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: "Contact Giftvibelk",
    description:
      "Reach Giftvibelk for order help, custom gifting requests, and delivery support across Sri Lanka.",
    url: "/contact",
  },
  twitter: {
    ...defaultTwitter,
    title: "Contact Giftvibelk",
    description:
      "Speak with Giftvibelk about orders, delivery, and personalized gifting support.",
  },
};

const ContactPage = () => {
  return <PageChildren />;
}

export default ContactPage;