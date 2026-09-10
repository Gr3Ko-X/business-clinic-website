"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Phone } from "lucide-react";
// Slim metadata-only modules — do NOT import the full `insights`/`caseStudies`
// data (they contain full article/case-study bodies) into this client
// component; it would ship all that text to every page's JS bundle.
import { insightsIndexData } from "@/lib/data/insights-index";
import { caseStudiesIndexData } from "@/lib/data/case-studies-index";

function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-white/40 shadow-xs flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform">
      <Image
        src="/images/logo/IBC.png"
        alt="India Business Clinic"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}

function BrandWordmark({ className = "" }: { className?: string }) {
  const goldLetter =
    "bg-gradient-to-b from-[#F5D76E] via-[#E2A128] to-[#C58F1A] bg-clip-text text-transparent font-bold";

  return (
    <span
      className={`font-['Times_New_Roman',Times,serif] text-white tracking-wide leading-tight ${className}`}
    >
      <span className={goldLetter}>I</span>ndia{" "}
      <span className={goldLetter}>B</span>usiness{" "}
      <span className={goldLetter}>C</span>linic
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Desktop mega menu visibility state (replaces CSS-only group-hover)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopInsightsOpen, setDesktopInsightsOpen] = useState(false);

  // Mobile navigation sub-menus state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<number | null>(null);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const [mobileInsightsCategoryOpen, setMobileInsightsCategoryOpen] = useState<number | null>(null);

  // Close all menus when the route changes (client-side navigation)
  useEffect(() => {
    setDesktopServicesOpen(false);
    setDesktopInsightsOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileCategoryOpen(null);
    setMobileInsightsOpen(false);
    setMobileInsightsCategoryOpen(null);
  }, [pathname]);

  const insightsArticlesList = insightsIndexData.filter(
    (art) => art.slug !== "bts-2026-strategy-guide"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      isMegaMenu: true,
    },
    {
      name: "Insights",
      href: "/insights",
      isInsightsMegaMenu: true,
    },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileCategoryOpen(null);
    setMobileInsightsOpen(false);
    setMobileInsightsCategoryOpen(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 border-b border-[#c58f1a]/40 ${
          scrolled
            ? "bg-[#0c1d4a]/98 backdrop-blur-md shadow-lg py-3"
            : "bg-[#0c1d4a] shadow-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
              <BrandMark size={36} />
              <BrandWordmark className="text-base sm:text-lg lg:text-xl font-semibold truncate" />
            </Link>

            {/* Desktop Nav with Hover Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                if (link.isMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2"
                      onMouseEnter={() => setDesktopServicesOpen(true)}
                      onMouseLeave={() => setDesktopServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
                          isActive(link.href)
                            ? "text-accent font-semibold"
                            : "text-slate-200"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`} />
                      </Link>

                      {/* Mega Menu Dropdown — only mounted while open so its links
                          aren't eagerly prefetched on first paint */}
                      {desktopServicesOpen && (
                        <div
                          onClick={() => setDesktopServicesOpen(false)}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 z-50 grid grid-cols-3 gap-6"
                        >
                          {/* Column 1 */}
                          <div className="space-y-3">
                            <span className="text-xs font-bold text-primary tracking-wide border-b border-slate-100 pb-2 block">
                              Business &amp; Industrial Consulting
                            </span>
                            <div className="flex flex-col space-y-1">
                              <Link
                                href="/services/india-entry-support-foreign-industry"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                India Entry Support for Foreign Industry
                              </Link>
                              <Link
                                href="/services/indian-msme-troubleshooting"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Indian MSME Troubleshooting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Operational Consulting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Manufacturing Advisory
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Industrial Setup Support
                              </Link>
                              <Link
                                href="/services/legal-company-secretary-ca-services"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Legal, Company Secretary and CA Services
                              </Link>
                            </div>
                          </div>

                          {/* Column 2 */}
                          <div className="space-y-3">
                            <span className="text-xs font-bold text-primary tracking-wide border-b border-slate-100 pb-2 block">
                              Industrial Documentation &amp; Technical Knowledge Services
                            </span>
                            <div className="flex flex-col space-y-1">
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                India Vendor Validation Services
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Techno-Commercial Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Technology Transfer (TOT) Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                SOP &amp; Process Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Governance Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Industrial Knowledge Management
                              </Link>
                            </div>
                          </div>

                          {/* Column 3 */}
                          <div className="space-y-3">
                            <span className="text-xs font-bold text-primary tracking-wide border-b border-slate-100 pb-2 block">
                              Industrial Assurance &amp; Validation Services
                            </span>
                            <div className="flex flex-col space-y-1">
                              <Link
                                href="/services/industrial-assurance-validation"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Quality Surveillance
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Vendor Reliability
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-sm leading-snug hover:bg-slate-50 transition-colors"
                              >
                                Compliance
                              </Link>
                              <div className="py-1">
                                <span className="text-slate-800 font-bold block text-xs uppercase tracking-wider px-2">
                                  Production Validation
                                </span>
                                <Link
                                  href="/services/industrial-assurance-validation"
                                  prefetch={false}
                                  className="pl-4 py-0.5 text-xs text-slate-500 font-semibold hover:text-accent block transition-colors"
                                >
                                  FAT / FAI / ATP / PDI
                                </Link>
                              </div>
                              <div className="py-1">
                                <span className="text-slate-800 font-bold block text-xs uppercase tracking-wider px-2">
                                  Inspection Integrity
                                </span>
                                <Link
                                  href="/services/industrial-assurance-validation"
                                  prefetch={false}
                                  className="pl-4 py-0.5 text-xs text-slate-500 font-semibold hover:text-accent block transition-colors"
                                >
                                  Vendor Audit &amp; Process Audit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.isInsightsMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2"
                      onMouseEnter={() => setDesktopInsightsOpen(true)}
                      onMouseLeave={() => setDesktopInsightsOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
                          isActive(link.href)
                            ? "text-accent font-semibold"
                            : "text-slate-200"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${desktopInsightsOpen ? "rotate-180" : ""}`} />
                      </Link>

                      {/* Insights Mega Menu Dropdown — only mounted while open */}
                      {desktopInsightsOpen && (
                        <div
                          onClick={() => setDesktopInsightsOpen(false)}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 z-50 grid grid-cols-3 gap-6"
                        >
                          {/* Column 1: Current */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <span className="text-xs font-bold text-primary tracking-wide block">
                                Current
                              </span>
                              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-100 text-amber-900 rounded-full">
                                Flagship
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <Link
                                href="/bengaluru-tech-summit-2026"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-lg py-2 px-2.5 text-xs leading-snug hover:bg-slate-50 transition-colors block group/item"
                              >
                                <div className="font-bold text-slate-900 group-hover/item:text-accent text-xs">
                                  Bengaluru Tech Summit 2026
                                </div>
                                <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                                  Strategic Roadmaps &amp; Innovation Pavilion
                                </div>
                              </Link>
                              <Link
                                href="/insights/bts-2026-strategy-guide"
                                prefetch={false}
                                className="text-slate-700 hover:text-accent font-semibold rounded-lg py-2 px-2.5 text-xs leading-snug hover:bg-slate-50 transition-colors block group/item"
                              >
                                <div className="font-bold text-slate-900 group-hover/item:text-accent text-xs">
                                  BTS 2026 Strategy Guide
                                </div>
                                <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                                  Executive Strategy Briefing &amp; Roadmap
                                </div>
                              </Link>

                              <div className="p-3.5 bg-gradient-to-br from-amber-50/60 to-slate-50 border border-amber-200/50 rounded-xl mt-2">
                                <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-1">
                                  BTS 2026 Advisory
                                </span>
                                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                                  Connect directly with our delegation setup and strategic facilitation team for Bengaluru Tech Summit 2026.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Articles */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <span className="text-xs font-bold text-primary tracking-wide block">
                                Articles
                              </span>
                              <span className="text-[10px] text-slate-400 font-medium">
                                {insightsArticlesList.length} Insights
                              </span>
                            </div>
                            <div className="flex flex-col space-y-1 max-h-[340px] overflow-y-auto pr-1">
                              {insightsArticlesList.map((article) => (
                                <Link
                                  key={article.slug}
                                  href={`/insights/${article.slug}`}
                                  prefetch={false}
                                  className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-xs leading-snug hover:bg-slate-50 transition-colors"
                                >
                                  {article.title}
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/insights"
                              prefetch={false}
                              className="pt-2 border-t border-slate-100 text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] flex items-center space-x-1 px-2 transition-colors block"
                            >
                              <span>View All Insights &amp; Articles</span>
                              <ArrowRight className="w-3 h-3 inline ml-1" />
                            </Link>
                          </div>

                          {/* Column 3: Case Studies */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <span className="text-xs font-bold text-primary tracking-wide block">
                                Case Studies
                              </span>
                              <span className="text-[10px] text-slate-400 font-medium">
                                Real Impact
                              </span>
                            </div>
                            <div className="flex flex-col space-y-2">
                              {caseStudiesIndexData.map((cs) => (
                                <Link
                                  key={cs.slug}
                                  href={`/case-studies/${cs.slug}`}
                                  prefetch={false}
                                  className="text-slate-700 hover:text-accent font-semibold rounded-lg py-2 px-2.5 text-xs leading-snug hover:bg-slate-50 transition-colors block group/item"
                                >
                                  <div className="font-bold text-slate-900 group-hover/item:text-accent text-xs">
                                    {cs.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                                    {cs.client} • {cs.category}
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/case-studies"
                              prefetch={false}
                              className="pt-2 border-t border-slate-100 text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] flex items-center space-x-1 px-2 transition-colors block"
                            >
                              <span>Explore All Case Studies</span>
                              <ArrowRight className="w-3 h-3 inline ml-1" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                      isActive(link.href)
                        ? "text-accent font-semibold"
                        : "text-slate-200"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button: Talk to an Expert → Contact */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group flex items-center space-x-2.5 bg-gradient-to-r from-[#D98A10] to-[#b87309] hover:from-[#e09418] hover:to-[#c58010] text-white px-3.5 py-1.5 rounded-lg transition-all shadow-sm hover:shadow-md border border-amber-300/30"
                title="Schedule a consultation"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-tight text-white leading-none">
                    Talk to an Expert
                  </span>
                  <span className="text-[10px] text-amber-100 font-medium leading-tight mt-1">
                    +91 9560714343 (Voice, SMS &amp; WhatsApp)
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-accent focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — body is only mounted while open so its links
          (and the article/case-study accordions) aren't prefetched eagerly */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{ top: scrolled ? "60px" : "76px" }}
      >
        {isOpen && (
        <div className="px-4 pt-6 pb-6 space-y-3 bg-white border-t border-slate-100 h-full flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.isMegaMenu) {
                return (
                  <div key={link.name} className="flex flex-col space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full text-left text-lg font-medium px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                        isActive(link.href)
                          ? "bg-cream text-accent font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-accent"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Services Accordion Body */}
                    {mobileServicesOpen && (
                      <div className="pl-4 flex flex-col space-y-3 pt-1 pb-3 border-l-2 border-slate-100">
                        {/* Category 1 Accordion */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileCategoryOpen(mobileCategoryOpen === 0 ? null : 0)
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Business &amp; Industrial Consulting</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileCategoryOpen === 0 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileCategoryOpen === 0 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              <Link
                                href="/services/india-entry-support-foreign-industry"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                India Entry Support for Foreign Industry
                              </Link>
                              <Link
                                href="/services/indian-msme-troubleshooting"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Indian MSME Troubleshooting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Operational Consulting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Manufacturing Advisory
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Industrial Setup Support
                              </Link>
                              <Link
                                href="/services/legal-company-secretary-ca-services"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Legal, Company Secretary and CA Services
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Category 2 Accordion */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileCategoryOpen(mobileCategoryOpen === 1 ? null : 1)
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Industrial Documentation &amp; Tech Knowledge</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileCategoryOpen === 1 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileCategoryOpen === 1 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                India Vendor Validation Services
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Techno-Commercial Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Technology Transfer (TOT) Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                SOP &amp; Process Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Governance Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Industrial Knowledge Management
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Category 3 Accordion */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileCategoryOpen(mobileCategoryOpen === 2 ? null : 2)
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Industrial Assurance &amp; Validation</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileCategoryOpen === 2 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileCategoryOpen === 2 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Quality Surveillance
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Vendor Reliability
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Compliance
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-bold text-slate-800 py-1 pl-2 block border-l-2 border-slate-100"
                              >
                                Production Validation: FAT / FAI / ATP / PDI
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-bold text-slate-800 py-1 pl-2 block border-l-2 border-slate-100"
                              >
                                Inspection Integrity: Vendor &amp; Process Audits
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isInsightsMegaMenu) {
                return (
                  <div key={link.name} className="flex flex-col space-y-1">
                    <button
                      onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                      className={`w-full text-left text-lg font-medium px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                        isActive(link.href)
                          ? "bg-cream text-accent font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-accent"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileInsightsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Insights Accordion Body */}
                    {mobileInsightsOpen && (
                      <div className="pl-4 flex flex-col space-y-3 pt-1 pb-3 border-l-2 border-slate-100">
                        {/* Category 1: Current */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileInsightsCategoryOpen(
                                mobileInsightsCategoryOpen === 0 ? null : 0
                              )
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Current</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileInsightsCategoryOpen === 0 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileInsightsCategoryOpen === 0 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              <Link
                                href="/bengaluru-tech-summit-2026"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Bengaluru Tech Summit 2026
                              </Link>
                              <Link
                                href="/insights/bts-2026-strategy-guide"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                BTS 2026 Executive Strategy Guide
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Category 2: Articles */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileInsightsCategoryOpen(
                                mobileInsightsCategoryOpen === 1 ? null : 1
                              )
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Articles</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileInsightsCategoryOpen === 1 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileInsightsCategoryOpen === 1 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              {insightsArticlesList.map((article) => (
                                <Link
                                  key={article.slug}
                                  href={`/insights/${article.slug}`}
                                  onClick={handleMobileNavClick}
                                  prefetch={false}
                                  className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                                >
                                  {article.title}
                                </Link>
                              ))}
                              <Link
                                href="/insights"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] py-1 block"
                              >
                                View All Insights &amp; Articles →
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Category 3: Case Studies */}
                        <div>
                          <button
                            onClick={() =>
                              setMobileInsightsCategoryOpen(
                                mobileInsightsCategoryOpen === 2 ? null : 2
                              )
                            }
                            className="w-full text-left text-sm font-bold text-slate-800 py-1.5 px-2 flex items-center justify-between hover:bg-slate-50 rounded"
                          >
                            <span>Case Studies</span>
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                mobileInsightsCategoryOpen === 2 ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {mobileInsightsCategoryOpen === 2 && (
                            <div className="pl-4 flex flex-col space-y-2 pt-1 pb-2">
                              {caseStudiesIndexData.map((cs) => (
                                <Link
                                  key={cs.slug}
                                  href={`/case-studies/${cs.slug}`}
                                  onClick={handleMobileNavClick}
                                  prefetch={false}
                                  className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                                >
                                  {cs.title}
                                </Link>
                              ))}
                              <Link
                                href="/case-studies"
                                onClick={handleMobileNavClick}
                                prefetch={false}
                                className="text-xs font-bold text-[#D98A10] hover:text-[#0C1D4A] py-1 block"
                              >
                                Explore All Case Studies →
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className={`text-lg font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(link.href)
                      ? "bg-cream text-accent font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pb-16 px-3">
            <Link
              href="/contact"
              onClick={handleMobileNavClick}
              prefetch={false}
              className="w-full justify-center flex items-center space-x-3 bg-gradient-to-r from-[#D98A10] to-[#b87309] hover:from-[#e09418] hover:to-[#c58010] text-white px-5 py-3 rounded-xl font-medium transition-all shadow-md"
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-tight text-white">
                  Talk to an Expert
                </span>
                <span className="text-xs text-amber-100 font-medium mt-0.5">
                  +91 9560714343 (Voice, SMS &amp; WhatsApp)
                </span>
              </div>
            </Link>
          </div>
        </div>
        )}
      </div>
    </header>
  );
}

