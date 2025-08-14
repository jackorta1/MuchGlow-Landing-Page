import PremiumIntegratedLanding from "./premium-integrated/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Premium Beauty & Wellness Booking Platform",
  description: "Your beauty, perfectly scheduled. Book premium treatments, get AI-powered recommendations, and enjoy flexible payment options at the finest clinics and salons.",
  keywords: "beauty salon booking, spa appointments, aesthetic clinics, AI beauty analysis, luxury treatments, Tabby payments, Tamara installments, gift beauty treatments",
  openGraph: {
    title: "MuchGlow - Your Beauty, Perfectly Scheduled",
    description: "Premium beauty and wellness booking platform with AI recommendations",
    images: ["/salonglow.png"],
  },
};

export default function Home() {
  return <PremiumIntegratedLanding />;
}
