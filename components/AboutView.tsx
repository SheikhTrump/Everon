"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

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
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-ink overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,166,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">About Everon</p>
            </div>
            <h1 className="text-hero font-display text-base mb-3">
              A new developer, starting honestly
            </h1>
            <p className="text-base/70 text-lg max-w-2xl">
              We haven&apos;t built anything yet. Here&apos;s exactly where things stand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where we are */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-caption text-gold mb-4">Where We Are</p>
              <h2 className="text-section font-display text-ink mb-8">
                Newly launched.<br />No completed projects yet.
              </h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />
              <p className="text-lg text-slate leading-relaxed">
                Everon is a real estate developer launching in Bangladesh. We currently have {projects.length}{" "}
                projects in the planning stage across Dhaka and Chittagong — none are under construction or
                completed yet. We&apos;d rather be upfront about that than dress up plans as finished buildings.
                As land is secured and approvals move forward, we&apos;ll update each project&apos;s status here.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What we're building toward */}
      <section className="py-24 lg:py-32 bg-ink border-t border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <p className="text-caption text-gold mb-4">Our Standards</p>
            <h2 className="text-section font-display text-base">
              What we&apos;re committing to
            </h2>
            <p className="text-base/60 max-w-xl mx-auto mt-4 text-sm sm:text-base">
              Not a track record — a set of standards every planned project is designed against from day one.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Materials", description: "Specified against international standards before approval for use on site." },
              { title: "Design", description: "Planned for Bangladesh's climate and density: ventilation, daylight, livability." },
              { title: "Construction", description: "Independent quality checks at each stage, built to BNBC 2020 seismic standards." },
              { title: "After Handover", description: "A dedicated support team for owners once keys are handed over." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border border-white/10"
              >
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <h3 className="font-display text-lg text-base mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-base/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
