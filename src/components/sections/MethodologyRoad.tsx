"use client"

import React, { useState } from "react";
import {
  Globe,
  Building,
  FileCheck2,
  TrendingUp,
  Search,
  Target,
  Lightbulb,
  Cog,
  LineChart,
  ShieldCheck,
  ChevronRight,
  X,
  Sparkles,
  ArrowRight,
  Factory
} from "lucide-react";

export default function App() {
  const [activeStepModal, setActiveStepModal] = useState<any>(null);

  const globalMethodology = [
    {
      step: "01",
      code: "ENTER",
      title: "Ascertain Market Potential & Prepare Sales Roadmap",
      desc: "Ascertain Market Potential & Prepare Sales Roadmap",
      icon: Globe,
      color: "gold",
      description: "",
      methodology: "Ascertain Market Potential & Prepare Sales Roadmap",
    },
    {
      step: "02",
      code: "ESTABLISH",
      title: "Create Infrastructure & Firm-up Supply Chain Management",
      desc: "Finalize Business Plan",
      icon: Building,
      color: "gold",
      description: "Create Infrastructure & Firm-up Supply Chain Management",
      methodology: "Finalize Business Plan",
    },
    {
      step: "03",
      code: "ENABLE",
      title: "Populate, Orderbook, Commence Supply",
      desc: "Customer Engagement & Feedback",
      icon: FileCheck2,
      color: "gold",
      description: "Populate, Orderbook, Commence Supply",
      methodology: "Customer Engagement & Feedback",
    },
    {
      step: "04",
      code: "EXPAND",
      title: "Business Development Growth & Pipeline for future projects",
      desc: "Risk Mitigation & Diversification",
      icon: TrendingUp,
      color: "gold",
      description: "Business Development Growth & Pipeline for future projects",
      methodology: "Risk Mitigation & Diversification",
    },
  ];

  const msmeMethodology = [
    {
      step: "01",
      code: "DETECT",
      title: "Operational Audit",
      desc: "Understanding organization & business framework",
      icon: Search,
      color: "navy",
      description: "Operational Audit",
      methodology: "Understanding organization & business framework",
    },
    {
      step: "02",
      code: "DIAGNOSE",
      title: "Identify Weak Components & Process Failure",
      desc: "Identify Weak components & process failure",
      icon: Target,
      color: "navy",
      description: "",
      methodology: "Identify Weak components & process failure",
    },
    {
      step: "03",
      code: "DESIGN",
      title: "Prepare Solutions for Repair & Recovery",
      desc: "Prepare Solutions for Repair & Recovery",
      icon: Lightbulb,
      color: "navy",
      description: "",
      methodology: "Prepare Solutions for Repair & Recovery",
    },
    {
      step: "04",
      code: "DEPLOY",
      title: "Implementation Action Plan",
      desc: "Implementation Action Plan",
      icon: Cog,
      color: "navy",
      description: "",
      methodology: "Implementation Action Plan",
    },
    {
      step: "05",
      code: "DELIVER",
      title: "Performance Validation & Optimization",
      desc: "Measure Results & Ensure Sustainable Performance",
      icon: LineChart,
      color: "navy",
      description: "Performance Validation & Optimization",
      methodology: "Measure Results & Ensure Sustainable Performance",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased py-10 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#D98A10] selection:text-white">
      
      {}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0C1D4A_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D98A10]/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#0C1D4A]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-14">
        
        {}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 px-2">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-[#D98A10]/40 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] animate-pulse"></span>
            <span className="text-sm sm:text-xs font-bold tracking-[0.2em] text-[#D98A10] uppercase">
              OUR METHODOLOGY
            </span>
          </div>

          {/* Main Title Heading (NO FULL STOPS) */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight">
            Proven Execution Frameworks <br />
            <span className="text-[#D98A10] font-serif block mt-1">Measurable Industrial Impact</span>
          </h2>

          {/* Subtitle Description (NO FULL STOPS) */}
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Structured, end-to-end roadmaps designed for seamless India entry and manufacturing turnaround
          </p>
        </div>

        {}
        <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
          
          {/* ==========================================
              CONTAINER 1: GLOBAL ENTERPRISES: 4E METHODOLOGY
             ========================================== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 flex flex-col items-center transition-all hover:shadow-xl">
            
            {/* Top Center Pill Header Badge */}
            <div className="inline-flex bg-[#0C1D4A] text-white px-5 sm:px-7 py-2 rounded-full shadow-md border border-[#D98A10]/50 items-center space-x-2.5 mb-8 sm:mb-10 whitespace-nowrap">
              <Globe className="w-4 h-4 text-[#D98A10]" />
              <span className="text-sm sm:text-base font-bold tracking-widest uppercase">
                GLOBAL ENTERPRISES: 4E METHODOLOGY
              </span>
            </div>

            {/* 4E Grid Flow */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-2 relative items-start">
              {globalMethodology.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === globalMethodology.length - 1;

                return (
                  <div key={item.step} className="relative flex flex-col items-center text-center group px-2">
                    
                    {/* Top Step Code Badge */}
                    <div className="flex items-center space-x-1 mb-3">
                      <span className="text-sm sm:text-base font-bold text-[#D98A10]">{item.step}</span>
                      <span className="text-slate-300 font-light">|</span>
                      <span className="text-sm sm:text-base font-serif font-bold text-[#0C1D4A] tracking-wider">
                        {item.code}
                      </span>
                    </div>

                    {/* Circular Arc Icon Badge Container */}
                    <div className="relative mb-3.5">
                      {/* Outer Gold Arc Emblem Ring */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-transparent border-t-[#D98A10] border-r-[#D98A10] p-1.5 flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500 bg-white shadow-md">
                        <div className="w-full h-full rounded-full border border-slate-200 bg-white flex items-center justify-center p-3 -rotate-45 group-hover:-rotate-180 transition-transform duration-500">
                          <Icon className="w-7 h-7 text-[#0C1D4A] group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Stage Title & Short Subtitle */}
                    <div className="space-y-1 max-w-[190px]">
                      {item.description ? (
                        <>
                          <h4 className="font-bold text-sm sm:text-base text-[#0C1D4A] leading-snug">
                            {item.description}
                          </h4>
                          <p className="text-sm sm:text-xs text-slate-500 leading-tight">
                            {item.methodology}
                          </p>
                        </>
                      ) : (
                        <h4 className="font-bold text-sm sm:text-base text-[#0C1D4A] leading-snug">
                          {item.methodology}
                        </h4>
                      )}
                    </div>

                    {/* Interactive Clickable Info Trigger */}
                    <button
                      onClick={() => setActiveStepModal(item)}
                      className="mt-3 text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] inline-flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Explore Stage</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>

                    {/* Connector Arrow for Desktop Layout */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute top-16 -right-5 transform -translate-y-1/2 z-10 items-center justify-center text-[#D98A10]">
                        <svg className="w-8 h-8 text-[#D98A10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

          {/* ==========================================
              CONTAINER 2: INDIAN MSMEs: 5D METHODOLOGY
             ========================================== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 flex flex-col items-center transition-all hover:shadow-xl">
            
            {/* Top Center Pill Header Badge */}
            <div className="inline-flex bg-[#0C1D4A] text-white px-5 sm:px-7 py-2 rounded-full shadow-md border border-[#D98A10]/50 items-center space-x-2.5 mb-8 sm:mb-10 whitespace-nowrap">
              <Factory className="w-4 h-4 text-[#D98A10]" />
              <span className="text-sm sm:text-base font-bold tracking-widest uppercase">
                INDIAN MSMEs: 5D METHODOLOGY
              </span>
            </div>

            {/* 5D Connected Step Flow */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-2 relative items-start">
              {msmeMethodology.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === msmeMethodology.length - 1;

                return (
                  <div key={item.step} className="relative flex flex-col items-center text-center group px-1">
                    
                    {/* Step Code Header */}
                    <div className="flex items-center space-x-1 mb-3">
                      <span className="text-sm sm:text-base font-bold text-[#0C1D4A]">{item.step}</span>
                      <span className="text-slate-300 font-light">|</span>
                      <span className="text-sm sm:text-base font-serif font-bold text-[#0C1D4A] tracking-wider">
                        {item.code}
                      </span>
                    </div>

                    {/* Circular Arc Badge Container with Dark Blue Arc */}
                    <div className="relative mb-3.5">
                      {/* Outer Navy Blue Arc Emblem Ring */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-transparent border-t-[#0C1D4A] border-l-[#0C1D4A] p-1.5 flex items-center justify-center -rotate-45 group-hover:rotate-90 transition-transform duration-500 bg-white shadow-md">
                        <div className="w-full h-full rounded-full border border-slate-200 bg-white flex items-center justify-center p-3 rotate-45 group-hover:-rotate-90 transition-transform duration-500">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div className="space-y-1 max-w-[170px]">
                      {item.description ? (
                        <>
                          <p className="text-xs text-[#0C1D4A] font-bold leading-snug">
                            {item.description}
                          </p>
                          <p className="text-sm text-slate-500 font-medium leading-snug">
                            {item.methodology}
                          </p>
                        </>
                      ) : (
                        <p className="text-xs text-slate-600 font-medium leading-snug">
                          {item.methodology}
                        </p>
                      )}
                    </div>

                    {/* Interactive Clickable Info Trigger */}
                    <button
                      onClick={() => setActiveStepModal(item)}
                      className="mt-3 text-xs font-bold text-[#0C1D4A] hover:text-[#D98A10] inline-flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Explore Stage</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>

                    {/* Desktop Connector Line Nodes */}
                    {!isLast && (
                      <div className="hidden lg:block absolute top-[68px] left-[70%] w-[60%] h-[2px] bg-slate-200 -z-0">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0C1D4A] border border-white"></div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="relative bg-[#0C1D4A] border border-[#D98A10]/50 rounded-2xl sm:rounded-full p-3.5 sm:p-4 shadow-xl overflow-hidden flex items-center justify-center">
            
            {/* Background Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D98A10]/10 via-transparent to-[#D98A10]/10 pointer-events-none"></div>

            {/* Main Content Row */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 px-3">
              
              {/* Shield Emblem Icon */}
              <div className="w-10 h-10 rounded-full bg-[#D98A10] flex items-center justify-center text-white shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-[#0C1D4A]" />
              </div>

              {/* Commitment Banner Text */}
              <div className="text-sm sm:text-base font-semibold text-white tracking-wide leading-relaxed">
                <span className="font-bold text-white">From Diagnosis to Execution</span>
                <span className="mx-2 text-[#D98A10]">―</span>
                <span className="text-[#F3C06B] italic font-serif text-sm sm:text-base">
                  Constant support throughout the engagement and beyond
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {}
      {activeStepModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 space-y-5 text-slate-900">
            
            <button
              onClick={() => setActiveStepModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="p-3 rounded-2xl bg-[#0C1D4A] text-[#D98A10] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#D98A10] uppercase tracking-wider">Stage {activeStepModal.step}</span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0C1D4A]">
                  {activeStepModal.code}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {activeStepModal.description ? (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-[#0C1D4A] uppercase tracking-wider">Description</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {activeStepModal.description}
                  </p>
                </div>
              ) : null}

              {activeStepModal.methodology ? (
                <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#0C1D4A] uppercase tracking-wider">Methodology</h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {activeStepModal.methodology}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {activeStepModal.details}
                  </p>
                  <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-1">Methodology Objective</h4>
                    <p className="text-xs text-slate-700">
                      Deliver turnkey execution and risk-free transition throughout Stage {activeStepModal.step} with dedicated subject matter advisors.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStepModal(null)}
                  className="py-2.5 px-5 bg-[#0C1D4A] hover:bg-[#071230] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Close Stage View
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}