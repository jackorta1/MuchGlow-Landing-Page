import "./globals-premium.css";
import NavbarSection from "./component/NavbarSection";
import HeroSectionPremium from "./component/HeroSectionPremium";
import TrustBadges from "./component/TrustBadges";
import AboutAppSection from "./component/AboutAppSection";
import PaymentFeature from "./component/PaymentFeature";
import ClinicServices from "./component/ClinicServices";
import SalonClients from "./component/SalonClients";
import FeatureSection from "./component/FeatureSection";
import TestimonialsSection from "./component/TestimonialsSection";
import AppShowcase from "./component/AppShowcase";
import GalleryySection from "./component/GalleryySection";
import PartnerSection from "./component/PartnerSection";
import AccordionData from "./component/AccordionData";
import FooterSection from "./component/FooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Premium Beauty & Wellness Booking Platform",
  description: "Elevate your beauty experience with MuchGlow. Book premium salon services, earn rewards, and enjoy flexible payment options with Tabby & Tamara. Join 50,000+ satisfied clients today.",
  keywords: "beauty salon booking, spa appointments, aesthetic clinics, loyalty rewards, Tabby payments, Tamara installments, GCC beauty services",
  openGraph: {
    title: "MuchGlow - Your Premium Beauty Booking Platform",
    description: "Book luxury beauty services, earn rewards, pay in installments",
    images: ["/salonglow.png"],
  },
};

export default function PremiumHome() {
  return (
    <>
      <NavbarSection />
      <HeroSectionPremium />
      <TrustBadges />
      <AboutAppSection />
      <FeatureSection />
      <PaymentFeature />
      <ClinicServices />
      <SalonClients />
      <TestimonialsSection />
      <AppShowcase />
      <GalleryySection />
      <PartnerSection />
      <AccordionData />
      <FooterSection />
    </>
  );
}