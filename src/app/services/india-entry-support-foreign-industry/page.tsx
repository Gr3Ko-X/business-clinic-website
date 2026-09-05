"use client"

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Building2, 
  Check, 
  ChevronRight, 
  ArrowRight, 
  ClipboardCheck, 
  Sparkles,
  RefreshCw,
  HelpCircle,
  FileCheck2,
  ListTodo
} from "lucide-react";

export default function IndiaEntryClinicPage() {
  // Scorecard state
  const [activeCategory, setActiveCategory] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [activeMistakeIndex, setActiveMistakeIndex] = useState<number | null>(null);
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  
  const scorecardCategories = [
    {
      name: "Market Understanding",
      maxPoints: 6,
      questions: [
        "Have you conducted an India market assessment?",
        "Is India part of a documented growth strategy?",
        "Have you identified target customers?",
        "Do you understand local competition?",
        "Have you estimated market size and opportunity?",
        "Have you identified key market-entry barriers?"
      ]
    },
    {
      name: "Entry Strategy & Business Model",
      maxPoints: 4,
      questions: [
        "Have you selected your preferred entry route? (Distributor, Rep Office, Joint Venture, Wholly-Owned Subsidiary, or Manufacturing)",
        "Have you defined revenue targets?",
        "Is your pricing strategy India-specific?",
        "Is your business model adapted for India?"
      ]
    },
    {
      name: "Regulatory & Compliance Readiness",
      maxPoints: 5,
      questions: [
        "Do you understand FEMA requirements and Automatic Route limits?",
        "Have sector-specific approvals been mapped to the unified SWAGAT-FI digital gateway?",
        "Is there a designated Board Director residing locally in India?",
        "Are import/export codes (IEC) and customs clearance procedures understood?",
        "Have industrial licensing list needs (including Arms Act or DIL lists) been identified?"
      ]
    },
    {
      name: "Manufacturing & Supply Chain Readiness",
      maxPoints: 5,
      questions: [
        "Have potential manufacturing locations been evaluated?",
        "Have supply chain requirements been mapped?",
        "Have local sourcing opportunities been assessed?",
        "Have vendor qualification criteria been established?",
        "Is localization strategy defined?"
      ]
    },
    {
      name: "Financial Readiness",
      maxPoints: 5,
      questions: [
        "Has investment budget been approved?",
        "Are automatic route share allotments planned for FC-GPR reporting within 30 days?",
        "Has transfer pricing arm's-length price documentation been prepared for audits?",
        "Are GST 2.0 electronic invoicing systems mapped for claiming input tax credits?",
        "Has funding and banking setup strategy been finalized?"
      ]
    },
    {
      name: "Organization & Talent Readiness",
      maxPoints: 5,
      questions: [
        "Have key leadership positions been identified?",
        "Is there a hiring strategy?",
        "Are payroll models and employment contracts aligned with the Four Labour Codes?",
        "Is HR compliance understood?",
        "Is a local management structure planned?"
      ]
    },
    {
      name: "Partnership & Ecosystem Readiness",
      maxPoints: 5,
      questions: [
        "Have potential partners been identified?",
        "Have distributors been evaluated?",
        "Have vendors been shortlisted?",
        "Is due diligence planned?",
        "Have industry associations been identified?"
      ]
    },
    {
      name: "Operational Setup Readiness",
      maxPoints: 5,
      questions: [
        "Are office/factory requirements defined?",
        "Are utilities and infrastructure requirements assessed?",
        "Are ERP systems planned?",
        "Are banking arrangements identified?",
        "Is the logistics model defined?"
      ]
    },
    {
      name: "Risk Management & Governance",
      maxPoints: 5,
      questions: [
        "Has an India risk assessment been performed?",
        "Are customer/employee digital architectures aligned with Digital Personal Data Protection (DPDP) rules?",
        "Are environmental safety clearance protocols mapped to State Pollution Control Boards?",
        "Is the governance structure defined?",
        "Is compliance monitoring planned?"
      ]
    }
  ];

  // Initialize selected answers (checked indices per category)
  const [answers, setAnswers] = useState<Record<number, number[]>>({
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []
  });

  const handleToggleQuestion = (catIdx: number, qIdx: number) => {
    const current = answers[catIdx] || [];
    let updated;
    if (current.includes(qIdx)) {
      updated = current.filter(item => item !== qIdx);
    } else {
      updated = [...current, qIdx];
    }
    setAnswers({
      ...answers,
      [catIdx]: updated
    });
  };

  const calculateTotalScore = () => {
    let total = 0;
    Object.keys(answers).forEach((key) => {
      const idx = parseInt(key);
      total += answers[idx].length;
    });
    return total;
  };

  const getScoreStatus = (score: number) => {
    if (score >= 40) return { label: "India Entry Ready", color: "text-emerald-600 border-emerald-200 bg-emerald-50", desc: "You have a well-developed market-entry plan and are positioned for successful execution.", indicator: "🟢" };
    if (score >= 35) return { label: "Moderate Readiness", color: "text-amber-600 border-amber-200 bg-amber-50", desc: "Good foundation exists, but several critical gaps should be addressed before market entry.", indicator: "🟡" };
    if (score >= 30) return { label: "High-Risk Entry", color: "text-orange-600 border-orange-200 bg-orange-50", desc: "Significant planning and validation required before committing resources.", indicator: "🟠" };
    return { label: "Not Ready", color: "text-red-600 border-red-200 bg-red-50", desc: "Entry at this stage may result in delays, compliance issues, and unnecessary costs.", indicator: "🔴" };
  };

  const resetScorecard = () => {
    setAnswers({
      0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []
    });
    setActiveCategory(0);
    setCompleted(false);
  };

  const totalScore = calculateTotalScore();
  const currentStatus = getScoreStatus(totalScore);

  const pillars = [
    {
      title: "Market Entry & Setup",
      bullets: [
        "Feasibility studies & sector analysis",
        "Preferred entry route evaluation",
        "Company incorporation",
        "GST / PAN / IEC registration",
        "Banking, FEMA & FDI compliance"
      ],
    },
    {
      title: "Industrial Establishment",
      bullets: [
        "Land & factory site identification",
        "EPC coordination & plant utilities",
        "Factory licensing & approvals",
        "Environmental clearances (PCB)",
        "Vendor ecosystem development"
      ],
    },
    {
      title: "Ongoing Operations",
      bullets: [
        "Strategic partner & JV facilitation",
        "Localization & supply chain audits",
        "Regulatory compliance coordination",
        "On-ground representation & support",
        "Ongoing vendor management"
      ],
    },
  ];

  const steps6E = [
    {
      step: "STAGE 1: ASSESS",
      label: "Market Opportunity",
      desc: "Evaluate market feasibility, project entry barriers, and determine demand variables."
    },
    {
      step: "STAGE 2: STRATEGIZE",
      label: "Entry Strategy",
      desc: "Define target segments, map localization requirements, and outline a 2/5/8-year roadmap."
    },
    {
      step: "STAGE 3: STRUCTURE",
      label: "Entity Selection",
      desc: "Choose from Private Limited, LLP, Joint Venture, or Branch office entry vehicles."
    },
    {
      step: "STAGE 4: ESTABLISH",
      label: "Entity Incorporation",
      desc: "Secure registrations (GST, PAN, IEC, bank) and locate office/factory land."
    },
    {
      step: "STAGE 5: EXECUTE",
      label: "Operational Launch",
      desc: "Integrate vendor supply chains, complete recruitment cycles, and activate plant floor SOPs."
    },
    {
      step: "STAGE 6: SCALE",
      label: "Commercial Growth",
      desc: "Increase capacity utilization, optimize process yields, and scale revenue footprints."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Page Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-14 sm:py-20 overflow-hidden border-b border-[#D98A10]/20">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">
              Solutions // Global OEM Partner
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              India Entry Clinic
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Your single-window execution partner for launching, establishing, and scaling operations in India—translating entry strategy into on-ground operational success.
            </p>
            <div className="pt-2">
              <a 
                href="#scorecard-tool" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Launch Entry Scorecard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem Statement */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">The Challenges</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Navigating India's Entry Barriers</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Establishing industrial footprints in a foreign regulatory and vendor ecosystem requires local guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Market Feasibility", desc: "Understanding domestic regulatory restrictions, FDI thresholds, and identifying local competitors." },
              { title: "Legal & FDI Compliance", desc: "Navigating corporate incorporation, banking registration, secretarial filings, and GST details." },
              { title: "Factory Establishment", desc: "Acquiring industrial land, obtaining factory approvals, and coordinating with local EPC layout engineers." },
              { title: "Supply Chain & Vetting", desc: "Identifying, vetting, and auditing local component manufacturers to meet strict quality benchmarks." }
            ].map((prob, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-xl p-6 shadow-xs">
                <h3 className="font-serif text-base font-bold text-primary mb-2">0{idx + 1}. {prob.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Solutions Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">Single-Window Execution</span>
            <h2 className="text-3xl font-serif font-bold text-primary">India Entry &amp; Operations Support</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We stand with global firms from preliminary strategic analysis to day-to-day manufacturing execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-8 relative flex flex-col justify-between shadow-xs">
                <div>
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
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology (6-Stage Business Clinic India Entry Framework™) */}
      <section className="py-20 bg-primary text-white overflow-hidden border-t border-b border-[#D98A10]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">Methodology</span>
            <h2 className="text-3xl font-serif font-bold text-white">Business Clinic India Entry Framework™</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our 6-stage modular transition pathway maps your expansion from initial assessment to commercial scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps6E.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 relative flex flex-col justify-between">
                <span className="font-serif text-3xl font-bold text-white/10 absolute top-4 right-4 leading-none">0{idx + 1}</span>
                <div>
                  <span className="text-xs font-bold text-[#D98A10] tracking-wider block mb-1.5">{step.step}</span>
                  <h3 className="font-serif text-sm font-bold text-white mb-2">{step.label}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Scorecard Section */}
      <section id="scorecard-tool" className="py-20 bg-slate-50/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 justify-center">
              <ClipboardCheck className="w-5 h-5 text-[#D98A10]" />
              <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">
                Self Assessment
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary">India Entry Readiness Scorecard</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Carry out an objective assessment of your setup status across 9 attributes based on the client document.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-md p-6 sm:p-10 space-y-6">
            {!completed ? (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-100 pb-4 gap-2">
                  <span className="text-xs font-bold text-[#D98A10] uppercase tracking-wider">
                    Category {activeCategory + 1} of 9: {scorecardCategories[activeCategory].name}
                  </span>
                  <span className="text-xs text-slate-600 font-bold">
                    Points: {(answers[activeCategory] || []).length} / {scorecardCategories[activeCategory].maxPoints}
                  </span>
                </div>

                {/* Question Checklist */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Select the items you have verified / completed:</p>
                  <div className="space-y-2.5">
                    {scorecardCategories[activeCategory].questions.map((q, idx) => {
                      const isChecked = (answers[activeCategory] || []).includes(idx);
                      return (
                        <button
                          key={idx}
                          onClick={() => handleToggleQuestion(activeCategory, idx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start space-x-3 cursor-pointer ${
                            isChecked 
                              ? "bg-amber-50/50 border-[#D98A10] text-[#0C1D4A]" 
                              : "bg-slate-50/30 border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? "bg-[#D98A10] border-[#D98A10] text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="leading-snug">{q}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <button
                    disabled={activeCategory === 0}
                    onClick={() => setActiveCategory(activeCategory - 1)}
                    className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed uppercase"
                  >
                    Previous
                  </button>

                  {activeCategory < 8 ? (
                    <button
                      onClick={() => setActiveCategory(activeCategory + 1)}
                      className="inline-flex items-center space-x-1.5 bg-primary hover:bg-[#071230] text-white px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Next Category</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setCompleted(true)}
                      className="inline-flex items-center space-x-1.5 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Submit Assessment</span>
                      <Sparkles className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto border ${currentStatus.color} shadow-sm`}>
                  <span className="text-2xl">{currentStatus.indicator}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Self Assessment Result</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Total Score: <span className="text-[#D98A10]">{totalScore}</span> / 45
                  </h3>
                  <p className={`inline-block px-3 py-1 border rounded-full text-xs font-bold ${currentStatus.color}`}>
                    Status: {currentStatus.label}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed pt-2">
                    {currentStatus.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 max-w-md mx-auto flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetScorecard}
                    className="inline-flex items-center justify-center space-x-1.5 border border-slate-300 hover:bg-slate-50 text-slate-600 px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retake Assessment</span>
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-1.5 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Request Free 45-Min Session</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5.1. 10 Common Mistakes Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Strategic Failures</span>
            <h2 className="text-3xl font-serif font-bold text-primary">10 Common Mistakes</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Based on the client handbook, avoid these recurring pitfalls that delay market entry, increase cost, or cause business failure in India.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { num: "01", title: "Entering Without a Clear India Strategy", desc: "Many companies view India as a single market and fail to map target customer segments, localized pricing structures, or specific regional demographics." },
              { num: "02", title: "Choosing the Wrong Entry Model", desc: "Selecting an inappropriate structure (liaison, branch, subsidiary, or JV) without correlating it to investment levels, regulatory demands, and direct commercial capabilities." },
              { num: "03", title: "Underestimating Regulatory and Compliance Requirements", desc: "India has a comprehensive statutory framework covering FEMA automatic route filing windows, resident directors, GST registration, transfer pricing, and environmental approvals." },
              { num: "04", title: "Selecting the Wrong Local Partner", desc: "Appointing local distributors, sales agents, or joint venture (JV) partners without rigorous background, commercial, and financial due diligence." },
              { num: "05", title: "Ignoring India's Regional Diversity", desc: "Taxation benefits, industrial subsidies, power reliability, and labor laws vary significantly between major states." },
              { num: "06", title: "Assuming Global Products Will Succeed Without Localization", desc: "Global products require pricing, packaging, features, and service model adjustments to meet competitive local market conditions." },
              { num: "07", title: "Underestimating Time, Cost, and Working Capital Requirements", desc: "Approvals, site readiness, recruitment, and customer qualifications frequently demand more budget buffer than planned." },
              { num: "08", title: "Neglecting Government Incentives and Industrial Policies", desc: "Failing to capitalize on Production Linked Incentive (PLI) schemes, Special Economic Zones (SEZs), and state-level land or power tariff benefits." },
              { num: "09", title: "Weak Execution and Local Project Management", desc: "A lack of local on-ground representation to coordinate consultants, contractors, regulators, and government interfaces." },
              { num: "10", title: "Treating India as a Short-Term Opportunity", desc: "India rewards long-term relationship commitment and supplier development; short-term horizons often lead to early exit failure." }
            ].map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveMistakeIndex(activeMistakeIndex === idx ? null : idx)}
                  className="w-full text-left p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-primary flex items-center space-x-3">
                    <span className="text-[#D98A10]">{item.num}.</span>
                    <span>{item.title}</span>
                  </span>
                  <span className="text-slate-400 font-bold text-xs">{activeMistakeIndex === idx ? "—" : "+"}</span>
                </button>
                {activeMistakeIndex === idx && (
                  <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Link
              href="/insights/india-market-entry-handbook"
              className="text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] uppercase tracking-wider animate-pulse"
            >
              Read Full Handbook Analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5.2. Major States Comparison Section */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Geographic Profiling</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Major States in India</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Comparison matrix showing manufacturing capabilities and ease indices for key industrial states in India.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-xs font-bold">
                <tr>
                  <th className="px-6 py-4">State</th>
                  <th className="px-6 py-4">Manufacturing</th>
                  <th className="px-6 py-4">Electronics</th>
                  <th className="px-6 py-4">Automotive</th>
                  <th className="px-6 py-4">Aerospace</th>
                  <th className="px-6 py-4">Ease of Biz</th>
                  <th className="px-6 py-4">Incentives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600 font-medium">
                {[
                  { name: "Gujarat", mfg: "★★★★★", elec: "★★★★☆", auto: "★★★★☆", aero: "★★★☆☆", ease: "High", inc: "High" },
                  { name: "Tamil Nadu", mfg: "★★★★★", elec: "★★★★★", auto: "★★★★★", aero: "★★★★☆", ease: "High", inc: "High" },
                  { name: "Karnataka", mfg: "★★★★☆", elec: "★★★★★", auto: "★★★☆☆", aero: "★★★★★", ease: "High", inc: "High" },
                  { name: "Maharashtra", mfg: "★★★★★", elec: "★★★★☆", auto: "★★★★☆", aero: "★★★★☆", ease: "High", inc: "Moderate" },
                  { name: "Uttar Pradesh", mfg: "★★★★☆", elec: "★★★☆☆", auto: "★★★☆☆", aero: "★★★☆☆", ease: "Improving", inc: "High" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">{row.name}</td>
                    <td className="px-6 py-4 text-[#D98A10]">{row.mfg}</td>
                    <td className="px-6 py-4 text-[#D98A10]">{row.elec}</td>
                    <td className="px-6 py-4 text-[#D98A10]">{row.auto}</td>
                    <td className="px-6 py-4 text-[#D98A10]">{row.aero}</td>
                    <td className="px-6 py-4">{row.ease}</td>
                    <td className="px-6 py-4">{row.inc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5.3. ROM Timeline & Cost Budget Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Financial &amp; Planning Benchmarks</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Indicative Timelines &amp; Cost Planning</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Standard Rough Order of Magnitude (ROM) metrics for establishing operations in India during 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Timeline Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <h3 className="font-serif text-base font-bold text-primary border-b border-slate-200 pb-2">Operational Set Up Durations</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  { name: "Market Assessment", dur: "3 – 6 weeks" },
                  { name: "Partner Search", dur: "4 – 8 weeks" },
                  { name: "Company Incorporation", dur: "2 – 4 weeks" },
                  { name: "Recruitment Cycle", dur: "8 – 12 weeks" },
                  { name: "Factory Setup", dur: "3 – 12 months" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-200/50 pb-2">
                    <span className="text-slate-600 font-medium">{item.name}</span>
                    <span className="font-bold text-primary">{item.dur}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Budget Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <h3 className="font-serif text-base font-bold text-primary border-b border-slate-200 pb-2">Indicative ROM Cost Budget (2026)</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  { name: "Market Study", cost: "$4,000", note: "One-Time" },
                  { name: "Legal Incorporation", cost: "$3,000", note: "One-Time" },
                  { name: "Office Setup", cost: "$5,000", note: "One-Time" },
                  { name: "Recruitment Support", cost: "$10,000", note: "One-Time" },
                  { name: "Annual Compliance", cost: "$10,000", note: "Per Year" },
                  { name: "Working Capital Reserve", cost: "$100,000", note: "Per Year" },
                  { name: "Business Marketing", cost: "$100,000", note: "Per Year" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-200/50 pb-2">
                    <span className="text-slate-600 font-medium">{item.name} <span className="text-xs text-slate-400">({item.note})</span></span>
                    <span className="font-bold text-primary">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto text-center font-medium">
            * Footnote disclaimer: The timeline and cost tables represent client-supplied Rough Order of Magnitude (ROM) indicators for 2026. Actual schedules and budgets are highly dependent on the scope, industry size, location choices, and specific licensing parameters.
          </p>
        </div>
      </section>

      {/* 5.4. FAQs Accordion Section */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Compliance Details</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Clear advisory answers to the most common legal, operational, and financial questions regarding India market entry.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Why should our company consider India?", a: "India offers one of the world's largest consumer markets, a rapidly growing economy (~7.7% GDP growth), a highly skilled engineering workforce, competitive manufacturing costs, and strong government support for industrial development. It is a preferred destination for companies implementing a 'China Plus One' strategy." },
              { q: "Is India suitable only for large multinational companies?", a: "No. India offers opportunities for businesses of all sizes. Many SMEs have successfully entered the Indian market through distributors, joint ventures, contract manufacturing, or wholly owned subsidiaries. The appropriate entry model depends on your objectives and long-term strategy." },
              { q: "How long does it typically take to establish operations in India?", a: "A typical market entry project—from strategy development to commencing operations—takes between 6 and 12 months. Regulated industries (such as defense or telecommunications) may require additional time due to licensing, approvals, and security clearances." },
              { q: "Should we establish manufacturing immediately?", a: "Not necessarily. Many companies begin by exporting, appointing local distributors, or using contract manufacturing before investing in their own physical facilities. The decision should be based on market demand and long-term business objectives." },
              { q: "Can a foreign company own 100% of an Indian company?", a: "Yes. In many sectors, 100% Foreign Direct Investment (FDI) is permitted under the Automatic Route (notifying RBI via FC-GPR within 30 days of share allotment). However, certain strategic sectors (such as defense or telecom) require prior Government approval." },
              { q: "Which legal structure is best for entry?", a: "Options include Wholly Owned Subsidiary (Private Limited), Joint Venture, Limited Liability Partnership (LLP), Branch Office, or Liaison Office. Wholly owned subsidiaries provide full operational control and PLI scheme eligibility." },
              { q: "Are profits allowed to be repatriated?", a: "Yes. Profits and dividends can be repatriated subject to compliance with FEMA, RBI regulations, applicable corporate withholding taxes, and annual transfer pricing documentation." },
              { q: "Do all businesses require government approvals?", a: "No. Approval requirements depend on the industry, products, manufacturing process, environmental clearances, and foreign shareholding structures. Automatic route sectors require simple post-allotment filings." },
              { q: "Which Indian states are best for manufacturing?", a: "Popular manufacturing destinations include Gujarat, Tamil Nadu, Maharashtra, Karnataka, and Uttar Pradesh. Selection depends on infrastructure, logistics access, local supplier ecosystems, and state-level industrial subsidies." },
              { q: "Are government incentives available?", a: "Yes. The Central and State Governments offer Production Linked Incentive (PLI) schemes, capital subsidies, stamp duty concessions, electricity duty exemptions, and interest subventions based on investment scale." },
              { q: "How important is local sourcing?", a: "Increasingly critical. Local sourcing improves overall cost competitiveness, satisfies domestic value addition (DVA) requirements, and minimizes currency fluctuation risks." },
              { q: "Should we appoint a distributor or establish our own subsidiary?", a: "Distributors are low-risk for preliminary sales. For high-growth, IP-heavy, or manufacturing-centric ventures, setting up a Wholly Owned Subsidiary is highly recommended." },
              { q: "Is it necessary to appoint an Indian partner?", a: "Not mandatory. Many firms operate 100% owned subsidiaries. However, a local partner can accelerate market access, customer relations, and local regulatory navigation." },
              { q: "How should we select an Indian partner?", a: "Partner selection requires deep due diligence covering financial records, technical capacities, compliance history, market reputation, and strategic alignment. Partner mismatches are a primary cause of entry failure." },
              { q: "What are the major compliance requirements?", a: "Major areas include company incorporation, GST registration, corporate income tax, transfer pricing audits, compliance with the Four Labour Codes, DPDP rules compliance, and industry-specific licenses." },
              { q: "Is GST complicated in India?", a: "GST has unified indirect taxes. However, compliance requires systematic digital invoice mapping, electronic invoicing logs, and regular returns to safely claim input tax credits." },
              { q: "Will our company need environmental approvals?", a: "Manufacturing facilities must secure Consents to Establish and Operate from State Pollution Control Boards. Requirements depend on the environmental impact categorization of the process." },
              { q: "How much investment should we budget?", a: "Budgets must cover market research, incorporation, legal advisory, workspace setup, recruitment, and working capital buffers. Maintaining adequate financial reserves prevents implementation delays." },
              { q: "How soon can we expect returns?", a: "India should be viewed as a long-term investment. While some companies achieve operational profitability within 2 to 3 years, building a strong market presence requires patience and sustained execution." },
              { q: "How can Business Clinic support our India entry?", a: "Business Clinic provides modular strategy, regulatory approvals liaison, state site selection support, partner due diligence, and factory project management to minimize operational risk and accelerate launch times." }
            ].map((item, idx) => (
              <div key={idx} className="border border-slate-200 bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFAQIndex(activeFAQIndex === idx ? null : idx)}
                  className="w-full text-left p-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-primary">
                    {item.q}
                  </span>
                  <span className="text-slate-400 font-bold text-xs">{activeFAQIndex === idx ? "—" : "+"}</span>
                </button>
                {activeFAQIndex === idx && (
                  <div className="p-5 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Planning to Establish Your Facility in India?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact Business Clinic to discuss custom entry strategies, regulatory approvals, site selection, or vendor vetting.
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
