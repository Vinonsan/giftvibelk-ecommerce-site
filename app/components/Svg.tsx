import type { SVGProps } from "react";

type SvgName = "cart" | "sun" | "moon";

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

  return null;
}
