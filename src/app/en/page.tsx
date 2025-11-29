import CompactLanding from "../component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Premium Beauty & Wellness Booking Platform",
  description: "Your beauty, perfectly scheduled. Book premium treatments at the finest beauty centers, clinics, and spas. Pay with Tabby & Tamara.",
  keywords: "beauty center booking, spa appointments, aesthetic clinics, wellness centers, luxury treatments, Tabby payments, Tamara installments",
  openGraph: {
    title: "MuchGlow - Your Beauty, Perfectly Scheduled",
    description: "Premium beauty and wellness booking platform",
    images: ["/muchglow.png"],
  },
};

export default function Home() {
  return <CompactLanding lang="en" />;
}
 
