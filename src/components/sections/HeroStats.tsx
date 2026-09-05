import React from "react";
import { Award, Building2, Globe, MapPin } from "lucide-react";

const stats = [
  { value: "35+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Projects Executed", icon: Building2 },
  { value: "10+", label: "Industries Served", icon: Globe },
  { value: "Pan-India", label: "Operational Presence", icon: MapPin },
];

export default function HeroStats() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-4 sm:px-6 pointer-events-none"
      role="region"
      aria-label="Key statistics"
    >
      <div className="w-full max-w-5xl mx-auto pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(11,34,64,0.15)] border border-slate-100 px-6 py-5 sm:px-8 sm:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map(({ value, label, icon: Icon }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-4 ${
                idx === 0
                  ? "pb-5 lg:pb-0 lg:pr-6"
                  : idx === 1
                  ? "pb-5 lg:pb-0 lg:px-6 pt-5 lg:pt-0"
                  : idx === 2
                  ? "lg:px-6 pt-5 lg:pt-0"
                  : "lg:pl-6 pt-5 lg:pt-0"
              }`}
            >
              <div className="shrink-0 p-3 rounded-xl bg-amber-50 border border-amber-100">
                <Icon className="w-6 h-6 text-[#c58f1a]" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#0b2240] leading-none">
                  {value}
                </p>
                <p className="text-sm uppercase tracking-wider font-bold text-slate-500 mt-1">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
