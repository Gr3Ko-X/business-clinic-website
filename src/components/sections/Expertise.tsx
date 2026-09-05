"use client"

import React, { useState } from "react";
import {
  Globe,
  Factory,
  ShieldCheck,
  ArrowRight,
  Map,
  UserPlus,
  Building2,
  FileCheck2,
  Activity,
  Target,
  TrendingUp,
  Users,
  FileText,
  Handshake,
  Radio,
  Sparkles,
  MapPin,
  Check,
  ChevronRight,
  X
} from "lucide-react";

export default function App() {
  const [showModal, setShowModal] = useState<string | null>(null);
  const [modalStep, setModalStep] = useState(1);
  const [modalCompleted, setModalCompleted] = useState(false);

  const cards = [
    {
      id: "india-entry",
      num: "01",
      title: "INDIA ENTRY",
      heading: "Enter India | Build Right | Grow",
      icon: Globe,
      accentColor: "#0C1D4A",
      tagBg: "bg-[#0C1D4A]",
      badgeBorder: "border-[#0C1D4A]",
      btnStyle: "bg-[#0C1D4A] hover:bg-[#071230] text-white shadow-lg shadow-[#0C1D4A]/20",
      bullets: [
        { label: "Strategy & Market Entry", icon: Globe },
        { label: "Business & Factory Setup", icon: Building2 },
        { label: "Regulatory Compliance & Approvals", icon: FileCheck2 },
      ],
      btnText: "India Entry Readiness Scorecard",
      btnLink: "#india-entry",
      subtext: "Assess your readiness to enter the Indian market.",
      watermarkType: "architecture"
    },
    {
      id: "msme-growth",
      num: "02",
      title: "MSME GROWTH",
      heading: "Diagnose | Resolve | Strengthen | Scale",
      icon: Factory,
      accentColor: "#D98A10",
      tagBg: "bg-[#D98A10]",
      badgeBorder: "border-[#D98A10]",
      btnStyle: "bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white shadow-lg shadow-[#D98A10]/25",
      bullets: [
        { label: "Health Assessment & Diagnostics", icon: Activity },
        { label: "Root-Cause Troubleshooting", icon: Target },
        { label: "Process & Capacity Scaling", icon: TrendingUp },
      ],
      btnText: "Company Health Check",
      btnLink: "#msme-growth",
      subtext: "Identify strengths, gaps and risks affecting your business.",
      watermarkType: "industrial"
    },
    {
      id: "defence-facilitation",
      num: "03",
      title: "DEFENCE FACILITATION",
      heading: "Navigate | Connect | Facilitate | Execute",
      icon: ShieldCheck,
      accentColor: "#0C1D4A",
      tagBg: "bg-[#0C1D4A]",
      badgeBorder: "border-[#D98A10]",
      btnStyle: "bg-[#0C1D4A]/90 hover:bg-[#0C1D4A] border border-[#D98A10]/60 text-white shadow-lg shadow-[#0C1D4A]/30 backdrop-blur-md",
      bullets: [
        { label: "Licensing & Regulatory Facilitation", icon: FileText },
        { label: "Partnerships & Localisation", icon: Handshake },
        { label: "WPC Clearance & RF Imports", icon: Radio },
      ],
      btnText: "Explore Our Defence Services",
      btnLink: "#defence-services",
      subtext: "Navigate India's strategic industrial regulatory systems.",
      watermarkType: "defence"
    },
  ];

  const bottomHighlights = [
    {
      title: "Global Reach.",
      desc: "Across borders, united by purpose.",
      icon: Globe,
      color: "bg-[#0C1D4A] text-[#D98A10]"
    },
    {
      title: "India Execution.",
      desc: "On-ground. On-time. On-point.",
      icon: MapPin,
      color: "bg-[#D98A10] text-white"
    },
    {
      title: "Trusted Partnerships.",
      desc: "Built on trust. Delivered with ownership.",
      icon: Handshake,
      color: "bg-[#0C1D4A] text-white"
    },
  ];

  const handleOpenTool = (cardId: string) => {
    setShowModal(cardId);
    setModalStep(1);
    setModalCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FAFC] via-[#F1F5F9] to-[#E2E8F0] text-slate-800 font-sans antialiased pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#D98A10] selection:text-white">
      
      {/* Background World Map Vector Overlay */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0C1D4A_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
      
      {/* Giant Decorative Light Logo Watermark "B" Top-Left */}
      <div className="absolute -top-10 -left-10 text-[180px] sm:text-[260px] font-serif font-black text-[#0C1D4A]/[0.03] select-none pointer-events-none leading-none">
        B
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 px-2">
          
          {/* Label with Gold Decorative Accents */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 justify-center">
            <span className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-[#D98A10]"></span>
            <span className="text-sm sm:text-xs font-bold tracking-[0.2em] text-[#D98A10] uppercase">
              OUR EXPERTISE
            </span>
            <span className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-[#D98A10]"></span>
          </div>

          {/* Main Display Headline updated with pipe separator */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight md:whitespace-nowrap">
            End-to-End Solutions <span className="text-[#D98A10] font-light mx-1 sm:mx-2.5">|</span> <span className="text-[#D98A10] italic font-serif inline-block">Measurable Impact</span>
          </h2>

          {/* Golden Underline Accent */}
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#D98A10] to-[#E2A128] rounded-full mx-auto my-2"></div>

          {/* Subtitle Paragraph */}
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed px-1">
            From India market entry to industrial growth and defence facilitation — <br className="hidden sm:inline" />
            we provide execution-focused advisory that delivers measurable output.
          </p>
        </div>

        {/* 3 Main Cards Grid - Fully Responsive */}
        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group"
              >
                {/* Header Content Area */}
                <div className="relative pt-5 sm:pt-7 px-4 sm:px-7 pb-3 sm:pb-4">
                  
                  {/* Top Header Row: Circle Emblem & Card Number */}
                  <div className="flex items-start justify-between relative z-10">
                    
                    {/* Circle Emblem Badge */}
                    <div className="relative">
                      {card.id === "india-entry" && (
                        <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#0C1D4A] to-[#061230] p-0.5 shadow-md flex items-center justify-center border-2 border-[#D98A10]">
                          <div className="w-full h-full rounded-full bg-[#0C1D4A] flex items-center justify-center text-[#D98A10]">
                            <Globe className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                          </div>
                        </div>
                      )}

                      {card.id === "msme-growth" && (
                        <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#D98A10] to-[#B37007] p-0.5 shadow-md flex items-center justify-center border-2 border-amber-200">
                          <div className="w-full h-full rounded-full bg-[#D98A10] flex items-center justify-center text-white">
                            <Factory className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                          </div>
                        </div>
                      )}

                      {card.id === "defence-facilitation" && (
                        <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#0C1D4A] to-[#061230] p-0.5 shadow-md flex items-center justify-center border-2 border-[#D98A10]">
                          <div className="w-full h-full rounded-full bg-[#0C1D4A] flex items-center justify-center text-[#D98A10]">
                            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step Number & Category Tag */}
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-1.5 text-xs font-bold text-[#D98A10]">
                        <span className="text-sm sm:text-base font-serif font-bold text-[#D98A10]">{card.num}</span>
                        <span className="w-3 sm:w-4 h-px bg-[#D98A10]"></span>
                      </div>
                      <span className="text-sm sm:text-base font-bold tracking-wider text-slate-500 uppercase font-sans">
                        {card.title}
                      </span>
                    </div>

                  </div>

                  {/* Card Title Headline with constant minimum height for horizontal alignment */}
                  <div className="min-h-[52px] sm:min-h-[64px] lg:min-h-[72px] flex items-end mt-4 sm:mt-5">
                    <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#0C1D4A] leading-snug">
                      {card.heading}
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-slate-100 my-3 sm:my-4"></div>

                  {/* Bullet Highlights Grid - 3-across in a single line */}
                  <div className="grid grid-cols-3 gap-3 pt-2 pb-2 sm:pb-4">
                    {card.bullets.map((bullet, idx) => {
                      const BulletIcon = bullet.icon;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center text-center space-y-2 sm:space-y-3 group/bullet p-1"
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#0C1D4A] group-hover/bullet:bg-amber-50 group-hover/bullet:border-[#D98A10] group-hover/bullet:text-[#D98A10] transition-all shadow-md group-hover/bullet:scale-105 duration-200">
                            <BulletIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                          </div>
                          <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug group-hover/bullet:text-accent transition-colors max-w-[120px]">
                            {bullet.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                  {/* Card Background Graphic Watermark Illustrations */}
                  <div className="relative flex-1 min-h-[90px] sm:min-h-[120px] flex items-end justify-center px-4 overflow-hidden">
                  
                  {card.watermarkType === "architecture" && (
                    <div className="w-full opacity-65 group-hover:opacity-85 transition-opacity flex justify-center pb-2">
                      <svg className="w-full h-16 sm:h-20 text-[#0C1D4A]" viewBox="0 0 300 80" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M10 75 L 30 75 L 30 40 L 50 40 L 50 75 L 70 75 L 70 30 L 90 20 L 110 30 L 110 75 L 130 75 M 150 75 L 170 75 L 170 15 L 200 15 L 200 75 M 220 75 L 240 75 L 240 45 L 270 45 L 270 75 L 290 75" />
                        <circle cx="185" cy="30" r="6" />
                        <path d="M 0 78 L 300 78" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                  {card.watermarkType === "industrial" && (
                    <div className="w-full opacity-70 group-hover:opacity-90 transition-opacity flex justify-center pb-2">
                      <svg className="w-full h-16 sm:h-20 text-[#D98A10]" viewBox="0 0 300 80" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M20 75 L 20 40 L 40 55 L 40 40 L 60 55 L 60 75 M 80 75 L 80 25 L 110 25 L 110 75 M 130 75 L 130 50 L 160 30 L 190 50 L 190 75 M 210 75 L 210 20 L 225 20 L 225 75 M 240 75 L 240 35 L 270 35 L 270 75" />
                        <circle cx="95" cy="45" r="12" strokeDasharray="3 3" />
                        <circle cx="175" cy="60" r="8" />
                        <path d="M 0 78 L 300 78" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                  {card.watermarkType === "defence" && (
                    <div className="w-full opacity-65 group-hover:opacity-85 transition-opacity flex justify-center pb-2">
                      <svg className="w-full h-16 sm:h-20 text-[#0C1D4A]" viewBox="0 0 300 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                        {/* Tank Outline */}
                        <path d="M20 65 L70 65 L73 57 L55 57 L48 45 L34 45 L30 57 L20 57 Z M16 68 L74 68 L74 72 L16 72 Z" />
                        <circle cx="27" cy="70" r="2.5" />
                        <circle cx="42" cy="70" r="2.5" />
                        <circle cx="57" cy="70" r="2.5" />
                        <path d="M45 45 L78 37" />

                        {/* Radar Outline */}
                        <path d="M140 75 L150 55 L160 75 Z" />
                        <path d="M150 55 A 15 15 0 0 1 165 40" />
                        <path d="M150 55 A 15 15 0 0 0 135 40" />
                        <line x1="150" y1="55" x2="150" y2="35" />

                        {/* Fighter Jet Outline */}
                        <path d="M220 55 L245 53 L265 45 L275 45 L268 53 L285 55 L268 57 L275 65 L265 65 L245 57 Z" />

                        {/* Ground Line */}
                        <path d="M 0 78 L 300 78" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                </div>

                {/* Card Button CTA Area */}
                <div className="p-4 sm:p-6 pt-2 relative z-10 space-y-2.5 sm:space-y-3 bg-white/90 backdrop-blur-xs">
                  <button
                    onClick={() => handleOpenTool(card.id)}
                    className={`w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer ${card.btnStyle}`}
                  >
                    <span className="text-center">{card.btnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </button>

                  <p className="text-center text-sm sm:text-base text-slate-500 font-medium leading-tight">
                    {card.subtext}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Horizontal Value Highlights Bar */}
        {}
        <div className="mt-8 sm:mt-12 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-lg p-4 sm:p-5 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {bottomHighlights.map((hl, idx) => {
              const HlIcon = hl.icon;
              return (
                <div
                  key={hl.title}
                  className={`flex items-center space-x-3.5 ${
                    idx > 0 ? "pt-3 md:pt-0 md:pl-6" : ""
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${hl.color} shadow-xs shrink-0`}>
                    <HlIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0C1D4A] tracking-tight">
                      {hl.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Interactive Tool Diagnostic Modal */}
      {}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 space-y-4 sm:space-y-5 text-slate-900 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-100 pb-3 sm:pb-4 pr-6">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-50 text-[#D98A10] border border-amber-200 shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#0C1D4A]">
                  {showModal === "india-entry" && "India Entry Readiness Scorecard"}
                  {showModal === "msme-growth" && "MSME Company Health Check"}
                  {showModal === "defence-facilitation" && "Defence Advisory Enquiry"}
                </h3>
                <p className="text-sm sm:text-xs text-slate-500">Business Clinic Interactive Diagnostic</p>
              </div>
            </div>

            {!modalCompleted ? (
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm text-[#D98A10] font-bold uppercase tracking-wider">
                  Step {modalStep} of 2: Preliminary Assessment
                </p>

                {modalStep === 1 && (
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-semibold text-[#0C1D4A]">
                      {showModal === "india-entry" && "What is your primary focus area for entering the Indian market?"}
                      {showModal === "msme-growth" && "What is the primary bottleneck currently facing your plant operations?"}
                      {showModal === "defence-facilitation" && "What specific defence regulatory support do you require?"}
                    </h4>

                    <div className="space-y-2">
                      {(showModal === "india-entry"
                        ? [
                            "Evaluating entry strategy & regulatory feasibility",
                            "Setting up local factory footprint & state compliance",
                            "Building local supply chain & vendor partners",
                            "Seeking single-window operational execution partner"
                          ]
                        : showModal === "msme-growth"
                        ? [
                            "Low OEE, production delays & operational bottlenecks",
                            "Quality assurance gaps & vendor audit support",
                            "Lack of structured SOPs & organization capability",
                            "Growth & scale-up execution challenges"
                          ]
                        : [
                            "Defence Industrial Licensing & regulatory clearances",
                            "Offset management & Transfer of Technology (ToT)",
                            "Indian industrial partnerships & indigenisation",
                            "WPC facilitation & RF equipment import clearances"
                          ]
                      ).map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalStep(2)}
                          className="w-full text-left p-3 sm:p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span className="pr-2">{option}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10] shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {modalStep === 2 && (
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-semibold text-[#0C1D4A]">
                      What is your intended timeline for advisory engagement?
                    </h4>

                    <div className="space-y-2">
                      {[
                        "Immediate (Within next 1-3 months)",
                        "Short Term (3-6 months)",
                        "Strategic Planning (6-12 months)",
                        "Exploring preliminary feasibility"
                      ].map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalCompleted(true)}
                          className="w-full text-left p-3 sm:p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span className="pr-2">{option}</span>
                          <Check className="w-4 h-4 text-[#D98A10] shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4 text-center py-2 sm:py-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <h4 className="text-base sm:text-lg font-bold font-serif text-[#0C1D4A]">Diagnostic Information Saved!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Enter your business contact email below to receive your customized advisory roadmap report.
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-2">
                  <input
                    type="email"
                    placeholder="Enter corporate email address..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
                  />
                  <button
                    onClick={() => setShowModal(null)}
                    className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Generate Diagnostic Roadmap Report
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}