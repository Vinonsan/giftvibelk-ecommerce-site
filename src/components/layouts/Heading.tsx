import React from "react";
import Svg from "@/components/ui/Svg";

type HeadingProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  tag?: string;
  align?: "left" | "center";
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Heading = ({
  title,
  subtitle,
  badge,
  tag,
  align = "center",
}: HeadingProps) => {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");
  const isCenter = align === "center";
  const label = tag ?? badge;

  return (
    <div
      className={cn(
        "relative",
        isCenter ? "text-center" : "text-left",
      )}
    >
      {/* Top Text */}
      {label && (
        <div
          className={cn(
            "mb-5 flex items-center gap-4",
            isCenter ? "justify-center" : "justify-start",
          )}
        >
          <span className="h-px w-14 bg-primary/30" />

          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <Svg name="gift" className="h-4 w-4" />
            {label}
          </p>

          <span className="h-px w-14 bg-primary/30" />
        </div>
      )}

      {/* Title */}
      <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
        <span>{firstPart} </span>

        <span className="relative text-primary">
          {lastWord}
        </span>
      </h2>

  

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
            isCenter && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
