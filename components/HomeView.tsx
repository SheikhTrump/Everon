"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import StatCounter from "@/components/StatCounter";
import CraftSection from "@/components/CraftSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InteractivePresenceMap from "@/components/InteractivePresenceMap";
import { projects, stats, newsArticles, siteConfig } from "@/lib/data";

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

      {/* 2. Intro / Architectural Commitment — Luxury Magazine Spread */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-base">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column (Editorial Manifesto & Architect Quote) */}
            <div className="lg:col-span-6 space-y-8">
              <SectionReveal>
                <div className="inline-block mb-3">
                  <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase">
                    Architectural Monograph · Vol. XIX
                  </span>
                </div>
                <h2 className="text-section font-display text-ink font-semibold mb-6">
                  Spaces That <span className="italic font-normal text-emerald">Inspire Life</span>
                </h2>
                <p className="text-base sm:text-lg text-slate leading-[1.8] max-w-xl mb-10">
                  For nineteen years, Everon has operated not as a speculative developer, but as an architectural patron. Every foundation poured in Dhaka and Chittagong is a generational covenant: to design sanctuaries where natural light, monumental proportion, and acoustic serenity converge.
                </p>

                {/* Executive Architect Quote Editorial Signature Lockup (No generic avatar box) */}
                <div className="pt-8 border-t border-ink/10 space-y-5">
                  <blockquote className="font-display text-xl sm:text-2xl text-ink italic leading-relaxed">
                    &ldquo;Architecture is the physical crystallization of human dignity. We do not build to occupy land; we build to elevate the urban consciousness of Bangladesh.&rdquo;
                  </blockquote>
                  <div className="flex items-baseline gap-4 pt-1">
                    <div className="w-8 h-[1px] bg-gold mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-display font-semibold text-ink tracking-wide">
                        Ar. Mahbubur Rahman, FIAB
                      </p>
                      <p className="text-[11px] font-mono text-slate tracking-wider uppercase mt-0.5">
                        Principal Architect &amp; Executive Chairman
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2.5 text-ink text-xs font-mono tracking-[0.16em] uppercase font-semibold gold-underline"
                  >
                    Discover Our Architectural Heritage
                    <svg className="w-4 h-4 text-gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column (Architectural Monograph Photography with Authentic Editorial Caption) */}
            <div className="lg:col-span-6">
              <SectionReveal>
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand/40 border border-ink/10 shadow-xl">
                    <Image
                      src="/images/about-hero.jpg"
                      alt="Dhaka metropolis waterway corridor and urban skyline"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Clean Monograph Caption Underneath — No Tacky Corner Stickers */}
                  <div className="flex items-baseline justify-between text-[11px] font-mono text-slate border-b border-ink/10 pb-2 px-1">
                    <span>Fig. 01 — Urban waterway corridor &amp; civic topography, Dhaka</span>
                    <span className="text-gold-text">23°47′ N · 90°25′ E</span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Developments (Unified Gallery Tone, Eliminating Jarring Striping) */}
      <section className="py-28 lg:py-36 bg-base border-t border-b border-ink/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-ink/10">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
                  Portfolio Highlights
                </span>
                <h2 className="text-section font-display text-ink font-semibold">
                  Featured Developments
                </h2>
                <p className="text-slate text-sm font-mono uppercase tracking-wider mt-2 max-w-lg">
                  Curated residential sanctuaries and commercial landmarks engineered for generational longevity.
                </p>
              </div>
              <Link
                href="/properties"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-ink/20 text-ink text-xs font-mono tracking-[0.14em] uppercase hover:bg-ink hover:text-base transition-all duration-300 font-medium"
              >
                View Complete Catalog
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>

          {/* 3-Column Architectural Project Cards Grid */}
          <div className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            {projects.slice(0, 3).map((project, i) => (
              <div key={project.id} className="min-w-[320px] lg:min-w-0 snap-start">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-3 border border-ink text-ink text-xs font-mono tracking-[0.14em] uppercase font-medium"
            >
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Craft & Engineering Dossier Section */}
      <CraftSection />

      {/* 5. Architectural Statistics Data Statement */}
      <section className="py-24 lg:py-32 bg-base border-b border-ink/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
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

      {/* 6. Our Presence / Territory Cartography */}
      <section className="py-28 lg:py-36 bg-base">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal className="mb-14">
            <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
              Territorial Distribution
            </span>
            <h2 className="text-section font-display text-ink font-semibold mb-3">
              Across Bangladesh
            </h2>
            <p className="text-slate font-mono text-xs uppercase tracking-wider max-w-xl">
              From prime architectural enclaves in Gulshan and Banani to coastal horizons in Chittagong and riverside estates in Purbachal.
            </p>
          </SectionReveal>

          <SectionReveal>
            <InteractivePresenceMap />
          </SectionReveal>
        </div>
      </section>

      {/* 7. Patron Reflections (Testimonials) */}
      <TestimonialCarousel />

      {/* 8. Latest Updates (News & Press) with Authentic Editorial Typography */}
      <section className="py-28 lg:py-36 bg-base border-b border-ink/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex items-end justify-between mb-16 pb-6 border-b border-ink/10">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-gold-text uppercase block mb-2">
                  Chronicle &amp; Dispatches
                </span>
                <h2 className="text-section font-display text-ink font-semibold">
                  Latest Updates
                </h2>
                <p className="text-slate font-mono text-xs uppercase tracking-wider mt-2">
                  Architectural launches, sustainability milestones, and corporate recognitions.
                </p>
              </div>
              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-2 text-ink text-xs font-mono tracking-[0.14em] uppercase gold-underline font-medium"
              >
                All News Articles
                <svg className="w-4 h-4 text-gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>

          {/* News Articles Grid with Clean Architectural Framing — No Sticker Pills */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {newsArticles.map((article) => (
              <SectionReveal key={article.id}>
                <Link href={`/news/${article.slug}`} className="group block">
                  {/* Article Real Photo Render */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/40 border border-ink/10 mb-5 shadow-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Clean Editorial Metadata Line */}
                  <div className="flex items-center justify-between text-xs text-slate mb-2.5 font-mono">
                    <span className="text-gold-text tracking-wider uppercase text-[11px]">Dispatch</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display text-ink font-semibold group-hover:text-emerald transition-colors duration-300 mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Private Client Advisory & Salon (High-End Architectural Atelier Invitation) */}
      <section className="relative py-32 lg:py-44 bg-ink text-base overflow-hidden border-t border-white/10">
        {/* Subtle architectural ambient aura */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Atelier Invitation */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-gold">
                  Private Client Advisory
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-base font-semibold leading-[1.18]">
                  Curating Your Generational Sanctuary in Bangladesh
                </h2>
                <p className="text-base/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                  Acquiring an Everon residence is a collaborative architectural dialogue. We invite prospective patrons to our private design salon in Gulshan for a confidential review of masterplans, acoustic specifications, and bespoke custom interior joinery.
                </p>

                {/* Direct Atelier Details */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-white/40 uppercase tracking-wider block mb-1">Everon Atelier</span>
                    <span className="text-base/90 block">Level 18, Everon Tower</span>
                    <span className="text-base/60 block">Gulshan Avenue, Dhaka 1212</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase tracking-wider block mb-1">Direct Liaison</span>
                    <span className="text-gold block">{siteConfig.phone}</span>
                    <span className="text-base/60 block">{siteConfig.email}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Refined Advisory Consultation Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/[0.03] border border-white/10 p-8 sm:p-10 backdrop-blur-sm space-y-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-gold block mb-1">
                      Confidential Engagement
                    </span>
                    <h3 className="text-xl font-display text-base font-medium">
                      Schedule an Atelier Consultation
                    </h3>
                    <p className="text-xs text-base/60 mt-2 leading-relaxed">
                      Our Senior Client Director will reserve a dedicated appointment window tailored to your family&apos;s schedule.
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
                      Reserve Private Consultation
                    </button>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 border border-white/20 text-base/90 hover:text-gold hover:border-gold text-xs font-mono tracking-[0.14em] uppercase transition-colors text-center block"
                    >
                      Connect via WhatsApp Concierge
                    </a>
                  </div>

                  <p className="text-[11px] font-mono text-white/40 text-center">
                    All inquiries handled under strict client discretion.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
