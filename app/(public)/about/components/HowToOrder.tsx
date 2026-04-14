import Heading from "@/app/components/layouts/Heading";
import { Gift, PenLine, ShoppingCart, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Gift,
    title: "Choose a Gift",
    description: "Browse products and pick the perfect gift for the occasion.",
  },
  {
    icon: PenLine,
    title: "Add Your Touch",
    description: "Include a name, photo, message, or custom details if needed.",
  },
  {
    icon: ShoppingCart,
    title: "Place the Order",
    description:
      "Confirm the details, delivery information, and complete checkout.",
  },
  {
    icon: Truck,
    title: "We Deliver It",
    description:
      "Our team prepares your order carefully and delivers it with care.",
  },
];

export default function HowToOrder() {
  return (
    <section >

        <Heading
          badge="How to Order"
          title="A simple gifting process from selection to delivery"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="relative rounded-3xl border border-primary/10  p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                0{index + 1}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-primary/5 px-6 py-5 text-center">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            You can order both{" "}
            <span className="font-semibold text-foreground">
              ready-made gifts
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              personalized gifts
            </span>{" "}
            through the same simple process.
          </p>
        </div>

    </section>
  );
}
