import type { ComponentType } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Package,
  PenLine,
  Search,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  number: string;
  title: string;
  description: string;
};

const normalSteps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Browse Gifts",
    description: "Explore thoughtful gift ideas for the occasion.",
  },
  {
    icon: Gift,
    number: "02",
    title: "Select Product",
    description: "Choose the gift that feels right for your recipient.",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "Add to Cart & Checkout",
    description: "Confirm your details and place the order in a few taps.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Delivery",
    description: "We carefully prepare and deliver the surprise.",
  },
];

const customSteps: Step[] = [
  {
    icon: Gift,
    number: "01",
    title: "Choose Gift Type",
    description: "Pick the base gift that matches the moment.",
  },
  {
    icon: PenLine,
    number: "02",
    title: "Add Custom Details",
    description: "Include a name, photo, or message to make it personal.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Preview & Confirm",
    description: "Review the design before we begin preparing it.",
  },
  {
    icon: Package,
    number: "04",
    title: "Place Order & Delivery",
    description: "Complete checkout and let us handle the delivery.",
  },
];

function StepList({
  title,
  description,
  steps,
  featured = false,
  tag,
}: {
  title: string;
  description: string;
  steps: Step[];
  featured?: boolean;
  tag?: string;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
        featured
          ? "border-primary/15 bg-[linear-gradient(135deg,_rgba(117,13,18,0.07),_rgba(255,214,184,0.2))]"
          : "border-primary/10 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {featured ? "Custom Order" : "Standard Order"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
        </div>

        {tag ? (
          <span className="rounded-full border border-primary/10 bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            {tag}
          </span>
        ) : null}
      </div>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {steps.map(({ icon: Icon, number, title: stepTitle, description: stepDescription }, index) => (
          <div key={number} className="relative">
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-5 top-11 h-[calc(100%-2.5rem)] w-px bg-primary/10"
              />
            ) : null}

            <div
              className={`group relative flex gap-4 rounded-2xl border px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                featured
                  ? "border-primary/10 bg-white/75"
                  : "border-primary/10 bg-[#fffdfb]"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary">
                {number}
              </div>

              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-primary/10">
                <Icon size={20} className="transition group-hover:scale-105" />
              </div>

              <div className="min-w-0">
                <h4 className="text-base font-semibold text-foreground">
                  {stepTitle}
                </h4>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {stepDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fffaf7] px-5 py-14 shadow-[0_20px_60px_rgba(117,13,18,0.05)] sm:px-8 lg:px-10 animate-[about-fade-up_0.8s_ease-out_both]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,184,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(117,13,18,0.05),transparent_28%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            How to Order
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple steps for both normal and personalized gifts.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            GiftVibeLK keeps ordering easy, whether you want a ready-made gift
            or a custom surprise with your own personal touch.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-2">
          <StepList
            title="Normal Gift Flow"
            description="A fast, straightforward order path for ready-to-send gifts."
            steps={normalSteps}
          />

          <StepList
            title="Personalized Gift Flow"
            description="A more expressive order path for custom gifts that include names, photos, or messages."
            steps={customSteps}
            featured
            tag="Custom Order"
          />
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
          <Sparkles size={16} className="text-primary" />
          Personalized gifting gets a little more attention, because the details matter.
          <ArrowRight size={16} className="text-primary" />
        </div>
      </div>
    </section>
  );
}
