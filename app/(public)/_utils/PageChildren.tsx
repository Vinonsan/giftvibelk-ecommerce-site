import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialOfferCard from "./components/SpecialOfferCard";
import Calltoaction from "@/app/components/layouts/Calltoaction";

export default function PageChildren() {
  return (
    <Fragment>
      <Hero />
      <SpecialOfferCard />
      <FeaturedProducts />
      <Categories />
      <Calltoaction
        title="Ready to Elevate Your Style?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate."
        primaryText="Get Started"
        secondaryText="Learn More"
      />
    </Fragment>
  );
}
