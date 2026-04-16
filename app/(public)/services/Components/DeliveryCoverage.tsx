import Heading from "@/app/components/layouts/Heading";
import {
  MapPinned,
  Truck,
  Clock3,
  ShieldCheck,
  MessageCircleMore,
  BadgeCheck,
} from "lucide-react";

const coveragePoints = [
  {
    icon: Truck,
    title: "Islandwide Delivery",
    description:
      "Reliable gift delivery across Sri Lanka with smooth coordination and careful handling.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "Planned delivery support to make every celebration arrive at the right moment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Packaging",
    description:
      "Each gift is packed carefully to keep it secure, neat, and presentation-ready.",
  },
  {
    icon: MessageCircleMore,
    title: "Order Updates",
    description:
      "Stay informed with clear updates and support throughout the delivery process.",
  },
];

const DeliveryCoverage = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          badge="Delivery Coverage"
          title="Reliable delivery support for every special occasion"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-secondary p-8 text-white sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[140px] bg-white/10" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <MapPinned size={30} />
              </div>

              <span className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
                Jaffna + Islandwide
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                Delivery that feels dependable, personal, and on time
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                From surprise delivery in Jaffna to islandwide gifting across
                Sri Lanka, GiftVibeLK focuses on careful handling, timely
                coordination, and a smooth experience from order to doorstep.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Surprise Delivery in Jaffna",
                  "Islandwide Delivery Support",
                  "Safe & Secure Handling",
                  "Clear Delivery Updates",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            {coveragePoints.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[28px] border border-primary/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCoverage;