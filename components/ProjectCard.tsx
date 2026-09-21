"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/properties/${project.slug}`}
        className="group block border border-sand hover:border-gold/50 transition-colors duration-500 h-full"
      >
        {/* Index / Type Panel — no photography */}
        <div className="relative aspect-[4/3] bg-ink flex flex-col justify-between p-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,166,107,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.6) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <span className="relative font-mono text-xs text-gold/80 tracking-widest uppercase">
            {String(index + 1).padStart(2, "0")} · {project.type}
          </span>
          <span className="relative font-display text-2xl sm:text-3xl text-base font-semibold leading-tight group-hover:text-gold transition-colors duration-300">
            {project.name}
          </span>
        </div>

        {/* Metadata */}
        <div className="pt-5 pb-5 px-5">
          <div className="flex items-center justify-between text-xs font-mono text-slate mb-2">
            <span className="uppercase tracking-widest text-emerald font-medium">
              {project.location}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate/60">
              Planning
            </span>
          </div>

          {project.stats && (
            <p className="text-xs text-slate/80 mb-3 font-mono">
              {project.stats.units} Planned Units · {project.stats.floors} Floors · Target {project.stats.targetCompletion}
            </p>
          )}

          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-mono text-ink/70 group-hover:text-gold transition-colors duration-300">
            <span>View Project</span>
            <span className="text-[11px]">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
