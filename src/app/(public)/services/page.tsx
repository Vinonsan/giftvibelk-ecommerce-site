import type { Metadata } from "next";
import PageChildren from "./PageChildren";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Gift Delivery Services Sri Lanka | Flowers, Cakes & Personalized Gifts",
  description:
    "Explore GiftVibeLK services for birthday gifts, flower delivery, surprise boxes, cakes, custom hampers, and personalized gift delivery across Sri Lanka.",
  path: "/services",
  keywords: [
    "gift delivery services Sri Lanka",
    "flower delivery Sri Lanka",
    "cake delivery Sri Lanka",
    "surprise gift service Sri Lanka",
    "personalized gift delivery",
  ],
});

export default function ServicesPage() {
  return <PageChildren />;
}
