"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  ListOrdered,
  Truck,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Layers,
  TrendingUp,
  Activity,
  Calendar,
  PhoneCall,
  Mail,
  ArrowUpRight,
  Gauge,
  Factory,
  Wrench,
  Workflow,
  ClipboardCheck,
  AlertOctagon,
  Boxes,
  RotateCcw,
  Target,
  BarChart3
} from "lucide-react";

export default function WhyMSMEsFailToDeliver() {
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
              <span>Manufacturing Diagnostic &amp; Operations Advisory</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              WHY MSMEs FAIL TO DELIVER
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#D98A10] tracking-normal mb-2">
              An Analytical Review of Capacity Bottlenecks, Quality Leakage &amp; Supply Chain Friction in Indian Manufacturing MSMEs
            </p>
            <p className="text-xs sm:text-sm text-slate-500 italic mb-4">
              A root-cause operational diagnostic for shop-floor owners, plant heads, and Tier-1/OEM vendor development managers
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  By Sanjay Chandra
                </p>
                <p className="text-slate-500 font-medium">
                  Business Clinic &amp; Delhi Digitech
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10 min read</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>July 2026</span>
                </span>
                <span>•</span>
                <span>MSME Growth &amp; Operations</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-10 p-5 bg-slate-50 border border-slate-200/90 rounded-xl print:hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-3">
              <ListOrdered className="w-4 h-4 text-[#D98A10]" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              <a href="#executive-summary" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>1. Executive Summary &amp; The OTIF Paradox</span>
              </a>
              <a href="#key-operational-bottlenecks" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2. The 5 Core Operational Bottlenecks</span>
              </a>
              <a href="#bottleneck-1-flow" className="text-slate-500 hover:text-[#D98A10] transition-colors py-0.5 pl-4 flex items-center space-x-1.5 text-xs">
                <span>↳ 2.1 Inefficient Shop-Floor Flow &amp; WIP Clutter</span>
              </a>
              <a href="#bottleneck-2-quality" className="text-slate-500 hover:text-[#D98A10] transition-colors py-0.5 pl-4 flex items-center space-x-1.5 text-xs">
                <span>↳ 2.2 Quality Control Gaps &amp; Scrap Spirals</span>
              </a>
              <a href="#bottleneck-3-supply-chain" className="text-slate-500 hover:text-[#D98A10] transition-colors py-0.5 pl-4 flex items-center space-x-1.5 text-xs">
                <span>↳ 2.3 Supply Chain Instability &amp; Single Sourcing</span>
              </a>
              <a href="#bottleneck-4-maintenance" className="text-slate-500 hover:text-[#D98A10] transition-colors py-0.5 pl-4 flex items-center space-x-1.5 text-xs">
                <span>↳ 2.4 Reactive Breakdown Maintenance</span>
              </a>
              <a href="#bottleneck-5-capacity" className="text-slate-500 hover:text-[#D98A10] transition-colors py-0.5 pl-4 flex items-center space-x-1.5 text-xs">
                <span>↳ 2.5 Capacity Inflexibility &amp; Tribal Planning</span>
              </a>
              <a href="#anatomy-of-failure" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>3. Anatomy of a Delivery Failure: Cascade Matrix</span>
              </a>
              <a href="#operational-remedy" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>4. The 5-Pillar Operational Remedy Framework</span>
              </a>
              <a href="#diagnostic-matrix" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>5. Self-Audit Diagnostic: Delivery Health Check</span>
              </a>
              <a href="#consultation-cta" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>6. Industrial Advisory &amp; Action Plan</span>
              </a>
            </div>
          </nav>

          {/* Section 1: Executive Summary & The OTIF Paradox */}
          <section id="executive-summary" className="mb-12 scroll-mt-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
              <span>Section 01</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] mb-4">
              Executive Summary &amp; The OTIF Paradox
            </h2>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                In today&apos;s hyper-synchronized industrial ecosystem, global OEMs and Tier-1 aerospace, defence, and automotive primes do not evaluate suppliers solely on piece price. The primary determinant of long-term contract renewal is <strong>On-Time In-Full (OTIF) delivery</strong>. Tier-1 integrators operating lean, just-in-time (JIT) assembly lines cannot afford a missing ₹200 bracket to stall a ₹50-crore final vehicle integration.
              </p>
              <p>
                Yet across India&apos;s precision manufacturing MSME clusters—from Peenya and Ambattur to Pune and Faridabad—delivery slippage remains an endemic, chronic disease. Despite possessing exceptional engineering craftsmanship, advanced CNC machinery, and deep entrepreneurial drive, the average Indian manufacturing MSME operates at an <strong>effective OTIF rate between 55% and 72%</strong>.
              </p>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-8">
              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#0C1D4A]">65%</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  Typical MSME OTIF Rate
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Global OEM target is ≥ 98%</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-amber-700">70%+</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  WIP Queuing Time
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Parts wait instead of processing</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-rose-700">3.5x</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  Cost of End Rework
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">vs inline detection at source</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#D98A10]">72%</p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                  Unplanned Stoppages
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Caused by run-to-break mindset</p>
              </div>
            </div>

            <div className="p-5 bg-amber-50/70 border-l-4 border-[#D98A10] rounded-r-xl text-slate-700 text-sm">
              <strong className="text-[#0C1D4A] block mb-1">The Critical Diagnostic Insight:</strong>
              Delivery failure is almost never a failure of intent or lack of effort. Shop-floor teams work double shifts, operators run machines during weekends, and promoters spend entire days firefighting dispatches. Delivery failure is an <em>architectural flaw</em>—a cascade of friction across shop-floor layout, inline quality control, upstream supply chain instability, reactive maintenance, and unmapped capacity loading.
            </div>
          </section>

          {/* Section 2: The 5 Core Operational Bottlenecks */}
          <section id="key-operational-bottlenecks" className="mb-12 scroll-mt-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
              <span>Section 02</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] mb-4">
              The 5 Core Operational Bottlenecks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              When a small or medium enterprise fails to meet its shipment schedule, promoters often blame external factors like delayed payments, absenteeism, or logistics delays. However, a granular operational audit reveals 5 persistent internal failure modes:
            </p>

            {/* Bottleneck 1 */}
            <div id="bottleneck-1-flow" className="p-6 bg-slate-50/70 border border-slate-200 rounded-xl mb-6 scroll-mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A]">
                    Inefficient Shop-Floor Flow &amp; WIP Clutter
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-100 text-rose-800">
                  Throughput Choke
                </span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p>
                  In most unoptimized MSME workshops, machinery has been installed organically over years wherever empty floor space was available. The consequence is a <strong>&quot;spaghetti layout&quot;</strong>: raw material enters at one corner, moves 50 meters to a cutting station, backtracks 40 meters to rough milling, gets carted to deburring, and returns to a CNC machine adjacent to the first saw.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-lg">
                    <p className="text-xs font-bold text-rose-900 mb-1 flex items-center space-x-1.5">
                      <AlertOctagon className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>The Shop-Floor Symptom</span>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A component with an actual machining cycle of 18 minutes spends 14 days inside the plant. Massive pallets of semi-finished Work-in-Progress (WIP) clutter aisles, blocking crane movements and creating confusion over which batch belongs to which purchase order.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-lg">
                    <p className="text-xs font-bold text-emerald-900 mb-1 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>The Operational Impact</span>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Inventory carrying costs surge, cash gets locked in unfinished iron and brass, and whenever an urgent OEM delivery is due, supervisors waste hours physically searching for pallets buried behind other jobs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottleneck 2 */}
            <div id="bottleneck-2-quality" className="p-6 bg-slate-50/70 border border-slate-200 rounded-xl mb-6 scroll-mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A]">
                    Quality Control Gaps &amp; The Post-Mortem Scrap Spiral
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800">
                  Late Rejection
                </span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p>
                  The most destructive delivery bottleneck in Indian precision engineering is treating quality assurance as a <strong>final gateway inspection</strong> rather than an <strong>inline, in-process assurance mechanism</strong>. Operators are incentivized on volume of parts produced rather than First-Time-Right (FTR) output.
                </p>
                <div className="p-4 bg-white border border-amber-200/90 rounded-lg">
                  <p className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">
                    The Post-Mortem Inspection Spiral
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>A batch of 500 precision shafts is turned, milled, heat-treated, and ground over 10 days.</li>
                    <li>On Day 11, the batch arrives at the final Quality Control (QC) desk for Pre-Dispatch Inspection (PDI).</li>
                    <li>The QC inspector discovers an internal bore dimension drifted by 25 microns on 220 pieces due to tool insert wear on Day 4.</li>
                    <li><strong>Delivery Deadline:</strong> Day 12. <strong>Result:</strong> Shipment missed. The entire plant enters emergency mode, tearing down running CNC setups to rerun scrap replacements, delaying two other customer orders in the process.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Bottleneck 3 */}
            <div id="bottleneck-3-supply-chain" className="p-6 bg-slate-50/70 border border-slate-200 rounded-xl mb-6 scroll-mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A]">
                    Supply Chain Instability &amp; Single-Source Fragility
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-100 text-rose-800">
                  External Choke
                </span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p>
                  MSMEs frequently operate with fragile, informal supplier networks. Subcontracted processes such as specialized plating, anodizing, heat treatment, or raw forging stock are often tied to a single local vendor based purely on historical personal relationships, without signed Service Level Agreements (SLAs) or quality audits.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D98A10] font-bold shrink-0">•</span>
                    <span><strong>Absence of Incoming Quality Control (IQC):</strong> Raw materials are fed directly to production without spectrometer testing or ultrasonic inspection. Porosity in castings or carbon variance in steel bars is only discovered after 4 hours of expensive machining.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D98A10] font-bold shrink-0">•</span>
                    <span><strong>The &quot;Missing Washer&quot; Phenomenon:</strong> An entire ₹15-lakh assembly is delayed from dispatching because an unmonitored Tier-3 fastener vendor failed to deliver specialized cadmium-plated lock nuts on time.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottleneck 4 */}
            <div id="bottleneck-4-maintenance" className="p-6 bg-slate-50/70 border border-slate-200 rounded-xl mb-6 scroll-mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A]">
                    Reactive Breakdown Maintenance (&quot;Run-to-Break&quot;)
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800">
                  Machine Uptime
                </span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p>
                  In traditional MSMEs, maintenance is purely reactive: machines are serviced only when they stop turning, produce unusual vibrations, or leak hydraulic fluid. Total Productive Maintenance (TPM) and predictive condition monitoring are dismissed as unnecessary overheads.
                </p>
                <div className="p-4 bg-slate-100 border-l-4 border-slate-400 rounded-r-lg text-xs sm:text-sm text-slate-700">
                  <strong>The Real Cost of Unplanned Downtime:</strong> A 4-axis VMC breaks its ball screw on Friday evening during an urgent OEM dispatch run. Because no critical spare is stocked in the maintenance crib, the machine sits idle for 6 days waiting for an imported spare from Germany or Taiwan. The entire week&apos;s output schedule collapses.
                </div>
              </div>
            </div>

            {/* Bottleneck 5 */}
            <div id="bottleneck-5-capacity" className="p-6 bg-slate-50/70 border border-slate-200 rounded-xl mb-6 scroll-mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs">
                    05
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0C1D4A]">
                    Capacity Inflexibility &amp; Tribal Project Management
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-800">
                  Planning Deficit
                </span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p>
                  Most MSME delivery commitments are made based on <em>commercial optimism</em> rather than <em>finite capacity planning</em>. Plant heads accept orders based on nominal nameplate capacity (e.g., &quot;we have 10 CNCs, each running 20 hours/day&quot;) without accounting for real-world Overall Equipment Effectiveness (OEE), setup changeover times, tooling availability, and planned maintenance.
                </p>
                <p>
                  Production scheduling is managed on personal whiteboards, diaries, or through verbal instructions in the morning shift. When a high-priority customer calls to expedite an order, supervisors arbitrarily pull ongoing jobs off machines, causing massive setup losses and destabilizing the schedules of five other waiting clients.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Anatomy of a Delivery Failure: Cascade Matrix */}
          <section id="anatomy-of-failure" className="mb-12 scroll-mt-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
              <span>Section 03</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] mb-4">
              Anatomy of a Delivery Failure: The Domino Cascade
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              A delivery failure does not occur on the ship date; it is set in motion weeks earlier through a compounding chain of micro-friction. The matrix below traces how a minor raw material variance compounds into a major breach of Tier-1 OEM trust:
            </p>

            {/* Domino Cascade Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6 shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0C1D4A] text-white">
                    <th className="py-3 px-4 font-semibold w-24">Timeline</th>
                    <th className="py-3 px-4 font-semibold w-40">Root Event</th>
                    <th className="py-3 px-4 font-semibold">Shop-Floor Cascade</th>
                    <th className="py-3 px-4 font-semibold w-36">Delivery Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-slate-800">Day 01</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">PO Acceptance</td>
                    <td className="py-3 px-4 text-slate-600">
                      Promoter promises delivery in 30 days without validating finite CNC machine load or raw material stock.
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-500">Zero Buffer Set</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors bg-amber-50/30">
                    <td className="py-3 px-4 font-mono font-semibold text-amber-900">Day 08</td>
                    <td className="py-3 px-4 font-semibold text-amber-950">Material Arrival (Delayed)</td>
                    <td className="py-3 px-4 text-slate-600">
                      Raw forgings arrive 5 days late from single-source foundry; received without IQC chemical check to save time.
                    </td>
                    <td className="py-3 px-4 font-semibold text-amber-800">+5 Days Slippage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-slate-800">Day 14</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">Machining Stoppage</td>
                    <td className="py-3 px-4 text-slate-600">
                      Machine #4 develops hydraulic pressure drop; maintenance team spends 2 days sourcing seal kits locally.
                    </td>
                    <td className="py-3 px-4 font-semibold text-amber-800">+2 Days Slippage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors bg-rose-50/40">
                    <td className="py-3 px-4 font-mono font-semibold text-rose-900">Day 24</td>
                    <td className="py-3 px-4 font-semibold text-rose-950">Batch Rejection in PDI</td>
                    <td className="py-3 px-4 text-slate-600">
                      18% of shafts rejected during final CMM check due to thermal expansion variance on un-calibrated machine.
                    </td>
                    <td className="py-3 px-4 font-semibold text-rose-700">Rerun Required</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors bg-rose-100/60 font-medium">
                    <td className="py-3 px-4 font-mono font-bold text-rose-950">Day 30</td>
                    <td className="py-3 px-4 font-bold text-rose-950">OEM Delivery Due Date</td>
                    <td className="py-3 px-4 text-rose-900">
                      Only 60% of batch ready; expedited air freight required for partial shipment; OEM issues red-flag audit notice.
                    </td>
                    <td className="py-3 px-4 font-bold text-rose-900">Delivery Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: The 5-Pillar Operational Remedy Framework */}
          <section id="operational-remedy" className="mb-12 scroll-mt-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
              <span>Section 04</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] mb-4">
              The 5-Pillar Operational Remedy Framework
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Transforming an MSME from chronic delivery slippage to a reliable Tier-1 benchmark (≥ 98% OTIF) does not require multi-crore capital expenditure. It requires disciplined operational architecture across five foundational pillars:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1 */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#D98A10]/50 transition-all">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0">
                    P1
                  </div>
                  <h3 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    Value Stream Mapping &amp; Cellular Layout
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Map every step of material movement. Group machinery into self-contained manufacturing cells (U-shaped cells) based on product families. Enforce strict WIP limits between stations using physical Kanban squares. Parts must flow linearly from raw material to dispatch without back-tracking.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#D98A10]/50 transition-all">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0">
                    P2
                  </div>
                  <h3 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    First-Time-Right (FTR) Inline Quality Gates
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Shift inspection responsibility to the machine operator through standardized First-Piece Approval (FPA) and simple Poka-Yoke (mistake-proofing) fixtures. If a dimension drifts, the line stops immediately. Defects must be killed at the workstation, never passed down the line to PDI.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#D98A10]/50 transition-all">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">
                    P3
                  </div>
                  <h3 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    Supplier Tiering &amp; IQC Verification
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Establish two qualified suppliers for all critical processes and raw materials. Institute mandatory Incoming Quality Control (IQC) with clear acceptance criteria before inventory is entered into the ERP or store. Maintain strategic buffer stock for high-lead-time specialized raw alloys.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#D98A10]/50 transition-all">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-xs shrink-0">
                    P4
                  </div>
                  <h3 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    Autonomous &amp; Preventive Maintenance (TPM)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Implement daily 15-minute CLIT (Cleaning, Lubrication, Inspection, Tightening) checklists executed by operators. Maintain an emergency inventory of critical wear-parts (spindles, ball screws, encoders, seals) to guarantee 95%+ machine availability during critical production cycles.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#D98A10]/50 transition-all md:col-span-2">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#0C1D4A] flex items-center justify-center font-bold text-xs shrink-0">
                    P5
                  </div>
                  <h3 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    Finite Capacity Scheduling &amp; Daily Dispatch Plan (DDP)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Replace arbitrary delivery promises with finite capacity loading based on demonstrated OEE and takt times. Institute a visual Daily Dispatch Plan (DDP) reviewed every morning at a 10-minute standup meeting. Work orders must be locked—no ad-hoc job switching without formal management authorization.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Self-Audit Diagnostic: Delivery Health Check */}
          <section id="diagnostic-matrix" className="mb-12 scroll-mt-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
              <span>Section 05</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] mb-4">
              Self-Audit Diagnostic: MSME Delivery Health Check
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Use this rapid diagnostic questionnaire to evaluate your manufacturing plant&apos;s vulnerability to delivery failure. Count your &quot;No&quot; responses to assess your operational delivery risk:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Shop-Floor Material Flow &amp; WIP Control
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Do parts move in a strictly defined linear or cellular path without back-tracking, and is WIP capped between adjacent machining stations?
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200/70 rounded">
                  Flow
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    First-Time-Right (FTR) &amp; Inline Quality Assurance
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Is the machine operator held accountable for First-Piece Approval (FPA), and are dimensional deviations caught at the machine rather than final PDI?
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200/70 rounded">
                  Quality
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Upstream Raw Material &amp; Subcontractor Audits
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Do you verify incoming metallurgical composition before machining, and do you maintain secondary backup sources for specialized subcontracting?
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200/70 rounded">
                  Suppliers
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Preventive Maintenance &amp; Critical Spares Availability
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Are autonomous lubrication and spindle check routines logged daily, and are critical machine spares stocked in-house?
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200/70 rounded">
                  Maintenance
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Finite Capacity Scheduling &amp; Visual Daily Dispatch
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Are delivery commitments calculated against actual machine hours and OEE, and is a visual Daily Dispatch Plan reviewed every morning?
                  </p>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200/70 rounded">
                  Planning
                </span>
              </div>
            </div>

            {/* Diagnostic Score Interpretation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs">
                <span className="font-bold text-emerald-950 block mb-1">0–1 &quot;No&quot; Responses: Low Risk</span>
                <p className="text-emerald-800">Your plant has solid operational discipline. Focus on continuous OEE optimization and IoT machine tracking.</p>
              </div>
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs">
                <span className="font-bold text-amber-950 block mb-1">2–3 &quot;No&quot; Responses: Moderate Risk</span>
                <p className="text-amber-800">Delivery reliability is vulnerable to sudden scrap spikes or machine breakdowns. Immediate inline QC required.</p>
              </div>
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg text-xs">
                <span className="font-bold text-rose-950 block mb-1">4–5 &quot;No&quot; Responses: Critical Risk</span>
                <p className="text-rose-800">Severe risk of OEM contract cancellation and penalty deductions. Urgent shop-floor restructuring needed.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Industrial Advisory & Action Plan */}
          <section id="consultation-cta" className="mb-8 scroll-mt-6">
            <div className="p-6 sm:p-8 bg-linear-to-br from-[#0C1D4A] to-[#1a337e] rounded-2xl text-white shadow-lg">
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D98A10]/20 border border-[#D98A10]/40 rounded-full text-[11px] font-bold text-[#F5D76E] uppercase tracking-widest mb-4">
                  <span>Turnaround Advisory</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  Eliminate Delivery Bottlenecks &amp; Stabilize Your Shop Floor
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Business Clinic provides hands-on diagnostic audits and operational restructuring for Indian manufacturing MSMEs. From shop-floor layout re-engineering and TPM implementation to vendor quality controls and finite capacity scheduling, we help industrial units achieve Tier-1 OEM delivery standards.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/services/indian-msme-troubleshooting/health-check"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#0C1D4A] bg-[#F5D76E] hover:bg-[#E2A128] rounded-xl transition-colors shadow-md text-center"
                  >
                    <span>Run Full MSME Health Check</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors text-center"
                  >
                    <span>Schedule On-Site Plant Audit</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-3">
                  <div className="flex items-center space-x-2">
                    <PhoneCall className="w-4 h-4 text-[#F5D76E]" />
                    <span>Direct Lead Advisor: <strong>+91 9560714343</strong> (Sanjay Chandra)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#F5D76E]" />
                    <span>advisory@businessclinic.in</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Document Footer */}
          <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© 2026 Business Clinic &amp; Delhi Digitech. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="/insights" className="hover:text-[#0C1D4A] underline">
                More Insights
              </Link>
              <span>•</span>
              <Link href="/services/indian-msme-troubleshooting" className="hover:text-[#0C1D4A] underline">
                MSME Troubleshooting
              </Link>
            </div>
          </footer>

        </article>
      </div>
    </div>
  );
}
