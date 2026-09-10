import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EVERON Bangladesh",
  description: "Terms and conditions governing the use of Everon digital portals and architectural publications.",
};

export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 lg:pt-44 bg-base min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-gold" />
          <p className="text-caption text-gold uppercase tracking-widest">Legal</p>
        </div>
        <h1 className="text-section font-display text-ink mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-slate leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to the digital portal of EVERON Real Estate Development Ltd. By accessing this website, architectural brochures, and project materials, you agree to adhere to these terms.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">1. Architectural Visualizations &amp; Disclaimers</h3>
          <p>
            Renders, 3D visualizations, aerial perspectives, and floor-plan diagrams presented on this portal are artist impressions intended for conceptual visualization. Final structural layouts, materials, and handover specifications are governed exclusively by the formal Deed of Agreement between Everon and the allottee.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">2. Intellectual Property</h3>
          <p>
            All architectural blueprints, trademarked brand marks, project imagery, and copy are the proprietary intellectual property of Everon. Unauthorized reproduction or commercial use is strictly prohibited.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">3. Governing Jurisdiction</h3>
          <p>
            Any disputes arising in connection with this portal or preliminary property reservations are subject to the jurisdiction of the courts of Dhaka, Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
}
