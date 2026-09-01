import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Clinic at BTS 2026 | India Entry Partner",
  description:
    "Exploring India? Meet Business Clinic at Bengaluru Tech Summit 2026. Book an India Entry discussion for market opportunity, strategy, partners, and regulatory guidance.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Business Clinic — India Entry Partner at BTS 2026",
    description:
      "17–19 November 2026 | Bengaluru. Book an India Entry discussion with Business Clinic at Bengaluru Tech Summit 2026.",
    type: "website",
    locale: "en_IN",
  },
};

export default function BtsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
