"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ModelViewer3DProps {
  projectName: string;
}

const levels = [
  { name: "Sky Villa Penthouse", floor: "Level 21–22", height: "85m", desc: "Dual-height ceilings, private 360° infinity pool & sky terrace" },
  { name: "Executive Residences", floor: "Levels 05–20", height: "25–80m", desc: "Double-glazed acoustic low-E glass facade, corner balconies" },
  { name: "Club & Wellness Deck", floor: "Level 04", height: "18m", desc: "Infinity lap pool, fitness pavilion, sauna & private screening lounge" },
  { name: "Grand Podium & Lobby", floor: "Levels 01–03", height: "0–14m", desc: "Triple-height marble entrance hall, concierge & landscaped motor court" },
];

export default function ModelViewer3D({ projectName }: ModelViewer3DProps) {
  const [rotation, setRotation] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotation((prev) => (prev + delta * 0.4) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    setRotation((prev) => (prev + delta * 0.5) % 360);
    setStartX(e.touches[0].clientX);
  };

  return (
    <section className="py-20 lg:py-28 bg-ink border-b border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">
                Interactive Spatial Model
              </p>
            </div>
            <h2 className="text-section font-display text-base">
              360° Architectural Elevation
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate tracking-wider uppercase">
              Drag horizontal to orbit
            </span>
            <div className="flex items-center gap-1 border border-base/20 p-1 text-xs text-gold">
              <button
                onClick={() => setRotation((r) => r - 45)}
                className="px-2.5 py-1 hover:bg-gold hover:text-ink transition-colors"
                title="Rotate Left"
              >
                ⟲ -45°
              </button>
              <button
                onClick={() => setRotation((r) => r + 45)}
                className="px-2.5 py-1 hover:bg-gold hover:text-ink transition-colors"
                title="Rotate Right"
              >
                +45° ⟳
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive 3D Canvas / Render Stage */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="lg:col-span-8 relative aspect-[16/11] bg-black/60 border border-gold/20 overflow-hidden cursor-grab active:cursor-grabbing select-none flex items-center justify-center group"
          >
            {/* Architectural grid markings */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,166,107,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.4) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Tower render with 3D perspective rotation */}
            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${rotation}deg) scale(0.95)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-[340px] sm:w-[420px] h-[480px]">
                <Image
                  src="/images/hero-building.jpg"
                  alt={`${projectName} architectural tower`}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(31,58,52,0.6)]"
                  priority
                />
              </div>

              {/* Floor highlight plane overlay */}
              <div
                className="absolute w-[360px] h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_#C9A66B] transition-all duration-500"
                style={{
                  top: selectedLevel === 0 ? "22%" : selectedLevel === 1 ? "45%" : selectedLevel === 2 ? "72%" : "88%",
                }}
              />
            </div>

            {/* Orbit HUD badge */}
            <div className="absolute top-4 left-4 bg-ink/90 border border-gold/30 px-3 py-1.5 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-mono text-gold tracking-widest uppercase">
                Yaw: {Math.round(rotation % 360)}°
              </span>
            </div>

            <div className="absolute bottom-4 left-4 text-[11px] text-base/40">
              Drag mouse or finger horizontally to rotate view
            </div>
          </div>

          {/* Level Slice Breakdown */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-caption text-gold uppercase tracking-wider mb-2 font-mono">
              Elevation Anatomy
            </p>
            {levels.map((lvl, i) => {
              const isSelected = selectedLevel === i;
              return (
                <button
                  key={lvl.name}
                  onClick={() => setSelectedLevel(i)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 ${
                    isSelected
                      ? "bg-base/10 border-gold shadow-lg"
                      : "bg-base/5 border-base/10 hover:border-base/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-gold font-semibold">
                      {lvl.floor}
                    </span>
                    <span className="text-[11px] font-mono text-base/40">
                      Elev. {lvl.height}
                    </span>
                  </div>
                  <h4 className="font-display text-base text-base font-medium mb-1">
                    {lvl.name}
                  </h4>
                  <p className="text-xs text-base/60 leading-relaxed">
                    {lvl.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
