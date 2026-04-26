import Heading from "@/components/layouts/Heading";
import {
  BadgeCheck,
  Sparkles,
  Truck,
  ShieldCheck,
  MapPinned,
  Clock,
  Gift,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Customized Gifts",
    description:
      "Personalized gifts with names, photos, and warm messages made to feel special from the first glance.",
  },
  {
    icon: Truck,
    title: "Surprise Delivery in Jaffna",
    description:
      "A featured delivery experience designed to create a memorable surprise with thoughtful timing and care.",
    badge: "Available in Jaffna",
  },
  {
    icon: MapPinned,
    title: "All Over Sri Lanka",
    description: "Reliable coverage across the island for every occasion.",
    badge: " Islandwide Delivery",
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: "High Quality Service",
  },
  {
    icon: ShieldCheck,
    title: "Safe Packaging",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
  },
  {
    icon: Clock,
    title: "Fast Processing",
  },
  {
    icon: Gift,
    title: "All Event Support",
  },
];

export default function HowItWorks() {
  return (
    <section>
      <Heading
        badge="Services & Delivery"
        title=" Thoughtful gifting with reliable delivery"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, badge }) => (
          <article
            key={title}
            className="rounded-3xl border border-primary/10 bg-[#fcfcfc] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={26} />
              </div>

              {badge ? (
                <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  {badge}
                </span>
              ) : null}
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-primary/10" />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
        {features.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-2">
            <Icon size={18} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
