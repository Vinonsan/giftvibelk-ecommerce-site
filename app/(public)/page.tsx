import type { Metadata } from "next";
import PageChildren from "./_utils/PageChildren";
import { defaultOpenGraph, defaultTwitter, siteConfig } from "../lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop birthday, anniversary, wedding, and celebration gifts online with Giftvibelk in Sri Lanka.",
  keywords: [
    "home gifts sri lanka",
    "gift shop home page",
    "online gift delivery sri lanka",
    "giftvibelk home",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: siteConfig.title,
    description:
      "Explore curated gift ideas for birthdays, anniversaries, weddings, and surprise celebrations across Sri Lanka.",
    url: "/",
  },
  twitter: {
    ...defaultTwitter,
    title: siteConfig.title,
    description:
      "Discover thoughtful online gifts in Sri Lanka for every celebration with Giftvibelk.",
  },
};

export default function HomePage() {
  return <PageChildren />;
}
