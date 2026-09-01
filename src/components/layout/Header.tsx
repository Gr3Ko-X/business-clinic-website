"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Mobile navigation sub-menus state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<number | null>(null);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

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
    { name: "Solutions", href: "/solutions" },
    {
      name: "Insights",
      href: "/insights",
      dropdown: [
        { name: "The Great MSME Disconnect", href: "/insights/great-msme-disconnect" },
        { name: "Why MSMEs Fail to Deliver", href: "/insights/hr-gaps-msme-recruitment" },
        { name: "India Entry Challenges", href: "/insights/india-market-entry-handbook" },
        { name: "Defence & WPC Licensing", href: "/insights/defence-industrial-wpc-licensing" },
        { name: "Bengaluru Tech Summit 2026", href: "/bengaluru-tech-summit-2026" },
        { name: "BTS 2026 Strategy Guide", href: "/insights/bts-2026-strategy-guide" },
      ],
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0c1d4a]/98 backdrop-blur-md shadow-md py-3"
            : "bg-[#0c1d4a] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white flex items-baseline">
                  <span className="text-accent font-serif text-3xl mr-0.5">B</span>
                  <span className="font-sans font-semibold tracking-wide text-white">USINESS</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-accent font-bold -mt-1 pl-6">
                  Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Nav with Hover Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                if (link.isMegaMenu) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
                          isActive(link.href)
                            ? "text-accent font-semibold"
                            : "text-slate-200"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Mega Menu Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 grid grid-cols-3 gap-6">
                        {/* Column 1 */}
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider border-b border-slate-100 pb-2 block">
                            Business &amp; Industrial Consulting
                          </span>
                          <div className="flex flex-col space-y-1">
                            <Link
                              href="/services/india-entry-support-foreign-industry"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              India Entry Support for Foreign Industry
                            </Link>
                            <Link
                              href="/services/indian-msme-troubleshooting"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Indian MSME Troubleshooting
                            </Link>
                            <Link
                              href="/services/business-industrial-consulting"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Operational Consulting
                            </Link>
                            <Link
                              href="/services/business-industrial-consulting"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Manufacturing Advisory
                            </Link>
                            <Link
                              href="/services/business-industrial-consulting"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Industrial Setup Support
                            </Link>
                            <Link
                              href="/services/legal-company-secretary-ca-services"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Legal, Company Secretary and CA Services
                            </Link>
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider border-b border-slate-100 pb-2 block">
                            Industrial Documentation &amp; Technical Knowledge Services
                          </span>
                          <div className="flex flex-col space-y-1">
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              India Vendor Validation Services
                            </Link>
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Techno-Commercial Documentation
                            </Link>
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Technology Transfer (TOT) Documentation
                            </Link>
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              SOP &amp; Process Documentation
                            </Link>
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Governance Documentation
                            </Link>
                            <Link
                              href="/services/documentation-technical-knowledge"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Industrial Knowledge Management
                            </Link>
                          </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider border-b border-slate-100 pb-2 block">
                            Industrial Assurance &amp; Validation Services
                          </span>
                          <div className="flex flex-col space-y-1">
                            <Link
                              href="/services/industrial-assurance-validation"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Quality Surveillance
                            </Link>
                            <Link
                              href="/services/industrial-assurance-validation"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Vendor Reliability
                            </Link>
                            <Link
                              href="/services/industrial-assurance-validation"
                              className="text-slate-700 hover:text-accent font-semibold rounded-sm py-1.5 px-2 text-[11px] leading-snug hover:bg-slate-50 transition-colors"
                            >
                              Compliance
                            </Link>
                            <div className="py-1">
                              <span className="text-slate-800 font-bold block text-[10px] uppercase tracking-wider px-2">
                                Production Validation
                              </span>
                              <Link
                                href="/services/industrial-assurance-validation"
                                className="pl-4 py-0.5 text-[10px] text-slate-500 font-semibold hover:text-accent block transition-colors"
                              >
                                FAT / FAI / ATP / PDI
                              </Link>
                            </div>
                            <div className="py-1">
                              <span className="text-slate-800 font-bold block text-[10px] uppercase tracking-wider px-2">
                                Inspection Integrity
                              </span>
                              <Link
                                href="/services/industrial-assurance-validation"
                                className="pl-4 py-0.5 text-[10px] text-slate-500 font-semibold hover:text-accent block transition-colors"
                              >
                                Vendor Audit &amp; Process Audit
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (link.dropdown) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
                          isActive(link.href)
                            ? "text-accent font-semibold"
                            : "text-slate-200"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Dropdown Menu Overlay */}
                      <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-md shadow-lg py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
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

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-sm font-medium text-sm transition-all shadow-sm hover:shadow-md"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
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

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: scrolled ? "60px" : "76px" }}
      >
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
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                India Entry Support for Foreign Industry
                              </Link>
                              <Link
                                href="/services/indian-msme-troubleshooting"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Indian MSME Troubleshooting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Operational Consulting
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Manufacturing Advisory
                              </Link>
                              <Link
                                href="/services/business-industrial-consulting"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Industrial Setup Support
                              </Link>
                              <Link
                                href="/services/legal-company-secretary-ca-services"
                                onClick={handleMobileNavClick}
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
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                India Vendor Validation Services
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Techno-Commercial Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Technology Transfer (TOT) Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                SOP &amp; Process Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Governance Documentation
                              </Link>
                              <Link
                                href="/services/documentation-technical-knowledge"
                                onClick={handleMobileNavClick}
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
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Quality Surveillance
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Vendor Reliability
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                className="text-xs font-semibold text-slate-600 hover:text-accent py-1 block"
                              >
                                Compliance
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
                                className="text-xs font-bold text-slate-800 py-1 pl-2 block border-l-2 border-slate-100"
                              >
                                Production Validation: FAT / FAI / ATP / PDI
                              </Link>
                              <Link
                                href="/services/industrial-assurance-validation"
                                onClick={handleMobileNavClick}
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

              if (link.dropdown) {
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
                    {mobileInsightsOpen && (
                      <div className="pl-6 flex flex-col space-y-2 pt-1 pb-2 border-l-2 border-slate-100">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={handleMobileNavClick}
                            className="text-xs font-semibold text-slate-500 hover:text-accent py-1 block"
                          >
                            {subItem.name}
                          </Link>
                        ))}
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
              className="w-full justify-center inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-sm font-medium text-base transition-all shadow-md"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

