import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian MSME Troubleshooting & Clinics | India Business Clinic",
  description:
    "Diagnosis and remediation of operational, quality, vendor, and growth challenges for Indian MSME manufacturing units.",
  alternates: {
    canonical: "/services/indian-msme-troubleshooting",
  },
};

export default function IndianMSMEClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
