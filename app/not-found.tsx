"use client";

import Button from "@/app/components/Button";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fffaf7] px-6 py-14 shadow-[0_20px_60px_rgba(117,13,18,0.05)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,184,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(117,13,18,0.06),transparent_30%)]" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10">
            <SearchX size={36} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Page Not Found
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The page you are looking for does not exist.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The link may be broken, the page may have been moved, or the URL
            might be incorrect. You can go back to the previous page or return
            to the homepage.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => router.back()} variant="border">
              <ArrowLeft size={18} />
              Back
            </Button>

            <Button href="/" variant="primary">
              <Home size={18} />
              Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
