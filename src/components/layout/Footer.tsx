import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1d4a] text-white border-t border-[#0a1835]">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: About Business Clinic */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo/IBC.png"
                alt="India Business Clinic"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed pt-2">
              Business Clinic is the industrial advisory and execution-support division of Spuntech Solutions Pvt Ltd.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/in/col-sanjay-chandra-retd-0824b216/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide text-white mb-6 uppercase">
              Our Clinics
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/india-entry-support-foreign-industry" className="text-slate-400 hover:text-accent transition-colors">
                  India Entry Clinic
                </Link>
              </li>
              <li>
                <Link href="/services/indian-msme-troubleshooting" className="text-slate-400 hover:text-accent transition-colors">
                  Indian MSME Clinic
                </Link>
              </li>
              <li>
                <Link href="/services/defence-aerospace-clinic" className="text-slate-400 hover:text-accent transition-colors">
                  Defence &amp; Aerospace Clinic
                </Link>
              </li>
              <li>
                <Link href="/services/legal-company-secretary-ca-services" className="text-slate-400 hover:text-accent transition-colors">
                  Support Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold tracking-wide text-white mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-accent transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-accent transition-colors">
                  Featured Insights
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-slate-400 hover:text-accent transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/indian-msme-troubleshooting/health-check"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  MSME Health Check
                </Link>
              </li>
              <li>
                <Link
                  href="/services/india-entry-support-foreign-industry#scorecard-tool"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  India Entry Scorecard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-semibold tracking-wide text-white mb-2 uppercase">
              Reach Out
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have an industrial challenge or planning to establish a facility in India? Speak to our team.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:indiabusinessclinic@gmail.com" className="hover:text-accent transition-colors">
                  indiabusinessclinic@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="https://wa.me/919560714343" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +91 9560714343 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#071333] py-6 border-t border-[#0a1835] text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Business Clinic. Business Clinic is a business division/brand of Spuntech Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
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
