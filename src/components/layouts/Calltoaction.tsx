"use client";

import Button from "@/components/ui/Button";
import type { CSSProperties } from "react";

interface CTAProps {
  title: string;
  description: string;
  primaryText: string;
  secondaryText?: string;
}

const globeField = Array.from({ length: 100 }, (_, index) => {
  const column = index % 10;
  const row = Math.floor(index / 10);
  const size = 18 + ((index * 7) % 34);
  const left = column * 10 + ((index * 13) % 7) - 2;
  const top = row * 10 + ((index * 17) % 6) - 3;
  const duration = 10 + (index % 11);
  const delay = (index % 7) * -1.35;
  const driftX = -30 + ((index * 11) % 61);
  const driftY = -24 + ((index * 7) % 49);
  const rotate = -18 + ((index * 5) % 37);
  const depth = 0.55 + ((index * 3) % 5) * 0.12;
  const opacity = 0.16 + (index % 5) * 0.06;
  const scale = 0.82 + ((index * 9) % 7) * 0.06;

  return {
    id: `globe-${index}`,
    style: {
      "--globe-size": `${size}px`,
      "--globe-left": `${left}%`,
      "--globe-top": `${top}%`,
      "--globe-duration": `${duration}s`,
      "--globe-delay": `${delay}s`,
      "--globe-drift-x": `${driftX}px`,
      "--globe-drift-y": `${driftY}px`,
      "--globe-rotate": `${rotate}deg`,
      "--globe-depth": depth,
      "--globe-opacity": opacity,
      "--globe-scale": scale,
    } as CSSProperties,
  };
});

const CTA = ({ title, description, primaryText, secondaryText }: CTAProps) => {
  return (
    <section className="relative overflow-hidden  border border-white rounded-3xl py-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#08090d_0%,#120507_36%,#1b0a0f_68%,#090b10_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

      <div className="absolute inset-0 perspective-[1600px]">
        {globeField.map((globe) => (
          <span
            key={globe.id}
            aria-hidden="true"
            className="cta-mini-globe"
            style={globe.style}
          />
        ))}
      </div>

      <div className="absolute  inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,9,13,0.18)_48%,rgba(8,9,13,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex  flex-col gap-6 items-center justify-center px-6 py-4 text-center">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/7 px-4 py-2 text-xs font-semibold uppercase  text-white/70">
          Globe motion background
        </div>

        <h2 className="text-4xl font-semibold  text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mx-auto  max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
          {description}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button>{primaryText}</Button>

          {secondaryText && <Button variant="white">{secondaryText}</Button>}
        </div>
      </div>
    </section>
  );
};

export default CTA;
