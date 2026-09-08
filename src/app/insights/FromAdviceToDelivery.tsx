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
  Compass,
  CheckCircle2,
  Shield,
  Award,
  TrendingUp,
  Target,
  ArrowRight,
  FileCheck2
} from "lucide-react";

export default function FromAdviceToDelivery() {
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
          
          {/* Header Banner / Running Header */}
          <div className="flex justify-between items-center text-[11px] uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100 pb-3 mb-8">
            <span>India Business Clinic</span>
            <span>From Advice to Delivery</span>
          </div>

          {/* Masthead */}
          <header className="border-b border-slate-200 pb-8 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Advisory Framework &amp; Operating Model</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              FROM ADVICE TO DELIVERY
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#D98A10] uppercase tracking-wider mb-3">
              The India Business Clinic Model
            </p>
            <p className="text-sm sm:text-base text-slate-600 italic font-medium">
              A practical model for helping global companies understand, establish and scale in India.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 mt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  By Col Sanjay Chandra (Retd)
                </p>
                <p className="text-slate-500 font-medium">
                  Founder, India Business Clinic
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>7 min read</span>
                </span>
                <span>•</span>
                <span>India Market Entry &amp; Scale</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-10 p-5 bg-slate-50 border border-slate-200/90 rounded-xl print:hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-3">
              <ListOrdered className="w-4 h-4 text-[#D98A10]" />
              <span>Document Outline</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              <a href="#introduction" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>1. The Indian Opportunity &amp; Question</span>
              </a>
              <a href="#not-just-consultants" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2. We Are Not Just Consultants</span>
              </a>
              <a href="#experience-shapes-model" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>3. Experience That Shapes the Model</span>
              </a>
              <a href="#from-advice-to-handholding" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>4. From Advice to Handholding</span>
              </a>
              <a href="#from-handholding-to-execution" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>5. From Handholding to Execution</span>
              </a>
              <a href="#modular-model" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>6. A Modular Model for Different Needs</span>
              </a>
              <a href="#responsibility-for-advice" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>7. We Take Responsibility for Our Advice</span>
              </a>
              <a href="#why-india-needs-model" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>8. Why India Needs This Model</span>
              </a>
              <a href="#global-perspective-indian-grounding" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>9. Global Perspective with Indian Grounding</span>
              </a>
              <a href="#three-principles" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>10. Competence, Credibility &amp; Track Record</span>
              </a>
              <a href="#bridge-global-indian" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>11. Bridge Between Global Ambition &amp; Reality</span>
              </a>
              <a href="#clinic-difference" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>12. The India Business Clinic Difference</span>
              </a>
              <a href="#india-too-important" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>13. India Is Too Important to Get Wrong</span>
              </a>
            </div>
          </nav>

          {/* Document Body */}
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-8">
              <p>
                India is one of the world&apos;s most compelling business opportunities. It is also one of the markets where getting the strategy right is only the beginning.
              </p>
              <p>
                With its enormous scale, regional diversity, multiple business ecosystems, regulatory complexity, cultural nuances and distinctly different ways of doing business across sectors and geographies, navigating India can become a long—and sometimes torture-filled—journey for a company that does not understand the terrain.
              </p>
              <p>
                For a global company looking to enter India, establish a business footprint and eventually scale, the question is therefore not simply:
              </p>

              {/* Centered Question 1 */}
              <div className="py-2 text-center">
                <div className="inline-block p-4 sm:px-8 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-serif italic text-lg sm:text-xl font-medium shadow-2xs">
                  &ldquo;What should we do in India?&rdquo;
                </div>
              </div>

              <p>
                The more important question is:
              </p>

              {/* Centered Question 2 */}
              <div className="py-2 text-center">
                <div className="inline-block p-4 sm:px-8 bg-[#0C1D4A]/5 border border-[#0C1D4A]/20 rounded-lg text-[#0C1D4A] font-serif italic text-lg sm:text-xl font-semibold shadow-2xs">
                  &ldquo;Who can help us do it—and stay with us until it works?&rdquo;
                </div>
              </div>

              <p className="font-medium text-slate-900">
                That is the space in which India Business Clinic operates.
              </p>
            </section>

            {/* Section 2: We Are Not Just Consultants */}
            <section id="not-just-consultants" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                We Are Not Just Consultants
              </h2>
              <p>
                Traditional consulting typically follows a familiar model: understand the problem, analyse the situation, develop recommendations and present a strategy.
              </p>
              <p>
                That has its place.
              </p>
              <p className="font-semibold text-slate-900">
                But in India, strategy without execution can quickly become an expensive document.
              </p>
              <p>
                At India Business Clinic, we believe that the real value of advice is demonstrated by what happens <strong>after the advice is given</strong>.
              </p>
              <p>
                Our role does not end with a report, presentation or recommendation. We work with our clients to translate strategy into action, navigate the realities of the Indian business environment, engage the relevant stakeholders, overcome obstacles and move initiatives towards tangible outcomes.
              </p>
              <p className="font-medium text-slate-900">
                We are not just consultants. We are business partners focused on delivery.
              </p>

              {/* Progression Badge */}
              <div className="py-4 text-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-3 bg-gradient-to-r from-[#0C1D4A] via-[#122b6d] to-[#0C1D4A] text-white rounded-xl shadow-md font-serif text-base sm:text-lg tracking-wide">
                  <span className="font-semibold text-amber-400">Advise</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-semibold text-amber-400">Handhold</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-semibold text-amber-400">Execute</span>
                </div>
              </div>
            </section>

            {/* Section 3: Experience That Shapes the Model */}
            <section id="experience-shapes-model" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                Experience That Shapes the Model
              </h2>
              <p>
                The India Business Clinic model is not based merely on a consulting philosophy. It has evolved from decades of experience dealing with complex organisations, technologies, programmes and business environments.
              </p>
              <p>
                Its founder, <strong>Col Sanjay Chandra (Retd)</strong>, brings more than <strong>35 years of professional experience</strong> spanning the Indian Army, strategic defence programmes, defence production and manufacturing, industrial execution, turnkey project management and MSME advisory.
              </p>
              <p>
                His career has involved working at the intersection of <strong>technology, people, processes, institutions and execution</strong>—where plans have to work in the real world, often within complex and demanding environments.
              </p>
              <p>
                His exposure extends across the Indian Armed Forces, DRDO and defence production organisations, as well as international technology organisations and businesses from countries including the <strong>USA, Israel, France, Germany and Hungary</strong>.
              </p>
              <p>
                This combination of Indian institutional experience and international exposure is particularly relevant to the India Business Clinic proposition.
              </p>
              <p>
                It brings an understanding of both sides of the India equation:
              </p>

              {/* Centered Equation */}
              <div className="py-2 text-center">
                <div className="inline-block p-4 sm:p-5 bg-amber-50/70 border border-amber-200/90 rounded-xl text-[#0C1D4A] font-serif text-base sm:text-lg font-semibold max-w-2xl shadow-2xs">
                  What global companies expect when entering India—and what it actually takes to make things work in India.
                </div>
              </div>

              <p>
                Over the years, this experience has covered defence electronics and strategic systems, manufacturing infrastructure, power distribution, calibration systems, technical documentation, process improvement, technology integration and complex industrial programmes.
              </p>
              <p>
                It has also involved working closely with MSMEs and industrial enterprises on operational strengthening, localisation, technology transfer, troubleshooting, SOPs, project audits, vendor and supply-chain coordination, regulatory and liaison support, and converting technical capability into business results.
              </p>

              {/* Centered Takeaway Box */}
              <div className="py-2 text-center">
                <div className="inline-block p-4 sm:p-5 bg-slate-50 border-l-4 border-[#0C1D4A] rounded-r-xl text-slate-900 font-serif text-base sm:text-lg font-medium shadow-2xs">
                  India Business Clinic is therefore built around experience that has been tested in execution—not simply discussed in boardrooms.
                </div>
              </div>
            </section>

            {/* Section 4: From Advice to Handholding */}
            <section id="from-advice-to-handholding" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                From Advice to Handholding
              </h2>
              <p>
                Entering a new market is rarely a linear process.
              </p>
              <p>
                A company may begin by seeking an understanding of the Indian market, its opportunities and competitive landscape. It may then need assistance in identifying the right partners, customers, channels, locations, talent or business model.
              </p>
              <p>
                Once the decision to proceed is made, the nature of the challenge changes.
              </p>
              <p className="font-semibold text-slate-900">
                The questions become practical:
              </p>

              {/* Practical Questions List */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 sm:p-6 my-4">
                <ul className="space-y-2.5 text-slate-800 text-sm sm:text-[15px]">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>Who should we speak to?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>How do we approach them?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>Which opportunities are genuinely viable?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>How do we establish credibility?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>How do we structure the engagement?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>How do we navigate the ecosystem?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#D98A10] font-bold text-base leading-none mt-1">•</span>
                    <span>How do we move from an initial conversation to a commercial relationship?</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-slate-900">
                This is where handholding becomes critical.
              </p>
              <p>
                India Business Clinic stays alongside the client as the strategy encounters the real world.
              </p>
              <p>
                We help bridge the gap between what should happen and what actually needs to happen.
              </p>
            </section>

            {/* Section 5: From Handholding to Execution */}
            <section id="from-handholding-to-execution" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                From Handholding to Execution
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-slate-900 font-medium">
                The greatest difference in our model is the willingness to cross the line from advising to doing.
              </p>
              <p>
                Execution may involve market development, partner identification and engagement, business development, customer acquisition, channel development, strategic alliances, localisation, stakeholder engagement or other activities required to turn an opportunity into a business outcome.
              </p>
              <p>
                The exact requirement varies from client to client.
              </p>
              <p className="font-semibold text-slate-900">
                That is why our offering is modular.
              </p>
            </section>

            {/* Section 6: A Modular Model for Different Business Needs */}
            <section id="modular-model" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                A Modular Model for Different Business Needs
              </h2>
              <p className="font-medium text-slate-900">
                There is no single India journey.
              </p>
              <p>
                A multinational entering India for the first time may need comprehensive market-entry support. An established global company may need help developing a particular business vertical. Another may require access to partners or customers. Yet another may need an experienced India hand to help navigate a specific challenge.
              </p>
              <p>
                India Business Clinic does not believe that every client needs to buy an entire consulting package.
              </p>
              <p>
                Our modular approach allows clients to engage us for the capabilities they need—individually or in combination.
              </p>
              <p>
                A client can therefore enter at the <strong>Advice</strong> stage, move into <strong>Handholding</strong>, and progress to <strong>Execution</strong> as the requirement evolves.
              </p>
              <p>
                Or, where appropriate, we can take responsibility for the complete journey.
              </p>
              <p>
                This makes the relationship more flexible, more practical and more closely aligned with the client&apos;s actual business objectives.
              </p>
            </section>

            {/* Section 7: We Take Responsibility for Our Advice */}
            <section id="responsibility-for-advice" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                We Take Responsibility for Our Advice
              </h2>
              <p>
                This is perhaps the most important distinction in the India Business Clinic model.
              </p>

              {/* Centered Distinction Statement */}
              <div className="py-2 text-center">
                <div className="inline-block p-4 sm:px-8 bg-[#0C1D4A] text-white rounded-xl font-serif text-lg sm:text-xl font-semibold shadow-md">
                  We take responsibility for our advice by implementing it.
                </div>
              </div>

              <p>
                We do not want our recommendations to remain recommendations.
              </p>
              <p>
                If we believe a particular strategy is right for the client, we are prepared to work with the client to put that strategy into practice and measure what it delivers.
              </p>
              <p>
                That creates a different kind of accountability.
              </p>
              <p>
                It means that success is not defined by whether the client liked our presentation.
              </p>
              <p className="font-semibold text-slate-900">
                It is defined by whether the strategy produced the intended result.
              </p>

              {/* 3-Step Result Chain */}
              <div className="py-4 text-center">
                <div className="inline-flex flex-col space-y-2 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl font-serif text-base sm:text-lg font-medium text-slate-900 shadow-2xs">
                  <span className="text-[#0C1D4A] font-semibold">Advice must lead to action.</span>
                  <span className="text-[#D98A10] font-semibold">Action must lead to measurable results.</span>
                  <span className="text-slate-900 font-bold">And results must create value for the client.</span>
                </div>
              </div>

              <p>
                Our engagement therefore remains focused on measurable outcomes and, ultimately, the complete satisfaction of our clients.
              </p>
            </section>

            {/* Section 8: Why India Needs This Model */}
            <section id="why-india-needs-model" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                Why India Needs This Model
              </h2>
              <p>
                India is not a single market in the conventional sense.
              </p>
              <p>
                It is a collection of markets, industries, regions, business cultures, customer segments and ecosystems operating within one very large economy.
              </p>
              <p>
                What works in one geography may not necessarily work in another. What appears straightforward on paper can become considerably more complicated on the ground.
              </p>
              <p>
                For an overseas company unfamiliar with India, this complexity can consume enormous amounts of time, money and management bandwidth.
              </p>
              <p className="font-semibold text-slate-900">
                The cost of getting it wrong can be substantial.
              </p>
              <p>
                The right local knowledge, relationships, judgement and execution capability can therefore make the difference between an India strategy that remains theoretical and one that becomes commercially successful.
              </p>
              <p className="font-medium text-slate-900">
                This is precisely where India Business Clinic seeks to create value.
              </p>
            </section>

            {/* Section 9: A Global Perspective with Indian Grounding */}
            <section id="global-perspective-indian-grounding" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                A Global Perspective with Indian Grounding
              </h2>
              <p>
                Global companies entering India often face an interesting paradox.
              </p>
              <p>
                They may possess outstanding technology, products, intellectual property, management systems and international market experience.
              </p>
              <p>
                What they may not possess is an intimate understanding of how those strengths need to be adapted to the Indian environment.
              </p>
              <p className="font-semibold text-[#0C1D4A]">
                India Business Clinic seeks to bridge that gap.
              </p>
              <p>
                The founder&apos;s experience of working with international technology organisations, while simultaneously operating within India&apos;s complex institutional, industrial and defence ecosystems, provides an important perspective.
              </p>
              <p>
                It enables India Business Clinic to understand the expectations, processes and standards of international organisations while remaining grounded in the practical realities of India.
              </p>

              {/* Centered Perspective Block */}
              <div className="py-4 text-center">
                <div className="inline-block p-5 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-xl max-w-2xl shadow-2xs font-serif text-base sm:text-lg">
                  <p className="text-slate-800 font-medium">
                    We understand the global company&apos;s perspective. We understand the Indian ecosystem.
                  </p>
                  <p className="text-[#0C1D4A] font-bold mt-2">
                    And we understand the importance of making the two work together.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Built on Competence, Credibility and Track Record */}
            <section id="three-principles" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                  Built on Competence, Credibility and Track Record
                </h2>
                <p className="pt-2">
                  Our ambition is straightforward:
                </p>
              </div>

              {/* Centered Ambition */}
              <div className="py-2 text-center">
                <div className="inline-block p-5 sm:p-6 bg-amber-50/80 border border-amber-200 rounded-xl font-serif text-lg sm:text-xl font-semibold text-[#0C1D4A] max-w-2xl shadow-2xs">
                  To be the best in the business at helping companies navigate India and convert opportunity into results.
                </div>
              </div>

              <p>
                That ambition cannot be established through positioning alone.
              </p>
              <p className="font-semibold text-slate-900">
                It has to be earned.
              </p>
              <p>
                For us, that foundation rests on three principles:
              </p>

              {/* 3 Principles Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0C1D4A]/10 flex items-center justify-center text-[#0C1D4A]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Competence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    India requires more than generic international business knowledge. It requires an understanding of the Indian business environment, its complexities and its opportunities—combined with the ability to make sound decisions and execute effectively.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0C1D4A]/10 flex items-center justify-center text-[#0C1D4A]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Credibility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Business is ultimately built on trust. Clients need confidence that their India partner understands their objectives, represents their interests professionally and has the credibility to engage with the relevant ecosystem.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0C1D4A]/10 flex items-center justify-center text-[#0C1D4A]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                    Track Record
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Experience matters most when it translates into results. A successful track record demonstrates not merely that someone has operated in India, but that they have been able to navigate complexity, solve problems and deliver outcomes.
                  </p>
                </div>
              </div>

              <p>
                The founder&apos;s decades of experience across military leadership, strategic programmes, industrial operations, international technology engagement and business advisory provide the foundation on which this philosophy has been built.
              </p>

              {/* Triad Progression */}
              <div className="py-4 text-center">
                <div className="inline-flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 p-4 sm:px-8 bg-[#0C1D4A] text-white rounded-xl font-serif text-sm sm:text-base font-semibold shadow-md">
                  <span className="text-amber-400">Competence creates confidence.</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-amber-400">Credibility creates access.</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-amber-400">Track record creates trust.</span>
                </div>
              </div>

              <p className="font-medium text-slate-900">
                Together, these form the foundation of the India Business Clinic proposition.
              </p>
            </section>

            {/* Section 11: A Bridge Between Global Ambition and Indian Reality */}
            <section id="bridge-global-indian" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                A Bridge Between Global Ambition and Indian Reality
              </h2>
              <p>
                For global companies, India Business Clinic can serve as the bridge between <strong>international ambition and Indian execution</strong>.
              </p>
              <p>
                We understand that a global company does not necessarily need another advisor sitting outside the market telling it what India looks like.
              </p>
              <p className="font-medium text-slate-900">
                It needs someone who can help it navigate India from the inside.
              </p>
              <p>
                Someone who can challenge assumptions, identify opportunities, anticipate obstacles, open doors where appropriate, stay involved when things become complicated and, most importantly, help convert plans into results.
              </p>
              <p>
                At the same time, India&apos;s vast MSME ecosystem represents an enormous source of capability, innovation, supply-chain strength, partnerships and growth opportunities.
              </p>
              <p>
                Connecting global companies with the right Indian business ecosystem can create value on both sides.
              </p>
              <p className="font-medium text-slate-900">
                That is why our role is not merely to help companies enter India.
              </p>
              <p className="text-base sm:text-lg font-serif font-bold text-[#0C1D4A]">
                It is to help them understand India, establish themselves in India and ultimately scale in India.
              </p>
            </section>

            {/* Section 12: The India Business Clinic Difference */}
            <section id="clinic-difference" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                The India Business Clinic Difference
              </h2>
              <p>
                The difference can be expressed in one simple progression:
              </p>

              {/* Simple Progression */}
              <div className="py-4 text-center">
                <div className="inline-flex flex-col space-y-2 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl font-serif text-base sm:text-lg font-medium text-slate-900 shadow-2xs">
                  <span className="text-[#0C1D4A] font-semibold">Advice tells you what to do.</span>
                  <span className="text-[#D98A10] font-semibold">Handholding helps you navigate how to do it.</span>
                  <span className="text-slate-900 font-bold">Execution makes sure it gets done.</span>
                </div>
              </div>

              <p className="font-medium text-slate-900">
                India Business Clinic brings all three together.
              </p>
              <p>
                And behind that model is a simple belief shaped by years of experience:
              </p>

              {/* Central Belief Box */}
              <div className="py-2 text-center">
                <div className="inline-block p-5 sm:p-6 bg-amber-50 border border-amber-200 rounded-xl text-[#0C1D4A] font-serif text-base sm:text-lg font-bold max-w-2xl shadow-2xs">
                  In complex environments, advice has value only when it can survive contact with reality.
                </div>
              </div>

              <p>
                We believe that clients should not have to engage one firm for strategy, another for implementation and yet another for business development.
              </p>
              <p>
                Where our capabilities fit the requirement, we can accompany the client across the journey—from the first assessment of an opportunity to establishing a presence and pursuing sustainable growth.
              </p>
              <p>
                That is what <strong>From Advice to Delivery</strong> means.
              </p>
              <p>
                It is not simply a change in terminology.
              </p>
              <p className="font-semibold text-[#0C1D4A]">
                It is a different philosophy of professional engagement.
              </p>
            </section>

            {/* Section 13: India Is Too Important to Get Wrong */}
            <section id="india-too-important" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] pb-2 border-b border-slate-100">
                India Is Too Important to Get Wrong
              </h2>
              <p>
                The opportunity presented by India is too significant to be approached casually.
              </p>
              <p>
                But India is also too complex to be approached purely through theory.
              </p>
              <p>
                Companies that succeed in India are those that combine a compelling proposition with local understanding, patience, adaptability, relationships and—above all—the ability to execute.
              </p>
              <p className="font-medium text-slate-900">
                India Business Clinic exists to help make that happen.
              </p>
              <p>
                We bring together <strong>competence, credibility and track record</strong> with a flexible, modular model that can move from <strong>Advice to Handholding to Execution</strong>.
              </p>
              <p>
                Because ultimately, our clients do not need more advice.
              </p>

              {/* Punchline Callout */}
              <div className="py-4 text-center">
                <div className="inline-block p-6 sm:px-12 bg-gradient-to-r from-[#0C1D4A] to-[#163580] text-white rounded-xl shadow-lg">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold tracking-tight text-amber-400 block mb-2">
                    They need results.
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-sans tracking-wide">
                    And that is where India Business Clinic intends to make the difference.
                  </span>
                </div>
              </div>
            </section>

            {/* Advisory CTA Card */}
            <div className="mt-12 p-6 sm:p-8 bg-[#0C1D4A] text-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  Translate Strategy Into Delivery
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Ready to Discuss Your India Journey?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Connect with Col Sanjay Chandra and the India Business Clinic team for an executive dialogue on market entry, partner due diligence, or operational handholding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/services/india-entry-support-foreign-industry/scorecard"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider text-center"
                >
                  <span>Readiness Scorecard</span>
                </Link>
                <a
                  href="https://wa.me/919560714343?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20expert%20at%20Business%20Clinic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider shadow-md text-center"
                >
                  <span>Talk to an Expert (+91 9560714343)</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Running Footer for print / document feel */}
          <footer className="mt-16 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <div>
              <p className="font-semibold text-slate-700">India Business Clinic</p>
              <p>From Advice to Delivery | The India Business Clinic Model</p>
            </div>
            <div className="text-right sm:text-right text-slate-400">
              <p>Confidential &amp; Proprietary</p>
              <p>© {new Date().getFullYear()} Business Clinic. All rights reserved.</p>
            </div>
          </footer>

        </article>

      </div>
    </div>
  );
}
