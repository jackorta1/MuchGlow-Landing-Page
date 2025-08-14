import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ماتش غلو | خدمات تجميل وعناية بالشعر فاخرة",
  description: "اكتشف أفضل تجارب الصالون مع ماتش غلو. من قصات الشعر إلى جلسات السبا، نقدم لك الجمال والراحة بأناقة واهتمام.",
};
 

export default function ArLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="ar" dir="rtl" className="rtl">
      {children}
    </div>
  );
}
