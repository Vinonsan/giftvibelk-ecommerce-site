import Image from "next/image";
import { homeCategories } from "../constants/home";

export default function HomeCategories() {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,236,227,0.96))] p-6 shadow-[0_24px_80px_rgba(97,57,41,0.14)]">
      <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/60 bg-white">
        <Image
          src="/gift-hero.svg"
          alt="Gift illustration for Giftvibelk"
          width={640}
          height={640}
          className="h-auto w-full"
        />
      </div>
      <div className="rounded-[1.5rem] bg-[--card] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[--accent-deep]">
          Popular Searches
        </p>
        <div
          id="categories"
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {homeCategories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-[rgba(142,72,51,0.12)] bg-white px-4 py-4 text-base font-medium text-[--foreground] shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
