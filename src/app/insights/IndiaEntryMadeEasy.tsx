"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Layers,
  Landmark,
  FileCheck,
  Scale,
  Users,
  ShieldCheck,
  Calendar,
  Phone,
  MessageSquare,
  ArrowDown,
  Compass,
  ArrowRight
} from "lucide-react";

export default function IndiaEntryMadeEasy() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const flowchartModules = [
    { num: "Module 1", title: "Pre-Entry Strategy & Feasibility", rom: "ROM: 3–6 Weeks" },
    { num: "Module 2", title: "Entity Structuring & Selection", rom: "ROM: 1–2 Weeks" },
    { num: "Module 3", title: "Legal Incorporation & Regulatory Approvals", rom: "ROM: 3–5 Weeks" },
    { num: "Module 4", title: "Tax, Banking & Financial Setup", rom: "ROM: 2–3 Weeks" },
    { num: "Module 5", title: "Operational Readiness & HR Compliance", rom: "ROM: 4–6 Weeks" },
    { num: "Module 6", title: "Sustained Governance & Compliance", rom: "Ongoing Cycle" },
  ];

  const entityOptions = [
    {
      title: "Wholly Owned Subsidiary (WOS)",
      desc: "Best for complete ownership, equity fundraising, and long-term commercial operations.",
      badge: "Full Autonomy",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Joint Venture (JV)",
      desc: "Optimal when partnering with a local entity to leverage established distribution networks.",
      badge: "Partnership Model",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      title: "Liaison Office (LO)",
      desc: "For market research and promotional operations only. Cannot generate local revenue.",
      badge: "Rep Office Only",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200"
    },
    {
      title: "Branch / Project Office (BO/PO)",
      desc: "Suitable for parent companies executing specific project contracts or export/import tasks.",
      badge: "Project Based",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
    }
  ];

  const matrixRows = [
    { phase: "Module 1", focus: "Feasibility & FDI Strategy", timeline: "3–6 Weeks", prerequisite: "None (Standalone)" },
    { phase: "Module 2", focus: "Entity Selection", timeline: "1–2 Weeks", prerequisite: "Module 1 (Recommended)" },
    { phase: "Module 3", focus: "Legal Incorporation", timeline: "3–5 Weeks", prerequisite: "Module 2 (Required)" },
    { phase: "Module 4", focus: "Tax & Banking Setup", timeline: "2–3 Weeks", prerequisite: "Module 3 (Required)" },
    { phase: "Module 5", focus: "Operational Readiness", timeline: "4–6 Weeks", prerequisite: "Module 3 (Required)" },
    { phase: "Module 6", focus: "Sustained Governance", timeline: "Ongoing", prerequisite: "Modules 4 & 5 (Required)" },
  ];

  return (
    <div className="bg-slate-100/70 min-h-screen py-8 sm:py-12 print:bg-white print:py-0 font-sans antialiased text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0C1D4A] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <article className="bg-white border border-slate-200/80 shadow-md rounded-2xl p-6 sm:p-12 lg:p-16 print:shadow-none print:border-none print:p-0">
          
          {/* Masthead / Header */}
          <header className="border-b border-slate-200 pb-8 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Foreign Enterprise Setup Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              INDIA ENTRY MADE EASY
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#D98A10] tracking-normal mb-4">
              A Sequential & Modular Roadmap for Foreign Companies
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  Prepared by Sanjay Chandra
                </p>
                <p className="text-slate-500 font-medium">
                  Business Clinic
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10 min read</span>
                </span>
                <span>•</span>
                <span>India Market Entry</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-10 p-5 bg-slate-50 border border-slate-200/90 rounded-xl print:hidden">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3">
              Contents
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600">
              <li>
                <a href="#executive-summary" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Executive Summary</span>
                </a>
              </li>
              <li>
                <a href="#process-flowchart" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>High-Level Entry Process Flowchart</span>
                </a>
              </li>
              <li>
                <a href="#module-1" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 1: Strategy & Feasibility</span>
                </a>
              </li>
              <li>
                <a href="#module-2" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 2: Entity Selection</span>
                </a>
              </li>
              <li>
                <a href="#module-3" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 3: Legal Incorporation</span>
                </a>
              </li>
              <li>
                <a href="#module-4" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 4: Tax & Banking Setup</span>
                </a>
              </li>
              <li>
                <a href="#module-5" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 5: Operational Readiness & HR</span>
                </a>
              </li>
              <li>
                <a href="#module-6" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Module 6: Sustained Governance</span>
                </a>
              </li>
              <li>
                <a href="#dependency-matrix" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Summary & Dependency Matrix</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Section: Executive Summary */}
          <section id="executive-summary" className="mb-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              Executive Summary
            </h2>
            <div className="bg-amber-50/50 border-l-4 border-[#D98A10] p-4 sm:p-5 rounded-r-xl space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
              <p>
                India represents one of the world&apos;s most dynamic and rapidly growing markets. This guide outlines the end-to-end framework required for a foreign enterprise to establish a compliant, scalable, and sustainable business presence in India. This manual is structured modularly, allowing companies to execute specific modules independently based on their market readiness stage.
              </p>
            </div>
          </section>

          {/* Section: High-Level Entry Process Flowchart */}
          <section id="process-flowchart" className="mb-12 space-y-4">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                Process Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                High-Level Entry Process Flowchart
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {flowchartModules.map((m, idx) => (
                <React.Fragment key={m.num}>
                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/80 transition-all flex items-center justify-between shadow-xs">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#D98A10] uppercase block">
                          {m.num}
                        </span>
                        <h4 className="font-bold text-sm text-[#0C1D4A]">{m.title}</h4>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0">
                      {m.rom}
                    </span>
                  </div>

                  {idx < flowchartModules.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown className="w-4 h-4 text-[#D98A10]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Section: Modular Step-by-Step Execution Plan */}
          <section className="mb-12 space-y-8">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                Step-by-Step Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Modular Step-by-Step Execution Plan
              </h2>
            </div>

            {/* MODULE 1 */}
            <div id="module-1" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 1
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Strategic Planning & Market Feasibility
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Standalone Execution Capable
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Validate product-market fit & verify FDI sector rules.
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: 3 – 6 Weeks
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Market Evaluation:</strong> Assess target segment demand, pricing strategy, and local competitor channels.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">FDI Policy Review:</strong> Determine if your sector qualifies for the <em>Automatic Route</em> (no prior government permission) or the <em>Approval Route</em> (requires ministry sign-off).
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Location Analysis:</strong> Identify ideal regions or Special Economic Zones (SEZs) based on tax advantages, logistics, and state-level incentives.
                  </div>
                </li>
              </ul>
            </div>

            {/* MODULE 2 */}
            <div id="module-2" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 2
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Corporate Structuring & Entity Selection
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Standalone Execution Capable
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Choose the legal entity structure that balances operational autonomy and liability.
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: 1 – 2 Weeks
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {entityOptions.map((e) => (
                  <div key={e.title} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs sm:text-sm text-[#0C1D4A]">{e.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${e.badgeColor}`}>
                        {e.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MODULE 3 */}
            <div id="module-3" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 3
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Legal Incorporation & Regulatory Approvals
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Requires Module 2 Inputs
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Incorporate the legal entity with the Ministry of Corporate Affairs (MCA).
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: 3 – 5 Weeks
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Digital Credentials:</strong> Secure Digital Signature Certificates (DSC) & Director Identification Numbers (DIN).
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Name Approval:</strong> Reserve proposed corporate name via MCA RUN/SPICe+ portal.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Incorporation Filing:</strong> Submit Memorandum of Association (MoA) & Articles of Association (AoA) along with apostilled foreign parent documents.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">FEMA Compliance:</strong> File Form FC-GPR with the Reserve Bank of India (RBI) via the Single Master Form (SMF) within 30 days of share allotment.
                  </div>
                </li>
              </ul>
            </div>

            {/* MODULE 4 */}
            <div id="module-4" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 4
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Tax, Banking & Financial Infrastructure
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Requires Module 3 Completion
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Setup corporate banking infrastructure, tax registrations, and trade licenses.
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: 2 – 3 Weeks
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Tax Accounts (PAN & TAN):</strong> Automatically generated alongside incorporation.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Bank Account Opening:</strong> Establish an account with an Authorized Dealer (AD Category-1) bank to receive inward foreign remittances.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">GST Registration:</strong> Register for Goods & Services Tax for intra/interstate trade.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Import Export Code (IEC):</strong> Secure registration with DGFT if involved in cross-border trade.
                  </div>
                </li>
              </ul>
            </div>

            {/* MODULE 5 */}
            <div id="module-5" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 5
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Operational Readiness & Labor Compliance
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Parallel with Module 4
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Establish physical infrastructure and comply with Indian labor policies.
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: 4 – 6 Weeks
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Office Premises:</strong> Conclude commercial lease agreement and secure State Shops & Establishments registration.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Social Security Setup:</strong> Register with Employees&apos; Provident Fund Organisation (EPFO) and ESIC.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">HR Policies & Contracts:</strong> Draft local employment contracts, employee handbooks, non-disclosure agreements (NDAs), and local leave protocols.
                  </div>
                </li>
              </ul>
            </div>

            {/* MODULE 6 */}
            <div id="module-6" className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    MODULE 6
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C1D4A]">
                    Ongoing Governance & Sustainable Compliance
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  Annual Operational Cycle
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl gap-2">
                <span className="font-semibold text-slate-900">
                  Objective: Maintain good standing with statutory bodies and optimize tax efficiency.
                </span>
                <span className="font-mono font-bold text-[#D98A10]">
                  ROM Timeline: Ongoing Periodic Compliance
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Transfer Pricing (TP):</strong> Maintain arm&apos;s-length documentation for inter-company cross-border transactions.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Annual Statutory Returns:</strong> File annual financial returns (AOC-4, MGT-7) and conduct mandatory Board & AGM meetings.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900">FLA Return:</strong> Submit Foreign Assets and Liabilities return to the RBI by July 15 annually.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Module Summary & Dependency Matrix */}
          <section id="dependency-matrix" className="mb-12 space-y-4">
            <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                  Execution Planning
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                  Module Summary & Dependency Matrix
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3 sm:p-4">Module Phase</th>
                    <th className="p-3 sm:p-4">Focus Area</th>
                    <th className="p-3 sm:p-4 font-mono">Estimated Timeline</th>
                    <th className="p-3 sm:p-4">Prerequisite / Dependency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {matrixRows.map((r, idx) => (
                    <tr key={r.phase} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-4 font-mono font-bold text-[#0C1D4A]">
                        {r.phase}
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-800">
                        {r.focus}
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-[#D98A10] font-semibold">
                        {r.timeline}
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        {r.prerequisite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Strategic Contact Callout Box */}
          <div className="bg-[#0C1D4A] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-6">
            <div className="space-y-3 relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                On-Ground Execution Advisory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                Ready to Establish Your Business in India?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Navigating cross-border legalities and regulatory approvals requires experienced on-the-ground support. For seamless, modular, or turnkey assistance with your India market expansion, connect with our specialist advisors.
              </p>
            </div>

            {/* Direct Contact Details Card */}
            <div className="bg-white/10 border border-white/15 rounded-xl p-5 relative z-10 max-w-md space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                Contact IndiaBusinessClinic
              </span>
              <div className="text-xs sm:text-sm space-y-1">
                <p className="text-white font-semibold">
                  Point of Contact (POC): Sanjay Chandra
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D98A10]" />
                  <span>Mobile / WhatsApp: <a href="tel:+919560714343" className="text-white hover:text-[#D98A10] font-mono transition-colors">+91 9560714343</a></span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
              <Link
                href="/services/india-entry-support-foreign-industry/scorecard"
                className="inline-flex items-center space-x-2 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Assess India Entry Readiness</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                <span>Schedule An Executive Dialogue</span>
              </Link>
            </div>
          </div>

          {/* Document Footer */}
          <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>India Entry Made Easy • Strategic Guide for Foreign Enterprise Setup</span>
            <span>Authored by Sanjay Chandra | Business Clinic</span>
          </footer>
        </article>
      </div>
    </div>
  );
}
