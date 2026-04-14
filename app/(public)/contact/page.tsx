import type { Metadata } from "next";
import { defaultOpenGraph, defaultTwitter } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Giftvibelk for gifting support, product inquiries, delivery details, and custom order requests in Sri Lanka.",
  keywords: [
    "contact giftvibelk",
    "gift delivery sri lanka contact",
    "custom gifts sri lanka contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: "Contact Giftvibelk",
    description:
      "Reach Giftvibelk for order help, custom gifting requests, and delivery support across Sri Lanka.",
    url: "/contact",
  },
  twitter: {
    ...defaultTwitter,
    title: "Contact Giftvibelk",
    description:
      "Speak with Giftvibelk about orders, delivery, and personalized gifting support.",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 py-10">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Contact
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Let&apos;s plan the right gift.
      </h1>
      <p className="leading-8 text-muted-foreground">
        Need help selecting a gift, arranging delivery, or creating a custom
        order? Our team is here to guide you with quick answers and practical
        recommendations for every occasion.
      </p>
      <div className="rounded-3xl border border-primary/10 bg-card p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Customer Support
        </p>
        <p className="mt-3 text-lg text-foreground">hello@giftvibelk.lk</p>
        <p className="mt-2 text-muted-foreground">Colombo, Sri Lanka</p>
      </div>
    </section>
  );
}
