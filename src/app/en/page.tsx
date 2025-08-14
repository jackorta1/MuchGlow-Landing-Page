import "../globals-premium.css";
import "../gift-transfer.css";
import "../partner-hero.css";
import HeroBar from "../component/HeroBar";
import PartnerHeroSection from "../component/PartnerHeroSection";
import TrustBadges from "../component/TrustBadges";
import AboutAppSection from "../component/AboutAppSection";
import FeatureSection from "../component/FeatureSection";
import PaymentFeature from "../component/PaymentFeature";
import ClinicServices from "../component/ClinicServices";
import SalonClients from "../component/SalonClients";
import TestimonialsSection from "../component/TestimonialsSection";
import AppShowcase from "../component/AppShowcase";
import AIBeautySection from "../component/AIBeautySection";
import GiftTransferSection from "../component/GiftTransferSection";
import GalleryySection from "../component/GalleryySection";
import PartnerSection from "../component/PartnerSection";
import AccordionData from "../component/AccordionData";
import FooterSection from "../component/FooterSection";


 
export default function Home() {
  return (
    <>
      <HeroBar />
      <PartnerHeroSection />
      <TrustBadges />
      <AboutAppSection />
      <FeatureSection />
      <PaymentFeature />
      <ClinicServices />
      <SalonClients />
      <TestimonialsSection />
      <AIBeautySection />
      <GiftTransferSection />
      <AppShowcase />
      <GalleryySection />
      <PartnerSection />
      <AccordionData />
      <FooterSection />
    </>
  );
}
 
