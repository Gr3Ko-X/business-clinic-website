import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Settings, 
  HelpCircle, 
  ArrowRight, 
  Award, 
  Radio, 
  MapPin, 
  Check, 
  BookOpen 
} from "lucide-react";

export const metadata = {
  title: "Defence & Aerospace Clinic | Business Clinic",
  description: "Regulatory facilitation, offset advisory, indigenization, and WPC frequency licensing for the Indian defence sector.",
};

export default function DefenceAerospaceClinicPage() {
  const positioning = [
    {
      title: "Licensing & Regulatory Facilitation",
      desc: "Providing guidance through statutory licensing processes under current industrial and Arms Act frameworks.",
      icon: ShieldCheck
    },
    {
      title: "Offset & Technology Transfer (ToT)",
      desc: "Structuring offset partnerships and managing technical absorption files for overseas engineering integrations.",
      icon: Settings
    },
    {
      title: "Partnerships & Localisation",
      desc: "Identifying and vetting local manufacturing suppliers to establish custom indigenous capabilities.",
      icon: Award
    },
    {
      title: "WPC & DoT Clearances",
      desc: "Coordinating specific equipment type approvals (ETA) and frequency licensing for RF and wireless devices.",
      icon: Radio
    },
    {
      title: "Trials & Exhibitions Support",
      desc: "Providing local logistics, site readiness, and technical support for military trials, demonstrations, and trade shows.",
      icon: MapPin
    },
    {
      title: "Stakeholder Engagement",
      desc: "Facilitating regulatory communication and alignment with strategic procurement and user organizations.",
      icon: BookOpen
    }
  ];

  const founderBackground = {
    name: "Col Sanjay Chandra (Retd)",
    role: "Founder, Business Clinic",
    tenure: "35+ Years of Strategic Leadership & Defence Manufacturing",
    details: [
      "Former Director, PMO Suraj, Electronic Warfare Directorate, Indian Army (Corps of Signals)",
      "Technical background in frequency management, spectrum planning, and military communication systems",
      "Electronics & Telecommunication Engineer with DRDO and technical evaluation team service",
      "Supported by practicing advocates with expertise in Company Law and foreign corporate contracts",
      "Managed key international OEM integrations with Raytheon (USA), Thales (France), and Elta (Israel)",
      "Direct technical training in EPLARS Radio Systems (Raytheon, USA) and Electronic Warfare (Thales, France)"
    ],
    projects: [
      "Integrated Electronic Warfare Project (Samyukta), Indian Army",
      "Integrated Underwater Harbour Surveillance System, Indian Navy",
      "AEW&C Programme, Indian Air Force",
      "Modernization of Airfield Infrastructure, Indian Air Force",
      "Power Distribution Systems for Flycatcher Radar, Indian Army"
    ]
  };

  const industriesServed = [
    "Radar & Electro-optics",
    "Electronic Warfare Systems",
    "HF DF Antenna Systems",
    "Military-grade Cable Harnesses",
    "Mobile Calibration Labs",
    "AEW&C & Search & Rescue Systems"
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
              Solutions // Strategic Sectors
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Defence &amp; Aerospace Clinic
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              Guiding global defence OEMs and domestic suppliers through India's strict licensing regimes, offset compliance, WPC/DoT frequency authorizations, and localization programs.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Request Advisory Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities (Positioning) */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Advisory Scope</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Defence &amp; Industrial Facilitation</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Custom-tailored support to navigate domestic indigenisation and procurement policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positioning.map((pos, idx) => {
              const Icon = pos.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-xl p-8 shadow-xs hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-amber-50 text-[#D98A10] rounded-xl inline-block border border-amber-200">
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary">{pos.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pos.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Founder Authority & Case Projects (Business Clinic Facts) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder Bio */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l-4 border-[#D98A10] pl-4 space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Proven Leadership</span>
                <h2 className="text-3xl font-serif font-bold text-primary">{founderBackground.name}</h2>
                <p className="text-xs text-slate-700 font-bold uppercase">{founderBackground.role} // {founderBackground.tenure}</p>
              </div>

              <div className="space-y-3 pt-2">
                {founderBackground.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <Check className="h-4.5 w-4.5 text-[#D98A10] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Projects */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-8 space-y-6">
              <h3 className="font-serif text-lg font-bold text-primary border-b border-slate-200 pb-3">Strategic Project Experience</h3>
              <div className="space-y-4">
                {founderBackground.projects.map((proj, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Verified Regulatory Guidelines */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Regulatory Analysis</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Indian Defence Regulatory Requirements</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              An overview of applicable statutory licensing structures for companies seeking to operate in India's defence sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">Defence Industrial Licensing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Governed under the Industries (Development and Regulation) Act, 1951 (IDR Act) and the Arms Act, 1959. Manufacturing of specified defence items, aerospace subassemblies, and weapons systems requires licensing:
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>DPIIT Portal:</strong> Applications for items under the industrial licensing list must be filed via the DPIIT single-window portal.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>MHA Clearance:</strong> Specific armaments and firearms manufacturing fall under the licensing jurisdiction of the Ministry of Home Affairs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>MoD Security Verification:</strong> Approval is contingent on verification of production layout, physical security, and foreign shareholder details.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">DoT / WPC Wireless Authorization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating, importing, or testing RF transmitters or wireless communication equipment is regulated by the Wireless Planning & Coordination (WPC) wing of the Department of Telecommunications (DoT):
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>Equipment Type Approval (ETA):</strong> Mandatory for all RF/wireless hardware operating in de-licensed frequency bands.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>SACFA Site Clearance:</strong> Crucial coordination for spectrum allocation and operational site parameters clearance.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>Experimental &amp; Test Licensing:</strong> Facilitation of licenses for trials, field testing, and manufacturing verification.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D98A10] font-bold mr-1">•</span>
                  <span><strong>WPC Import Licences:</strong> Necessary for customs clearance of specific transmitter components and antenna arrays.</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-center text-slate-600 mt-8 leading-relaxed max-w-lg mx-auto font-medium">
            Disclaimer: The above information reflects general regulatory requirements compiled from public sources (DPIIT/DoT/WPC portals) and does not constitute formal legal advice. Business Clinic does not guarantee licensing approvals.
          </p>
        </div>
      </section>

      {/* 4.5. DIL 7-Step Licensing Process Timeline & Value Proposition */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: DIL 7-Step Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border-l-4 border-[#D98A10] pl-4 space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">Step-by-Step Pathway</span>
                <h3 className="text-2xl font-serif font-bold text-primary">DIL Licensing Process Flow</h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  The sequential roadmap for securing a Defence Industrial License (DIL) under the DPIIT and Ministry of Defence.
                </p>
              </div>

              <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
                {[
                  { step: "01", title: "Product Mapping", desc: "Correlating high-tech components to the official list of items requiring licensing." },
                  { step: "02", title: "Technical Dossier Preparation", desc: "Compiling strict layout designs, process flows, security parameters, and capacity estimates." },
                  { step: "03", title: "DPIIT Application Submission", desc: "Filing the official request through the single-window portal with supporting secretarial docs." },
                  { step: "04", title: "MoD Technical Evaluation", desc: "Review of engineering layouts and production plans by technical committees from the Ministry of Defence." },
                  { step: "05", title: "Security Vetting (MHA/IB)", desc: "Background and corporate structure verification by the Ministry of Home Affairs and Intelligence Bureau." },
                  { step: "06", title: "Clarifications / Site Visit", desc: "On-ground inspections of plant layouts, inventory control, security gates, and technical validation." },
                  { step: "07", title: "License Issuance", desc: "Final clearance and formal issuance of the Defence Industrial License by the licensing authority." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[35px] top-0.5 bg-primary text-white text-xs font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border border-white">
                      {item.step}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Value Proposition & Radar Specs */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
                <h3 className="font-serif text-lg font-bold text-primary border-b border-slate-200 pb-3">
                  Business Clinic Value Proposition
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Deep Defence Insight", desc: "Ex-signals military leadership with first-hand experience in Army procurement procedures and security compliance." },
                    { title: "Dual-Spectrum Technical Foundation", desc: "Qualified telecommunication and RF engineers with over 30 years of DRDO and technical evaluation tenures." },
                    { title: "End-to-End Coordination", desc: "Strategic facilitation across DPIIT, Ministry of Defence (MoD), Ministry of Home Affairs (MHA), and regulatory bodies." },
                    { title: "Document Vetting Speed", desc: "Minimizing administrative delays by securing completely compliant and audited dossiers before filing." },
                    { title: "High Credibility", desc: "First-hand understanding of military security protocols, trials logistics, and defense-grade setups." }
                  ].map((val, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-sans font-bold text-xs text-[#D98A10] uppercase tracking-wider">{val.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radar Antenna Box */}
              <div className="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-8 space-y-3">
                <span className="text-xs font-bold text-[#D98A10] uppercase tracking-widest block">Specialized Segment</span>
                <h4 className="font-serif text-base font-bold text-primary">Radar Antenna Manufacturing</h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  We provide specialized, mission-critical advisory and on-ground licensing facilitation for high-technology organizations establishing manufacturing and assembly lines for <strong>radar antennas in the 3 GHz and 10 GHz frequency bands</strong> in India.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Need Expert Guidance for Defence Localisation or WPC Compliance?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact us to discuss offset requirements, technology transfer absorbency, visual SOPs, or testing layout compliance.
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
