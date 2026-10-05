import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export const metadata: Metadata = {
  title: "Srinivas Opticals | Premium Eyewear & Eye Care",
  description: "Discover premium eyeglasses, sunglasses, lenses and professional eye care at Srinivas Opticals. Find the perfect frame for your vision and style.",
  icons: { icon: "/logo.jpeg" },
  openGraph: { title: "Srinivas Opticals", description: "See clear. Look better.", images: ["/logo.jpeg"], type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
const ld = { "@context": "https://schema.org", "@type": "Optician", name: "Srinivas Opticals", image: "/logo.jpeg", slogan: "See clear. Look better." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${sans.variable} ${serif.variable}`}><body className="font-sans antialiased">
    {children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></body></html>);
}
