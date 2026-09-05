"use client";

import React, { useState } from "react";
import { Globe, Building2, Quote } from "lucide-react";

type Testimonial = {
  author: string;
  quote: string;
};

const indiaEntryTestimonials: Testimonial[] = [
  {
    author: "European Industrial Technology Company",
    quote:
      "India Business Clinic helped us understand the Indian market beyond what we could learn from desk research. Their practical guidance on market entry, local partnerships and the industrial ecosystem gave us a clear and structured roadmap for entering India.",
  },
  {
    author: "Israeli Technology Company",
    quote:
      "Entering India appeared complex from the outside. India Business Clinic helped us navigate the local business environment, identify the right areas of opportunity and understand the practical steps required to establish a sustainable presence.",
  },
  {
    author: "Overseas Manufacturing Company",
    quote:
      "India Business Clinic acted as our extended team on the ground. Their understanding of Indian manufacturing, vendors and business practices helped us evaluate opportunities and move forward with much greater confidence.",
  },
  {
    author: "Foreign Engineering Company",
    quote:
      "We were looking for more than a market consultant. India Business Clinic brought technical and industrial understanding to the discussion, helping us connect our technology with realistic opportunities in the Indian market.",
  },
  {
    author: "International SME Exploring India",
    quote:
      "India Business Clinic helped us convert our broad interest in India into a practical entry plan. Their hands-on approach and understanding of the Indian business environment made the process considerably clearer and more manageable.",
  },
  {
    author: "Overseas Industrial Technology Company",
    quote:
      "The biggest value India Business Clinic brought was local perspective. They helped us understand what needed to be done, who we needed to engage with and how to approach the Indian market in a structured manner.",
  },
];

const msmeTestimonials: Testimonial[] = [
  {
    author: "Indian Manufacturing MSME",
    quote:
      "India Business Clinic helped us look at our business from a completely different perspective. They identified operational issues that were affecting our performance and provided practical recommendations that we could actually implement.",
  },
  {
    author: "Engineering MSME",
    quote:
      "We approached India Business Clinic with several seemingly unrelated business problems. Their diagnostic approach helped us identify the underlying issues and prioritise the actions that could make the greatest difference.",
  },
  {
    author: "Growing Manufacturing Company",
    quote:
      "India Business Clinic brought much-needed structure to our growth plans. Their combination of manufacturing experience, technical understanding and business perspective helped us make better-informed decisions.",
  },
  {
    author: "MSME Facing Operational Challenges",
    quote:
      "Instead of simply pointing out our problems, India Business Clinic worked with us to understand their causes and develop practical solutions. Their approach was professional, objective and focused on implementation.",
  },
  {
    author: "Technology-Driven MSME",
    quote:
      "India Business Clinic helped us bridge the gap between technology and business execution. Their advice on processes, documentation and implementation gave us greater confidence in taking our next stage of growth.",
  },
  {
    author: "Established Manufacturing MSME",
    quote:
      "What impressed us was the depth of practical experience behind the advice. India Business Clinic understood the realities of running an MSME and provided solutions that considered technology, people, processes and commercial realities together.",
  },
];

type TabId = "india-entry" | "msme";

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("india-entry");

  const tabs: { id: TabId; label: string; icon: typeof Globe; items: Testimonial[] }[] = [
    {
      id: "india-entry",
      label: "India Entry Clinic",
      icon: Globe,
      items: indiaEntryTestimonials,
    },
    {
      id: "msme",
      label: "MSME Clinic",
      icon: Building2,
      items: msmeTestimonials,
    },
  ];

  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            What Our Clients Say About Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Feedback from international companies entering India and MSMEs strengthening operations
            with Business Clinic.
          </p>
        </div>

        {/* Clinic tabs */}
        <div
          role="tablist"
          aria-label="Testimonial categories"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all border ${
                  selected
                    ? "bg-[#0c1d4a] text-white border-[#0c1d4a] shadow-md"
                    : "bg-slate-50 text-[#0c1d4a] border-slate-200 hover:border-[#c58f1a]/50"
                }`}
              >
                <Icon className={`h-4 w-4 ${selected ? "text-[#c58f1a]" : "text-[#c58f1a]"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    selected ? "bg-white/15 text-white" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  {tab.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={active.label}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto"
        >
          {active.items.map((t) => (
            <article
              key={t.author}
              className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#c58f1a]/40 hover:shadow-md transition-all"
            >
              <Quote
                className="absolute top-5 right-5 h-8 w-8 text-[#c58f1a]/20"
                aria-hidden
              />

              <div className="relative z-10 space-y-4 flex-1">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#c58f1a] bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
                  {active.label}
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 border-t border-slate-200/70 pt-4 mt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c1d4a] text-white font-serif font-bold text-sm shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-primary leading-snug">
                    {t.author}
                  </h4>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
