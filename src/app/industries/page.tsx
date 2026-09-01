import React from "react";
import Link from "next/link";
import { industriesData } from "@/lib/data/industries";
import { Plane, Cpu, Zap, Settings, Rss, Activity, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industries We Serve | Business Clinic",
  description: "Specialized industrial execution and technical advisory tailored across high-impact manufacturing sectors including Defence, Electronics, Power, Telecommunications and Power & High Technology.",
};

export default function IndustriesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Plane":
        return Plane;
      case "Cpu":
        return Cpu;
      case "Zap":
        return Zap;
      case "Settings":
        return Settings;
      case "Rss":
        return Rss;
      case "Activity":
        return Activity;
      default:
        return Settings;
    }
  };

  const getSectorsIntro = (id: string) => {
    switch (id) {
      case "defence-aerospace":
        return "Navigating India's strict defence manufacturing requirements under the Defence Acquisition Procedure (DAP), offset liabilities, and technology transfer (ToT) protocols";
      case "electronics-semiconductors":
        return "Setting up ultra-clean manufacturing environments, sourcing component pipelines, and meeting precision assembly specifications for global markets";
      case "power-renewable-energy":
        return "Deploying grid-scale infrastructure, power distribution cabinets, and heavy-duty cabling for utilities and green energy infrastructure";
      case "industrial-manufacturing":
        return "Troubleshooting production lines, optimizing shop-floor footprint, designing operational workflows, and tracking Overall Equipment Effectiveness (OEE)";
      case "telecommunications-ofc":
        return "Managing raw materials and cable deployments, importing RF testing equipment, and securing approvals from the Wireless Planning &amp; Coordination (WPC) division";
      case "power-high-tech":
        return "Enabling high-reliability power systems manufacturing, ISO 17025 calibration labs, and technology transfer for global high-tech OEMs";
      default:
        return "Execution-focused support designed for high-value engineering systems";
    }
  };

  const targetIndustries = industriesData.slice(0, 3);
  const domainKnowledge = industriesData.slice(3, 6);

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-12 overflow-hidden border-b border-[#D98A10]/20">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Sector Specializations
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Industries &amp; Domain Knowledge
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              Our principal and specialist networks bring deep domain engineering, regulatory compliance, and testing methodologies to high-value technology manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industries detailed list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Part 1: Industries We Transform */}
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="border-l-4 border-accent pl-4">
              <h2 className="font-serif text-2xl font-bold text-primary">
                Industries We Transform
              </h2>
              <p className="text-slate-500 text-sm">
                Strategic advisory and entry compliance for core industrial manufacturing sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {targetIndustries.map((ind) => {
                const Icon = getIcon(ind.iconName);
                return (
                  <div
                    key={ind.id}
                    id={ind.id}
                    className="scroll-mt-24 bg-slate-50 border border-slate-200/80 rounded-lg p-8 hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200/80">
                        <div className="flex items-center space-x-3">
                          <div className="p-2.5 bg-primary text-white rounded-full">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-serif text-lg font-bold text-primary">
                            {ind.name}
                          </h3>
                        </div>
                        <span className="text-xl font-serif font-bold text-slate-300">
                          {ind.number}
                        </span>
                      </div>

                      {/* Sector Specific text */}
                      <p
                        className="text-slate-600 text-xs sm:text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: getSectorsIntro(ind.id) }}
                      />

                      {/* Bullets */}
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Key Action Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {ind.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200/60">
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all shadow-xs"
                      >
                        <span>Discuss {ind.name} Project</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part 2: Deep Domain Knowledge */}
          <div className="space-y-10 max-w-5xl mx-auto pt-10 border-t border-slate-100">
            <div className="border-l-4 border-accent pl-4">
              <h2 className="font-serif text-2xl font-bold text-primary">
                Deep Domain Knowledge
              </h2>
              <p className="text-slate-500 text-sm">
                Engineering and technical execution frameworks for precision systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {domainKnowledge.map((ind) => {
                const Icon = getIcon(ind.iconName);
                return (
                  <div
                    key={ind.id}
                    id={ind.id}
                    className="scroll-mt-24 bg-slate-50 border border-slate-200/80 rounded-lg p-8 hover:bg-white hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200/80">
                        <div className="flex items-center space-x-3">
                          <div className="p-2.5 bg-primary text-white rounded-full">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-serif text-lg font-bold text-primary">
                            {ind.name}
                          </h3>
                        </div>
                        <span className="text-xl font-serif font-bold text-slate-300">
                          {ind.number}
                        </span>
                      </div>

                      {/* Sector Specific text */}
                      <p
                        className="text-slate-600 text-xs sm:text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: getSectorsIntro(ind.id) }}
                      />

                      {/* Bullets */}
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Key Action Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {ind.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200/60">
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all shadow-xs"
                      >
                        <span>Discuss {ind.name} Project</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
