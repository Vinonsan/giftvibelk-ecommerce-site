import Badge from "@/app/components/Badge";
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
    <section className="relative flex items-center justify-center h-screen py-6">
      
      {/* Background Image */}
      <Image
        src="/images/three.png"
        alt="Gift background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md -z-10" />

      {/* Content */}
      <div className="mx-auto flex flex-col items-center justify-center gap-6 text-center px-4">
        
        <Badge variant="primary" glassified dot>
          {badge}
        </Badge>

        <h1 className="text-4xl text-blue-50 font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="max-w-3xl text-base leading-7 text-blue-50 sm:text-lg">
          {description}
        </p>

      </div>
  
    </section>
  );
}