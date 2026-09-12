import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/lib/data/caseStudies";
import {
  ArrowLeft,
  Check,
  ClipboardCheck,
  Briefcase,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Shield,
  Layers,
  Radio,
  Cpu,
  Compass,
  FileText,
  Sliders,
  BookmarkCheck,
} from "lucide-react";

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
    title: `${cs.title} ${cs.subtitle || ""} | India Business Clinic Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  const { details } = cs;
  const isFullCaseStudy = !!details.background && details.background.length > 0;
  const isNumberedPdf = !!details.executiveSummary && details.executiveSummary.length > 0;

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "technology":
        return "bg-sky-100 text-sky-900 border-sky-200";
      case "operational":
        return "bg-indigo-100 text-indigo-900 border-indigo-200";
      case "human factors":
        return "bg-purple-100 text-purple-900 border-purple-200";
      case "economic":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "institutional":
        return "bg-slate-200 text-slate-900 border-slate-300";
      case "maintenance":
        return "bg-teal-100 text-teal-900 border-teal-200";
      case "quality":
        return "bg-rose-100 text-rose-900 border-rose-200";
      case "trials":
        return "bg-orange-100 text-orange-900 border-orange-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <article className="bg-white py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-accent text-sm font-semibold transition-colors mb-5 sm:mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Header Details */}
        <header className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 border-b border-slate-200 mb-6 sm:mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-sm uppercase tracking-wider font-bold">
              {cs.client}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium uppercase tracking-wider">{cs.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary leading-tight">
            {cs.title}
          </h1>

          {cs.subtitle && (
            <p className="text-lg sm:text-2xl font-serif font-bold text-accent tracking-wide">
              {cs.subtitle}
            </p>
          )}

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
            {cs.summary}
          </p>
        </header>

        {isFullCaseStudy ? (
          /* Rich Full Case Study Layout exactly mirroring PDF structure */
          <div className="space-y-8 sm:space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Executive Summary (if present) */}
            {details.executiveSummary && details.executiveSummary.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <FileText className="h-6 w-6 text-accent shrink-0" />
                  <span>Executive Summary</span>
                </h2>
                <div className="space-y-3 bg-amber-50/40 border border-amber-200/80 rounded-lg p-4 sm:p-6 text-slate-800">
                  {details.executiveSummary.map((para, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* 1. Background */}
            {details.background && details.background.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Shield className="h-6 w-6 text-accent shrink-0" />
                  <span>{isNumberedPdf ? "1. Background" : "Background"}</span>
                </h2>
                <div className="space-y-3 bg-slate-50/70 border border-slate-200/80 rounded-lg p-4 sm:p-6 text-slate-700">
                  {details.background.map((para, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* 2. Association */}
            {details.association && details.association.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Briefcase className="h-6 w-6 text-accent shrink-0" />
                  <span>{isNumberedPdf ? "2. Association" : "My Association"}</span>
                </h2>
                <div className="bg-primary/5 border border-primary/15 rounded-lg p-4 sm:p-6 space-y-4">
                  {details.associationPreamble && (
                    <p className="text-slate-800 font-semibold text-sm sm:text-base">
                      {details.associationPreamble}
                    </p>
                  )}
                  <ul className="space-y-2.5">
                    {details.association.map((para, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-800">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{para}</span>
                      </li>
                    ))}
                  </ul>
                  {details.associationPostscript && (
                    <p className="text-slate-600 text-xs sm:text-sm italic pt-2 border-t border-primary/10">
                      {details.associationPostscript}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* 3. Design Philosophy */}
            {details.designPhilosophy && details.designPhilosophy.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Sliders className="h-6 w-6 text-accent shrink-0" />
                  <span>3. Design Philosophy</span>
                </h2>
                <div className="space-y-3">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    The design approach emphasized:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {details.designPhilosophy.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3.5 bg-slate-50 border border-slate-200 rounded-md p-3 sm:p-4"
                      >
                        <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-slate-800 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 4. Design Methodology */}
            {details.designMethodology && details.designMethodology.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Layers className="h-6 w-6 text-accent shrink-0" />
                  <span>4. Design Methodology</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.designMethodology.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 bg-white border border-slate-200 rounded-md p-3 sm:p-4 shadow-2xs hover:border-accent/40 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features (for IUHDSS) */}
            {details.keyFeatures && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Cpu className="h-6 w-6 text-accent shrink-0" />
                  <span>Key Features of IUHDSS</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {details.keyFeatures.developer && (
                    <div className="bg-slate-50 border border-slate-200/80 rounded-md p-3 sm:p-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Developer
                      </span>
                      <span className="text-base font-semibold text-primary">
                        {details.keyFeatures.developer}
                      </span>
                    </div>
                  )}
                  {details.keyFeatures.purpose && (
                    <div className="bg-slate-50 border border-slate-200/80 rounded-md p-3 sm:p-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Purpose
                      </span>
                      <span className="text-base font-semibold text-primary">
                        {details.keyFeatures.purpose}
                      </span>
                    </div>
                  )}
                </div>

                {/* Components */}
                {details.keyFeatures.components && details.keyFeatures.components.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-lg font-serif font-bold text-primary flex items-center space-x-2">
                      <Layers className="h-5 w-5 text-accent shrink-0" />
                      <span>Components</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {details.keyFeatures.components.map((comp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 bg-white border border-slate-200 rounded-md p-3 sm:p-3.5 shadow-xs hover:border-accent/40 transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Capabilities */}
                {details.keyFeatures.capabilities && details.keyFeatures.capabilities.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-lg font-serif font-bold text-primary flex items-center space-x-2">
                      <Radio className="h-5 w-5 text-accent shrink-0" />
                      <span>Capabilities</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {details.keyFeatures.capabilities.map((cap, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 bg-accent/5 border border-accent/20 rounded-md p-3 sm:p-3.5"
                        >
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-800 text-sm font-medium">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* 5. Challenges (Categorized Table or List) */}
            {details.categorizedChallenges && details.categorizedChallenges.length > 0 ? (
              <section className="space-y-4 pt-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-amber-600 pl-3 flex items-center space-x-2.5">
                    <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                    <span>5. Challenges</span>
                  </h2>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {details.categorizedChallenges.length} Critical Dimensions
                  </span>
                </div>

                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                  <div className="hidden sm:grid sm:grid-cols-12 bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider py-3 px-4 border-b border-slate-200">
                    <div className="sm:col-span-4">Category</div>
                    <div className="sm:col-span-8">Challenge</div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {details.categorizedChallenges.map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 p-3 sm:p-4 items-start hover:bg-slate-50/60 transition-colors"
                      >
                        <div className="sm:col-span-4">
                          <span
                            className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md border ${getCategoryColor(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <div className="sm:col-span-8 text-slate-700 text-sm leading-relaxed font-medium">
                          {item.challenge}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : details.challenges && details.challenges.length > 0 ? (
              <section className="space-y-4 pt-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-amber-600 pl-3 flex items-center space-x-2.5">
                    <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                    <span>Challenges</span>
                  </h2>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {details.challenges.length} Real-World Obstacles Encountered
                  </span>
                </div>
                
                <div className="space-y-3">
                  {details.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3.5 bg-amber-50/40 border border-amber-200/70 rounded-md p-3 sm:p-4 transition-all hover:bg-amber-50/70"
                    >
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-800 text-sm leading-relaxed">{ch}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* 6. Remedies / Solutions */}
            {details.remedies && details.remedies.length > 0 && (
              <section className="space-y-4 pt-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-emerald-600 pl-3 flex items-center space-x-2.5">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                    <span>
                      {isNumberedPdf
                        ? "6. Solutions & Remedies"
                        : details.solutionsRemediesTitle || "Remedies"}
                    </span>
                  </h2>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {details.remedies.length} Strategic Interventions
                  </span>
                </div>

                <div className="space-y-3">
                  {details.remedies.map((rem, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3.5 bg-emerald-50/30 border border-emerald-200/70 rounded-md p-3 sm:p-4 transition-all hover:bg-emerald-50/60"
                    >
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-800 text-sm leading-relaxed">{rem}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Key Lessons Learned */}
            {details.lessonsLearned && details.lessonsLearned.length > 0 && (
              <section className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Lightbulb className="h-6 w-6 text-accent shrink-0" />
                  <span>
                    {isNumberedPdf
                      ? "7. Lessons Learned"
                      : details.lessonsLearnedTitle || "Lessons Learned"}
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.lessonsLearned.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5 flex flex-col justify-between hover:border-accent/40 transition-colors"
                    >
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                          Lesson {idx + 1}
                        </span>
                        <p className="text-slate-700 text-sm leading-relaxed">{lesson}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 8. Conclusion */}
            {details.conclusion && details.conclusion.length > 0 && (
              <section className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <Compass className="h-6 w-6 text-accent shrink-0" />
                  <span>{isNumberedPdf ? "8. Conclusion" : "Conclusion"}</span>
                </h2>
                <div className="bg-slate-50/80 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg space-y-3 text-slate-700">
                  {details.conclusion.map((c, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {c}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* 9. References & Acknowledgments */}
            {details.acknowledgments && details.acknowledgments.length > 0 && (
              <section className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-3 flex items-center space-x-2.5">
                  <BookmarkCheck className="h-6 w-6 text-accent shrink-0" />
                  <span>9. References &amp; Acknowledgments</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.acknowledgments.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 bg-white border border-slate-200 rounded-lg p-4 shadow-2xs"
                    >
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 10. Author Sign-Off */}
            {details.author && (
              <section className="pt-4 border-t border-slate-200">
                <div className="bg-slate-100/70 border border-slate-200 rounded-lg p-4 sm:p-6 max-w-lg">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
                    {isNumberedPdf ? "10. Author" : "Written By"}
                  </span>
                  <div className="space-y-1">
                    <p className="text-base font-bold text-primary">{details.author.name}</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      {details.author.title}
                    </p>
                    {details.author.role && (
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {details.author.role}
                      </p>
                    )}
                    {details.author.company && (
                      <p className="text-xs sm:text-sm text-accent font-semibold pt-0.5">
                        {details.author.company}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}

          </div>
        ) : (
          /* Standard / Compact View for simpler case studies */
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-primary border-l-2 border-accent pl-3 flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-accent" />
                <span>Project Overview</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {details.overview}
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
                {details.keyDeliverables.map((kd, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-slate-50 border border-slate-200/40 rounded-sm p-3 sm:p-4">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-xs sm:text-sm font-semibold">{kd}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Consultation Callout */}
        <div className="bg-primary text-white border border-slate-800 rounded-lg p-5 sm:p-8 mt-10 sm:mt-16 text-center space-y-3 sm:space-y-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
            {cs.category === "Defence & Aerospace"
              ? "Need Similar Defence Installation Surveillance or Program Oversight?"
              : "Need Similar Industrial Manufacturing Setup or Quality Compliance?"}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            {cs.category === "Defence & Aerospace"
              ? "We provide structured audits, on-ground installation surveillance, system integration oversight, and regulatory compliance tailored to military standards."
              : "We provide end-to-end industrial advisory, facility qualification, ERP & supply chain alignment, and rigorous quality surveillance for global manufacturing standards."}
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
