import CompactLanding from "../component/CompactLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MuchGlow | منصة متكاملة لخدمات الصحة والجمال",
  description: "احجز مواعيدك، أرسل الهدايا الرقمية، اكتشف أفضل العيادات والصالونات ومراكز اللياقة، وتمتّع بخيارات دفع حديثة وآمنة مع Stripe وTamara وTabby.",
  keywords: "حجز صالون تجميل، مواعيد سبا، عيادات تجميل، مراكز الصحة والجمال، بطاقات هدايا رقمية، دفع تابي، تقسيط تمارا، تحليل الوجه بالذكاء الاصطناعي، حجز نادي رياضي، لياقة بدنية",
  openGraph: {
    title: "MuchGlow — منصّة متكاملة لخدمات الصحة والجمال",
    description: "احجز مواعيدك، أرسل الهدايا الرقمية، اكتشف أفضل العيادات والصالونات، وتمتّع بخيارات دفع حديثة وآمنة",
    images: ["/muchglow.png"],
    locale: "ar_AE",
  },
};

export default function Home() {
  return <CompactLanding lang="ar" />;
}
