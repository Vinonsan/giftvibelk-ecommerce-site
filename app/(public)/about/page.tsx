import type { Metadata } from "next";
import PageChildren from "./PageChildren";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Giftvibelk, our gifting story, curated gift experiences, and thoughtful delivery service across Sri Lanka.",
  keywords: [
    "about giftvibelk",
    "giftvibelk sri lanka",
    "about gift shop sri lanka",
    "curated gifts sri lanka",
    "gift delivery brand sri lanka",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Giftvibelk | Curated Gifts in Sri Lanka",
    description:
      "Discover the story behind Giftvibelk and how we create thoughtful gift moments across Sri Lanka.",
    url: "/about",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Giftvibelk | Curated Gifts in Sri Lanka",
    description:
      "Get to know Giftvibelk, our gifting approach, and our curated delivery experiences across Sri Lanka.",
  },
};

export default function AboutPage() {
  return <PageChildren />;
}
