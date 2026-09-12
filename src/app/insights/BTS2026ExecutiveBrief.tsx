"use client";


import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  ListOrdered
} from "lucide-react";

export default function BTS2026ExecutiveBrief() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-slate-100/70 min-h-screen py-4 sm:py-12 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 print:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <article className="bg-white border border-slate-200/80 shadow-md rounded-lg p-4 sm:p-12 lg:p-16 print:shadow-none print:border-none print:p-0 text-slate-800">
          
          {/* Masthead / Header */}
          <header className="border-b border-slate-200 pb-5 sm:pb-8 mb-6 sm:mb-8 text-left">
            <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1 bg-amber-50 border border-amber-200/80 rounded text-[10px] sm:text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700" />
              <span>Special Executive Briefing</span>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-3 sm:mb-4">
              Bengaluru Tech Summit 2026: Don’t Just Attend, Outsmart It
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-2">
              <div className="space-y-0.5">
                <p className="font-semibold text-slate-900">
                  By Sanjay Chandra
                </p>
                <p className="text-slate-500 font-medium">
                  India Business Clinic
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10 min read</span>
                </span>
                <span>•</span>
                <span>November 17–19, 2026 • BIEC</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-6 sm:mb-10 p-3.5 sm:p-5 bg-slate-50 border border-slate-200/90 rounded-lg print:hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-2.5 sm:mb-3">
              <ListOrdered className="w-4 h-4 text-[#D98A10]" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              <a href="#executive-summary" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Executive Summary</span>
              </a>
              <a href="#introduction" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Introduction</span>
              </a>
              <a href="#key-insight" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Key Insight</span>
              </a>
              <a href="#3x3x3-focus" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>The 3 x 3 x 3 Focus</span>
              </a>
              <a href="#meeting-ladder" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>The Meeting Ladder</span>
              </a>
              <a href="#msme-startups" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>MSME &amp; Startups: Approach &amp; Focus</span>
              </a>
              <a href="#kpi-funnel" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>A Useful KPI Funnel</span>
              </a>
              <a href="#business-clinic-help" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>How India Business Clinic Can Help</span>
              </a>
              <a href="#summing-up" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Summing Up</span>
              </a>
            </div>
          </nav>

          {/* Document Body */}
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal [&_p]:text-left sm:[&_p]:text-justify sm:[&_p]:[text-justify:inter-word] [&_li]:text-left sm:[&_li]:text-justify">
            
            {/* Section: Executive Summary */}
            <section id="executive-summary" className="space-y-3.5 sm:space-y-4 scroll-mt-8">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-1 border-b border-slate-100 text-left">
                Executive Summary
              </h2>
              <p>
                The Bengaluru Tech Summit (BTS) 2026, themed “AI &amp; Beyond,” is not merely a technology 
                exhibition but a global marketplace of innovation, investment, and collaboration. With 1,800+ 
                exhibitors, 1,000+ startups, and 60,000+ business visitors from 75+ countries, the scale is 
                immense — and so is the challenge of converting three days of exposure into measurable 
                outcomes.
              </p>
              <p>
                The winning strategy is not passive attendance, but deliberate exploitation of BTS’s scale and 
                structure. Companies must arrive with clear objectives, targeted customer and partner lists, and 
                a disciplined engagement funnel. By applying the <strong className="font-semibold text-slate-900">3 x 3 x 3 Focus</strong> — three objectives before 
                BTS, three actions during BTS, and three outcomes after BTS — participants can transform 
                networking into a 90-day pipeline of qualified opportunities.
              </p>
              <p>
                For MSMEs and startups, success lies in prioritizing conversion over visibility: targeting 
                specific customers, preparing compelling propositions, engaging through structured channels, 
                and securing concrete next steps. The difference between collecting business cards and closing 
                deals is preparation, focus, and execution.
              </p>
              <p>
                In short, BTS 2026 is not an event to attend — it is an opportunity to outsmart. Those who treat 
                it as a business-development engine will leave with pilots, partnerships, investments, and 
                market entry strategies that redefine growth trajectories.
              </p>

              {/* Bold India Business Clinic Callout (Exact from PDF) */}
              <div className="p-4 sm:p-6 bg-[#0C1D4A]/5 border-l-4 border-[#D98A10] rounded-r-md text-[#0C1D4A] font-medium leading-relaxed my-4 sm:my-6 text-left sm:text-justify sm:[text-justify:inter-word]">
                India Business Clinic can help companies turn BTS 2026 from a networking event into a 
                structured business-development opportunity. From pre-summit target identification 
                and meeting preparation to on-ground opportunity validation and post-summit follow-up, 
                India Business Clinic helps companies identify the right people, qualify opportunities and 
                convert promising conversations into customers, partnerships, pilots, investments and 
                India-entry opportunities.
              </div>
            </section>

            {/* Section: Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-1 border-b border-slate-100">
                Introduction
              </h2>
              <p>
                The Bengaluru Tech Summit (BTS) 2026, now in its 29th edition, will be held from 17–19 
                November 2026 at the Bangalore International Exhibition Centre (BIEC) under the theme “AI 
                &amp; Beyond.” Organised by the Government of Karnataka&apos;s Department of Electronics, IT, BT 
                and S&amp;T with ecosystem partners, BTS is positioned as a global platform for technology, 
                innovation, investment and cross-border collaboration.
              </p>
              <p>
                Its scope extends beyond AI to DeepTech, semiconductors, digital infrastructure, 
                cybersecurity, biotechnology, mobility and other emerging technologies. The programme 
                combines conferences, exhibitions, B2B/B2G partnering, product launches, startup-investor 
                interactions, industry roundtables and global innovation programmes.
              </p>
              <p>
                The scale makes BTS particularly significant: organisers expect 1,800+ exhibitors, 1,000+ 
                startups, 25,000+ delegates and 60,000+ business visitors from 75+ countries.
              </p>
              <p>
                For companies, therefore, BTS should not be viewed simply as a technology exhibition or 
                networking event. It is a concentrated marketplace where companies can discover technologies, 
                validate business opportunities, identify partners, access markets and convert conversations 
                into commercial relationships.
              </p>
              <p>
                This scale, however, creates the central challenge: how can a company cut through thousands 
                of participants and convert three days of exposure into measurable business outcomes? That 
                should be the starting point for any BTS strategy.
              </p>

              {/* High-impact Italic Subheading */}
              <div className="py-2 text-center sm:text-left">
                <p className="text-lg sm:text-xl font-serif italic font-semibold text-[#0C1D4A]">
                  Don’t Attend Bengaluru Tech Summit 2026. Exploit It.
                </p>
              </div>
            </section>

            {/* Section: Key Insight */}
            <section id="key-insight" className="space-y-3 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-1 border-b border-slate-100">
                Key Insight
              </h2>
              <p className="bg-slate-50 border border-slate-200/80 p-4 rounded-md">
                AI &amp; Beyond should be treated not merely as a technology theme, but as a business-model 
                opportunity. BTS already provides matchmaking, B2B meetings, startup pitching and investor 
                connections.
              </p>
            </section>

            {/* Section: The 3 x 3 x 3 Focus */}
            <section id="3x3x3-focus" className="space-y-6 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                  The 3 x 3 x 3 Focus
                </h2>
                <p className="text-sm font-semibold text-[#D98A10] uppercase tracking-wider mt-1">
                  BTS-to-Business — turning three days of networking into a 90-day pipeline of commercial opportunities
                </p>
              </div>

              {/* Subsection 1 */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">1</span>
                  <span>3 Objectives before BTS</span>
                </h3>

                <div className="space-y-4 pl-3.5 sm:pl-8 border-l-2 border-slate-200 ml-2.5 sm:ml-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                      Find Indian Customers and Partners-Go with a Target List
                    </h4>
                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
                      <li>
                        Do not arrive looking for “business opportunities.” Define 10–20 specific 
                        customer profiles, distributors, technology partners, OEMs or potential JV 
                        partners before November. Use the BTS networking platform to request 
                        meetings, then prepare a one-page proposition for each target: <em className="text-slate-800">problem → 
                        your solution → Indian value proposition → proposed pilot</em>. BTS facilitates 
                        business matchmaking and meeting scheduling.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                      Identify technologies/startups — Go as a Technology Scout
                    </h4>
                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
                      <li>
                        Instead of merely visiting booths, search for technologies that can solve your 
                        company&apos;s existing problems. Shortlist startups, assess technology 
                        maturity, IP, scalability, commercial readiness and India/global 
                        applicability, and arrange technical discussions. BTS brings 1,000+ 
                        startups, R&amp;D labs, investors and corporates together.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                      Test India-entry/global opportunities — Go with a Business Hypothesis
                    </h4>
                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
                      <li>
                        Foreign companies should arrive with questions such as: <em>Can India become 
                        our manufacturing base? Can we establish an R&amp;D/GCC operation? Who 
                        could distribute our product? What must be localised?</em> Indian companies 
                        can reverse the exercise: <em>Can this technology help us enter global markets?</em> Validate these hypotheses through targeted meetings rather than general 
                        networking.
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="italic text-slate-700 bg-slate-50 p-3 sm:p-3.5 rounded border border-slate-200 text-xs sm:text-sm">
                  The fundamental shift: Don&apos;t attend BTS to collect contacts; attend to validate business 
                  hypotheses and leave with defined next actions.
                </p>
              </div>

              {/* Subsection 2 */}
              <div className="space-y-4 pt-3 sm:pt-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">2</span>
                  <span>3 Actions during BTS</span>
                </h3>

                <div className="space-y-5 sm:space-y-6 pl-3.5 sm:pl-8 border-l-2 border-slate-200 ml-2.5 sm:ml-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      DISCOVER — Build the funnel before BTS 6–8 weeks before the summit:
                    </h4>
                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 text-slate-600 text-xs sm:text-sm">
                      <li>Define 3–5 specific business objectives.</li>
                      <li>Build a database of 100–150 potential targets using the exhibitor/startup directory, InterlinX, LinkedIn and sector information.</li>
                      <li>Categorise them: Customers | Technology Partners | Distributors | Investors | JV/Manufacturing Partners.</li>
                      <li>Rank each A/B/C according to strategic relevance.</li>
                      <li>Approach the top 30–40 before BTS and request meetings.</li>
                      <li>BTS&apos;s InterlinX platform is specifically designed for search, matchmaking and scheduling.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      VALIDATE — Use a 15-minute “Opportunity Test”
                    </h4>
                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 text-slate-600 text-xs sm:text-sm">
                      <li>Don&apos;t spend 45 minutes at every booth. Use 15 minutes to establish five facts.</li>
                      <li>Problem → Solution → Technology readiness → Commercial model → India/global fit.</li>
                      <li>Score each prospect 1–5. Only prospects scoring, say, 18+/25 move to the next stage.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      CONNECT — Replace random networking with a “Meeting Ladder”
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">For every promising prospect:</p>

                    {/* Visual Meeting Ladder */}
                    <div id="meeting-ladder" className="bg-slate-50 border border-slate-200 rounded-lg p-3 sm:p-5 my-3 scroll-mt-8">
                      <div className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
                        <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-2.5 rounded border border-slate-200">
                          <span className="px-2 py-0.5 bg-[#0C1D4A] text-white font-bold rounded text-[11px] sm:text-xs shrink-0">Level 1</span>
                          <span className="text-slate-800 font-medium">10–15 minute introduction</span>
                        </div>
                        <div className="text-center text-slate-400 font-bold text-xs sm:text-sm">↓</div>
                        <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-2.5 rounded border border-slate-200">
                          <span className="px-2 py-0.5 bg-[#0C1D4A] text-white font-bold rounded text-[11px] sm:text-xs shrink-0">Level 2</span>
                          <span className="text-slate-800 font-medium">30-minute business/technical discussion</span>
                        </div>
                        <div className="text-center text-slate-400 font-bold text-xs sm:text-sm">↓</div>
                        <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-2.5 rounded border border-slate-200">
                          <span className="px-2 py-0.5 bg-[#0C1D4A] text-white font-bold rounded text-[11px] sm:text-xs shrink-0">Level 3</span>
                          <span className="text-slate-800 font-medium">Post-BTS virtual meeting</span>
                        </div>
                        <div className="text-center text-slate-400 font-bold text-xs sm:text-sm">↓</div>
                        <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-2.5 rounded border border-slate-200">
                          <span className="px-2 py-0.5 bg-[#0C1D4A] text-white font-bold rounded text-[11px] sm:text-xs shrink-0">Level 4</span>
                          <span className="text-slate-800 font-medium">NDA / technical due diligence</span>
                        </div>
                        <div className="text-center text-slate-400 font-bold text-xs sm:text-sm">↓</div>
                        <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 bg-amber-50 p-2 sm:p-2.5 rounded border border-amber-300">
                          <span className="px-2 py-0.5 bg-[#D98A10] text-white font-bold rounded text-[11px] sm:text-xs shrink-0 mt-0.5 sm:mt-0">Level 5</span>
                          <span className="text-slate-900 font-bold leading-snug">Pilot, distribution agreement, JV, investment or India-entry project.</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 sm:space-y-1.5 text-slate-600 text-xs sm:text-sm mt-3">
                      <li>The key innovation: Don&apos;t maximise meetings. Maximise qualified conversations.</li>
                      <li>A company could target 150 prospects → 40 meetings → 15 qualified opportunities → 5 serious negotiations → 1–3 commercial outcomes.</li>
                    </ul>
                  </div>
                </div>

                <p className="italic text-slate-700 bg-slate-50 p-3 sm:p-3.5 rounded border border-slate-200 text-xs sm:text-sm">
                  This is far more powerful than collecting 200 business cards.
                </p>
              </div>

              {/* Subsection 3 */}
              <div className="space-y-4 pt-3 sm:pt-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">3</span>
                  <span>3 outcomes after BTS</span>
                </h3>

                <ul className="list-disc list-outside pl-3.5 sm:pl-8 space-y-2 text-slate-600 text-xs sm:text-sm ml-2.5 sm:ml-3 border-l-2 border-slate-200">
                  <li>
                    <strong className="text-slate-900">Foreign companies:</strong> India market entry, local partnerships, manufacturing/R&amp;D/GCC opportunities.
                  </li>
                  <li>
                    <strong className="text-slate-900">Indian companies:</strong> access to foreign technology, capital, customers and global markets.
                  </li>
                  <li>
                    <strong className="text-slate-900">Startups:</strong> corporate pilots, investment, technology partnerships and internationalisation.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section: MSME & Startups */}
            <section id="msme-startups" className="space-y-3.5 sm:space-y-4 pt-4 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                MSME &amp; Startups: Approach and Focus
              </h2>
              <p>
                For an MSME or startup, the objective should not be maximum visibility—it should be 
                maximum conversion of limited time into customers, partners, technology and capital. BTS 
                provides exhibitions, B2B meetings, investor connect, pitching and mentoring, so the 
                opportunity is to build a deliberate engagement funnel rather than simply attend.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-md p-3.5 sm:p-5 space-y-4 sm:space-y-5">
                <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                  Recommended Approach: Target → Prepare → Engage → Convert
                </h3>

                <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      • TARGET — Decide what you want before attending
                    </h4>
                    <p className="text-slate-600 mb-1">Select one primary and two secondary objectives:</p>
                    <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-0.5 text-slate-600">
                      <li>Find customers</li>
                      <li>Find technology/strategic partners</li>
                      <li>Raise capital</li>
                      <li>Find distributors/OEMs</li>
                      <li>Enter international markets</li>
                    </ul>
                    <p className="text-slate-600 mt-2">
                      Then create a <strong className="text-slate-900">Target-50 list:</strong> 20 prospective customers, 10 technology partners, 10 investors and 10 strategic contacts.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      1. PREPARE — Create a compelling “AI &amp; Beyond” proposition.
                    </h4>
                    <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1 text-slate-600">
                      <li>Don&apos;t simply say “we use AI.” Show: Business problem → AI/technology solution→ measurable benefit → proof → commercial proposition.</li>
                      <li>Prepare a 30-second pitch, one-page capability sheet and 5-slide presentation.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      2. ENGAGE — Use BTS&apos;s structured channels.
                    </h4>
                    <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1 text-slate-600">
                      <li>Pre-book meetings through InterlinX, rather than relying on walk-in networking. BTS specifically provides curated one-to-one B2B matchmaking.</li>
                      <li>For startups, exploit Pitching, Investor Connect, Reverse Pitching and Mentoring rather than spending all three days at the exhibition.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      3. CONVERT — Have a “next-step contract”
                    </h4>
                    <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-1 text-slate-600">
                      <li>Every meaningful conversation should end with one specific action.</li>
                      <li>Demo → NDA → Technical discussion → Pilot → Commercial proposal → Investment/JV</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: A useful KPI */}
            <section id="kpi-funnel" className="space-y-3.5 sm:space-y-4 scroll-mt-8">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                A useful KPI
              </h2>

              <div className="bg-gradient-to-r from-[#0C1D4A] to-[#142A63] text-white p-4 sm:p-6 rounded-lg shadow-md space-y-2.5 sm:space-y-3">
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Recommended Performance Conversion Funnel
                </div>
                <div className="text-xs sm:text-lg lg:text-xl font-mono font-bold tracking-tight text-white py-1 leading-relaxed break-words">
                  50 targets → 20 meetings → 10 qualified opportunities → 5 follow-ups → 2 pilots/deals.
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  Instead of measuring number of visitors or business cards collected, that is how an MSME or startup can turn BTS from an exhibition into a business-development engine.
                </p>
              </div>
            </section>

            {/* Section: How India Business Clinic Can Help You Exploit BTS 2026 */}
            <section id="business-clinic-help" className="space-y-3.5 sm:space-y-4 pt-2 scroll-mt-8">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-1 border-b border-slate-100">
                How India Business Clinic Can Help You Exploit BTS 2026
              </h2>
              <p>
                India Business Clinic helps companies move from <em>attending BTS</em> to <em>converting BTS into business</em>. 
                Before the Summit, we help define your business objectives, identify and prioritise relevant 
                customers, technology partners, investors, distributors and India-entry opportunities, and 
                prepare a targeted engagement plan. During the Summit, we help you Discover, Validate and 
                Connect—screening opportunities, facilitating focused business conversations and applying a 
                structured opportunity assessment rather than relying on random networking. After BTS, we 
                help convert promising conversations into NDA discussions, technical evaluations, pilots, 
                commercial proposals, partnerships, investments or India-entry projects. The objective is 
                simple: less time spent searching, more time spent with the right people, and measurable 
                business outcomes from three days at BTS.
              </p>
            </section>

            {/* Section: Summing Up */}
            <section id="summing-up" className="space-y-3.5 sm:space-y-4 pt-2 scroll-mt-8">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-1 border-b border-slate-100">
                Summing Up
              </h2>
              <p>
                BTS 2026 is not just another technology summit — it is a concentrated marketplace of ideas, 
                partnerships, and opportunities. The companies that will truly benefit are those that arrive with 
                a clear strategy, targeted objectives, and a disciplined engagement funnel. The difference 
                between collecting business cards and closing deals lies in preparation, focus, and conversion. 
                Don’t attend BTS simply to be seen; attend to outsmart it, exploit its scale, and leave with 
                measurable outcomes. In three days, you can build a 90-day pipeline, validate business 
                hypotheses, and secure partnerships that redefine your growth trajectory. The winners at BTS 
                2026 will not be the busiest networkers, but the smartest strategists.
              </p>
            </section>

            {/* Author Footer Card */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 sm:p-6 rounded-lg print:hidden text-center sm:text-left">
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                  Sanjay Chandra
                </h4>
                <p className="text-xs text-slate-600">
                  India Business Clinic Advisory • Industrial &amp; India Entry Strategy
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0C1D4A] hover:bg-[#142A63] text-white px-5 py-2.5 rounded font-semibold text-xs transition-colors uppercase tracking-wider shadow-sm active:scale-[0.98]"
              >
                <span>Book Advisory Session</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
