import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Operational Health Check | India Business Clinic",
  description:
    "Evaluate your manufacturing and business operations with the India Business Clinic diagnostic assessment.",
  alternates: {
    canonical: "/services/indian-msme-troubleshooting/health-check",
  },
};

export default function MSMEHealthCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
