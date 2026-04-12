import { BadgeCheck, Sparkles, Truck, ShieldCheck, MapPinned } from "lucide-react";

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
    featured: true,
  },
];

const deliveryFeatures = [
  {
    icon: BadgeCheck,
    title: "Fast Delivery",
    description: "Quick fulfillment for moments that cannot wait.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "Handled carefully so gifts arrive looking perfect.",
  },
  {
    icon: MapPinned,
    title: "All Over Sri Lanka",
    description: "Reliable coverage across the island for every occasion.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fffaf6] px-5 py-14 shadow-[0_20px_60px_rgba(117,13,18,0.05)] sm:px-8 lg:px-10 animate-[about-fade-up_0.8s_ease-out_both]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,184,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(117,13,18,0.05),transparent_30%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Services & Delivery
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Clear, warm delivery support for every kind of surprise.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            GiftVibeLK keeps gifting easy with personalization, thoughtful
            handover, and islandwide delivery that feels dependable and
            emotional.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, badge, featured }) => (
            <article
              key={title}
              className={`group rounded-3xl border border-primary/10 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg sm:p-7 ${
                featured
                  ? "bg-[linear-gradient(135deg,_rgba(117,13,18,0.08),_rgba(255,214,184,0.24))]"
                  : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                  <Icon size={26} />
                </div>

                {badge ? (
                  <span className="rounded-full border border-primary/10 bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
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

          <article className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fef2f2] text-primary">
                <Truck size={26} />
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                Islandwide Delivery
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
              Islandwide Delivery
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Simple, dependable shipping support designed to keep every gift
              safe and every surprise on time.
            </p>

            <div className="mt-6 space-y-3">
              {deliveryFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl bg-[#faf7f5] px-4 py-3 transition group-hover:bg-white/80"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {title}
                    </h4>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
