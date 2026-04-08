import type { SVGProps } from "react";

type SvgName =
  | "cart"
  | "sun"
  | "moon"
  | "facebook"
  | "instagram"
  | "youtube"
  | "tiktok";

export type SvgProps = SVGProps<SVGSVGElement> & {
  name: SvgName;
};

export default function Svg({ name, ...props }: SvgProps) {
  if (name === "cart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <circle cx="9" cy="20" r="1.25" />
        <circle cx="18" cy="20" r="1.25" />
        <path d="M3 4h2.5l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20.5 8H7.1" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2.2" />
        <path d="M12 19.3v2.2" />
        <path d="m4.93 4.93 1.56 1.56" />
        <path d="m17.5 17.5 1.57 1.57" />
        <path d="M2.5 12h2.2" />
        <path d="M19.3 12h2.2" />
        <path d="m4.93 19.07 1.56-1.56" />
        <path d="m17.5 6.5 1.57-1.57" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M20 14.2A7.8 7.8 0 1 1 9.8 4 6.3 6.3 0 0 0 20 14.2Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.9 0-4.7 1.7-4.7 4.9V11H7v3h2.5v7h4Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M21.4 7.2a2.9 2.9 0 0 0-2-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.4.5a2.9 2.9 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.6 4.8a2.9 2.9 0 0 0 2 2c1.7.5 7.4.5 7.4.5s5.7 0 7.4-.5a2.9 2.9 0 0 0 2-2c.6-1.7.6-4.8.6-4.8s0-3.1-.6-4.8ZM10 15.6V8.4l6 3.6-6 3.6Z" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M14.6 3c.5 1.8 1.6 3.1 3.4 3.8v2.9a8 8 0 0 1-3.2-1v5.8c0 3.2-2.5 5.5-5.7 5.5a5.4 5.4 0 0 1-1.4-10.6v3a2.5 2.5 0 1 0 3.6 2.3V3h3.3Z" />
      </svg>
    );
  }

  return null;
}
