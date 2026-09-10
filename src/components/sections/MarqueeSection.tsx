import React from "react";
import Link from "next/link";

const ITEMS = [
  { label: "Bengaluru Tech Summit 2026", href: "/bengaluru-tech-summit-2026", accent: true },
  { label: "Industrial Expertise", href: null, accent: false },
  { label: "Strategic Guidance", href: null, accent: false },
  { label: "Seamless Growth", href: null, accent: false },
] as const;

function MarqueeTrack() {
  return (
    <div className="flex items-center shrink-0">
      {ITEMS.map((item) => (
        <React.Fragment key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className={`px-3 sm:px-4 text-xs sm:text-base font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] whitespace-nowrap transition-colors hover:text-[#c58f1a] ${
                item.accent ? "text-[#c58f1a]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`px-3 sm:px-4 text-xs sm:text-base font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] whitespace-nowrap ${
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
      className="relative z-10 bg-[#071333] border-t-2 border-t-[#c58f1a] border-b border-b-[#c58f1a]/40 shadow-inner overflow-hidden"
    >
      <div className="py-2.5 sm:py-3.5">
        <div className="animate-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
