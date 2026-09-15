"use client";

import React, { useState, useEffect } from "react";
import { FileText, ChevronDown, ListFilter } from "lucide-react";

export interface SectionItem {
  id: string;
  number: string;
  title: string;
}

interface TableOfContentsProps {
  sections: SectionItem[];
  helpTitle?: string;
  helpDescription?: string;
  helpEmail?: string;
}

export default function TableOfContents({
  sections,
  helpTitle = "Need Clarification?",
  helpDescription = "Questions regarding legal terms or privacy rights can be directed to our official contact desk.",
  helpEmail = "sanjay@indiabusinessclinic.com",
}: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  // IntersectionObserver to highlight current active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setIsOpen(false); // Close mobile collapsible on link selection
  };

  return (
    <div className="sticky top-20 sm:top-24 z-20 bg-white border border-slate-200/90 rounded-xl shadow-xs transition-all">
      {/* Mobile Accordion Toggle Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:hidden flex items-center justify-between p-4 text-left font-serif font-bold text-primary hover:bg-slate-50 rounded-xl transition-colors"
        aria-expanded={isOpen}
        aria-controls="table-of-contents-list"
      >
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <ListFilter className="h-4 w-4 text-accent" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-sans font-semibold">
              Navigation
            </div>
            <div className="text-sm text-primary">Table of Contents</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
            {sections.length} Sections
          </span>
          <ChevronDown
            className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
          />
        </div>
      </button>

      {/* Desktop Header (Always Visible on lg+) */}
      <div className="hidden lg:flex items-center justify-between p-5 pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-accent" />
          <h2 className="font-serif text-sm font-bold text-primary uppercase tracking-wide">
            Table of Contents
          </h2>
        </div>
        <span className="text-[11px] font-mono text-slate-400 font-semibold">
          {sections.length} Sections
        </span>
      </div>

      {/* Nav List: Collapsible on Mobile, Always Displayed on Desktop */}
      <div
        id="table-of-contents-list"
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block p-4 lg:p-5 pt-1 lg:pt-3 space-y-4 border-t lg:border-t-0 border-slate-100`}
      >
        <nav className="space-y-1 max-h-[50vh] lg:max-h-[58vh] overflow-y-auto pr-1 text-xs">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => handleLinkClick(sec.id)}
                className={`flex items-center space-x-2.5 py-1.5 px-2.5 rounded-lg transition-all group ${
                  isActive
                    ? "bg-[#0C1D4A] text-white font-medium shadow-xs"
                    : "text-slate-600 hover:text-primary hover:bg-slate-100"
                }`}
              >
                <span
                  className={`font-mono text-[10px] w-5 h-5 flex items-center justify-center rounded font-semibold transition-colors shrink-0 ${
                    isActive
                      ? "bg-[#D98A10] text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  {sec.number}
                </span>
                <span className="truncate">{sec.title}</span>
              </a>
            );
          })}
        </nav>

        {/* Sidebar Help / Contact Desk */}
        <div className="pt-3 border-t border-slate-100">
          <div className="bg-slate-50 rounded-lg p-3 text-[11px] text-slate-600 space-y-1.5 border border-slate-100">
            <p className="font-semibold text-primary">{helpTitle}</p>
            <p className="leading-relaxed">{helpDescription}</p>
            <a
              href={`mailto:${helpEmail}`}
              className="inline-block text-accent font-semibold hover:underline"
            >
              {helpEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
