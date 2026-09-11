"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1050);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed z-40 rounded-full p-3
        bg-[#0c1d4a] text-white shadow-lg shadow-black/20
        cursor-pointer
        transition-all duration-300 ease-out
        hover:bg-[#c58f1a] hover:shadow-xl hover:shadow-black/25
        hover:-translate-y-0.5 hover:scale-105
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c58f1a]
        motion-safe:transition-all
        ${visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
        }
        bottom-6 right-6
        lg:bottom-8 lg:right-8
        max-lg:bottom-20
      `}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
