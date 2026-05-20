import type { Metadata } from "next";
import PageChildren from "./PageChildren";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact GiftVibeLK | Custom Gift Orders & Delivery Support Sri Lanka",
  description:
    "Contact GiftVibeLK for birthday gifts, flower delivery, cakes, surprise boxes, personalized gifts, custom gift requests, and delivery support in Sri Lanka.",
  path: "/contact",
  keywords: [
    "contact GiftVibeLK",
    "custom gift order Sri Lanka",
    "gift delivery support Sri Lanka",
    "personalized gifts contact Sri Lanka",
  ],
});

const ContactPage = () => {
  return <PageChildren />;
};

export default ContactPage;
