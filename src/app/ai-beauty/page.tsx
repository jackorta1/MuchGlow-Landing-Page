import AIBeautyAnalysis from "../component/AIBeautyAnalysis";
import NavbarSection from "../component/NavbarSection";
import FooterSection from "../component/FooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Beauty Analysis | MuchGlow - Personalized Skin & Style Test",
  description: "Discover your perfect beauty routine with MuchGlow's AI-powered skin analysis. Get personalized treatment recommendations, style suggestions, and exclusive offers.",
  keywords: "AI beauty analysis, skin analysis, face shape detection, personalized beauty, AI skincare, beauty recommendations, MuchGlow AI",
  openGraph: {
    title: "AI Beauty & Skin Analysis - MuchGlow",
    description: "Revolutionary AI-powered beauty analysis for personalized recommendations",
    images: ["/salonglow.png"],
  },
};

export default function AIBeautyPage() {
  return (
    <>
      <NavbarSection />
      <AIBeautyAnalysis />
      <FooterSection />
    </>
  );
}