import { homeOccasions } from "../constants/home";

export default function HomeOccasions() {
  return (
    <section className="mt-14">
      <div className="mb-6 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[--foreground]">
          Shop by occasion
        </h2>
        <p className="mt-3 text-base leading-7 text-[--muted-foreground]">
          This homepage is now ready to grow into a full gift store with
          category pages, product cards, and delivery details for Sri Lankan
          customers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {homeOccasions.map((occasion) => (
          <article
            key={occasion.title}
            className="rounded-[1.75rem] border border-[rgba(142,72,51,0.1)] bg-white/85 p-6 shadow-[0_18px_48px_rgba(97,57,41,0.06)]"
          >
            <h3 className="text-xl font-semibold text-[--foreground]">
              {occasion.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[--muted-foreground]">
              {occasion.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
