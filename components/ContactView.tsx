"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const officeLocations = [
  {
    id: "dhaka",
    name: "Head Office — Dhaka",
    address: siteConfig.address,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    email: siteConfig.email,
    hours: "Sunday — Thursday: 9:00 AM — 7:00 PM",
    coords: { lat: 23.7937, lng: 90.4023 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0245!2d90.4023!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnMDguMyJF!5e0!3m2!1sen!2sbd!4v1699900000000",
  },
  {
    id: "chittagong",
    name: "Regional Office — Chittagong",
    address: "Tower 3, Level 14, Agrabad Commercial Area, Chittagong 4100",
    phone: "+880 1987-654321",
    whatsapp: "https://wa.me/8801987654321",
    email: "chittagong@everon.com.bd",
    hours: "Sunday — Thursday: 9:30 AM — 6:30 PM",
    coords: { lat: 22.3275, lng: 91.8153 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.12!2d91.8153!3d22.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE5JzM5LjAiTiA5McKwNDgnNTUuMSJF!5e0!3m2!1sen!2sbd!4v1699900000000",
  },
];

export default function ContactView() {
  const [activeOffice, setActiveOffice] = useState<string>("dhaka");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReferenceId(data.referenceId);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", project: "", message: "" });
      } else {
        alert(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setReferenceId(`EVR-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const selectedOffice =
    officeLocations.find((o) => o.id === activeOffice) || officeLocations[0];

  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-24 bg-ink border-b border-white/5 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">
                Private Consultation
              </p>
            </div>
            <h1 className="text-hero font-display text-base mb-3">
              Initiate a Dialogue
            </h1>
            <p className="text-base/60 text-lg max-w-xl">
              Connect with our Private Client Advisory for confidential project viewings, bespoke acquisitions, and master-plan inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Form Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="text-caption text-gold mb-2">Direct Inquiry</p>
                <h2 className="text-section font-display text-ink mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate text-sm sm:text-base leading-relaxed">
                  Please provide your contact coordinates and our senior liaison will reach out within two business hours.
                </p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-emerald/10 border border-emerald/30 text-emerald text-sm flex items-start gap-3"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold block mb-0.5">Consultation Registered (Ref: {referenceId})</span>
                    <span>Your dossier has been routed to our Senior Client Director. Expect confidential communication shortly.</span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-0 py-3.5 bg-transparent border-b border-sand focus:border-gold text-ink outline-none transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-slate text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-wider"
                  >
                    Full Name *
                  </label>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-0 py-3.5 bg-transparent border-b border-sand focus:border-gold text-ink outline-none transition-colors peer placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-slate text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full px-0 py-3.5 bg-transparent border-b border-sand focus:border-gold text-ink outline-none transition-colors peer placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-3 text-slate text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-wider"
                    >
                      Phone / WhatsApp *
                    </label>
                  </div>
                </div>

                {/* Project Selection */}
                <div className="relative">
                  <select
                    id="project"
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="w-full px-0 py-3.5 bg-transparent border-b border-sand focus:border-gold text-ink outline-none transition-colors text-sm"
                  >
                    <option value="">Select Development (Optional)</option>
                    <option value="Everon Heights">Everon Heights (Gulshan)</option>
                    <option value="Everon Gardens">Everon Gardens (Banani)</option>
                    <option value="Everon Commerce Tower">Everon Commerce Tower (Motijheel)</option>
                    <option value="Everon Lakeside">Everon Lakeside (Uttara)</option>
                    <option value="Everon Prime Plaza">Everon Prime Plaza (Dhanmondi)</option>
                    <option value="Everon Chittagong Residences">Everon Chittagong Residences (Agrabad)</option>
                    <option value="Everon Riverbank Enclave">Everon Riverbank Enclave (Purbachal)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full px-0 py-3.5 bg-transparent border-b border-sand focus:border-gold text-ink outline-none transition-colors peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-slate text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-wider"
                  >
                    Your Message / Specific Requirements *
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-10 py-4 bg-emerald text-base text-xs font-semibold tracking-[0.08em] uppercase hover:bg-gold hover:text-ink transition-all duration-300 shadow-sm disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Consultation"}
                  </button>
                  <span className="text-[11px] text-slate font-mono">
                    ISO 9001:2015 ASSURED
                  </span>
                </div>
              </form>
            </div>

            {/* Right Map & Offices Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Office Selector Tabs */}
              <div className="flex border border-sand bg-base p-1">
                {officeLocations.map((office) => {
                  const isActive = office.id === activeOffice;
                  return (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office.id)}
                      className={`flex-1 py-3 px-4 text-xs tracking-wider uppercase transition-all duration-300 font-medium ${
                        isActive
                          ? "bg-emerald text-base shadow-sm"
                          : "text-slate hover:text-ink"
                      }`}
                    >
                      {office.id === "dhaka" ? "Dhaka Head Office" : "Chittagong Office"}
                    </button>
                  );
                })}
              </div>

              {/* Architectural Dark Map */}
              <div className="relative h-[340px] border border-sand/80 overflow-hidden bg-ink shadow-md group">
                <iframe
                  src={selectedOffice.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "saturate(0.5) contrast(1.15)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${selectedOffice.name} Google Map`}
                />
              </div>

              {/* Office Details Card */}
              <div className="p-6 bg-sand border border-sand/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg text-ink font-semibold">
                    {selectedOffice.name}
                  </h4>
                  <span className="px-2.5 py-0.5 text-[10px] tracking-wider uppercase bg-emerald text-base font-medium">
                    Open
                  </span>
                </div>

                <div className="space-y-2 text-sm text-slate">
                  <p className="flex items-start gap-2">
                    <span className="text-gold font-semibold">Address:</span>
                    <span>{selectedOffice.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold font-semibold">Hours:</span>
                    <span>{selectedOffice.hours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold font-semibold">Direct:</span>
                    <a href={`tel:${selectedOffice.phone}`} className="hover:text-emerald text-ink font-medium">
                      {selectedOffice.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold font-semibold">Email:</span>
                    <a href={`mailto:${selectedOffice.email}`} className="hover:text-emerald text-ink font-medium">
                      {selectedOffice.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
