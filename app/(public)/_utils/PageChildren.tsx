import { Fragment } from "react/jsx-runtime";
import HomeCategories from "./components/HomeCategories";
import HomeHeader from "./components/HomeHeader";
import HomeHero from "./components/HomeHero";
import HomeOccasions from "./components/HomeOccasions";
import HomeWhyChoose from "./components/HomeWhyChoose";

export default function PageChildren() {
  return (
    <Fragment>
        <HomeHeader />

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <HomeHero />
          <HomeCategories />
        </div>

        <HomeWhyChoose />
        <HomeOccasions />
    </Fragment>
  );
}
