"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import HeroStats from "@/components/sections/HeroStats";

interface Slide {
  id: number;
  kicker: string;
  headline: string[];
  accentLine: string;
  body: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    kicker: "Industrial Advisory & India Entry Solutions",
    headline: ["Industrial Expertise.", "Strategic Guidance."],
    accentLine: "Seamless Growth.",
    body: "Empowering Indian MSMEs and Global Companies with execution-focused advisory and end-to-end support for sustainable industrial growth and successful market entry in India.",
    image:
      "/images/bg_businessClinic.png",
    imageAlt: "Industrial manufacturing floor with robotic arms",
  },
  {
    id: 2,
    kicker: "MSME Troubleshooting & Operational Growth",
    headline: ["Diagnose. Resolve.", "Strengthen."],
    accentLine: "Scale.",
    body: "Root-cause diagnostics, production bottleneck resolution, OEE maximisation, and structured SOP deployment to build sustainable capacity in Indian industry.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format&fit=crop",
    imageAlt: "Workers on an industrial shop floor",
  },
  {
    id: 3,
    kicker: "Defence, Aerospace & Strategic Sectors",
    headline: ["Navigate. Connect.", "Facilitate."],
    accentLine: "Execute.",
    body: "Specialised advisory for Defence Industrial Licensing, Transfer of Technology (ToT), offset management, WPC clearances, and military trial facilitation across India.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format&fit=crop",
    imageAlt: "Aerospace and defence industry overview",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function Hero2() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), reducedMotion.current ? 0 : 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-visible">
      {/* Slide viewport */}
      <div
        className="relative min-h-[70dvh] flex flex-col justify-center overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Background images — all preloaded, only active one is visible */}
        {slides.map((s, idx) => (
          <div
            key={s.id}
            aria-hidden={idx !== current}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: reducedMotion.current ? "0ms" : undefined }}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Balanced overlay so centered copy stays legible */}
            <div className="absolute inset-0 bg-[#0b2240]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2240]/75 via-[#0b2240]/20 to-[#0b2240]/40" />
          </div>
        ))}

        {/* Copy content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 pb-32 sm:pb-36 text-center">
          <div
            aria-live="polite"
            aria-atomic="true"
            className={`mx-auto max-w-3xl transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Kicker */}
            <p className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#c58f1a] uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c58f1a] animate-pulse shrink-0" />
              {slide.kicker}
            </p>

            {/* Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-2 text-balance">
              {slide.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-[#c58f1a]">{slide.accentLine}</span>
            </h1>

            {/* Gold accent bar */}
            <div className="w-16 h-1 bg-[#c58f1a] rounded-full mt-4 mb-5 mx-auto" />

            {/* Body */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 text-pretty">
              {slide.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 bg-[#c58f1a] hover:bg-[#a37210] text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-[#c58f1a]/30 hover:shadow-[#c58f1a]/50 hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/70 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 backdrop-blur-sm"
              >
                <Calendar className="h-4 w-4 text-[#c58f1a]" />
                <span>Schedule a Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows — hidden on very small screens */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div
          role="tablist"
          aria-label="Slide navigation"
          className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        >
          {slides.map((s, idx) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-7 h-2.5 bg-[#c58f1a]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <HeroStats />
    </section>
  );
}
