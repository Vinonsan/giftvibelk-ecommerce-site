import { cache } from "react";

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  price: string;
  image: string;
  stock: number;
  keywords: string[];
  updatedAt: string;
};

export const products: Product[] = [
  {
    slug: "luxury-birthday-box",
    name: "Luxury Birthday Box",
    shortDescription:
      "A premium birthday gift box with cake, flowers, and curated keepsakes.",
    description:
      "Celebrate birthdays in style with a premium gift box curated for joyful surprises. This bundle includes elegant presentation, celebratory treats, and thoughtful add-ons designed for memorable gifting across Sri Lanka.",
    category: "Birthday Gifts",
    price: "LKR 9,500",
    image: "/images/imageone.png",
    stock: 12,
    keywords: [
      "luxury birthday gifts sri lanka",
      "birthday gift box sri lanka",
      "premium birthday surprise",
    ],
    updatedAt: "2026-04-14T00:00:00.000Z",
  },
  {
    slug: "romantic-surprise-hamper",
    name: "Romantic Surprise Hamper",
    shortDescription:
      "A romantic hamper with flowers, chocolates, and personalized touches.",
    description:
      "Designed for anniversaries and heartfelt surprises, this romantic hamper combines floral styling, sweet treats, and elegant packaging to create a polished gifting experience.",
    category: "Love & Romance",
    price: "LKR 8,250",
    image: "/images/imagetwo.png",
    stock: 7,
    keywords: [
      "romantic gifts sri lanka",
      "anniversary hamper sri lanka",
      "surprise gift for partner",
    ],
    updatedAt: "2026-04-14T00:00:00.000Z",
  },
  {
    slug: "celebration-flower-bundle",
    name: "Celebration Flower Bundle",
    shortDescription:
      "Fresh flowers and gift accents for birthdays, thank-you gifts, and milestones.",
    description:
      "A versatile flower bundle for celebrations, congratulations, and special occasions. It pairs vibrant floral arrangements with gift-ready finishing details for same-day and planned deliveries.",
    category: "Flowers & Bouquets",
    price: "LKR 6,750",
    image: "/images/imagethree.png",
    stock: 15,
    keywords: [
      "flower gifts sri lanka",
      "bouquet delivery sri lanka",
      "celebration flowers colombo",
    ],
    updatedAt: "2026-04-14T00:00:00.000Z",
  },
  {
    slug: "custom-keepsake-basket",
    name: "Custom Keepsake Basket",
    shortDescription:
      "A customizable gift basket tailored for weddings, baby showers, and special events.",
    description:
      "Build a personalized gift basket with elegant keepsakes, chocolates, and decorative packaging. Ideal for weddings, family events, and meaningful personal gifting.",
    category: "Custom Gifts",
    price: "LKR 11,200",
    image: "/images/imagefour.png",
    stock: 5,
    keywords: [
      "custom gifts sri lanka",
      "personalized gift basket sri lanka",
      "wedding gift basket sri lanka",
    ],
    updatedAt: "2026-04-14T00:00:00.000Z",
  },
];

export const getProductBySlug = cache(async (slug: string) => {
  return products.find((product) => product.slug === slug) ?? null;
});
