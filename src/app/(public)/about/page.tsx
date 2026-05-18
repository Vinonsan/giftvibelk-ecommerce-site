import type { Metadata } from "next";
import PageChildren from "./PageChildren";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About GiftVibeLK | Thoughtful Gift Delivery in Sri Lanka",
  description:
    "Learn about GiftVibeLK, a Sri Lankan gift ecommerce brand creating curated gift boxes, flower delivery, cakes, surprise boxes, and personalized gifts.",
  path: "/about",
  keywords: [
    "about GiftVibeLK",
    "Sri Lanka gifting brand",
    "custom gift service Sri Lanka",
    "gift delivery company Sri Lanka",
  ],
});

const AboutPage = () => {
  return <PageChildren />;
};

export default AboutPage;
