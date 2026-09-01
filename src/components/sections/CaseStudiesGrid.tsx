"use client";

import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/lib/data/caseStudies";
import { ArrowRight, Shield, Anchor, Zap } from "lucide-react";

export default function CaseStudiesGrid() {
  // Helper to get category icons
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
    <section className="bg-slate-50/50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Proven Industrial Track Record
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Factual profiles of complex programs coordinated and validated under our leadership.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-2 border border-primary hover:bg-primary/5 text-primary px-6 py-3 rounded-sm font-semibold text-sm transition-all"
            >
              <span>View Case Studies</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => {
            const Icon = getIcon(cs.slug);
            return (
              <div
                key={cs.slug}
                className="bg-white border border-slate-200/80 rounded-md p-6 flex flex-col justify-between hover:shadow-lg hover:border-accent/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Category & Icon */}
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      {cs.client}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary leading-tight">
                    {cs.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="border-t border-slate-100 pt-4 mt-6">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center space-x-1 text-primary hover:text-accent font-bold text-xs uppercase tracking-wider transition-colors"
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
  );
}
