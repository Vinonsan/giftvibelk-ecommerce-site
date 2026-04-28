import CommonPageHero from "@/components/layouts/CommonPageHero";
import MainServices from "./Components/MainService";
import Occasions from "./Components/Occasions";
import DeliveryCoverage from "./Components/DeliveryCoverage";

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
      </div>
    </div>
  );
}
