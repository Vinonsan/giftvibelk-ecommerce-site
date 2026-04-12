import CommonPageHero from "@/app/components/layouts/CommonPageHero";

const services = [
  {
    title: "Curated Gift Boxes",
    text: "Thoughtfully assembled boxes designed for birthdays, anniversaries, and surprise celebrations.",
  },
  {
    title: "Custom Gift Planning",
    text: "Personalized recommendations and styling for customers who want something more tailored.",
  },
  {
    title: "Delivery Coordination",
    text: "Smooth surprise delivery support to help every moment arrive beautifully and on time.",
  },
];

export default function PageChildren() {
  return (
    <div className="space-y-12 py-6 sm:py-8">
      <CommonPageHero
        badge="What We Offer"
        currentPage="Services"
        title="Services designed to make gifting feel effortless and premium."
        description="From ready-to-send gift boxes to custom orders and surprise delivery coordination, our service experience is built for people who want style, ease, and thoughtful details."
      />

      <section className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {service.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {service.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
