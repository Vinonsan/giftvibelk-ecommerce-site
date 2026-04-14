import type { Metadata } from "next";
import { defaultOpenGraph, defaultTwitter } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Giftvibelk, our curated gifting approach, and how we help customers in Sri Lanka celebrate every meaningful moment.",
  keywords: [
    "about giftvibelk",
    "gift shop sri lanka about",
    "online gifting service sri lanka",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: "About Giftvibelk",
    description:
      "Discover the story behind Giftvibelk and our mission to deliver memorable gifts across Sri Lanka.",
    url: "/about",
  },
  twitter: {
    ...defaultTwitter,
    title: "About Giftvibelk",
    description:
      "See how Giftvibelk creates stylish gifting experiences for celebrations across Sri Lanka.",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 py-10">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        About Giftvibelk
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Curated gifts designed for life&apos;s biggest moments.
      </h1>
      <p className="text-lg leading-8 text-muted-foreground">
        Giftvibelk helps people in Sri Lanka celebrate birthdays,
        anniversaries, weddings, and surprise milestones with thoughtfully
        curated gifts that feel personal and polished.
      </p>
      <p className="leading-8 text-muted-foreground">
        Our focus is simple: make gifting easier, more elegant, and more
        memorable with quality presentation, reliable local delivery, and
        collections built around real occasions.
      </p>
    </section>
  );
}
