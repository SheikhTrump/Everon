import type { Metadata } from "next";
import CareersView from "@/components/CareersView";

export const metadata: Metadata = {
  title: "Careers | EVERON",
  description:
    "Career opportunities in engineering, design, and client advisory with Everon, a newly launched real estate developer in Dhaka and Chittagong.",
  openGraph: {
    title: "Careers at EVERON",
    description: "Join Everon's founding team in Dhaka and Chittagong.",
  },
};

export default function CareersPage() {
  return <CareersView />;
}
