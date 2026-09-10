"use client";

import { useRef } from "react";
import Image from "next/image";
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
        className="group block transition-all duration-500"
      >
        {/* Architectural Image Container — Clean and Pure */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand/40 border border-sand">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Editorial Typographic Metadata Block */}
        <div className="pt-5 pb-2">
          {/* Typology, Location & Architectural Status */}
          <div className="flex items-center justify-between text-xs font-mono text-slate mb-2">
            <span className="uppercase tracking-widest text-emerald font-medium">
              {project.type} · {project.location}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate/60">
              {project.status === "Ongoing" ? "In Construction" : project.status === "Upcoming" ? "Private Preview" : "Delivered"}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-display text-ink font-semibold group-hover:text-emerald transition-colors duration-300 mb-2">
            {project.name}
          </h3>

          {/* Architectural Specifications Summary */}
          {project.stats && (
            <p className="text-xs text-slate/80 mb-3 font-mono">
              {project.stats.units} Handcrafted Residences · {project.stats.floors} Levels · {project.stats.possessionDate}
            </p>
          )}

          {/* Subtle Monograph CTA */}
          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-mono text-ink/70 group-hover:text-gold transition-colors duration-300">
            <span>Explore Residence</span>
            <span className="text-[11px]">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
