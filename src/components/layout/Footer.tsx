import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1d4a] text-white border-t border-[#0a1835]">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-start gap-8 sm:gap-8 md:gap-10 lg:gap-0">
          {/* Col 1: About Business Clinic */}
          <div className="space-y-4 lg:max-w-[260px] lg:shrink-0">
            <div className="flex items-center space-x-3.5 md:block">
              <Link
                href="/"
                className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl md:rounded-full bg-slate-200 p-2 shadow-sm shrink-0"
              >
                <Image
                  src="/images/logo/IBC.png"
                  alt="India Business Clinic"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </Link>
              <div className="md:hidden">
                <span className="font-serif text-lg font-bold text-white block">Business Clinic</span>
                <span className="text-xs text-[#c58f1a] font-medium tracking-wide block">Industrial Advisory &amp; Execution</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-1 md:pt-2">
              Business Clinic is the industrial advisory and execution-support division of Spuntech Solutions Pvt Ltd.
            </p>
            <div className="flex items-center space-x-4 pt-1 md:pt-2">
              <a
                href="https://www.linkedin.com/in/colsanjaychandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-accent transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 md:bg-transparent md:border-0 md:p-0"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4 md:h-5 md:w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="md:hidden">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Mobile 2-col navigation links wrapper, dissolved into parent grid/flex on md+ */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 md:contents md:border-0 md:pt-0">
            {/* Col 2: Services */}
            <div className="space-y-3 md:space-y-0 lg:shrink-0">
              <h3 className="font-serif text-sm sm:text-base font-semibold tracking-wide text-white mb-3 md:mb-6 uppercase text-accent md:text-white">
                Our Clinics
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link href="/services/india-entry-support-foreign-industry" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    India Entry Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/services/indian-msme-troubleshooting" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Indian MSME Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/services/defence-aerospace-clinic" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Defence &amp; Aerospace Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/services/legal-company-secretary-ca-services" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Support Clinic
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="space-y-3 md:space-y-0 lg:shrink-0">
              <h3 className="font-serif text-sm sm:text-base font-semibold tracking-wide text-white mb-3 md:mb-6 uppercase text-accent md:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Featured Insights
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap">
                    Our Methodology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/indian-msme-troubleshooting/health-check"
                    className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap"
                  >
                    MSME Health Check
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/india-entry-support-foreign-industry/scorecard"
                    className="text-slate-400 hover:text-accent transition-colors block py-0.5 whitespace-nowrap"
                  >
                    India Entry Scorecard
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-4 sm:space-y-5 pt-6 border-t border-white/10 md:border-0 md:pt-0 lg:max-w-[360px] lg:shrink-0">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 md:bg-transparent md:border-0 md:p-0 space-y-4">
              <div className="flex items-center justify-between md:block">
                <h3 className="font-serif text-sm sm:text-base font-semibold tracking-wide text-white md:mb-2 uppercase">
                  Reach Out
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium md:hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Support
                </span>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Have an industrial challenge or planning to establish a facility in India? Speak to our team.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm">
                {/* Email Item */}
                <li className="flex items-start space-x-3 text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5 md:bg-transparent md:p-0 md:border-0">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1 min-w-0">
                    <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-1.5">
                      <span className="text-xs text-slate-400 font-medium shrink-0">Primary:</span>
                      <a
                        href="mailto:sanjay@indiabusinessclinic.com"
                        className="hover:text-accent transition-colors break-all sm:break-normal whitespace-normal sm:whitespace-nowrap"
                      >
                        sanjay@indiabusinessclinic.com
                      </a>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-1.5">
                      <span className="text-xs text-slate-400 font-medium shrink-0">Alternate:</span>
                      <a
                        href="mailto:indiabusinessclinic@gmail.com"
                        className="hover:text-accent transition-colors break-all sm:break-normal whitespace-normal sm:whitespace-nowrap"
                      >
                        indiabusinessclinic@gmail.com
                      </a>
                    </div>
                  </div>
                </li>

                {/* WhatsApp Item */}
                <li>
                  <a
                    href="https://wa.me/919560714343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 p-2.5 rounded-xl transition-all group md:bg-transparent md:border-0 md:p-0 md:hover:bg-transparent"
                  >
                    <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 md:bg-transparent md:p-0 md:text-accent">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
                      <span className="text-white group-hover:text-accent transition-colors font-medium text-xs sm:text-sm whitespace-nowrap">
                        +91 9560714343
                      </span>
                      <span className="text-[11px] text-emerald-400 md:text-slate-300 md:text-xs whitespace-nowrap">
                        (WhatsApp)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#071333] py-5 sm:py-6 border-t border-[#0a1835] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 text-center lg:text-left">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-normal whitespace-normal lg:whitespace-nowrap">
            © {new Date().getFullYear()} Business Clinic. Business Clinic is a business division/brand of Spuntech Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
            <Link href="/contact" className="hover:text-accent transition-colors">
              Schedule Consultation
            </Link>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">India Entry &amp; Operations Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
