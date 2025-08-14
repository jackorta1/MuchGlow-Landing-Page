import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "MuchGlow | Premium Beauty & Haircare Services",
  description: "Discover top-tier salon experiences with MuchGlow. From haircuts to spa treatments, we bring beauty and wellness to you with style and care.",
};
 

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" dir="ltr">
      {children}
    </div>
  );
}
