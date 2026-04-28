import type { Metadata } from "next";
import PageChildren from "./PageChildren";

const pageOgImage = "/logo/logo.png";

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
    title: "Contact Giftvibelk",
    description:
      "Reach Giftvibelk for order help, custom gifting requests, and delivery support across Sri Lanka.",
    url: "/contact",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: pageOgImage,
        width: 1200,
        height: 630,
        alt: "Contact Giftvibelk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Giftvibelk",
    description:
      "Speak with Giftvibelk about orders, delivery, and personalized gifting support.",
    images: [pageOgImage],
  },
};

const ContactPage = () => {
  return <PageChildren />;
};

export default ContactPage;
