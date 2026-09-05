import React from "react";
import Link from "next/link";

const ITEMS = [
  { label: "BTS 2026", href: "/bengaluru-tech-summit-2026", accent: true },
  { label: "Industrial Expertise", href: null, accent: false },
  { label: "Strategic Guidance", href: null, accent: false },
  { label: "Seamless Growth", href: null, accent: true },
] as const;

function MarqueeTrack() {
  return (
    <div className="flex items-center shrink-0">
      {ITEMS.map((item) => (
        <React.Fragment key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className={`px-4 text-sm sm:text-base font-bold uppercase tracking-[0.18em] whitespace-nowrap transition-colors hover:text-[#c58f1a] ${
                item.accent ? "text-[#c58f1a]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`px-4 text-sm sm:text-base font-bold uppercase tracking-[0.18em] whitespace-nowrap ${
                item.accent ? "text-[#c58f1a]" : "text-white"
              }`}
            >
              {item.label}
            </span>
          )}
          <span className="text-[#c58f1a]/60 select-none" aria-hidden>
            |
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      aria-label="Business Clinic highlights"
      className="relative z-10 bg-[#0c1d4a] border-y border-[#c58f1a]/30 overflow-hidden"
    >
      <div className="py-3.5 sm:py-4">
        <div className="animate-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
