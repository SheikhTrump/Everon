"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { approachSteps } from "@/lib/data";

export default function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(sectionRef, { once: false, margin: "-15%" });

  useEffect(() => {
    if (!isInView || isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % approachSteps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink py-24 lg:py-32 overflow-hidden border-t border-b border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-gold uppercase block mb-3">
              Our Approach
            </span>
            <h2 className="text-section font-display text-base font-semibold mb-4">
              What we&apos;re committing to
            </h2>
            <p className="text-base text-base/70 leading-relaxed max-w-xl">
              These are standards we&apos;re building every planned project to — not a record of what
              we&apos;ve already delivered.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => (prev - 1 + approachSteps.length) % approachSteps.length)}
              className="w-11 h-11 border border-white/15 flex items-center justify-center text-base/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % approachSteps.length)}
              className="w-11 h-11 border border-white/15 flex items-center justify-center text-base/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-4 items-stretch">
          {approachSteps.map((step, i) => {
            const isActive = i === activeStep;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(i)}
                className={`lg:col-span-3 text-left p-6 border transition-all duration-300 ${
                  isActive
                    ? "bg-base/[0.04] border-gold/40"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? "text-gold" : "text-white/30"}`}>
                  0{i + 1}
                </span>
                <h3 className={`font-display text-xl mt-2 mb-2 ${isActive ? "text-base" : "text-base/50"}`}>
                  {step.title}
                </h3>
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      key={step.title}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-base/70 leading-relaxed overflow-hidden"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
