import CommonPageHero from "@/components/layouts/CommonPageHero";
import HowItWorks from "./components/HowItWorks";
import HowToOrder from "./components/HowToOrder";
import Mission from "./components/Mission";
import Calltoaction from "@/components/layouts/Calltoaction";

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
        <Calltoaction
  badge="Premium Gift Collections"
  title="Explore Our Special Gift Services"
  description="Discover beautifully curated gift collections, surprise packages, flower arrangements, cakes, and personalized gifts crafted for every memorable moment."
  primaryText="View Services"
  primaryHref="/services"
  secondaryText="Contact Us"
  secondaryHref="/contact"
/>
      </div>
    </div>
  );
};

export default PageChildren;
