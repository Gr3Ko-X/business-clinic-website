"use client"

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  Building2,
  Cpu,
  Laptop,
  Zap,
  Settings,
  Globe,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Activity,
  Layers,
  Compass,
  TrendingUp,
  Award,
  Check,
  X,
  Compass as CompassIcon,
  Crosshair,
  MapPin,
  Shield,
  Briefcase,
  Sliders,
  FileCheck2,
  Lightbulb,
  Target
} from "lucide-react";

export default function App() {
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [assessmentType, setAssessmentType] = useState("india-entry");
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);

  const stats = [
    { value: "35+", label: "Years Experience", icon: Award },
    { value: "100+", label: "Projects Executed", icon: Layers },
    { value: "8+", label: "Industries Served", icon: Globe },
    { value: "Pan-India", label: "Operational Reach", icon: Compass },
  ];

  const whoWeServe = [
    { name: "Global Companies", icon: Globe, detail: "Market Entry & Expansion" },
    { name: "Indian Industry", icon: Building2, detail: "Operational Scaling" },
    { name: "Defence & Aerospace", icon: ShieldCheck, detail: "Licensing & ToT" },
    { name: "Homeland Security", icon: Shield, detail: "Security Systems" },
    { name: "Electronics and Semiconductors", icon: Cpu, detail: "High-Tech Manufacturing" },
    { name: "Software & Cyber Security", icon: Laptop, detail: "Secure Tech Systems" },
  ];

  const whyChooseCredentials = [
    "35+ years industrial experience",
    "Practical execution-oriented approach",
    "Defence and aerospace exposure",
    "Technical + operational expertise",
    "India ecosystem understanding",
    "Documentation and validation capabilities",
    "Led by Col Sanjay Chandra (Retd)",
  ];

  const handleOpenAssessment = (type: string) => {
    setAssessmentType(type);
    setAssessmentStep(1);
    setAssessmentCompleted(false);
    setShowAssessmentModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] via-[#F3F6FA] to-[#EBF0F7] text-slate-800 font-sans antialiased selection:bg-[#D98A10] selection:text-white">
      
      {}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        
        {/* Subtle Decorative Background Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0C1D4A_1.2px,transparent_1.2px)] [background-size:28px_28px]"></div>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#D98A10]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#0C1D4A]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 2-Column Grid: Left Text & Content / Right Modern Interactive Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              {/* Tagline Badge - Updated branding header */}
              <div className="inline-flex items-center space-x-2 bg-[#0C1D4A]/5 border border-[#0C1D4A]/15 px-3.5 py-1.5 rounded-full shadow-sm max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#D98A10] animate-pulse shrink-0"></span>
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0C1D4A] uppercase font-sans text-center">
                  India Entry Solutions &amp; Industrial Troubleshooting
                </span>
              </div>

              {/* 
                OLD HERO IMPLEMENTATION
                Preserved intentionally so it can be restored if the client
                rejects the new hero design.
                ============================================================
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0C1D4A] leading-[1.12]">
                  Industrial Expertise <br />
                  <span className="text-[#0C1D4A]">Strategic Guidance</span> <br />
                  <span className="text-[#D98A10]">Seamless Growth</span>
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#D98A10] to-[#E2A128] rounded-full mx-auto lg:mx-0"></div>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Empowering Indian MSMEs and Global Companies with execution-focused advisory and end-to-end support for sustainable industrial growth and successful market entry in India.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#D98A10] to-[#C47A08] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">...</a>
                  <button onClick={() => setShowConsultModal(true)} className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 border-2 border-[#0C1D4A] bg-white text-[#0C1D4A] font-bold px-8 py-4 rounded-xl transition-all duration-300">...</button>
                </div>
                <div className="pt-4 text-xs flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-slate-500">
                  <span className="font-semibold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-1.5">Interactive Tools:</span>
                  <button onClick={() => handleOpenAssessment('india-entry')}>India Entry Scorecard</button>
                  <button onClick={() => handleOpenAssessment('msme-health')}>Company Health Check</button>
                </div>
                ============================================================
              */}

              {/* NEW 2x2 CLINICS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 text-left">
                {/* 1. India Entry Clinic */}
                <Link
                  href="/services/india-entry-support-foreign-industry"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-50 text-[#D98A10] flex items-center justify-center border border-amber-100 group-hover:scale-105 transition-transform">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                      India Entry Clinic
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Helping foreign companies enter, establish and grow in India.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-[#D98A10] uppercase tracking-wider pt-2 sm:pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 2. Indian MSME Clinic */}
                <Link
                  href="/services/indian-msme-troubleshooting"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-50 text-[#0C1D4A] flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                      MSME Clinic
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Diagnosing and solving business and operational challenges of MSMEs.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-[#D98A10] uppercase tracking-wider pt-2 sm:pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 3. Defence & Aerospace Clinic */}
                <Link
                  href="/services/defence-aerospace-clinic"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-50 text-[#D98A10] flex items-center justify-center border border-amber-100 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                      Defence &amp; Aerospace Clinic
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Providing specialised industrial, technical and regulatory support to defence and aerospace companies.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-[#D98A10] uppercase tracking-wider pt-2 sm:pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 4. Support Clinic */}
                <Link
                  href="/services/legal-company-secretary-ca-services"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-50 text-[#0C1D4A] flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                      Support Clinic
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Providing technical documentation, audits, inspections and execution support.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-[#D98A10] uppercase tracking-wider pt-2 sm:pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Tagline placed below the new block */}
              <div className="text-center sm:text-left pt-6 pb-2 border-t border-slate-250/60 mt-6 max-w-2xl flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5">
                <span className="text-xs sm:text-xs uppercase tracking-[0.2em] font-bold text-[#0c1d4a]">Industrial Expertise</span>
                <span className="mx-2.5 text-[#D98A10] font-light">|</span>
                <span className="text-xs sm:text-xs uppercase tracking-[0.2em] font-bold text-[#0c1d4a]">Strategic Guidance</span>
                <span className="mx-2.5 text-[#D98A10] font-light">|</span>
                <span className="text-xs sm:text-xs uppercase tracking-[0.2em] font-bold text-[#D98A10]">Seamless Growth</span>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D98A10]/20 via-[#0C1D4A]/30 to-[#D98A10]/20 rounded-3xl blur-2xl opacity-60" />

              <div className="relative rounded-2xl sm:rounded-3xl bg-[#0C1D4A] border border-[#0C1D4A]/80 shadow-2xl overflow-hidden p-4 sm:p-7 space-y-3.5 sm:space-y-5 text-white">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/window.svg')] bg-no-repeat bg-center bg-cover" />

                <div className="relative z-10 space-y-3.5 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 sm:pb-4">
                    <div className="space-y-1.5 sm:space-y-2 min-w-0">
                      
                      <h3 className="font-serif font-bold text-lg sm:text-2xl text-white leading-tight">
                        Why Choose India Business Clinic?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Deep industrial competence with hands-on on-ground execution for operations in India.
                      </p>
                    </div>
          
                  </div>

                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2.5">
                    {whyChooseCredentials.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start space-x-2.5 sm:space-x-3 bg-white/5 border border-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <div className="bg-[#D98A10]/20 border border-[#D98A10]/30 rounded-md sm:rounded-lg p-1 shrink-0 mt-0.5">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#D98A10] stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/about#leadership-profile"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#D98A10] hover:bg-[#C47A08] text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg group"
                  >
                    <span>Leadership Profile</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
          {/* STATS ARE USED IN THE HERO2 */}
          <div className="mt-8 sm:mt-20 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center space-x-2 sm:space-x-4 p-1.5 sm:p-0"
                  >
                    <div className="p-1.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 text-[#D98A10] shrink-0 shadow-xs">
                      <StatIcon className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-3xl font-serif font-bold text-[#0C1D4A]">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-slate-500 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {}
          {/* <div className="mt-16 text-center space-y-6">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D98A10]"></span>
              <p className="text-xs uppercase tracking-widest text-[#0C1D4A] font-bold">
                Who We Serve
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D98A10]"></span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {whoWeServe.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-[#D98A10] hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-3 rounded-xl bg-slate-100 group-hover:bg-amber-50 text-[#0C1D4A] group-hover:text-[#D98A10] mb-2.5 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-center text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-500 text-center mt-1 font-medium">
                      {item.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div> */}

        </div>
      </section>

      {}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7 space-y-5 text-slate-900 animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setShowAssessmentModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#D98A10] border border-amber-200">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#0C1D4A]">
                  {assessmentType === 'india-entry' ? 'India Entry Readiness Scorecard' : 'MSME Company Health Check'}
                </h3>
                <p className="text-xs text-slate-500">Execution-focused preliminary diagnostic tool</p>
              </div>
            </div>

            {!assessmentCompleted ? (
              <div className="space-y-4">
                <p className="text-xs text-[#D98A10] font-bold uppercase tracking-wider">
                  Step {assessmentStep} of 2: Preliminary Questions
                </p>

                {assessmentStep === 1 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#0C1D4A]">
                      {assessmentType === 'india-entry' 
                        ? "What is your primary focus area for entering the Indian market?"
                        : "What is the primary bottleneck facing your plant operations?"}
                    </h4>

                    <div className="space-y-2">
                      {(assessmentType === 'india-entry' ? [
                        "Evaluating entry strategy & regulatory feasibility",
                        "Setting up local factory footprint & state compliance",
                        "Building local supply chain & vendor partners",
                        "Seeking single-window operational execution partner"
                      ] : [
                        "Low OEE, production delays & operational bottlenecks",
                        "Quality assurance gaps & vendor audit support",
                        "Lack of structured SOPs & organization capability",
                        "Growth & scale-up execution challenges"
                      ]).map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => setAssessmentStep(2)}
                          className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
                        >
                          <span>{option}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {assessmentStep === 2 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#0C1D4A]">
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
                          onClick={() => setAssessmentCompleted(true)}
                          className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
                        >
                          <span>{option}</span>
                          <Check className="w-4 h-4 text-[#D98A10]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 text-center py-2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-serif text-[#0C1D4A]">Assessment Captured!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Enter your business contact details to receive your customized advisory assessment report.
                </p>

                <div className="space-y-3 pt-2">
                  <input 
                    type="email" 
                    placeholder="Enter corporate email address..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
                  />
                  <button 
                    onClick={() => {
                      setShowAssessmentModal(false);
                    }}
                    className="w-full py-3.5 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl transition-all shadow-md"
                  >
                    Get Advisory Scorecard Report
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7 text-slate-900 space-y-5 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowConsultModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#D98A10] border border-amber-200">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#0C1D4A]">Schedule Advisory Consultation</h3>
                <p className="text-xs text-slate-500">Directly with Advisor Col Sanjay Chandra (Retd)</p>
              </div>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Global OEM / Indian MSME" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Corporate Email / Phone</label>
                <input 
                  type="text" 
                  placeholder="sanjay@indiabusinessclinic.com / +91 9560714343" 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Area of Engagement</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]">
                  <option>Foreign Enterprise India Market Entry</option>
                  <option>MSME Operational Troubleshooting &amp; OEE</option>
                  <option>Defence Industrial Licensing &amp; WPC Clearance</option>
                  <option>Offset Management &amp; ToT Advisory</option>
                </select>
              </div>

              <button 
                onClick={() => {
                  setShowConsultModal(false);
                }}
                className="w-full py-3.5 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl transition-all shadow-md mt-2"
              >
                Confirm Consultation Booking
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}