import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialOfferCard from "./components/SpecialOfferCard";
import Calltoaction from "@/app/components/layouts/Calltoaction";
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
        title="Ready to Elevate Your Style?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate."
        primaryText="Get Started"
        secondaryText="Learn More"
      />
      </div>
    </Fragment>
  );
}

export default PageChildren;