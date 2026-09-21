import type { Metadata } from "next";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Everon",
  description:
    "Everon is a newly launched real estate developer in Bangladesh. Learn about our current pipeline and the standards we're building to.",
  openGraph: {
    title: "About EVERON",
    description:
      "A newly launched real estate developer in Bangladesh, currently planning its first projects.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
