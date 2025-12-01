import CompactLanding from "./component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Your Smart Platform for Beauty and Health Services",
  description: "Book appointments, send digital gifts, discover clinics and salons, and enjoy modern, secure payments. AI Face Analysis, Smart Product Search, Flexible Payments with Stripe, Tamara & Tabby.",
  keywords: "beauty booking app, salon appointments, aesthetic clinics, fitness centers, digital gift cards, AI face analysis, smart product search, Stripe payments, Tamara installments, Tabby payments, GCC beauty platform, health and wellness booking, gym memberships, personal training, spa booking UAE",
  openGraph: {
    title: "MuchGlow — Your Smart Platform for Beauty and Health Services",
    description: "Book appointments, send digital gifts, discover clinics and salons. AI-powered beauty platform with secure payments.",
    images: ["/muchglow.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuchGlow — Beauty and Health Services Platform",
    description: "Book appointments, send digital gifts, discover clinics and salons with AI-powered recommendations",
    images: ["/muchglow.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://muchglow.com",
    languages: {
      "en": "/en",
      "ar": "/ar",
    },
  },
};

export default function Home() {
  return <CompactLanding lang="en" />;
}
