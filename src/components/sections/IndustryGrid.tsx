"use client"

import React, { useState } from "react";
import {
  Check,
  ArrowRight,
  X,
  Sparkles,
  PhoneCall,
  Mail,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function App() {
  const [selectedSector, setSelectedSector] = useState<any>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const transformSectors = [
    {
      id: "defence-aerospace",
      num: "01",
      title: "Defence & Aerospace",
      bullets: [
        "EW systems & electronic warfare solutions",
        "Harbour surveillance & security systems",
        "Defence industrial licensing & compliance",
        "Offset facilitation & military-grade standards"
      ],
      description: "Providing turnkey strategic advisory, DAP compliance, and indigenization for defence OEMs and Indian Tier-1 suppliers",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="26" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="18" />
          <circle cx="32" cy="32" r="10" />
          <line x1="32" y1="4" x2="32" y2="60" />
          <line x1="4" y1="32" x2="60" y2="32" />
          <path d="M44 20 L38 28 L28 28 L22 20 L18 22 L24 32 L16 38 L12 36 L10 40 L18 42 L24 40 L34 40 L44 20 Z" fill="#D98A10" fillOpacity="0.15" />
        </svg>
      )
    },
    {
      id: "electronics-semiconductors",
      num: "02",
      title: "Electronics & Semiconductors",
      bullets: [
        "Cleanroom setups & precision environments",
        "SMT lines & advanced assembly solutions",
        "Component localization & value addition",
        "Testing automation & supply chain security"
      ],
      description: "Enabling high-yield electronics manufacturing, ESD-safe facility design, and semiconductor packaging ecosystem development",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="18" width="28" height="28" rx="3" fill="#D98A10" fillOpacity="0.1" />
          <rect x="24" y="24" width="16" height="16" rx="2" />
          <line x1="22" y1="10" x2="22" y2="18" />
          <line x1="32" y1="10" x2="32" y2="18" />
          <line x1="42" y1="10" x2="42" y2="18" />
          <line x1="22" y1="46" x2="22" y2="54" />
          <line x1="32" y1="46" x2="32" y2="54" />
          <line x1="42" y1="46" x2="42" y2="54" />
          <line x1="10" y1="22" x2="18" y2="22" />
          <line x1="10" y1="32" x2="18" y2="32" />
          <line x1="10" y1="42" x2="18" y2="42" />
          <line x1="46" y1="22" x2="54" y2="22" />
          <line x1="46" y1="32" x2="54" y2="32" />
          <line x1="46" y1="42" x2="54" y2="42" />
        </svg>
      )
    },
    {
      id: "power-renewable",
      num: "03",
      title: "Power & Renewable Energy",
      bullets: [
        "Power Distribution Units (PDUs) & systems",
        "Cable deployment & EPC execution",
        "Grid infrastructure & substation solutions",
        "Green manufacturing & energy transition"
      ],
      description: "Supporting heavy electrical manufacturing, high-voltage equipment localization, and renewable infrastructure projects",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 54 L22 26" strokeWidth="2.5" />
          <path d="M22 26 L12 18" />
          <path d="M22 26 L32 20" />
          <path d="M22 26 L22 12" />
          <circle cx="22" cy="26" r="3" fill="#D98A10" />
          <path d="M42 54 L48 22 L54 54" />
          <line x1="40" y1="32" x2="56" y2="32" />
          <line x1="43" y1="42" x2="53" y2="42" />
          <line x1="48" y1="22" x2="48" y2="54" />
          <rect x="8" y="44" width="20" height="10" rx="1" transform="rotate(-10 8 44)" fill="#D98A10" fillOpacity="0.1" />
        </svg>
      )
    }
  ];

  const domainSectors = [
    {
      id: "industrial-manufacturing",
      num: "04",
      title: "Industrial Manufacturing",
      bullets: [
        "Plant layout optimization & engineering",
        "Lean manufacturing & waste reduction",
        "OEE improvement & process excellence",
        "Assembly line automation & SOP frameworks"
      ],
      description: "Transforming factory floors with military-grade precision, OEE maximization, and lean operational turnarounds",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="48" width="48" height="8" rx="2" fill="#D98A10" fillOpacity="0.15" />
          <circle cx="18" cy="48" r="4" />
          <path d="M18 48 L28 30 L44 24 L52 32" strokeWidth="2.5" />
          <circle cx="28" cy="30" r="3" fill="#D98A10" />
          <circle cx="44" cy="24" r="3" fill="#D98A10" />
          <path d="M52 32 L58 28" />
          <path d="M52 32 L56 38" />
          <rect x="28" y="42" width="8" height="6" rx="1" />
          <rect x="40" y="42" width="8" height="6" rx="1" />
        </svg>
      )
    },
    {
      id: "telecom-ofc",
      num: "05",
      title: "Telecommunications & OFC",
      bullets: [
        "OFC & power cable deployment",
        "RF equipment imports & integration",
        "WPC licensing & regulatory facilitation",
        "Network hardware manufacturing support"
      ],
      description: "Facilitating WPC clearances, RF equipment imports, and optical fiber manufacturing and deployment across India",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 10 L20 54 L44 54 Z" strokeWidth="2" />
          <line x1="26" y1="32" x2="38" y2="32" />
          <line x1="23" y1="43" x2="41" y2="43" />
          <line x1="29" y1="21" x2="35" y2="21" />
          <circle cx="32" cy="10" r="3" fill="#D98A10" />
          <path d="M22 14 C16 8 10 16 10 16" />
          <path d="M42 14 C48 8 54 16 54 16" />
          <path d="M10 50 C22 40 42 60 54 48" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: "power-high-tech",
      num: "06",
      title: "Power & High Technology",
      bullets: [
        "PDU manufacturing & power grids integration",
        "ISO 17025 compliance & calibration systems",
        "Global OEM technology transfer (ToT) support",
        "Precision engineering & high-reliability systems"
      ],
      description: "Enabling high-reliability power systems manufacturing, ISO 17025 calibration labs, and technology transfer for global high-tech OEMs",
      icon: (
        <svg className="w-10 h-10 text-[#D98A10]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="28" r="20" strokeWidth="3" />
          <circle cx="32" cy="28" r="12" fill="#D98A10" fillOpacity="0.1" />
          <rect x="12" y="44" width="40" height="8" rx="2" fill="#D98A10" />
          <path d="M20 36 L44 36" strokeWidth="3" />
          <path d="M20 28 L26 28 L29 20 L32 34 L35 25 L38 28 L44 28" strokeWidth="1.8" />
        </svg>
      )
    }
  ];

  const renderCard = (card: any) => (
    <div
      key={card.id}
      className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-bl-full -z-0 pointer-events-none transition-transform group-hover:scale-110"></div>

      <div>
        <div className="flex items-center space-x-4 mb-5">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-transparent border-t-[#D98A10] border-r-[#D98A10] p-1 flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500 bg-white shadow-md">
              <div className="w-full h-full rounded-full border border-slate-200 bg-white flex items-center justify-center p-2.5 -rotate-45 group-hover:-rotate-180 transition-transform duration-500">
                {card.icon}
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-1.5">
              <span className="bg-[#0C1D4A] text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                {card.num}
              </span>
              <span className="text-slate-300 font-light text-xs">|</span>
            </div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#0C1D4A] leading-snug group-hover:text-[#D98A10] transition-colors">
              {card.title}
            </h3>
          </div>
        </div>

        <ul className="space-y-2.5 my-4 border-t border-slate-100 pt-4">
          {card.bullets.map((bullet: string, idx: number) => (
            <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
              <div className="w-4 h-4 rounded-full bg-[#D98A10] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100/80 mt-2">
        <button
          onClick={() => setSelectedSector(card)}
          className="w-full py-2.5 px-4 rounded-xl border border-[#0C1D4A]/20 hover:border-[#0C1D4A] text-[#0C1D4A] hover:bg-[#0C1D4A] hover:text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer group/btn"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased py-10 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#D98A10] selection:text-white">
      
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0C1D4A_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D98A10]/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#0C1D4A]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* Main Section Top Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
          <div className="inline-flex items-center space-x-2 bg-white border border-[#D98A10]/40 rounded-full px-5 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98A10] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D98A10] uppercase">
              SECTOR EXPERTISE
            </span>
          </div>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Specialized industrial execution and technical advisory tailored across high-impact manufacturing sectors
          </p>
        </div>

        {}
        <div className="space-y-6">
          <div className="border-l-4 border-[#D98A10] pl-4 sm:pl-5 space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight">
              Industries We Transform
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              High-value engineering sectors where we provide market entry and strategic advisory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {transformSectors.map((card) => renderCard(card))}
          </div>
        </div>

        {}
        <div className="space-y-6 pt-4 sm:pt-6">
          <div className="border-l-4 border-[#D98A10] pl-4 sm:pl-5 space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight">
              Deep Domain Knowledge
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Technical execution expertise for specialized electronics, manufacturing and assembly operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {domainSectors.map((card) => renderCard(card))}
          </div>
        </div>

        {}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="relative bg-white border border-[#D98A10]/40 rounded-2xl sm:rounded-full p-3 sm:p-4 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center space-x-3 px-2 sm:px-4 text-center sm:text-left">
              <div className="w-11 h-11 rounded-full bg-[#0C1D4A] border-2 border-[#D98A10] flex items-center justify-center text-white shrink-0 shadow-md">
                <Sparkles className="w-5 h-5 text-[#D98A10]" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#0C1D4A] tracking-wide">
                Operating in another high-tech sector?
              </p>
            </div>

            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="w-full sm:w-auto py-3 px-6 bg-[#0C1D4A] hover:bg-[#071230] text-white rounded-xl sm:rounded-full font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#D98A10]/30 shrink-0"
            >
              <span>Discuss Your Sector Requirements</span>
              <ArrowRight className="w-4 h-4 text-[#D98A10]" />
            </button>

          </div>
        </div>

      </div>

      {}
      {selectedSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 space-y-5 text-slate-900">
            
            <button
              onClick={() => setSelectedSector(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-2xl bg-[#0C1D4A] text-[#D98A10] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#D98A10] uppercase tracking-wider">Sector {selectedSector.num}</span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0C1D4A]">
                  {selectedSector.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedSector.description}
              </p>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-[#0C1D4A] uppercase tracking-wider">Core Capabilities Delivered</h4>
                <ul className="space-y-1.5">
                  {selectedSector.bullets.map((b: string, i: number) => (
                    <li key={i} className="text-xs text-slate-700 flex items-center space-x-2">
                      <ChevronRight className="w-3 h-3 text-[#D98A10]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => {
                    setSelectedSector(null);
                    setIsConsultModalOpen(true);
                  }}
                  className="py-2.5 px-4 bg-[#D98A10] hover:bg-[#b8730b] text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Request Sector Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setSelectedSector(null)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Close View
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 space-y-5 text-slate-900">
            
            <button
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-[#D98A10] uppercase tracking-wider">Industrial Advisory</span>
              <h3 className="font-serif font-bold text-lg text-[#0C1D4A]">
                Discuss Your Sector Requirements
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Connect with our senior partners for tailor-made industrial advisory
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D98A10]" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Direct Email</p>
                  <a href="mailto:indiabusinessclinic@gmail.com" className="text-xs font-bold text-[#0C1D4A] hover:underline">
                    indiabusinessclinic@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-[#D98A10]" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">WhatsApp / Helpline</p>
                  <a href="tel:+919560714343" className="text-xs font-bold text-[#0C1D4A] hover:underline">
                    +91 9560714343
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsConsultModalOpen(false)}
                  className="w-full py-2.5 bg-[#0C1D4A] hover:bg-[#071230] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}