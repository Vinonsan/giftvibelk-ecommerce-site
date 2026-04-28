import type { Metadata } from "next";
import PageChildren from "./PageChildren";

const pageOgImage = "/logo/logo.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Giftvibelk, our curated gifting approach, and how we help customers in Sri Lanka celebrate every meaningful moment.",
  keywords: [
    "about giftvibelk",
    "gift shop sri lanka about",
    "online gifting service sri lanka",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Giftvibelk",
    description:
      "Discover the story behind Giftvibelk and our mission to deliver memorable gifts across Sri Lanka.",
    url: "/about",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: pageOgImage,
        width: 1200,
        height: 630,
        alt: "About Giftvibelk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Giftvibelk",
    description:
      "See how Giftvibelk creates stylish gifting experiences for celebrations across Sri Lanka.",
    images: [pageOgImage],
  },
};

const AboutPage = () => {
  return <PageChildren />;
};

export default AboutPage;
