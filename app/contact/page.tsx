import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact & Private Client Advisory | EVERON",
  description:
    "Initiate a confidential dialogue with Everon's Senior Private Client Directors. Visit our Dhaka Head Office in Banani or Regional Office in Agrabad, Chittagong.",
  openGraph: {
    title: "Contact Everon Private Client Advisory",
    description:
      "Schedule a confidential viewing or inquire about bespoke acquisitions in Dhaka and Chittagong.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
