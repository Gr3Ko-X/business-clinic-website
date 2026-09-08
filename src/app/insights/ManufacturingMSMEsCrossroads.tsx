"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Cpu,
  ShieldAlert,
  Layers,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Building2,
  Activity,
  ArrowUpRight
} from "lucide-react";

export default function ManufacturingMSMEsCrossroads() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

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
              <span>Executive Briefing & Strategic Advisory</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              MANUFACTURING MSMEs AT A CROSSROADS
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#D98A10] tracking-normal mb-2">
              Why Delaying Digital Transformation Could Become a Competitive Risk
            </p>
            <p className="text-xs sm:text-sm text-slate-500 italic mb-4">
              An article on the emerging disruption in MSME manufacturing
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  By Sanjay Chandra
                </p>
                <p className="text-slate-500 font-medium">
                  Business Clinic
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>12 min read</span>
                </span>
                <span>•</span>
                <span>MSME Manufacturing & Disruption</span>
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
                <a href="#environment-changing" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Introduction: The Manufacturing Environment</span>
                </a>
              </li>
              <li>
                <a href="#gradual-disruption" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Disruption Will Not Arrive as a Single Event</span>
                </a>
              </li>
              <li>
                <a href="#technology-race" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>The Technology Race Is Already Underway</span>
                </a>
              </li>
              <li>
                <a href="#where-disruption-hits" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Where Could the Disruption Hit an MSME?</span>
                </a>
              </li>
              <li>
                <a href="#waiting-danger" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>The Greatest Danger: Waiting for the &apos;Right Time&apos;</span>
                </a>
              </li>
              <li>
                <a href="#phased-approach" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>A Practical Phased Approach for MSMEs</span>
                </a>
              </li>
              <li>
                <a href="#msme-advantage" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>The MSME Advantage & Subtle Warning</span>
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Conclusion: Start before you have to</span>
                </a>
              </li>
              <li>
                <a href="#selected-references" className="hover:text-[#0C1D4A] hover:underline flex items-center space-x-1.5">
                  <span className="text-[#D98A10] font-mono font-bold">•</span>
                  <span>Selected References</span>
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
                Manufacturing MSMEs are entering a period in which digital transformation, automation, data analytics and artificial intelligence are increasingly influencing productivity, cost, quality, delivery and customer expectations. The disruption is unlikely to arrive as one dramatic event. More likely, it will emerge through a gradual widening of the gap between digitally enabled manufacturers and those that continue to rely predominantly on manual, fragmented and reactive processes.
              </p>
              <p>
                For MSMEs, the answer is not to undertake an expensive, all-at-once transformation. A more practical approach is to begin immediately and progress in phases: understand the business, stabilise processes, digitise information, automate suitable activities, and then introduce advanced analytics and AI where there is a clear business case. The objective is not technology for its own sake, but measurable gains in productivity, quality, responsiveness, resilience and competitiveness.
              </p>
              <p className="font-semibold text-[#0C1D4A]">
                The warning is therefore subtle but important: postponing the journey may itself become a business risk. The companies that begin learning and implementing today are likely to be better positioned to respond when customers, competitors and supply chains raise the technology and performance bar.
              </p>
            </div>
          </section>

          {/* Section: Introduction */}
          <section id="environment-changing" className="mb-10 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              Introduction: The Manufacturing Environment Is Changing
            </h2>
            <p>
              For many MSME manufacturers, digital transformation still sounds like something designed for large corporations—with expensive automation, sophisticated software, artificial intelligence and highly specialised technology teams. That perception is increasingly becoming a risk.
            </p>
            <p>
              Manufacturing is entering a period in which technology adoption is moving from being simply a competitive advantage towards becoming an important condition for remaining competitive. Artificial intelligence, automation, connected machines, digital production systems, predictive maintenance, data analytics and digitally integrated supply chains are changing how products are designed, manufactured, delivered and supported.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 font-medium text-center sm:text-left">
              The question for an MSME is therefore no longer simply, <span className="italic font-serif text-[#0C1D4A]">&apos;Can we afford to adopt these technologies?&apos;</span> It is increasingly, <span className="italic font-serif text-[#0C1D4A]">&apos;Can we afford to remain dependent on yesterday&apos;s methods while our customers, competitors and supply chains move ahead?&apos;</span>
            </div>
          </section>

          {/* Section: The Disruption Will Probably Not Arrive as a Single Event */}
          <section id="gradual-disruption" className="mb-10 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              The Disruption Will Probably Not Arrive as a Single Event
            </h2>
            <p>
              The biggest misconception is that technological disruption will suddenly appear in the form of a fully automated factory replacing today&apos;s manufacturing operation. For most MSMEs, the disruption is more likely to happen gradually—and therefore be much harder to recognise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-[#0C1D4A] block mb-1">Pricing & Margins</span>
                A competitor may begin producing at a lower cost.
              </div>
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-[#0C1D4A] block mb-1">Traceability</span>
                A customer may start demanding real-time production visibility.
              </div>
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-[#0C1D4A] block mb-1">OEM Compliance</span>
                A large OEM may require digital quality records.
              </div>
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-[#0C1D4A] block mb-1">Lead Time & Planning</span>
                A new competitor may offer shorter delivery times because its production planning is data-driven.
              </div>
            </div>

            <p className="pt-2">
              A skilled operator may prefer working for a digitally enabled organisation.
            </p>
            <p>
              Individually, these developments may appear manageable. Collectively, they can change the competitive position of a manufacturing business. By the time the impact becomes obvious in declining orders or shrinking margins, catching up may be considerably more difficult.
            </p>
          </section>

          {/* Section: The Technology Race Is Already Underway */}
          <section id="technology-race" className="mb-10 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              The Technology Race Is Already Underway
            </h2>
            <p>
              The direction of travel is becoming increasingly clear. The{" "}
              <a
                href="https://es.weforum.org/publications/transforming-small-businesses-an-ai-playbook-for-india-s-msmes/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0C1D4A] underline decoration-[#D98A10] hover:text-[#D98A10] transition-colors inline-flex items-center gap-1"
              >
                <span>World Economic Forum&apos;s 2025 AI Playbook for India&apos;s MSMEs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D98A10]" />
              </a>{" "}
              describes AI as a potential source of productivity enhancement, cost efficiency and wider economic value, while emphasising the need for practical, phased implementation.
            </p>
            <p>
              A{" "}
              <a
                href="https://www.weforum.org/stories/artificial-intelligence/from-playbook-to-pilot-why-india-s-msmes-are-ready-for-their-edge-ai-moment/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0C1D4A] underline decoration-[#D98A10] hover:text-[#D98A10] transition-colors inline-flex items-center gap-1"
              >
                <span>2026 World Economic Forum article on India&apos;s MSMEs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D98A10]" />
              </a>{" "}
              highlights the opportunity for AI to improve quality, machine maintenance, compliance management and energy efficiency, while noting that execution and adoption at scale remain important constraints.
            </p>
          </section>

          {/* Section: Where Could the Disruption Hit an MSME? */}
          <section id="where-disruption-hits" className="mb-10 space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Where Could the Disruption Hit an MSME?
              </h2>
            </div>

            <div className="space-y-5">
              {/* Point 1 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">1</span>
                  Cost Competitiveness Could Gradually Erode
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  A traditional manufacturing operation may remain profitable today because its customers accept its current pricing. But what happens when another manufacturer can produce the same component with lower material wastage, better machine utilisation, less downtime, lower rejection rates, better production planning and faster decision-making? The difference may initially be only a few percentage points. In a margin-sensitive manufacturing business, that seemingly small productivity advantage can become a significant competitive advantage over time. The danger is not necessarily that your costs suddenly become unacceptable. It is that someone else&apos;s costs become substantially better.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">2</span>
                  Customers May Raise the Bar Without Warning
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  Customers increasingly expect faster communication, greater traceability and more predictable delivery. Depending on the supply chain, expectations may include digital quotations, order tracking, production visibility, digital quality documentation, shorter lead times, consistent quality data and integration with customer systems. For MSMEs supplying larger companies and OEMs, supplier capability will increasingly include digital capability.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">3</span>
                  Manual Processes Will Become Increasingly Expensive
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  Production information may exist in notebooks, inventory may be maintained through spreadsheets, machine maintenance may occur after breakdowns, and production planning may depend heavily on one experienced person. None of these practices is necessarily wrong in isolation. They become a problem when the volume and speed of information exceed the ability of people to manage it effectively. Technology can reduce dependency on repetitive manual work and allow people to focus on judgement, experience and problem-solving.
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">4</span>
                  The Knowledge Gap Could Become a Serious Vulnerability
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  Many MSMEs depend heavily on experienced individuals who know how machines behave, which suppliers can deliver urgently, how to identify quality problems and which customers are likely to place orders. Digital systems can help convert some of this experience into data, processes and institutional knowledge. Without such systems, a business can remain dependent on individuals rather than processes. That dependency becomes particularly risky when the business needs to scale or key people leave.
                </p>
              </div>

              {/* Point 5 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">5</span>
                  The Workforce Itself Will Need to Change
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  The future factory is unlikely to be a factory without people. It is more likely to be a factory where people work with increasingly capable machines and digital systems. Operators may need to understand HMIs and production data; maintenance personnel may interpret predictive-maintenance information; quality teams may use automated inspection; and supervisors may manage through dashboards. Upskilling therefore becomes a strategic requirement rather than merely an HR initiative.
                </p>
              </div>

              {/* Point 6 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">6</span>
                  Supply-Chain Integration May Become a Competitive Filter
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  Manufacturing is no longer an isolated activity. An MSME may supply a Tier-1 company that supplies an OEM serving an international market. Information therefore needs to move across the supply chain. A digitally mature customer may increasingly prefer suppliers capable of sharing information quickly, accurately and securely. A competitor may not take your customer because its product is better; it may take the customer because its business is easier to integrate with.
                </p>
              </div>

              {/* Point 7 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <h3 className="font-bold text-[#0C1D4A] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#0C1D4A] text-white text-xs font-mono flex items-center justify-center shrink-0">7</span>
                  Cybersecurity Will Become Part of Manufacturing Risk
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify pl-8">
                  As machines, computers, production systems, cloud platforms and supply-chain networks become connected, cybersecurity becomes increasingly relevant. The question is no longer simply whether an office computer can be compromised, but what happens to production if connected systems are disrupted. Cybersecurity therefore needs to be considered alongside traditional industrial risks such as machine failure, fire, power interruption and supply disruption.
                </p>
              </div>
            </div>
          </section>

          {/* Section: The Greatest Danger & The Answer */}
          <section id="waiting-danger" className="mb-10 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              The Greatest Danger: Waiting for the &apos;Right Time&apos;
            </h2>
            <p>
              Many MSMEs postpone technology adoption while waiting for more money, more employees, more customers, better technology, a larger factory, a government scheme or the &apos;right&apos; consultant. Caution is sensible, especially because technology adoption without a clear business case can waste scarce resources. But there is a significant difference between being cautious and being inactive.
            </p>
            <p className="font-semibold text-[#0C1D4A]">
              A business does not need to transform everything at once. It needs to start.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0C1D4A] mb-2">
                The Answer Is Not &apos;Digitalise Everything&apos;
              </h3>
              <p>
                MSMEs do not need to transform their entire factory overnight. They do not necessarily need expensive robots or sophisticated AI platforms. They need a structured roadmap that links technology to measurable business problems.
              </p>
            </div>
          </section>

          {/* Section: A Practical Phased Approach for MSMEs */}
          <section id="phased-approach" className="mb-10 space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                A Practical Phased Approach for MSMEs
              </h2>
            </div>

            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    Phase 1
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Diagnosis</span>
                </div>
                <h3 className="text-base font-bold text-[#0C1D4A]">Understand</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Map the business and identify where time, money, materials and information are being lost. Examine productivity, quality, downtime, inventory, energy, manpower utilisation, maintenance, order processing, procurement and customer service.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    Phase 2
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Foundation</span>
                </div>
                <h3 className="text-base font-bold text-[#0C1D4A]">Stabilise</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Standardise the basics before introducing sophisticated technology. Establish standard operating procedures, clean up data, define KPIs, improve workplace organisation, strengthen preventive maintenance and standardise quality processes.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    Phase 3
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Data Capture</span>
                </div>
                <h3 className="text-base font-bold text-[#0C1D4A]">Digitise</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Begin capturing information electronically through appropriate tools for production planning, inventory, quality, maintenance, procurement, sales and finance. The objective is not to become &apos;digital&apos; but to make better decisions using reliable information.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    Phase 4
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Execution</span>
                </div>
                <h3 className="text-base font-bold text-[#0C1D4A]">Automate</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Once processes and data are stable, identify repetitive activities where automation makes economic sense. Possibilities include machine automation, material handling, automated inspection, barcode/RFID systems, digital workflows and automated reporting.
                </p>
              </div>

              {/* Phase 5 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D98A10]">
                    Phase 5
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Intelligence</span>
                </div>
                <h3 className="text-base font-bold text-[#0C1D4A]">Optimise with AI and Analytics</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  After reliable data becomes available, explore predictive maintenance, demand forecasting, production optimisation, AI-assisted quality inspection, intelligent scheduling, energy optimisation, AI-assisted procurement and management dashboards.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Start Small & MSME Advantage */}
          <section id="msme-advantage" className="mb-10 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
                Start Small—but Start Now
              </h2>
              <p>
                The objective is not to become a &apos;smart factory&apos; next year. The objective is to ensure that your factory remains competitive over the next five years. Start with one process. Measure current performance. Identify the problem. Introduce an appropriate digital or automation solution. Measure the improvement. Learn. Then move to the next process.
              </p>
              <p>
                This creates a cycle of continuous transformation rather than one massive, expensive technology project.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0C1D4A]">
                The MSME Advantage
              </h3>
              <p>
                There is a positive side to this story. MSMEs can sometimes move faster than large corporations. They have fewer layers of decision-making, owners are often directly involved in operations, and changes can be tested quickly. That agility can become a powerful advantage—if it is used.
              </p>
              <p>
                The{" "}
                <a
                  href="https://www.weforum.org/stories/2025/01/manufacturing-workforce-of-the-future/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0C1D4A] underline decoration-[#D98A10] hover:text-[#D98A10] transition-colors inline-flex items-center gap-1"
                >
                  <span>World Economic Forum</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D98A10]" />
                </a>{" "}
                has emphasised that successful manufacturing transformation is not simply about buying technology. It requires connecting technology with operational value and equipping frontline workers to use it effectively.
              </p>
            </div>

            {/* Warning Checklist Card */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-4">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#0C1D4A] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#B4442E]" />
                <span>The Warning Is Subtle—but Real</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                The coming disruption may not look like a competitor suddenly opening a completely automated factory next door. It may look like a series of small disadvantages accumulating over several years:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-800 pl-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their quotation arrives faster.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their rejection rate is lower.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their machine utilisation is higher.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their delivery is more predictable.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their customer receives better information.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their employees use better tools.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4442E]" />
                  <span>Their costs gradually decline.</span>
                </li>
              </ul>

              <p className="text-xs sm:text-sm italic text-[#0C1D4A] pt-2 border-t border-amber-200 font-serif">
                One day, a customer may ask: &apos;Why should we continue buying from you?&apos; That is the point at which technology adoption has stopped being an improvement programme and become a survival issue.
              </p>
            </div>
          </section>

          {/* Section: Conclusion */}
          <section id="conclusion" className="mb-10 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
              Conclusion: Don&apos;t Wait for Disruption to Force the Decision
            </h2>
            <p>
              The manufacturing MSME sector is entering a period of structural change. Digitalisation, automation, data analytics and AI are not going to affect every company in exactly the same way or at the same speed. But the competitive environment is changing, and postponing the journey indefinitely is becoming increasingly difficult to justify.
            </p>
            <p>
              The good news is that MSMEs do not need to transform everything today. They need to begin preparing today. A disciplined, phased approach—Assess, Prioritise, Pilot, Implement, Improve and Scale—can make the transition practical, affordable and aligned with business priorities.
            </p>
            <p>
              The biggest disruption may not be caused by technology itself. It may be caused by the growing gap between manufacturers who adopt it and those who postpone it.
            </p>

            <div className="py-6 text-center">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#0C1D4A] tracking-tight">
                Start before you have to.
              </span>
            </div>
          </section>

          {/* Section: Selected References */}
          <section id="selected-references" className="mb-12 pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0C1D4A]">
                Selected References
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">Official WEF Sources</span>
            </div>

            <div className="space-y-3">
              {/* Reference 1 */}
              <a
                href="https://es.weforum.org/publications/transforming-small-businesses-an-ai-playbook-for-india-s-msmes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#D98A10] hover:shadow-xs transition-all flex items-start justify-between group block cursor-pointer"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase bg-slate-200/70 px-2 py-0.5 rounded">
                      WEF 2025
                    </span>
                    <span className="text-xs text-slate-500">Briefing Paper</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors leading-snug">
                    Transforming Small Businesses: An AI Playbook for India&apos;s MSMEs
                  </h4>
                  <p className="text-xs text-slate-500">
                    World Economic Forum (2025)
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10] shrink-0 mt-1 transition-colors" />
              </a>

              {/* Reference 2 */}
              <a
                href="https://www.weforum.org/stories/artificial-intelligence/from-playbook-to-pilot-why-india-s-msmes-are-ready-for-their-edge-ai-moment/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#D98A10] hover:shadow-xs transition-all flex items-start justify-between group block cursor-pointer"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase bg-slate-200/70 px-2 py-0.5 rounded">
                      WEF 2026
                    </span>
                    <span className="text-xs text-slate-500">Agenda Story</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors leading-snug">
                    How edge AI can unlock productivity for India&apos;s MSMEs
                  </h4>
                  <p className="text-xs text-slate-500">
                    World Economic Forum (2026)
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10] shrink-0 mt-1 transition-colors" />
              </a>

              {/* Reference 3 */}
              <a
                href="https://www.weforum.org/stories/2025/01/manufacturing-workforce-of-the-future/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#D98A10] hover:shadow-xs transition-all flex items-start justify-between group block cursor-pointer"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase bg-slate-200/70 px-2 py-0.5 rounded">
                      WEF 2025
                    </span>
                    <span className="text-xs text-slate-500">Davos Annual Meeting Article</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors leading-snug">
                    How do we build and secure the manufacturing workforce of the future?
                  </h4>
                  <p className="text-xs text-slate-500">
                    World Economic Forum (2025)
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10] shrink-0 mt-1 transition-colors" />
              </a>

              {/* Reference 4 */}
              <a
                href="https://www.weforum.org/stories/2025/01/181d73cd-4fd9-4c8a-b023-5e76f25c824b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#D98A10] hover:shadow-xs transition-all flex items-start justify-between group block cursor-pointer"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase bg-slate-200/70 px-2 py-0.5 rounded">
                      WEF 2025
                    </span>
                    <span className="text-xs text-slate-500">Strategic Transformation Article</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors leading-snug">
                    A new systematic approach for future-proofing manufacturing
                  </h4>
                  <p className="text-xs text-slate-500">
                    World Economic Forum (2025)
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10] shrink-0 mt-1 transition-colors" />
              </a>
            </div>
          </section>

          {/* Action CTA Box */}
          <div className="bg-[#0C1D4A] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-5 print:hidden">
            <div className="space-y-2 relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                Practical On-Ground Execution
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                Benchmark Your MSME&apos;s Operational Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Don&apos;t let operational friction, hidden machine downtime, or margin erosion compound. Assess your enterprise across 10 operational pillars with Business Clinic&apos;s MSME Health Check.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
              <Link
                href="/services/indian-msme-troubleshooting/health-check"
                className="inline-flex items-center space-x-2 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Launch MSME Health Check</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                <span>Consult Our Advisory Team</span>
              </Link>
            </div>
          </div>

          {/* Document Footer */}
          <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Manufacturing MSMEs at a Crossroads | By Sanjay Chandra</span>
            <span>Business Clinic Research & Advisory</span>
          </footer>
        </article>
      </div>
    </div>
  );
}
