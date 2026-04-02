import Image from "next/image";
import Link from "next/link";
import { heroShowcase, heroStats } from "../constants/home";

export default function Hero() {
  const featuredImage = heroShowcase[0];

  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="absolute left-0 top-12 -z-10 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Giftvibelk online gift shop in Sri Lanka
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Thoughtful gifts for birthdays, anniversaries, and every special
              moment.
            </h1>

            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Shop curated gift boxes, surprise hampers, and beautifully styled
              presents made to help Giftvibelk deliver memorable celebrations
              across Sri Lanka.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/95"
            >
              Shop now
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/18 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Order a custom gift
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-primary/10 bg-secondary p-5 shadow-sm shadow-primary/5"
              >
                <p className="text-2xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/12 bg-white p-4 shadow-2xl shadow-primary/10">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                {featuredImage.eyebrow}
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                Featured gift
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                width={820}
                height={760}
                preload
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="rounded-[1.5rem] border border-primary/10 bg-white/94 p-5 shadow-lg shadow-primary/10 backdrop-blur">
                <p className="text-sm font-semibold text-primary">
                  Beautifully packed and ready to impress
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {featuredImage.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A cleaner, more modern hero visual built around your brand
                  colors and optimized with Next.js image handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
