"use client";

import React from "react";
import { motion } from "framer-motion";

// Gold line-art SVG icons for each amenity category
const amenityIcons: Record<string, React.ReactNode> = {
  "Infinity Pool": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M6 30c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      <path d="M6 36c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      <rect x="8" y="18" width="32" height="12" rx="2" />
    </svg>
  ),
  "Swimming Pool": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M6 30c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      <path d="M6 36c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      <rect x="8" y="18" width="32" height="12" rx="2" />
    </svg>
  ),
  "Sky Lounge": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M8 40V16l16-8 16 8v24" />
      <rect x="18" y="28" width="12" height="12" />
      <circle cx="24" cy="12" r="3" />
      <path d="M4 40h40" />
    </svg>
  ),
  "Gymnasium": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M14 24h20" />
      <rect x="6" y="18" width="6" height="12" rx="1" />
      <rect x="36" y="18" width="6" height="12" rx="1" />
      <rect x="10" y="20" width="4" height="8" rx="1" />
      <rect x="34" y="20" width="4" height="8" rx="1" />
    </svg>
  ),
  "Children's Play Area": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 8v20M16 16l8 12 8-12" />
      <circle cx="24" cy="34" r="6" />
      <path d="M18 40h12" />
    </svg>
  ),
  "Children's Zone": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 8v20M16 16l8 12 8-12" />
      <circle cx="24" cy="34" r="6" />
      <path d="M18 40h12" />
    </svg>
  ),
  "24/7 Security": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 6L8 14v12c0 10 7 16 16 20 9-4 16-10 16-20V14L24 6z" />
      <path d="M20 24l4 4 8-8" />
    </svg>
  ),
  "Underground Parking": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="12" width="32" height="24" rx="2" />
      <path d="M20 24h8c2 0 4 2 4 4s-2 4-4 4h-8V20h8c2 0 4 2 4 4" />
    </svg>
  ),
  "Landscaped Gardens": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 40V22" />
      <path d="M24 26c-6 0-10-4-10-10 4 0 8 2 10 6 2-4 6-6 10-6 0 6-4 10-10 10z" />
      <path d="M18 18c-4 0-7-3-7-7 3 0 6 1 7 4 1-3 4-4 7-4 0 4-3 7-7 7z" />
      <path d="M8 40h32" />
    </svg>
  ),
  "Smart Home Ready": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M8 24l16-12 16 12" />
      <path d="M12 22v16h24V22" />
      <circle cx="24" cy="30" r="4" />
      <path d="M24 26v4M20 32l4-2 4 2" />
    </svg>
  ),
  "Rooftop Garden": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M8 36h32M12 36V20h24v16" />
      <path d="M20 14c0-4 4-6 4-6s4 2 4 6" />
      <path d="M16 20c0-3 3-5 3-5s3 2 3 5M26 20c0-3 3-5 3-5s3 2 3 5" />
    </svg>
  ),
  "Clubhouse": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M6 38h36M10 38V18l14-8 14 8v20" />
      <rect x="20" y="26" width="8" height="12" />
      <circle cx="24" cy="20" r="3" />
    </svg>
  ),
  "Jogging Track": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="28" cy="10" r="3" />
      <path d="M22 18l6-2 4 6-4 6h-6l-4 8" />
      <path d="M32 24l4 8" />
      <path d="M8 40c4-2 8-2 12 0s8 2 12 0s8-2 12 0" />
    </svg>
  ),
  "Multi-purpose Hall": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="14" width="32" height="22" rx="2" />
      <path d="M8 20h32M14 14v-4M34 14v-4" />
      <circle cx="24" cy="28" r="4" />
    </svg>
  ),
  "EV Charging Station": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="10" y="8" width="20" height="32" rx="2" />
      <path d="M22 16l-6 10h8l-6 10" />
      <path d="M30 18h6v8h-6" />
      <path d="M36 22h4" />
    </svg>
  ),
  "Rain Water Harvesting": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 6c0 0-12 14-12 22a12 12 0 0024 0c0-8-12-22-12-22z" />
      <path d="M18 30c0 3 3 6 6 6" />
    </svg>
  ),
  "Solar Panels": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="16" width="32" height="20" rx="1" />
      <path d="M8 24h32M8 32h32M18 16v20M28 16v20" />
      <circle cx="24" cy="8" r="3" />
      <path d="M24 5V2M18 6l-2-2M30 6l2-2M18 10l-2 2M30 10l2 2" />
    </svg>
  ),
  "High-Speed Elevators": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="14" y="6" width="20" height="36" rx="2" />
      <path d="M24 6v36M14 24h20" />
      <path d="M19 14l-3 4 3 4M29 14l3 4-3 4" />
    </svg>
  ),
  "Central Air Conditioning": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="6" y="12" width="36" height="16" rx="3" />
      <path d="M12 28v4M24 28v4M36 28v4" />
      <path d="M10 20h28" />
      <circle cx="34" cy="16" r="2" />
    </svg>
  ),
  "Food Court": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M14 8v14M18 8v6c0 4-4 8-8 8v0c0 0 0 0 0 0V8" />
      <path d="M14 22v18" />
      <path d="M30 8v10c0 2 2 4 4 4v0V8" />
      <path d="M34 22v18" />
    </svg>
  ),
  "Conference Center": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <ellipse cx="24" cy="28" rx="16" ry="8" />
      <path d="M8 28v6c0 4 7 8 16 8s16-4 16-8v-6" />
      <rect x="18" y="8" width="12" height="10" rx="1" />
    </svg>
  ),
  "Helipad Ready": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="10" />
      <path d="M16 24h16M20 16v16M28 16v16" />
    </svg>
  ),
  "Backup Power": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M26 6l-10 18h8l-2 18 12-22h-8z" />
    </svg>
  ),
  "Fire Safety System": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 4c0 0 12 10 12 24a12 12 0 01-24 0c0-6 3-12 6-16 0 8 3 10 6 8" />
    </svg>
  ),
  "Ample Parking": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <path d="M20 16v16M20 16h6c3 0 6 2 6 5s-3 5-6 5h-6" />
    </svg>
  ),
  "Lake View": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M4 28c4-3 8-3 12 0s8 3 12 0 8-3 12 0" />
      <path d="M4 34c4-3 8-3 12 0s8 3 12 0 8-3 12 0" />
      <circle cx="36" cy="12" r="5" />
      <path d="M8 24l8-10 8 6 6-4 10 8" />
    </svg>
  ),
  "Hill View": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M4 38l12-20 8 8 8-14 12 26H4z" />
      <circle cx="36" cy="10" r="4" />
    </svg>
  ),
  "Tennis Court": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="6" y="12" width="36" height="24" rx="1" />
      <path d="M24 12v24M6 24h36" />
      <path d="M6 18h6v12H6M42 18h-6v12h6" />
    </svg>
  ),
  "Community Center": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="24" cy="14" r="4" />
      <circle cx="14" cy="18" r="3" />
      <circle cx="34" cy="18" r="3" />
      <path d="M18 38v-10c0-4 3-6 6-6s6 2 6 6v10" />
      <path d="M10 38v-8c0-3 2-5 4-5M34 25c2 0 4 2 4 5v8" />
    </svg>
  ),
  "Prayer Room": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 6l-14 18h28L24 6z" />
      <rect x="16" y="24" width="16" height="16" />
      <path d="M24 30v6" />
      <circle cx="24" cy="18" r="2" />
    </svg>
  ),
  "Guest Suite": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="20" width="32" height="16" rx="2" />
      <path d="M12 20v-4c0-2 2-4 4-4h16c2 0 4 2 4 4v4" />
      <path d="M8 30h32" />
      <path d="M12 36v4M36 36v4" />
    </svg>
  ),
  "Intercom System": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="14" y="6" width="20" height="36" rx="3" />
      <circle cx="24" cy="16" r="4" />
      <path d="M18 26h12M18 30h12M18 34h12" />
    </svg>
  ),
  "CCTV Surveillance": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 18h16l8-6v24l-8-6H12a2 2 0 01-2-2V20a2 2 0 012-2z" />
      <circle cx="20" cy="24" r="4" />
    </svg>
  ),
  "Co-working Spaces": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="16" width="14" height="10" rx="1" />
      <rect x="26" y="16" width="14" height="10" rx="1" />
      <path d="M8 26v8M22 26v8M26 26v8M40 26v8" />
      <path d="M4 34h40" />
    </svg>
  ),
  "Rooftop Café": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 24h18c0 6-4 10-9 10s-9-4-9-10z" />
      <path d="M30 24h4c2 0 4 2 4 4s-2 4-4 4h-2" />
      <path d="M21 34v6M16 40h10" />
      <path d="M16 18c0-2 2-4 5-4s5 2 5 4" />
    </svg>
  ),
  "Smart Parking": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="8" y="14" width="32" height="24" rx="3" />
      <path d="M20 22v8M20 22h4c2 0 4 1 4 3s-2 3-4 3h-4" />
      <circle cx="34" cy="18" r="2" />
    </svg>
  ),
  "High-Speed Internet": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 28c3-6 7-8 12-8s9 2 12 8" />
      <path d="M8 22c5-8 10-12 16-12s11 4 16 12" />
      <path d="M16 34c2-4 5-6 8-6s6 2 8 6" />
      <circle cx="24" cy="38" r="2" fill="currentColor" />
    </svg>
  ),
  "Meeting Rooms": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <ellipse cx="24" cy="30" rx="14" ry="6" />
      <circle cx="24" cy="14" r="3" />
      <circle cx="14" cy="18" r="2.5" />
      <circle cx="34" cy="18" r="2.5" />
      <circle cx="10" cy="24" r="2" />
      <circle cx="38" cy="24" r="2" />
    </svg>
  ),
  "Retail Ground Floor": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="6" y="12" width="36" height="28" rx="2" />
      <path d="M6 12l4-6h28l4 6" />
      <path d="M6 20h36" />
      <rect x="18" y="28" width="12" height="12" />
    </svg>
  ),
  "Green Building Certified": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 4c0 0-16 8-16 24h32c0-16-16-24-16-24z" />
      <path d="M24 28v12" />
      <path d="M16 40h16" />
      <path d="M18 20l4 4 8-8" />
    </svg>
  ),
  "Wheelchair Access": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="24" cy="10" r="3" />
      <path d="M24 14v10h8l4 10" />
      <circle cx="22" cy="34" r="7" />
    </svg>
  ),
  "Spa & Sauna": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M14 34h20c0-6-4-10-10-10s-10 4-10 10z" />
      <path d="M18 24c0-4 3-8 6-8s6 4 6 8" />
      <path d="M20 16c-1-3 0-6 2-8M24 14c0-3 1-6 3-8M28 16c1-3 0-6-2-8" />
      <path d="M10 34h28v4H10z" />
    </svg>
  ),
  "Library": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M8 8h4v32H8zM14 10h4v30h-4zM20 8h4v32h-4zM26 12h4v28h-4z" />
      <path d="M32 8l6 2v28l-6-2V8z" />
    </svg>
  ),
  "BBQ Area": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <ellipse cx="24" cy="24" rx="14" ry="6" />
      <path d="M10 24v8c0 3 6 6 14 6s14-3 14-6v-8" />
      <path d="M18 38v4M30 38v4" />
      <path d="M18 18c0-3 1-6 3-8M24 16c0-3 1-6 3-8M30 18c0-3-1-6-3-8" />
    </svg>
  ),
  "Generator Backup": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M26 6l-10 18h8l-2 18 12-22h-8z" />
    </svg>
  ),
  "Guard Room": (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M24 6L8 14v12c0 10 7 16 16 20 9-4 16-10 16-20V14L24 6z" />
      <path d="M20 24l4 4 8-8" />
    </svg>
  ),
};

// Fallback icon for unmapped amenities
const fallbackIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2}>
    <circle cx="24" cy="24" r="16" />
    <path d="M24 16v8l6 4" />
  </svg>
);

interface AmenitiesGridProps {
  amenities: string[];
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-caption text-gold mb-4">Living Experience</p>
        <h2 className="text-section font-display text-ink mb-12">Amenities & Facilities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group p-6 border border-sand hover:border-gold/40 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 text-gold/70 group-hover:text-gold transition-colors duration-300">
                {amenityIcons[amenity] || fallbackIcon}
              </div>
              <p className="text-sm text-ink font-medium tracking-[0.02em]">{amenity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
