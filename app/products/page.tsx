import type { Metadata } from "next";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/lib/products";
import { defaultOpenGraph, defaultTwitter } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse curated Giftvibelk products for birthdays, anniversaries, weddings, and surprise gifting in Sri Lanka.",
  keywords: [
    "gift products sri lanka",
    "online gift collection sri lanka",
    "birthday and anniversary gifts sri lanka",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: "Giftvibelk Products",
    description:
      "Explore Giftvibelk product collections for birthdays, romance, flowers, and personalized celebrations.",
    url: "/products",
  },
  twitter: {
    ...defaultTwitter,
    title: "Giftvibelk Products",
    description:
      "Shop curated gifts for every occasion with Giftvibelk's online collection in Sri Lanka.",
  },
};

export default function ProductsPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-10">
      <div className="max-w-2xl space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Products
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Gift collections ready for birthdays, romance, and celebrations.
        </h1>
        <p className="leading-8 text-muted-foreground">
          Browse our featured collection of curated gifts designed for
          meaningful moments and polished delivery experiences across Sri Lanka.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
