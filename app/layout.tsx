import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://everon.com.bd"),
  title: {
    default: "EVERON — Premium Real Estate Developer | Dhaka, Bangladesh",
    template: "%s | EVERON Bangladesh",
  },
  description:
    "Everon crafts iconic living sanctuaries and Grade-A commercial spaces that define the future of urban Bangladesh. Nineteen years of architectural integrity in residential and commercial developments.",
  keywords: [
    "Everon",
    "real estate Bangladesh",
    "Dhaka luxury apartments",
    "Gulshan residences",
    "Banani luxury living",
    "Chittagong property",
    "commercial towers Dhaka",
  ],
  authors: [{ name: "EVERON Real Estate Ltd." }],
  creator: "EVERON",
  openGraph: {
    title: "EVERON — Building Tomorrow's Dhaka",
    description:
      "Premium real estate developer crafting iconic living spaces in Bangladesh since 2005.",
    type: "website",
    locale: "en_US",
    siteName: "EVERON Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVERON — Premium Real Estate Developer",
    description:
      "Crafting iconic living spaces in Bangladesh since 2005.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-full flex flex-col font-body`}
      >
        <ScrollProgressBar />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </SmoothScroll>
      </body>
    </html>
  );
}
