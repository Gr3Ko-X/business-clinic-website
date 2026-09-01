import React from "react";
import Link from "next/link";
import { methodologiesData } from "@/lib/data/methodology";
import {
  SearchCode,
  Building2,
  FileCheck2,
  TrendingUp,
  Compass,
  ShieldAlert,
  Lightbulb,
  GitMerge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Methodology | Business Clinic",
  description: "Learn about our execution methodologies: the 4E framework for global companies entering India and the 5D framework for industrial growth optimization.",
};

export default function MethodologyPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "SearchCode":
        return SearchCode;
      case "Building2":
        return Building2;
      case "FileCheck2":
        return FileCheck2;
      case "TrendingUp":
        return TrendingUp;
      case "Compass":
        return Compass;
      case "ShieldAlert":
        return ShieldAlert;
      case "Lightbulb":
        return Lightbulb;
      case "GitMerge":
        return GitMerge;
      case "CheckCircle2":
        return CheckCircle2;
      default:
        return CheckCircle2;
    }
  };

  const getStepBreakdown = (frameworkId: string, stepName: string) => {
    if (frameworkId === "global-oem") {
      switch (stepName) {
        case "ENTER":
          return [
            "Evaluate FDI regulations and industrial licenses",
            "Establish local market sizing and strategic positioning",
            "Assess operational and geographical feasibility"
          ];
        case "ESTABLISH":
          return [
            "Company incorporation and statutory setups",
            "Identify site locations, land procurement, and EPC contracts",
            "Secure state-level approvals and utility infrastructure"
          ];
        case "ENABLE":
          return [
            "Coordinate Defence Industrial & WPC Licenses",
            "Setup factory layouts, assembly tooling, and ISO structures",
            "Audit localized sub-contractors and materials vendors"
          ];
        case "EXPAND":
          return [
            "Continuous supply chain scaling and CRM support",
            "Build order pipeline with Indian public/private entities",
            "Establish joint venture growth structures and ongoing monitoring"
          ];
        default:
          return [];
      }
    } else {
      switch (stepName) {
        case "DISCOVER":
          return [
            "Conduct structured interviews with stakeholders",
            "Map key operational challenges and customer symptoms",
            "Establish benchmark metrics for throughput and quality"
          ];
        case "DIAGNOSE":
          return [
            "Analyze cycle times, scrap rates, and machine uptime",
            "Evaluate compliance structures and SOP coverage",
            "Identify root causes of delays or delivery rejections"
          ];
        case "DESIGN":
          return [
            "Develop practical, shop-floor action solutions",
            "Define milestones, resource budgets, and tooling needs",
            "Outline key performance metrics (OEE / throughput targets)"
          ];
        case "DEPLOY":
          return [
            "Provide hands-on training to operators and managers",
            "Establish new SOP compliance workflows on-site",
            "Optimize plant layout and mechanical setups directly"
          ];
        case "SUSTAIN":
          return [
            "Conduct regular periodic check-ins and audits",
            "Monitor ongoing OEE tracking and capability sheets",
            "Fine-tune workflows to resolve emerging bottlenecks"
          ];
        default:
          return [];
      }
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-12 overflow-hidden border-b border-[#D98A10]/20">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              How We Work
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Our Execution Frameworks
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              Advice is only as good as the ability to execute it. We structure our advisory engagements around two proven timelines to guarantee deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed methodologies loop */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 max-w-5xl mx-auto">
            {methodologiesData.map((framework) => (
              <div key={framework.id} className="space-y-8">
                {/* Title Card */}
                <div className="bg-primary text-white p-6 rounded-t-lg border-b-4 border-accent">
                  <h2 className="font-sans font-bold text-sm sm:text-base uppercase tracking-widest text-accent mb-1">
                    {framework.title}
                  </h2>
                  <p className="text-xs text-slate-300">
                    {framework.subtitle}
                  </p>
                </div>

                {/* Vertical Step Timeline Layout */}
                <div className="relative border-l border-slate-200 pl-6 sm:pl-8 ml-4 space-y-12">
                  {framework.steps.map((step, sIdx) => {
                    const Icon = getIcon(step.iconName);
                    const subSteps = getStepBreakdown(framework.id, step.name);
                    return (
                      <div key={step.name} className="relative scroll-mt-24 group">
                        
                        {/* Timeline Node Icon */}
                        <div className="absolute -left-[45px] sm:-left-[53px] top-0 p-2.5 bg-white border-2 border-slate-200 text-primary rounded-full group-hover:border-accent group-hover:text-accent transition-colors duration-300 shadow-sm z-10">
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Title and details */}
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                            <span className="text-xs font-bold text-accent tracking-widest uppercase">
                              STAGE {step.stepNumber} — {step.name}
                            </span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <h3 className="font-sans font-bold text-base text-primary">
                              {step.subTitle}
                            </h3>
                          </div>
                          
                          <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
                            {step.description}
                          </p>

                          {/* Sub-steps details list */}
                          <div className="bg-slate-50 border border-slate-200/40 rounded-sm p-5 max-w-3xl space-y-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Engagement Deliverables
                            </h4>
                            <ul className="space-y-2.5">
                              {subSteps.map((sub, ssIdx) => (
                                <li key={ssIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Commitment Statement */}
          <div className="mt-20 bg-slate-50 border border-slate-200 rounded-lg p-8 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex p-2 bg-accent/10 rounded-full text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-primary">
              Our Core Guarantee
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              We do not provide advice and walk away. Our engagement structures are built on the commitment that from initial assessment to ongoing operations, we remain on-site until your target outcomes are achieved.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                <span>Initiate Diagnostics Assessment</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
