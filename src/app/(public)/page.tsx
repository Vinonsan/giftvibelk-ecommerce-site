import type { Metadata } from "next";
import PageChildren from "./_utils/PageChildren";

const pageTitle = "Giftvibelk | Online Gift Shop in Sri Lanka";
const pageDescription =
  "Shop birthday, anniversary, wedding, and celebration gifts online with Giftvibelk in Sri Lanka.";
const pageOgImage = "/logo/logo.png";

export const metadata: Metadata = {
  title: "Home",
  description: pageDescription,
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
    title: pageTitle,
    description:
      "Explore curated gift ideas for birthdays, anniversaries, weddings, and surprise celebrations across Sri Lanka.",
    url: "/",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: pageOgImage,
        width: 1200,
        height: 630,
        alt: "Giftvibelk online gift shop in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Discover thoughtful online gifts in Sri Lanka for every celebration with Giftvibelk.",
    images: [pageOgImage],
  },
};

export default function HomePage() {
  return <PageChildren />;
}
