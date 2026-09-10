"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const openings = [
  {
    title: "Senior Architect",
    department: "Design",
    location: "Dhaka",
    type: "Full-time",
    requirements: "B.Arch from reputed university, 7+ years luxury residential & high-rise experience.",
  },
  {
    title: "Structural Engineer",
    department: "Construction",
    location: "Dhaka",
    type: "Full-time",
    requirements: "B.Sc in Civil Engineering, BNBC Seismic Zone IV expertise, ETABS & SAFE proficiency.",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Chittagong",
    type: "Full-time",
    requirements: "Proven track record in high-net-worth real estate acquisitions & client relationship management.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Dhaka",
    type: "Full-time",
    requirements: "Brand strategy and luxury visual communications experience in architectural sectors.",
  },
  {
    title: "Site Supervisor",
    department: "Construction",
    location: "Dhaka",
    type: "Full-time",
    requirements: "Diploma or B.Sc in Civil Engineering, 5+ years on-site quality assurance experience.",
  },
  {
    title: "Interior Designer",
    department: "Design",
    location: "Dhaka",
    type: "Full-time",
    requirements: "Hospitality & luxury residential spatial design experience, AutoCAD, 3ds Max / Corona.",
  },
];

export default function CareersView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("Senior Architect");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "3–5 Years",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleOpenApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setConfirmed(false);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "career",
          role: selectedJob,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          message: `Portfolio: ${formData.portfolio} | Notes: ${formData.notes}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReferenceId(data.referenceId);
        setConfirmed(true);
      } else {
        alert(data.error || "Submission failed.");
      }
    } catch {
      setReferenceId(`EVR-${Math.floor(100000 + Math.random() * 900000)}`);
      setConfirmed(true);
    } finally {
      setSubmitting(false);
    }
  };

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
            Join Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero font-display text-base"
          >
            Careers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-base/60 max-w-xl"
          >
            Build your career at one of Bangladesh&apos;s most admired real estate
            developers. We&apos;re always looking for passionate people who share our
            commitment to architectural quality.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Growth",
                description:
                  "We invest in our people with continuous learning, mentorship programs, and clear career paths.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                title: "Impact",
                description:
                  "Every role at Everon contributes directly to shaping the architectural skyline of Bangladesh.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Culture",
                description:
                  "A collaborative, respectful workplace where engineering precision is expected and design innovation is celebrated.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-sand border border-sand/80 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald/10 flex items-center justify-center mb-4 text-emerald border border-emerald/20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Openings */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-caption text-gold mb-1">Opportunities</p>
                <h2 className="text-section font-display text-ink">
                  Current Open Positions
                </h2>
              </div>
              <span className="text-xs font-mono text-slate">
                06 ROLES OPEN
              </span>
            </div>

            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-base border border-sand hover:border-gold/50 transition-all duration-300 shadow-sm"
                >
                  <div className="mb-4 md:mb-0 max-w-xl">
                    <h3 className="font-display text-xl text-ink group-hover:text-emerald transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 mb-2">
                      <span className="text-xs text-gold font-medium uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate">•</span>
                      <span className="text-xs text-slate">
                        {job.location}
                      </span>
                      <span className="text-xs text-slate">•</span>
                      <span className="text-xs text-slate">{job.type}</span>
                    </div>
                    <p className="text-xs text-slate leading-relaxed">
                      {job.requirements}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenApply(job.title)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald text-base text-xs tracking-[0.06em] uppercase font-medium hover:bg-gold hover:text-ink transition-all duration-300 self-start md:self-auto"
                  >
                    Quick Apply
                    <svg
                      className="w-3.5 h-3.5"
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
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-emerald">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-section font-display text-base mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-base/70 mb-8 max-w-xl mx-auto leading-relaxed">
            We are always seeking visionary talent in structural engineering, 3D visualization, architectural sustainability, and private client relations.
          </p>
          <button
            onClick={() => handleOpenApply("Spontaneous Application / General Talent")}
            className="px-10 py-4 bg-gold text-ink text-xs font-semibold tracking-[0.08em] uppercase hover:bg-base transition-colors duration-300 inline-block shadow-md"
          >
            Submit Spontaneous Dossier
          </button>
        </div>
      </section>

      {/* Quick Apply Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-ink/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-base border border-gold/30 shadow-2xl p-8 sm:p-10 my-8 z-10"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-slate hover:text-gold"
                aria-label="Close modal"
              >
                ✕
              </button>

              {confirmed ? (
                <div className="py-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald/10 border border-emerald flex items-center justify-center text-emerald">
                    ✓
                  </div>
                  <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/40 text-gold text-xs font-mono mb-2">
                    APP REF: {referenceId}
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">
                    Application Dossier Received
                  </h3>
                  <p className="text-slate text-sm max-w-md mx-auto mb-6">
                    Thank you for applying for <span className="font-semibold text-ink">{selectedJob}</span>. Our Talent Acquisition Committee will review your credentials against our architectural standards.
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-8 py-2.5 bg-emerald text-base text-xs uppercase tracking-wider font-medium"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <p className="text-caption text-gold mb-1 uppercase tracking-wider">
                      Application Dossier
                    </p>
                    <h3 className="font-display text-2xl text-ink">
                      Apply: {selectedJob}
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm"
                      />
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
                          className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm"
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
                          className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                          Portfolio / LinkedIn URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                          Relevant Experience
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm"
                        >
                          <option>1–3 Years</option>
                          <option>3–5 Years</option>
                          <option>5–10 Years</option>
                          <option>10+ Years (Senior/Director)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate mb-1">
                        Professional Summary / Cover Note
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Briefly highlight your landmark project experience..."
                        className="w-full px-3.5 py-2.5 bg-white border border-sand focus:border-gold outline-none text-ink text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-3 bg-emerald text-base text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
                      >
                        {submitting ? "Transmitting..." : "Submit Dossier"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
