'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Svg from "../Svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Service" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.setAttribute(
      "data-theme",
      nextIsDark ? "dark" : "light",
    );
    setIsDark(nextIsDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;

    document.documentElement.setAttribute(
      "data-theme",
      nextIsDark ? "dark" : "light",
    );
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Logo.png"
            alt="Giftvibelk logo"
            width={180}
            height={60}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-primary/10 px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-secondary text-white"
                  : "text-muted-foreground hover:bg-secondary/8 hover:text-secondary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 text-foreground transition hover:border-primary hover:text-primary"
          >
            <Svg name={isDark ? "sun" : "moon"} className="h-5 w-5" />
          </button>

          <Link
            href="/cart"
            aria-label="Open cart"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 text-foreground transition hover:border-primary hover:text-primary"
          >
            <Svg name="cart" className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <nav className="border-t border-primary/10 px-4 py-3 md:hidden sm:px-6">
        <div className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "border-primary bg-primary text-white"
                  : "border-primary/10 text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
