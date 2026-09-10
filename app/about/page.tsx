import type { Metadata } from "next";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Our Architectural Legacy & Leadership | EVERON",
  description:
    "Learn about Everon's nineteen-year heritage, executive leadership, engineering precision, and sustainability milestones shaping urban Bangladesh.",
  openGraph: {
    title: "About EVERON — The Company & Vision",
    description:
      "Crafting iconic living sanctuaries and Grade-A commercial developments in Bangladesh since 2005.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
