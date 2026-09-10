"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { milestones, leadership } from "@/lib/data";

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutView() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Dhaka city skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pb-14 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">The Company</p>
            </div>
            <h1 className="text-hero font-display text-base mb-3">
              Crafting Dhaka&apos;s Architectural Skyline
            </h1>
            <p className="text-base/70 text-lg max-w-2xl">
              Two decades of unyielding structural integrity, visionary design, and curated living sanctuaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-caption text-gold mb-4">Our Mission</p>
              <h2 className="text-section font-display text-ink mb-8">
                Building with purpose.<br />Living with pride.
              </h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />
              <p className="text-lg text-slate leading-relaxed">
                Founded in 2005, Everon emerged from a simple yet powerful conviction:
                that Bangladesh deserves a real estate developer that prioritizes
                quality above all else. Over nineteen years, we have grown from a
                single project in Banani to a portfolio spanning Dhaka and Chittagong
                — but our founding promise remains unchanged. Every beam we place,
                every space we design, every community we build carries the weight
                of that promise.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-ink border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-20">
            <p className="text-caption text-gold mb-4">Our Legacy</p>
            <h2 className="text-section font-display text-base">
              Milestones That Define Us
            </h2>
          </SectionReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-base/20 to-gold/50 lg:-translate-x-px" />

            {milestones.map((milestone, i) => (
              <SectionReveal key={i} className="mb-14 last:mb-0">
                <div
                  className={`relative flex items-start gap-8 lg:gap-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Gold node dot with radar ring */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-ink ring-offset-2 ring-offset-gold/30" />

                  {/* Content card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold font-mono text-xs mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-display text-base mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-base/60 text-sm leading-relaxed max-w-md">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">Executive Stewardship</p>
              <span className="w-8 h-[1px] bg-gold" />
            </div>
            <h2 className="text-section font-display text-ink mb-4">
              The People Behind Everon
            </h2>
            <p className="text-slate max-w-xl mx-auto text-sm sm:text-base">
              A multidisciplinary leadership council combining structural engineering rigor with international architectural vision.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, i) => (
              <SectionReveal key={i}>
                <div className="group bg-base border border-sand hover:border-gold/60 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                  {/* Portrait photo */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Bottom overlay inside photo */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <p className="text-caption text-gold text-xs uppercase tracking-wider mb-1">
                        {leader.title}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl text-base font-semibold">
                        {leader.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bio card body */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <p className="text-caption text-gold mb-3 uppercase tracking-widest">Accolades &amp; Standards</p>
            <h2 className="text-section font-display text-ink mb-12">
              Industry Recognition
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Best Luxury Residential Developer", year: "2026", org: "Bangladesh Property Awards" },
                { title: "LEED Gold & Platinum Certified", year: "Excellence", org: "US Green Building Council" },
                { title: "REHAB Distinguished Member", year: "Since 2005", org: "Real Estate & Housing Assoc." },
                { title: "ISO 9001:2015 Structural Quality", year: "Certified", org: "International Standards Org" },
              ].map((award, i) => (
                <div
                  key={i}
                  className="p-8 bg-base border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col justify-between text-center group shadow-sm"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gold uppercase tracking-wider block mb-1">
                      {award.year}
                    </span>
                    <h4 className="font-display text-sm sm:text-base text-ink mb-2">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate">
                      {award.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
