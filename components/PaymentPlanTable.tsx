"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PaymentPlanTableProps {
  projectName: string;
  startingPrice?: string;
}

const defaultMilestones = [
  { stage: "01. Booking Confirmation", percentage: "10%", description: "Payable upon signature of formal reservation agreement" },
  { stage: "02. Allotment & Work Commencement", percentage: "15%", description: "Upon piling and foundation works mobilization" },
  { stage: "03. Structural Superstructure", percentage: "40%", description: "Equally distributed across floor slab casting phases" },
  { stage: "04. Facade, MEP & Internal Finishes", percentage: "20%", description: "Upon exterior glazing, electrical cabling and marble fitting" },
  { stage: "05. Final Handover & Registration", percentage: "15%", description: "Upon formal key handover and land registry deed execution" },
];

export default function PaymentPlanTable({
  projectName,
  startingPrice = "BDT 3.50 Cr",
}: PaymentPlanTableProps) {
  const [tenureYears, setTenureYears] = useState(15);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);

  // Simplified baseline computation based on ~4 Cr average
  const baseValueCr = parseFloat(startingPrice.replace(/[^0-9.]/g, "")) || 3.5;
  const totalBdt = baseValueCr * 10000000;
  const downPaymentBdt = totalBdt * (downPaymentPercent / 100);
  const loanPrincipal = totalBdt - downPaymentBdt;
  const annualRate = 0.085; // 8.5% typical premier mortgage rate
  const monthlyRate = annualRate / 12;
  const totalMonths = tenureYears * 12;
  const monthlyPayment =
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const formatBdt = (val: number) => {
    return "BDT " + Math.round(val).toLocaleString("en-IN");
  };

  return (
    <section className="py-16 lg:py-24 bg-ink border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <p className="text-caption text-gold uppercase tracking-widest">Financial Blueprint</p>
            </div>
            <h2 className="text-section font-display text-base">
              Milestone Payment Schedule
            </h2>
          </div>

          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("everon:open-book-visit", {
                    detail: { project: `${projectName} (Payment Plan Advisory)` },
                  })
                );
              }
            }}
            className="px-6 py-3 border border-gold/40 text-gold text-xs uppercase tracking-[0.08em] hover:bg-gold hover:text-ink transition-colors duration-300 self-start md:self-auto font-medium"
          >
            Request Bespoke Finance Plan
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Milestone Schedule */}
          <div className="lg:col-span-7 space-y-3">
            <p className="text-xs uppercase tracking-wider text-base/50 mb-2 font-mono">
              Construction-Linked Milestone Tranches
            </p>
            {defaultMilestones.map((milestone, i) => (
              <motion.div
                key={milestone.stage}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 bg-base/5 border border-base/10 hover:border-gold/40 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="font-display text-base text-base font-semibold mb-1">
                    {milestone.stage}
                  </h4>
                  <p className="text-xs text-base/50 leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-mono text-xl font-bold text-gold">
                    {milestone.percentage}
                  </span>
                  <p className="text-[10px] text-base/40 uppercase tracking-wider">Tranche</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mortgage & Installment Estimator */}
          <div className="lg:col-span-5 bg-base/5 border border-gold/20 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-caption text-gold uppercase tracking-wider">
                  Indicative Estimator
                </span>
                <span className="text-xs px-2.5 py-0.5 bg-gold/10 text-gold border border-gold/30">
                  @ 8.5% p.a.
                </span>
              </div>

              <h3 className="font-display text-xl text-base mb-6">
                Financing &amp; Ownership Calculator
              </h3>

              {/* Down payment slider */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs text-base/70">
                  <span>Down Payment Ratio:</span>
                  <span className="font-mono text-gold font-semibold">{downPaymentPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-gold bg-base/20 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-base/40 font-mono">
                  <span>20% (Min)</span>
                  <span>{formatBdt(downPaymentBdt)}</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Tenure selector */}
              <div className="mb-8 space-y-2">
                <label className="block text-xs text-base/70">
                  Amortization Tenure (Years)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 15, 20].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setTenureYears(yr)}
                      className={`py-2 text-xs font-mono transition-colors border ${
                        tenureYears === yr
                          ? "bg-gold text-ink font-bold border-gold"
                          : "border-base/15 text-base/70 hover:border-base/40"
                      }`}
                    >
                      {yr} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Computed Monthly Output */}
              <div className="p-5 bg-ink border border-gold/30 mb-4 text-center">
                <p className="text-[11px] text-base/50 uppercase tracking-widest mb-1">
                  Estimated Monthly Outlay
                </p>
                <p className="text-2xl sm:text-3xl font-display text-gold font-bold">
                  {formatBdt(monthlyPayment)}
                </p>
                <p className="text-[10px] text-base/40 mt-1">
                  Subject to bank credit underwriting and customized tranche terms.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-base/40 leading-relaxed">
              * Everon maintains preferred partnerships with Standard Chartered, Eastern Bank, and BRAC Bank offering fast-track private client mortgages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
