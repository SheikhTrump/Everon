import type { Metadata } from "next";
import { Suspense } from "react";
import PropertiesCatalog from "@/components/PropertiesCatalog";

export const metadata: Metadata = {
  title: "Properties & Architectural Portfolio | EVERON Bangladesh",
  description:
    "Explore Everon's luxury residential enclaves, Grade-A commercial towers, and master-planned riverside developments in Gulshan, Banani, Motijheel, and Chittagong.",
  keywords: [
    "Everon properties",
    "luxury apartments Dhaka",
    "commercial real estate Bangladesh",
    "Gulshan apartments",
    "Banani residences",
    "Purbachal land",
  ],
  openGraph: {
    title: "Properties & Developments | EVERON",
    description:
      "Explore Everon's luxury residential, commercial, and land developments across Bangladesh.",
    type: "website",
  },
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-40 flex items-center justify-center">
          <div className="text-gold font-display text-lg tracking-widest uppercase animate-pulse">
            Loading Catalog...
          </div>
        </div>
      }
    >
      <PropertiesCatalog />
    </Suspense>
  );
}
