import CompactLanding from "./component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | Premium Wellness & Lifestyle Booking Platform",
  description: "Your wellness, perfectly scheduled. Book premium treatments at the finest salons, clinics, gyms, spas & fitness centers. Pay flexibly with Tabby & Tamara.",
  keywords: "wellness booking, gym memberships, spa appointments, aesthetic clinics, fitness centers, personal training, salon booking UAE, wellness platform GCC, Tabby payments, Tamara installments",
  openGraph: {
    title: "MuchGlow - Your Wellness, Perfectly Scheduled",
    description: "Premium wellness and lifestyle booking platform - salons, gyms, spas & clinics with flexible payments",
    images: ["/muchglow.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuchGlow - Premium Wellness Booking",
    description: "Book premium treatments at top salons, gyms, clinics & spas",
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
