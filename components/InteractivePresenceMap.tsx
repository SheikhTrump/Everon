"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

interface PinData {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: string;
  status: string;
  image: string;
  x: number; // percentage coordinates
  y: number;
  city: "dhaka" | "chittagong";
  units?: number;
  floors?: number;
  possession?: string;
}

const mapPins: PinData[] = [
  { id: "1", slug: "everon-heights", name: "Everon Heights", location: "Gulshan, Dhaka", type: "Residential", status: "Ongoing", image: "/images/project-1.jpg", x: 55, y: 38, city: "dhaka", units: 48, floors: 28, possession: "Q4 2027" },
  { id: "2", slug: "everon-gardens", name: "Everon Gardens", location: "Banani, Dhaka", type: "Residential", status: "Upcoming", image: "/images/project-2.jpg", x: 48, y: 34, city: "dhaka", units: 36, floors: 22, possession: "Q2 2028" },
  { id: "3", slug: "everon-commerce-tower", name: "Everon Commerce Tower", location: "Motijheel, Dhaka", type: "Commercial", status: "Ongoing", image: "/images/project-3.jpg", x: 58, y: 68, city: "dhaka", units: 80, floors: 34, possession: "Q1 2027" },
  { id: "4", slug: "everon-lakeside", name: "Everon Lakeside", location: "Uttara, Dhaka", type: "Residential", status: "Completed", image: "/images/project-4.jpg", x: 42, y: 16, city: "dhaka", units: 120, floors: 15, possession: "Handed Over" },
  { id: "5", slug: "everon-prime-plaza", name: "Everon Prime Plaza", location: "Dhanmondi, Dhaka", type: "Commercial", status: "Upcoming", image: "/images/project-5.jpg", x: 36, y: 55, city: "dhaka", units: 60, floors: 16, possession: "Q3 2029" },
  { id: "7", slug: "everon-riverbank-enclave", name: "Everon Riverbank Enclave", location: "Purbachal, Dhaka", type: "Land Development", status: "Upcoming", image: "/images/about-hero.jpg", x: 74, y: 22, city: "dhaka", units: 45, floors: 1, possession: "Q4 2028" },
  { id: "6", slug: "everon-chittagong-residences", name: "Everon Chittagong Residences", location: "Agrabad, Chittagong", type: "Residential", status: "Ongoing", image: "/images/project-6.jpg", x: 50, y: 48, city: "chittagong", units: 64, floors: 20, possession: "Q4 2028" },
];

export default function InteractivePresenceMap() {
  const [activeCity, setActiveCity] = useState<"dhaka" | "chittagong">("dhaka");
  const [selectedPin, setSelectedPin] = useState<PinData>(mapPins[0]);
  const [viewMode, setViewMode] = useState<"cartography" | "satellite">("cartography");

  const visiblePins = mapPins.filter((p) => p.city === activeCity);

  return (
    <div className="relative bg-ink border border-white/10 overflow-hidden shadow-2xl">
      {/* Top Bar Header */}
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/30 gap-4">
        {/* City Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveCity("dhaka");
              setSelectedPin(mapPins.find((p) => p.city === "dhaka") || mapPins[0]);
            }}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors ${
              activeCity === "dhaka"
                ? "bg-gold text-ink font-semibold"
                : "text-base/60 hover:text-base border border-white/10"
            }`}
          >
            Dhaka Metropolis (06)
          </button>
          <button
            onClick={() => {
              setActiveCity("chittagong");
              setSelectedPin(mapPins.find((p) => p.city === "chittagong") || mapPins[6]);
            }}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors ${
              activeCity === "chittagong"
                ? "bg-gold text-ink font-semibold"
                : "text-base/60 hover:text-base border border-white/10"
            }`}
          >
            Chittagong Port City (01)
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={() => setViewMode("cartography")}
            className={`transition-colors uppercase tracking-wider ${
              viewMode === "cartography"
                ? "text-gold font-semibold"
                : "text-base/40 hover:text-base"
            }`}
          >
            Territory Cartography
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setViewMode("satellite")}
            className={`transition-colors uppercase tracking-wider ${
              viewMode === "satellite"
                ? "text-gold font-semibold"
                : "text-base/40 hover:text-base"
            }`}
          >
            Satellite View
          </button>
        </div>
      </div>

      {/* Main Container: Map + Dedicated Architectural Dossier */}
      <div className="grid lg:grid-cols-12 min-h-[560px]">
        {/* Map Canvas Column (8 cols) */}
        <div className="lg:col-span-8 relative h-[460px] lg:h-auto min-h-[460px] bg-[#0E1012] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden select-none">
          {viewMode === "satellite" ? (
            <iframe
              src={
                activeCity === "dhaka"
                  ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467689.01579580855!2d90.12019425068374!3d23.780573258685937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563b1dbd8e0e0!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699900000000"
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236164.76296317767!2d91.6888498418047!3d22.356851025553013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1699900000000"
              }
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.4) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              title="Everon project locations"
            />
          ) : (
            <div className="relative w-full h-full">
              {/* Minimal Cartographic Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A66B 1px, transparent 1px), linear-gradient(90deg, #C9A66B 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Geographic Coordinates Watermark */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none">
                {activeCity === "dhaka" ? "23°48'N 90°24'E · DHAKA URBAN GRID" : "22°21'N 91°49'E · CHITTAGONG HARBOR"}
              </div>

              {/* Stylized River Vectors */}
              <svg
                className="absolute inset-0 w-full h-full text-gold/15 pointer-events-none"
                viewBox="0 0 1000 600"
                fill="none"
                stroke="currentColor"
              >
                {activeCity === "dhaka" ? (
                  <>
                    <path d="M 200,0 Q 150,200 300,300 T 400,600" strokeWidth="18" opacity="0.4" />
                    <path d="M 500,180 Q 560,250 540,320" strokeWidth="10" opacity="0.6" />
                    <path d="M 800,0 Q 750,300 850,600" strokeWidth="14" opacity="0.3" />
                  </>
                ) : (
                  <>
                    <path d="M 0,250 Q 400,300 600,200 T 1000,450" strokeWidth="28" opacity="0.4" />
                    <path d="M 0,400 Q 300,500 500,600" strokeWidth="36" opacity="0.3" />
                  </>
                )}
              </svg>

              {/* Project Markers */}
              {visiblePins.map((pin) => {
                const isSelected = selectedPin?.id === pin.id;
                return (
                  <button
                    key={pin.id}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group text-left cursor-pointer focus:outline-none"
                    onClick={() => setSelectedPin(pin)}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Crosshair ring */}
                      <span
                        className={`w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center transition-all duration-300 ${
                          isSelected ? "scale-125 border-gold bg-gold/10" : "group-hover:border-gold"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isSelected ? "bg-gold" : "bg-white/60 group-hover:bg-gold"
                          }`}
                        />
                      </span>

                      {/* Pin Callout */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                        <span
                          className={`text-[10px] font-mono tracking-wider px-2 py-0.5 border transition-all duration-300 ${
                            isSelected
                              ? "bg-gold text-ink font-semibold border-gold shadow-lg"
                              : "bg-ink/90 text-base/70 border-white/15 group-hover:text-base group-hover:border-white/30"
                          }`}
                        >
                          {pin.name}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Dedicated Architectural Project Dossier Column (4 cols) */}
        <div className="lg:col-span-4 bg-ink p-6 sm:p-8 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {selectedPin && (
              <motion.div
                key={selectedPin.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Project Render Preview */}
                {/* Project Render Preview — Clean Architectural Frame, No Sticker Tags */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border border-white/10 shadow-lg">
                  <Image
                    src={selectedPin.image}
                    alt={selectedPin.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase mb-1.5">
                    <span className="text-gold">{selectedPin.type} · {selectedPin.location}</span>
                    <span className="text-white/50">{selectedPin.status}</span>
                  </div>
                  <h3 className="text-2xl font-display text-base font-semibold">
                    {selectedPin.name}
                  </h3>
                </div>

                {/* Specs breakdown */}
                <div className="divide-y divide-white/10 border-t border-b border-white/10 py-1 text-xs">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-white/50 font-mono">Typology</span>
                    <span className="text-base font-medium">{selectedPin.type}</span>
                  </div>
                  {selectedPin.units && (
                    <div className="py-2.5 flex justify-between">
                      <span className="text-white/50 font-mono">Residences / Units</span>
                      <span className="text-base font-medium">{selectedPin.units} Handcrafted</span>
                    </div>
                  )}
                  {selectedPin.floors && (
                    <div className="py-2.5 flex justify-between">
                      <span className="text-white/50 font-mono">Structural Height</span>
                      <span className="text-base font-medium">{selectedPin.floors} Levels</span>
                    </div>
                  )}
                  {selectedPin.possession && (
                    <div className="py-2.5 flex justify-between">
                      <span className="text-white/50 font-mono">Handover Horizon</span>
                      <span className="text-gold font-mono">{selectedPin.possession}</span>
                    </div>
                  )}
                </div>

                {/* Refined Architectural Actions */}
                <div className="space-y-3 pt-2">
                  <Link
                    href={`/properties/${selectedPin.slug}`}
                    className="w-full py-3.5 bg-gold text-ink text-xs font-mono font-semibold tracking-[0.14em] uppercase text-center block hover:bg-base transition-colors shadow-lg"
                  >
                    Examine Architectural Dossier →
                  </Link>
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("everon:open-book-visit", {
                            detail: { project: selectedPin.name },
                          })
                        );
                      }
                    }}
                    className="w-full text-center text-xs font-mono tracking-wider uppercase text-white/70 hover:text-gold transition-colors py-1 block underline underline-offset-4"
                  >
                    Request Confidential Site Walkthrough
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="p-4 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2 font-mono">
        <p>Masterplan coordinate matrix mapping Everon&apos;s residential sanctuaries and commercial landmarks.</p>
        <p className="text-gold/70">{projects.length} DEVELOPMENTS RECORDED</p>
      </div>
    </div>
  );
}
