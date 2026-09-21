import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact | EVERON",
  description:
    "Get in touch with Everon. Visit our office in Banani, Dhaka, or reach us by phone, email, or WhatsApp.",
  openGraph: {
    title: "Contact Everon",
    description: "Get in touch about any project in our current planning pipeline.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
