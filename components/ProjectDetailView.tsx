"use client";

import { motion } from "framer-motion";
import { Project, ProjectExtras, siteConfig } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import SpecificationsTable from "@/components/SpecificationsTable";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import PaymentPlanTable from "@/components/PaymentPlanTable";

interface ProjectDetailViewProps {
  project: Project;
  extras?: ProjectExtras;
  relatedProjects: Project[];
}

export default function ProjectDetailView({
  project,
  extras,
  relatedProjects,
}: ProjectDetailViewProps) {
  const triggerBooking = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("everon:open-book-visit", {
          detail: { project: project.name },
        })
      );
    }
  };

  return (
    <>
      {/* Hero — no photography, this project hasn't broken ground yet */}
      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 bg-ink overflow-hidden">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-[10px] tracking-[0.08em] uppercase font-medium bg-gold text-ink font-semibold">
                {project.status}
              </span>
              <span className="px-3 py-1 text-[10px] tracking-[0.08em] uppercase font-medium bg-base/10 backdrop-blur-sm text-base">
                {project.type}
              </span>
            </div>
            <h1 className="text-hero font-display text-base mb-2">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-base/70">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-ink border-b border-base/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { label: "Land Size", value: project.stats.landSize },
              { label: "Towers", value: project.stats.towers.toString() },
              { label: "Planned Units", value: project.stats.units.toString() },
              { label: "Floors", value: project.stats.floors.toString() },
              { label: "Target Completion", value: project.stats.targetCompletion },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-caption text-gold mb-1">{stat.label}</p>
                <p className="text-xl font-display text-base">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-caption text-gold mb-4">About This Project</p>
            <h2 className="text-section font-display text-ink mb-6">
              Overview
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              {project.description}
            </p>
            <p className="mt-4 text-sm text-slate/70 leading-relaxed border-l-2 border-gold/40 pl-4">
              This project is in the planning stage. Floor plans, specifications, and dates below are current
              targets and may change before construction begins.
            </p>
            <div className="mt-10 h-[1px] bg-gradient-to-r from-gold via-gold/30 to-transparent max-w-[200px]" />
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      {extras?.floorPlans && extras.floorPlans.length > 0 && (
        <FloorPlanExplorer floorPlans={extras.floorPlans} projectName={project.name} />
      )}

      {/* Amenities Grid */}
      <AmenitiesGrid amenities={project.amenities} />

      {/* Technical Specifications */}
      {extras?.specifications && extras.specifications.length > 0 && (
        <SpecificationsTable specifications={extras.specifications} />
      )}

      {/* Financial Milestone Plan */}
      <PaymentPlanTable
        projectName={project.name}
        startingPrice={extras?.floorPlans?.[0]?.price}
      />

      {/* Neighbourhood Location */}
      {extras?.landmarks && extras.landmarks.length > 0 && (
        <NeighborhoodSection
          landmarks={extras.landmarks}
          projectName={project.name}
          location={project.location}
        />
      )}

      {/* Enquiry CTA Band */}
      <section className="py-16 lg:py-24 bg-sand border-t border-sand">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-caption text-gold mb-4">Interested?</p>
              <h2 className="text-section font-display text-ink mb-4">
                Questions about {project.name}?
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                Talk to our team for full plans, pricing, and current timelines.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <button
                onClick={triggerBooking}
                className="px-8 py-4 bg-emerald text-base text-sm tracking-[0.04em] uppercase font-medium hover:bg-gold hover:text-ink transition-all duration-300 shadow-md"
              >
                Book a Consultation
              </button>
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `Hello Everon, I would like to ask about ${project.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-emerald text-emerald text-sm tracking-[0.04em] uppercase font-medium hover:bg-emerald hover:text-base transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <p className="text-caption text-gold mb-4">Other Projects</p>
            <h2 className="text-section font-display text-ink mb-12">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
