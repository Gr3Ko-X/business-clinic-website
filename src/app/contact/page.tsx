"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageSquare, Clock, ShieldCheck, ArrowRight, Calendar, X } from "lucide-react";
import { BTS_PREFILL_MESSAGE } from "@/lib/bts";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const serviceParam = searchParams.get("service");
  const isBtsSource = source === "bts-2026";

  const [showBtsBanner, setShowBtsBanner] = useState(isBtsSource);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    phone: "",
    service: "india-entry",
    details: "",
  });

  useEffect(() => {
    if (isBtsSource) {
      setShowBtsBanner(true);
      setFormData((prev) => ({
        ...prev,
        service: serviceParam === "india-entry" || !serviceParam ? "india-entry" : prev.service,
        details: prev.details || BTS_PREFILL_MESSAGE,
      }));
    }
  }, [isBtsSource, serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form payload:", formData);
    setFormSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="relative bg-gradient-to-br from-[#0C1D4A] via-[#0b2240] to-[#061230] text-white py-10 sm:py-12 overflow-hidden border-b border-[#D98A10]/20">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        {/* Ambient gold glow */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D98A10]/8 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-4 border-[#D98A10] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D98A10] uppercase">
              Get in Touch
            </span>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
              Schedule a Consultation
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              Have an industrial bottleneck to resolve, or planning your India entry roadmap? Let’s establish a direct execution dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form & Contact cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            
            {/* Left: Contact Info cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                  Direct Contact
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reach out directly to arrange private briefings, factory audits, or feasibility reviews under military NDA conditions.
                </p>
              </div>

              {/* Detail cards */}
              <div className="space-y-4">
                {/* Email card */}
                <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-md flex items-start space-x-4">
                  <div className="p-3 bg-white text-accent rounded-full border border-slate-200 shadow-xs shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Email Address
                    </h3>
                    <a
                      href="mailto:indiabusinessclinic@gmail.com"
                      className="text-sm font-bold text-primary hover:text-accent transition-colors"
                    >
                      indiabusinessclinic@gmail.com
                    </a>
                  </div>
                </div>

                {/* Whatsapp card */}
                <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-md flex items-start space-x-4">
                  <div className="p-3 bg-white text-accent rounded-full border border-slate-200 shadow-xs shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      WhatsApp Dialogue
                    </h3>
                    <a
                      href="https://wa.me/919560714343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:text-accent transition-colors block"
                    >
                      +91 9560714343
                    </a>
                    <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                      Operational 24/7 for urgent troubleshooting
                    </span>
                  </div>
                </div>

                {/* Operations commitment */}
                <div className="bg-cream/30 border border-accent/20 p-6 rounded-md flex items-start space-x-4">
                  <div className="p-3 bg-white text-accent rounded-full border border-accent/20 shadow-xs shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      On-Ground Support Response
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We respond to standard advisory queries within 24 hours. For critical shop-floor troubleshooting (production shutdown or compliance holds), on-site deployment can be arranged immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-lg p-8 sm:p-10 shadow-xs">
              {showBtsBanner && !formSubmitted && (
                <div className="mb-6 flex items-start justify-between gap-3 rounded-lg border border-[#c58f1a]/30 bg-amber-50/80 px-4 py-3">
                  <p className="text-xs sm:text-sm text-[#0c1d4a] font-medium leading-relaxed">
                    You&apos;re booking a <span className="font-bold">BTS 2026 India Entry discussion</span> with Business Clinic at Bengaluru Tech Summit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowBtsBanner(false)}
                    className="shrink-0 text-slate-400 hover:text-slate-700 p-0.5"
                    aria-label="Dismiss banner"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              {formSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="inline-flex p-3 bg-accent/10 rounded-full text-accent mb-2">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-primary">
                    Request Received
                  </h2>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you. Your consultation payload has been received. Our team, led by Col Sanjay Chandra, will contact you shortly to schedule the call.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider"
                    >
                      <span>Submit Another Query</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-xl font-bold text-primary">
                      Consultation Request
                    </h2>
                    <p className="text-xs text-slate-500">
                      Submit details of your project to coordinate calendars.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                        placeholder="e.g. john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div className="space-y-1.5">
                      <label htmlFor="org" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="org"
                        id="org"
                        required
                        value={formData.org}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                        placeholder="e.g. Global Tech OEM"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                        placeholder="e.g. +91 9876543210"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Engagement Category *
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                    >
                      <option value="india-entry">Foreign Company India Entry &amp; Setup</option>
                      <option value="msme-growth">MSME Operations &amp; OEE Optimization</option>
                      <option value="industrial-assurance">Industrial QA &amp; Pre-Dispatch Inspection</option>
                      <option value="documentation">Techno-Commercial / Technical Manuals</option>
                      <option value="regulatory-wpc">Defence Industrial License / WPC import clearances</option>
                    </select>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="details" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Outline of Engagement Requirements *
                    </label>
                    <textarea
                      name="details"
                      id="details"
                      rows={5}
                      required
                      value={formData.details}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-sm py-2.5 px-3.5 text-sm text-slate-700 focus:outline-none focus:border-accent"
                      placeholder="Briefly describe your industrial challenges, target timeline, or factory setup scale..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white py-3.5 px-6 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <Calendar className="h-4.5 w-4.5 text-white" />
                      <span>Request Consultation Booking</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-white min-h-[50vh]" />}>
      <ContactPageContent />
    </Suspense>
  );
}
