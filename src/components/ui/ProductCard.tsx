"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Eye, ShoppingCart, Heart } from "lucide-react";

export type ProductCardProps = {
  category: string;
  image: string;
  name: string;
  price: string;
  slug: string;
  stock: number;
};

export default function ProductCard({
  category,
  image,
  name,
  price,
  slug,
  stock,
}: ProductCardProps) {
  const inStock = stock > 0;
  const [liked, setLiked] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-sm ">
      <Link
        href={`/products/${slug}`}
        className="block relative h-72 overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div
            className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border shadow-sm
                bg-black/40 border-white/20
                ${inStock ? "text-green-400" : "text-red-400"}`}
          >
            {inStock ? `${stock} In Stock` : "Out of Stock"}
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            variant="none"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur shadow-md"
          >
            <Heart
              size={16}
              className={`transition ${
                liked ? "text-white fill-white" : "text-white"
              }`}
            />
          </Button>
        </div>
      </Link>

      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {category}
        </p>

        <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition">
          {name}
        </h3>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-foreground">{price}</p>

          <div className="absolute bottom-3 right-3 flex gap-2">
            <Button variant="none" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-md hover:scale-110 transition">
              <Eye size={16} className="text-primary" />
            </Button>

            <Button variant="none" className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary shadow-md hover:scale-110 transition">
              <ShoppingCart size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
