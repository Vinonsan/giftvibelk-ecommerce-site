"use client";

import Link from "next/link";
import Image from "next/image";
import { giftCategories } from "../constants/home";
import Heading from "@/components/layouts/Heading";
import { useGetAllCatagoryQuery } from "@/lib/redux/api/catagory/api";

function createCategorySlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const Categories = () => {
  const { data, isLoading } = useGetAllCatagoryQuery({ page: 1, limit: 10 });
  const apiCategories = data?.items.filter((category) => !category.isArchived) ?? [];
  const categories = apiCategories.length
    ? apiCategories.map((category, index) => ({
        title: category.name,
        image: category.imageUrl || giftCategories[index % giftCategories.length]?.image || "/categoroies/3.png",
        slug: createCategorySlug(category.name),
      }))
    : giftCategories;

  return (
    <section aria-label="Gift categories Sri Lanka" >
      <div className="space-y-12">
        <Heading
          tag="Giftvibelk Collections"
          title="Explore Gift Categories"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              id={category.slug}
              href={`/collections#${category.slug}`}
              className="group overflow-hidden rounded-2xl border border-primary/10   shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} gift delivery Sri Lanka`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {isLoading && !apiCategories.length ? (
          <p className="sr-only" aria-live="polite">Loading gift categories</p>
        ) : null}
      </div>
    </section>
  );
}

export default Categories
