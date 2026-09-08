import React from "react";
import IndiaEntryReadinessScorecard from "@/app/scorecard/IndiaEntryReadinessScorecard";

export const metadata = {
  title: "India Entry Readiness Scorecard | Business Clinic",
  description:
    "Assess your enterprise readiness across 9 operational, statutory, and manufacturing dimensions before capital commitment in India.",
};

export default function IndiaEntryScorecardPage() {
  return <IndiaEntryReadinessScorecard />;
}
