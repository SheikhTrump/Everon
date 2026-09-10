"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { craftSteps } from "@/lib/data";

const benchmarksData: Record<number, { code: string; title: string; detail: string }[]> = {
  0: [
    { code: "I", title: "Structural Steel Provenance", detail: "BSRM Grade 600 High-Yield Bar" },
    { code: "II", title: "Quarried Marble Masonry", detail: "Italian Statuario Hand-Selected Slab" },
    { code: "III", title: "Acoustic Glazing Envelope", detail: "Low-E Double Acoustic Thermally Broken" },
    { code: "IV", title: "Subterranean Tanking", detail: "Multi-Coat Sika Elastomeric Membrane" },
  ],
  1: [
    { code: "I", title: "Finished Vertical Clearance", detail: "3.2m Finished Ceiling Heights" },
    { code: "II", title: "Microclimate Aerodynamics", detail: "Cross-Ventilation Computational Modeling" },
    { code: "III", title: "Biophilic Urban Index", detail: "60% Site Area Living Green Canopy" },
    { code: "IV", title: "Solar Trajectory Mapping", detail: "Passive Daylighting Optimization" },
  ],
  2: [
    { code: "I", title: "Seismic Attenuation Standard", detail: "BNBC 2020 Seismic Zone IV Compliant" },
    { code: "II", title: "Caisson Deep Foundation", detail: "Bored Cast-in-Situ Piles to Deep Bedrock" },
    { code: "III", title: "Post-Tensioned Precision", detail: "Laser-Leveled Post-Tensioned Slabs" },
    { code: "IV", title: "Core Hydration Regimen", detail: "28-Day Automated Continuous Water Curing" },
  ],
  3: [
    { code: "I", title: "Dedicated Estate Concierge", detail: "24/7 Dedicated On-Site Advisory & Reception" },
    { code: "II", title: "Preventative Conservation", detail: "Bespoke Preventative Building Care" },
    { code: "III", title: "Patron Digital Ledger", detail: "Encrypted Mobile Access & Management" },
    { code: "IV", title: "Generational Structural Deed", detail: "10-Year Comprehensive Structural Guarantee" },
  ],
};

export default function CraftSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(sectionRef, { once: false, margin: "-15%" });

  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % craftSteps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  const currentCraft = craftSteps[activeStep];
  const benchmarks = benchmarksData[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink py-28 lg:py-36 overflow-hidden border-t border-b border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header with Architectural Restraint */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-section font-display text-base font-semibold mb-4">
              Where Precision Meets Architectural Passion
            </h2>
            <p className="text-base text-base/70 leading-relaxed max-w-xl">
              From foundation seismology to custom bronze joinery, our building science adheres to a singular standard: generational longevity.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-gold">
              <span>0{activeStep + 1}</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">0{craftSteps.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveStep((prev) => (prev - 1 + craftSteps.length) % craftSteps.length)
                }
                className="w-11 h-11 border border-white/15 flex items-center justify-center text-base/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="Previous chapter"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setActiveStep((prev) => (prev + 1) % craftSteps.length)
                }
                className="w-11 h-11 border border-white/15 flex items-center justify-center text-base/70 hover:text-gold hover:border-gold transition-colors"
                aria-label="Next chapter"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Chapter Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16 border-b border-white/10 pb-2">
          {craftSteps.map((step, i) => {
            const isActive = i === activeStep;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(i)}
                className={`text-left py-4 px-2 relative transition-all duration-300 ${
                  isActive ? "text-base" : "text-base/40 hover:text-base/70"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[11px] font-mono ${isActive ? "text-gold" : "text-white/30"}`}>
                    CHAPTER 0{i + 1}
                  </span>
                </div>
                <h4 className={`text-sm sm:text-base font-display font-medium ${isActive ? "text-base" : "text-base/60"}`}>
                  {step.title}
                </h4>

                {/* Active Hairline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCraftBar"
                    className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Content Showcase — Generous Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Architectural Photography Frame */}
          <div className="lg:col-span-7 relative aspect-[16/11] overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCraft.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentCraft.image}
                  alt={currentCraft.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <p className="text-[11px] font-mono tracking-widest uppercase text-gold/90">
                    Phase 0{activeStep + 1} · {currentCraft.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Technical Specifications Dossier */}
          <div className="lg:col-span-5 pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCraft.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">
                    Architectural Dossier
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-display text-base font-semibold">
                    {currentCraft.title}
                  </h3>
                </div>

                <p className="text-base/80 leading-relaxed text-sm sm:text-base">
                  {currentCraft.description}
                </p>

                {/* Structured Engineering Benchmark Table */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-mono text-white/50 tracking-wider uppercase mb-4">
                    Material &amp; Structural Specifications
                  </p>
                  <div className="divide-y divide-white/10 border-t border-b border-white/10">
                    {benchmarks.map((item) => (
                      <div
                        key={item.title}
                        className="py-3 flex items-baseline justify-between gap-4 text-xs"
                      >
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-gold/80 text-[11px] font-semibold w-4 shrink-0">
                            {item.code}.
                          </span>
                          <span className="text-base font-medium">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-base/60 text-right font-mono text-[11px]">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
