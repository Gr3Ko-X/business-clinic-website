// "use client"

// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Calendar,
//   ShieldCheck,
//   Building2,
//   Cpu,
//   Zap,
//   Settings,
//   Globe,
//   Sparkles,
//   ChevronRight,
//   CheckCircle2,
//   Activity,
//   Layers,
//   Compass,
//   TrendingUp,
//   Award,
//   Check,
//   X,
//   Compass as CompassIcon,
//   Crosshair,
//   MapPin,
//   Shield,
//   Briefcase,
//   Sliders,
//   FileCheck2,
//   Lightbulb,
//   Target
// } from "lucide-react";

// export default function App() {
//   const [activePathway, setActivePathway] = useState<"india-entry" | "msme-growth" | "defence-ecosystem">("india-entry");
//   const [showAssessmentModal, setShowAssessmentModal] = useState(false);
//   const [assessmentType, setAssessmentType] = useState("india-entry");
//   const [assessmentStep, setAssessmentStep] = useState(1);
//   const [showConsultModal, setShowConsultModal] = useState(false);
//   const [assessmentCompleted, setAssessmentCompleted] = useState(false);

//   const stats = [
//     { value: "35+", label: "Years Experience", icon: Award },
//     { value: "100+", label: "Projects Executed", icon: Layers },
//     { value: "8+", label: "Industries Served", icon: Globe },
//     { value: "Pan-India", label: "Operational Presence", icon: Compass },
//   ];

//   const whoWeServe = [
//     { name: "Global Companies", icon: Globe, detail: "Market Entry & Expansion" },
//     { name: "Indian MSMEs", icon: Building2, detail: "Operational Scaling" },
//     { name: "Defence & Aerospace", icon: ShieldCheck, detail: "Licensing & ToT" },
//     { name: "Electronics & Semiconductors", icon: Cpu, detail: "High-Tech Manufacturing" },
//     { name: "Power & Energy", icon: Zap, detail: "Turnkey Power Systems" },
//     { name: "Industrial Manufacturing", icon: Settings, detail: "Plant Setup & Quality" },
//   ];

//   const pathways = {
//     "india-entry": {
//       tag: "GLOBAL ENTERPRISES",
//       title: "Foreign Company India Entry",
//       subtitle: "Enter. Build Right. Grow.",
//       icon: Globe,
//       accent: "#D98A10",
//       description: "End-to-end single-window facilitation for foreign OEMs launching in India.",
//       points: [
//         "India entry strategy & market feasibility assessment",
//         "Business setup, incorporation & team creation",
//         "Factory footprint setup & operational readiness",
//         "Regulatory compliance, approvals & WPC clearances",
//         "Local partnerships & strategic vendor development"
//       ],
//       ctaText: "Launch India Entry Scorecard",
//       ctaType: "scorecard",
//       stageSteps: ["Enter", "Establish", "Enable", "Expand"]
//     },
//     "msme-growth": {
//       tag: "INDIAN INDUSTRY & MSMES",
//       title: "MSME Growth & Troubleshooting",
//       subtitle: "Diagnose. Resolve. Strengthen. Scale.",
//       icon: Building2,
//       accent: "#0C1D4A",
//       description: "Targeted operational diagnosis, bottleneck resolution, and sustainable scaling.",
//       points: [
//         "Business & operational bottleneck diagnosis",
//         "Root-cause analysis & rapid troubleshooting",
//         "Process & OEE productivity improvement",
//         "Organisation & capability building with SOPs",
//         "Growth, scale-up & sustainable execution support"
//       ],
//       ctaText: "Take Company Health Check",
//       ctaType: "health-check",
//       stageSteps: ["Discover", "Diagnose", "Design", "Deploy", "Sustain"]
//     },
//     "defence-ecosystem": {
//       tag: "DEFENCE & STRATEGIC SECTORS",
//       title: "Defence & Industrial Facilitation",
//       subtitle: "Navigate. Connect. Facilitate. Execute.",
//       icon: ShieldCheck,
//       accent: "#D98A10",
//       description: "Specialized regulatory, licensing, and Transfer of Technology (ToT) advisory.",
//       points: [
//         "Defence Industrial Licensing & regulatory facilitation",
//         "Offset management & Transfer of Technology (ToT)",
//         "Indian industrial partnerships & indigenisation",
//         "WPC facilitation & RF equipment import clearances",
//         "Local support for trials, demos & exhibitions"
//       ],
//       ctaText: "Explore Defence Advisory",
//       ctaType: "consult",
//       stageSteps: ["Licensing", "ToT", "Localisation", "Execution"]
//     }
//   };

//   const handleOpenAssessment = (type: string) => {
//     setAssessmentType(type);
//     setAssessmentStep(1);
//     setAssessmentCompleted(false);
//     setShowAssessmentModal(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] via-[#F3F6FA] to-[#EBF0F7] text-slate-800 font-sans antialiased selection:bg-[#D98A10] selection:text-white">
      
//       {}
//       <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        
//         {/* Subtle Decorative Background Mesh Grid */}
//         <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0C1D4A_1.2px,transparent_1.2px)] [background-size:28px_28px]"></div>
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#D98A10]/10 rounded-full blur-[120px] pointer-events-none"></div>
//         <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#0C1D4A]/10 rounded-full blur-[120px] pointer-events-none"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           {/* Main 2-Column Grid: Left Text & Content / Right Modern Interactive Hub */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
//             {}
//             <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              
//               {/* Badge: India Entry Solutions FIRST */}
//               <div className="inline-flex items-center space-x-2 bg-[#0C1D4A]/5 border border-[#0C1D4A]/15 px-3.5 py-1.5 rounded-full shadow-sm">
//                 <span className="w-2 h-2 rounded-full bg-[#D98A10] animate-pulse"></span>
//                 <span className="text-xs font-bold tracking-wider text-[#0C1D4A] uppercase font-sans">
//                   INDIA ENTRY SOLUTIONS &amp; INDUSTRIAL ADVISORY
//                 </span>
//               </div>

//               {/* Headline */}
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0C1D4A] leading-[1.12]">
//                 Industrial Expertise <br />
//                 <span className="text-[#0C1D4A]">Strategic Guidance</span> <br />
//                 <span className="text-[#D98A10]">Seamless Growth</span>
//               </h1>

//               {/* Gold Line Accent */}
//               <div className="w-20 h-1.5 bg-gradient-to-r from-[#D98A10] to-[#E2A128] rounded-full mx-auto lg:mx-0"></div>

//               {/* Subtitle Paragraph */}
//               <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
//                 Empowering Indian MSMEs and Global Companies with execution-focused advisory and end-to-end support for sustainable industrial growth and successful market entry in India.
//               </p>

//               {/* Call to Action Buttons */}
//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
//                 <a
//                   href="#services"
//                   className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#D98A10]/25 hover:shadow-xl hover:shadow-[#D98A10]/35 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
//                 >
//                   <span>Explore Our Services</span>
//                   <ArrowRight className="h-4 w-4 stroke-[2.5]" />
//                 </a>

//                 <button
//                   onClick={() => setShowConsultModal(true)}
//                   className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 border-2 border-[#0C1D4A] bg-white hover:bg-[#0C1D4A] text-[#0C1D4A] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 group"
//                 >
//                   <Calendar className="h-4 w-4 text-[#D98A10] group-hover:text-amber-300 transition-colors" />
//                   <span>Schedule a Consultation</span>
//                 </button>
//               </div>

//               {/* Diagnostic Tools Quick Launch Pills */}
//               <div className="pt-4 text-xs flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-slate-500">
//                 <span className="font-semibold text-slate-700 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
//                   <Sparkles className="w-3.5 h-3.5 text-[#D98A10]" /> Interactive Tools:
//                 </span>
//                 <button
//                   onClick={() => handleOpenAssessment('india-entry')}
//                   className="px-3.5 py-1.5 rounded-full bg-white hover:bg-amber-50 border border-[#D98A10]/40 text-[#0C1D4A] font-semibold flex items-center space-x-1.5 shadow-sm transition-all hover:scale-105"
//                 >
//                   <Globe className="w-3.5 h-3.5 text-[#D98A10]" />
//                   <span>India Entry Scorecard</span>
//                   <ChevronRight className="w-3 h-3 text-[#D98A10]" />
//                 </button>
//                 <button
//                   onClick={() => handleOpenAssessment('msme-health')}
//                   className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blue-50 border border-[#0C1D4A]/30 text-[#0C1D4A] font-semibold flex items-center space-x-1.5 shadow-sm transition-all hover:scale-105"
//                 >
//                   <Activity className="w-3.5 h-3.5 text-[#0C1D4A]" />
//                   <span>Company Health Check</span>
//                   <ChevronRight className="w-3 h-3 text-[#0C1D4A]" />
//                 </button>
//               </div>

//             </div>

//             {}
//             <div className="lg:col-span-5 relative">
              
//               {/* Modern Ambient Soft Glow Overlay */}
//               <div className="absolute -inset-2 bg-gradient-to-tr from-[#D98A10]/20 via-[#0C1D4A]/30 to-[#D98A10]/20 rounded-3xl blur-2xl opacity-60"></div>

//               {/* Modern Glassmorphic Execution Canvas Container */}
//               <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl overflow-hidden p-6 sm:p-7 space-y-6">
                
//                 {/* Header Badge & Title */}
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-2xl bg-[#0C1D4A] flex items-center justify-center font-bold text-white text-base shadow-md border border-[#D98A10]/40">
//                       <Target className="w-5 h-5 text-[#D98A10]" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-bold text-[#0C1D4A] tracking-tight">
//                         Single-Window Execution Architecture
//                       </h3>
//                       <p className="text-[11px] text-slate-500">From Strategy through Operations &amp; Scaling</p>
//                     </div>
//                   </div>
//                   <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-[#D98A10] border border-[#D98A10]/30 flex items-center space-x-1">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] animate-ping"></span>
//                     <span>35+ YRS EXP</span>
//                   </span>
//                 </div>

//                 {/* Interactive Pillar Selector Tabs */}
//                 <div className="grid grid-cols-3 gap-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80">
//                   <button
//                     onClick={() => setActivePathway("india-entry")}
//                     className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
//                       activePathway === "india-entry"
//                         ? "bg-[#0C1D4A] text-white shadow-md"
//                         : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
//                     }`}
//                   >
//                     <Globe className={`w-3.5 h-3.5 ${activePathway === "india-entry" ? "text-[#D98A10]" : "text-slate-500"}`} />
//                     <span>India Entry</span>
//                   </button>

//                   <button
//                     onClick={() => setActivePathway("msme-growth")}
//                     className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
//                       activePathway === "msme-growth"
//                         ? "bg-[#0C1D4A] text-white shadow-md"
//                         : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
//                     }`}
//                   >
//                     <Building2 className={`w-3.5 h-3.5 ${activePathway === "msme-growth" ? "text-[#D98A10]" : "text-slate-500"}`} />
//                     <span>MSME Scale</span>
//                   </button>

//                   <button
//                     onClick={() => setActivePathway("defence-ecosystem")}
//                     className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
//                       activePathway === "defence-ecosystem"
//                         ? "bg-[#0C1D4A] text-white shadow-md"
//                         : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
//                     }`}
//                   >
//                     <ShieldCheck className={`w-3.5 h-3.5 ${activePathway === "defence-ecosystem" ? "text-[#D98A10]" : "text-slate-500"}`} />
//                     <span>Defence</span>
//                   </button>
//                 </div>

//                 {/* Active Pathway Content Card */}
//                 {(() => {
//                   const p = pathways[activePathway];
//                   const IconComp = p.icon;
//                   return (
//                     <div className="space-y-4 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 p-5 rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <span className="text-[10px] font-bold uppercase tracking-wider text-[#D98A10] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80 inline-block mb-1.5">
//                             {p.tag}
//                           </span>
//                           <h4 className="font-serif font-bold text-lg text-[#0C1D4A]">
//                             {p.title}
//                           </h4>
//                           <p className="text-xs text-slate-500 font-serif italic mt-0.5">
//                             "{p.subtitle}"
//                           </p>
//                         </div>
//                         <div className="p-2.5 rounded-xl bg-[#0C1D4A]/5 border border-[#0C1D4A]/10 text-[#0C1D4A]">
//                           <IconComp className="w-5 h-5 text-[#D98A10]" />
//                         </div>
//                       </div>

//                       {/* Execution Steps Flow Pills */}
//                       <div className="space-y-1.5 pt-1">
//                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
//                           Execution Methodology Roadmap:
//                         </p>
//                         <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px]">
//                           {p.stageSteps.map((step: string, idx: number) => (
//                             <React.Fragment key={idx}>
//                               <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0C1D4A] font-semibold whitespace-nowrap shadow-2xs">
//                                 {step}
//                               </span>
//                               {idx < p.stageSteps.length - 1 && (
//                                 <ChevronRight className="w-3 h-3 text-[#D98A10] shrink-0" />
//                               )}
//                             </React.Fragment>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Core Scope Checkpoints */}
//                       <ul className="space-y-2 pt-1 border-t border-slate-200/60">
//                         {p.points.map((point: string, idx: number) => (
//                           <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
//                             <span className="w-4 h-4 rounded-full bg-[#D98A10]/15 text-[#D98A10] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
//                               ✓
//                             </span>
//                             <span className="font-medium">{point}</span>
//                           </li>
//                         ))}
//                       </ul>

//                       {/* Dynamic CTA Button */}
//                       <div className="pt-2">
//                         {p.ctaType === 'scorecard' && (
//                           <button
//                             onClick={() => handleOpenAssessment('india-entry')}
//                             className="w-full py-3 px-4 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 group"
//                           >
//                             <Sparkles className="w-4 h-4" />
//                             <span>{p.ctaText}</span>
//                             <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                           </button>
//                         )}

//                         {p.ctaType === 'health-check' && (
//                           <button
//                             onClick={() => handleOpenAssessment('msme-health')}
//                             className="w-full py-3 px-4 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 group"
//                           >
//                             <Activity className="w-4 h-4 text-[#D98A10]" />
//                             <span>{p.ctaText}</span>
//                             <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                           </button>
//                         )}

//                         {p.ctaType === 'consult' && (
//                           <button
//                             onClick={() => setShowConsultModal(true)}
//                             className="w-full py-3 px-4 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 border border-[#D98A10]/40 group"
//                           >
//                             <ShieldCheck className="w-4 h-4 text-[#D98A10]" />
//                             <span>{p.ctaText}</span>
//                             <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })()}

//                 {/* Single Window Execution Guarantee Tag */}
//                 <div className="bg-[#0C1D4A]/5 border border-[#0C1D4A]/10 p-3 rounded-xl flex items-center space-x-3">
//                   <div className="p-1.5 rounded-lg bg-[#0C1D4A] text-white shrink-0">
//                     <CheckCircle2 className="w-4 h-4 text-[#D98A10]" />
//                   </div>
//                   <p className="text-[11px] text-slate-700 font-medium leading-snug">
//                     <span className="font-bold text-[#0C1D4A]">Single-Window Guarantee:</span> We don't just provide advisory — we deploy hands-on support until operations are fully established and delivering results.
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>

//           {}
//           <div className="mt-16 sm:mt-20 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-8">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
//               {stats.map((stat, idx) => {
//                 const StatIcon = stat.icon;
//                 return (
//                   <div
//                     key={stat.label}
//                     className={`flex items-center space-x-4 ${
//                       idx > 0 ? "pt-6 lg:pt-0 lg:pl-6" : ""
//                     }`}
//                   >
//                     <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[#D98A10] shrink-0 shadow-xs">
//                       <StatIcon className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <p className="text-3xl font-serif font-bold text-[#0C1D4A]">
//                         {stat.value}
//                       </p>
//                       <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-0.5">
//                         {stat.label}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {}
//           <div className="mt-16 text-center space-y-6">
//             <div className="inline-flex items-center space-x-3">
//               <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D98A10]"></span>
//               <p className="text-xs uppercase tracking-widest text-[#0C1D4A] font-bold">
//                 Who We Serve
//               </p>
//               <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D98A10]"></span>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//               {whoWeServe.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={item.name}
//                     className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-[#D98A10] hover:shadow-lg transition-all duration-300 group cursor-pointer"
//                   >
//                     <div className="p-3 rounded-xl bg-slate-100 group-hover:bg-amber-50 text-[#0C1D4A] group-hover:text-[#D98A10] mb-2.5 transition-colors">
//                       <Icon className="h-5 w-5" />
//                     </div>
//                     <span className="text-xs font-bold text-center text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors">
//                       {item.name}
//                     </span>
//                     <span className="text-[10px] text-slate-500 text-center mt-1 font-medium">
//                       {item.detail}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </section>

//       {}
//       {showAssessmentModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
//           <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7 space-y-5 text-slate-900 animate-in fade-in zoom-in duration-200">
            
//             <button 
//               onClick={() => setShowAssessmentModal(false)}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
//               <div className="p-2.5 rounded-xl bg-amber-50 text-[#D98A10] border border-amber-200">
//                 <Sparkles className="w-5 h-5" />
//               </div>
//               <div>
//                 <h3 className="font-serif font-bold text-lg text-[#0C1D4A]">
//                   {assessmentType === 'india-entry' ? 'India Entry Readiness Scorecard' : 'MSME Company Health Check'}
//                 </h3>
//                 <p className="text-xs text-slate-500">Execution-focused preliminary diagnostic tool</p>
//               </div>
//             </div>

//             {!assessmentCompleted ? (
//               <div className="space-y-4">
//                 <p className="text-xs text-[#D98A10] font-bold uppercase tracking-wider">
//                   Step {assessmentStep} of 2: Preliminary Questions
//                 </p>

//                 {assessmentStep === 1 && (
//                   <div className="space-y-3">
//                     <h4 className="text-sm font-semibold text-[#0C1D4A]">
//                       {assessmentType === 'india-entry' 
//                         ? "What is your primary focus area for entering the Indian market?"
//                         : "What is the primary bottleneck facing your plant operations?"}
//                     </h4>

//                     <div className="space-y-2">
//                       {(assessmentType === 'india-entry' ? [
//                         "Evaluating entry strategy & regulatory feasibility",
//                         "Setting up local factory footprint & state compliance",
//                         "Building local supply chain & vendor partners",
//                         "Seeking single-window operational execution partner"
//                       ] : [
//                         "Low OEE, production delays & operational bottlenecks",
//                         "Quality assurance gaps & vendor audit support",
//                         "Lack of structured SOPs & organization capability",
//                         "Growth & scale-up execution challenges"
//                       ]).map((option, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => setAssessmentStep(2)}
//                           className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
//                         >
//                           <span>{option}</span>
//                           <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#D98A10]" />
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {assessmentStep === 2 && (
//                   <div className="space-y-3">
//                     <h4 className="text-sm font-semibold text-[#0C1D4A]">
//                       What is your intended timeline for advisory engagement?
//                     </h4>

//                     <div className="space-y-2">
//                       {[
//                         "Immediate (Within next 1-3 months)",
//                         "Short Term (3-6 months)",
//                         "Strategic Planning (6-12 months)",
//                         "Exploring preliminary feasibility"
//                       ].map((option, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => setAssessmentCompleted(true)}
//                           className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-[#D98A10] text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
//                         >
//                           <span>{option}</span>
//                           <Check className="w-4 h-4 text-[#D98A10]" />
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="space-y-4 text-center py-2">
//                 <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
//                   <CheckCircle2 className="w-6 h-6" />
//                 </div>
//                 <h4 className="text-lg font-bold font-serif text-[#0C1D4A]">Assessment Captured!</h4>
//                 <p className="text-xs text-slate-600 max-w-sm mx-auto">
//                   Enter your business contact details to receive your customized advisory assessment report.
//                 </p>

//                 <div className="space-y-3 pt-2">
//                   <input 
//                     type="email" 
//                     placeholder="Enter corporate email address..." 
//                     className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
//                   />
//                   <button 
//                     onClick={() => {
//                       setShowAssessmentModal(false);
//                     }}
//                     className="w-full py-3.5 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl transition-all shadow-md"
//                   >
//                     Get Advisory Scorecard Report
//                   </button>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>
//       )}

//       {}
//       {showConsultModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
//           <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7 text-slate-900 space-y-5 animate-in fade-in zoom-in duration-200">
//             <button 
//               onClick={() => setShowConsultModal(false)}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
//               <div className="p-2.5 rounded-xl bg-amber-50 text-[#D98A10] border border-amber-200">
//                 <Calendar className="w-5 h-5" />
//               </div>
//               <div>
//                 <h3 className="font-serif font-bold text-base text-[#0C1D4A]">Schedule Advisory Consultation</h3>
//                 <p className="text-xs text-slate-500">Directly with Advisor Col Sanjay Chandra (Retd)</p>
//               </div>
//             </div>

//             <div className="space-y-3.5">
//               <div>
//                 <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization Name</label>
//                 <input 
//                   type="text" 
//                   placeholder="e.g. Global OEM / Indian MSME" 
//                   className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-bold text-slate-700 block mb-1">Corporate Email / Phone</label>
//                 <input 
//                   type="text" 
//                   placeholder="indiabusinessclinic@gmail.com / +91 9560714343" 
//                   className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-bold text-slate-700 block mb-1">Area of Engagement</label>
//                 <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#D98A10]">
//                   <option>Foreign Enterprise India Market Entry</option>
//                   <option>MSME Operational Troubleshooting &amp; OEE</option>
//                   <option>Defence Industrial Licensing &amp; WPC Clearance</option>
//                   <option>Offset Management &amp; ToT Advisory</option>
//                 </select>
//               </div>

//               <button 
//                 onClick={() => {
//                   setShowConsultModal(false);
//                 }}
//                 className="w-full py-3.5 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl transition-all shadow-md mt-2"
//               >
//                 Confirm Consultation Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }




































"use client"

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  Building2,
  Cpu,
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
  const [activePathway, setActivePathway] = useState<"india-entry" | "msme-growth" | "defence-ecosystem">("india-entry");
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
    { name: "Power & Renewable Energy", icon: Zap, detail: "Turnkey Power Systems" },
    { name: "Software & Cyber Security", icon: Cpu, detail: "Secure Tech Systems" },
  ];

  const pathways = {
    "india-entry": {
      tag: "GLOBAL ENTERPRISES",
      title: "Foreign Company India Entry",
      subtitle: "Enter. Build Right. Grow.",
      icon: Globe,
      accent: "#D98A10",
      description: "End-to-end single-window facilitation for foreign OEMs launching in India.",
      points: [
        "India entry strategy & market feasibility assessment",
        "Business setup, incorporation & team creation",
        "Factory footprint setup & operational readiness",
        "Regulatory compliance, approvals & WPC clearances",
        "Local partnerships & strategic vendor development"
      ],
      ctaText: "Launch India Entry Scorecard",
      ctaType: "scorecard",
      stageSteps: ["Enter", "Establish", "Enable", "Expand"]
    },
    "msme-growth": {
      tag: "INDIAN INDUSTRY & MSMES",
      title: "MSME Growth & Troubleshooting",
      subtitle: "Diagnose. Resolve. Strengthen. Scale.",
      icon: Building2,
      accent: "#0C1D4A",
      description: "Targeted operational diagnosis, bottleneck resolution, and sustainable scaling.",
      points: [
        "Business & operational bottleneck diagnosis",
        "Root-cause analysis & rapid troubleshooting",
        "Process & OEE productivity improvement",
        "Organisation & capability building with SOPs",
        "Growth, scale-up & sustainable execution support"
      ],
      ctaText: "Take Company Health Check",
      ctaType: "health-check",
      stageSteps: ["Discover", "Diagnose", "Design", "Deploy", "Sustain"]
    },
    "defence-ecosystem": {
      tag: "DEFENCE & STRATEGIC SECTORS",
      title: "Defence & Industrial Facilitation",
      subtitle: "Navigate. Connect. Facilitate. Execute.",
      icon: ShieldCheck,
      accent: "#D98A10",
      description: "Specialized regulatory, licensing, and Transfer of Technology (ToT) advisory.",
      points: [
        "Defence Industrial Licensing & regulatory facilitation",
        "Offset management & Transfer of Technology (ToT)",
        "Indian industrial partnerships & indigenisation",
        "WPC facilitation & RF equipment import clearances",
        "Local support for trials, demos & exhibitions"
      ],
      ctaText: "Explore Defence Advisory",
      ctaType: "consult",
      stageSteps: ["Licensing", "ToT", "Localisation", "Execution"]
    }
  };

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
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#0C1D4A] uppercase font-sans truncate">
                  India Entry Solutions &amp; Industrial Troubleshooting: A Division of Spuntech Solutions Pvt Ltd
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
                  <span className="font-semibold text-slate-700 uppercase tracking-wider text-[11px] flex items-center gap-1.5">Interactive Tools:</span>
                  <button onClick={() => handleOpenAssessment('india-entry')}>India Entry Scorecard</button>
                  <button onClick={() => handleOpenAssessment('msme-health')}>Company Health Check</button>
                </div>
                ============================================================
              */}

              {/* NEW 2x2 CLINICS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
                {/* 1. India Entry Clinic */}
                <Link
                  href="/services/india-entry-support-foreign-industry"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-5 rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D98A10] flex items-center justify-center border border-amber-100 group-hover:scale-105 transition-transform">
                      <Globe className="h-5 w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                      India Entry Clinic
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Single-window setup, company incorporation, factory land identification, and regulatory clearances for foreign industry.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-[#D98A10] uppercase tracking-wider pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 2. Indian MSME Clinic */}
                <Link
                  href="/services/indian-msme-troubleshooting"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-5 rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0C1D4A] flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                      <Building2 className="h-5 w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                      Indian MSME Clinic
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Root-cause diagnostics, production troubleshooting, OEE maximization, and capacity scaling.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-[#D98A10] uppercase tracking-wider pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 3. Defence & Aerospace Clinic */}
                <Link
                  href="/services/defence-aerospace-clinic"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-5 rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D98A10] flex items-center justify-center border border-amber-100 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="h-5 w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                      Defence &amp; Aerospace Clinic
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Defence licensing, offset advisory, Technology Transfer (ToT), WPC frequency clearance, and military trials facilitation.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-[#D98A10] uppercase tracking-wider pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {/* 4. Support Clinic */}
                <Link
                  href="/services/legal-company-secretary-ca-services"
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[#D98A10] hover:shadow-lg p-5 rounded-2xl transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0C1D4A] flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                      <Briefcase className="h-5 w-5 stroke-[2]" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                      Support Clinic
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      Legal and secretarial compliance, invoicing, corporate tax secretarial, HR &amp; payroll support.
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {["Legal Advisor", "Finance Expert", "Industrial Architect", "HR Consultant", "Compliance Specialist", "Admin & Logistics"].map((s) => (
                        <span key={s} className="text-[8.5px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-[#D98A10] uppercase tracking-wider pt-3">
                    <span>Explore Clinic</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Tagline placed below the new block */}
              <div className="text-center sm:text-left pt-6 pb-2 border-t border-slate-250/60 mt-6 max-w-2xl flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#0c1d4a]">Industrial Expertise</span>
                <span className="mx-2.5 text-[#D98A10] font-light">|</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#0c1d4a]">Strategic Guidance</span>
                <span className="mx-2.5 text-[#D98A10] font-light">|</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#D98A10]">Seamless Growth</span>
              </div>

            </div>

            {}
            <div className="lg:col-span-5 relative">
              
              {/* Modern Ambient Soft Glow Overlay */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D98A10]/20 via-[#0C1D4A]/30 to-[#D98A10]/20 rounded-3xl blur-2xl opacity-60"></div>

              {/* Modern Glassmorphic Execution Canvas Container */}
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl overflow-hidden p-6 sm:p-7 space-y-6">
                
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#0C1D4A] flex items-center justify-center font-bold text-white text-base shadow-md border border-[#D98A10]/40">
                      <Target className="w-5 h-5 text-[#D98A10]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C1D4A] tracking-tight">
                        Single-Window Execution Architecture
                      </h3>
                      <p className="text-[11px] text-slate-500">From Strategy through Operations &amp; Scaling</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-[#D98A10] border border-[#D98A10]/30 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] animate-ping"></span>
                    <span>35+ YRS EXP</span>
                  </span>
                </div>

                {/* Interactive Pillar Selector Tabs */}
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80">
                  <button
                    onClick={() => setActivePathway("india-entry")}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      activePathway === "india-entry"
                        ? "bg-[#0C1D4A] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Globe className={`w-3.5 h-3.5 ${activePathway === "india-entry" ? "text-[#D98A10]" : "text-slate-500"}`} />
                    <span>India Entry</span>
                  </button>

                  <button
                    onClick={() => setActivePathway("msme-growth")}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      activePathway === "msme-growth"
                        ? "bg-[#0C1D4A] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Building2 className={`w-3.5 h-3.5 ${activePathway === "msme-growth" ? "text-[#D98A10]" : "text-slate-500"}`} />
                    <span>MSME Scale</span>
                  </button>

                  <button
                    onClick={() => setActivePathway("defence-ecosystem")}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
                      activePathway === "defence-ecosystem"
                        ? "bg-[#0C1D4A] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <ShieldCheck className={`w-3.5 h-3.5 ${activePathway === "defence-ecosystem" ? "text-[#D98A10]" : "text-slate-500"}`} />
                    <span>Defence</span>
                  </button>
                </div>

                {/* Active Pathway Content Card */}
                {(() => {
                  const p = pathways[activePathway];
                  const IconComp = p.icon;
                  return (
                    <div className="space-y-4 bg-gradient-to-br from-slate-50 via-white to-amber-50/20 p-5 rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D98A10] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80 inline-block mb-1.5">
                            {p.tag}
                          </span>
                          <h4 className="font-serif font-bold text-lg text-[#0C1D4A]">
                            {p.title}
                          </h4>
                          <p className="text-xs text-slate-500 font-serif italic mt-0.5">
                            "{p.subtitle}"
                          </p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#0C1D4A]/5 border border-[#0C1D4A]/10 text-[#0C1D4A]">
                          <IconComp className="w-5 h-5 text-[#D98A10]" />
                        </div>
                      </div>

                      {/* Execution Steps Flow Pills */}
                      <div className="space-y-1.5 pt-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Execution Methodology Roadmap:
                        </p>
                        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px]">
                          {p.stageSteps.map((step: string, idx: number) => (
                            <React.Fragment key={idx}>
                              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0C1D4A] font-semibold whitespace-nowrap shadow-2xs">
                                {step}
                              </span>
                              {idx < p.stageSteps.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-[#D98A10] shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Core Scope Checkpoints */}
                      <ul className="space-y-2 pt-1 border-t border-slate-200/60">
                        {p.points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-[#D98A10]/15 text-[#D98A10] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                              ✓
                            </span>
                            <span className="font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Dynamic CTA Button */}
                      <div className="pt-2">
                        {p.ctaType === 'scorecard' && (
                          <button
                            onClick={() => handleOpenAssessment('india-entry')}
                            className="w-full py-3 px-4 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 group"
                          >
                            <Sparkles className="w-4 h-4" />
                            <span>{p.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}

                        {p.ctaType === 'health-check' && (
                          <Link
                            href="/services/indian-msme-troubleshooting/health-check"
                            className="w-full py-3 px-4 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 group"
                          >
                            <Activity className="w-4 h-4 text-[#D98A10]" />
                            <span>{p.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}

                        {p.ctaType === 'consult' && (
                          <button
                            onClick={() => setShowConsultModal(true)}
                            className="w-full py-3 px-4 bg-[#0C1D4A] hover:bg-[#071333] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 border border-[#D98A10]/40 group"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#D98A10]" />
                            <span>{p.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })()}

                {/* Single Window Execution Guarantee Tag */}
                <div className="bg-[#0C1D4A]/5 border border-[#0C1D4A]/10 p-3 rounded-xl flex items-center space-x-3">
                  <div className="p-1.5 rounded-lg bg-[#0C1D4A] text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#D98A10]" />
                  </div>
                  <p className="text-[11px] text-slate-700 font-medium leading-snug">
                    <span className="font-bold text-[#0C1D4A]">Single-Window Guarantee:</span> We don't just provide advisory — we deploy hands-on support until operations are fully established and delivering results.
                  </p>
                </div>

              </div>
            </div>

          </div>
{/* STATS ARE USED IN THE HERO2 */}
          {/* {}
          <div className="mt-16 sm:mt-20 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex items-center space-x-4 ${
                      idx > 0 ? "pt-6 lg:pt-0 lg:pl-6" : ""
                    }`}
                  >
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[#D98A10] shrink-0 shadow-xs">
                      <StatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-serif font-bold text-[#0C1D4A]">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {} */}
          <div className="mt-16 text-center space-y-6">
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
                    <span className="text-[10px] text-slate-500 text-center mt-1 font-medium">
                      {item.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

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
                  placeholder="indiabusinessclinic@gmail.com / +91 9560714343" 
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