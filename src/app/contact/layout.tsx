import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | India Business Clinic",
  description: "Schedule a confidential consultation with Col Sanjay Chandra (Retd) to discuss India entry, MSME troubleshooting, defence licensing, or operational advisory.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
