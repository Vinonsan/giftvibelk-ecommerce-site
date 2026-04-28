import CommonPageHero from "@/components/layouts/CommonPageHero";
import ContactForm from "./Components/ContactForm";
import QuickContact from "./Components/QuickContact";
import Map from "./Components/Map";

export default function PageChildren() {
  return (
    <div >
      <CommonPageHero
        badge="Get In Touch"
        currentPage="Contact"
        title="Let’s plan a gift experience that feels special from start to finish."
        description="Reach out for custom gifting, delivery coordination, or help choosing the right surprise. We are here to make the process simple and thoughtful."
      />
      <div className="px-8 py-12 flex flex-col gap-24">
      <ContactForm />
      <QuickContact />
      <Map />
      </div>
    </div>
  );
}
