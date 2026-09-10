"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Specification } from "@/lib/data";

interface SpecificationsTableProps {
  specifications: Specification[];
}

export default function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-16 lg:py-24 bg-ink">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left — header */}
          <div>
            <p className="text-caption text-gold mb-4">Build Quality</p>
            <h2 className="text-section font-display text-base mb-6">
              Technical Specifications
            </h2>
            <p className="text-base/50 leading-relaxed">
              Every Everon residence is engineered to the highest international standards. 
              These specifications represent our commitment to quality that you can see, 
              touch, and trust for generations.
            </p>
            {/* Gold accent */}
            <div className="mt-8 h-[1px] bg-gradient-to-r from-gold via-gold/30 to-transparent max-w-[200px]" />
          </div>

          {/* Right — accordion */}
          <div className="space-y-2">
            {specifications.map((spec, i) => (
              <div key={spec.category} className="border border-base/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-base/5 transition-colors duration-300"
                >
                  <span className="font-display text-lg text-base">{spec.category}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 border border-gold/30 flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12M6 12h12" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="border-t border-base/10 pt-4 space-y-0">
                          {spec.items.map((item, j) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05, duration: 0.3 }}
                              className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-base/5 last:border-0"
                            >
                              <span className="text-xs tracking-[0.04em] uppercase text-gold/80">
                                {item.label}
                              </span>
                              <span className="text-sm text-base/70 leading-relaxed">
                                {item.value}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
