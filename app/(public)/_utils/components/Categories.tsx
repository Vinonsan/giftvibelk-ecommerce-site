"use client";

import Link from "next/link";
import Image from "next/image";
import { giftCategories } from "../constants/home";
import Heading from "@/app/components/layouts/Heading";

export default function Categories() {
  return (
    <section aria-label="Gift categories Sri Lanka" className="py-16 sm:py-20">
      <div className="space-y-12">
        
  <Heading
  badge="Giftvibelk Collections"
  title="Explore Gift Categories"
/>


        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {giftCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-2xl border border-primary/10 bg-white dark:bg-muted/20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} gift delivery Sri Lanka`}
                  fill
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
