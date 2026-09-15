import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Mail,
  MapPin,
  Globe,
  Lock,
  ArrowRight,
} from "lucide-react";
import TableOfContents from "@/components/legal/TableOfContents";

export const metadata = {
  title: "Privacy Policy | India Business Clinic",
  description:
    "Privacy Policy of Spuntech Solutions Pvt. Ltd. (India Business Clinic division) governing how we collect, use, store, protect, and disclose personal information.",
};

const sections = [
  { id: "introduction", number: "1", title: "Introduction" },
  { id: "information-we-collect", number: "2", title: "Information We Collect" },
  { id: "how-we-use-information", number: "3", title: "How We Use Information" },
  { id: "consent-and-lawful-processing", number: "4", title: "Consent and Lawful Processing" },
  { id: "sharing-and-disclosure", number: "5", title: "Sharing and Disclosure" },
  { id: "international-processing", number: "6", title: "International Processing" },
  { id: "cookies", number: "7", title: "Cookies" },
  { id: "data-security", number: "8", title: "Data Security" },
  { id: "data-retention", number: "9", title: "Data Retention" },
  { id: "your-rights", number: "10", title: "Your Rights" },
  { id: "third-party-websites", number: "11", title: "Third-Party Websites" },
  { id: "children", number: "12", title: "Children" },
  { id: "changes", number: "13", title: "Changes" },
  { id: "contact", number: "14", title: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-[#D98A10]/30 shadow-md">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#D98A10]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl border-l-4 border-[#D98A10] pl-4 sm:pl-7 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <ShieldCheck className="h-4 w-4 text-[#D98A10]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
                Legal &amp; Compliance
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Privacy Policy
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
              Spuntech Solutions Pvt. Ltd. · India Business Clinic Division
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                <span><strong>Effective Date:</strong> 10 Sep 2026</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                <span><strong>Last Updated:</strong> 10 Sep 2026</span>
              </div>
              <Link
                href="/terms"
                className="inline-flex items-center gap-1 text-accent hover:text-white transition-colors text-xs font-medium underline underline-offset-4 w-full sm:w-auto mt-1 sm:mt-0"
              >
                <span>View Terms &amp; Conditions</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Sidebar Navigation (Collapsible on Mobile, Sticky on Desktop) */}
            <aside className="lg:col-span-4">
              <TableOfContents
                sections={sections}
                helpTitle="Privacy Inquiries"
                helpDescription="Questions regarding data handling or privacy rights can be directed to our official contact desk."
                helpEmail="sanjay@indiabusinessclinic.com"
              />
            </aside>

            {/* Policy Clauses Body (Justified on Desktop) */}
            <main className="lg:col-span-8">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs space-y-8 sm:space-y-10 text-slate-700">
                {/* 1. Introduction */}
                <article id="introduction" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      1
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Introduction
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <p>
                      This Privacy Policy explains how <strong>Spuntech Solutions Pvt. Ltd.</strong>, through its <strong>India Business Clinic</strong> division (“India Business Clinic”, “we”, “us” or “our”), collects, uses, stores, protects and discloses personal information when you visit or interact with our website and related digital services.
                    </p>
                    <p>
                      India Business Clinic provides industrial advisory and execution-support services to global companies exploring, establishing or expanding their presence in India and to Indian MSMEs seeking business and industrial support.
                    </p>
                  </div>
                </article>

                {/* 2. Information We Collect */}
                <article id="information-we-collect" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      2
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Information We Collect
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 sm:p-5 space-y-2">
                      <p className="font-semibold text-primary">Information You Voluntarily Provide:</p>
                      <p>
                        We may collect information you voluntarily provide, including your name, company name, designation, email address, telephone number, address, website, enquiry details and information submitted through contact or enquiry forms.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 sm:p-5 space-y-2">
                      <p className="font-semibold text-primary">Technical &amp; Automated Information:</p>
                      <p>
                        We may also collect limited technical information automatically, such as IP address, browser and device information, operating system, pages visited, referring website and date/time of access. Cookies or similar technologies may collect information about website use and preferences.
                      </p>
                    </div>
                  </div>
                </article>

                {/* 3. How We Use Information */}
                <article id="how-we-use-information" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      3
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      How We Use Information
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We may use information to respond to enquiries; communicate with prospective and existing clients; understand business requirements; provide and improve services; operate and secure the website; analyse usage; comply with applicable law; and protect our rights, property and users.
                  </p>
                </article>

                {/* 4. Consent and Lawful Processing */}
                <article id="consent-and-lawful-processing" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      4
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Consent and Lawful Processing
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Where required by applicable law, we will obtain consent or rely on another lawful basis for processing personal information. Where processing is based on consent, you may withdraw consent subject to applicable legal, contractual and regulatory limitations.
                  </p>
                </article>

                {/* 5. Sharing and Disclosure */}
                <article id="sharing-and-disclosure" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      5
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Sharing and Disclosure
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <p>
                      We do not sell personal information. Information may be shared with employees, professional advisers, technology and hosting providers, analytics providers and other service providers where reasonably necessary for legitimate business operations and subject to appropriate safeguards.
                    </p>
                    <p>
                      We may also disclose information where required by law, regulation, court order or governmental authority, or where reasonably necessary to protect legal rights, safety or property.
                    </p>
                  </div>
                </article>

                {/* 6. International Processing */}
                <article id="international-processing" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      6
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      International Processing
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    As we may work with global clients and service providers, personal information may be processed or stored outside India. Where applicable, we will take reasonable steps to ensure such processing complies with applicable data-protection requirements.
                  </p>
                </article>

                {/* 7. Cookies */}
                <article id="cookies" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      7
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Cookies
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Our website may use cookies and similar technologies for essential functionality, security, preferences, analytics and performance. You can control cookies through browser settings, although disabling certain cookies may affect website functionality.
                  </p>
                </article>

                {/* 8. Data Security */}
                <article id="data-security" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      8
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Data Security
                    </h2>
                  </div>
                  <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200/70 rounded-xl p-4 sm:p-5 text-xs sm:text-[15px] leading-relaxed text-slate-700 text-left md:text-justify md:hyphens-auto">
                    <Lock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      We use reasonable technical, administrative and organisational safeguards intended to protect personal information from unauthorised access, disclosure, alteration, loss or misuse. No internet transmission or electronic storage system can be guaranteed to be completely secure.
                    </div>
                  </div>
                </article>

                {/* 9. Data Retention */}
                <article id="data-retention" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      9
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Data Retention
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, legitimate business requirements, or applicable legal obligations. When information is no longer required, we may securely delete or anonymise it.
                  </p>
                </article>

                {/* 10. Your Rights */}
                <article id="your-rights" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      10
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Your Rights
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Subject to applicable law, you may have rights relating to access, correction, updating, withdrawal of consent, deletion or other controls over your personal information. Requests may be submitted using the contact details below. We may verify identity before acting on a request.
                  </p>
                </article>

                {/* 11. Third-Party Websites */}
                <article id="third-party-websites" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      11
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Third-Party Websites
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Our website may contain links to third-party websites or services. We are not responsible for their privacy practices, content or security. You should review the privacy policies applicable to those websites.
                  </p>
                </article>

                {/* 12. Children */}
                <article id="children" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      12
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Children
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Our website and services are intended primarily for business and professional users and are not directed specifically at children. We do not knowingly seek to collect children's personal information where prohibited by applicable law.
                  </p>
                </article>

                {/* 13. Changes */}
                <article id="changes" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      13
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Changes
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We may update this Privacy Policy to reflect changes in our services, technology, legal requirements or practices. The updated version will be posted on the website with a revised Last Updated date.
                  </p>
                </article>

                {/* 14. Contact */}
                <article id="contact" className="scroll-mt-24 sm:scroll-mt-28 space-y-4 pt-2">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      14
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Contact Information
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    For privacy questions, requests or concerns, please contact:
                  </p>

                  <div className="bg-gradient-to-br from-[#0C1D4A] to-[#0a1835] text-white rounded-2xl p-5 sm:p-8 space-y-4 shadow-md border border-[#D98A10]/20">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                        Spuntech Solutions Pvt. Ltd.
                      </h3>
                      <p className="text-accent text-xs font-medium tracking-wide">
                        India Business Clinic Division
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                      <div className="flex items-start space-x-3">
                        <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-slate-400 font-medium">Email Address</p>
                          <a
                            href="mailto:sanjay@indiabusinessclinic.com"
                            className="text-white hover:text-accent transition-colors font-medium break-all"
                          >
                            sanjay@indiabusinessclinic.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Globe className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-slate-400 font-medium">Official Website</p>
                          <a
                            href="https://www.indiabusinessclinic.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent transition-colors font-medium"
                          >
                            www.indiabusinessclinic.com
                          </a>
                        </div>
                      </div>

                      <div className="sm:col-span-2 flex items-start space-x-3 pt-2 border-t border-white/10">
                        <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-slate-400 font-medium">Office Address</p>
                          <p className="text-white font-medium">
                            Atmaram House, 1 Tolstoy Marg, New Delhi, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
