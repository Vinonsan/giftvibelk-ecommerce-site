import type { Metadata } from "next";
import Categories from "../_utils/components/Categories";
import FeaturedProducts from "../_utils/components/FeaturedProducts";
import CommonPageHero from "@/components/layouts/CommonPageHero";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Gift Collections Sri Lanka | Birthday Gifts, Cakes, Flowers & Surprises",
  description:
    "Browse GiftVibeLK collections for birthday gifts, flower delivery, cakes, surprise boxes, anniversary gifts, and personalized gifts in Sri Lanka.",
  path: "/collections",
  keywords: [
    "gift collections Sri Lanka",
    "birthday gift collections",
    "flower gift collections Sri Lanka",
    "surprise box collections",
    "personalized gifts Sri Lanka",
  ],
});

export default function CollectionsPage() {
  return (
    <div>
      <CommonPageHero
        badge="Gift Collections"
        currentPage="Collections"
        title="Curated gift collections for every Sri Lankan celebration."
        description="Explore birthday gifts, cakes, flowers, surprise boxes, anniversary gifts, and personalized gift ideas designed for memorable moments."
      />

      <div className="flex flex-col gap-24 px-8 py-12">
        <Categories />
        <FeaturedProducts />
      </div>
    </div>
  );
}
