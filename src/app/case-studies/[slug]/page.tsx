import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/lib/data/caseStudies";
import { ArrowLeft, Check, ClipboardCheck, Briefcase } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) return {};

  return {
    title: `${cs.title} | Business Clinic Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <article className="bg-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-accent text-sm font-semibold transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Header Details */}
        <div className="space-y-4 pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-500">
            <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
              {cs.client}
            </span>
            <span>•</span>
            <span className="text-slate-400 font-medium">{cs.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary leading-tight">
            {cs.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
            {cs.summary}
          </p>
        </div>

        {/* Details Grid */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Overview */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-primary border-l-2 border-accent pl-3 flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-accent" />
              <span>Project Overview</span>
            </h2>
            <p className="text-slate-600">
              {cs.details.overview}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-serif font-bold text-primary border-l-2 border-accent pl-3 flex items-center space-x-2">
              <ClipboardCheck className="h-5 w-5 text-accent" />
              <span>Our Execution Deliverables</span>
            </h2>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Factual scope implemented under our surveillance
            </p>
            <ul className="space-y-3">
              {cs.details.keyDeliverables.map((kd, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-slate-50 border border-slate-200/40 rounded-sm p-4">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-semibold">{kd}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-primary text-white border border-slate-800 rounded-lg p-6 sm:p-8 mt-16 text-center space-y-4">
          <h3 className="font-serif text-lg font-bold text-white">
            Need Similar Quality Assurance or Audits?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            We provide structured audits, FAI, FAT, and regulatory compliance surveillance tailored to strict military and commercial aerospace standards.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider shadow-sm"
            >
              <span>Speak to Col Sanjay Chandra</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
