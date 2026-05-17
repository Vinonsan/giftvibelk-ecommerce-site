"use client";

import Link from "next/link";
import Image from "next/image";
import { giftCategories } from "../constants/home";
import Heading from "@/components/layouts/Heading";

const Categories = () => {
  return (
    <section aria-label="Gift categories Sri Lanka" >
      <div className="space-y-12">
        <Heading
          tag="Giftvibelk Collections"
          title="Explore Gift Categories"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {giftCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
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
      </div>
    </section>
  );
}

export default Categories
