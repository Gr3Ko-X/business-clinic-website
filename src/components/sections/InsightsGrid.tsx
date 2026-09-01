"use client";

import React from "react";
import Link from "next/link";
import { insightsData } from "@/lib/data/insights";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export default function InsightsGrid() {
  // Show first 3 insights on the homepage
  const articles = insightsData.slice(0, 3);

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block">
              Featured Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Industrial Insights &amp; Capability Notes
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Read our analysis on navigating India's industrial ecosystem, regulatory guidelines, and operations.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-2 border border-primary hover:bg-primary/5 text-primary px-6 py-3 rounded-sm font-semibold text-sm transition-all"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-slate-50/50 border border-slate-200/60 rounded-md p-6 flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-4">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-3 hover:text-accent transition-colors">
                  <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
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
  );
}
