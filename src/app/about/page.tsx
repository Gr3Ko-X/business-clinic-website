import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Globe2, ShieldAlert, Cpu, Calendar } from "lucide-react";

export const metadata = {
  title: "About Us | Business Clinic",
  description: "Learn about Business Clinic, led by Col Sanjay Chandra (Retd), bringing 35+ years of military precision, global OEM experience, and manufacturing excellence to India entry and MSME growth.",
};

export default function AboutPage() {
  const majorProjects = [
    "Integrated Electronic Warfare Project (Samyukta), Indian Army",
    "Integrated Underwater Harbour Surveillance System, Indian Navy",
    "AEW&C Programme, Indian Air Force",
    "Search &amp; Rescue Systems, Indian Air Force",
    "Modernization of Airfield Infrastructure, Indian Air Force",
    "Power Distribution Systems for Flycatcher Radar, Indian Army",
    "HF DF Antenna Systems, Elisra, Israel",
    "Mobile Calibration Lab ATE/STE, Tadiran Spectra Link, Israel",
    "Power Distribution Systems for MCS &amp; GCS, Mabat, Israel",
    "Power Systems for Flycatcher Radar, ADTL, India",
    "Power Distribution Units for CT Scan Systems, GE",
    "Power Distribution Units for MRI Systems, CLT",
    "Maintenance of ATM based Systems, Indian Navy",
  ];

  const internationalExposure = [
    { country: "USA", companies: ["Raytheon", "Sensorcom"] },
    { country: "Israel", companies: ["Elta", "Elisra", "Tadiran Spectra Link", "Mabat", "Malat", "Acom", "Shemer", "Gamatronics", "CLT", "ISOP"] },
    { country: "Europe", companies: ["Thales (France)", "EADS (Germany)", "Electronica (Hungary)", "Mechanical Laboratory (Hungary)"] },
  ];

  const internationalTraining = [
    "Raytheon Facility, Fullerton, USA – EPLARS Radio Systems",
    "Raytheon Facility, Fort Wayne, USA – MXF4087 Systems",
    "Thales Facility, France – Electronic Warfare Systems",
    "Electronica, Hungary – HT 16 Systems",
  ];

  const facilityExperience = [
    "Mobile Calibration Laboratory conforming to ISO 17025",
    "Military-grade Cable Harness Manufacturing Facility",
    "Power Distribution Unit (PDU) Manufacturing Facility",
  ];

  const internalSpecialists = [
    "Feasibility Study",
    "Market Evaluation",
    "SCM &amp; CRM",
    "Audit &amp; Assessment",
    "Project Management",
    "Risk Management",
  ];

  const externalHooks = [
    "Incorporation &amp; Establishment",
    "Licensing &amp; Certification",
    "Compliance &amp; Legal",
    "HR, Finance &amp; Tax",
    "Project Execution",
    "Logistics &amp; Admin",
  ];

  const capabilitySpectrum = [
    "Industrial Advisory",
    "Execution Support",
    "Technical Assurance",
    "Manufacturing Excellence",
    "India Industrial Partner",
    "Vendor Validation",
    "Industrial Governance",
    "Operational Excellence",
    "Technology Absorption Support",
    "Quality Assurance",
    "Manufacturing Readiness",
  ];

  return (
    <div className="bg-white">
      {/* 1. Header / Intro banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-12 overflow-hidden border-b border-[#D98A10]/20">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
              <span className="text-xs sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
                About Business Clinic
              </span>
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                Bridging the Gap Between Operational Advice and On-Ground Execution
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
                Business Clinic is the industrial advisory and execution-support division of Spuntech Solutions Pvt Ltd. Business Clinic helps global companies in establishing and growing their footprint in India and assist Indian MSMEs solve business and industrial challenges. Combining industrial expertise, business advisory and execution capabilities, we bridge the gap between strategy and implementation—from diagnosis and planning to documentation, compliance, project execution, validation and ongoing support. Our single-window, execution-oriented approach delivers practical solutions across manufacturing, engineering, defence, aerospace, electronics and other industrial sectors. Preview of capability spectrum is listed:
              </p>
            </div>

            <div className="shrink-0 flex justify-center lg:justify-end self-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-slate-100 border border-white/30 shadow-lg flex items-center justify-center p-3 sm:p-4">
                <Image
                  src="/images/logo/IBC.png"
                  alt="India Business Clinic"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Spectrum Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Spectrum of Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C1D4A]">
              Our Capability Spectrum
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Comprehensive end-to-end execution capabilities across modern manufacturing and engineering domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {capabilitySpectrum.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center space-x-3.5 hover:shadow-md transition-all">
                <div className="h-8 w-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Image & Core details */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/assets/founder.png"
                  alt="Col Sanjay Chandra (Retd)"
                  fill
                  className="object-cover object-bottom bg-slate-50"
                  sizes="(max-w-720px) 100vw, 320px"
                />
              </div>

              <div className="mt-6 text-center lg:text-left space-y-2">
                <h3 className="text-xl font-bold text-primary">Col Sanjay Chandra (Retd)</h3>
                <p className="text-xs text-accent font-bold uppercase tracking-wider">
                  Founder &amp; Principal Architect
                </p>
                <div className="h-0.5 bg-accent w-12 mx-auto lg:mx-0 my-3" />
                <p className="text-xs text-slate-500 max-w-[280px] leading-relaxed">
                  Former Director, PMO Suraj, Indian Army. Former Senior Vice President – Defence Manufacturing.
                </p>
              </div>
            </div>

            {/* Right text contents */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                35+ Years of Industrial Leadership &amp; Defence Expertise
              </h2>
              
              <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 font-serif text-base sm:text-lg">
                “For over 35 years, I’ve transformed technical challenges into measurable business outcomes. Business Clinic is built to help Indian Industries and global companies achieve sustainable growth in India’s evolving industrial ecosystem.”
              </blockquote>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                During his military and corporate tenure, Col Sanjay Chandra (Retd) managed some of India’s most complex defence acquisitions and industrial integrations. His expertise spans turkey manufacturing lines, aerospace standards, military electronics, international joint ventures, and facility certification.
              </p>

              {/* Major Projects list */}
              <div className="space-y-4 pt-4">
                <h3 className="font-serif text-lg font-bold text-primary border-b border-slate-100 pb-2 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Major Projects Guided &amp; Executed</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {majorProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-xs text-slate-700 leading-tight" dangerouslySetInnerHTML={{ __html: proj }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. International Exposure & Facility Setup */}
      <section className="bg-slate-50/50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Col 1: International Exposure */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary flex items-center space-x-2">
                <Globe2 className="h-5 w-5 text-accent" />
                <span>International Exposure &amp; Joint Ventures</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Col Sanjay Chandra has collaborated closely with leading global organizations in the USA, Israel, and Europe for manufacturing technology transfer and localized system setups.
              </p>

              <div className="space-y-4 bg-white border border-slate-200/80 rounded-md p-6 shadow-sm">
                {internationalExposure.map((exp) => (
                  <div key={exp.country} className="space-y-1.5">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                      Partner Organizations ({exp.country})
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-200">
                      {exp.companies.join(", ")}
                    </p>
                  </div>
                ))}
              </div>

              {/* International Training */}
              <div className="space-y-3 pt-2">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-500">
                  Specialized International Training
                </h4>
                <ul className="space-y-2">
                  {internationalTraining.map((train, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-slate-600">
                      <div className="h-4 w-4 bg-accent/15 text-accent rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span>{train}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 2: Facility setups */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-accent" />
                <span>Industrial Facility Development</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Direct hands-on experience establishing military and industrial infrastructure from empty footprints to certification readiness.
              </p>

              <div className="space-y-6">
                {facilityExperience.map((fac, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-md p-6 shadow-sm flex items-start space-x-4"
                  >
                    <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">
                        {fac}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Design, tool placement, environmental compliance, standard workflows (SOPs), calibration, and quality readiness audit setup.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Team Structure section */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Our Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Scalable Team Architecture
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Business Clinic utilizes a hybrid team layout under a Principal Architect to provide highly specialized expertise without bloated corporate overheads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Internal Specialists */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-serif text-lg font-bold text-primary">
                  Internal Core Specialists
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Managing strategy, audits, and compliance validation.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {internalSpecialists.map((spec) => (
                  <li key={spec} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: spec }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* External hooks */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-serif text-lg font-bold text-primary">
                  Specialized External Hooks
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  On-ground networks for legal, HR, logistics, and admin.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {externalHooks.map((hook) => (
                  <li key={hook} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: hook }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Looking for a Trustworthy Partner to Execute in India?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a consultation directly with Col Sanjay Chandra (Retd) to evaluate feasibility or resolve operational bottlenecks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <Calendar className="h-4.5 w-4.5 text-white" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
