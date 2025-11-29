import CompactLanding from "../component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ماتش جلو | منصة حجز الجمال والعافية المتميزة",
  description: "جمالك، مجدول بإتقان. احجز علاجات متميزة في أفضل مراكز التجميل والعيادات والمنتجعات. ادفع بمرونة مع تابي وتمارا.",
  keywords: "حجز مركز تجميل، مواعيد سبا، عيادات تجميل، مراكز عافية، علاجات فاخرة، دفع تابي، تقسيط تمارا",
  openGraph: {
    title: "ماتش جلو - جمالك، مجدول بإتقان",
    description: "منصة حجز الجمال والعافية المتميزة",
    images: ["/muchglow.png"],
    locale: "ar_AE",
  },
};

export default function Home() {
  return <CompactLanding lang="ar" />;
}
