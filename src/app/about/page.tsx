import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Globe2, ShieldAlert, Cpu, Calendar } from "lucide-react";

export const metadata = {
  title: "About Us | India Business Clinic",
  description: "Learn about India Business Clinic, led by Col Sanjay Chandra (Retd), bringing 35+ years of military precision, global OEM experience, and manufacturing excellence to India entry and MSME growth.",
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
    "Technical Documentation",
  ];

  return (
    <div className="bg-white">
      {/* 1. Header / Intro banner */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-8 sm:py-16 overflow-hidden border-b border-[#D98A10]/30 shadow-md">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#D98A10]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#0C1D4A]/40 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 border-l-4 border-[#D98A10] pl-4 sm:pl-7 space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#D98A10] animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
                  About India Business Clinic
                </span>
              </div>

              <h1 className="text-white text-xl sm:text-3xl lg:text-4xl font-serif font-bold leading-snug sm:leading-tight">
                Bridging the Gap Between Operational Advice and On-Ground Execution
              </h1>

              {/* Paragraph 1 - Justified */}
              <p className="text-slate-200 text-xs sm:text-[15px] leading-relaxed text-justify hyphens-auto">
                <strong className="text-white font-semibold">India Business Clinic</strong> is the industrial advisory and execution-support division of <strong className="text-white font-semibold">Spuntech Solutions Pvt. Ltd.</strong> It helps global companies navigate the complexities of establishing, developing, and scaling their business footprint in India, while supporting Indian MSMEs in addressing critical business and industrial challenges.
              </p>

              {/* Divider Line between Paragraphs */}
              <div className="h-px w-full bg-gradient-to-r from-[#D98A10]/80 via-white/20 to-transparent my-2 sm:my-3" aria-hidden="true" />

              {/* Paragraph 2 - Justified */}
              <div className="space-y-2.5 sm:space-y-3">
                <p className="text-slate-200 text-xs sm:text-[15px] leading-relaxed text-justify hyphens-auto">
                  Combining <strong className="text-white font-semibold">industrial expertise, business advisory, and execution capabilities</strong>, India Business Clinic bridges the gap between strategy and implementation. Our support extends across the entire journey—from <strong className="text-white font-semibold">diagnosis, strategy, and planning to documentation, regulatory compliance, project execution, validation, and ongoing operational support.</strong>
                </p>
                <p className="text-slate-300 text-xs sm:text-[15px] leading-relaxed text-justify hyphens-auto">
                  Our <strong className="text-white font-semibold">single-window, execution-oriented approach</strong> is designed to deliver practical, outcome-focused solutions across a wide range of industrial sectors, including <strong className="text-white font-semibold">manufacturing, engineering, defence, aerospace, electronics, and other technology-intensive industries.</strong>
                </p>
              </div>

              <div className="pt-1 sm:pt-2 flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider text-[#D98A10] uppercase">
                <span>A preview of our capability spectrum is outlined below</span>
                <span className="inline-block animate-bounce font-mono">↓</span>
              </div>
            </div>

            {/* Right Logo Showcase Column */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative group w-full max-w-[220px] sm:max-w-[300px]">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D98A10]/40 via-white/10 to-[#D98A10]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

                {/* Elegant Glassmorphic Card Container */}
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 p-4 sm:p-8 flex flex-col items-center text-center shadow-2xl space-y-2.5 sm:space-y-4 group-hover:border-[#D98A10]/50 transition-colors">
                  <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-white shadow-xl flex items-center justify-center p-2.5 sm:p-4.5 border-2 border-[#D98A10]/30 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/logo/IBC.png"
                      alt="India Business Clinic Logo"
                      width={140}
                      height={140}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="font-serif font-bold text-white text-sm sm:text-base tracking-wide">
                      India Business Clinic
                    </p>
                    <p className="text-[10px] sm:text-xs text-amber-200/90 font-medium tracking-wider uppercase">
                      India Entry Solutions &amp; Industrial Troubleshooting
                    </p>
                  </div>

                  <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0c1d4a]/80 border border-[#D98A10]/40 text-[10px] sm:text-[11px] font-bold text-amber-300 tracking-wide">
                    Spuntech Solutions Pvt. Ltd.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Spectrum Section */}
      <section className="py-8 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Expertise
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#0C1D4A]">
              Our Capability Spectrum
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Comprehensive end-to-end execution capabilities across all business domains
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto">
            {capabilitySpectrum.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-lg sm:rounded-xl p-2.5 sm:p-4 flex items-center space-x-2.5 sm:space-x-3.5 hover:shadow-md transition-all">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md sm:rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0 shadow-sm">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section id="leadership-profile" className="py-8 sm:py-20 border-b border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Image & Core details */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-44 sm:w-full max-w-[180px] sm:max-w-[320px] aspect-[4/5] rounded-xl sm:rounded-lg overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/assets/founder.webp"
                  alt="Col Sanjay Chandra (Retd)"
                  fill
                  className="object-cover object-bottom bg-slate-50"
                  sizes="(max-width: 640px) 180px, 320px"
                />
              </div>

              <div className="mt-4 sm:mt-6 text-center lg:text-left space-y-1.5 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-primary">Col Sanjay Chandra (Retd)</h3>
                <p className="text-[11px] sm:text-xs text-accent font-bold uppercase tracking-wider">
                  Founder &amp; Principal Architect
                </p>
                <div className="h-0.5 bg-accent w-10 sm:w-12 mx-auto lg:mx-0 my-2 sm:my-3" />
                <p className="text-xs text-slate-500 max-w-[280px] leading-relaxed">
                  Former Director, PMO Suraj, Indian Army. Former Senior Vice President – Defence Manufacturing.
                </p>
              </div>
            </div>

            {/* Right text contents */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-3xl font-serif font-bold text-primary">
                35+ Years of Industrial Leadership &amp; Defence Expertise
              </h2>
              
              <blockquote className="border-l-4 border-accent pl-4 sm:pl-6 italic text-slate-700 font-serif text-sm sm:text-lg">
                “For over 35 years, I’ve transformed technical challenges into measurable business outcomes. India Business Clinic is built to help Indian Industries and global companies achieve sustainable growth in India’s evolving industrial ecosystem.”
              </blockquote>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                During his military and corporate tenure, Col Sanjay Chandra (Retd) managed some of India’s most complex defence acquisitions and industrial integrations. His expertise spans turnkey manufacturing lines, aerospace standards, military electronics, international joint ventures, and facility certification.
              </p>

              {/* Major Projects list */}
              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-primary border-b border-slate-100 pb-2 flex items-center space-x-2">
                  <Award className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-accent" />
                  <span>Major Projects Guided &amp; Executed</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3">
                  {majorProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0" />
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
      <section className="bg-slate-50/50 py-8 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Col 1: International Exposure */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary flex items-center space-x-2">
                <Globe2 className="h-5 w-5 text-accent" />
                <span>International Exposure &amp; Joint Ventures</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Col Sanjay Chandra has collaborated closely with leading global organizations in the USA, Israel, and Europe for manufacturing technology transfer and localized system setups.
              </p>

              <div className="space-y-3 sm:space-y-4 bg-white border border-slate-200/80 rounded-xl sm:rounded-md p-4 sm:p-6 shadow-sm">
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
              <div className="space-y-2.5 sm:space-y-3 pt-2">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-500">
                  Specialized International Training
                </h4>
                <ul className="space-y-2">
                  {internationalTraining.map((train, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs text-slate-600">
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
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-accent" />
                <span>Industrial Facility Development</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Direct hands-on experience establishing military and industrial infrastructure from empty footprints to certification readiness.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {facilityExperience.map((fac, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 rounded-xl sm:rounded-md p-4 sm:p-6 shadow-sm flex items-start space-x-3.5 sm:space-x-4"
                  >
                    <div className="h-7 w-7 sm:h-8 sm:w-8 bg-primary text-white rounded-full flex items-center justify-center font-serif font-bold text-xs sm:text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-primary mb-0.5 sm:mb-1">
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
      <section className="py-8 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-3 sm:space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Our Structure
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary">
              Scalable Team Architecture
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              India Business Clinic utilizes a hybrid team layout under a Principal Architect to provide highly specialized expertise without bloated corporate overheads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Internal Specialists */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-lg p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="border-b border-slate-200 pb-3 sm:pb-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-primary">
                  Internal Core Specialists
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Managing strategy, audits, and compliance validation.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {internalSpecialists.map((spec) => (
                  <li key={spec} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: spec }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* External hooks */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-lg p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="border-b border-slate-200 pb-3 sm:pb-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-primary">
                  Specialized External Hooks
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  On-ground networks for legal, HR, logistics, and admin.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
      <section className="bg-primary text-white py-8 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-white">
            Looking for a Trustworthy Partner to Execute in India?
          </h2>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto">
            Schedule a consultation directly with Col Sanjay Chandra (Retd) to evaluate feasibility or resolve operational bottlenecks.
          </p>
          <div className="pt-1 sm:pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-md w-full sm:w-auto"
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
