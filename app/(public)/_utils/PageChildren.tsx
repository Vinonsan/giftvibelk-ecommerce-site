import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialOfferCard from "./components/SpecialOfferCard";

export default function PageChildren() {
  return (
    <Fragment>
      <Hero />
      <SpecialOfferCard />
      <FeaturedProducts />
      <Categories />
    </Fragment>
  );
}
