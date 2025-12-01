import CompactLanding from "../component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Your Smart Platform for Beauty and Health Services",
  description: "Book appointments, send digital gifts, discover clinics and salons, and enjoy modern, secure payments with Stripe, Tamara & Tabby. AI-powered beauty recommendations.",
  keywords: "beauty booking app, salon appointments, aesthetic clinics, fitness centers, digital gift cards, AI face analysis, Stripe payments, Tamara installments, Tabby payments, GCC beauty platform, health and wellness booking",
  openGraph: {
    title: "MuchGlow — Your Smart Platform for Beauty and Health Services",
    description: "Book appointments, send digital gifts, discover clinics and salons, and enjoy modern, secure payments.",
    images: ["/muchglow.png"],
  },
};

export default function Home() {
  return <CompactLanding lang="en" />;
}
 
