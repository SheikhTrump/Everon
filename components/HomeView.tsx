"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import StatCounter from "@/components/StatCounter";
import ApproachSection from "@/components/ApproachSection";
import InteractivePresenceMap from "@/components/InteractivePresenceMap";
import { projects, pipelineStats, siteConfig } from "@/lib/data";

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HomeView() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Who We Are */}
      <section className="py-24 lg:py-32 bg-base">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-3">
                Who We Are
              </span>
              <h2 className="text-section font-display text-ink font-semibold mb-6">
                A new developer, <span className="italic font-normal text-emerald">starting honestly</span>
              </h2>
              <p className="text-base sm:text-lg text-slate leading-[1.7] max-w-xl">
                Everon is newly launched — we haven&apos;t handed over a single unit yet. What follows on this
                site is our current pipeline: projects in planning across Dhaka and Chittagong, the standards
                we&apos;re building them to, and a straightforward way to reach us.
              </p>
              <div className="pt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 text-ink text-xs font-mono tracking-[0.16em] uppercase font-semibold gold-underline"
                >
                  About Everon
                  <svg className="w-4 h-4 text-gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Projects in Planning */}
      <section className="py-24 lg:py-32 bg-base border-t border-b border-ink/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-ink/10">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
                  Current Pipeline
                </span>
                <h2 className="text-section font-display text-ink font-semibold">
                  Projects in Planning
                </h2>
                <p className="text-slate text-sm font-mono uppercase tracking-wider mt-2 max-w-lg">
                  Residential, commercial, and land developments across Dhaka and Chittagong.
                </p>
              </div>
              <Link
                href="/properties"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-ink/20 text-ink text-xs font-mono tracking-[0.14em] uppercase hover:bg-ink hover:text-base transition-all duration-300 font-medium"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-3 border border-ink text-ink text-xs font-mono tracking-[0.14em] uppercase font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <ApproachSection />

      {/* 5. Pipeline Statistics */}
      <section className="py-24 lg:py-32 bg-base border-b border-ink/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {pipelineStats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Where We're Planning */}
      <section className="py-24 lg:py-32 bg-base">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal className="mb-14">
            <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
              Locations
            </span>
            <h2 className="text-section font-display text-ink font-semibold mb-3">
              Where We&apos;re Planning
            </h2>
            <p className="text-slate font-mono text-xs uppercase tracking-wider max-w-xl">
              Dhaka and Chittagong. All sites below are in the planning stage — none are under construction yet.
            </p>
          </SectionReveal>

          <SectionReveal>
            <InteractivePresenceMap />
          </SectionReveal>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="relative py-24 lg:py-32 bg-ink text-base overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-gold">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-base font-semibold leading-[1.18]">
                  Questions about a planned project?
                </h2>
                <p className="text-base/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                  Reach out for floor plans, pricing, and timelines on any project in our current pipeline.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-white/40 uppercase tracking-wider block mb-1">Office</span>
                    <span className="text-base/90 block">{siteConfig.address}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase tracking-wider block mb-1">Contact</span>
                    <span className="text-gold block">{siteConfig.phone}</span>
                    <span className="text-base/60 block">{siteConfig.email}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white/[0.03] border border-white/10 p-8 sm:p-10 backdrop-blur-sm space-y-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-gold block mb-1">
                      Talk to Us
                    </span>
                    <h3 className="text-xl font-display text-base font-medium">
                      Book a Consultation
                    </h3>
                    <p className="text-xs text-base/60 mt-2 leading-relaxed">
                      We&apos;ll walk you through project plans, timelines, and pricing over a call or in person.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("everon:open-book-visit"));
                        }
                      }}
                      className="w-full py-4 bg-gold text-ink text-xs font-mono font-semibold tracking-[0.16em] uppercase hover:bg-base transition-colors duration-300 shadow-xl text-center block"
                    >
                      Book a Consultation
                    </button>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 border border-white/20 text-base/90 hover:text-gold hover:border-gold text-xs font-mono tracking-[0.14em] uppercase transition-colors text-center block"
                    >
                      Message Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
