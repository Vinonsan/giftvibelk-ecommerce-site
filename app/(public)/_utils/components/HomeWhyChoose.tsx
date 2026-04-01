export default function HomeWhyChoose() {
  const items = [
    {
      title: "Occasion-based gifting",
      description:
        "Make it easy for shoppers to find gifts for birthdays, weddings, anniversaries, and heartfelt surprise moments.",
    },
    {
      title: "Built for Sri Lankan customers",
      description:
        "Clear messaging, local relevance, and gift-focused keywords help the homepage speak directly to buyers in Sri Lanka.",
    },
    {
      title: "SEO-ready structure",
      description:
        "The page now uses a strong title, description, and content hierarchy to support search visibility from the start.",
    },
  ];

  return (
    <section
      id="why-giftvibelk"
      className="mt-16 grid gap-6 border-t border-[rgba(142,72,51,0.12)] pt-10 md:grid-cols-3"
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.75rem] bg-white/80 p-6 shadow-[0_18px_48px_rgba(97,57,41,0.08)]"
        >
          <h2 className="text-xl font-semibold text-[--foreground]">
            {item.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-[--muted-foreground]">
            {item.description}
          </p>
        </article>
      ))}
    </section>
  );
}
