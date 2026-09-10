"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";

interface FooterLinkItem {
  label: string;
  href?: string;
  action?: boolean;
  external?: boolean;
}

const sitemapData: Record<string, FooterLinkItem[]> = {
  Developments: [
    { label: "Residential Sanctuaries", href: "/properties?type=Residential" },
    { label: "Commercial Landmarks", href: "/properties?type=Commercial" },
    { label: "Land Enclaves", href: "/properties?type=Land+Development" },
    { label: "Complete Portfolio", href: "/properties" },
  ],
  "Architecture & Firm": [
    { label: "The Everon Heritage", href: "/about" },
    { label: "Leadership & Partners", href: "/about#leadership" },
    { label: "News & Architectural Press", href: "/news" },
    { label: "Careers & Fellowships", href: "/careers" },
  ],
  "Client Advisory": [
    { label: "Schedule Private Tour", action: true },
    { label: "Executive Contact", href: "/contact" },
    { label: "WhatsApp Concierge", href: siteConfig.whatsapp, external: true },
  ],
};

const socialChannels = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const triggerBookVisit = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("everon:open-book-visit"));
    }
  };

  return (
    <footer className="bg-ink text-base/80 border-t border-white/10">
      {/* Main Architectural Colophon Body */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Identity & Advisory Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <BrandLogo size="large" />
            </Link>
            <p className="text-sm leading-relaxed text-base/60 max-w-md">
              Everon designs and delivers iconic living sanctuaries and Grade-A commercial landmarks across urban Bangladesh. Nineteen years of architectural integrity, structural science, and generational permanence.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <p className="text-gold uppercase tracking-widest">Private Advisory Office</p>
              <p className="text-base/80">{siteConfig.address}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-1 font-mono text-xs">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-gold hover:text-base transition-colors"
              >
                {siteConfig.phone}
              </a>
              <span className="text-white/20">/</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold hover:text-base transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex items-center gap-3">
              {socialChannels.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-base/60 hover:text-gold hover:border-gold transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Navigation Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {Object.entries(sitemapData).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold">
                  {category}
                </h4>
                <ul className="space-y-3 text-xs font-mono">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.action ? (
                        <button
                          onClick={triggerBookVisit}
                          className="text-base/60 hover:text-gold transition-colors text-left"
                        >
                          {link.label} →
                        </button>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base/60 hover:text-gold transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href!}
                          className="text-base/60 hover:text-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prestigious Industry Accreditations & Colophon */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>
            REHAB Member #2005-084 · BNBC 2020 Seismic Code Zone IV · USGBC Green Building Associate
          </p>
          <p className="text-gold/70">
            ISO 9001:2015 QUALITY MANAGEMENT CERTIFIED
          </p>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>
            © {new Date().getFullYear()} EVERON Real Estate Development Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
