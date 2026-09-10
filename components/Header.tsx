"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { siteConfig, projects } from "@/lib/data";
import BookVisitModal from "@/components/BookVisitModal";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties", hasMegaMenu: true },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState("");
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 30);
    });
  }, [scrollY]);

  useEffect(() => {
    const handleOpenVisit = (e: Event) => {
      const custom = e as CustomEvent<{ project?: string }>;
      if (custom.detail?.project) {
        setModalProject(custom.detail.project);
      } else {
        setModalProject("");
      }
      setVisitModalOpen(true);
    };

    window.addEventListener("everon:open-book-visit", handleOpenVisit);
    return () => window.removeEventListener("everon:open-book-visit", handleOpenVisit);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || megaMenuOpen
            ? "bg-ink/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10"
            : "bg-ink/60 backdrop-blur-sm py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <BrandLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.href}
                    className="relative py-2"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 relative py-1 ${
                        pathname.startsWith("/properties")
                          ? "text-gold font-medium"
                          : "text-base/80 hover:text-gold"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${
                          megaMenuOpen ? "rotate-180 text-gold" : "text-base/50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {pathname.startsWith("/properties") && (
                        <span className="absolute bottom-0 left-0 right-4 h-[1.5px] bg-gold" />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="fixed left-0 right-0 top-full bg-ink/98 border-t border-b border-gold/20 shadow-2xl backdrop-blur-xl"
                        >
                          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
                            <div className="grid grid-cols-12 gap-8">
                              {/* Left column: Categories & quick links */}
                              <div className="col-span-3 border-r border-base/10 pr-6 space-y-6">
                                <div>
                                  <p className="text-caption text-gold mb-3">Portfolio</p>
                                  <h4 className="font-display text-lg text-base mb-4">
                                    Our Developments
                                  </h4>
                                  <ul className="space-y-2.5 text-xs tracking-wider uppercase">
                                    <li>
                                      <Link
                                        href="/properties?type=Residential"
                                        className="text-base/70 hover:text-gold transition-colors flex items-center justify-between"
                                      >
                                        Residential Enclaves
                                        <span className="text-[10px] text-gold font-mono">04</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/properties?type=Commercial"
                                        className="text-base/70 hover:text-gold transition-colors flex items-center justify-between"
                                      >
                                        Commercial Landmarks
                                        <span className="text-[10px] text-gold font-mono">02</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/properties?type=Land+Development"
                                        className="text-base/70 hover:text-gold transition-colors flex items-center justify-between"
                                      >
                                        Land Enclaves
                                        <span className="text-[10px] text-gold font-mono">01</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/properties"
                                        className="text-base/70 hover:text-gold transition-colors flex items-center justify-between"
                                      >
                                        All Developments
                                        <span className="text-[10px] text-gold font-mono">07</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="pt-4 border-t border-base/10">
                                  <p className="text-caption text-gold mb-2">Prime Locations</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {["Gulshan", "Banani", "Baridhara", "Purbachal", "Chittagong"].map((loc) => (
                                      <span
                                        key={loc}
                                        className="text-[11px] px-2.5 py-1 bg-base/5 border border-base/10 text-base/60"
                                      >
                                        {loc}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right column: 3 Featured Project cards */}
                              <div className="col-span-9">
                                <div className="flex items-center justify-between mb-4">
                                  <p className="text-caption text-gold">Featured Highlights</p>
                                  <Link
                                    href="/properties"
                                    className="text-xs tracking-wider uppercase text-gold hover:underline inline-flex items-center gap-1"
                                  >
                                    Explore Full Catalog →
                                  </Link>
                                </div>

                                <div className="grid grid-cols-3 gap-5">
                                  {featuredProjects.map((p) => (
                                    <Link
                                      key={p.id}
                                      href={`/properties/${p.slug}`}
                                      className="group block bg-base/5 border border-base/10 hover:border-gold/50 transition-all duration-300 overflow-hidden"
                                    >
                                      <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                          src={p.image}
                                          alt={p.name}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                                          sizes="(max-width: 1200px) 25vw, 300px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                                        <div className="absolute top-2 left-2">
                                          <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-gold text-ink font-semibold">
                                            {p.status}
                                          </span>
                                        </div>
                                        <div className="absolute bottom-2 left-3 right-3">
                                          <p className="text-xs text-base/60">{p.location}</p>
                                          <p className="font-display text-sm text-base truncate group-hover:text-gold transition-colors">
                                            {p.name}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 relative py-1 ${
                    pathname === link.href
                      ? "text-gold font-medium"
                      : "text-base/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-xs tracking-wider font-mono text-base/80 hover:text-gold transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {siteConfig.phone}
            </a>
            <button
              onClick={() => setVisitModalOpen(true)}
              className="px-6 py-2.5 bg-gold text-ink text-xs font-semibold tracking-[0.12em] uppercase hover:bg-base hover:text-ink transition-all duration-300 shadow-md"
            >
              Book a Visit
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle navigation"
          >
            <span
              className={`w-6 h-0.5 bg-base transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-base transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-base transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col justify-between overflow-y-auto pt-28 pb-12 px-8 lg:hidden"
          >
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-display text-3xl block ${
                      pathname === link.href ? "text-gold" : "text-base"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {link.hasMegaMenu && (
                    <div className="mt-2 pl-4 flex flex-wrap gap-2 text-xs uppercase tracking-wider">
                      <Link
                        href="/properties?type=Residential"
                        onClick={() => setMobileOpen(false)}
                        className="text-base/60 hover:text-gold"
                      >
                        Residential
                      </Link>
                      <span className="text-base/20">·</span>
                      <Link
                        href="/properties?type=Commercial"
                        onClick={() => setMobileOpen(false)}
                        className="text-base/60 hover:text-gold"
                      >
                        Commercial
                      </Link>
                      <span className="text-base/20">·</span>
                      <Link
                        href="/properties?type=Land+Development"
                        onClick={() => setMobileOpen(false)}
                        className="text-base/60 hover:text-gold"
                      >
                        Land Enclaves
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-base/10 space-y-4"
            >
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setVisitModalOpen(true);
                }}
                className="w-full py-3.5 bg-emerald text-base text-xs font-semibold tracking-[0.08em] uppercase hover:bg-gold hover:text-ink transition-colors text-center"
              >
                Book Private Site Tour
              </button>

              <div className="flex items-center justify-between text-xs text-base/60 pt-2">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  WhatsApp Concierge →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book a Visit Modal */}
      <BookVisitModal
        isOpen={visitModalOpen}
        onClose={() => {
          setVisitModalOpen(false);
          setModalProject("");
        }}
        defaultProject={modalProject}
      />
    </>
  );
}
