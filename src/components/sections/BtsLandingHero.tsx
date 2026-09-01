"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { BTS_CONTACT_HREF } from "@/lib/bts";

export default function BtsLandingHero() {
  return (
    <section className="relative min-h-[85dvh] flex items-center overflow-hidden">
      <Image
        src="/images/bg_businessClinic.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0c1d4a]/88" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1d4a]/40 via-transparent to-[#c58f1a]/10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#c58f1a] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c58f1a] animate-pulse shrink-0" />
              Exploring India?
            </p>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.08] tracking-tight text-balance">
              Business Clinic at{" "}
              <span className="text-[#c58f1a]">Bengaluru Tech Summit 2026</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Are you an international technology, manufacturing or industrial company exploring
              opportunities in India? We help you move from summit conversations to structured
              market-entry decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href={BTS_CONTACT_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c58f1a] hover:bg-[#a37210] text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-[#c58f1a]/25 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" />
                <span>Book an India Entry Discussion</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <a
                href="#meet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white bg-white/5 hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all backdrop-blur-sm active:scale-[0.98]"
              >
                <span>Meet us at BTS 2026</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#c58f1a]/20 border border-[#c58f1a]/40 rounded-full px-3 py-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c58f1a]">
                  India Entry Partner
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Bengaluru Tech Summit 2026
                </p>
                <p className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
                  17–19 November 2026
                </p>
                <p className="text-[#c58f1a] font-semibold text-sm">Bengaluru</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 text-[#c58f1a] shrink-0 mt-0.5" />
                  <span>Bangalore International Exhibition Centre (BIEC)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Theme: <span className="text-white font-semibold">AI &amp; Beyond</span> — global
                  platform for technology, innovation, and cross-border collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
