import type { Metadata } from "next";
import PageChildren from "./(public)/_utils/PageChildren";

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
    title: "Giftvibelk | Online Gift Shop in Sri Lanka",
    description:
      "Explore curated gift ideas for birthdays, anniversaries, weddings, and surprise celebrations across Sri Lanka.",
    url: "/",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giftvibelk | Online Gift Shop in Sri Lanka",
    description:
      "Discover thoughtful online gifts in Sri Lanka for every celebration with Giftvibelk.",
  },
};

export default function Home() {
  return <PageChildren />;
}
