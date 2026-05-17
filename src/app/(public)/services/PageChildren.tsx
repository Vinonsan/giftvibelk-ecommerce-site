import CommonPageHero from "@/components/layouts/CommonPageHero";
import MainServices from "./Components/MainService";
import Occasions from "./Components/Occasions";
import DeliveryCoverage from "./Components/DeliveryCoverage";
import Calltoaction from "@/components/layouts/Calltoaction";

export default function PageChildren() {
  return (
    <div >
      <CommonPageHero
        badge="What We Offer"
        currentPage="Services"
        title="Services designed to make gifting feel effortless and premium."
        description="From ready-to-send gift boxes to custom orders and surprise delivery coordination, our service experience is built for people who want style, ease, and thoughtful details."
      />

      <div className="px-8 py-12 flex flex-col gap-24">
      <MainServices />
      <Occasions />
      <DeliveryCoverage />
      <Calltoaction
  badge="Let's Create Something Special"
  title="Get in Touch With GiftVibeLK"
  description="Have questions or need a custom gift arrangement? Contact our team and let us help you create unforgettable moments for your loved ones."
  primaryText="Contact Us"
  primaryHref="/contact"
  secondaryText="View Services"
  secondaryHref="/services"
/>
      </div>
    </div>
  );
}
