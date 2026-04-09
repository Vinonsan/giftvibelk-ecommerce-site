import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "dark" | "glass";
type BadgeSize = "sm" | "md";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  dot?: boolean;
  glassified?: boolean;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  primary: "border border-red-300 bg-red-100 text-red-800",
  secondary:
    "border border-orange-300 bg-orange-100 text-orange-700",
  dark: "border border-gray-300 bg-gray-100 text-gray-700",
  success: "border border-emerald-300 bg-emerald-100 text-emerald-700",
  warning: "border border-amber-300 bg-amber-100 text-amber-700",
  danger: "border border-rose-300 bg-rose-100 text-rose-700",
  glass: "border border-white/30 bg-white/10 backdrop-blur text-white",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "gap-1.5 px-2.5 py-1 text-xs",
  md: "gap-2 px-3 py-1.5 text-xs",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Badge({
  children,
  className,
  dot = false,
  glassified = false,
  size = "md",
  variant = "primary",
  ...props
}: BadgeProps) {
  const glassifiedClasses = glassified
    ? "bg-white/10  backdrop-blur-md shadow-sm shadow-black/10"
    : variantClasses[variant];

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full font-semibold tracking-wide",
        glassifiedClasses,
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {dot ? <span className="h-2 w-2 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}
