"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Award, ShieldAlert, Check } from "lucide-react";

export default function FounderSection() {
  const credentials = [
    "Former Director, PMO Suraj, Indian Army",
    "Former Senior Vice President – Defence Manufacturing (Public Limited Co.)",
    "35+ Years of Experience in Turnkey Solutions &amp; Industrial Execution",
    "India Entry Support for Global OEMs &amp; Industrial Growth Strategist",
  ];

  return (
    <section className="bg-slate-50/50 py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block">
              Founder Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary leading-tight">
              Industrial Growth &amp; India Entry Partner<br />
              <span className="text-accent">We execute, not just advise</span>
            </h2>

            {/* Founder Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-1 italic text-slate-700 text-lg font-serif">
              “For over 35 years, I’ve transformed technical challenges into measurable business outcomes. Business Clinic is built to help MSMEs and global companies achieve sustainable growth in India’s evolving industrial ecosystem.”
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Led by Col Sanjay Chandra (Retd), Business Clinic bridges the operational gaps that consulting firms leave behind. We combine military precision, global OEM standards, and deep local industrial knowledge to deliver practical shop-floor results.
            </p>

            {/* Qualifications / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start space-x-3">
                  <div className="p-0.5 bg-accent/10 rounded-full text-accent shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700" dangerouslySetInnerHTML={{ __html: cred }} />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-semibold text-sm transition-all"
              >
                <span>Meet the Founder &amp; Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-sm font-semibold text-sm transition-all"
              >
                <Calendar className="h-4 w-4 text-accent" />
                <span>Schedule Private Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden border border-slate-200 bg-white shadow-lg flex flex-col justify-between">
              
              {/* Image Frame */}
              <div className="relative flex-grow w-full bg-slate-50 flex items-end">
                <Image
                  src="/founder.png"
                  alt="Col Sanjay Chandra (Retd)"
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-w-720px) 100vw, 360px"
                />
              </div>

              {/* Title Banner */}
              <div className="bg-primary text-white p-5 border-t border-slate-800 text-center">
                <h3 className="font-sans font-bold text-base text-white">
                  Col Sanjay Chandra (Retd)
                </h3>
                <p className="text-[11px] text-accent font-semibold tracking-wider mt-1 uppercase">
                  Founder, Business Clinic | Former Director, PMO Suraj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
