"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Headphones,
  MessageSquare,
  X,
  Sparkles,
  TrendingUp,
  Building,
  ChevronRight,
  Shield,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

interface PillarCategory {
  title: string;
  items: string[];
}

interface Pillar {
  id: string;
  num: string;
  title: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  bullets: string[];
  btnText: string;
  subtitle: string;
  description: string;
  categories: PillarCategory[];
}

const pillars: Pillar[] = [
  {
    id: "msme-growth",
    num: "01",
    title: "MSME Clinic",
    badgeIcon: TrendingUp,
    bullets: [
      "Operational Troubleshooting",
      "Manufacturing Excellence",
      "Technology & Engineering Consulting",
      "Business Growth Consulting",
    ],
    btnText: "Explore MSME Clinic",
    subtitle: "Diagnosis, Turnaround & Scaling for Indian Manufacturers",
    description:
      "End-to-end support for MSMEs — from resolving shop-floor bottlenecks and quality failures to building lean systems, automation readiness, and sustainable growth.",
    categories: [
      {
        title: "Operational Troubleshooting",
        items: [
          "Production bottlenecks",
          "Quality failures",
          "Vendor problems",
          "Inventory inefficiencies",
          "Cost overruns",
          "Project delays",
          "Plant inefficiencies",
          "Supply chain instability",
        ],
      },
      {
        title: "Manufacturing Excellence",
        items: [
          "Lean manufacturing",
          "Productivity improvement",
          "SOP development",
          "Process optimization",
          "OEE improvement",
          "Plant layout optimization",
          "Maintenance systems",
        ],
      },
      {
        title: "Technology & Engineering Consulting",
        items: [
          "Industrial automation",
          "Electronics manufacturing",
          "Defence manufacturing readiness",
          "Product industrialization",
          "Vendor qualification",
          "Quality systems",
        ],
      },
      {
        title: "Business Growth Consulting",
        items: [
          "Scaling manufacturing",
          "Export readiness",
          "Defence procurement ecosystem",
          "Government tender participation",
          "Strategic partnerships",
          "Technology transfer support",
        ],
      },
    ],
  },
  {
    id: "india-entry",
    num: "02",
    title: "India Entry Clinic",
    badgeIcon: Building,
    bullets: [
      "India Market Entry Advisory",
      "Company Formation Support",
      "Industrial Setup Services",
      "Local Partnership Development",
      "Recruitment & Team Setup",
      "Ongoing India Operations Support",
    ],
    btnText: "Explore India Entry Clinic",
    subtitle: "Single-Window Execution for Global Companies Entering India",
    description:
      "Comprehensive on-ground support guiding global enterprises through market entry, entity formation, factory setup, partnerships, and sustained India operations.",
    categories: [
      {
        title: "India Market Entry Advisory",
        items: [
          "Feasibility studies",
          "Sector analysis",
          "State selection",
          "Industrial corridor selection",
          "Incentive advisory",
          "Business structuring",
        ],
      },
      {
        title: "Company Formation Support",
        items: [
          "Company incorporation",
          "FEMA and FDI guidance",
          "GST registration",
          "PAN/TAN",
          "Import-export code",
          "Banking support",
        ],
      },
      {
        title: "Industrial Setup Services",
        items: [
          "Factory identification",
          "Land acquisition assistance",
          "Plant setup coordination",
          "Vendor sourcing",
          "Utility coordination",
          "Industrial licensing support",
        ],
      },
      {
        title: "Local Partnership Development",
        items: [
          "JV identification",
          "Indian partner evaluation",
          "Vendor audits",
          "Due diligence",
          "Contract support",
        ],
      },
      {
        title: "Recruitment & Team Setup",
        items: [
          "Leadership hiring",
          "Technical recruitment",
          "Workforce onboarding",
          "Training systems",
        ],
      },
      {
        title: "Ongoing India Operations Support",
        items: [
          "Compliance coordination",
          "Expansion support",
          "Local sourcing optimization",
          "Government liaison",
          "Performance review systems",
        ],
      },
    ],
  },
  {
    id: "defence-ecosystem",
    num: "03",
    title: "Defence & Aerospace Clinic",
    badgeIcon: Shield,
    bullets: [
      "Defence Industrial Licensing",
      "Offset Opportunities",
      "Vendor Ecosystem Mapping",
      "Technology Collaboration Assistance",
      "Compliance Guidance & Documentation",
    ],
    btnText: "Explore Defence Clinic",
    subtitle: "Strategic Guidance for Defence & Aerospace Sectors",
    description:
      "Specialised advisory for defence industrial licensing, offset management, ecosystem mapping, and technology collaboration across India's DPSU and private defence landscape.",
    categories: [
      {
        title: "Defence & Aerospace Services",
        items: [
          "Defence industrial licensing",
          "Offset opportunities",
          "Vendor ecosystem mapping",
          "DPSU/private defence ecosystem support",
          "Technology collaboration assistance",
          "Compliance guidance",
          "Documentation",
        ],
      },
    ],
  },
  {
    id: "support-clinic",
    num: "04",
    title: "Support Clinic",
    badgeIcon: Briefcase,
    bullets: [
      "Industrial Assurance",
      "Risk & Project Management",
      "Ancillary Services",
    ],
    btnText: "Explore Support Clinic",
    subtitle: "Integrated Assurance, Risk & Corporate Support Functions",
    description:
      "Quality assurance, project risk management, and a full panel of ancillary corporate services — legal, secretarial, finance, liaison, and administration.",
    categories: [
      {
        title: "Industrial Assurance",
        items: [
          "Quality Control",
          "FAT/FAI",
          "Pre-Dispatch Inspection",
          "Factory/Operational Audit",
        ],
      },
      {
        title: "Risk & Project Management",
        items: [
          "Project risk assessment",
          "Execution monitoring",
          "Cost control systems",
          "Vendor risk mapping",
          "Compliance management",
        ],
      },
      {
        title: "Ancillary Services",
        items: [
          "Legal",
          "Company Secretary",
          "Chartered Accountant",
          "Liaison",
          "Administration",
        ],
      },
    ],
  },
];

function PillarEmblem({ id }: { id: string }) {
  if (id === "india-entry") {
    return (
      <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="32" cy="32" r="24" stroke="#D98A10" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="12" ry="24" stroke="#D98A10" strokeWidth="2" />
        <line x1="8" y1="32" x2="56" y2="32" stroke="#D98A10" strokeWidth="2" />
        <path d="M42 42 L52 52 M52 42 L42 52" stroke="#0C1D4A" strokeWidth="2.5" />
        <circle cx="47" cy="47" r="5" fill="#D98A10" stroke="#0C1D4A" strokeWidth="1.5" />
      </svg>
    );
  }

  if (id === "msme-growth") {
    return (
      <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M10 50 L10 26 L24 26 L24 50 L38 50 L38 18 L52 18 L52 50 Z" stroke="#D98A10" strokeWidth="2" fill="#D98A10" fillOpacity="0.1" />
        <path d="M12 36 L28 22 L40 30 L54 12" stroke="#0C1D4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M46 12 L54 12 L54 20" stroke="#0C1D4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "defence-ecosystem") {
    return (
      <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M32 8 L50 16 C50 34 38 48 32 54 C26 48 14 34 14 16 Z" stroke="#D98A10" strokeWidth="2.5" fill="#D98A10" fillOpacity="0.1" />
        <path d="M24 30 L30 36 L42 22" stroke="#0C1D4A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="14" y="18" width="36" height="32" rx="3" stroke="#D98A10" strokeWidth="2" fill="#D98A10" fillOpacity="0.1" />
      <path d="M24 18 V12 A2 2 0 0 1 26 10 H38 A2 2 0 0 1 40 12 V18" stroke="#0C1D4A" strokeWidth="2.5" />
      <line x1="14" y1="30" x2="50" y2="30" stroke="#0C1D4A" strokeWidth="2" />
      <circle cx="32" cy="38" r="4" fill="white" stroke="#D98A10" strokeWidth="1.5" />
    </svg>
  );
}

export default function Pillars() {
  const [activeModal, setActiveModal] = useState<Pillar | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  useEffect(() => {
    setActiveCategoryIndex(0);
  }, [activeModal]);

  const activeCategory = activeModal?.categories[activeCategoryIndex];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased py-10 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#D98A10] selection:text-white">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0C1D4A_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D98A10]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0C1D4A]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-14">
        <div id="solutions" className="scroll-mt-28 text-center max-w-3xl mx-auto space-y-3.5 px-2">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#D98A10]/40 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#D98A10] uppercase">
              OUR CORE SERVICE PILLARS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight">
            Tailored Industrial Solutions <br />
            <span className="text-[#D98A10] font-serif block mt-1">From Setup to Scale</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Comprehensive, single-window advisory and execution services across four specialized clinics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {pillars.map((pillar) => {
            const RibbonIcon = pillar.badgeIcon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 relative bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden z-20">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#D98A10] via-[#C47A08] to-[#A86804] text-white p-2.5 rounded-bl-2xl shadow-md flex items-center justify-center">
                    <RibbonIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 relative z-10">
                  <div className="relative shrink-0 my-1 sm:my-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#D98A10]/60 p-1.5 flex items-center justify-center bg-gradient-to-br from-amber-50/50 to-white shadow-md group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full border-2 border-[#D98A10] bg-white flex items-center justify-center p-3 shadow-inner relative overflow-hidden">
                        <PillarEmblem id={pillar.id} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-3.5">
                    <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                      <span className="bg-[#0C1D4A] text-white font-serif font-bold text-xs px-2.5 py-1 rounded-md shadow-xs">
                        {pillar.num}
                      </span>
                      <span className="text-[#0C1D4A] font-light text-sm">|</span>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0C1D4A]">
                        {pillar.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 text-left pt-1">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#D98A10] shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveModal(pillar)}
                        className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0C1D4A] text-[#0C1D4A] font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow-2xs hover:shadow-md cursor-pointer group/btn"
                      >
                        <span>{pillar.btnText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D98A10] group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="bg-white border border-[#D98A10]/40 rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-3 text-center sm:text-left px-2 sm:px-4">
              <div className="w-10 h-10 rounded-full bg-[#0C1D4A] flex items-center justify-center text-[#D98A10] shrink-0 border border-[#D98A10]">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0C1D4A]">
                Need a custom integrated solution?
              </span>
            </div>

            <button
              onClick={() => setConsultModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0C1D4A] hover:bg-[#071230] text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow-md cursor-pointer group"
            >
              <MessageSquare className="w-4 h-4 text-[#D98A10]" />
              <span>Speak with an Industrial Expert</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {activeModal && activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-slate-100 shrink-0">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start space-x-3 pr-8">
                <div className="p-3 rounded-2xl bg-amber-50 text-[#D98A10] border border-amber-200 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D98A10] uppercase tracking-wider">
                    Clinic {activeModal.num}
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0C1D4A]">
                    {activeModal.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0C1D4A] mt-1">
                    {activeModal.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5 max-w-2xl">
                    {activeModal.description}
                  </p>
                </div>
              </div>

              {activeModal.categories.length > 1 && (
                <div
                  role="tablist"
                  aria-label={`${activeModal.title} service categories`}
                  className="flex gap-2 mt-5 overflow-x-auto pb-1 scrollbar-thin"
                >
                  {activeModal.categories.map((category, idx) => (
                    <button
                      key={category.title}
                      role="tab"
                      aria-selected={idx === activeCategoryIndex}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`shrink-0 px-3 py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-all border ${
                        idx === activeCategoryIndex
                          ? "bg-[#0C1D4A] text-white border-[#0C1D4A] shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#D98A10]/50 hover:text-[#0C1D4A]"
                      }`}
                    >
                      <span className="text-[#D98A10] mr-1.5">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {category.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <h4 className="text-sm font-bold text-[#0C1D4A] font-serif">
                    {activeModal.categories.length > 1 && (
                      <span className="text-[#D98A10] mr-2">
                        {String.fromCharCode(65 + activeCategoryIndex)}.
                      </span>
                    )}
                    {activeCategory.title}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                    {activeCategory.items.length} services
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCategory.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <ChevronRight className="w-4 h-4 text-[#D98A10] shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setActiveModal(null);
                    setConsultModalOpen(true);
                  }}
                  className="flex-1 py-3 px-4 bg-[#0C1D4A] hover:bg-[#071230] text-white font-bold text-xs rounded-xl transition-all shadow-md text-center cursor-pointer"
                >
                  Request Consultation for {activeModal.title}
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all text-center cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {consultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 space-y-5 text-slate-900">
            <button
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="p-3 rounded-2xl bg-[#0C1D4A] text-[#D98A10] shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#0C1D4A]">
                  Speak with an Industrial Expert
                </h3>
                <p className="text-xs text-slate-500">Business Clinic Custom Solution Advisory</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-[#D98A10]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email</label>
                <input
                  type="email"
                  placeholder="e.g. john@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-[#D98A10]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Inquiry</label>
                <textarea
                  rows={3}
                  placeholder="Describe your market entry, MSME scaling, or assurance needs..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:border-[#D98A10]"
                />
              </div>

              <button
                onClick={() => setConsultModalOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-[#D98A10] to-[#C47A08] hover:from-[#C47A08] hover:to-[#A86804] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer mt-2"
              >
                Submit Consultation Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
