"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { newsArticles } from "@/lib/data";

export default function NewsCatalog() {
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
            Stay Updated
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero font-display text-base"
          >
            News &amp; Press
          </motion.h1>
          <p className="mt-4 text-base/60 max-w-xl text-lg">
            Architectural launches, sustainability milestones, and corporate recognitions from EVERON.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="grid md:grid-cols-3 gap-8 items-start"
                >
                  {/* Image render — Clean Architectural Monograph Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/40 border border-ink/10 shadow-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 text-xs text-slate mb-3 font-mono">
                      <span className="text-gold-text tracking-widest uppercase text-[11px]">Architectural Dispatch</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-display text-ink group-hover:text-emerald transition-colors duration-300 mb-4 font-medium">
                      {article.title}
                    </h2>
                    <p className="text-slate leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-ink text-xs font-mono tracking-[0.14em] uppercase font-semibold gold-underline">
                      Read Monograph Dispatch
                      <svg
                        className="w-4 h-4 text-gold-text group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
