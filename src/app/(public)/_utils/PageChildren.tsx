import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Calltoaction from "@/components/layouts/Calltoaction";
import Testimonial from "./components/Testimonial";

const PageChildren = () => {
  const seoLinks = [
    { href: "/collections", label: "Gift Collections" },
    { href: "/services", label: "Gift Delivery Services" },
    { href: "/about", label: "About GiftVibeLK" },
    { href: "/contact", label: "Contact for Custom Gifts" },
  ];

  return (
    <Fragment>
      <div className="px-8 py-12 flex flex-col gap-24">
      <Hero />
      <nav
        aria-label="Popular GiftVibeLK pages"
        className="flex flex-wrap justify-center gap-3"
      >
        {seoLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-primary/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* <SpecialOfferCard /> */}
      <Categories />
      <FeaturedProducts />
      <Testimonial />
      <Calltoaction
        badge="Gift with love"
        title="Discover the Story Behind GiftVibeLK"
        description="Learn more about our passion for creating memorable gifts, premium collections, and joyful moments for every special occasion."
        primaryText="About Us"
        primaryHref="/about"
        secondaryText="Explore More"
        secondaryHref="/collections"
      />
      </div>
    </Fragment>
  );
}

export default PageChildren;
