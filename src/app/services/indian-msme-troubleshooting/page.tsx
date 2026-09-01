"use client"

import React, { useState } from "react";
import Link from "next/link";
import { 
  Factory, 
  Settings, 
  HelpCircle, 
  ArrowRight, 
  Activity, 
  Target, 
  TrendingUp, 
  Check, 
  ChevronRight,
  RefreshCw
} from "lucide-react";

export default function IndianMSMEClinicPage() {
  const [activeStageTab, setActiveStageTab] = useState(0);

  const pillars = [
    {
      title: "Operational Troubleshooting",
      icon: Target,
      bullets: [
        "Production bottleneck identification & line balancing",
        "Quality failure & scrap rate diagnostics",
        "Vendor reliability & supply-chain audits",
        "Inventory management & buffer optimization",
        "Plant floor layout & workflow redesign",
        "Maintenance systems & predictive planning"
      ]
    },
    {
      title: "Manufacturing Excellence",
      icon: Settings,
      bullets: [
        "Lean manufacturing & waste elimination (5S, Kaizen)",
        "Overall Equipment Effectiveness (OEE) improvement",
        "SOP development & visual work instructions",
        "Process control parameters standardization (Cpk)",
        "Product industrialization & tooling setup support"
      ]
    },
    {
      title: "Growth Consulting",
      icon: TrendingUp,
      bullets: [
        "Scaling manufacturing capacity & capital planning",
        "Export readiness checks & global standards auditing",
        "Defence procurement ecosystem qualification",
        "Government tender participation support",
        "Strategic industrial partnership facilitation"
      ]
    }
  ];

  const methodologySteps = [
    { step: "Discover", title: "Understand the Challenge", desc: "Listen, investigate, and identify the core symptoms of the business concern." },
    { step: "Diagnose", title: "Find the Root Cause", desc: "Conduct on-ground data audits to map process gaps and OEE inefficiencies." },
    { step: "Design", title: "Develop the Solution", desc: "Formulate visually clear work instruction cards, layout adjustments, and checklists." },
    { step: "Deploy", title: "Execute & Implement", desc: "Provide direct, on-ground implementation support alongside your floor team." },
    { step: "Sustain", title: "Monitor & Improve", desc: "Establish permanent tracking metrics, review yields, and stabilize quality outcomes." }
  ];

  const recruitmentStages = [
    {
      title: "1. Remote screening",
      mistakes: [
        "Keeping interactions completely informal and ad-hoc.",
        "No structured questionnaire prepared prior to calling.",
        "Failure to record or document interview notes."
      ],
      consequences: [
        "Uneven evaluation playing field for prospective candidates.",
        "No audit trail for leadership to review potential unfair/unprofessional rejections."
      ],
      remedies: [
        "Provide pre-approved questionnaires to HR screeners.",
        "Enforce mandatory logged assessment forms endorsed by the interviewer.",
        "Obtain consent and record calls for training and validation purposes."
      ]
    },
    {
      title: "2. Onsite interview",
      mistakes: [
        "Failing to review health history (major surgeries, chronic ailments).",
        "Ignoring dependent liabilities (family stress, financial issues).",
        "Failing to verify candidate intent (applying just to leverage salary counter-offers).",
        "Neglecting cultural fit, value systems, and social adaptability."
      ],
      consequences: [
        "Reduced performance effectiveness due to unresolved health/personal strains.",
        "High waste of recruitment effort (25% to 50% of candidates drop out/leverage offers).",
        "Harmful impact on team morale if a socially maladjusted resource is hired."
      ],
      remedies: [
        "Mandate at least 3 professional references and run background check calls.",
        "Enforce a strict 3-month probation period with unilateral termination clauses.",
        "Withhold specific salary numbers from offer letters until resignation proof is provided.",
        "Approve multiple concurrent choices and minimize joining time frames."
      ]
    },
    {
      title: "3. Document verification",
      mistakes: [
        "Accepting faded photocopies without checking original degree/experience certificates.",
        "Failing to perform mathematical audits on marksheet grids.",
        "Skipping validation of passing years and correlations."
      ],
      consequences: [
        "High exposure to fraudulent hiring, fake credentials, and data breach risks.",
        "Productivity loss, wasted onboarding budgets, and potential regulatory non-compliance.",
        "Demoralized workforce working alongside unqualified peers."
      ],
      remedies: [
        "Audit institutional names, logos, fonts, and signatories against public registries.",
        "Directly verify credentials by contacting class/batch mates or alumni registries.",
        "Conduct thorough written tests and panel interviews by subject-matter experts to prioritize capability over paper."
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero / Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-14 sm:py-20 overflow-hidden border-b border-[#D98A10]/20">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">
              Solutions // Indian Industry &amp; MSMEs
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Indian MSME Clinic
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Helping Indian manufacturers resolve critical operational challenges, establish shop-floor discipline, implement standardized SOPs, and scale capacity to meet global standards.
            </p>
            <div className="pt-2">
              <a 
                href="#healthcheck-tool" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Start Company Health Check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem Statement */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">The Problems We Solve</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Overcoming Shop-Floor Challenges</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              We help address the operational hurdles that compromise your delivery performance and quality yields.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Production Bottlenecks", desc: "Inefficient shop floor layouts causing material backtracking, and station queues." },
              { title: "Quality Yield Failures", desc: "High batch rejection rates at final inspection due to lack of inline checks." },
              { title: "Cost & Project Delays", desc: "Poor planning, tools delays, and reactive maintenance eating into profits." },
              { title: "Supply Chain Gaps", desc: "Single-source vulnerabilities and lack of incoming quality audits." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-xl p-5 shadow-xs">
                <h3 className="font-serif text-sm font-bold text-primary mb-2">0{idx + 1}. {p.title}</h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">Our Approach</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Operational Growth Clinic</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We structure our support into three dedicated areas to drive sustainable capability building.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="p-3 bg-primary text-white rounded-xl inline-block mb-6">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-200">{p.title}</h3>
                    <ul className="space-y-3">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                          <Check className="h-4 w-4 text-[#D98A10] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Methodology (5D) */}
      <section className="py-20 bg-primary text-white border-t border-b border-[#D98A10]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">Operational Journey</span>
            <h2 className="text-3xl font-serif font-bold text-white">The MSME 5D Implementation Process</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              We stand with you on-ground from initial diagnostic evaluations to deployment and performance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <span className="font-serif text-4xl font-bold text-white/10 absolute top-4 right-4 leading-none">0{idx + 1}</span>
                <span className="text-xs font-bold text-[#D98A10] tracking-wider block mb-2">{step.step}</span>
                <h3 className="font-serif text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Health Check Interactive Tool */}
      <section id="healthcheck-tool" className="py-20 bg-slate-50/50 scroll-mt-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl shadow-lg p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D98A10]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex-1 space-y-5 text-center md:text-left relative z-10">
              <div className="inline-flex items-center space-x-2 bg-[#D98A10]/10 border border-[#D98A10]/20 px-3 py-1 rounded-full text-xs font-bold text-[#D98A10] uppercase tracking-wide">
                <Activity className="w-4 h-4" />
                <span>Full Operational Assessment</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary leading-tight">
                MSME Company Health Check Tool
              </h2>
              
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Assess your business honestly across 10 operational dimensions including Strategy, Sales, Manufacturing, Quality, Supply Chain, and compliance. Surfacing your critical floor bottlenecks takes only 8–10 minutes.
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 pt-1">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#D98A10]" /> 10 Assessment Categories</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#D98A10]" /> 52 Operational Gaps Analyzed</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#D98A10]" /> Directional 100-Point Scorecard</span>
              </div>
            </div>
            
            <div className="shrink-0 w-full md:w-auto text-center md:text-left relative z-10">
              <Link 
                href="/services/indian-msme-troubleshooting/health-check" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0C1D4A] hover:bg-[#071333] text-white px-8 py-4.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <span>Launch Health Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. MSME HR & Recruitment Gaps Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Strategic Compliance</span>
            <h2 className="text-3xl font-serif font-bold text-primary">MSME HR &amp; Recruitment Gaps</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Addressing operational gaps and vetting risks in MSME recruitment workflows based on the client capability paper.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Tab Controls */}
            <div className="flex border-b border-slate-200">
              {[
                "1. Remote screening",
                "2. Onsite interview",
                "3. Document verification"
              ].map((tabLabel, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStageTab(idx)}
                  className={`flex-1 text-center py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    activeStageTab === idx
                      ? "border-[#D98A10] text-[#D98A10]"
                      : "border-transparent text-slate-500 hover:text-primary"
                  }`}
                >
                  {tabLabel}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {/* Mistakes Column */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-red-600">
                  <span className="text-sm font-bold uppercase tracking-wider font-sans">Common Mistakes</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4">
                  {recruitmentStages[activeStageTab].mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Consequences Column */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-orange-600">
                  <span className="text-sm font-bold uppercase tracking-wider font-sans">Consequences</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4">
                  {recruitmentStages[activeStageTab].consequences.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Remedies Column */}
              <div className="bg-amber-50/30 border border-amber-200/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-emerald-600">
                  <span className="text-sm font-bold uppercase tracking-wider font-sans">Remedies &amp; Solutions</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4">
                  {recruitmentStages[activeStageTab].remedies.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best Practices Checklist Summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-12 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="font-serif text-lg font-bold text-primary">MSME Recruitment Best Practices</h3>
                <Link
                  href="/insights/hr-gaps-msme-recruitment"
                  className="text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] uppercase tracking-wider"
                >
                  Read Full Paper &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Standardized pre-approved screening questionnaires",
                  "Consent-based recorded interviews for screen audits",
                  "Three reference calls check on candidate personality",
                  "Perusal of candidate public social media footprint",
                  "Appointment letters withheld until resignation proof",
                  "Three-month probation clauses with unilateral termination",
                  "Structured written tests and panel examinations",
                  "Institution logos, mark sheets, and signatories audit checks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="h-4.5 w-4.5 text-[#D98A10] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Ready to Stabilize Your Yields and Delivery Timelines?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact us to detail custom diagnostic audits of your workshop floor, tool setups, visual SOP libraries, or OEE metrics.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
