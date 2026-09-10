"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark } from "@/lib/data";

const typeIcons: Record<Landmark["type"], { icon: React.ReactNode; color: string }> = {
  education: {
    color: "text-gold",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  health: {
    color: "text-emerald",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6v12M6 12h12" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
  shopping: {
    color: "text-gold",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  transport: {
    color: "text-slate",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 7v10l10 5 10-5V7" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  leisure: {
    color: "text-emerald",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 22c-4-2-8-6-8-12a8 8 0 1116 0c0 6-4 10-8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  dining: {
    color: "text-gold",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 2v6a4 4 0 008 0V2M12 8v14M6 18h12" />
      </svg>
    ),
  },
};

interface NeighborhoodSectionProps {
  landmarks: Landmark[];
  projectName: string;
  location: string;
}

export default function NeighborhoodSection({ landmarks, projectName, location }: NeighborhoodSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-caption text-gold mb-4">Location</p>
            <h2 className="text-section font-display text-ink mb-6">
              The Neighbourhood
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              {projectName} is situated in {location} — one of the most prestigious 
              addresses in the city. Every essential amenity, from world-class schools 
              to premium healthcare, is within minutes of your doorstep.
            </p>

            {/* Landmark List */}
            <div className="space-y-4">
              {landmarks.map((landmark, i) => {
                const typeConfig = typeIcons[landmark.type];
                return (
                  <motion.div
                    key={landmark.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 border border-sand hover:border-gold/30 transition-colors duration-300"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border border-current/20 ${typeConfig.color}`}>
                      {typeConfig.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{landmark.name}</p>
                      <p className="text-xs text-slate capitalize">{landmark.type}</p>
                    </div>
                    <p className="text-sm text-gold font-medium whitespace-nowrap">{landmark.distance}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Map Placeholder */}
          <div className="relative aspect-square lg:aspect-auto bg-sand overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Stylized abstract map */}
              <div className="relative w-full h-full">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: 'linear-gradient(rgba(26,37,34,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,34,1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
                
                {/* Subtle street pattern */}
                <svg className="absolute inset-0 w-full h-full text-emerald/10" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth={2}>
                  {/* Main roads */}
                  <path d="M0 200h400" strokeWidth={3} />
                  <path d="M200 0v400" strokeWidth={3} />
                  {/* Secondary roads */}
                  <path d="M100 50v300" />
                  <path d="M300 80v240" />
                  <path d="M50 120h300" />
                  <path d="M60 300h280" />
                  {/* Diagonal */}
                  <path d="M50 50l150 150" strokeDasharray="8 4" />
                </svg>

                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gold rounded-full" />
                    </div>
                  </div>
                  <div className="mt-3 px-4 py-2 bg-ink text-base text-xs tracking-[0.04em] uppercase whitespace-nowrap">
                    {projectName}
                  </div>
                </div>

                {/* Scattered landmark dots */}
                {landmarks.slice(0, 5).map((lm, i) => {
                  const positions = [
                    { top: "25%", left: "30%" },
                    { top: "35%", left: "70%" },
                    { top: "65%", left: "25%" },
                    { top: "70%", left: "65%" },
                    { top: "20%", left: "55%" },
                  ];
                  const pos = positions[i];
                  return (
                    <motion.div
                      key={lm.name}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="absolute flex items-center gap-2"
                      style={pos}
                    >
                      <div className={`w-2 h-2 rounded-full ${typeIcons[lm.type].color.replace('text-', 'bg-')}`} />
                      <span className="text-[10px] text-ink/50 whitespace-nowrap">{lm.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
