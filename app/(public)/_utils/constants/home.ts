import type {
  HeroFeature,
  HeroShowcase,
  HeroStat,
} from "../types/home";

export const heroStats: HeroStat[] = [
  { value: "500+", label: "gift ideas curated for joyful moments" },
  { value: "24h", label: "fast order support for last-minute surprises" },
  { value: "4.9/5", label: "customer love from thoughtful gifting" },
];

export const heroFeatures: HeroFeature[] = [
  {
    title: "Curated for every celebration",
    description: "Birthday, anniversary, wedding, and surprise-ready picks.",
  },
  {
    title: "Elegant presentation",
    description: "Premium wrapping, keepsake cards, and refined packaging.",
  },
  {
    title: "Island-wide convenience",
    description: "Simple ordering flow with support that feels personal.",
  },
];

export const heroShowcase: HeroShowcase[] = [
  {
    src: "/hero-curated-gift.svg",
    alt: "Curated birthday gift box with ribbon and sweets",
    eyebrow: "Birthday Edit",
    title: "Curated gift boxes with warm, premium details",
  },
  {
    src: "/hero-floral-surprise.svg",
    alt: "Romantic floral surprise arrangement with card",
    eyebrow: "Anniversary Pick",
    title: "Soft florals and keepsakes for meaningful surprises",
  },
  {
    src: "/hero-luxury-box.svg",
    alt: "Luxury celebration hamper with cake and candle accents",
    eyebrow: "Celebration Hamper",
    title: "Elegant hampers styled for modern gifting moments",
  },
];
