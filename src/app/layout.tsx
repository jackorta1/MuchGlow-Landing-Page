
import localFont from "next/font/local";
import "./globals.css";
import "./responsive-system.css";
import "./premium-aesthetic.css";
import "./animations.css";
import "./muchglow-premium.css";
import "./premium-animations.css";
import "./button-system.css";
import "./gift-transfer.css";
import "./partner-hero.css";
import "./gym-fitness.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
