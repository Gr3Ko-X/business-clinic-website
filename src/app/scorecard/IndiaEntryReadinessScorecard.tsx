"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Printer,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Check,
  Minus,
  X,
  Compass,
  TrendingUp,
  Layers,
  ChevronDown,
  Search
} from "lucide-react";

/* ============================================================
   WEB3FORMS ACCESS KEY & CONFIGURATION
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = "056edc09-942b-4f07-b553-9a65f7892d3a";  //for testing only

/* ---------------- DATA MODEL ---------------- */
export interface Category {
  id: string;
  name: string;
  shortName?: string;
  points: number;
  questions: string[];
  defenceQuestions?: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "market",
    name: "Market Understanding",
    shortName: "Market",
    points: 15,
    questions: [
      "Have you conducted an India market assessment?",
      "Is India part of a documented growth strategy?",
      "Have you identified target customers?",
      "Do you understand local competition?",
      "Have you estimated market size and opportunity?",
      "Have you identified key market-entry barriers?",
    ],
  },
  {
    id: "entry",
    name: "Entry Strategy & Business Model",
    shortName: "Entry Strategy",
    points: 10,
    questions: [
      "Have you defined revenue targets for the India market?",
      "Is your pricing strategy India-specific (not a global copy)?",
      "Is your overall business model adapted for India?",
    ],
  },
  {
    id: "regulatory",
    name: "Regulatory & Compliance Readiness",
    shortName: "Regulatory",
    points: 15,
    questions: [
      "Have you reviewed FDI regulations applicable to your sector?",
      "Do you understand applicable FEMA requirements?",
      "Have sector-specific approvals been identified?",
      "Have GST implications been evaluated?",
      "Are import/export requirements understood?",
      "Have licensing requirements been identified?",
    ],
    defenceQuestions: [
      "Have Defence Industrial Licensing requirements been identified?",
      "Have WPC (Wireless Planning & Coordination) licensing needs been reviewed?",
      "Are DGQA requirements understood?",
      "Have applicable offset policy obligations been assessed?",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain Readiness",
    shortName: "Manufacturing",
    points: 15,
    questions: [
      "Have potential manufacturing locations been evaluated?",
      "Have supply chain requirements been mapped?",
      "Have local sourcing opportunities been assessed?",
      "Have vendor qualification criteria been established?",
      "Is a localization strategy defined?",
    ],
  },
  {
    id: "financial",
    name: "Financial Readiness",
    shortName: "Financial",
    points: 10,
    questions: [
      "Has an investment budget been approved?",
      "Is working capital estimated?",
      "Have tax implications been reviewed?",
      "Has transfer pricing been considered?",
      "Has a funding strategy been finalized?",
    ],
  },
  {
    id: "talent",
    name: "Organization & Talent Readiness",
    shortName: "Talent & Org",
    points: 10,
    questions: [
      "Have key leadership positions been identified?",
      "Is there a defined hiring strategy?",
      "Have compensation benchmarks been reviewed?",
      "Is HR compliance in India understood?",
      "Is a local management structure planned?",
    ],
  },
  {
    id: "partnership",
    name: "Partnership & Ecosystem Readiness",
    shortName: "Partnerships",
    points: 10,
    questions: [
      "Have potential partners been identified?",
      "Have distributors been evaluated?",
      "Have vendors been shortlisted?",
      "Is partner due diligence planned?",
      "Have relevant industry associations been identified?",
    ],
  },
  {
    id: "operational",
    name: "Operational Setup Readiness",
    shortName: "Operations",
    points: 10,
    questions: [
      "Are office/factory requirements defined?",
      "Have utilities and infrastructure needs been assessed?",
      "Are ERP systems planned?",
      "Have banking arrangements been identified?",
      "Is a logistics model defined?",
    ],
  },
  {
    id: "risk",
    name: "Risk Management & Governance",
    shortName: "Governance",
    points: 5,
    questions: [
      "Has an India-specific risk assessment been performed?",
      "Are legal risks understood?",
      "Are IP protection measures planned?",
      "Is a governance structure defined?",
      "Is compliance monitoring planned?",
    ],
  },
];

export const BANDS = [
  {
    min: 85,
    max: 100,
    label: "India Entry Ready",
    statusBadge: "Prime Readiness",
    color: "#166534", // emerald
    strokeColor: "#16a34a",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    textClass: "text-emerald-800",
    desc: "You have a well-developed market-entry plan and are positioned for successful execution with low residual risk.",
  },
  {
    min: 70,
    max: 84.999,
    label: "Moderate Readiness",
    statusBadge: "Actionable Foundation",
    color: "#C58F1A", // warm gold
    strokeColor: "#D98A10",
    bg: "#FFFBEB",
    border: "#FDE68A",
    textClass: "text-amber-800",
    desc: "Good foundation exists, but several critical regulatory or operational gaps must be resolved prior to capital commitment.",
  },
  {
    min: 50,
    max: 69.999,
    label: "High-Risk Entry",
    statusBadge: "Vulnerability Flagged",
    color: "#C1701F", // orange
    strokeColor: "#EA580C",
    bg: "#FFF7ED",
    border: "#FDBA74",
    textClass: "text-orange-800",
    desc: "Significant planning and on-ground validation required before committing financial or human resources to avoid costly delays.",
  },
  {
    min: 0,
    max: 49.999,
    label: "Not Ready",
    statusBadge: "Critical Gaps",
    color: "#B4442E", // rust/red
    strokeColor: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    textClass: "text-rose-800",
    desc: "Market entry at this stage risks substantial statutory delays, non-compliance penalties, and unhedged execution failure.",
  },
];

export const INDUSTRY_OPTIONS = [
  "Defence & Aerospace",
  "Manufacturing & Industrial",
  "Technology & Software",
  "Healthcare & Life Sciences",
  "Consumer & Retail",
  "Automotive",
  "Energy & Infrastructure",
  "Other",
];

export const ENTRY_ROUTE_OPTIONS = [
  "Distributor",
  "Representative Office",
  "Joint Venture",
  "Wholly-owned Subsidiary",
  "Manufacturing Facility",
  "Undecided",
];

export const PRODUCT_APPROACH_OPTIONS = [
  "Import finished goods",
  "Manufacture locally",
  "Hybrid (import + local assembly)",
  "Undecided",
];

/* ---------------- CUSTOM INTERACTIVE DROPDOWN ---------------- */
interface CustomDropdownProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  hasSearch?: boolean;
}

function CustomDropdown({
  label,
  value,
  onChange,
  options,
  placeholder,
  hasSearch = false,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const filteredOptions = hasSearch && search.trim()
    ? options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase().trim()))
    : options;

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
        {label}
      </label>

      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch("");
        }}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-left flex items-center justify-between transition-all cursor-pointer ${
          isOpen
            ? "border-[#0C1D4A] ring-2 ring-[#0C1D4A]/10 bg-white shadow-xs"
            : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300"
        }`}
      >
        <span className={value ? "text-slate-800 font-semibold truncate" : "text-slate-400 truncate"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#D98A10]" : "text-slate-400"
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 p-2 space-y-1 animate-scaleUp">
          {/* Search box if enabled */}
          {hasSearch && (
            <div className="relative p-1 mb-1 border-b border-slate-100">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#0C1D4A] text-slate-700"
              />
            </div>
          )}

          {/* Options List */}
          <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
            {filteredOptions.length === 0 ? (
              <div className="py-3 px-2 text-center text-xs text-slate-400">
                No matching options
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = value === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-left flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#0C1D4A]/5 text-[#0C1D4A] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span className="truncate mr-2">{opt}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#D98A10] shrink-0" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function IndiaEntryReadinessScorecard({ embedded = false }: { embedded?: boolean }) {
  // Navigation & Screen State
  const [screen, setScreen] = useState<"intro" | "question" | "results">("intro");
  const [catIndex, setCatIndex] = useState(0);

  // Profile Form State
  const [profile, setProfile] = useState({
    company: "",
    country: "",
    industry: "",
    entryRoute: "",
    productApproach: "",
  });

  // Contact Modal State
  const [contact, setContact] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    emailSent: false,
  });

  const [contactErrors, setContactErrors] = useState({
    name: false,
    designation: false,
    email: false,
  });

  const [showContactModal, setShowContactModal] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitError, setContactSubmitError] = useState("");

  // Reset Confirmation Modal
  const [showResetModal, setShowResetModal] = useState(false);

  // Answers State: key is "catId::qIndex" -> "yes" | "partial" | "no"
  const [answers, setAnswers] = useState<Record<string, "yes" | "partial" | "no">>({});

  // Mobile Category Navigation Expansion State
  const [showMobileCatNav, setShowMobileCatNav] = useState(false);

  // Scroll on screen transition
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (embedded) {
        const el = document.getElementById("scorecard-tool");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [screen, catIndex, embedded]);

  // Compute active categories with conditional Defence & Aerospace questions
  const activeCategories = CATEGORIES.map((c) => {
    if (c.id === "regulatory") {
      const isDefence = profile.industry === "Defence & Aerospace";
      const qs = isDefence ? c.questions.concat(c.defenceQuestions || []) : c.questions;
      return { ...c, activeQuestions: qs };
    }
    return { ...c, activeQuestions: c.questions };
  });

  const currentCat = activeCategories[catIndex] || activeCategories[0];
  const totalQuestionsAllCats = activeCategories.reduce((s, c) => s + c.activeQuestions.length, 0);
  
  // Total answered questions
  const totalAnsweredCount = Object.keys(answers).length;
  const progressPercent = totalQuestionsAllCats > 0
    ? Math.round((totalAnsweredCount / totalQuestionsAllCats) * 100)
    : 0;

  // Check if a specific category is complete
  const isCategoryComplete = (cat: typeof activeCategories[0]) => {
    if (!cat) return false;
    return cat.activeQuestions.every((_, i) => !!answers[`${cat.id}::${i}`]);
  };

  const isCurrentCategoryComplete = isCategoryComplete(currentCat);

  // Answer handler
  const handleSelectAnswer = (qIndex: number, val: "yes" | "partial" | "no") => {
    const key = `${currentCat.id}::${qIndex}`;
    setAnswers((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  // Score computation
  function scoreValue(v: "yes" | "partial" | "no" | undefined, perQ: number) {
    if (v === "yes") return perQ;
    if (v === "partial") return perQ / 2;
    return 0;
  }

  function computeResults() {
    let total = 0;
    const catResults = activeCategories.map((c) => {
      const perQ = c.points / c.activeQuestions.length;
      let earned = 0;
      c.activeQuestions.forEach((_, i) => {
        const v = answers[`${c.id}::${i}`];
        earned += scoreValue(v, perQ);
      });
      total += earned;
      return {
        id: c.id,
        name: c.name,
        points: c.points,
        earned,
        pct: (earned / c.points) * 100,
      };
    });
    return { total, catResults };
  }

  // Reset Application
  const handleReset = () => {
    setProfile({
      company: "",
      country: "",
      industry: "",
      entryRoute: "",
      productApproach: "",
    });
    setContact({
      name: "",
      designation: "",
      email: "",
      phone: "",
      website: "",
      emailSent: false,
    });
    setAnswers({});
    setCatIndex(0);
    setShowContactModal(false);
    setShowResetModal(false);
    setScreen("intro");
  };

  // Contact Modal Submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameTrim = contact.name.trim();
    const desigTrim = contact.designation.trim();
    const emailTrim = contact.email.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim);

    setContactErrors({
      name: !nameTrim,
      designation: !desigTrim,
      email: !emailOk,
    });

    if (!nameTrim || !desigTrim || !emailOk) {
      return;
    }

    setIsSubmittingContact(true);
    setContactSubmitError("");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New India Entry Readiness Scorecard lead: ${profile.company || nameTrim}`,
      from_name: "Business Clinic Scorecard",
      "Full Name": nameTrim,
      "Designation": desigTrim,
      "Email": emailTrim,
      "Telephone": contact.phone.trim() || "(not provided)",
      "Company Website": contact.website.trim() || "(not provided)",
      "Company Name": profile.company.trim() || "(not provided)",
      "Country": profile.country.trim() || "(not provided)",
      "Industry": profile.industry || "(not provided)",
      "Preferred Entry Route": profile.entryRoute || "(not provided)",
      "Product Approach": profile.productApproach || "(not provided)",
    };

    let sent = false;
    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      sent = !!data.success;
      if (!sent) {
        setContactSubmitError("Could not submit details. Proceeding to assessment anyway.");
      }
    } catch {
      setContactSubmitError("Network connection error. Proceeding to assessment anyway.");
    } finally {
      setIsSubmittingContact(false);
      setContact((prev) => ({ ...prev, emailSent: sent }));
      setShowContactModal(false);
      setScreen("question");
      setCatIndex(0);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const resultsData = computeResults();
  const roundedTotal = Math.round(resultsData.total);
  const currentBand =
    BANDS.find((b) => resultsData.total >= b.min && resultsData.total <= b.max) ||
    BANDS[BANDS.length - 1];
  const sortedGaps = [...resultsData.catResults].sort((a, b) => a.pct - b.pct).slice(0, 3);

  const hasAnyProgress =
    Object.keys(answers).length > 0 || profile.company || contact.name;

  return (
    <div
      className={
        embedded
          ? "text-[#1E293B] font-sans antialiased selection:bg-[#D98A10]/20 selection:text-[#0C1D4A] print:bg-white"
          : "bg-[#F8FAFC] min-h-screen text-[#1E293B] font-sans antialiased selection:bg-[#D98A10]/20 selection:text-[#0C1D4A] print:bg-white"
      }
    >
      {/* ========================================================
          STICKY EXECUTIVE MASTHEAD (Standalone Only)
          ======================================================== */}
      {!embedded && (
        <header className="sticky top-0 z-40 bg-[#0C1D4A] text-white border-b border-[#D98A10]/20 shadow-md print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Brand & Diagnostic Sub-title */}
            <div className="flex items-center space-x-3">
              <Link
                href="/services/india-entry-support-foreign-industry"
                className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D98A10]" />
                <span className="hidden sm:inline">India Entry Support</span>
              </Link>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-sm sm:text-base tracking-tight">
                  Business Clinic
                </span>
                <span className="hidden md:inline-block text-[11px] font-mono tracking-widest text-[#D98A10] uppercase bg-white/10 px-2 py-0.5 rounded-xs">
                  Diagnostic Studio
                </span>
              </div>
            </div>

            {/* Center Context / Enterprise Badge */}
            {profile.company && (
              <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5 text-[#D98A10]" />
                <span className="font-semibold text-white truncate max-w-xs">{profile.company}</span>
                {profile.industry && (
                  <>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{profile.industry}</span>
                  </>
                )}
              </div>
            )}

            {/* Right Actions & Progress Mini Ring */}
            <div className="flex items-center space-x-4">
              {screen === "question" && (
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {/* SVG Mini Ring Gauge */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        className="text-white/20"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        className="text-[#D98A10] transition-all duration-300"
                        strokeWidth="3.5"
                        strokeDasharray="94.25"
                        strokeDashoffset={94.25 - (94.25 * progressPercent) / 100}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {progressPercent}%
                  </span>
                </div>
              )}

              {hasAnyProgress && (
                <button
                  onClick={() => setShowResetModal(true)}
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  title="Restart assessment"
                >
                  <RotateCcw className="w-3 h-3 text-[#D98A10]" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}

              {screen === "results" && (
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center space-x-1.5 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export PDF</span>
                </button>
              )}
            </div>
          </div>
        </header>
      )}

      {/* ========================================================
          SCREEN 1: INTRO & ENTERPRISE PROFILE FORM
          ======================================================== */}
      {screen === "intro" && (
        <main className={`max-w-4xl mx-auto px-4 sm:px-6 animate-fadeIn ${embedded ? "py-2 sm:py-4" : "py-6 sm:py-16"}`}>
          {/* Hero Banner */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-12 shadow-sm relative overflow-hidden mb-6 sm:mb-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D98A10]/10 via-[#0C1D4A]/5 to-transparent rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="max-w-2xl relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D98A10]/10 border border-[#D98A10]/30 text-[#D98A10] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Maturity Benchmark</span>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C1D4A] tracking-tight leading-tight">
                India Entry Readiness Scorecard
              </h1>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                A structured self-assessment across nine readiness dimensions. Answer honestly — the value of this diagnostic is in surfacing operational bottlenecks, statutory risks, and localized supply-chain gaps before capital commitment.
              </p>
            </div>

            {/* Diagnostic Pillars Highlight Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100 text-slate-700">
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Coverage</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">9 Critical Pillars</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Calibration</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">FDI & FEMA Aligned</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Time Investment</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">8–10 Minutes</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Output</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">Prioritized Gaps & Score</div>
              </div>
            </div>
          </div>

          {/* Profile Form Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-10 shadow-sm space-y-5 sm:space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10] mb-1">
                <Layers className="w-4 h-4" />
                <span>Enterprise Baseline</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Define Your Enterprise Context
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your industry parameters dynamically tailor sector-specific regulatory evaluations (such as Defence offset & licensing checks).
              </p>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Precision GmbH"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] focus:border-transparent transition-all"
              />
            </div>

            {/* Country & Industry Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Country of Origin
                </label>
                <input
                  type="text"
                  placeholder="e.g. Germany, USA, Japan, France"
                  value={profile.country}
                  onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] focus:border-transparent transition-all"
                />
              </div>

              <CustomDropdown
                label="Industry / Sector"
                value={profile.industry}
                onChange={(val) => setProfile({ ...profile, industry: val })}
                options={INDUSTRY_OPTIONS}
                placeholder="Select industry sector"
                hasSearch={true}
              />
            </div>

            {/* Entry Route & Product Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomDropdown
                label="Preferred Entry Route"
                value={profile.entryRoute}
                onChange={(val) => setProfile({ ...profile, entryRoute: val })}
                options={ENTRY_ROUTE_OPTIONS}
                placeholder="Select planned route"
                hasSearch={false}
              />

              <CustomDropdown
                label="Product Approach"
                value={profile.productApproach}
                onChange={(val) => setProfile({ ...profile, productApproach: val })}
                options={PRODUCT_APPROACH_OPTIONS}
                placeholder="Select manufacturing approach"
                hasSearch={false}
              />
            </div>

            {/* Defence Sector Special Callout */}
            {profile.industry === "Defence & Aerospace" && (
              <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-xl flex items-start space-x-3 text-xs text-amber-950">
                <ShieldCheck className="w-5 h-5 text-[#D98A10] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-[#0C1D4A]">Defence Sector Protocols Triggered:</span>
                  <p className="leading-relaxed">
                    Additional diagnostic questions evaluating Defence Industrial Licensing (DPIIT/MHA), Wireless Planning & Coordination (WPC) clearances, DGQA requirements, and offset liabilities will be dynamically loaded into the Regulatory dimension.
                  </p>
                </div>
              </div>
            )}

            {/* Action Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Confidential self-assessment</span>
              </span>

              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#0C1D4A] hover:bg-[#142B6A] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Begin Diagnostic Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#D98A10]" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================
          SCREEN 2: SPLIT-SCREEN ASSESSMENT WORKSPACE
          ======================================================== */}
      {screen === "question" && currentCat && (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn ${embedded ? "py-2 sm:py-4" : "py-4 sm:py-8"}`}>
          
          {/* ----------------------------------------------------
              MOBILE CATEGORY STEPPER & DRAWER (< lg only)
              ---------------------------------------------------- */}
          <div className="lg:hidden mb-4 space-y-2">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs">
              {/* Category Info & Total Progress */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center space-x-2 truncate pr-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D98A10] shrink-0">
                    Dimension {catIndex + 1}/{activeCategories.length}
                  </span>
                  <span className="text-slate-300 shrink-0">•</span>
                  <span className="font-bold text-[#0C1D4A] truncate">
                    {currentCat.shortName || currentCat.name}
                  </span>
                </div>
                <div className="flex items-center space-x-1 shrink-0 font-mono text-xs font-bold text-slate-700">
                  <span>{progressPercent}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-[#0C1D4A] via-[#1E3A8A] to-[#D98A10] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Horizontal Scrollable Category Stepper Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
                {activeCategories.map((cat, idx) => {
                  const isCurrent = idx === catIndex;
                  const isDone = isCategoryComplete(cat);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setCatIndex(idx);
                        setShowMobileCatNav(false);
                      }}
                      className={`shrink-0 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-[#0C1D4A] text-white shadow-xs font-semibold"
                          : isDone
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                          : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono shrink-0 ${
                          isCurrent
                            ? "bg-[#D98A10] text-[#0C1D4A] font-bold"
                            : isDone
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {isDone ? <Check className="w-2.5 h-2.5" /> : idx + 1}
                      </span>
                      <span className="whitespace-nowrap">{cat.shortName || cat.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Expand / View All Categories Toggle */}
              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={() => setShowMobileCatNav(!showMobileCatNav)}
                  className="inline-flex items-center space-x-1 text-[#0C1D4A] font-medium hover:text-[#D98A10] transition-colors cursor-pointer"
                >
                  <span>{showMobileCatNav ? "Close Category Index" : "View All Dimensions"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#D98A10] transition-transform duration-200 ${showMobileCatNav ? "rotate-180" : ""}`} />
                </button>

                <span className="text-slate-400 font-mono">
                  {activeCategories.filter((c) => isCategoryComplete(c)).length}/{activeCategories.length} completed
                </span>
              </div>

              {/* Collapsible Category List */}
              {showMobileCatNav && (
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {activeCategories.map((cat, idx) => {
                    const isCurrent = idx === catIndex;
                    const isDone = isCategoryComplete(cat);
                    const answeredCountInCat = cat.activeQuestions.filter(
                      (_, i) => answers[`${cat.id}::${i}`]
                    ).length;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setCatIndex(idx);
                          setShowMobileCatNav(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs cursor-pointer ${
                          isCurrent
                            ? "bg-[#0C1D4A] text-white font-semibold"
                            : isDone
                            ? "bg-emerald-50/70 text-slate-700 border border-emerald-200/60"
                            : "hover:bg-slate-50 text-slate-600 border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 ${
                              isCurrent
                                ? "bg-[#D98A10] text-[#0C1D4A] font-bold"
                                : isDone
                              ? "bg-emerald-600 text-white"
                              : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {isDone ? <Check className="w-3 h-3" /> : idx + 1}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0 ml-2 font-mono text-[10px]">
                          <span className={isCurrent ? "text-slate-300" : "text-slate-400"}>
                            {answeredCountInCat}/{cat.activeQuestions.length}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className={isCurrent ? "text-[#D98A10]" : "text-slate-500"}>
                            {cat.points}p
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ----------------------------------------------------
                LEFT SIDEBAR: EXECUTIVE CATEGORY INDEX (Sticky on Desktop >= lg only)
                ---------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
                
                {/* Progress Overview Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                      Diagnostic Index
                    </span>
                    <h3 className="font-serif font-bold text-sm text-[#0C1D4A]">
                      9 Readiness Dimensions
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-slate-700">
                      {progressPercent}%
                    </span>
                    <span className="block text-[10px] text-slate-400">Answered</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full bg-gradient-to-r from-[#0C1D4A] via-[#1E3A8A] to-[#D98A10] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Categories Nav List */}
                <nav className="space-y-1.5" aria-label="Assessment Navigation">
                  {activeCategories.map((cat, idx) => {
                    const isCurrent = idx === catIndex;
                    const isDone = isCategoryComplete(cat);
                    const answeredCountInCat = cat.activeQuestions.filter(
                      (_, i) => answers[`${cat.id}::${i}`]
                    ).length;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCatIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs cursor-pointer ${
                          isCurrent
                            ? "bg-[#0C1D4A] text-white shadow-xs font-semibold"
                            : isDone
                            ? "bg-emerald-50/50 hover:bg-emerald-50 text-slate-700 border border-emerald-200/60"
                            : "hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          {/* Status Icon Indicator */}
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 ${
                              isCurrent
                                ? "bg-[#D98A10] text-[#0C1D4A] font-bold"
                                : isDone
                                ? "bg-emerald-600 text-white"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {isDone ? <Check className="w-3 h-3" /> : idx + 1}
                          </span>
                          <span className="truncate">
                            {cat.shortName || cat.name}
                          </span>
                        </div>

                        {/* Question count / points */}
                        <div className="flex items-center space-x-1 shrink-0 ml-2 font-mono text-[10px]">
                          <span className={isCurrent ? "text-slate-300" : "text-slate-400"}>
                            {answeredCountInCat}/{cat.activeQuestions.length}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className={isCurrent ? "text-[#D98A10]" : "text-slate-500"}>
                            {cat.points}p
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>

                {/* Profile Summary Badge */}
                {profile.company && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate font-medium text-slate-700">{profile.company}</span>
                    <span className="font-mono text-slate-400 shrink-0 ml-2">{profile.country}</span>
                  </div>
                )}

                {/* Reset Trigger in Sidebar (Embedded & Standalone) */}
                {hasAnyProgress && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowResetModal(true)}
                      className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Reset and start over"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#D98A10]" />
                      <span>Reset Assessment</span>
                    </button>
                  </div>
                )}
              </div>
            </aside>

            {/* ----------------------------------------------------
                RIGHT MAIN CANVAS: QUESTION MICRO-CARDS
                ---------------------------------------------------- */}
            <main className="lg:col-span-8 space-y-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-10 shadow-sm space-y-8">
                
                {/* Category Header */}
                <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10] mb-1">
                      <span>Category {catIndex + 1} of {activeCategories.length}</span>
                      <span>•</span>
                      <span>{currentCat.points} Points Weighting</span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#0C1D4A]">
                      {currentCat.name}
                    </h2>
                  </div>

                  <div className="text-xs text-slate-400 font-mono bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
                    {currentCat.activeQuestions.filter((_, i) => answers[`${currentCat.id}::${i}`]).length} of {currentCat.activeQuestions.length} answered
                  </div>
                </div>

                {/* Questions Micro-cards */}
                <div className="space-y-6 divide-y divide-slate-100">
                  {currentCat.activeQuestions.map((q, qIdx) => {
                    const key = `${currentCat.id}::${qIdx}`;
                    const currentAnswer = answers[key];

                    return (
                      <div key={qIdx} className="pt-6 first:pt-0 space-y-3.5">
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-500 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                            {q}
                          </p>
                        </div>

                        {/* Executive Option Selectors: Yes / Partially / No */}
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pl-0 sm:pl-9">
                          
                          {/* Option: YES */}
                          <button
                            type="button"
                            onClick={() => handleSelectAnswer(qIdx, "yes")}
                            className={`p-2 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                              currentAnswer === "yes"
                                ? "bg-emerald-700 border-emerald-700 text-white shadow-sm ring-2 ring-emerald-600/30"
                                : "bg-slate-50/70 border-slate-200 text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40"
                            }`}
                          >
                            <Check className="w-4 h-4 shrink-0" />
                            <span>Yes</span>
                          </button>

                          {/* Option: PARTIALLY */}
                          <button
                            type="button"
                            onClick={() => handleSelectAnswer(qIdx, "partial")}
                            className={`p-2 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                              currentAnswer === "partial"
                                ? "bg-[#D98A10] border-[#D98A10] text-white shadow-sm ring-2 ring-[#D98A10]/30"
                                : "bg-slate-50/70 border-slate-200 text-slate-700 hover:border-[#D98A10] hover:bg-amber-50/40"
                            }`}
                          >
                            <Minus className="w-4 h-4 shrink-0" />
                            <span>Partially</span>
                          </button>

                          {/* Option: NO */}
                          <button
                            type="button"
                            onClick={() => handleSelectAnswer(qIdx, "no")}
                            className={`p-2 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                              currentAnswer === "no"
                                ? "bg-slate-700 border-slate-700 text-white shadow-sm ring-2 ring-slate-600/30"
                                : "bg-slate-50/70 border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-100"
                            }`}
                          >
                            <X className="w-4 h-4 shrink-0" />
                            <span>No</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sticky Action Footer */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (catIndex === 0) {
                        setScreen("intro");
                      } else {
                        setCatIndex(catIndex - 1);
                      }
                    }}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0C1D4A] px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    disabled={!isCurrentCategoryComplete}
                    onClick={() => {
                      if (catIndex === activeCategories.length - 1) {
                        setScreen("results");
                      } else {
                        setCatIndex(catIndex + 1);
                      }
                    }}
                    className={`inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer ${
                      isCurrentCategoryComplete
                        ? "bg-[#0C1D4A] hover:bg-[#142B6A] text-white shadow-sm hover:shadow"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                    }`}
                  >
                    <span>
                      {catIndex === activeCategories.length - 1
                        ? "Generate Readiness Score →"
                        : "Next Category →"}
                    </span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}

      {/* ========================================================
          SCREEN 3: EXECUTIVE DIAGNOSTIC RESULTS DASHBOARD
          ======================================================== */}
      {screen === "results" && (
        <main className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 animate-fadeIn ${embedded ? "py-4 sm:py-6" : "py-6 sm:py-16"}`}>
          
          {/* Header Metadata Bar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl px-6 py-4 shadow-xs flex flex-wrap items-center justify-between text-xs text-slate-600">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-serif font-bold">
                BC
              </div>
              <div>
                <span className="font-bold text-[#0C1D4A] text-sm block">
                  {profile.company || "Enterprise Assessment"}
                </span>
                <span className="text-slate-400 text-xs">
                  {profile.country ? `${profile.country} • ` : ""}
                  {profile.industry || "General Industry"}
                  {profile.entryRoute ? ` • ${profile.entryRoute}` : ""}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-2 sm:mt-0 text-slate-400 font-mono text-[11px]">
              <span>Score Generated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-1.5 text-[#0C1D4A] font-semibold bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md transition-colors print:hidden cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#D98A10]" />
                <span>Print Dossier</span>
              </button>
            </div>
          </div>

          {/* Hero Diagnostic Verdict: Split Dial & Benchmark */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: SVG Radial Circular Gauge & Verdict */}
            <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-10 shadow-sm flex flex-col items-center justify-center text-center space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Readiness Verdict</span>
              </div>

              {/* Radial SVG Circular Donut Dial */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Track circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-slate-100"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={currentBand.strokeColor}
                    strokeWidth="8"
                    strokeDasharray="251.32"
                    strokeDashoffset={251.32 - (251.32 * roundedTotal) / 100}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* Score Number in Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span
                    className="font-serif text-5xl sm:text-6xl font-bold tracking-tight leading-none"
                    style={{ color: currentBand.color }}
                  >
                    {roundedTotal}
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    OUT OF 100
                  </span>
                </div>
              </div>

              {/* Band Status Pill */}
              <div>
                <span
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold border"
                  style={{
                    backgroundColor: currentBand.bg,
                    borderColor: currentBand.border,
                    color: currentBand.color,
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: currentBand.color }}
                  />
                  <span>● {currentBand.label}</span>
                </span>
              </div>

              {/* Band Description */}
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto text-justify">
                {currentBand.desc}
              </p>
            </div>

            {/* Right Col: Benchmark Comparison & Key Takeaways */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0C1D4A] to-[#142B6A] text-white rounded-2xl p-5 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                  <TrendingUp className="w-4 h-4" />
                  <span>Peer Benchmark Context</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  How You Compare Against Foreign Entrants
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed text-justify">
                  Across international industrial market entries into India, historical data indicates clear thresholds for execution viability:
                </p>

                {/* Benchmark Bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                      <span>Your Organization</span>
                      <span className="font-bold text-[#D98A10]">{roundedTotal}/100</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D98A10] rounded-full transition-all duration-700"
                        style={{ width: `${roundedTotal}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                      <span>Peer Entrant Average</span>
                      <span className="text-slate-300">58/100</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: "58%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                      <span>Investment-Ready Threshold</span>
                      <span className="text-emerald-400">85/100</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-xs text-slate-300 leading-relaxed text-justify">
                <span className="text-[#D98A10] font-bold">Advisory Insight:</span> Entrants launching with scores below 70 experience on average 6–14 months of unexpected regulatory or operational holdups.
              </div>
            </div>
          </div>

          {/* Dimension Breakdown Grid (9 Pillars) */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-10 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                  Comprehensive Audit
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1D4A]">
                  Readiness by Category
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Weighted against 100 points
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsData.catResults.map((cat) => {
                const pct = Math.round(cat.pct);
                const isStrong = pct >= 70;
                const isModerate = pct >= 40 && pct < 70;
                const statusColor = isStrong ? "text-emerald-700" : isModerate ? "text-[#D98A10]" : "text-[#B4442E]";
                const barColor = isStrong ? "#16a34a" : isModerate ? "#D98A10" : "#B4442E";
                const badgeLabel = isStrong ? "Strong" : isModerate ? "Developing" : "Vulnerable";
                const badgeBg = isStrong ? "bg-emerald-50 text-emerald-800 border-emerald-200" : isModerate ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-rose-50 text-rose-800 border-rose-200";

                return (
                  <div
                    key={cat.id}
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:shadow-xs transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-800 leading-snug">
                        {cat.name}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${badgeBg}`}>
                        {badgeLabel}
                      </span>
                    </div>

                    {/* Progress Fill Meter */}
                    <div className="space-y-1">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${cat.pct}%`, backgroundColor: barColor }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-slate-500 pt-0.5">
                        <span className={`font-bold ${statusColor}`}>{pct}%</span>
                        <span>{cat.earned.toFixed(1)} / {cat.points} pts</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top 3 Strategic Vulnerabilities Matrix */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-10 shadow-sm space-y-5 sm:space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B4442E]">
                Critical Gaps
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1D4A]">
                Top Gaps to Address
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Prioritize these three operational bottlenecks before committing capital or executing vendor agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sortedGaps.map((gap, gIdx) => (
                <div
                  key={gap.id}
                  className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/70 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B4442E] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        Priority {gIdx + 1}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-700">
                        {Math.round(gap.pct)}% Readiness
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-[#0C1D4A] text-sm">
                      {gap.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Scoring {Math.round(gap.pct)}% readiness — prioritize this before committing further resources.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-200/50 text-[11px] font-semibold text-[#0C1D4A] flex items-center space-x-1">
                    <Compass className="w-3.5 h-3.5 text-[#D98A10]" />
                    <span>Requires Statutory & On-ground Vetting</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Next Steps CTA Card */}
          <div className="bg-[#0C1D4A] text-white rounded-2xl p-5 sm:p-12 shadow-lg relative overflow-hidden space-y-5 sm:space-y-6">
            <div className="max-w-2xl space-y-3 relative z-10">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D98A10]">
                <ShieldCheck className="w-4 h-4 text-[#D98A10]" />
                <span>Executive Advisory Roadmap</span>
              </div>
              <h3 className="font-serif text-xl sm:text-3xl font-bold leading-tight">
                Turn this into an entry plan
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                This self-assessment is directional. Business Clinic&apos;s India Entry Diagnostic goes category-by-category with you and builds a prioritized roadmap — with hands-on support through execution if you want it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Book a Diagnostic Session</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition-all print:hidden cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-300" />
                <span>Print Executive Summary</span>
              </button>
            </div>
          </div>

          {/* Retake & Footer Control */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-400 print:hidden">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center space-x-1.5 font-semibold text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Start Over</span>
            </button>

            <span>Score generated {new Date().toLocaleDateString()}</span>
          </div>

          <footer className="text-center text-xs text-slate-400 pt-4 leading-relaxed">
            Business Clinic — action-oriented advisory. This preliminary score is directional; a full diagnostic refines it.
          </footer>
        </main>
      )}

      {/* ========================================================
          MODAL 1: CONTACT INFORMATION / LEAD CAPTURE
          ======================================================== */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 animate-scaleUp">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#0C1D4A]">
                  Before you begin
                </h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed text-justify">
                  Tell us who to send your readiness results to. Business Clinic will use this to follow up with your Preliminary Scorecard and, if relevant, an invitation to a diagnostic session.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 pt-1">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Müller"
                  value={contact.name}
                  onChange={(e) => {
                    setContact({ ...contact, name: e.target.value });
                    if (contactErrors.name) setContactErrors({ ...contactErrors, name: false });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] ${
                    contactErrors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                  }`}
                />
                {contactErrors.name && (
                  <p className="text-[11px] text-rose-600 mt-1">Please enter your name.</p>
                )}
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Designation <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="VP International Business"
                  value={contact.designation}
                  onChange={(e) => {
                    setContact({ ...contact, designation: e.target.value });
                    if (contactErrors.designation) setContactErrors({ ...contactErrors, designation: false });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] ${
                    contactErrors.designation ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                  }`}
                />
                {contactErrors.designation && (
                  <p className="text-[11px] text-rose-600 mt-1">Please enter your designation.</p>
                )}
              </div>

              {/* Company Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Company Email <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={contact.email}
                  onChange={(e) => {
                    setContact({ ...contact, email: e.target.value });
                    if (contactErrors.email) setContactErrors({ ...contactErrors, email: false });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] ${
                    contactErrors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                  }`}
                />
                {contactErrors.email && (
                  <p className="text-[11px] text-rose-600 mt-1">Please enter a valid email address.</p>
                )}
              </div>

              {/* Phone & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 30 1234567"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company Website
                  </label>
                  <input
                    type="text"
                    placeholder="company.com"
                    value={contact.website}
                    onChange={(e) => setContact({ ...contact, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                  />
                </div>
              </div>

              {contactSubmitError && (
                <div className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                  {contactSubmitError}
                </div>
              )}

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="inline-flex items-center space-x-2 bg-[#0C1D4A] hover:bg-[#142B6A] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-sm hover:shadow transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmittingContact ? "Submitting..." : "Continue to Assessment →"}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Submitting this form sends your details to Business Clinic via email. It is not stored anywhere else.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 2: RESET CONFIRMATION
          ======================================================== */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 text-center animate-scaleUp">
            <div className="w-12 h-12 bg-rose-50 text-[#B4442E] rounded-full flex items-center justify-center mx-auto">
              <RotateCcw className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Start a new assessment?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                This will clear all answers and contact details you&apos;ve entered so far.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3 pt-3">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 rounded-xl bg-[#B4442E] hover:bg-rose-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Yes, reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
