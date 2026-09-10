"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface ArticleContentData {
  body: string[];
  author: string;
  readingTime: string;
}

interface NewsArticleViewProps {
  article: ArticleItem;
  content?: ArticleContentData;
  relatedArticles: ArticleItem[];
}

export default function NewsArticleView({
  article,
  content,
  relatedArticles,
}: NewsArticleViewProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-ink">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <Link
              href="/news"
              className="text-caption text-gold hover:text-base transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              News &amp; Press
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-base/40 text-sm mb-4"
          >
            {article.date}
            {content && (
              <>
                <span className="mx-3 text-gold/40">·</span>
                {content.readingTime}
                <span className="mx-3 text-gold/40">·</span>
                {content.author}
              </>
            )}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl xl:text-6xl font-display text-base leading-tight max-w-4xl"
          >
            {article.title}
          </motion.h1>

          {/* Gold accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-[1px] bg-gradient-to-r from-gold via-gold/40 to-transparent max-w-md origin-left"
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {content ? (
              <div className="space-y-6">
                {content.body.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="text-lg text-slate leading-[1.8]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            ) : (
              <p className="text-lg text-slate leading-relaxed">{article.excerpt}</p>
            )}

            {/* Divider */}
            <div className="my-16 flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-sand" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="flex-1 h-[1px] bg-sand" />
            </div>

            {/* Share / Back */}
            <div className="flex items-center justify-between">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-emerald text-sm tracking-[0.04em] uppercase font-medium gold-underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Articles
              </Link>
              <p className="text-xs text-slate tracking-[0.04em] uppercase">
                Published {article.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-24 bg-sand">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <p className="text-caption text-gold mb-4">Continue Reading</p>
            <h2 className="text-section font-display text-ink mb-12">Related Articles</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/news/${related.slug}`} className="group block">
                    <div className="relative aspect-[16/9] overflow-hidden bg-sand/40 mb-5 border border-sand shadow-sm">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase font-semibold bg-ink/90 text-gold border border-white/10">
                          Press
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate mb-2">{related.date}</p>
                    <h3 className="text-xl font-display text-ink group-hover:text-emerald transition-colors duration-300 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed">
                      {related.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
