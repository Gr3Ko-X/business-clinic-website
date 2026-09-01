import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/lib/data/caseStudies";
import { ArrowRight, Shield, Anchor, Zap } from "lucide-react";

export const metadata = {
  title: "Execution Case Studies | Business Clinic",
  description: "Factual profiles of complex programs coordinated, set up, and validated under our leadership across defence, Navy, and industrial sectors.",
};

export default function CaseStudiesListPage() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "indigenous-ew-system":
        return Shield;
      case "harbour-surveillance-system":
        return Anchor;
      case "ge-collaboration-pdu":
        return Zap;
      default:
        return Shield;
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-12 overflow-hidden border-b border-[#D98A10]/20">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Case Studies
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Execution Track Record
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              Explore documented industrial outcomes representing our principal advisory leadership and compliance surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {caseStudiesData.map((cs) => {
              const Icon = getIcon(cs.slug);
              return (
                <div
                  key={cs.slug}
                  className="bg-slate-50/50 border border-slate-200/80 rounded-lg p-6 flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-sm uppercase tracking-wide">
                        {cs.client}
                      </span>
                      <Icon className="h-5 w-5 text-slate-400" />
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-lg font-bold text-primary leading-tight">
                      {cs.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="border-t border-slate-100 pt-4 mt-6">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center space-x-1.5 text-primary hover:text-accent font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
