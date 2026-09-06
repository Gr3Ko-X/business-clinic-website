import React from "react";
import Hero from "@/components/sections/Hero";
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
import { Cpu, Zap, Shield, ShieldCheck, Building2, Globe } from "lucide-react";
import BtsLandingHero from "@/components/sections/BtsLandingHero";

export default function Home() {

  const whoWeServe = [
    { name: "Global Companies", icon: Globe, detail: "Market Entry & Expansion" },
    { name: "Indian Industry", icon: Building2, detail: "Operational Scaling" },
    { name: "Defence & Aerospace", icon: ShieldCheck, detail: "Licensing & ToT" },
    { name: "Homeland Security", icon: Shield, detail: "Security Systems" },
    { name: "Power & Renewable Energy", icon: Zap, detail: "Turnkey Power Systems" },
    { name: "Software & Cyber Security", icon: Cpu, detail: "Secure Tech Systems" },
  ];

  return (




  
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      {/* <Hero2 /> */}
      {/* 1.1 add the Marquee section here */}
      <MarqueeSection />

      <BtsLandingHero />

      <>
                <div className="text-center space-y-6 px-24 bg-[#f5f8fb]">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D98A10]"></span>
              <p className="text-xs uppercase tracking-widest text-[#0C1D4A] font-bold">
                Who We Serve
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D98A10]"></span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {whoWeServe.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-[#D98A10] hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-3 rounded-xl bg-slate-100 group-hover:bg-amber-50 text-[#0C1D4A] group-hover:text-[#D98A10] mb-2.5 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-center text-[#0C1D4A] group-hover:text-[#D98A10] transition-colors">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-500 text-center mt-1 font-medium">
                      {item.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
      </>
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
    </div>
  );
}

