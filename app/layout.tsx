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

export const metadata: Metadata = {
  metadataBase: new URL("https://everon.com.bd"),
  title: {
    default: "EVERON — Real Estate Developer | Dhaka, Bangladesh",
    template: "%s | EVERON Bangladesh",
  },
  description:
    "Everon is a newly launched real estate developer in Bangladesh, currently planning residential and commercial projects in Dhaka and Chittagong.",
  keywords: [
    "Everon",
    "real estate Bangladesh",
    "Dhaka apartments",
    "Gulshan residences",
    "Banani apartments",
    "Chittagong property",
    "commercial towers Dhaka",
  ],
  authors: [{ name: "EVERON Real Estate Ltd." }],
  creator: "EVERON",
  openGraph: {
    title: "EVERON — Real Estate, Planned Right",
    description:
      "A newly launched real estate developer in Bangladesh, currently planning projects in Dhaka and Chittagong.",
    type: "website",
    locale: "en_US",
    siteName: "EVERON Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVERON — Real Estate Developer",
    description:
      "A newly launched real estate developer, currently planning projects in Bangladesh.",
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
