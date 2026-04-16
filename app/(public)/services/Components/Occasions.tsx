import Badge from "@/app/components/Badge";
import Heading from "@/app/components/layouts/Heading";
import Image from "next/image";

const occasions = [
  {
    title: "Birthdays",
    description:
      "Make birthdays more special with cakes, flowers, gift boxes, and surprise delivery.",
    tag: "Most Popular",
    image: "/images/occasions/birthday.jpg",
  },
  {
    title: "Anniversaries",
    description:
      "Celebrate love with romantic gifts, elegant presentation, and meaningful surprises.",
    tag: "Romantic",
    image: "/images/occasions/anniversary.jpg",
  },
  {
    title: "Baby Showers",
    description:
      "Welcome new beginnings with thoughtful and beautifully arranged gift sets.",
    tag: "Cute Picks",
    image: "/images/occasions/baby-shower.jpg",
  },
  {
    title: "Graduations",
    description:
      "Honor achievements with memorable gifts for an important milestone.",
    tag: "Celebration",
    image: "/images/occasions/graduation.jpg",
  },
  {
    title: "Special Surprises",
    description:
      "Send unexpected joy to your loved ones on any day that deserves a smile.",
    tag: "Anytime",
    image: "/images/occasions/surprise.jpg",
  },
  {
    title: "Corporate Gifting",
    description:
      "Professional gifting solutions for clients, teams, and business occasions.",
    tag: "Professional",
    image: "/images/occasions/corporate.jpg",
  },
];

export default function Occasions() {
  return (
    <section>
      <Heading
        badge="Occasions"
        title="Thoughtful gifts for every celebration"
      />

       <div className="mt-8 flex flex-wrap justify-center gap-3">
        {occasions.map((item) => (
          <Badge key={item.title} variant="primary">
            {item.tag}
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {occasions.map(({ title, description, tag, image }) => (
          <article
            key={title}
            className="group overflow-hidden rounded-[28px] border border-primary/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow backdrop-blur">
                {tag}
              </span>

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
