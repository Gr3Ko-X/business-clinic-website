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
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Compass,
  Landmark,
  Scale,
  DollarSign,
  Users,
  Lightbulb,
  Cpu,
  Truck,
  FileText
} from "lucide-react";

export default function GreatMSMEDisconnect() {
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
              <span>Special Approach Paper & Diagnostic</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              THE GREAT MSME DISCONNECT
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#D98A10] uppercase tracking-wider mb-4">
              An Approach Paper with Diagnostics and Remedy
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
                <span>MSME Growth & Diagnostics</span>
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
              <a href="#introduction" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>1. Introduction & MSME Spectrum</span>
              </a>
              <a href="#msmes-contribution" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2. MSMEs Economic Contribution & Key Insight</span>
              </a>
              <a href="#decoding-micro-struggle" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>3. Decoding The Micro Struggle</span>
              </a>
              <a href="#common-challenges" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>4. Known Common Challenges (7 Bottlenecks)</span>
              </a>
              <a href="#path-forward-enterprise" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>5. Path Forward: At Enterprise Level</span>
              </a>
              <a href="#path-forward-government" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>6. Path Forward: At Government Level</span>
              </a>
              <a href="#policy-long-term" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>7. Policy Changes For Long Term Vision</span>
              </a>
              <a href="#conclusion" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>8. Conclusion</span>
              </a>
            </div>
          </nav>

          {/* Main Paper Content */}
          <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base [&_p]:text-justify [&_p]:[text-justify:inter-word] [&_li]:text-justify">
            
            {/* SECTION 1: INTRODUCTION & SPECTRUM */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
                Introduction
              </h2>
              <p>
                Micro industries form nearly <strong>95%</strong> of the MSME population in India and account for <strong>35%</strong> of the total MSME revenue. They are a major contributor to the Indian economy based on their numbers and revenue generation power.
              </p>

              <h3 className="text-lg font-serif font-bold text-[#0C1D4A] pt-2">
                MSME Spectrum
              </h3>

              {/* Table 1: MSME Classification */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 my-4 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <caption className="text-left font-bold text-xs uppercase tracking-wider text-[#0C1D4A] bg-slate-50 p-3 border-b border-slate-200">
                    MSME Classification (Revised from April 2025)
                  </caption>
                  <thead className="bg-[#0C1D4A] text-white">
                    <tr>
                      <th className="p-3 font-semibold">Category</th>
                      <th className="p-3 font-semibold">Investment Limit (INR)<br /><span className="text-[11px] font-normal text-slate-300">(Plant Machine/Eqpt)</span></th>
                      <th className="p-3 font-semibold">Turnover Limit (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Micro Enterprise</td>
                      <td className="p-3">Upto 2.5Cr</td>
                      <td className="p-3">Upto 10Cr</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Small Enterprise</td>
                      <td className="p-3">Upto 25Cr</td>
                      <td className="p-3">Upto 100Cr</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Medium Enterprise</td>
                      <td className="p-3">Upto 125Cr</td>
                      <td className="p-3">Upto 500Cr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Comparative Share */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 my-4 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <caption className="text-left font-bold text-xs uppercase tracking-wider text-[#0C1D4A] bg-slate-50 p-3 border-b border-slate-200">
                    Comparative Share in India’s MSME Sector
                  </caption>
                  <thead className="bg-[#0C1D4A] text-white">
                    <tr>
                      <th className="p-3 font-semibold">Category</th>
                      <th className="p-3 font-semibold">Approx Share</th>
                      <th className="p-3 font-semibold">Economic Contribution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Micro Enterprise</td>
                      <td className="p-3 font-mono font-semibold text-emerald-800">~95–96% of all MSME</td>
                      <td className="p-3">Rural employment, small-scale production</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Small Enterprise</td>
                      <td className="p-3 font-mono">~3–4%</td>
                      <td className="p-3">Bridge between micro and medium, contributes to domestic supply chains</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Medium Enterprise</td>
                      <td className="p-3 font-mono">&lt;1%</td>
                      <td className="p-3">Higher productivity, export-oriented, structured operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 3: Revenue Contribution Snapshot */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 my-4 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <caption className="text-left font-bold text-xs uppercase tracking-wider text-[#0C1D4A] bg-slate-50 p-3 border-b border-slate-200">
                    Revenue Contribution Snapshot
                  </caption>
                  <thead className="bg-[#0C1D4A] text-white">
                    <tr>
                      <th className="p-3 font-semibold">Category</th>
                      <th className="p-3 font-semibold">Contribution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Micro Enterprise</td>
                      <td className="p-3">Small turnover per unit, but collectively form the backbone of MSMEs.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Small Enterprise</td>
                      <td className="p-3">Larger turnover, often supplying to bigger industries.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="p-3 font-semibold text-[#0C1D4A]">Medium Enterprise</td>
                      <td className="p-3">Highest turnover per unit, significant in exports and industrial clusters.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: MSMES CONTRIBUTION & KEY INSIGHT */}
            <section id="msmes-contribution" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                MSMEs Contribution
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1D4A]">~30%</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">of India’s GDP</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1D4A]">~36%</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">of Manufacturing Output</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1D4A]">~45%</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">of Total Exports</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1D4A]">7.5+ Cr</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">People Employed</div>
                </div>
              </div>

              <div className="p-5 bg-amber-50/80 border border-amber-200/90 rounded-xl space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <Lightbulb className="w-4 h-4 text-[#D98A10]" />
                  <span>Key Insight</span>
                </div>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  Micro enterprises dominate in numbers, but medium enterprises dominate in revenue per unit. India with its large population and limited job availability index should have primary focus on micro industries. This would result in an increase in employment opportunities, encourage entrepreneurial initiatives, bring a positive impact and a feel good factor to the large segment of educated and skilled manpower which remains unemployed in India. <strong>Let us shift focus from prospective unicorns to hard working turtles.</strong>
                </p>
                <p className="text-slate-700 text-xs sm:text-sm italic">
                  Despite the appreciable commercial and social impact that the Micro segment has on the growth of the economy, due emphasis and support by government agencies is missing.
                </p>
              </div>
            </section>

            {/* SECTION 3: DECODING THE MICRO STRUGGLE */}
            <section id="decoding-micro-struggle" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Decoding The Micro Struggle
              </h2>

              <p>
                The Government looks at the micro, small and medium enterprises as a single block and all policies and schemes are aligned accordingly. This is the biggest fallacy which is known to all concerned but addressed by none. The MSME platform is dominated by the small and medium companies on account of their branding, financial strength and political clout while the micro enterprises remain bereft of most of the advantages that accrue to the MSME sector.
              </p>

              <p>
                The Government policy which defines the categorisation of the micro, small and medium enterprises is based on the value of plant and machinery (assets/investment) and the annual turnover. This is based on numbers alone. It does not capture the true nature of differentiation. The micro industries stand alone with respect to the following:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Owner Driven
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Majority are owner driven family enterprises which have multiple decision makers and the control and decision making power structure is not defined and spread over the leadership, often with overlapping boundaries. They do not have a defined mission and vision; they do not have smart objectives and targets; they do not have standing operating procedures, financial plan, quality plan etc. All actions are adhoc and taken by a leadership which is not capable to lead. They always remain in the struggle mode and never reach the growth stage.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Numerical Strength
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    It is less than 50.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Civil Infrastructure
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Mostly rented. If company/proprietor owned then old and not well maintained.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Plant & Machinery
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    2nd or 3rd generation vintage. Local tools which are mostly not calibrated.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Calibre of Personnel
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Medium to Low. The entire expertise revolves around a few good and dedicated employees who have a wealth of experience in their respective fields. They may not possess formal degrees or certifications but are masters of their trade. They are good but they also know that they are irreplaceable. This is not desirable for discipline, business continuity and process implementation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                    • Resistance to Change
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Being owner driven lends them inherently resistant to change. Most of the owners are family based businessmen who are moderately educated with limited exposure. To them everything is a risk. They are devoid of entrepreneurial ambitions and prefer the continuity and sustenance even if it is disadvantageous to them. They want to improve the existing than to explore the new.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: KNOWN COMMON CHALLENGES */}
            <section id="common-challenges" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Known Common Challenges
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                In addition to structural differentiation, seven core functional bottlenecks impede micro enterprise viability:
              </p>

              <div className="space-y-4">
                {/* 1. Finance */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">1</span>
                    <h3 className="text-base font-serif">Access to Finance</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Many micro enterprises lack collateral or proper documentation, making it hard to secure loans.</li>
                    <li>Dependence on informal lenders at <strong>high interest rates</strong> reduces profitability.</li>
                    <li>Government schemes like <strong>MUDRA</strong> and <strong>CGTMSE</strong> exist, but disbursement is uneven.</li>
                  </ul>
                </div>

                {/* 2. Tech */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">2</span>
                    <h3 className="text-base font-serif">Technological Backwardness</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Reliance on outdated machinery and production methods.</li>
                    <li>Limited funds prevent investment in modern equipment.</li>
                    <li>Results in low-quality goods and higher production costs.</li>
                  </ul>
                </div>

                {/* 3. Infrastructure */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">3</span>
                    <h3 className="text-base font-serif">Infrastructure Deficit</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Frequent power outages, poor road connectivity, and weak logistics.</li>
                    <li>Increases delivery delays and costs, reducing competitiveness.</li>
                    <li>Lack of industrial clusters prevents resource pooling and collaboration.</li>
                  </ul>
                </div>

                {/* 4. Regulatory */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">4</span>
                    <h3 className="text-base font-serif">Regulatory Burden</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Complex compliance with <strong>GST</strong>, labour laws, and environmental clearances.</li>
                    <li>Small entrepreneurs often face penalties due to lack of awareness.</li>
                  </ul>
                </div>

                {/* 5. Marketing */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">5</span>
                    <h3 className="text-base font-serif">Marketing & Distribution Issues</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Limited resources for branding and advertising.</li>
                    <li>Dependence on middlemen who exploit margins.</li>
                    <li>Weak distribution networks restrict market reach.</li>
                  </ul>
                </div>

                {/* 6. Labor */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">6</span>
                    <h3 className="text-base font-serif">Skilled Labor Shortage</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>While labour is abundant, skilled manpower is scarce. Most of the times when it is available it is unaffordable.</li>
                    <li>Micro industries cannot afford training or retention programs.</li>
                    <li>Potential employees prefer to join larger companies/companies with greater visibility at lower compensation and more demanding work environment in preference to micro companies.</li>
                  </ul>
                </div>

                {/* 7. Cash Flow */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 font-bold text-[#0C1D4A]">
                    <span className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white text-xs flex items-center justify-center font-mono">7</span>
                    <h3 className="text-base font-serif">Payment Delays & Cash Flow Problems</h3>
                  </div>
                  <ul className="list-disc pl-8 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Large buyers often delay payments, creating liquidity crises.</li>
                    <li>Cash flow issues hinder reinvestment and daily operations.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 5: PATH FORWARD: AT ENTERPRISE LEVEL */}
            <section id="path-forward-enterprise" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Path Forward: At Enterprise Level
              </h2>

              <p>
                Micro industries in India need to adopt a structured, step-by-step approach. Here’s a practical guide that translates those challenges into actionable measures.
              </p>

              {/* Crucial Advisory Engagement Note */}
              <div className="p-5 bg-amber-50 border-l-4 border-[#D98A10] rounded-r-xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-mono">
                  Mandatory Execution Condition
                </span>
                <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                  “For gaining from the measures outlined below the micro industry ownership must engage a professional and well reputed advisor/consultant who holds their hand during the actionable phase and ensures that the end result is achieved before disengaging. Attempts to try and do things on its own or through informal engagement through friends, business colleagues or relatives have not been found to be successful.”
                </p>
              </div>

              {/* Step by step measures */}
              <div className="space-y-5 pt-3">
                
                {/* Finance */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Strengthen Financial Access</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Improve liquidity and reduce dependence on informal lenders.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Build relationships with local banks and cooperative societies.</li>
                    <li>Maintain proper documentation and financial records.</li>
                    <li>Explore government schemes like MUDRA and CGTMSE for collateral-free loans.</li>
                  </ul>
                </div>

                {/* Technology */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Upgrade Technology</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Modernize production to improve quality and reduce costs.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Invest gradually in calibrated tools and modern machinery.</li>
                    <li>Leverage shared industrial clusters for equipment access.</li>
                    <li>Adopt affordable digital tools for accounting and inventory.</li>
                  </ul>
                </div>

                {/* Infrastructure */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Improve Infrastructure Usage</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Mitigate infrastructure deficits through collaboration.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Join or form local industrial clusters.</li>
                    <li>Pool resources for logistics and warehousing.</li>
                    <li>Use renewable energy solutions to reduce power outage risks.</li>
                  </ul>
                </div>

                {/* Compliance */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Simplify Compliance</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Reduce penalties and regulatory burden.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Attend government awareness workshops on GST and labour laws.</li>
                    <li>Use digital compliance platforms for filings.</li>
                    <li>Seek professional help for complex clearances.</li>
                  </ul>
                </div>

                {/* Marketing */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Strengthen Marketing & Distribution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Expand market reach and reduce dependence on middlemen.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Build direct-to-consumer channels via e-commerce.</li>
                    <li>Collaborate with other micro enterprises for joint branding.</li>
                    <li>Participate in trade fairs and exhibitions.</li>
                  </ul>
                </div>

                {/* Workforce */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Develop Skilled Workforce</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Address shortage of affordable skilled manpower.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Partner with vocational institutes for training; Offer apprenticeships to local youth.</li>
                    <li>Create incentive-based retention programs.</li>
                  </ul>
                </div>

                {/* Cash Flow */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0C1D4A] text-base flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D98A10]"></span>
                    <span>Manage Cash Flow Effectively</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    Reduce liquidity crises caused by delayed payments.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Negotiate clear payment terms with buyers.</li>
                    <li>Use invoice discounting or factoring services.</li>
                    <li>Maintain emergency reserves for daily operations.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 6: PATH FORWARD: AT GOVERNMENT LEVEL */}
            <section id="path-forward-government" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Path Forward: At Government Level
              </h2>

              <p>
                A focussed and repetitive campaign by the government needs to be undertaken to educate the existing leadership of micro enterprises to step out of their comfort zones and start new initiatives. This is only practical if the government guarantees the status quo even when the initiatives fail. The government will have to hold the hand of these enterprises and act as their partners rather than regulators, monitors and benefactors. Small starts can be made with pilot programmes and the ones which prove to be successful can be scaled and diversified.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Strengthening credit delivery mechanisms for micro enterprises.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Investment in industrial clusters and shared infrastructure.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Simplifying regulatory compliance for small businesses.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Promoting skill development programs tailored to micro industries.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800"><strong>Take stringent actions at all levels to restrict and reduce corruption.</strong> Link performance of government employees to turnover and profit margins of micro industries.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Monitor the implementation of government schemes closely and incentivise the good and penalize the bad performers.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Have a separate section/division staffed with qualified and experienced personnel to administer the micro segment under the MSME ministry.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800">Have an inclusive approach and involve stakeholders in policy and decision making.</span>
                </div>
              </div>
            </section>

            {/* SECTION 7: POLICY CHANGES FOR LONG TERM VISION */}
            <section id="policy-long-term" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Policy Changes For Long Term Vision
              </h2>

              <p>
                The micro segment primarily revolves around low end technology based business. It has very basic infrastructure and limited skilled manpower. Their requirements are simple: <strong>They need work, they need funds and skilled manpower to execute the work.</strong>
              </p>

              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0C1D4A] to-[#142B6A] text-white space-y-3 shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                  <Compass className="w-4 h-4" />
                  <span>Strategic Policy Recommendations</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200 pl-2">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0"></span>
                    <span>
                      <strong>Mandatory Sub-Contracting Quota:</strong> To meet these needs the government should bring in policy that for all government contracts awarded to large companies beyond a certain value, an appreciable percentage of the same would be sub-contracted to the micro segment. <em>Similar to the offset clause in the Defence Acquisition Procedure (DAP).</em>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] mt-2 shrink-0"></span>
                    <span>
                      <strong>Minimum Price Floor Guarantee:</strong> This sub-contracted work would be mandated at a guaranteed minimum price akin to the <strong>Minimum Support Price (MSP)</strong> in the agricultural sector, safeguarding margins against predatory buyer pricing.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: CONCLUSION */}
            <section id="conclusion" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Conclusion
              </h2>
              <p>
                Reforms for micro industries in India are currently focused on expanding credit access, digitalising compliance, and strengthening microfinance guardrails. The Union Budget 2025–26 raised credit guarantee limits, introduced customised credit cards for micro enterprises, and promoted digitalisation to reduce bureaucratic hurdles. These measures aim to ease liquidity constraints and improve competitiveness.
              </p>
            </section>

          </div>

          {/* Author Callout Box */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-serif text-xl font-bold shrink-0">
              SC
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0C1D4A]">
                  Sanjay Chandra
                </h3>
                <p className="text-xs text-[#D98A10] font-bold uppercase tracking-wider">
                  Lead Advisor · Business Clinic
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Business Clinic delivers action-oriented diagnostics and operational problem solving for Indian MSMEs, Tier-1 industrial vendors, and global manufacturers establishing on-ground footprints.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0C1D4A] hover:text-[#D98A10] transition-colors"
                >
                  <span>Request an On-Ground Industrial Diagnostic</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 print:hidden">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-1.5 font-semibold text-slate-600 hover:text-[#0C1D4A]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all Insights</span>
            </Link>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-[#0C1D4A] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Complete Paper</span>
            </button>
          </div>

        </article>
      </div>
    </div>
  );
}
