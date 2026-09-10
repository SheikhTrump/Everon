"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloorPlan, siteConfig } from "@/lib/data";

interface FloorPlanExplorerProps {
  floorPlans: FloorPlan[];
  projectName: string;
}

export default function FloorPlanExplorer({ floorPlans, projectName }: FloorPlanExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [brochureRequested, setBrochureRequested] = useState<string | null>(null);
  const plan = floorPlans[activeIndex];

  return (
    <section className="py-16 lg:py-24 bg-sand">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-caption text-gold mb-4">Floor Plans</p>
        <h2 className="text-section font-display text-ink mb-12">Choose Your Residence</h2>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Plan Selector */}
          <div className="space-y-3">
            {floorPlans.map((fp, i) => (
              <button
                key={fp.name}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-5 transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-ink text-base border border-gold/20"
                    : "bg-base border border-sand hover:border-gold/30 text-ink"
                }`}
              >
                <p className="text-xs tracking-[0.06em] uppercase mb-1 opacity-60">
                  {fp.type}
                </p>
                <p className="font-display text-lg">{fp.name}</p>
                <p className="text-sm mt-1 opacity-70">{fp.size}</p>
              </button>
            ))}
          </div>

          {/* Plan Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-base border border-sand p-8 lg:p-12"
            >
              {/* Floor Plan Placeholder — architectural blueprint aesthetic */}
              <div className="relative aspect-[16/10] bg-ink/[0.03] border border-sand mb-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Blueprint grid pattern */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'linear-gradient(rgba(26,37,34,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,34,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                  
                  {/* Schematic room layout */}
                  <svg className="w-3/4 h-3/4 text-emerald/20" viewBox="0 0 400 250" fill="none" stroke="currentColor" strokeWidth={0.5}>
                    {/* Outer walls */}
                    <rect x="20" y="20" width="360" height="210" strokeWidth={1.5} />
                    {/* Living area */}
                    <rect x="20" y="20" width="180" height="130" />
                    <text x="110" y="90" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.6">LIVING / DINING</text>
                    {/* Kitchen */}
                    <rect x="200" y="20" width="100" height="80" />
                    <text x="250" y="65" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">KITCHEN</text>
                    {/* Master bedroom */}
                    <rect x="300" y="20" width="80" height="120" />
                    <text x="340" y="85" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">MASTER BED</text>
                    {/* Bedroom 2 */}
                    <rect x="200" y="100" width="100" height="50" />
                    <text x="250" y="130" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">BED 2</text>
                    {/* Bedroom 3 */}
                    <rect x="20" y="150" width="120" height="80" />
                    <text x="80" y="195" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">BED 3</text>
                    {/* Bathrooms */}
                    <rect x="140" y="150" width="60" height="40" />
                    <text x="170" y="175" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.6">BATH</text>
                    <rect x="200" y="150" width="60" height="40" />
                    <text x="230" y="175" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.6">BATH</text>
                    {/* Balcony */}
                    <rect x="300" y="140" width="80" height="90" strokeDasharray="4 2" />
                    <text x="340" y="190" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">BALCONY</text>
                    {/* Study / utility */}
                    <rect x="140" y="190" width="120" height="40" />
                    <text x="200" y="215" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.6">STUDY / UTILITY</text>
                    {/* Doors */}
                    <path d="M110 150 Q110 140 120 140" strokeWidth={0.8} />
                    <path d="M200 60 Q210 60 210 70" strokeWidth={0.8} />
                    <path d="M300 80 Q290 80 290 90" strokeWidth={0.8} />
                    {/* North arrow */}
                    <g transform="translate(360, 215)">
                      <path d="M0 0 L0 -15" strokeWidth={1} />
                      <path d="M-4 -11 L0 -15 L4 -11" strokeWidth={1} />
                      <text x="0" y="8" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.6">N</text>
                    </g>
                  </svg>
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-[10px] tracking-[0.08em] uppercase font-medium bg-ink/70 backdrop-blur-sm text-base/80">
                    Indicative Layout
                  </span>
                </div>
              </div>

              {/* Plan Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 border border-sand">
                  <p className="text-2xl font-display text-ink">{plan.size}</p>
                  <p className="text-xs text-slate mt-1 tracking-[0.04em] uppercase">Total Area</p>
                </div>
                <div className="text-center p-4 border border-sand">
                  <p className="text-2xl font-display text-ink">{plan.bedrooms}</p>
                  <p className="text-xs text-slate mt-1 tracking-[0.04em] uppercase">Bedrooms</p>
                </div>
                <div className="text-center p-4 border border-sand">
                  <p className="text-2xl font-display text-ink">{plan.bathrooms}</p>
                  <p className="text-xs text-slate mt-1 tracking-[0.04em] uppercase">Bathrooms</p>
                </div>
                <div className="text-center p-4 border border-gold/20 bg-gold/5">
                  <p className="text-2xl font-display text-gold">{plan.price}</p>
                  <p className="text-xs text-slate mt-1 tracking-[0.04em] uppercase">Starting From</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs text-slate tracking-[0.06em] uppercase mb-4">Key Features</p>
                <div className="flex flex-wrap gap-3">
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 text-sm text-ink bg-sand border border-sand hover:border-gold/30 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-sand flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("everon:open-book-visit", {
                          detail: { project: `${projectName} — ${plan.name}` },
                        })
                      );
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald text-base text-sm tracking-[0.04em] uppercase hover:bg-gold hover:text-ink transition-colors duration-300 font-medium shadow-sm"
                >
                  Book Private Tour of This Layout
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <a
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hello Everon, I would like to inquire about ${plan.name} (${plan.size}) at ${projectName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink text-ink text-sm tracking-[0.04em] uppercase hover:bg-ink hover:text-base transition-all duration-300"
                >
                  WhatsApp Inquiry
                </a>

                <button
                  onClick={() => {
                    setBrochureRequested(plan.name);
                    setTimeout(() => setBrochureRequested(null), 4000);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gold/40 text-gold text-sm tracking-[0.04em] uppercase hover:bg-gold hover:text-ink transition-all duration-300 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Request Architectural Dossier
                </button>
              </div>

              {/* Elegant Brochure Toast */}
              {brochureRequested && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-emerald/10 border border-emerald/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald text-base flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink uppercase tracking-wider">
                        Dossier Queued for {brochureRequested}
                      </p>
                      <p className="text-[11px] text-slate">
                        Our private client relations desk has prepared the technical brochure and floor specs.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBrochureRequested(null)}
                    className="text-xs text-slate hover:text-ink"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
