import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Factory, 
  Target, 
  TrendingUp, 
  Activity, 
  Sliders, 
  FileCheck2, 
  Check, 
  ArrowRight,
  ShieldAlert,
  ArrowRightLeft
} from "lucide-react";

export const metadata = {
  title: "Business & Industrial Consulting | Business Clinic",
  description: "Operational troubleshooting, manufacturing excellence, and business growth advisory for Indian MSMEs and global firms.",
};

export default function BusinessIndustrialConsultingPage() {
  const problems = [
    {
      title: "Operational Troubleshooting",
      desc: "Resolving production bottlenecks, quality yield failures, high scrapper rates, raw material supply delays, and plant floor inefficiencies.",
      icon: Target,
    },
    {
      title: "Manufacturing Excellence Gaps",
      desc: "Lack of standard operating guidelines (SOPs), reactive instead of preventive maintenance, and absence of systematic equipment tracking (OEE).",
      icon: Factory,
    },
    {
      title: "Growth & Scale Restrictions",
      desc: "Struggling with export readiness requirements, navigating defence procurement policies, and participating in complex government tenders.",
      icon: TrendingUp,
    },
  ];

  const capabilities = [
    {
      title: "Operational Troubleshooting",
      items: [
        "Production bottleneck analysis & resolution",
        "Quality yield failure diagnostics",
        "Raw material supply-chain stabilization",
        "Shop-floor cycle time optimization",
        "Plant layout & maintenance system design",
        "Overall Equipment Effectiveness (OEE) tracking systems"
      ],
    },
    {
      title: "Manufacturing Excellence",
      items: [
        "Lean manufacturing frameworks (waste elimination, flow optimization)",
        "Standard Operating Procedure (SOP) development & visual instructions",
        "Process parameter standardization & capability monitoring (Cpk)",
        "Preventive & predictive maintenance checklist implementation",
        "Shop-floor technical training & skill gap reviews"
      ],
    },
    {
      title: "Business Growth & Compliance",
      items: [
        "Export readiness auditing & capability mapping",
        "Defence procurement ecosystem advisory",
        "Government tender qualification & bid submission support",
        "Technology absorption validation for localized setups",
        "Legal, Company Secretarial, and CA statutory alignment"
      ],
    },
  ];

  const methodologySteps = [
    {
      num: "01",
      step: "Discover",
      title: "Understand the Challenge",
      desc: "We actively listen, investigate shop-floor concerns, and identify the symptom of the business problem.",
    },
    {
      num: "02",
      step: "Diagnose",
      title: "Find the Root Cause",
      desc: "Perform on-ground data audits to assess operational, organizational, and compliance gaps.",
    },
    {
      num: "03",
      step: "Design",
      title: "Develop the Solution",
      desc: "Create visual work instructions, layout diagrams, and practical checklists custom-tailored to your facility.",
    },
    {
      num: "04",
      step: "Deploy",
      title: "Execute & Implement",
      desc: "We support physical execution, remaining on-ground with your operators to drive measurable output gains.",
    },
    {
      num: "05",
      step: "Sustain",
      title: "Monitor & Improve",
      desc: "Track quality and availability performance, resolve secondary challenges, and continuously optimize operations.",
    },
  ];

  const faqs = [
    {
      q: "What types of industrial setups do you specialize in?",
      a: "Our core advisory covers manufacturing facilities, electronics assembly, radar & power equipment production, high-technology plants, and defence-grade supply chain units.",
    },
    {
      q: "How do you help companies transition from advice to execution?",
      a: "We do not just hand over a report. We stay on-site with your team to implement SOPs, resolve equipment bottlenecks, and train operators to ensure the results are sustained.",
    },
    {
      q: "Can you assist with defence-specific procurement qualification?",
      a: "Yes. Led by Col Sanjay Chandra (Retd), we provide specialized guidelines to navigate defence procurement systems, indigenisation standards, and qualification audits.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero / Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-14 sm:py-20 overflow-hidden border-b border-[#D98A10]/20">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Services // Strategic &amp; Operational Advisory
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Business &amp; Industrial Consulting
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Providing hands-on diagnostics, shop-floor troubleshooting, manufacturing excellence frameworks, and strategic scaling support to optimize industrial capability.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services/indian-msme-troubleshooting" 
                className="border border-slate-400 hover:bg-white/5 text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                MSME Troubleshooting Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">The Challenge</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Critical Bottlenecks in Production Execution</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
              Manufacturers face ongoing challenges that disrupt delivery timelines, degrade quality levels, and restrict growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob) => {
              const Icon = prob.icon;
              return (
                <div key={prob.title} className="bg-white border border-slate-200/60 rounded-lg p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg w-12 h-12 flex items-center justify-center border border-red-100">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary">{prob.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Our Capabilities</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Core Spheres of Engagement</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on practical, execution-oriented workflows designed to build sustainable capabilities inside your organization.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-slate-50/50 border border-slate-200/50 rounded-lg p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold text-primary mb-6 border-b border-slate-200 pb-3">{cap.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cap.items.map((item) => (
                    <div key={item} className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-[#D98A10] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology (5D) Section */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Methodology</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Our Step-by-Step Diagnostic Framework</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              From diagnosis to execution, we stay with you until the solution delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {methodologySteps.map((step) => (
              <div key={step.step} className="bg-white border border-slate-200/80 rounded-lg p-6 relative flex flex-col justify-between hover:border-[#D98A10] transition-colors">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#D98A10] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      {step.step}
                    </span>
                    <span className="font-serif text-lg font-bold text-slate-300">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-sm font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-xs text-slate-700 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Questions</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-lg p-6 space-y-2">
                <h3 className="font-serif font-bold text-sm sm:text-base text-primary flex items-start">
                  <span className="text-[#D98A10] font-bold mr-2 shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action (CTA) */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Ready to Troubleshoot Plant Operations or Structure Scaling?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact us for a detailed discussion about your facility constraints, quality yields, layout optimization, or compliance parameters.
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
