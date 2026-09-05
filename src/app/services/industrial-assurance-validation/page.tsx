import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Search, 
  Award, 
  ArrowRight, 
  UserCheck, 
  ClipboardCheck, 
  Check,
  Eye
} from "lucide-react";

export const metadata = {
  title: "Industrial Assurance & Validation Services | Business Clinic",
  description: "Quality surveillance, vendor audits, and validation testing for mission-critical manufacturing and engineering.",
};

export default function IndustrialAssuranceValidationPage() {
  const problems = [
    {
      title: "Vendor Quality Gaps",
      desc: "Sub-tier suppliers failing to meet standard engineering drawing specifications or delivering component dimensions with high variance.",
    },
    {
      title: "FAT / FAI Failure Risks",
      desc: "Losing weeks of project timeline when system validation testing fails at the client factory or during First Article Inspection checks.",
    },
    {
      title: "Compliance Gaps",
      desc: "Failing to conform to strict military specifications or industrial regulatory quality guidelines, leading to audit rejection.",
    },
  ];

  const scopeServices = [
    {
      title: "Quality Surveillance",
      desc: "Deploying independent surveillance engineers to suppliers' plants to monitor manufacturing workflows, inspect raw materials, track inline parameters, and verify yields.",
      icon: Eye,
      points: [
        "Inline quality gates surveillance",
        "Sub-tier supplier workmanship auditing",
        "Verification of calibration logs & tooling setups",
        "Quality checklist auditing and deviation reporting"
      ]
    },
    {
      title: "Vendor Reliability Services",
      desc: "Auditing and evaluating sub-tier suppliers' capacity, technical capabilities, process stability, and financial hygiene to protect global supply chains from disruptions.",
      icon: ShieldCheck,
      points: [
        "Supplier qualification & capacity audits",
        "Process stability tracking (Cp, Cpk analyses)",
        "Raw material batch traceability audits",
        "Corrective action verification and mapping"
      ]
    },
    {
      title: "Compliance Services",
      desc: "Verifying that parts, materials, assemblies, and testing setups conform strictly to target military specifications (Mil-Specs), space requirements, and international industrial guidelines.",
      icon: Award,
      points: [
        "Mil-spec and space-grade compliance reviews",
        "ISO quality systems setup & pre-audit compliance",
        "Systems engineering document controls auditing",
        "Drawing controls and material test verification"
      ]
    },
    {
      title: "Production Validation (FAT, FAI, ATP, PDI)",
      desc: "Facilitating hands-on validation checkmarks to qualify components before final commissioning:",
      icon: ClipboardCheck,
      points: [
        "First Article Inspection (FAI) reports & validation checks against drawing specs",
        "Factory Acceptance Testing (FAT) coordination, run logs, and sign-offs",
        "Acceptance Test Procedure (ATP) oversight for high-reliability systems",
        "Pre-Dispatch Inspection (PDI) tracking packaging, dimension limits, and certificates of conformity"
      ]
    },
    {
      title: "Inspection Integrity (Vendor & Process Audits)",
      desc: "Independent, objective third-party shop-floor process audits and material inspections to resolve customer rejection issues and quality spikes.",
      icon: Search,
      points: [
        "Independent process drift checks on critical SMT/wiring lines",
        "Supplier corrective action audits (CAPA logs validation)",
        "Traceability audit trails creation & verification logs",
        "Scrap and yield analysis audits on-ground"
      ]
    }
  ];

  const processFlow = [
    { step: "Understand", desc: "Define the specific quality guidelines, test specifications, and drawing controls." },
    { step: "Analyse", desc: "Assess vendor processes, test procedures, and inspect equipment calibration states." },
    { step: "Recommend", desc: "Formulate custom quality surveillance plans, FAT checklists, and FAI report templates." },
    { step: "Execute", desc: "Conduct physical inspections, log validation results, and audit vendor capabilities on-ground." },
    { step: "Support", desc: "Help resolve identified quality failures and coordinate corrective action with vendors." }
  ];

  const deliverables = [
    "Comprehensive vendor audit scores and profiles",
    "Detailed FAI, FAT, and PDI logs and certificates",
    "On-ground quality surveillance reports",
    "Mil-spec or industrial code compliance reports",
    "Corrective action verification documentation"
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-14 sm:py-20 overflow-hidden border-b border-[#D98A10]/20">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Services // Quality Assurance
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Industrial Assurance &amp; Validation Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Rigorous quality surveillance, supplier audits, and production validation testing to give global OEMs, local inspectors, and logistics partners confidence in outcomes.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Schedule Audit
              </Link>
              <Link 
                href="/services/business-industrial-consulting" 
                className="border border-slate-400 hover:bg-white/5 text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Industrial Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problems Addressed */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Quality Gaps</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Eliminating Industrial Defect Risk</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our quality surveillance and validation frameworks address the root causes of assembly yield failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-lg p-8 shadow-xs hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{prob.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope of Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Scope of Work</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Our Validation Offerings</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Applying military precision and international engineering guidelines to ensure your components are made right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scopeServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary text-white rounded-xl inline-block">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2 pt-2 border-t border-slate-200/50">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className="h-4 w-4 text-[#D98A10] shrink-0 mt-0.5" />
                          <span className="font-medium leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Workflow */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Methodology</span>
            <h2 className="text-3xl font-serif font-bold text-primary">How We Structure Quality Auditing</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our support model guarantees complete oversight and corrective guidance on the factory floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processFlow.map((flow, idx) => (
              <div key={flow.step} className="bg-white border border-slate-200/70 rounded-lg p-6 relative flex flex-col justify-between hover:border-[#D98A10] transition-colors">
                <div>
                  <span className="font-serif text-lg font-bold text-slate-300 block mb-4">0{idx + 1}</span>
                  <h3 className="font-serif text-sm font-bold text-primary mb-2 uppercase tracking-wider">{flow.step}</h3>
                  <p className="text-sm sm:text-xs text-slate-700 font-medium leading-relaxed">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Expected Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white text-center">Quality Deliverables</h3>
            <p className="text-slate-300 text-xs sm:text-sm text-center leading-relaxed max-w-md mx-auto">
              Clear logs, checklists, and compliance profiles to ensure audit readiness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-2xl mx-auto">
              {deliverables.map((del) => (
                <div key={del} className="flex items-center space-x-3 text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/25 flex items-center justify-center text-accent shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-slate-200">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-slate-50 py-16 text-center border-t border-slate-200/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Need Quality Oversight or Factory Acceptance Testing?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Speak to our team to define custom visual checkpoints, incoming raw-material inspections, or final pre-dispatch audits.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
