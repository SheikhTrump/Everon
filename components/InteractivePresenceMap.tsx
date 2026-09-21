"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/data";

interface PinData extends Project {
  x: number; // percentage coordinates
  y: number;
  city: "dhaka" | "chittagong";
}

const pinPositions: Record<string, { x: number; y: number; city: "dhaka" | "chittagong" }> = {
  "everon-heights": { x: 55, y: 38, city: "dhaka" },
  "everon-gardens": { x: 48, y: 34, city: "dhaka" },
  "everon-commerce-tower": { x: 58, y: 68, city: "dhaka" },
  "everon-lakeside": { x: 42, y: 16, city: "dhaka" },
  "everon-prime-plaza": { x: 36, y: 55, city: "dhaka" },
  "everon-riverbank-enclave": { x: 74, y: 22, city: "dhaka" },
  "everon-chittagong-residences": { x: 50, y: 48, city: "chittagong" },
};

const mapPins: PinData[] = projects
  .filter((p) => pinPositions[p.slug])
  .map((p) => ({ ...p, ...pinPositions[p.slug] }));

export default function InteractivePresenceMap() {
  const [activeCity, setActiveCity] = useState<"dhaka" | "chittagong">("dhaka");
  const [selectedPin, setSelectedPin] = useState<PinData>(mapPins[0]);
  const [viewMode, setViewMode] = useState<"map" | "satellite">("map");

  const visiblePins = mapPins.filter((p) => p.city === activeCity);
  const dhakaCount = mapPins.filter((p) => p.city === "dhaka").length;
  const chittagongCount = mapPins.filter((p) => p.city === "chittagong").length;

  return (
    <div className="relative bg-ink border border-white/10 overflow-hidden shadow-2xl">
      {/* Top Bar Header */}
      <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/30 gap-4">
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
            Dhaka ({dhakaCount})
          </button>
          <button
            onClick={() => {
              setActiveCity("chittagong");
              setSelectedPin(mapPins.find((p) => p.city === "chittagong") || mapPins[0]);
            }}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors ${
              activeCity === "chittagong"
                ? "bg-gold text-ink font-semibold"
                : "text-base/60 hover:text-base border border-white/10"
            }`}
          >
            Chittagong ({chittagongCount})
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={() => setViewMode("map")}
            className={`transition-colors uppercase tracking-wider ${
              viewMode === "map" ? "text-gold font-semibold" : "text-base/40 hover:text-base"
            }`}
          >
            Map
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setViewMode("satellite")}
            className={`transition-colors uppercase tracking-wider ${
              viewMode === "satellite" ? "text-gold font-semibold" : "text-base/40 hover:text-base"
            }`}
          >
            Satellite
          </button>
        </div>
      </div>

      {/* Main Container: Map + Project Panel */}
      <div className="grid lg:grid-cols-12 min-h-[520px]">
        {/* Map Canvas Column */}
        <div className="lg:col-span-8 relative h-[420px] lg:h-auto min-h-[420px] bg-[#0E1012] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden select-none">
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
              title="Everon planned project locations"
            />
          ) : (
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A66B 1px, transparent 1px), linear-gradient(90deg, #C9A66B 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="absolute top-4 left-4 font-mono text-[10px] text-white/30 tracking-widest pointer-events-none">
                {activeCity === "dhaka" ? "DHAKA" : "CHITTAGONG"}
              </div>

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

        {/* Project Info Panel */}
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
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase mb-1.5">
                    <span className="text-gold">{selectedPin.type} · {selectedPin.location}</span>
                    <span className="text-white/50">{selectedPin.status}</span>
                  </div>
                  <h3 className="text-2xl font-display text-base font-semibold">
                    {selectedPin.name}
                  </h3>
                </div>

                <div className="divide-y divide-white/10 border-t border-b border-white/10 py-1 text-xs">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-white/50 font-mono">Typology</span>
                    <span className="text-base font-medium">{selectedPin.type}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-white/50 font-mono">Planned Units</span>
                    <span className="text-base font-medium">{selectedPin.stats.units}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-white/50 font-mono">Floors</span>
                    <span className="text-base font-medium">{selectedPin.stats.floors}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-white/50 font-mono">Target Completion</span>
                    <span className="text-gold font-mono">{selectedPin.stats.targetCompletion}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href={`/properties/${selectedPin.slug}`}
                    className="w-full py-3.5 bg-gold text-ink text-xs font-mono font-semibold tracking-[0.14em] uppercase text-center block hover:bg-base transition-colors shadow-lg"
                  >
                    View Full Project →
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
                    Book a Consultation
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="p-4 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2 font-mono">
        <p>All locations shown are in the planning stage.</p>
        <p className="text-gold/70">{projects.length} PROJECTS</p>
      </div>
    </div>
  );
}
