import type { Metadata } from "next";
import PageChildren from "./_utils/PageChildren";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "GiftVibeLK | Birthday Gifts, Flowers, Cakes & Surprise Boxes Sri Lanka",
  description:
    "GiftVibeLK is an online gift shop in Sri Lanka for birthday gifts, flower delivery, cakes, surprise boxes, anniversary gifts, and personalized gift boxes.",
  path: "/",
  keywords: [
    "online gift shop Sri Lanka",
    "send gifts Sri Lanka",
    "birthday surprise delivery Sri Lanka",
    "GiftVibeLK home",
  ],
});

export default function HomePage() {
  return <PageChildren />;
}
