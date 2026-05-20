import type { CSSProperties } from "react";
import Badge from "@/components/ui/Badge";
import Svg from "@/components/ui/Svg";

type CommonPageHeroProps = {
  badge: string;
  title: string;
  description: string;
  currentPage: string;
};

type FloatingIcon = {
  id: string;
  name: "gift" | "watch" | "teddy";
  className: string;
  style: CSSProperties;
};

function getIconName(index: number): FloatingIcon["name"] {
  if (index % 13 === 0) {
    return "gift";
  }

  if (index % 13 === 6) {
    return "watch";
  }

  return "teddy";
}

function createFloatingIcons(): FloatingIcon[] {
  const columns = 52;
  const rows = 25;
  const total = columns * rows;

  return Array.from({ length: total }, (_, index) => {
    const name = getIconName(index);
    const seed = index + 1709;
    const column = index % columns;
    const row = Math.floor(index / columns);
    const jitterX = (((seed * 19) % 100) / 100 - 0.5) * 0.62;
    const jitterY = (((seed * 31) % 100) / 100 - 0.5) * 0.56;
    const size =
      name === "teddy"
        ? 13 + ((seed * 11) % 14)
        : 17 + ((seed * 11) % 17);
    const left = ((column + 0.5 + jitterX) / columns) * 100;
    const top = ((row + 0.5 + jitterY) / rows) * 100;
    const duration = 13 + (seed % 19);
    const delay = -((seed * 0.37) % duration);
    const driftX = -28 + ((seed * 17) % 57);
    const driftY = -24 + ((seed * 23) % 49);
    const rotate = -32 + ((seed * 29) % 65);
    const opacity = name === "teddy" ? 0.09 + (seed % 5) * 0.018 : 0.13 + (seed % 5) * 0.026;
    const colorClass =
      name === "gift"
        ? "text-white"
        : name === "watch"
          ? "text-primary"
          : "text-white";

    return {
      id: `${name}-${index}`,
      name,
      className: colorClass,
      style: {
        "--icon-size": `${size}px`,
        "--icon-left": `${left}%`,
        "--icon-top": `${top}%`,
        "--icon-duration": `${duration}s`,
        "--icon-delay": `${delay}s`,
        "--icon-drift-x": `${driftX}px`,
        "--icon-drift-y": `${driftY}px`,
        "--icon-rotate": `${rotate}deg`,
        "--icon-opacity": opacity,
      } as CSSProperties,
    };
  });
}

const floatingIcons = createFloatingIcons();

export default function CommonPageHero({
  badge,
  title,
  description,
  currentPage,
}: CommonPageHeroProps) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#541A1A] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_84%_24%,rgba(163,11,15,0.34),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(11,18,32,0.72),transparent_46%),linear-gradient(135deg,#541A1A_0%,#2b1013_48%,#0B1220_100%)]" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {floatingIcons.map((icon) => (
          <span
            key={icon.id}
            className={`common-hero-icon ${icon.className}`}
            style={icon.style}
          >
            <Svg name={icon.name} className="h-full w-full text-white/50" />
          </span>
        ))}
      </div>

      <div className="absolute inset-0 bg-[#541A1A]/35 backdrop-blur-[1px]" />


      <div className="relative z-10 mx-auto flex flex-col items-center justify-center text-center">

          <Badge variant="glass" dot>
            {badge}
          </Badge>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Home / {currentPage}
          </p>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {description}
          </p>
    
      </div>

    </section>
  );
}
