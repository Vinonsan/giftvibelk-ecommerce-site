import type { Metadata } from "next";
import { defaultOpenGraph, defaultTwitter } from "@/app/lib/seo";
import PageChildren from "./PageChildren";

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
    ...defaultOpenGraph,
    title: "About Giftvibelk",
    description:
      "Discover the story behind Giftvibelk and our mission to deliver memorable gifts across Sri Lanka.",
    url: "/about",
  },
  twitter: {
    ...defaultTwitter,
    title: "About Giftvibelk",
    description:
      "See how Giftvibelk creates stylish gifting experiences for celebrations across Sri Lanka.",
  },
};

const AboutPage = () => {
  return <PageChildren />;
};

export default AboutPage;
