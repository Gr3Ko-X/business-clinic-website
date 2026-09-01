import React from "react";
import Link from "next/link";
import { 
  FileText, 
  Settings, 
  HelpCircle, 
  ArrowRight, 
  FolderGit2, 
  BookOpen, 
  Check, 
  Workflow,
  Building2,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Documentation & Technical Knowledge Services | Business Clinic",
  description: "Techno-commercial documentation, SOP development, Transfer of Technology (ToT) support, and plant standing orders for industrial setups.",
};

export default function DocumentationTechnicalKnowledgePage() {
  const whyItMatters = [
    {
      title: "Risks of Tribal Knowledge",
      desc: "Critical machine parameters, assembly processes, and test methods are often preserved only in the memory of operators. Absenteeism or turnover directly halts line output.",
    },
    {
      title: "Bid & Commercial Success",
      desc: "Entering government procurement or responding to Tier-1 system integrator tenders requires high-precision techno-commercial proposals and quality compliance sheets.",
    },
    {
      title: "Technology Absorption Bottlenecks",
      desc: "Transfer of Technology (ToT) from foreign partners fails without meticulous localization of technical documentation, operating steps, and translation of engineering manuals.",
    },
  ];

  const scopeServices = [
    {
      title: "India Vendor Validation Services",
      desc: "Conducting rigorous technical audits, capacity assessments, and compliance checks on local sub-tier suppliers to validate manufacturing capabilities for global OEMs.",
      icon: Building2,
      points: [
        "Machinery capability and quality process audits",
        "Sub-tier supplier financial and stability vetting",
        "Production capacity and throughput validation",
        "Raw material source verification and audit records"
      ]
    },
    {
      title: "Techno-Commercial Documentation",
      desc: "Structuring high-precision bid proposals, qualification packages, compliance matrices, and commercial files to respond to Tier-1 tenders and government defense procurement.",
      icon: FileText,
      points: [
        "Tender bid packages & commercial proposals",
        "Compliance qualification matrices mapping",
        "Statutory cost estimation & validation structures",
        "Bid submission files compilation & vetting"
      ]
    },
    {
      title: "Technology Transfer (TOT) Documentation",
      desc: "Managing technical absorption workflows, translating engineering manuals, and localizing global documentation for seamless local manufacturing setups.",
      icon: FolderGit2,
      points: [
        "Localization of technical manuals & drawings",
        "Work instruction absorption logs & process maps",
        "Tooling and test rig parameter standardization",
        "ToT verification logs & certificate of compliance"
      ]
    },
    {
      title: "SOP & Process Documentation",
      desc: "Creating visual Standard Operating Procedures (SOPs), process sheets, and plant standing orders to eliminate execution variance on the plant floor.",
      icon: Workflow,
      points: [
        "Visual SOP cards & visual instruction manuals",
        "Material incoming and final inspection checklists",
        "Machine-level setup parameters and startup logs",
        "Preventive and predictive maintenance checklists"
      ]
    },
    {
      title: "Governance Documentation",
      desc: "Drafting internal policies, plant standing orders, security rules, safety guidelines, and work instruction governance to enforce organizational control.",
      icon: ShieldCheck,
      points: [
        "Plant standing orders & labor regulation compliance",
        "Intellectual property protection & NDA governance",
        "Environmental, health, and safety (EHS) guidelines",
        "Statutory safety signs & work instruction controls"
      ]
    },
    {
      title: "Industrial Knowledge Management",
      desc: "Setting up digital filing systems, standardizing technical libraries, indexing CAD metadata, and establishing training logs to prevent loss of institutional knowledge.",
      icon: BookOpen,
      points: [
        "Structured digital documentation indexing structures",
        "Operator training logs & skills matrix governance",
        "CAD drawings revision controls & version parameters",
        "Operational continuity audit files & backup logs"
      ]
    }
  ];

  const processFlow = [
    { step: "Understand", desc: "Identify the critical process flows, equipment specifications, or tender requirements." },
    { step: "Analyse", desc: "Evaluate existing process documentation and identify gaps against standard compliance structures." },
    { step: "Recommend", desc: "Define standard document structures, layouts, visual styles, and compliance requirements." },
    { step: "Execute", desc: "Draft, verify, and deliver comprehensive, publication-ready technical documentation files." },
    { step: "Support", desc: "Assist with on-ground technical training and process absorption to ensure operational continuity." }
  ];

  const deliverables = [
    "Standardized operating visual cards & visual SOPs",
    "Detailed equipment maintenance and user manuals",
    "Tender-ready techno-commercial bid proposals",
    "Localized Transfer of Technology (ToT) packages",
    "Plant-level safety and compliance standing orders"
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
              Services // Execution Support
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Documentation &amp; Technical Knowledge Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Developing structured, compliant, and visual techno-commercial documentation, visual SOP manuals, and technology absorption files to secure plant-level knowledge continuity.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Request Assistance
              </Link>
              <Link 
                href="/services/industrial-assurance-validation" 
                className="border border-slate-400 hover:bg-white/5 text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Industrial Assurance Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Documentation Matters */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">The Requirement</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Why Standardized Technical Documentation Matters</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Clear processes and secure technical documentation protect your plant floor from disruption and optimize yield consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItMatters.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-lg p-8 shadow-xs hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope of Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Scope of Support</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Our Documentation Offerings</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tailored documentation frameworks to help you participate in tenders, structure workflows, and transfer technology successfully.
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

      {/* 4. Process Workflow (Horizontal chart style) */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">The Framework</span>
            <h2 className="text-3xl font-serif font-bold text-primary">How We Structure Document Engineering</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our systematic approach ensures all deliverables align with standard corporate benchmarks and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processFlow.map((flow, idx) => (
              <div key={flow.step} className="bg-white border border-slate-200/70 rounded-lg p-6 relative flex flex-col justify-between hover:border-[#D98A10] transition-colors">
                <div>
                  <span className="font-serif text-lg font-bold text-slate-300 block mb-4">0{idx + 1}</span>
                  <h3 className="font-serif text-sm font-bold text-primary mb-2 uppercase tracking-wider">{flow.step}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-700 font-medium leading-relaxed">{flow.desc}</p>
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
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white text-center">Expected Deliverables</h3>
            <p className="text-slate-300 text-xs sm:text-sm text-center leading-relaxed max-w-md mx-auto">
              Our technical documents are delivered structured, verified, and complete, ensuring compliance with target requirements.
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
            Need Standardized Technical or Process Documentation?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Reach out to our experts to discuss custom visual SOPs, techno-commercial bids, or technology absorption manuals.
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
