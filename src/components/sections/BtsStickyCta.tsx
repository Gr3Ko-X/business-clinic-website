"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { BTS_CONTACT_HREF } from "@/lib/bts";

export default function BtsStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-gradient-to-t from-[#0c1d4a] via-[#0c1d4a]/95 to-transparent pointer-events-none">
      <Link
        href={BTS_CONTACT_HREF}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[#c58f1a] hover:bg-[#a37210] text-white font-bold py-3.5 px-5 rounded-xl text-sm shadow-lg shadow-black/20 active:scale-[0.98] transition-all"
      >
        <Calendar className="h-4 w-4" />
        <span>Book India Entry Discussion</span>
      </Link>
    </div>
  );
}
