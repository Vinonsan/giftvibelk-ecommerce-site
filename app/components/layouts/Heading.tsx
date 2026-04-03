import React from "react";
import Badge from "@/app/components/Badge";

type HeadingProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
};

const Heading = ({
  title,
  subtitle,
  badge,
  align = "center",
}: HeadingProps) => {
  // 👉 Split last word
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div
      className={`mx-auto max-w-2xl space-y-4 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Badge variant="dark" dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        <span className="text-foreground">{firstPart} </span>
        <span className="text-primary">{lastWord}</span>
      </h2>

      {subtitle && (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;