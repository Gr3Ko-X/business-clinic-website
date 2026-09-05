import React from "react";
import Link from "next/link";
import { insightsData } from "@/lib/data/insights";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Featured Insights & Capability Notes | Business Clinic",
  description: "Browse our articles and capability notes on India market entry, regulatory compliance, industrial operational growth, and industrial setups.",
};

export default function InsightsListPage() {
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
            <span className="text-xs sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Featured Insights
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Industrial Advisory Insights
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              Browse our capability notes and analysis covering India entry strategy, factory establishment, and shop-floor manufacturing troubleshooting.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {insightsData.map((art) => (
              <article
                key={art.slug}
                className="bg-slate-50/50 border border-slate-200/80 rounded-lg p-8 flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-sm text-slate-500 font-semibold mb-4">
                    <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h2>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>

                {/* Footer details */}
                <div className="border-t border-slate-200/60 pt-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">{art.publishDate}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center space-x-1 text-primary hover:text-accent font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
