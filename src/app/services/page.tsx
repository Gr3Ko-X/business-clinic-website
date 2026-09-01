import React from "react";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import { Globe, Factory, ShieldCheck, FileText, Briefcase, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Business Clinic",
  description: "Explore our specialized industrial advisory clinics including India Entry support, Industrial Growth advisory, Industrial Quality Assurance, Documentation services, and Support solutions.",
};

export default function ServicesPage() {
  // Helper to resolve Icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return Globe;
      case "Factory":
        return Factory;
      case "ShieldCheck":
        return ShieldCheck;
      case "FileText":
        return FileText;
      case "Briefcase":
        return Briefcase;
      default:
        return Factory;
    }
  };

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
              Our Capabilities
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Specialized Industrial Clinics
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              We structure our support into five targeted areas of expertise. We stay with you on-site and on-ground until the operational goals are met.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 max-w-5xl mx-auto">
            {servicesData.map((category, idx) => {
              const Icon = getIcon(category.iconName);
              const num = `0${idx + 1}`;
              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24 bg-slate-50 border border-slate-200/80 rounded-lg p-8 sm:p-12 shadow-sm space-y-8 hover:shadow-md transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200">
                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 bg-primary text-white rounded-full">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest block">
                          CLINIC {num}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-primary">
                          {category.title}
                        </h2>
                      </div>
                    </div>
                    <div className="text-right sm:text-left">
                      <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-sm">
                        {category.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {category.description}
                  </p>

                  {/* Bullet Summary (Highlights) */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Operations Focus
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.bulletPoints.map((bp) => (
                        <div key={bp} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Services Grid */}
                  {category.detailedServices && (
                    <div className="pt-6 border-t border-slate-200 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Detailed Scope of Engagement
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {category.detailedServices.map((service, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white border border-slate-100 rounded-sm p-5 space-y-1.5 shadow-xs"
                          >
                            <h4 className="font-sans font-bold text-sm text-primary">
                              {service.name}
                            </h4>
                            {service.description && (
                              <p className="text-xs text-slate-500 leading-relaxed">
                                {service.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Consultation */}
      <section className="bg-slate-50/50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Need an Execution Plan for Your Facility?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
            Contact us to detail custom service combinations or request an audit of your existing production footprint.
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
