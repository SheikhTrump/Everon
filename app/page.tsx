import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import { siteConfig, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "EVERON — Building Tomorrow's Dhaka | Luxury Real Estate Developer",
  description:
    "Everon crafts iconic living sanctuaries and Grade-A commercial spaces in Bangladesh since 2005. Discover residential enclaves in Gulshan, Banani, Chittagong & Purbachal.",
  openGraph: {
    title: "EVERON — Building Tomorrow's Dhaka",
    description:
      "Premium real estate developer crafting iconic living spaces in Bangladesh since 2005.",
    type: "website",
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    legalName: "Everon Real Estate Development Ltd.",
    description: siteConfig.description,
    url: "https://everon.com.bd",
    logo: "https://everon.com.bd/favicon.ico",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Dhaka",
      postalCode: "1213",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7937,
      longitude: 90.4023,
    },
    foundingDate: "2005",
    numberOfEmployees: "150+",
    makesOffer: projects.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": p.type === "Commercial" ? "CommercialBuilding" : "ApartmentComplex",
        name: p.name,
        description: p.description,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomeView />
    </>
  );
}
