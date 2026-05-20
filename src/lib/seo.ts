export const siteConfig = {
  name: 'GiftVibeLK',
  url: 'https://giftvibelk.lk',
  locale: 'en_LK',
}

export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

type SeoMetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function createSeoMetadata({ title, description, path = '/', keywords = [] }: SeoMetadataInput) {
  const url = `${siteConfig.url}${path === '/' ? '' : path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
