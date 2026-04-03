import { Fragment } from "react/jsx-runtime";
import Hero from "./components/Hero";
import Categories from "./components/Categories";


export default function PageChildren() {
  return (
    <Fragment>
      <Hero />
      <Categories />
    </Fragment>
  );
}
