import CompactLanding from "./component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Premium Beauty & Wellness Booking Platform",
  description: "Your beauty, perfectly scheduled. Book premium treatments, get AI-powered recommendations, and enjoy flexible payment options at the finest beauty centers, clinics, and spas. Pay with Tabby & Tamara.",
  keywords: "beauty center booking, spa appointments, aesthetic clinics, wellness centers, AI beauty analysis, luxury treatments, Tabby payments, Tamara installments, gift beauty treatments, salon booking UAE, beauty platform GCC",
  openGraph: {
    title: "MuchGlow - Your Beauty, Perfectly Scheduled",
    description: "Premium beauty and wellness booking platform with AI recommendations and flexible payments",
    images: ["/muchglow.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuchGlow - Premium Beauty Booking",
    description: "Book premium treatments at top beauty centers",
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
