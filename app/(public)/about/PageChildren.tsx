import CommonPageHero from "@/app/components/layouts/CommonPageHero";
import HowItWorks from "./components/HowItWorks";
import HowToOrder from "./components/HowToOrder";
import Mission from "./components/Mission";

const PageChildren = () => {
  return (
    <div>
      <CommonPageHero
        badge="Our Story"
        currentPage="About"
        title="A modern gifting brand built around thoughtful moments."
        description="Giftvibelk brings together curated products, polished presentation, and dependable delivery so every surprise feels warm, memorable, and easy to arrange."
      />
      <div className="px-8 py-12 flex flex-col gap-24">
        <Mission />
        <HowItWorks />
        <HowToOrder />
      </div>
    </div>
  );
};

export default PageChildren;
