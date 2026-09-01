import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Calculator, 
  Users, 
  Building2, 
  Map, 
  Truck, 
  Check 
} from "lucide-react";

export const metadata = {
  title: "Legal, Company Secretary & CA Services | Business Clinic",
  description: "Legal and statutory support, finance & accounts, secretarial services, HR & payroll management, and industrial logistics coordination.",
};

export default function SupportClinicPage() {
  const supports = [
    {
      title: "Legal & Statutory Support",
      desc: "Contract-related support, corporate agreements drafting, joint venture alignment, and legal compliance coordination.",
      icon: ShieldCheck,
    },
    {
      title: "Finance & Accounts",
      desc: "Assisting with invoicing, corporate accounts setup, auditing prep, and regulatory direct and indirect taxation coordination.",
      icon: Calculator,
    },
    {
      title: "Company Secretarial Support",
      desc: "Managing statutory files, annual filings, incorporation records, board minutes, and regulatory compliance records.",
      icon: Building2,
    },
    {
      title: "HR & Payroll Functions",
      desc: "Staffing coordination, compensation benchmarking, employment terms drafting, HR compliance, and payroll management.",
      icon: Users,
    },
  ];

  const specialists = [
    { name: "Legal Advisor", role: "Drafts and validates statutory corporate and supplier contracts." },
    { name: "Finance Expert", role: "Guides invoicing, bookkeeping setup, and tax compliance files." },
    { name: "Industrial Architect", role: "Designs efficient plant layouts and structures site readiness." },
    { name: "HR Consultant", role: "Formulates local staffing policies and HR compliance files." },
    { name: "Compliance Specialist", role: "Validates files conform strictly to industrial approvals." },
    { name: "Administration & Logistics Coordinator", role: "Manages on-ground facilities, logistics flow, and utility hooks." }
  ];

  const processFlow = [
    { step: "Understand", desc: "Identify the statutory or operational support requirements of your business." },
    { step: "Analyse", desc: "Evaluate existing workflows, records, contracts, or staffing constraints." },
    { step: "Recommend", desc: "Structure target processes and map specialized compliance advisors to your needs." },
    { step: "Execute", desc: "Implement standard invoicing systems, contract drafts, and secretarial documentation." },
    { step: "Support", desc: "Coordinate daily operations, logistics routing, and ongoing statutory administration." }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero / Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-14 sm:py-20 overflow-hidden border-b border-[#D98A10]/20">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">
              Solutions // Corporate Operations
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Support Clinic
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Providing end-to-end statutory coordination, legal drafting support, bookkeeping setup, invoicing, taxation guidelines, and local administration to keep your industrial operations compliant.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Request Support Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Support Areas */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Scope of Support</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Statutory &amp; Administrative Services</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our structured solutions handle the critical back-office functions that sustain daily shop-floor manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supports.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-8 flex items-start space-x-6 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-primary text-white rounded-xl shrink-0">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-primary">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Reusable Team Specialists */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Our Specialists</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Integrated Advisory Team</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              A single-window support model leveraging an integrated network of specialized corporate and industrial advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specialists.map((sp, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-200/50 rounded-xl p-6 space-y-2">
                <h4 className="font-serif text-sm font-bold text-primary">{sp.name}</h4>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{sp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Support Framework (Understand -> Analyse -> Recommend -> Execute -> Support) */}
      <section className="py-20 bg-primary text-white border-t border-b border-[#D98A10]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase font-sans">Methodology</span>
            <h2 className="text-3xl font-serif font-bold text-white">Our Support Coordination Model</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              We apply a visual, linear framework to integrate statutory compliance and operational administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processFlow.map((flow, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <span className="font-serif text-4xl font-bold text-white/10 absolute top-4 right-4 leading-none">0{idx + 1}</span>
                <span className="text-xs font-bold text-[#D98A10] tracking-wider block mb-2 uppercase">{flow.step}</span>
                <p className="text-slate-300 text-xs leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Need On-Ground Administrative &amp; Statutory Support?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact us to coordinate corporate incorporation details, secretarial filings, accounting setup, or facilities log.
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
