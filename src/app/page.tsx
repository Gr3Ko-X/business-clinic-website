import React from "react";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Expertise from "@/components/sections/Expertise";
import Pillars from "@/components/sections/Pillars";
import MethodologyRoad from "@/components/sections/MethodologyRoad";
import IndustryGrid from "@/components/sections/IndustryGrid";
import FounderSection from "@/components/sections/FounderSection";
import InsightsGrid from "@/components/sections/InsightsGrid";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import SolutionsWeOffer from "@/components/sections/SolutionsWeOffer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import BtsLandingHero from "@/components/sections/BtsLandingHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      {/* <Hero2 /> */}
      {/* 1.1 add the Marquee section here */}
      <MarqueeSection />

      <BtsLandingHero />
      {/* 2. Core Expertise */}
      <Expertise />

      {/* 3. Core Pillars (Services) */}
      <Pillars />

      {/* 4. Methodology Journeys */}
      <MethodologyRoad />

      {/* 5. Industries We Serve */}
      <IndustryGrid />

      {/* 6. Solutions We Offer */}
      <SolutionsWeOffer />

      {/* 7. Case Studies Grid */}
      <CaseStudiesGrid />

      {/* 7. Founder Section */}
      <FounderSection />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Insights Grid */}
      <InsightsGrid />

      {/* 10. Why Business Clinic Credentials Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Subtle geometric line vector overlays */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/window.svg')] bg-no-repeat bg-center bg-cover" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-white/10 px-4 py-1.5 rounded-full">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              WHY BUSINESS CLINIC
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We combine deep industrial competence with hands-on on-ground execution capabilities to guide your operations in India.
            </p>
          </div>

          {/* Credentials Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto pt-2">
            {[
              "35+ years industrial experience",
              "Practical execution-oriented approach",
              "Defence and aerospace exposure",
              "Technical + operational expertise",
              "India ecosystem understanding",
              "Documentation and validation capabilities",
              "Led by Col Sanjay Chandra (Retd)"
            ].map((bullet) => (
              <div key={bullet} className="flex items-start space-x-3.5 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <div className="bg-accent/20 border border-accent/30 rounded-lg p-1.5 shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-accent stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-slate-100 leading-snug">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-sm font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="h-5 w-5 text-white" />
              <span>Schedule a Consultation</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-500 hover:bg-white/5 text-white px-8 py-4 rounded-sm font-semibold text-sm transition-all"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

