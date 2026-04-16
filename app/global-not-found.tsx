import type { Metadata } from "next";
import NotFoundScreen from "@/app/components/NotFoundScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en-LK" className="h-full w-full antialiased">
      <body suppressHydrationWarning className="min-h-screen bg-background">
        <main className="flex min-h-screen flex-col">
          <NotFoundScreen />
        </main>
      </body>
    </html>
  );
}
