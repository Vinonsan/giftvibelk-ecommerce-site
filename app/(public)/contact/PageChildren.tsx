import CommonPageHero from "@/app/components/layouts/CommonPageHero";

const contactCards = [
  {
    title: "Custom Orders",
    text: "Tell us the occasion, style, and budget you have in mind.",
  },
  {
    title: "Delivery Support",
    text: "Check delivery details, timing, and surprise coordination options.",
  },
  {
    title: "Quick Replies",
    text: "Reach out for recommendations and we will help guide the order.",
  },
];

export default function PageChildren() {
  return (
    <div className="space-y-12 py-6 sm:py-8">
      <CommonPageHero
        badge="Get In Touch"
        currentPage="Contact"
        title="Let’s plan a gift experience that feels special from start to finish."
        description="Reach out for custom gifting, delivery coordination, or help choosing the right surprise. We are here to make the process simple and thoughtful."
      />

      <section className="grid gap-5 md:grid-cols-3">
        {contactCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {card.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {card.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
