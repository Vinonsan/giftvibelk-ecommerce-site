import { Target, Rocket } from "lucide-react";

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make gifting feel effortless, heartfelt, and beautifully presented so every order becomes a meaningful moment for the people you care about.",
    gradient: "from-[#fff4ee] to-[#fffaf6]",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "To become Sri Lanka's most trusted gifting brand by blending warm service, thoughtful customization, and dependable delivery in every experience.",
    gradient: "from-[#f7f3ff] to-[#fff7fb]",
  },
];

const Mission = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/85 px-5 py-14 shadow-[0_20px_60px_rgba(117,13,18,0.06)] backdrop-blur-sm sm:px-8 lg:px-10 animate-[about-fade-up_0.8s_ease-out_both]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,184,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(117,13,18,0.05),transparent_32%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Our Purpose
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built to turn everyday gifting into something memorable.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            GiftVibeLK brings together emotional gifting, careful presentation,
            and a calm premium experience designed to feel personal from the
            first glance.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          {missionCards.map(({ icon: Icon, title, description, gradient }) => (
            <article
              key={title}
              className={`group rounded-3xl border border-primary/10 bg-gradient-to-br ${gradient} p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl sm:p-8`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-primary/10 transition group-hover:scale-105">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission
