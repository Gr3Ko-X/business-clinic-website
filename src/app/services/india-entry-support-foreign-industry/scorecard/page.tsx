import React from "react";
import IndiaEntryReadinessScorecard from "@/app/scorecard/IndiaEntryReadinessScorecard";

export const metadata = {
  title: "India Entry Readiness Scorecard | India Business Clinic",
  description:
    "Assess your enterprise readiness across 9 operational, statutory, and manufacturing dimensions before capital commitment in India.",
  alternates: {
    canonical: "/services/india-entry-support-foreign-industry/scorecard",
  },
};

export default function IndiaEntryScorecardPage() {
  return <IndiaEntryReadinessScorecard />;
}
