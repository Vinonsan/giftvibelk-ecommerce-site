import type { Metadata } from "next";

export const siteConfig = {
  name: "GiftVibeLK",
  legalName: "GiftVibeLK",
  url: "https://giftvibelk.lk",
  logo: "/logo/logo.png",
  defaultOgImage: "/images/birthday.png",
  email: "support@giftvibelk.com",
  phone: "+94754476969",
  addressCountry: "LK",
  locale: "en_LK",
  socialLinks: [
    "https://www.facebook.com/share/18RHQ4b6zt/",
    "https://youtube.com/@giftvibelk9920?si=KxvCS9mU-RVufHJZ",
    "https://www.instagram.com/giftvibelk?igsh=ZmJocjk2bWQ5ZXp5",
    "https://www.tiktok.com/@giftvibelk?_r=1&_t=ZS-96RNJ0YfQ6X",
  ],
};

export const seoKeywords = [
  "birthday gifts Sri Lanka",
  "flower delivery Sri Lanka",
  "surprise boxes Sri Lanka",
  "cakes delivery Sri Lanka",
  "personalized gifts Sri Lanka",
  "online gift shop Sri Lanka",
  "gift delivery Colombo",
  "anniversary gifts Sri Lanka",
  "custom gift boxes Sri Lanka",
  "GiftVibeLK",
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createSeoMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.defaultOgImage,
}: SeoMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path;
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} online gift delivery in Sri Lanka`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function getJsonLd() {
  const logoUrl = new URL(siteConfig.logo, siteConfig.url).toString();
  const collectionUrl = new URL("/collections", siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: logoUrl,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: siteConfig.socialLinks,
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.addressCountry,
        },
      },
      {
        "@type": "Store",
        "@id": `${siteConfig.url}/#store`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: logoUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.addressCountry,
        },
        areaServed: {
          "@type": "Country",
          name: "Sri Lanka",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "GiftVibeLK gift collections",
          url: collectionUrl,
          itemListElement: [
            "Birthday gifts",
            "Flower delivery",
            "Surprise boxes",
            "Cakes and chocolates",
            "Personalized gifts",
          ].map((name) => ({
            "@type": "OfferCatalog",
            name,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-LK",
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#sitelinks`,
        name: "GiftVibeLK main site links",
        itemListElement: [
          { name: "About", url: new URL("/about", siteConfig.url).toString() },
          { name: "Services", url: new URL("/services", siteConfig.url).toString() },
          { name: "Contact", url: new URL("/contact", siteConfig.url).toString() },
          { name: "Collections", url: collectionUrl },
        ].map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
      },
      {
        "@type": "SiteNavigationElement",
        name: ["About", "Services", "Contact", "Collections"],
        url: [
          new URL("/about", siteConfig.url).toString(),
          new URL("/services", siteConfig.url).toString(),
          new URL("/contact", siteConfig.url).toString(),
          collectionUrl,
        ],
      },
    ],
  };
}
