import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsData } from "@/lib/data/insights";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((art) => art.slug === slug);
  if (!article) return {};
  
  return {
    title: `${article.title} | Business Clinic`,
    description: article.summary,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-accent text-sm font-semibold transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-500">
            <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{article.publishDate}</span>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary leading-tight">
            {article.title}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed italic">
            {article.summary}
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none pt-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Simple parser for paragraph and headers in our static markdown content */}
          {article.contentMarkdown.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // Helper to strip markdown bold markers
            const cleanText = (txt: string) => txt.split("**").join("");

            if (trimmed.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-2xl sm:text-3xl font-serif font-bold text-primary pt-4 pb-2">
                  {cleanText(trimmed.replace("# ", ""))}
                </h1>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-serif font-bold text-primary pt-4 pb-1">
                  {cleanText(trimmed.replace("## ", ""))}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-lg sm:text-xl font-serif font-bold text-primary pt-3 pb-1">
                  {cleanText(trimmed.replace("### ", ""))}
                </h3>
              );
            }
            if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
              const items = trimmed.split(/\n[\*\-]\s/);
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 py-2">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-slate-600">
                      {cleanText(item.replace(/^[\*\-]\s/, ""))}
                    </li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split(/\n\d+\.\s/);
              return (
                <ol key={idx} className="list-decimal pl-6 space-y-2 py-2">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-slate-600">
                      {cleanText(item.replace(/^\d+\.\s/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={idx} className="leading-relaxed">
                {cleanText(trimmed)}
              </p>
            );
          })}
        </div>

        {/* Call To Action Box inside Article */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 mt-12 text-center space-y-4">
          <h3 className="font-serif text-lg font-bold text-primary">
            Need Expert Insight on This Topic?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            We provide specialized on-ground diagnostics and compliance reviews mapping to the issues discussed above.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
            >
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
