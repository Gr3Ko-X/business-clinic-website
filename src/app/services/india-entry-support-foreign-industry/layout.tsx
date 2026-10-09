import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Entry Support for Foreign Industry | India Business Clinic",
  description: "End-to-end market entry, corporate structuring, factory setup, regulatory compliance, and partner selection for global companies entering India.",
  alternates: {
    canonical: "/services/india-entry-support-foreign-industry",
  },
};

export default function IndiaEntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
