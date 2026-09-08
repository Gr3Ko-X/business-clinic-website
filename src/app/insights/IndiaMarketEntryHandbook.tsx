"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Printer,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ListOrdered,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Globe2,
  Users,
  Compass,
  FileSpreadsheet,
  Download,
  Star
} from "lucide-react";

export default function IndiaMarketEntryHandbook() {
  // Interactive Scorecard State (10 items rated 1-5, initial default 3)
  const scorecardItems = [
    { id: "strategy", label: "Clear India Strategy" },
    { id: "market", label: "Market Assessment" },
    { id: "budget", label: "Budget Approved" },
    { id: "entryModel", label: "Entry Model Selected" },
    { id: "compliance", label: "Compliance Understanding" },
    { id: "localPartner", label: "Local Partner Identified" },
    { id: "risk", label: "Risk Assessment" },
    { id: "leadership", label: "Leadership Commitment" },
    { id: "resources", label: "Resource Availability" },
    { id: "timeline", label: "Timeline Defined" }
  ];

  const [ratings, setRatings] = useState<Record<string, number>>({
    strategy: 3,
    market: 3,
    budget: 3,
    entryModel: 3,
    compliance: 3,
    localPartner: 3,
    risk: 3,
    leadership: 4,
    resources: 3,
    timeline: 3
  });

  const handleRate = (id: string, val: number) => {
    setRatings((prev) => ({ ...prev, [id]: val }));
  };

  const totalScore = Object.values(ratings).reduce((a, b) => a + b, 0);

  const getScoreVerdict = (score: number) => {
    if (score >= 45) {
      return {
        label: "Ready for Market Entry (Score: 45–50)",
        color: "text-emerald-700 bg-emerald-50 border-emerald-300",
        desc: "Your organization demonstrates comprehensive strategic preparation, resource allocation, and regulatory clarity. Proceed with on-ground execution and partner onboarding."
      };
    }
    if (score >= 35) {
      return {
        label: "Almost Ready (Score: 35–44)",
        color: "text-amber-800 bg-amber-50 border-amber-300",
        desc: "Your business has solid foundational awareness but needs focused due diligence in specific areas like partner vetting, state-level incentive mapping, or regulatory compliance."
      };
    }
    return {
      label: "Needs Preparation (Score: Below 35)",
      color: "text-rose-800 bg-rose-50 border-rose-300",
      desc: "Entering the Indian market without addressing foundational strategy, compliance, or local partner selection creates significant operational risk. Commission an India Market Assessment before capital allocation."
    };
  };

  const verdict = getScoreVerdict(totalScore);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-slate-100/70 min-h-screen py-8 sm:py-12 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <article className="bg-white border border-slate-200/80 shadow-md rounded-lg p-6 sm:p-12 lg:p-16 print:shadow-none print:border-none print:p-0 text-slate-800">
          
          {/* Masthead with Exact PDF Cover Image */}
          <header className="border-b border-slate-200 pb-10 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Comprehensive Strategic Handbook</span>
            </div>

            {/* Grid showcasing title and the exact PDF cover graphic */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#D98A10] uppercase tracking-wider block">
                  Business Clinic Advisory • Global Expansion Series
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight">
                  India Market Entry Handbook
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-700">
                  A Practical Guide for Global Companies
                </p>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  Navigate India with Confidence. Minimize Risk. Maximize Opportunity. Build Sustainable Success.
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Published by</span>
                    <strong className="text-slate-900">Business Clinic</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Duration</span>
                    <span>15 min read</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Scope</span>
                    <span>2026 Edition</span>
                  </div>
                </div>
              </div>

              {/* Exact Cover Image from PDF */}
              <div className="md:col-span-5 flex flex-col items-center">
                <a
                  href="/india-market-entry-cover.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full max-w-[280px] rounded-lg overflow-hidden shadow-xl border-2 border-slate-200 group block cursor-pointer"
                  title="Click to view full cover graphic"
                >
                  <Image
                    src="/india-market-entry-cover.jpg"
                    alt="India Market Entry Handbook Cover - Business Clinic"
                    width={560}
                    height={790}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-white text-[11px] font-semibold text-center">
                    Official Executive Cover Page (Click to enlarge)
                  </div>
                </a>
                <a
                  href="/india-market-entry-cover.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] text-slate-500 hover:text-primary mt-2 font-medium"
                >
                  <span>View Full Cover Graphic</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Value Props Bar from Cover */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-slate-100 text-center">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200/80">
                <span className="block text-xs sm:text-sm font-bold text-[#0C1D4A]">~7.7% GDP</span>
                <span className="text-[10px] text-slate-500">Fastest Growth</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200/80">
                <span className="block text-xs sm:text-sm font-bold text-[#0C1D4A]">1.4B+ People</span>
                <span className="text-[10px] text-slate-500">Massive Consumer Base</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200/80">
                <span className="block text-xs sm:text-sm font-bold text-[#0C1D4A]">$81B FDI</span>
                <span className="text-[10px] text-slate-500">Global Capital Inflows</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200/80">
                <span className="block text-xs sm:text-sm font-bold text-[#0C1D4A]">China + 1</span>
                <span className="text-[10px] text-slate-500">Preferred Hub</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200/80 col-span-2 sm:col-span-1">
                <span className="block text-xs sm:text-sm font-bold text-[#0C1D4A]">55% GDP</span>
                <span className="text-[10px] text-slate-500">Services &amp; Tech</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-12 p-6 bg-slate-50 border border-slate-200/90 rounded-lg print:hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
              <ListOrdered className="w-4 h-4 text-[#D98A10]" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
              <a href="#executive-summary" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>1. Executive Summary &amp; Growth Opportunity</span>
              </a>
              <a href="#why-companies-succeed-fail" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2. Why Companies Succeed — or Fail</span>
              </a>
              <a href="#business-clinic-framework" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>3. Business Clinic India Entry Framework™</span>
              </a>
              <a href="#preamble-glance" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>4. Preamble &amp; India at a Glance</span>
              </a>
              <a href="#10-common-mistakes" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>5. 10 Common Mistakes &amp; Best Practices</span>
              </a>
              <a href="#practical-roadmap" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>6. Legal Structures &amp; Entry Model Matrix</span>
              </a>
              <a href="#manufacturing-sector" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>7. Manufacturing Sector Deep Dive</span>
              </a>
              <a href="#comparative-states-table" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>8. Comparative Table: Major Indian States</span>
              </a>
              <a href="#services-sector" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>9. Services Sector &amp; GCC Ecosystem</span>
              </a>
              <a href="#regulatory-clearances" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>10. Regulatory Clearances, Tax &amp; Labour</span>
              </a>
              <a href="#kickstart-timelines" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>11. Step-by-Step Kickstart &amp; ROM Timelines</span>
              </a>
              <a href="#cost-planning-table" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>12. Cost Planning Table (Budget Breakdown)</span>
              </a>
              <a href="#readiness-scorecard" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>13. Interactive Readiness Scorecard</span>
              </a>
              <a href="#faqs" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>14. Frequently Asked Questions (20 FAQs)</span>
              </a>
              <a href="#last-word" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>15. Last Word &amp; Readiness Scorecard</span>
              </a>
            </div>
          </nav>

          {/* Document Body */}
          <div className="space-y-12 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal [&_p]:text-justify [&_p]:[text-justify:inter-word] [&_li]:text-justify">
            
            {/* Section 1: Executive Summary */}
            <section id="executive-summary" className="space-y-4 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Executive Summary
              </h2>
              
              <h3 className="text-lg font-bold text-slate-900 pt-1 text-left">
                India: A Strategic Growth Opportunity
              </h3>
              <p>
                India has emerged as one of the world&apos;s most attractive investment destinations, 
                offering a unique combination of sustained economic growth, a large and 
                expanding consumer market, a highly skilled workforce, competitive 
                manufacturing costs, and a strong government commitment to industrial 
                development. Supported by initiatives such as Make in India, Production Linked 
                Incentive (PLI) Schemes, Digital India, PM Gati Shakti, and significant 
                infrastructure investments, India has become a preferred destination for 
                companies seeking to diversify global supply chains and establish a long-term 
                presence in one of the world&apos;s fastest-growing major economies.
              </p>
              <p>
                However, success in India requires much more than identifying a market 
                opportunity. India&apos;s federal governance structure, diverse business environment, 
                sector-specific regulations, and varying state-level policies demand careful 
                planning and disciplined execution. Companies that approach India with a 
                structured market entry strategy consistently outperform those that rely solely 
                on their global business models.
              </p>
            </section>

            {/* Section 2: Why Companies Succeed or Fail */}
            <section id="why-companies-succeed-fail" className="space-y-4 scroll-mt-8">
              <h3 className="text-lg font-bold text-slate-900 text-left">
                Why Companies Succeed—or Fail—in India
              </h3>
              <p>
                Experience shows that most unsuccessful market entry initiatives can be traced 
                to a few recurring mistakes:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1.5 text-slate-600">
                <li>Entering without a clearly defined India strategy.</li>
                <li>Selecting an inappropriate market entry model.</li>
                <li>Underestimating regulatory and compliance requirements.</li>
                <li>Choosing local partners without adequate due diligence.</li>
                <li>Ignoring regional market differences.</li>
                <li>Failing to localize products, pricing, and business practices.</li>
                <li>Underestimating timelines, investment, and working capital needs.</li>
                <li>Overlooking government incentives and industrial policies.</li>
                <li>Weak local project execution and stakeholder coordination.</li>
                <li>Expecting short-term returns instead of committing to long-term growth.</li>
              </ul>
              <p className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-800 font-medium italic">
                These challenges are entirely manageable when addressed through careful preparation, realistic planning, and experienced local execution support.
              </p>

              <div className="pt-2">
                <h4 className="font-bold text-slate-900 mb-2 text-left">
                  A Practical Roadmap for Market Entry
                </h4>
                <p className="mb-2">This handbook provides a structured, execution-oriented roadmap covering:</p>
                <ul className="list-disc list-outside pl-6 space-y-1 text-slate-600">
                  <li>Evaluation of market opportunities and business feasibility.</li>
                  <li>Selection of the most appropriate entry structure.</li>
                  <li>Foreign Direct Investment (FDI) regulations and compliance.</li>
                  <li>Taxation, corporate governance, labour, and regulatory requirements.</li>
                  <li>Manufacturing and service sector opportunities.</li>
                  <li>Government incentives and industrial policies.</li>
                  <li>Risk assessment and mitigation.</li>
                  <li>Step-by-step implementation guidance from planning through operational launch.</li>
                </ul>
              </div>

              <div className="p-5 sm:p-6 bg-[#0C1D4A]/5 border-l-4 border-[#D98A10] rounded-r-md text-[#0C1D4A] space-y-2 my-4">
                <h4 className="font-bold text-base text-[#0C1D4A] text-left">How Business Clinic Can Help?</h4>
                <p className="text-sm">
                  Business Clinic specializes in assisting foreign companies throughout their India market entry journey by providing execution-oriented advisory and implementation support. Our services include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm pt-2">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>India Market Assessment &amp; Opportunity Analysis</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>India Entry Strategy Development</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Entry Model Evaluation &amp; Business Planning</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Regulatory and Compliance Advisory</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Due Diligence of Indian Partners</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Manufacturing &amp; Factory Setup Support</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Government Approvals &amp; Industrial Facilitation</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D98A10] shrink-0" />
                    <span>Project Management &amp; Implementation</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Business Clinic Framework */}
            <section id="business-clinic-framework" className="space-y-4 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Business Clinic India Entry Framework™
              </h2>
              <p>
                Our objective is not merely to advise but to help clients successfully establish 
                and expand their business operations in India through structured planning, 
                informed decision-making, and disciplined execution. We have a modular 
                structured process to help our clients which follows defined stages of 
                progression:
              </p>

              {/* Visual 6 Stages */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2 text-center">
                {[
                  { step: "1", title: "Assess", sub: "Feasibility & Market" },
                  { step: "2", title: "Strategize", sub: "Entry Roadmapping" },
                  { step: "3", title: "Structure", sub: "Legal & Regulatory" },
                  { step: "4", title: "Establish", sub: "Incorporation & Site" },
                  { step: "5", title: "Execute", sub: "Hiring & Launch" },
                  { step: "6", title: "Scale", sub: "Long-Term Growth" }
                ].map((s) => (
                  <div key={s.step} className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                    <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold mx-auto mb-1.5">
                      {s.step}
                    </div>
                    <strong className="text-xs sm:text-sm text-slate-900 block font-serif">{s.title}</strong>
                    <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">{s.sub}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-slate-900 text-left mb-1">Key Takeaways</h3>
                <p>
                  India offers exceptional long-term growth opportunities—but success 
                  depends on preparation, execution, and local expertise. Companies that invest 
                  time in developing a robust India strategy, understanding the regulatory 
                  landscape, selecting the right partners, and implementing a structured market entry 
                  plan are significantly better positioned to achieve sustainable growth.
                </p>
              </div>
            </section>

            {/* Section 4: Preamble & India at a Glance */}
            <section id="preamble-glance" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Preamble: Who Should Read This Handbook?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-700">
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ CEOs &amp; Managing Directors</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Business Owners &amp; Founders</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ International Expansion Teams</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Foreign Investors &amp; PE Funds</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Global Exporters &amp; Traders</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Manufacturers &amp; OEMs</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Technology &amp; SaaS Companies</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Government Trade Agencies</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">✓ Global Capability Centers</div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-left">India at a Glance</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Population</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">1.4+ Billion</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">GDP Growth</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">~7.7% in FY25-26</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">FDI Inflows</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">$81 Billion</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Talent Pool</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">Largest English-Speaking</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Startups</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">3rd Largest Globally</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Global Sourcing</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">Preferred China+1</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Services</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">55% of National GDP</strong>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-xs">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Manufacturing</span>
                    <strong className="text-base sm:text-lg text-[#0C1D4A]">Fast-Rising Global Hub</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-left">Why India?</h3>
                <p>
                  India is one of the world&apos;s fastest-growing major economies, with GDP growth of 
                  approximately 7.7% in FY 2025–26, making it an attractive destination for foreign companies 
                  seeking long-term growth and expansion. With a population exceeding 1.4 billion, India 
                  offers one of the world&apos;s largest and fastest-growing consumer markets. Beyond domestic 
                  demand, the country provides a strategic manufacturing base supported by a large pool of 
                  skilled engineers, technicians, and cost-competitive labour.
                </p>
                <p>
                  The Government of India has introduced a series of reforms and incentive programs to 
                  encourage foreign investment, promote manufacturing, and improve the overall ease of doing 
                  business. Initiatives such as Make in India, Production Linked Incentive (PLI) Schemes, Digital 
                  India, PM Gati Shakti, and the ongoing modernization of logistics have significantly 
                  strengthened India&apos;s investment ecosystem.
                </p>
              </div>
            </section>

            {/* Section 5: 10 Common Mistakes */}
            <section id="10-common-mistakes" className="space-y-6 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  10 Common Mistakes Foreign Companies Make When Entering India
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Foreign companies often succeed in India when they adapt their global strategies to local realities. Below are the 10 most common errors and proven best practices to avoid them.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    mistake: "Entering Without a Clear India Strategy",
                    desc: "Many companies view India as a single market and underestimate its complexity. They enter without defining target customers, market segments, pricing strategy, or long-term objectives.",
                    best: "Conduct a comprehensive India Market Assessment and develop a phased market entry strategy."
                  },
                  {
                    num: "2",
                    mistake: "Choosing the Wrong Entry Model",
                    desc: "Selecting an inappropriate business structure—such as a liaison office, branch office, wholly owned subsidiary, joint venture, distributor, or agent—can create legal, tax, and operational challenges.",
                    best: "Select the entry model based on business objectives, investment plans, regulatory requirements, and risk appetite."
                  },
                  {
                    num: "3",
                    mistake: "Underestimating Regulatory and Compliance Requirements",
                    desc: "India has a comprehensive regulatory framework covering company incorporation, taxation, labour laws, environmental approvals, import regulations, industry-specific licenses, and foreign investment.",
                    best: "Prepare a compliance roadmap before commencing operations."
                  },
                  {
                    num: "4",
                    mistake: "Selecting the Wrong Local Partner",
                    desc: "Many foreign companies appoint distributors, agents, or joint venture partners without adequate due diligence, resulting in conflicts, poor market coverage, or reputational damage.",
                    best: "Conduct commercial, financial, legal, and reputational due diligence before appointing any partner."
                  },
                  {
                    num: "5",
                    mistake: "Ignoring India's Regional Diversity",
                    desc: "Consumer preferences, language, culture, infrastructure, labour availability, taxation incentives, and state regulations vary significantly across India.",
                    best: "Evaluate different states and cities before selecting your manufacturing location or market focus."
                  },
                  {
                    num: "6",
                    mistake: "Assuming Global Products Will Succeed Without Localization",
                    desc: "Products, pricing, packaging, marketing messages, and after-sales support often require adaptation to Indian customer expectations and competitive conditions.",
                    best: "Localize products and services based on customer feedback and market research."
                  },
                  {
                    num: "7",
                    mistake: "Underestimating Time, Cost, and Working Capital Requirements",
                    desc: "Business establishment frequently takes longer than expected due to approvals, site development, recruitment, vendor development, and customer qualification.",
                    best: "Build realistic timelines and maintain adequate financial reserves."
                  },
                  {
                    num: "8",
                    mistake: "Neglecting Government Incentives and Industrial Policies",
                    desc: "Many companies fail to leverage central and state incentives, tax benefits, Production Linked Incentive (PLI) schemes, export promotion programs, and industrial corridor opportunities.",
                    best: "Evaluate available incentives before selecting the investment location."
                  },
                  {
                    num: "9",
                    mistake: "Weak Execution and Local Project Management",
                    desc: "Even with a sound strategy, projects often fail because there is insufficient local coordination across consultants, contractors, regulators, suppliers, and government agencies.",
                    best: "Appoint an experienced local project management and execution partner to coordinate implementation and resolve issues proactively."
                  },
                  {
                    num: "10",
                    mistake: "Treating India as a Short-Term Opportunity",
                    desc: "India rewards companies that invest in long-term relationships, local talent, customer support, supplier development, and brand building. Companies expecting immediate returns often become discouraged and exit prematurely.",
                    best: "Adopt a long-term investment perspective with clearly defined milestones and measurable performance indicators."
                  }
                ].map((item) => (
                  <div key={item.num} className="p-4 bg-slate-50 border border-slate-200/90 rounded-lg space-y-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2 text-left">
                      <span className="w-5 h-5 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {item.num}
                      </span>
                      <span>{item.mistake}</span>
                    </h3>
                    <p className="text-sm text-slate-600 pl-7">{item.desc}</p>
                    <div className="ml-7 p-2.5 bg-amber-50/80 border-l-3 border-[#D98A10] rounded-r text-xs text-slate-800">
                      <strong className="text-amber-900">Best Practice: </strong>
                      {item.best}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation Callout */}
              <div className="p-5 sm:p-6 bg-[#0C1D4A] text-white rounded-lg space-y-2 text-justify [text-justify:inter-word]">
                <h3 className="font-serif font-bold text-lg text-amber-400 text-left">Core Recommendation</h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Partner with an experienced local advisor to kick-start your India entry journey. Plan for a 
                  minimum of six months to achieve meaningful progress and measurable results. Establish a 
                  dedicated India Entry budget and invest in quality professional support rather than the 
                  lowest-cost option. In India, the right expertise can save far more in time, money, and 
                  missed opportunities than it costs.
                </p>
              </div>
            </section>

            {/* Section 6: Practical Roadmap */}
            <section id="practical-roadmap" className="space-y-6 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  Practical Roadmap: Understanding &amp; Implementation
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Key structural, legal, and regulatory considerations when setting up operations in India.
                </p>
              </div>

              {/* 1. Legal Structures & Mapping Table */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 text-left">
                  1. Legal Structures &amp; Entry Decision Matrix
                </h3>
                <p className="text-sm">Foreign companies can enter India through:</p>
                <ul className="list-disc list-outside pl-6 space-y-1 text-sm text-slate-600">
                  <li><strong>Private Limited Company (PLC):</strong> Most popular; allows full commercial operations, subsidiary formation, and PLI incentives.</li>
                  <li><strong>Limited Liability Partnership (LLP):</strong> Hybrid model; lower statutory compliance burden.</li>
                  <li><strong>Branch Office:</strong> Requires RBI approval; limited to permitted activities.</li>
                  <li><strong>Liaison Office:</strong> For coordination and testing only; no commercial revenue generation permitted.</li>
                </ul>

                {/* Entry Model Table */}
                <div className="overflow-x-auto my-3 border border-slate-200 rounded-lg">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-[#0C1D4A] text-white">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Strategic Objective</th>
                        <th className="py-2.5 px-4 font-semibold">Recommended Entry Model</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-medium">Sales &amp; Distribution only</td>
                        <td className="py-2.5 px-4 font-bold text-[#D98A10]">Appoint Exclusive/Regional Distributor</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-medium">Full Manufacturing &amp; Scale</td>
                        <td className="py-2.5 px-4 font-bold text-[#D98A10]">Wholly Owned Subsidiary (PLC)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-medium">Technology Transfer &amp; Local Co-production</td>
                        <td className="py-2.5 px-4 font-bold text-[#D98A10]">Joint Venture (JV)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-medium">Initial Market Feasibility &amp; Testing</td>
                        <td className="py-2.5 px-4 font-bold text-[#D98A10]">Liaison Office</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-medium">Service Support &amp; Regional Operations</td>
                        <td className="py-2.5 px-4 font-bold text-[#D98A10]">Branch Office</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. FDI Regulations */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 text-left">
                  2. Foreign Direct Investment (FDI) Regulations
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-1 text-sm text-slate-600">
                  <li><strong>Automatic Route:</strong> 100% FDI allowed in most sectors (manufacturing, IT/software, e-commerce marketplace, services) without prior government approval.</li>
                  <li><strong>Approval Route:</strong> Sensitive sectors (defense, telecom, media, satellite) require central government clearance.</li>
                  <li><strong>FDI Inflows:</strong> India attracted $81B in FY 2024–25, reflecting continued global investor confidence.</li>
                </ul>
              </div>

              {/* 3. Taxation & Compliance */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 text-left">
                  3. Taxation &amp; Compliance
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-1 text-sm text-slate-600">
                  <li><strong>Corporate Tax Rate:</strong> 22% baseline for domestic corporate entities; 15% concessional rate for qualified new manufacturing establishments.</li>
                  <li><strong>Transfer Pricing:</strong> Strict rules for cross-border transactions between parent firms and Indian subsidiaries.</li>
                  <li><strong>Goods &amp; Services Tax (GST):</strong> Unified indirect tax system; electronic invoicing and input tax credit tracking.</li>
                  <li><strong>Beneficial Ownership Disclosure:</strong> Mandatory disclosure requirements under MCA and RBI guidelines.</li>
                </ul>
              </div>

              {/* 4. Governance & Banking */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 text-left">
                  4. Governance, Labour, &amp; Capital Infusion
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-1 text-sm text-slate-600">
                  <li><strong>Resident Director:</strong> Every incorporated Indian company must have at least one resident board director.</li>
                  <li><strong>FEMA Compliance:</strong> Capital infusion must comply with Foreign Exchange Management Act guidelines and FC-GPR filing within 30 days.</li>
                  <li><strong>Repatriation of Profits:</strong> Dividends and profits are repatriable subject to statutory taxes and RBI reporting.</li>
                  <li><strong>Unified Four Labour Codes:</strong> Codified compliance across safety, minimum wages, industrial relations, and social security.</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Manufacturing Sector Deep Dive */}
            <section id="manufacturing-sector" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Manufacturing Sector Deep Dive
              </h2>
              <p>
                Entering India’s manufacturing sector in 2026 is a high-potential move, but success depends on 
                aligning with government incentives, sector strengths, and navigating compliance. India isn’t 
                competing purely on low-cost labour like ASEAN — instead, it leverages scale, domestic demand, and 
                policy-driven incentives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                  <strong className="text-sm text-[#0C1D4A] block mb-1">Priority Sectors</strong>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                    <li><strong>Electronics &amp; Semiconductors:</strong> Driven by PLI schemes, mobile assembly, and new fab investments (Micron, Tata).</li>
                    <li><strong>Automotive &amp; EVs:</strong> 3rd largest global auto market; rising demand for batteries and power electronics.</li>
                    <li><strong>Pharma &amp; Biotech:</strong> World&apos;s pharmacy; strong generics, biosimilars, and API manufacturing.</li>
                    <li><strong>Defense &amp; Aerospace:</strong> Strategic sector with rising domestic procurement targets and FDI allowances.</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                  <strong className="text-sm text-[#0C1D4A] block mb-1">Government Incentives</strong>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                    <li><strong>PLI Schemes:</strong> Direct financial subsidies linked to incremental output across 14 priority industrial sectors.</li>
                    <li><strong>Industrial Corridors:</strong> High-speed logistics along Delhi-Mumbai, Chennai-Bengaluru, and Gujarat hubs.</li>
                    <li><strong>State-Level Subsidies:</strong> Capital subsidies, power tariff rebates, stamp duty exemptions, and plug-and-play parks.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-2">
                <h4 className="font-bold text-sm text-slate-900 text-left">Action Checklist for 2026 Manufacturing Entry:</h4>
                <ol className="list-decimal list-outside pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>Identify priority sector (electronics, EVs, pharma, aerospace).</li>
                  <li>Choose entry structure (subsidiary, JV, contract manufacturing).</li>
                  <li>Apply for PLI incentives and state-level industrial subsidies.</li>
                  <li>Secure land and infrastructure in industrial parks or corridors.</li>
                  <li>Build local partnerships for tier-2 supply chain integration.</li>
                  <li>Ensure compliance readiness (tax, labour, environmental clearances).</li>
                  <li>Engage an experienced local advisor who takes responsibility for execution and implementation.</li>
                </ol>
              </div>
            </section>

            {/* Section 8: Comparative Table of Major States */}
            <section id="comparative-states-table" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  Comparative Table: Major States in India
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Strategic industrial matrix comparing key destination states across manufacturing sectors, ease of business, and incentive regimes.
                </p>
              </div>

              {/* Table with Star Ratings exact from PDF */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-[#0C1D4A] text-white">
                    <tr>
                      <th className="py-3 px-3 font-semibold">State</th>
                      <th className="py-3 px-2 font-semibold">Manufacturing</th>
                      <th className="py-3 px-2 font-semibold">Electronics</th>
                      <th className="py-3 px-2 font-semibold">Automotive</th>
                      <th className="py-3 px-2 font-semibold">Aerospace</th>
                      <th className="py-3 px-2 font-semibold">Ease of Business</th>
                      <th className="py-3 px-2 font-semibold">Incentives</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Gujarat</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Tamil Nadu</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Karnataka</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Maharashtra</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                      <td className="py-2.5 px-2 font-semibold text-amber-700">Moderate</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Uttar Pradesh</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★</td>
                      <td className="py-2.5 px-2 text-amber-600">★★★</td>
                      <td className="py-2.5 px-2 font-semibold text-blue-700">Improving</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Services Sector Deep Dive */}
            <section id="services-sector" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Services Sector &amp; GCC Ecosystem
              </h2>
              <p>
                India’s service sector in 2026 is the backbone of its economy, contributing nearly 55% of GDP and 
                employing millions across IT, financial services, consulting, and logistics. For foreign entrants, the 
                opportunity lies in leveraging India’s talent pool, digital infrastructure, and policy support while 
                navigating regulatory and cultural nuances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-xs font-bold text-[#0C1D4A] uppercase block mb-1">Global Capability Centers (GCCs)</strong>
                  <p className="text-xs text-slate-600">Over 1,900 GCCs operate in India, expanding rapidly into AI, fintech, cyber-defense, and engineering R&amp;D.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-xs font-bold text-[#0C1D4A] uppercase block mb-1">Fintech &amp; Digital Payments</strong>
                  <p className="text-xs text-slate-600">Digital payments market projected to reach $1.3T by 2030, anchored by UPI and robust RBI oversight.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-xs font-bold text-[#0C1D4A] uppercase block mb-1">IT &amp; ITES Outsourcing</strong>
                  <p className="text-xs text-slate-600">World&apos;s primary software development and digital integration capital centered in Bengaluru, Hyderabad, and Pune.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-xs font-bold text-[#0C1D4A] uppercase block mb-1">E-commerce Logistics &amp; HealthTech</strong>
                  <p className="text-xs text-slate-600">India&apos;s e-commerce logistics expanding toward $200B by 2030 alongside surge in telemedicine and clinical diagnostics.</p>
                </div>
              </div>
            </section>

            {/* Section 10: Regulatory Clearances */}
            <section id="regulatory-clearances" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Regulatory Clearances, Corporate Taxes &amp; Data Compliance
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                  <strong className="text-sm text-slate-900 block mb-1">SWAGAT-FI Framework &amp; FDI Paths</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Utilize the unified digital single-window gateway for investor clearance. Automatic route investments must complete mandatory reporting via the FC-GPR form to the Reserve Bank of India (RBI) within 30 days of share allotment.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                  <strong className="text-sm text-slate-900 block mb-1">GST 2.0 &amp; Arm&apos;s-Length Transfer Pricing</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Register across states under GST with full e-invoicing compliance to ensure input tax credits. Cross-border contracts and management service fees with the global parent must adhere strictly to transfer pricing arm&apos;s-length documentation.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                  <strong className="text-sm text-slate-900 block mb-1">Data Privacy (DPDP Act 2023) &amp; Labour Codes</strong>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Structure IT infrastructure around Digital Personal Data Protection mandates, ensuring explicit consent and local storage where prescribed. Restructure employment contracts to conform to the Four Labour Codes covering safety, wages, and social security.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Step-by-Step Kickstart Guide & Timelines */}
            <section id="kickstart-timelines" className="space-y-6 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  Step-by-Step Kickstart Guide &amp; ROM Timelines
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Structured progression roadmap with indicative milestone schedules.
                </p>
              </div>

              {/* 6-Month ROM Timeline */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-4 text-left">
                  ROM Timelines with Monthly Milestones
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                  <div className="bg-white p-3 rounded border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-[#D98A10] uppercase">Month 1</span>
                    <strong className="block text-slate-900 mt-1 font-serif">Strategy</strong>
                    <span className="text-[10px] text-slate-500">Goals &amp; Model</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-[#D98A10] uppercase">Month 2</span>
                    <strong className="block text-slate-900 mt-1 font-serif">Partner Search</strong>
                    <span className="text-[10px] text-slate-500">Due Diligence</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-[#D98A10] uppercase">Month 3</span>
                    <strong className="block text-slate-900 mt-1 font-serif">Incorporation</strong>
                    <span className="text-[10px] text-slate-500">Legal Entity</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-[#D98A10] uppercase">Month 4</span>
                    <strong className="block text-slate-900 mt-1 font-serif">Registrations</strong>
                    <span className="text-[10px] text-slate-500">GST, PAN, Banking</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-[#D98A10] uppercase">Month 5</span>
                    <strong className="block text-slate-900 mt-1 font-serif">Hiring</strong>
                    <span className="text-[10px] text-slate-500">Key Talent</span>
                  </div>
                  <div className="bg-amber-50 p-3 rounded border border-amber-300 shadow-xs">
                    <span className="text-[10px] font-bold text-amber-800 uppercase">Month 6</span>
                    <strong className="block text-amber-950 mt-1 font-serif">Operations</strong>
                    <span className="text-[10px] text-amber-700">Commercial Launch</span>
                  </div>
                </div>
              </div>

              {/* Indicative Durations Table */}
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-slate-900 text-left">Indicative Activity Durations</h3>
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-100 text-slate-800 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Activity</th>
                        <th className="py-2.5 px-4 font-semibold">Typical Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr>
                        <td className="py-2 px-4 font-medium">Market Assessment</td>
                        <td className="py-2 px-4 font-mono text-[#0C1D4A]">3–6 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Partner Search &amp; Due Diligence</td>
                        <td className="py-2 px-4 font-mono text-[#0C1D4A]">4–8 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Company Incorporation</td>
                        <td className="py-2 px-4 font-mono text-[#0C1D4A]">2–4 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Factory Setup &amp; Site Commissioning</td>
                        <td className="py-2 px-4 font-mono text-[#0C1D4A]">3–12 months</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Recruitment &amp; Staffing</td>
                        <td className="py-2 px-4 font-mono text-[#0C1D4A]">8–12 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 12: Cost Planning Table */}
            <section id="cost-planning-table" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  Cost Planning Table (ROM Budget Estimates)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Rough Order of Magnitude (ROM) cost model for 2026 entry. Type of industry, size of setup, and on-ground scale will calibrate actual expenditure.
                </p>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-[#0C1D4A] text-white">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Budget Item</th>
                      <th className="py-2.5 px-4 font-semibold">Indicative Budget (USD)</th>
                      <th className="py-2.5 px-4 font-semibold">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Market Study &amp; Feasibility</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$4,000</td>
                      <td className="py-2.5 px-4 text-slate-500">One Time</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Legal Incorporation &amp; Structuring</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$3,000</td>
                      <td className="py-2.5 px-4 text-slate-500">One Time</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Office Setup &amp; Ingress</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$5,000</td>
                      <td className="py-2.5 px-4 text-slate-500">One Time</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Recruitment &amp; Core Executive Hiring</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$10,000</td>
                      <td className="py-2.5 px-4 text-slate-500">One Time</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Annual Compliance, CA &amp; Legal Retainer</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$10,000</td>
                      <td className="py-2.5 px-4 text-slate-500">Annual</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Working Capital Reserve</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$100,000</td>
                      <td className="py-2.5 px-4 text-slate-500">Annual</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium">Marketing &amp; Business Development</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">$100,000</td>
                      <td className="py-2.5 px-4 text-slate-500">Annual</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r text-xs text-amber-900 space-y-1">
                <strong>Important Cost Advisory Notes:</strong>
                <p>
                  One-time costs will need follow-up expenses which have been factored under Working Capital. Costs given above are calibrated for 2026. For subsequent years, an annual escalation of 6% to 8% should be budgeted under normal conditions.
                </p>
                <p className="font-semibold text-amber-950 pt-1">
                  Caution: If you come across figures quoted at large variance from above, it should raise a red flag. Lesser quotes are often far more dangerous than higher ones.
                </p>
              </div>
            </section>

            {/* Section 13: Interactive Readiness Scorecard */}
            <section id="readiness-scorecard" className="space-y-6 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  India Entry Readiness Scorecard (Self-Assessment Tool)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Rate your organization&apos;s current readiness across the 10 foundational entry pillars (1 = Low / Unprepared, 5 = High / Completely Prepared).
                </p>
              </div>

              {/* Interactive Tool Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-8 space-y-6 shadow-sm">
                
                {/* Score Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white border border-slate-200 rounded-lg gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400">Calculated Readiness Score</span>
                    <div className="text-3xl font-serif font-bold text-[#0C1D4A]">
                      {totalScore} <span className="text-base font-normal text-slate-500">/ 50</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-md border text-xs sm:text-sm font-semibold ${verdict.color}`}>
                    {verdict.label}
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic bg-white/60 p-3 rounded border border-slate-200">
                  {verdict.desc}
                </p>

                {/* Scorecard Questions Grid */}
                <div className="space-y-3 pt-2">
                  {scorecardItems.map((item, idx) => {
                    const currentVal = ratings[item.id] || 3;
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-white border border-slate-200 rounded-lg gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-slate-400 w-5">{idx + 1}.</span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">{item.label}</span>
                        </div>

                        {/* 1-5 Button Selector */}
                        <div className="flex items-center space-x-1.5 self-end sm:self-center">
                          {[1, 2, 3, 4, 5].map((val) => {
                            const isSelected = currentVal === val;
                            return (
                              <button
                                key={val}
                                onClick={() => handleRate(item.id, val)}
                                className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                                  isSelected
                                    ? "bg-[#0C1D4A] text-white shadow-xs scale-105"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                                title={`Rate ${val}/5`}
                              >
                                {val}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2">
                  <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
                    <strong>45–50 Points:</strong> Ready for execution
                  </div>
                  <div className="p-2.5 bg-amber-50 text-amber-800 border border-amber-200 rounded">
                    <strong>35–44 Points:</strong> Almost Ready (Needs specific focus)
                  </div>
                  <div className="p-2.5 bg-rose-50 text-rose-800 border border-rose-200 rounded">
                    <strong>Below 35 Points:</strong> Needs Foundational Preparation
                  </div>
                </div>
              </div>
            </section>

            {/* Section 14: FAQs */}
            <section id="faqs" className="space-y-6 pt-4 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] text-left">
                  Frequently Asked Questions (20 Core FAQs)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Practical answers to the most common legal, operational, and commercial questions raised by international executives entering India.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {[
                  {
                    cat: "General Questions",
                    q: "1. Why should our company consider India?",
                    a: "India offers one of the world's largest consumer markets, a rapidly growing economy (~7.7% GDP), a skilled workforce, competitive manufacturing costs, and strong government support for industrial development. It has also become a preferred destination for companies implementing a 'China Plus One' supply chain strategy."
                  },
                  {
                    cat: "General Questions",
                    q: "2. Is India suitable only for large multinational companies?",
                    a: "No. India offers opportunities for businesses of all sizes. Many SMEs and mid-sized enterprises have successfully entered the Indian market through distributors, joint ventures, contract manufacturing, or wholly owned subsidiaries. The appropriate entry model depends on your objectives, investment capacity, and long-term strategy."
                  },
                  {
                    cat: "General Questions",
                    q: "3. How long does it typically take to establish operations in India?",
                    a: "The timeline varies depending on the business model and industry. A typical market entry project—from strategy development to commencing operations—takes between six and twelve months. Regulated industries (such as defense, aerospace, pharmaceuticals, and telecom) may require additional time due to licensing and technical approvals."
                  },
                  {
                    cat: "General Questions",
                    q: "4. Should we establish manufacturing immediately?",
                    a: "Not necessarily. Many companies begin by exporting, appointing distributors, or utilizing contract manufacturing before investing in their own greenfield or brownfield facilities. The decision should be based on market demand, investment appetite, and long-term business objectives."
                  },
                  {
                    cat: "Legal and Regulatory",
                    q: "5. Can a foreign company own 100% of an Indian company?",
                    a: "Yes. In most commercial and manufacturing sectors, 100% Foreign Direct Investment (FDI) is permitted under the Automatic Route without requiring prior government approval. Certain sensitive sectors (such as defense, multi-brand retail, or media) require approval or have sectoral investment caps."
                  },
                  {
                    cat: "Legal and Regulatory",
                    q: "6. Which legal structure is best?",
                    a: "There is no universal answer. Common options include Wholly Owned Subsidiary (PLC), Joint Venture (JV), Limited Liability Partnership (LLP), Branch Office, and Liaison Office. The optimal structure depends on your commercial objectives, taxation, regulatory requirements, and risk profile."
                  },
                  {
                    cat: "Legal and Regulatory",
                    q: "7. Are profits allowed to be repatriated?",
                    a: "Yes. Profits, royalties, and dividends can generally be freely repatriated subject to compliance with FEMA (Foreign Exchange Management Act), RBI regulations, applicable withholding taxes, and annual statutory filings."
                  },
                  {
                    cat: "Legal and Regulatory",
                    q: "8. Do all businesses require government approvals?",
                    a: "No. Approval requirements depend on the industry, product line, manufacturing process, environmental classification, and regulatory jurisdiction. Many service, trading, and non-sensitive manufacturing operations require relatively standard statutory registrations rather than discretionary government approvals."
                  },
                  {
                    cat: "Manufacturing",
                    q: "9. Which Indian states are best for manufacturing?",
                    a: "The answer depends on your industry. Popular manufacturing destinations include Gujarat (petrochemicals, auto, ports), Tamil Nadu (auto, electronics, aerospace), Maharashtra (engineering, auto, pharma), Karnataka (aerospace, electronics, defense R&D), and Uttar Pradesh (logistics, electronics, defense corridors)."
                  },
                  {
                    cat: "Manufacturing",
                    q: "10. Are government incentives available?",
                    a: "Yes. Both the Central Government and State Governments offer extensive incentives including Production Linked Incentive (PLI) schemes, capital subsidies, stamp duty exemptions, electricity duty concessions, interest subsidies, and land subsidies."
                  },
                  {
                    cat: "Manufacturing",
                    q: "11. How important is local sourcing?",
                    a: "Increasingly important. Local sourcing improves cost competitiveness, fulfills customer lead-time expectations, supports Public Procurement ('Make in India') local value addition criteria, and hedges against cross-border supply disruptions."
                  },
                  {
                    cat: "Market Entry Strategy",
                    q: "12. Should we appoint a distributor or establish our own subsidiary?",
                    a: "The decision depends on market size, capital commitment, product complexity, after-sales requirements, and regulatory considerations. Many companies begin with an exclusive or regional distributor to validate demand before transitioning to a wholly owned subsidiary."
                  },
                  {
                    cat: "Market Entry Strategy",
                    q: "13. Is it necessary to appoint an Indian partner?",
                    a: "Not mandatory. Foreign companies can operate 100% owned subsidiaries in most industries. However, a vetted local partner can accelerate regulatory navigation, distributor network access, and market penetration."
                  },
                  {
                    cat: "Market Entry Strategy",
                    q: "14. How should we select an Indian partner?",
                    a: "Partner selection should involve exhaustive due diligence covering financial solvency, technical capability, market reputation, customer references, compliance track record, and strategic culture alignment. Partner mismatch is a leading cause of market entry failure."
                  },
                  {
                    cat: "Compliance",
                    q: "15. What are the major compliance requirements?",
                    a: "Typical statutory areas include company incorporation (MCA/ROC), GST registration, corporate income tax and advance tax, transfer pricing audits, labour codes and social security (PF/ESI), pollution control (CPCB/SPCB), and annual filings."
                  },
                  {
                    cat: "Compliance",
                    q: "16. Is GST complicated?",
                    a: "GST has unified India's previously fragmented indirect tax regime into a single nationwide structure. While it simplifies inter-state trade, businesses must establish computerized accounting and timely monthly/annual filing workflows to claim input tax credits."
                  },
                  {
                    cat: "Compliance",
                    q: "17. Will our company need environmental approvals?",
                    a: "Manufacturing operations categorized under Orange or Red industrial categories require Consent to Establish (CTE) and Consent to Operate (CTO) from the State Pollution Control Board. Software, non-polluting assembly, and service offices generally require minimal or green clearances."
                  },
                  {
                    cat: "Financial Planning",
                    q: "18. How much investment should we budget?",
                    a: "Budget requirements depend on operational scale. Companies should account for market research ($4k), entity incorporation ($3k), office setup ($5k), hiring ($10k), ongoing compliance ($10k/year), and adequate working capital reserves ($100k+/year)."
                  },
                  {
                    cat: "Financial Planning",
                    q: "19. How soon can we expect returns?",
                    a: "India should be approached as a long-term investment. While some companies reach cash-flow breakeven within 18 to 24 months, sustained profitability typically materializes in years 2 to 3 through repeat orders and localized scale."
                  },
                  {
                    cat: "Working with Business Clinic",
                    q: "20. How can Business Clinic support our India entry?",
                    a: "Business Clinic provides end-to-end execution advisory: market feasibility, entry model selection, state location scouting, partner due diligence, factory setup, regulatory clearances, and ongoing project management. We take on-ground ownership of results, saving clients time and minimizing investment risk."
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between transition-colors gap-3"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-[#D98A10] uppercase tracking-wider block">
                            {faq.cat}
                          </span>
                          <span className="text-sm sm:text-base font-semibold text-slate-900">
                            {faq.q}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 text-justify [text-justify:inter-word]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 15: Last Word & Readiness Scorecard */}
            <section id="last-word" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100 text-left">
                Last Word
              </h2>
              <p>
                India represents one of the world&apos;s most significant long-term growth opportunities. Companies that 
                invest in careful planning, understand India&apos;s regulatory landscape, build trusted local partnerships, 
                and execute with patience are far more likely to achieve sustainable success. While entering India 
                presents challenges, these can be substantially reduced through structured preparation and 
                experienced local execution support.
              </p>

              {/* Readiness Scorecard CTA Card */}
              <div className="mt-8 p-6 sm:p-8 bg-[#0C1D4A] text-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    Turn Market Opportunity into Long-Term Reality
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    India Entry Readiness Scorecard
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    Evaluate your enterprise across 9 critical operational, statutory, and manufacturing readiness pillars before entering the Indian market.
                  </p>
                </div>

                <Link
                  href="/services/india-entry-support-foreign-industry/scorecard"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider shadow-md shrink-0"
                >
                  <span>Launch Scorecard</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

          </div>
        </article>

      </div>
    </div>
  );
}
