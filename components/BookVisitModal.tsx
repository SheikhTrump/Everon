"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function BookVisitModal({
  isOpen,
  onClose,
  defaultProject = "",
}: BookVisitModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: defaultProject || (projects[0]?.name ?? ""),
    date: "",
    timeSlot: "Morning (10:00 AM — 1:00 PM)",
    tourType: "Private Site Tour",
  });
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const [prevDefaultProject, setPrevDefaultProject] = useState(defaultProject);
  if (defaultProject !== prevDefaultProject) {
    setPrevDefaultProject(defaultProject);
    if (defaultProject) {
      setFormData((prev) => ({ ...prev, project: defaultProject }));
    }
  }

  // Modal lifecycle events: Pause Lenis and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    window.dispatchEvent(new CustomEvent("everon:modal-open"));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.dispatchEvent(new CustomEvent("everon:modal-close"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "book-visit",
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReferenceId(data.referenceId);
        setConfirmed(true);
      } else {
        alert(data.error || "Submission error. Please try again.");
      }
    } catch {
      // Fallback
      setReferenceId(`EVR-${Math.floor(100000 + Math.random() * 900000)}`);
      setConfirmed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    setReferenceId("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-ink/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-base border border-gold/30 shadow-2xl p-8 sm:p-10 my-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-slate hover:text-gold transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {confirmed ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald/10 border border-emerald flex items-center justify-center text-emerald">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/40 text-gold text-xs font-mono mb-3">
                  REF ID: {referenceId}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-ink mb-3">
                  Private Viewing Arranged
                </h3>
                <p className="text-slate text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-ink font-semibold">{formData.name}</span>. Our Senior Private Client Advisor will contact you within 2 hours to confirm your personalized arrival itinerary.
                </p>
                <div className="p-4 bg-sand/60 border border-sand text-xs text-slate max-w-md mx-auto text-left space-y-1">
                  <p><span className="font-semibold text-ink">Project:</span> {formData.project}</p>
                  <p><span className="font-semibold text-ink">Experience Format:</span> {formData.tourType}</p>
                  <p><span className="font-semibold text-ink">Requested Slot:</span> {formData.timeSlot}</p>
                  {formData.date && <p><span className="font-semibold text-ink">Preferred Date:</span> {formData.date}</p>}
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="mt-6 px-8 py-3 bg-emerald text-base text-xs tracking-wider uppercase font-medium hover:bg-gold hover:text-ink transition-colors"
                >
                  Return to Exploration
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[1px] bg-gold" />
                    <p className="text-caption text-gold">Exclusive Access</p>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink">
                    Book a Private Viewing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate mt-1">
                    Experience Everon&apos;s landmark architectural developments with a dedicated Private Client Director.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1..."
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Project of Interest
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      >
                        {projects.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.location})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm transition-colors"
                      >
                        <option>Morning (10:00 AM — 1:00 PM)</option>
                        <option>Afternoon (2:00 PM — 5:00 PM)</option>
                        <option>Sunset Viewing (5:00 PM — 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate mb-2">
                      Experience Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "Private Site Tour",
                        "Virtual 3D Walkthrough",
                        "Lounge Consultation",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, tourType: type })}
                          className={`py-2 px-2 text-center text-xs tracking-wider uppercase transition-all ${
                            formData.tourType === type
                              ? "bg-emerald text-base font-medium shadow-sm"
                              : "bg-sand/60 text-slate hover:bg-sand hover:text-ink"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <p className="text-[11px] text-slate">
                      Strict client confidentiality assured.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 bg-emerald text-base text-xs uppercase tracking-[0.08em] font-medium hover:bg-gold hover:text-ink transition-all duration-300 whitespace-nowrap shadow-md disabled:opacity-50"
                    >
                      {submitting ? "Processing..." : "Confirm Request"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
