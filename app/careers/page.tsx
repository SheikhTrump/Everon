import type { Metadata } from "next";
import CareersView from "@/components/CareersView";

export const metadata: Metadata = {
  title: "Careers & Architectural Opportunities | EVERON",
  description:
    "Explore career opportunities in structural engineering, luxury architectural design, and private client advisory with Everon in Dhaka and Chittagong.",
  openGraph: {
    title: "Careers at EVERON Real Estate",
    description:
      "Join our multidisciplinary council of architects, engineers, and visionaries building tomorrow's Bangladesh.",
  },
};

export default function CareersPage() {
  return <CareersView />;
}
