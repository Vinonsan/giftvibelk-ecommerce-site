import type { Metadata } from "next";
import Footer from "./components/layouts/Footer";
import { Geist } from "next/font/google";
import Header from "./components/layouts/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Giftvibelk | Online Gift Shop in Sri Lanka",
    template: "%s | Giftvibelk",
  },
  description:
    "Giftvibelk is a Sri Lanka gift shop for birthdays, anniversaries, weddings, surprises, and heartfelt celebrations with stylish gift ideas for every occasion.",
  keywords: [
    "gift shop sri lanka",
    "online gifts sri lanka",
    "birthday gifts sri lanka",
    "anniversary gifts sri lanka",
    "wedding gifts sri lanka",
    "gift delivery sri lanka",
    "giftvibelk",
  ],
  applicationName: "Giftvibelk",
  category: "shopping",
  openGraph: {
    title: "Giftvibelk | Online Gift Shop in Sri Lanka",
    description:
      "Discover birthday, anniversary, wedding, and surprise gift collections for loved ones across Sri Lanka.",
    siteName: "Giftvibelk",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giftvibelk | Online Gift Shop in Sri Lanka",
    description:
      "Shop thoughtful gifts for birthdays, anniversaries, weddings, and celebrations in Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-LK" className={`${geistSans.variable} h-full w-full antialiased`}>
     
      <body suppressHydrationWarning className="flex flex-col">
         <Header />
        <main className="flex flex-col gap-12 px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
