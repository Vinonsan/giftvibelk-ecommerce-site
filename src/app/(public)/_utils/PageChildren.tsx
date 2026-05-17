import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Calltoaction from "@/components/layouts/Calltoaction";
import Testimonial from "./components/Testimonial";

const PageChildren = () => {
  return (
    <Fragment>
      <div className="px-8 py-12 flex flex-col gap-24">
      <Hero />
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
        secondaryHref="/products"
      />
      </div>
    </Fragment>
  );
}

export default PageChildren;
