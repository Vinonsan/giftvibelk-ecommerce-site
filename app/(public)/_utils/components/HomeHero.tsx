import { homeHighlights } from "../constants/home";

export default function HomeHero() {
  return (
    <div className="space-y-8">
      <p className="inline-flex rounded-full border border-[rgba(142,72,51,0.2)] px-4 py-2 text-sm font-medium tracking-[0.2em] text-[--accent-deep] uppercase">
        Giftvibelk Sri Lanka
      </p>

      <div className="space-y-5">
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-[--foreground] sm:text-6xl">
          Beautiful gifts for every celebration in Sri Lanka.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[--muted-foreground] sm:text-xl">
          Shop thoughtful gift ideas for birthdays, anniversaries, weddings,
          romantic surprises, and special moments that deserve something
          memorable.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#categories"
          className="inline-flex items-center justify-center rounded-full border border-[--accent-deep] px-7 py-3.5 text-base font-semibold text-[--accent-deep] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Explore Categories
        </a>
        <a
          href="#why-giftvibelk"
          className="inline-flex items-center justify-center rounded-full border border-[rgba(142,72,51,0.2)] px-7 py-3.5 text-base font-semibold text-[--accent-deep] transition-colors duration-200 hover:border-[--accent-deep]"
        >
          Why Choose Us
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {homeHighlights.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-[rgba(142,72,51,0.14)] px-5 py-4 text-sm leading-6 text-[--muted-foreground]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
