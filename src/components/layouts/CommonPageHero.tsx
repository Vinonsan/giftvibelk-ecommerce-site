import Badge from "@/components/ui/Badge";
import Image from "next/image";

type CommonPageHeroProps = {
  badge: string;
  title: string;
  description: string;
  currentPage: string;
};

export default function CommonPageHero({
  badge,
  title,
  description,
}: CommonPageHeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-4">
        <div className="relative hidden md:block">
          <Image
            src="/images/Hero.svg"
            alt="Left hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        <div className="relative flex items-center justify-center px-6 py-16 text-center md:col-span-2 md:px-10 lg:px-16">
          <Image
            src="/images/Hero.svg"
            alt="Center hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <Badge variant="primary" glassified dot>
              {badge}
            </Badge>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-white/80 sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/images/Hero.svg"
            alt="Right hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/30" />
        </div>
      </div>
    </section>
  );
}
