"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const taglineWords = siteConfig.tagline.split(" ");

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink">
      {/* Minimal architectural grid backdrop — no photography */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,166,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-gold" />
            <p className="text-caption text-gold uppercase tracking-widest">
              New Developer · Dhaka &amp; Chittagong
            </p>
          </div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-hero font-display text-base mb-6 font-semibold"
          >
            {taglineWords.map((word, i) => {
              const isLast = i === taglineWords.length - 1;
              return (
                <span key={i} className="inline-block mr-3.5 sm:mr-5">
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${
                      isLast ? "italic text-gold font-normal pb-1" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-base/85 max-w-xl mb-10 leading-relaxed font-normal"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              href="/properties"
              className="px-8 py-4 bg-gold text-ink text-xs font-mono tracking-[0.16em] uppercase font-semibold hover:bg-base transition-colors duration-300 shadow-2xl inline-flex items-center gap-3"
            >
              View Planned Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/30 text-base text-xs font-mono tracking-[0.16em] uppercase font-medium hover:border-gold hover:text-gold backdrop-blur-sm transition-colors duration-300"
            >
              About Everon
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
