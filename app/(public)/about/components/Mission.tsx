import Heading from "@/app/components/layouts/Heading";
import { Target, Rocket } from "lucide-react";

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make gifting feel effortless, heartfelt, and beautifully presented so every order becomes a meaningful moment for the people you care about."
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "To become Sri Lanka's most trusted gifting brand by blending warm service, thoughtful customization, and dependable delivery in every experience."
  },
];

const Mission = () => {
  return (
    <section >
      <div>
       

        <Heading
  badge="Our Purpose"
  title="Mission & Vision"
/>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          {missionCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className={`group rounded-3xl border border-primary/10  p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl sm:p-8`}
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
