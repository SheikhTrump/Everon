"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const statusFilters = ["All", "Ongoing", "Upcoming", "Completed"];
const typeFilters = ["All", "Residential", "Commercial", "Land Development"];

export default function PropertiesCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialType = searchParams.get("type") || "All";
  const initialStatus = searchParams.get("status") || "All";

  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [typeFilter, setTypeFilter] = useState(initialType);

  // Sync state if URL search parameters change externally
  const [prevParamsString, setPrevParamsString] = useState(searchParams.toString());
  const currentParamsString = searchParams.toString();
  if (currentParamsString !== prevParamsString) {
    setPrevParamsString(currentParamsString);
    const typeFromUrl = searchParams.get("type");
    if (typeFromUrl && typeFilters.includes(typeFromUrl)) {
      setTypeFilter(typeFromUrl);
    }
    const statusFromUrl = searchParams.get("status");
    if (statusFromUrl && statusFilters.includes(statusFromUrl)) {
      setStatusFilter(statusFromUrl);
    }
  }

  const updateFilters = (newStatus: string, newType: string) => {
    setStatusFilter(newStatus);
    setTypeFilter(newType);

    const params = new URLSearchParams();
    if (newStatus !== "All") params.set("status", newStatus);
    if (newType !== "All") params.set("type", newType);

    const query = params.toString();
    router.replace(`/properties${query ? `?${query}` : ""}`, { scroll: false });
  };

  const filtered = projects.filter((p) => {
    const matchStatus = statusFilter === "All" || p.status === statusFilter;
    const matchType = typeFilter === "All" || p.type === typeFilter;
    return matchStatus && matchType;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-ink">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-caption text-gold mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero font-display text-base"
          >
            Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-base/60 max-w-xl"
          >
            Explore our collection of residential sanctuaries, commercial landmarks, and master-planned land estates across Bangladesh.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[60px] z-30 bg-base/95 backdrop-blur-md border-b border-sand py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-6 items-center">
            {/* Status Filter */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  onClick={() => updateFilters(status, typeFilter)}
                  className={`px-3.5 py-1.5 text-xs tracking-[0.04em] uppercase transition-all duration-300 ${
                    statusFilter === status
                      ? "bg-emerald text-base font-medium shadow-sm"
                      : "bg-sand text-slate hover:bg-ink/10"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-sand hidden lg:block" />

            {/* Type Filter */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {typeFilters.map((type) => (
                <button
                  key={type}
                  onClick={() => updateFilters(statusFilter, type)}
                  className={`px-3.5 py-1.5 text-xs tracking-[0.04em] uppercase transition-all duration-300 ${
                    typeFilter === type
                      ? "bg-emerald text-base font-medium shadow-sm"
                      : "bg-sand text-slate hover:bg-ink/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Result count */}
            <span className="ml-auto text-xs sm:text-sm text-slate">
              Showing <span className="font-semibold text-ink">{filtered.length}</span> development{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-sand/30 border border-dashed border-sand">
              <p className="text-slate text-lg">
                No developments currently match the selected criteria.
              </p>
              <button
                onClick={() => updateFilters("All", "All")}
                className="mt-4 px-6 py-2.5 bg-emerald text-base text-xs tracking-[0.04em] uppercase font-medium hover:bg-gold hover:text-ink transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
