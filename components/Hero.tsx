"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 250]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.06]);

  // Staggered text animation variants
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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-building.jpg"
          alt="Everon flagship tower at golden hour in Dhaka"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
        />
        {/* Art-Directed Architectural Scrim for Flawless Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />
      </motion.div>

      {/* Floating particles effect (CSS only, lightweight) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
            style={{
              left: `${12 + i * 18}%`,
              top: `${25 + (i % 3) * 22}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${7 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content — Anchored with Generous Breathing Room */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Monumental Tagline */}
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-base/85 max-w-xl mb-10 leading-relaxed font-normal"
          >
            Crafting iconic living sanctuaries that define the future of urban
            Bangladesh. Nineteen years of uncompromising architectural distinction.
          </motion.p>

          {/* Distinct Architectural CTAs */}
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
              Explore Portfolio
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/30 text-base text-xs font-mono tracking-[0.16em] uppercase font-medium hover:border-gold hover:text-gold backdrop-blur-sm transition-colors duration-300"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Architectural Folio Footer Strip (Replacing Cheesy Bouncing Scroll Cue) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 inset-x-0 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between pointer-events-none text-[11px] font-mono text-white/40 tracking-wider uppercase border-t border-white/10 pt-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold/70" />
          <span>Vol. XIX · Masterplan Index 2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>Gulshan · Banani · Purbachal · Chittagong</span>
          <span className="text-gold/80">Est. 2007</span>
        </div>
      </motion.div>
    </section>
  );
}
