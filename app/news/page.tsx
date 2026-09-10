import type { Metadata } from "next";
import NewsCatalog from "@/components/NewsCatalog";

export const metadata: Metadata = {
  title: "News & Press Releases | EVERON Bangladesh",
  description:
    "Read the latest press releases, architectural project launches, industry awards, and sustainability initiatives from Everon.",
  openGraph: {
    title: "News & Press | EVERON Real Estate",
    description:
      "Latest announcements, awards, and project launches from Bangladesh's premier developer.",
  },
};

export default function NewsPage() {
  return <NewsCatalog />;
}
