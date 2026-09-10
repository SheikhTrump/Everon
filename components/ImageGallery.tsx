"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/lib/data";

interface ImageGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export default function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const filtered = activeTab === "All" ? images : images.filter((img) => img.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((curr) => {
        if (curr === null) return null;
        return (curr + direction + filtered.length) % filtered.length;
      });
    },
    [filtered.length]
  );

  // Keyboard navigation & scroll coordination
  useEffect(() => {
    if (lightboxIndex === null) return;

    window.dispatchEvent(new CustomEvent("everon:modal-open"));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.dispatchEvent(new CustomEvent("everon:modal-close"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, navigateLightbox]);

  return (
    <>
      <section className="py-16 lg:py-24 bg-ink">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-caption text-gold mb-4">Gallery</p>
              <h2 className="text-section font-display text-base">
                Visual Tour &mdash; {projectName}
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-xs tracking-[0.04em] uppercase transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-gold text-ink"
                      : "border border-base/20 text-base/60 hover:border-gold/50 hover:text-base"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((image, i) => (
              <motion.button
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border border-gold/60 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Category label */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 text-[9px] tracking-[0.08em] uppercase bg-ink/60 backdrop-blur-sm text-base/80">
                    {image.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 border border-base/20 flex items-center justify-center text-base/60 hover:border-gold hover:text-gold transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-7 left-6 text-base/40 text-sm tracking-[0.04em]">
              <span className="text-gold">{String(lightboxIndex + 1).padStart(2, "0")}</span>
              <span className="mx-2">/</span>
              <span>{String(filtered.length).padStart(2, "0")}</span>
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-base/20 flex items-center justify-center text-base/60 hover:border-gold hover:text-gold transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[85vw] h-[75vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="85vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-base/20 flex items-center justify-center text-base/60 hover:border-gold hover:text-gold transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-base/70 text-sm">{filtered[lightboxIndex].alt}</p>
              <p className="text-gold/50 text-xs tracking-[0.06em] uppercase mt-1">{filtered[lightboxIndex].category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
