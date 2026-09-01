import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Globe,
  Route,
  Handshake,
  MapPin,
  Factory,
  Shield,
  Target,
  MessageSquare,
  Download,
  ExternalLink,
} from "lucide-react";
import BtsLandingHero from "@/components/sections/BtsLandingHero";
import BtsStickyCta from "@/components/sections/BtsStickyCta";
import {
  BTS_ASSESSMENT_ITEMS,
  BTS_CONTACT_HREF,
  BTS_QR_URL,
  BTS_WHATSAPP_HREF,
} from "@/lib/bts";

const assessmentIcons = {
  globe: Globe,
  route: Route,
  handshake: Handshake,
  map: MapPin,
  factory: Factory,
  shield: Shield,
  target: Target,
} as const;

export default function BengaluruTechSummit2026Page() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 pb-20 lg:pb-0">
      <BtsLandingHero />
      <BtsStickyCta />

      {/* Assessment */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#c58f1a] uppercase">
              India Entry Advisory
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0c1d4a] mt-2 leading-tight">
              We can help you assess:
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              A focused discussion framework for international companies evaluating India — not
              generic networking, but structured opportunity validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {BTS_ASSESSMENT_ITEMS.map((item, idx) => {
              const Icon = assessmentIcons[item.icon];
              return (
                <div
                  key={item.title}
                  className="group flex gap-4 p-5 sm:p-6 bg-white border border-slate-200/80 rounded-xl hover:border-[#c58f1a]/40 hover:shadow-md transition-all duration-200"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0c1d4a]/5 border border-[#0c1d4a]/10 flex items-center justify-center text-[#c58f1a] group-hover:bg-[#c58f1a]/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-serif font-bold text-[#0c1d4a] text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet at BTS */}
      <section id="meet" className="py-16 sm:py-20 bg-[#0c1d4a] text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#c58f1a] uppercase">
                At the Summit
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Meet us at BTS 2026
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Schedule a 30-minute India Entry discussion with Business Clinic during
                Bengaluru Tech Summit. We help you qualify opportunities before you commit
                resources — market fit, partners, regulatory path, and next steps.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Pre-summit briefing on your sector and India entry questions",
                  "On-ground opportunity validation during BTS",
                  "Post-summit follow-up with a structured action roadmap",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c58f1a] shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Dates
                  </p>
                  <p className="font-semibold text-white">17–19 Nov 2026</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Venue
                  </p>
                  <p className="font-semibold text-white">BIEC, Bengaluru</p>
                </div>
              </div>
              <Link
                href={BTS_CONTACT_HREF}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c58f1a] hover:bg-[#a37210] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" />
                <span>Book an India Entry Discussion</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0c1d4a] leading-tight">
            Ready to explore India with execution-focused guidance?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Business Clinic is the industrial advisory and India entry division of Spuntech
            Solutions Pvt Ltd — single-window support from strategy through operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href={BTS_CONTACT_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0c1d4a] hover:bg-[#071333] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md active:scale-[0.98]"
            >
              <Calendar className="h-4 w-4 text-[#c58f1a]" />
              <span>Book an India Entry Discussion</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={BTS_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-[#0c1d4a] text-[#0c1d4a] font-bold px-8 py-3.5 rounded-lg text-sm transition-all active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4 text-[#c58f1a]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* QR collateral */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <Image
                  src="/qr/bengaluru-tech-summit-2026.svg"
                  alt="QR code for Business Clinic BTS 2026 landing page"
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-serif font-bold text-lg text-[#0c1d4a]">
                Scan for India Entry Partner
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Use this QR on business cards, brochures, presentations, and BTS collateral.
                Scans open this page with tracking for BTS-generated traffic.
              </p>
              <p className="text-xs font-mono text-slate-500 break-all bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                {BTS_QR_URL}
              </p>
              <a
                href="/qr/bengaluru-tech-summit-2026.svg"
                download="business-clinic-bts-2026-qr.svg"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c58f1a] hover:text-[#a37210] transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download QR (SVG)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <Link
              href="/services/india-entry-support-foreign-industry"
              className="inline-flex items-center gap-2 font-semibold text-[#0c1d4a] hover:text-[#c58f1a] transition-colors"
            >
              <span>India Entry Clinic Services</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link
              href="/insights/bts-2026-strategy-guide"
              className="inline-flex items-center gap-2 font-semibold text-[#0c1d4a] hover:text-[#c58f1a] transition-colors"
            >
              <span>BTS 2026 Strategy Guide</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
