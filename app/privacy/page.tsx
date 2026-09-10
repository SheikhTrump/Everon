import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EVERON Bangladesh",
  description: "Everon's commitment to client confidentiality, data protection, and privacy standards.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-24 lg:pt-44 bg-base min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-gold" />
          <p className="text-caption text-gold uppercase tracking-widest">Legal</p>
        </div>
        <h1 className="text-section font-display text-ink mb-8">
          Privacy &amp; Client Confidentiality
        </h1>

        <div className="space-y-6 text-slate leading-relaxed text-sm sm:text-base">
          <p>
            At EVERON, we respect and safeguard the privacy of our prospective buyers, residents, and institutional partners. This policy outlines our standards for personal data governance in compliance with the laws of Bangladesh and international best practices.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">1. Collection of Confidential Information</h3>
          <p>
            When you request a private property viewing, download technical floor plans, or initiate an advisory consultation, we collect essential coordinates such as your name, telephone number, email, and property preferences.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">2. Usage &amp; Non-Disclosure</h3>
          <p>
            Your information is exclusively utilized by our Senior Private Client Advisory to coordinate your requested itinerary and provide tailored acquisition information. We never sell, lease, or distribute private client data to third-party marketing brokers.
          </p>
          <h3 className="font-display text-lg text-ink pt-4">3. Security Standards</h3>
          <p>
            All submitted consultation inquiries are encrypted and processed under ISO 9001:2015 organizational standards.
          </p>
        </div>
      </div>
    </div>
  );
}
