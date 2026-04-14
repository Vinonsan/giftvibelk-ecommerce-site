import type { Metadata } from "next";

export const siteConfig = {
  name: "Giftvibelk",
  shortName: "Giftvibelk",
  url: "https://giftvibelk.lk",
  title: "Giftvibelk | Online Gift Shop in Sri Lanka",
  description:
    "Giftvibelk is a Sri Lanka gift shop for birthdays, anniversaries, weddings, surprises, and heartfelt celebrations with stylish gift ideas for every occasion.",
  keywords: [
    "gift shop sri lanka",
    "online gifts sri lanka",
    "birthday gifts sri lanka",
    "anniversary gifts sri lanka",
    "wedding gifts sri lanka",
    "gift delivery sri lanka",
    "gift hampers sri lanka",
    "giftvibelk",
  ],
  locale: "en_LK",
  ogImage: "/logo/logo.png",
} as const;

export const defaultOpenGraph: Metadata["openGraph"] = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  siteName: siteConfig.name,
  locale: siteConfig.locale,
  type: "website",
  images: [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Giftvibelk online gift shop in Sri Lanka",
    },
  ],
};

export const defaultTwitter: Metadata["twitter"] = {
  card: "summary_large_image",
  title: siteConfig.title,
  description: siteConfig.description,
  images: [siteConfig.ogImage],
};
