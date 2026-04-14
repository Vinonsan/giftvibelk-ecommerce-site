import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/lib/products";
import { defaultTwitter, siteConfig } from "@/app/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found on Giftvibelk.",
      alternates: {
        canonical: `/products/${slug}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: [...siteConfig.keywords, ...product.keywords, product.category],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Giftvibelk`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      ...defaultTwitter,
      title: `${product.name} | Giftvibelk`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage(props: ProductPageProps) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="mx-auto grid w-full max-w-6xl gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-primary/10 bg-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-5">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {product.category}
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          {product.name}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          {product.description}
        </p>
        <dl className="grid gap-4 rounded-[2rem] border border-primary/10 bg-card p-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm uppercase tracking-[0.2em] text-primary">
              Price
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-foreground">
              {product.price}
            </dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.2em] text-primary">
              Stock
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-foreground">
              {product.stock} available
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
