import AIBeautyAnalysisAr from "../../component/AIBeautyAnalysisAr";
import NavbarSectionAr from "../../component/NavbarSectionAr";
import FooterSectionAr from "../../component/FooterSectionAr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تحليل الجمال بالذكاء الاصطناعي | ماتش غلو - اختبار البشرة والأنماط المخصص",
  description: "اكتشف روتين الجمال المثالي لك مع تحليل البشرة المدعوم بالذكاء الاصطناعي من ماتش غلو. احصل على توصيات علاجية مخصصة واقتراحات للأنماط وعروض حصرية.",
  keywords: "تحليل الجمال بالذكاء الاصطناعي، تحليل البشرة، كشف شكل الوجه، الجمال المخصص، العناية بالبشرة بالذكاء الاصطناعي، توصيات الجمال، ماتش غلو",
  openGraph: {
    title: "تحليل الجمال والبشرة بالذكاء الاصطناعي - ماتش غلو",
    description: "تحليل جمال ثوري مدعوم بالذكاء الاصطناعي للحصول على توصيات مخصصة",
    images: ["/salonglow.png"],
  },
};

export default function AIBeautyPageAr() {
  return (
    <>
      <NavbarSectionAr />
      <AIBeautyAnalysisAr />
      <FooterSectionAr />
    </>
  );
}