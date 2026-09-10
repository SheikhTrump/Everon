"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

const patronCredentials = [
  { detail: "Penthouse Resident · Handover 2024", residence: "Everon Lakeside Enclave" },
  { detail: "Private Portfolio Investor · 3 Acquisitions", residence: "Everon Heights, Gulshan" },
  { detail: "Family Residence · Handover 2025", residence: "Everon Gardens, Banani" },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  // Auto-advance every 7 seconds unless paused or out of view
  useEffect(() => {
    if (!isInView || isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const current = testimonials[active];
  const credential = patronCredentials[active] || patronCredentials[0];

  return (
    <section
      ref={ref}
      className="py-28 lg:py-36 bg-base border-t border-b border-ink/10 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-ink/10">
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
              Patron Reflections
            </span>
            <h2 className="text-section font-display text-ink font-semibold">
              Voices of Distinction
            </h2>
            <p className="text-sm font-mono text-slate uppercase tracking-wider mt-2">
              Reflections from residents and generational investors across our sanctuaries.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-gold-text">
              <span>0{active + 1}</span>
              <span className="text-ink/20">—</span>
              <span className="text-ink/40">0{testimonials.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 border border-ink/20 flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-colors"
                aria-label="Previous quote"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 border border-ink/20 flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-colors"
                aria-label="Next quote"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Quote Stage */}
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Grand Quotation with Monograph Typographic Balance */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display text-ink leading-[1.32] font-normal tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Dignified Patron Credentials */}
              <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-ink tracking-wide font-mono uppercase">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate font-mono mt-1">
                    {current.role}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-mono text-gold-text uppercase tracking-wider font-medium">
                    {credential.residence}
                  </p>
                  <p className="text-[11px] font-mono text-slate mt-0.5">
                    {credential.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
