import Heading from "@/app/components/layouts/Heading";
import {
  Gift,
  Sparkles,
  Truck,
  PackageCheck,
  HeartHandshake,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Customized Gifts",
    description:
      "Personalized gifts with names, photos, and heartfelt messages made to feel truly special.",
  },
  {
    icon: Gift,
    title: "Surprise Delivery in Jaffna",
    description:
      "Create unforgettable moments with carefully planned surprise deliveries for your loved ones.",
    featured: true,
  },
  {
    icon: Truck,
    title: "Islandwide Delivery",
    description:
      "Reliable delivery across Sri Lanka with safe handling and timely service.",
  },
  {
    icon: PackageCheck,
    title: "Ready-Made Gift Combos",
    description:
      "Choose from curated gift sets designed for birthdays, anniversaries, and celebrations.",
  },
  {
    icon: HeartHandshake,
    title: "Event-Based Gifting",
    description:
      "Perfect gifting solutions for birthdays, anniversaries, graduations, and special occasions.",
  },
  {
    icon: Video,
    title: "Video Message Gifts",
    description:
      "Add a personal video message to your gift and make your surprise even more emotional.",
  },
];

export default function MainServices() {
  return (
    <section >
 
        <Heading
          badge="Main Services"
          title="Gifting services designed for every special moment"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description, featured }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                featured
                  ? "border-primary/20 bg-primary text-white"
                  : "border-primary/10 bg-white"
              }`}
            >
              <div
                className={`absolute right-0 top-0 h-24 w-24 rounded-bl-[100px] ${
                  featured ? "bg-white/10" : "bg-primary/5"
                }`}
              />

              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
                  featured
                    ? "bg-white/15 text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon size={26} />
              </div>

              <div className="relative mt-6">
                <h3
                  className={`text-xl font-semibold ${
                    featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    featured ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {description}
                </p>
              </div>

              <div className="relative mt-6">
                <button
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    featured
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  <Video size={16} />
                  View Video
                </button>
              </div>
            </article>
          ))}
        </div>

    </section>
  );
}