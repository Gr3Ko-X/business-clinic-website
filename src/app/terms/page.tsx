import React from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  MapPin,
  Globe,
  Scale,
  ArrowRight,
} from "lucide-react";
import TableOfContents from "@/components/legal/TableOfContents";

export const metadata = {
  title: "Terms & Conditions | India Business Clinic",
  description:
    "Terms and Conditions governing access to and use of the website operated by Spuntech Solutions Pvt. Ltd. through its India Business Clinic division.",
};

const sections = [
  { id: "acceptance", number: "1", title: "Acceptance" },
  { id: "about-india-business-clinic", number: "2", title: "About India Business Clinic" },
  { id: "permitted-use", number: "3", title: "Permitted Use" },
  { id: "website-information", number: "4", title: "Website Information" },
  { id: "professional-services", number: "5", title: "Professional Services" },
  { id: "enquiries", number: "6", title: "Enquiries" },
  { id: "intellectual-property", number: "7", title: "Intellectual Property" },
  { id: "confidentiality", number: "8", title: "Confidentiality" },
  { id: "third-party-links", number: "9", title: "Third-Party Links" },
  { id: "availability-and-security", number: "10", title: "Availability and Security" },
  { id: "limitation-of-liability", number: "11", title: "Limitation of Liability" },
  { id: "indemnity", number: "12", title: "Indemnity" },
  { id: "privacy", number: "13", title: "Privacy" },
  { id: "changes", number: "14", title: "Changes" },
  { id: "governing-law", number: "15", title: "Governing Law and Jurisdiction" },
  { id: "contact", number: "16", title: "Contact Information" },
];

export default function TermsAndConditionsPage() {
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
              <Scale className="h-4 w-4 text-[#D98A10]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
                Legal &amp; Governance
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Terms &amp; Conditions
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
                href="/policy"
                className="inline-flex items-center gap-1 text-accent hover:text-white transition-colors text-xs font-medium underline underline-offset-4 w-full sm:w-auto mt-1 sm:mt-0"
              >
                <span>View Privacy Policy</span>
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
                helpTitle="Legal Assistance"
                helpDescription="For formal enquiries or questions regarding these Terms, contact our legal desk."
                helpEmail="sanjay@indiabusinessclinic.com"
              />
            </aside>

            {/* Terms Clauses Body (Justified on Desktop) */}
            <main className="lg:col-span-8">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs space-y-8 sm:space-y-10 text-slate-700">
                {/* 1. Acceptance */}
                <article id="acceptance" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      1
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Acceptance
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    These Terms &amp; Conditions govern access to and use of the website operated by <strong>Spuntech Solutions Pvt. Ltd.</strong> through its <strong>India Business Clinic</strong> division (“India Business Clinic”, “we”, “us” or “our”). By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.
                  </p>
                </article>

                {/* 2. About India Business Clinic */}
                <article id="about-india-business-clinic" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      2
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      About India Business Clinic
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <p>
                      India Business Clinic is the industrial advisory and execution-support division of <strong>Spuntech Solutions Pvt. Ltd.</strong> It supports global companies seeking to establish or grow their footprint in India and assists Indian MSMEs in addressing business and industrial challenges.
                    </p>
                    <p>
                      Website information describes capabilities and services generally. Specific assignments are governed by separate proposals, statements of work, engagement letters, contracts or other written agreements.
                    </p>
                  </div>
                </article>

                {/* 3. Permitted Use */}
                <article id="permitted-use" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      3
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Permitted Use
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    You must use the website only for lawful purposes. You must not attempt unauthorised access, introduce malicious code, scrape or misuse content, impersonate another person or organisation, interfere with website operation or use the website for unlawful or fraudulent purposes.
                  </p>
                </article>

                {/* 4. Website Information */}
                <article id="website-information" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      4
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Website Information
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We endeavour to keep website information accurate and current, but it may contain omissions, inaccuracies or information that becomes outdated. Website content is general information and is not a substitute for professional, legal, financial, technical, regulatory or other advice tailored to a particular situation.
                  </p>
                </article>

                {/* 5. Professional Services */}
                <article id="professional-services" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      5
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Professional Services
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Website access or an online enquiry does not itself create a client-consultant, agency, partnership, fiduciary or other professional relationship. Scope, deliverables, responsibilities, fees, timelines, assumptions, confidentiality and other terms will be established through appropriate written documentation.
                  </p>
                </article>

                {/* 6. Enquiries */}
                <article id="enquiries" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      6
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Enquiries
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    When submitting an enquiry, you represent that the information provided is accurate to the best of your knowledge and that you are authorised to provide it. Submission of an enquiry does not guarantee acceptance of an assignment or any particular response time.
                  </p>
                </article>

                {/* 7. Intellectual Property */}
                <article id="intellectual-property" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      7
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Intellectual Property
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <p>
                      Unless otherwise stated, website text, graphics, logos, designs, documents, photographs, presentations and other materials are owned by or licensed to us and protected by applicable intellectual-property laws.
                    </p>
                    <p>
                      You may view and use website content for legitimate personal or internal business reference. Reproduction, modification, distribution, publication or commercial exploitation requires prior written permission, except where permitted by law.
                    </p>
                  </div>
                </article>

                {/* 8. Confidentiality */}
                <article id="confidentiality" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      8
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Confidentiality
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Information submitted through a general website form should not be assumed to be confidential unless a confidentiality obligation has been expressly established in writing. Do not submit trade secrets or highly sensitive proprietary information through a public form unless specifically requested and appropriate safeguards are in place.
                  </p>
                </article>

                {/* 9. Third-Party Links */}
                <article id="third-party-links" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      9
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Third-Party Links
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    The website may contain links to third-party websites, applications or resources. These are provided for convenience and do not imply endorsement. We do not control and are not responsible for third-party content, availability, security, privacy practices or terms.
                  </p>
                </article>

                {/* 10. Availability and Security */}
                <article id="availability-and-security" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      10
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Availability and Security
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We do not guarantee that the website will always be available, uninterrupted, error-free or free from harmful components. We may modify, suspend or discontinue website features where reasonably necessary.
                  </p>
                </article>

                {/* 11. Limitation of Liability */}
                <article id="limitation-of-liability" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      11
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Limitation of Liability
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    <p>
                      To the maximum extent permitted by applicable law, <strong>Spuntech Solutions Pvt. Ltd.</strong> and <strong>India Business Clinic</strong> shall not be liable for indirect, incidental, special, consequential or punitive losses arising from or related to use of the website or reliance on general website information.
                    </p>
                    <p>
                      Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.
                    </p>
                  </div>
                </article>

                {/* 12. Indemnity */}
                <article id="indemnity" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      12
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Indemnity
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    To the extent permitted by law, you agree to indemnify and hold harmless Spuntech Solutions Pvt. Ltd., India Business Clinic and their personnel from claims, losses, liabilities, costs or expenses arising from your unlawful use of the website, violation of these Terms or infringement of third-party rights.
                  </p>
                </article>

                {/* 13. Privacy */}
                <article id="privacy" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      13
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Privacy
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    Use of the website is also subject to our{" "}
                    <Link href="/policy" className="text-primary font-semibold underline hover:text-accent">
                      Privacy Policy
                    </Link>
                    , which explains how personal information is collected and handled.
                  </p>
                </article>

                {/* 14. Changes */}
                <article id="changes" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      14
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Changes
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    We may update these Terms from time to time. Updated terms will be posted on the website with a revised Last Updated date. Continued use of the website after an update constitutes acceptance of the revised terms to the extent permitted by law.
                  </p>
                </article>

                {/* 15. Governing Law and Jurisdiction */}
                <article id="governing-law" className="scroll-mt-24 sm:scroll-mt-28 space-y-3">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      15
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Governing Law and Jurisdiction
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    These Terms shall be governed by the laws of India. Subject to applicable law and any contractual dispute-resolution provisions applicable to a specific engagement, courts having appropriate jurisdiction at <strong>New Delhi, India</strong> shall have jurisdiction over disputes arising from or relating to website use.
                  </p>
                </article>

                {/* 16. Contact */}
                <article id="contact" className="scroll-mt-24 sm:scroll-mt-28 space-y-4 pt-2">
                  <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold font-mono shrink-0">
                      16
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      Contact Information
                    </h2>
                  </div>
                  <p className="text-xs sm:text-[15px] leading-relaxed text-slate-600 text-left md:text-justify md:hyphens-auto">
                    For questions regarding these Terms &amp; Conditions, please contact:
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
