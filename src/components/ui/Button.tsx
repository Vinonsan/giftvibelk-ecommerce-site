'use client';

import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "transparent"
  | "none"
  | "outline"
  | "border"
  | "white"
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/80",
  secondary:
    "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/80",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
  border:
    "border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white",
  white:
    "border border-white bg-transparent text-white hover:bg-white hover:text-secondary",
  transparent:
    "bg-transparent text-foreground hover:bg-primary/8 hover:text-primary",
  none: "bg-transparent text-foreground hover:bg-transparent hover:text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-7 py-4 text-base",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    fullWidth = false,
    size = "md",
    variant = "primary",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
