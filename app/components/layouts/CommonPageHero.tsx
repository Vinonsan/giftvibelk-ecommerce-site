import Badge from "@/app/components/Badge";
import Link from "next/link";

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
  currentPage,
}: CommonPageHeroProps) {
  return (
    <section className="relative py-6 h-screen">
      
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/secondaryhero.png"
          alt="Gift background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/2 backdrop-blur-lg" />
      </div>

      <div className="mx-auto flex flex-col items-center justify-center gap-6 text-center">
        
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="opacity-50">/</span>
          <span className="font-medium text-foreground">{currentPage}</span>
        </nav>

        <Badge variant="secondary" glassified dot>
          {badge}
        </Badge>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}