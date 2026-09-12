"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  Shield,
  Radio,
  FileCheck,
  Building2,
  CheckCircle2,
  Award,
  Layers,
  Scale,
  Compass,
  Zap,
  ArrowUpRight,
  ShieldAlert,
  Server,
  Radar
} from "lucide-react";

export default function DefenceLicensingRegulatorySupport() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const dilSteps = [
    { step: "01", title: "Product Mapping", desc: "Precise classification under the Defence Items Licensing List (IDR Act / Arms Act) and dual-use dual-spectrum identification." },
    { step: "02", title: "Technical Dossier Preparation", desc: "Compiling comprehensive system schematics, BOM documentation, security protocols, and operational compliance dossiers." },
    { step: "03", title: "DPIIT Application Submission", desc: "Filing through the Department for Promotion of Industry and Internal Trade (DPIIT) single-window portal with statutory attachments." },
    { step: "04", title: "MoD Technical Evaluation", desc: "Rigorous technical assessment by Department of Defence Production (DDP), DRDO, and armed forces technical directorates." },
    { step: "05", title: "Security Vetting (MHA/IB)", desc: "Mandatory intelligence and security vetting by the Ministry of Home Affairs (MHA) and Intelligence Bureau (IB)." },
    { step: "06", title: "Clarifications & Site Visit", desc: "On-ground facility audit, infrastructure inspection, safety vetting, and responding to technical clarifications." },
    { step: "07", title: "License Issuance", desc: "Grant of official Defence Industrial License (DIL) with defined manufacturing scope, capacity, and security covenants." },
  ];

  const wpcApprovals = [
    {
      title: "ETA (Equipment Type Approval)",
      desc: "Mandatory authorization for wireless and RF equipment operating in designated bands, verifying compliance with Indian technical RF regulations."
    },
    {
      title: "SACFA Site Clearance",
      desc: "Standing Advisory Committee on Radio Frequency Allocation (SACFA) clearance ensuring no frequency interference with aviation, defense, and maritime radars."
    },
    {
      title: "Experimental & Manufacturing Test License",
      desc: "Specialized license granted for bench testing, antenna pattern measurements, prototyping, and shop-floor calibration during manufacturing cycles."
    }
  ];

  return (
    <div className="bg-slate-100/70 min-h-screen py-4 sm:py-12 print:bg-white print:py-0 font-sans antialiased text-slate-800">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 print:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0C1D4A] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <article className="bg-white border border-slate-200/80 shadow-md rounded-2xl p-4 sm:p-12 lg:p-16 print:shadow-none print:border-none print:p-0">
          
          {/* Masthead / Header */}
          <header className="border-b border-slate-200 pb-5 sm:pb-8 mb-6 sm:mb-8 text-left">
            <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-[10px] sm:text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700" />
              <span>Capability Note // Defence & Spectrum Advisory</span>
            </div>

            <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#D98A10] mb-1.5 sm:mb-2">
              Capability Note: Licensing & Regulatory Support
            </p>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2 sm:mb-3">
              Defence and RF Manufacturing in India
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-2 sm:gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  By India Business Clinic
                </p>
                <p className="text-slate-500 font-medium">
                  Defence & Aerospace Advisory Division
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>8 min read</span>
                </span>
                <span>•</span>
                <span>Defence & Aerospace</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-6 sm:mb-10 p-3.5 sm:p-5 bg-slate-50 border border-slate-200/90 rounded-xl print:hidden">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5 sm:mb-3">
              Contents
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600">
              <li>
                <a href="#introduction" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Introduction & Strategic Positioning</span>
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Expertise & Professional Background</span>
                </a>
              </li>
              <li>
                <a href="#dil-process" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Licensing Processes: Defence Industrial License</span>
                </a>
              </li>
              <li>
                <a href="#services-offered" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Services Offered (DIL & WPC)</span>
                </a>
              </li>
              <li>
                <a href="#dil-roadmap" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>7-Step Defence Licensing Process</span>
                </a>
              </li>
              <li>
                <a href="#wpc-spectrum-approvals" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>WPC Clearances & Frequency Allocations</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Why India Business Clinic?</span>
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Conclusion: 3 GHz & 10 GHz Radar Compliance</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Section 1: Introduction */}
          <section id="introduction" className="mb-8 sm:mb-10 space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-left sm:text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              Introduction
            </h2>
            <p>
              India Business Clinic is a premier consulting firm specializing in defense licensing and regulatory compliance for high-technology manufacturing in India. Led by retired Indian Army officers from the Corps of Signals, our leadership brings unparalleled, first-hand expertise in frequency management, spectrum planning, and communication system oversight.
            </p>
            <p>
              Our core strength lies in our dual-spectrum expertise. As qualified Electronics & Telecommunication engineers with over 30 years of distinguished experience—including pivotal tenures with premier government organizations like the Defence Research and Development Organisation (DRDO)—we bridge the gap between complex engineering and rigorous regulatory frameworks.
            </p>

            {/* Clearances Highlight Box */}
            <div className="bg-[#0C1D4A] text-white p-6 rounded-2xl space-y-4 my-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                Core Advisory Scope
              </span>
              <p className="text-sm sm:text-base font-semibold leading-snug">
                We provide end-to-end strategic advisory and technical support for organizations securing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white/10 border border-white/15 p-3.5 rounded-xl flex items-start space-x-2.5">
                  <Shield className="w-5 h-5 text-[#D98A10] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">Defense Industrial Licenses</h4>
                    <span className="text-[11px] text-slate-300">DIL via DPIIT & MoD</span>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/15 p-3.5 rounded-xl flex items-start space-x-2.5">
                  <Radio className="w-5 h-5 text-[#D98A10] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">WPC / Wireless Approvals</h4>
                    <span className="text-[11px] text-slate-300">ETA, SACFA & Spectrum Clearances</span>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/15 p-3.5 rounded-xl flex items-start space-x-2.5">
                  <FileCheck className="w-5 h-5 text-[#D98A10] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm">National Clearances</h4>
                    <span className="text-[11px] text-slate-300">Statutory, Security & MHA/IB Norms</span>
                  </div>
                </div>
              </div>
            </div>

            <p>
              With an operational footprint spanning military operations, defense R&D, and high-tech manufacturing ecosystems, India Business Clinic is uniquely positioned to serve as your strategic partner. We offer specialized, mission-critical guidance for organizations establishing manufacturing capabilities for radar antennas in the 3 GHz and 10 GHz bands in India.
            </p>
          </section>

          {/* Section 2: Expertise & Professional Background */}
          <section id="expertise" className="mb-10 space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Expertise & Professional Background
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card A: Defence & Spectrum */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    A
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Defence & Spectrum Management Experience
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Staffed with Officers ex Corps of Signals, Indian Army.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hands-on experience in frequency allocation, band planning, interference mitigation, and secure communication systems.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct involvement in coordinating with defence frequency management bodies and ensuring compliance in operational environments.</span>
                  </li>
                </ul>
              </div>

              {/* Card B: Technical Qualifications */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    B
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Technical Qualifications & Government Service
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Electronics Engineer with strong domain knowledge in RF systems, antennas, communication networks, and EW components.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>30+ years of experience, including service with DRDO and other national technical bodies.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Deep understanding of technology evaluation, security vetting, and compliance norms for defence-grade manufacturing.</span>
                  </li>
                </ul>
              </div>

              {/* Card C: Licensing & Regulatory */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    C
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Licensing & Regulatory Expertise
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Defense Industrial License (DIL) end-to-end support and documentation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>WPC Wireless Approvals including ETA, SACFA, and Import Licenses.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Industrial approvals including Factory License, Fire NOC, Building Plan approvals, EMI/EMC, and BIS certifications.</span>
                  </li>
                </ul>
              </div>

              {/* Card D: Legal Compliances */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    D
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Legal Compliances
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-1">
                  <p className="leading-relaxed">
                    Practicing Advocate with specialized expertise in Company Law, statutory corporate compliances, and contractual obligations of the company—especially tailored for foreign companies entering or scaling in India.
                  </p>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-600">
                    <span className="font-bold text-[#0C1D4A] block mb-1">Foreign OEM Coverage</span>
                    FDI structuring, cross-border technology licensing, offset obligations, and MoD commercial contracting compliance.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Licensing Processes Overview */}
          <section id="dil-process" className="mb-10 space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                Execution Roadmap
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Licensing Processes Overview
              </h2>
            </div>

            {/* DIL 7-Step Breakdown */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D98A10]" />
                <span>A. Defence Industrial License (DIL) Process</span>
              </h3>

              <div className="space-y-3">
                {dilSteps.map((s, idx) => (
                  <div
                    key={s.step}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/80 transition-colors flex items-start space-x-4 shadow-xs"
                  >
                    <span className="font-mono text-sm font-bold text-[#D98A10] bg-amber-50 px-2.5 py-1 rounded-lg shrink-0 border border-amber-200/60 mt-0.5">
                      {s.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-[#0C1D4A]">{s.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WPC Approvals Breakdown */}
            <div id="wpc-approvals" className="space-y-4 pt-6">
              <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A] flex items-center gap-2">
                <Radio className="w-5 h-5 text-[#D98A10]" />
                <span>B. WPC / Spectrum-Related Approvals</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wpcApprovals.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D98A10] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Approval {String.fromCharCode(97 + idx).toUpperCase()}
                      </span>
                      <h4 className="font-bold text-[#0C1D4A] text-sm">{w.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Value Proposition */}
          <section id="value-proposition" className="mb-10 space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Value Proposition
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center space-x-2 text-[#0C1D4A] font-bold text-sm">
                  <Award className="w-4 h-4 text-[#D98A10] shrink-0" />
                  <span>Deep Defense Insight</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Direct background and procedural experience in Army Procurement, military standards, and statutory defence compliances.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center space-x-2 text-[#0C1D4A] font-bold text-sm">
                  <Zap className="w-4 h-4 text-[#D98A10] shrink-0" />
                  <span>Strong Technical Foundation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Deep specialized expertise in electronics, antenna engineering, and RF systems operating in high-frequency regimes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center space-x-2 text-[#0C1D4A] font-bold text-sm">
                  <Layers className="w-4 h-4 text-[#D98A10] shrink-0" />
                  <span>End-to-End Inter-Ministry Coordination</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Seamless coordination across ministries and regulatory bodies including MoD, DPIIT, MHA/IB, WPC, and state departments.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center space-x-2 text-[#0C1D4A] font-bold text-sm">
                  <FileCheck className="w-4 h-4 text-[#D98A10] shrink-0" />
                  <span>Accelerated Processing</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Accelerated licensing timelines achieved through technically precise, verified, and completely compliant documentation.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2 sm:col-span-2">
                <div className="flex items-center space-x-2 text-[#0C1D4A] font-bold text-sm">
                  <Shield className="w-4 h-4 text-[#D98A10] shrink-0" />
                  <span>High Credibility & Defense-Security Protocols</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  Trusted by military authorities, government labs, and industrial primes with thorough adherence to national security safeguards.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Conclusion */}
          <section id="conclusion" className="mb-12 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              Conclusion
            </h2>
            <div className="bg-amber-50/60 border-l-4 border-[#D98A10] p-5 rounded-r-xl space-y-3">
              <p className="font-serif text-[#0C1D4A] text-base sm:text-lg font-bold leading-snug">
                Manufacturing radar antennas in the 3 GHz and 10 GHz bands requires navigation through defence, wireless, and industrial licensing frameworks in India.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                With our combined defence, technical, and regulatory experience, India Business Clinic offers seamless support to ensure full compliance with DIL, WPC, SACFA, and associated statutory requirements.
              </p>
            </div>
          </section>

          {/* Strategic Action CTA Card */}
          <div className="bg-[#0C1D4A] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-5 print:hidden">
            <div className="space-y-2 relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                Defence & Aerospace Practice
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                Establish Your Defence & RF Manufacturing in India
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Connect directly with Col Sanjay Chandra and our retired Corps of Signals & DRDO technical advisors for hands-on guidance across DIL applications, WPC spectrum approvals, and factory establishment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
              <Link
                href="/services/defence-aerospace-clinic"
                className="inline-flex items-center space-x-2 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Explore Defence & Aerospace Clinic</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                <span>Consult Our Defence Advisors</span>
              </Link>
            </div>
          </div>

          {/* Document Footer */}
          <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Capability Note: Licensing & Regulatory Support | Defence & RF Manufacturing</span>
            <span>India Business Clinic Defence Advisory Division</span>
          </footer>
        </article>
      </div>
    </div>
  );
}
