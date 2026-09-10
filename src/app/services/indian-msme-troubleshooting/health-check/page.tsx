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
  Check,
  Minus,
  X,
  HelpCircle,
  Compass,
  TrendingUp,
  Layers,
  ChevronDown,
  Search,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

/* ============================================================
   WEB3FORMS ACCESS KEY & CONFIGURATION
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = "056edc09-942b-4f07-b553-9a65f7892d3a";

/* ---------------- DATA MODEL ---------------- */
export interface Category {
  id: string;
  name: string;
  shortName: string;
  points: number;
  questions: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "strategy",
    name: "Business Strategy & Leadership",
    shortName: "Strategy & Vision",
    points: 10,
    questions: [
      "Is there a Vision and Mission Statement for the company?",
      "Is there a documented business plan?",
      "Are annual growth targets defined?",
      "Is there a formal review mechanism?",
      "Are KPIs monitored monthly?",
      "Is succession planning in place?",
      "Has a risk assessment of the company been carried out?"
    ]
  },
  {
    id: "sales",
    name: "Sales & Market Development",
    shortName: "Sales & Market",
    points: 10,
    questions: [
      "Does leadership devote more than 50% of its time to sales & marketing?",
      "Is there a formal sales pipeline?",
      "Are export opportunities being pursued?",
      "Is customer feedback systematically collected?",
      "Is there an active digital marketing presence?"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Operations",
    shortName: "Manufacturing & Ops",
    points: 15,
    questions: [
      "Are production targets consistently achieved?",
      "Is OEE (Overall Equipment Effectiveness) measured?",
      "Are bottlenecks identified and tracked?",
      "Are SOPs available and followed?",
      "Is preventive maintenance implemented?"
    ]
  },
  {
    id: "quality",
    name: "Quality Management",
    shortName: "Quality Systems",
    points: 10,
    questions: [
      "Is there a documented quality system?",
      "Are rejection rates tracked?",
      "Is root cause analysis conducted?",
      "Are corrective actions monitored?",
      "Is supplier quality evaluated?"
    ]
  },
  {
    id: "supplychain",
    name: "Supply Chain & Vendor Management",
    shortName: "Supply Chain",
    points: 10,
    questions: [
      "Are critical vendors formally evaluated?",
      "Is vendor performance measured?",
      "Are alternate suppliers available?",
      "Are inventory levels optimized?",
      "Are lead times monitored?"
    ]
  },
  {
    id: "financial",
    name: "Financial Health",
    shortName: "Financial Health",
    points: 10,
    questions: [
      "Are monthly MIS reports generated?",
      "Is cash flow monitored?",
      "Are receivables controlled?",
      "Is profitability tracked product-wise?",
      "Are working capital requirements understood?"
    ]
  },
  {
    id: "hr",
    name: "Human Resources & Organization",
    shortName: "HR & Organization",
    points: 10,
    questions: [
      "Are roles and responsibilities documented?",
      "Is employee turnover monitored?",
      "Is skill development conducted?",
      "Are performance reviews undertaken?",
      "Is workforce productivity measured?"
    ]
  },
  {
    id: "compliance",
    name: "Compliance & Risk Management",
    shortName: "Compliance & Risk",
    points: 10,
    questions: [
      "Are statutory compliances current?",
      "Are licenses and certifications valid?",
      "Is risk assessment periodically conducted?",
      "Are contracts reviewed professionally?",
      "Is cyber/data security addressed?"
    ]
  },
  {
    id: "technology",
    name: "Technology & Digital Readiness",
    shortName: "Technology & Digital",
    points: 5,
    questions: [
      "Is ERP/MRP in use?",
      "Is production data digitized?",
      "Is there digital document management?",
      "Is an automation roadmap available?",
      "Is decision-making data-driven?"
    ]
  },
  {
    id: "growth",
    name: "Growth & Scalability Readiness",
    shortName: "Growth & Scaling",
    points: 10,
    questions: [
      "Is capacity utilization at an optimal level?",
      "Is an expansion strategy defined?",
      "Has export readiness been assessed?",
      "Are relevant government schemes being utilized?",
      "Are strategic partnerships being explored?"
    ]
  }
];

export const BANDS = [
  {
    min: 85,
    max: 100,
    label: "Growth Ready",
    statusBadge: "Prime Health",
    color: "#166534", // emerald
    strokeColor: "#16a34a",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    textClass: "text-emerald-800",
    desc: "Strong operational systems, clear controls, and scalable capacity across your enterprise."
  },
  {
    min: 70,
    max: 84.999,
    label: "Stable but Improvement Needed",
    statusBadge: "Operational Stability",
    color: "#C58F1A", // warm gold
    strokeColor: "#D98A10",
    bg: "#FFFBEB",
    border: "#FDE68A",
    textClass: "text-amber-800",
    desc: "Solid business foundation exists, but specific operational or financial bottlenecks constrain your margin and scalability."
  },
  {
    min: 50,
    max: 69.999,
    label: "Operational Risk Zone",
    statusBadge: "Vulnerability Flagged",
    color: "#C1701F", // orange
    strokeColor: "#EA580C",
    bg: "#FFF7ED",
    border: "#FDBA74",
    textClass: "text-orange-800",
    desc: "Multiple operational friction points affecting cash flow, machine downtime, quality rejections, or workforce productivity."
  },
  {
    min: 0,
    max: 49.999,
    label: "Critical Intervention Required",
    statusBadge: "Urgent Remediation",
    color: "#B4442E", // rust/red
    strokeColor: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    textClass: "text-rose-800",
    desc: "Significant operational, financial, or compliance risks threatening business continuity. Immediate turnaround intervention recommended."
  }
];

export const INDUSTRY_OPTIONS = [
  "Engineering & Fabrication",
  "Textiles & Apparel",
  "Auto Components",
  "Chemicals & Plastics",
  "Food Processing",
  "Electronics & Electricals",
  "Pharma & Life Sciences",
  "Services",
  "Others"
];

export const EMPLOYEE_OPTIONS = [
  "Under 20",
  "20–50",
  "51–100",
  "101–250",
  "250+"
];

export const TURNOVER_OPTIONS = [
  "Under ₹1 Cr",
  "₹1–5 Cr",
  "₹5–25 Cr",
  "₹25–100 Cr",
  "Above ₹100 Cr"
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

  const filteredOptions = hasSearch
    ? options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase()))
    : options;

  return (
    <div className="relative space-y-1.5" ref={dropdownRef}>
      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-sm text-left flex items-center justify-between transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] cursor-pointer"
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
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 p-2 space-y-1">
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
                    <span className="truncate">{opt}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#D98A10] shrink-0 ml-2" />}
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

export default function MSMEHealthCheckPage() {
  // Navigation & Screen State
  const [screen, setScreen] = useState<"intro" | "question" | "results">("intro");
  const [catIndex, setCatIndex] = useState(0);

  // Profile Form State
  const [profile, setProfile] = useState({
    company: "",
    country: "", // State / Location
    industry: "",
    entryRoute: "", // Number of Employees
    productApproach: "", // Annual Turnover
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

  // Request Consultation / Audit Modals
  const [showRequestModal, setShowRequestModal] = useState<null | "diagnostic" | "audit">(null);
  const [requestNotes, setRequestNotes] = useState("");
  const [requestPreferredTime, setRequestPreferredTime] = useState("");
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
  const [requestSubmittedSuccess, setRequestSubmittedSuccess] = useState(false);
  const [requestSubmitError, setRequestSubmitError] = useState("");

  // Reset Confirmation Modal
  const [showResetModal, setShowResetModal] = useState(false);

  // Answers State: key is "catId::qIndex" -> "yes" | "partial" | "no" | "na"
  const [answers, setAnswers] = useState<Record<string, "yes" | "partial" | "no" | "na">>({});

  // Mobile Category Navigation Expansion State
  const [showMobileCatNav, setShowMobileCatNav] = useState(false);

  // Scroll to top on screen or category change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [screen, catIndex]);

  // Scoring Calculations
  const scoreValue = (v: "yes" | "partial" | "no" | "na", perQ: number) => {
    if (v === "yes") return perQ;
    if (v === "partial") return perQ / 2;
    return 0;
  };

  const computeResults = () => {
    let totalEarned = 0;
    let totalAchievable = 0;

    const catResults = CATEGORIES.map((c) => {
      const perQ = c.points / c.questions.length;
      const applicable = c.questions.filter(
        (_, i) => answers[`${c.id}::${i}`] && answers[`${c.id}::${i}`] !== "na"
      );
      const naCount = c.questions.filter((_, i) => answers[`${c.id}::${i}`] === "na").length;
      const isFullyNA = applicable.length === 0 && naCount === c.questions.length;

      if (isFullyNA) {
        return {
          id: c.id,
          name: c.name,
          shortName: c.shortName,
          points: c.points,
          earned: 0,
          pct: 0,
          isFullyNA: true,
          naCount,
        };
      }

      let rawSum = 0;
      c.questions.forEach((_, i) => {
        const v = answers[`${c.id}::${i}`];
        if (v && v !== "na") {
          rawSum += scoreValue(v, perQ);
        }
      });

      const maxApplicable = perQ * applicable.length;
      const rescaledEarned = maxApplicable > 0 ? (rawSum / maxApplicable) * c.points : 0;

      totalEarned += rescaledEarned;
      totalAchievable += c.points;

      return {
        id: c.id,
        name: c.name,
        shortName: c.shortName,
        points: c.points,
        earned: rescaledEarned,
        pct: c.points > 0 ? (rescaledEarned / c.points) * 100 : 0,
        isFullyNA: false,
        naCount,
      };
    });

    const total = totalAchievable > 0 ? (totalEarned / totalAchievable) * 100 : 0;
    return { total, catResults, totalAchievable };
  };

  const resultsData = computeResults();
  const roundedTotal = Math.round(resultsData.total);
  const currentBand =
    BANDS.find((b) => resultsData.total >= b.min && resultsData.total <= b.max) ||
    BANDS[BANDS.length - 1];
  const sortedGaps = [...resultsData.catResults]
    .filter((c) => !c.isFullyNA)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 3);

  // Overall Progress Percentage
  const totalQuestions = CATEGORIES.reduce((acc, c) => acc + c.questions.length, 0);
  const answeredTotal = Object.keys(answers).length;
  const progressPercent = Math.min(100, Math.round((answeredTotal / totalQuestions) * 100));

  // Current category checks
  const currentCat = CATEGORIES[catIndex];
  const isCurrentCategoryComplete =
    currentCat &&
    currentCat.questions.every((_, qIdx) => !!answers[`${currentCat.id}::${qIdx}`]);

  const isCategoryComplete = (cat: Category) => {
    return cat.questions.every((_, qIdx) => !!answers[`${cat.id}::${qIdx}`]);
  };

  const handleSelectAnswer = (qIdx: number, val: "yes" | "partial" | "no" | "na") => {
    if (!currentCat) return;
    const key = `${currentCat.id}::${qIdx}`;
    setAnswers((prev) => ({ ...prev, [key]: val }));
  };

  // Lead Submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isNameOk = !!contact.name.trim();
    const isDesigOk = !!contact.designation.trim();
    const isEmailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim());

    setContactErrors({
      name: !isNameOk,
      designation: !isDesigOk,
      email: !isEmailOk,
    });

    if (!isNameOk || !isDesigOk || !isEmailOk) return;

    setIsSubmittingContact(true);
    setContactSubmitError("");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New MSME Health Check lead: ${profile.company || contact.name}`,
      from_name: "Business Clinic MSME Health Check",
      "Full Name": contact.name,
      "Designation": contact.designation,
      "Email": contact.email,
      "Telephone": contact.phone || "(not provided)",
      "Company Website": contact.website || "(not provided)",
      "Company Name": profile.company || "(not provided)",
      "State / Location": profile.country || "(not provided)",
      "Industry": profile.industry || "(not provided)",
      "Number of Employees": profile.entryRoute || "(not provided)",
      "Annual Turnover": profile.productApproach || "(not provided)",
    };

    let sent = false;
    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, String(v)));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      sent = !!data.success;
      if (!sent) {
        setContactSubmitError("Could not submit details — continuing to assessment.");
      }
    } catch {
      setContactSubmitError("Network issue — continuing to assessment.");
    } finally {
      setIsSubmittingContact(false);
      setContact((prev) => ({ ...prev, emailSent: sent }));
      setShowContactModal(false);
      setScreen("question");
      setCatIndex(0);
    }
  };

  // Service Request Modal Submission (Diagnostic or Audit)
  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showRequestModal) return;

    const isDiagnostic = showRequestModal === "diagnostic";
    const gapsSummary = sortedGaps
      .map((c) => `${c.name} (${Math.round(c.pct)}%)`)
      .join(", ");

    setIsSubmittingRequest(true);
    setRequestSubmitError("");

    let formattedPreferred = "";
    if (requestPreferredTime) {
      try {
        const d = new Date(requestPreferredTime);
        formattedPreferred = d.toLocaleString("en-IN", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      } catch {
        formattedPreferred = requestPreferredTime;
      }
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New ${isDiagnostic ? "Diagnostic Consultation" : "Industrial Health Audit"} request: ${profile.company || contact.name}`,
      from_name: "Business Clinic MSME Health Check",
      "Request Type": isDiagnostic
        ? "Free 30-Minute Diagnostic Consultation"
        : "Detailed Industrial Health Audit",
      "Full Name": contact.name,
      "Email": contact.email,
      "Telephone": contact.phone || "(not provided)",
      ...(isDiagnostic ? { "Preferred Date/Time": formattedPreferred || "(not specified)" } : {}),
      "Notes": requestNotes || "(none)",
      "Company Name": profile.company || "(not provided)",
      "Industry": profile.industry || "(not provided)",
      "Health Check Score": `${roundedTotal}/100 — ${currentBand.label}`,
      "Top Improvement Areas": gapsSummary || "(n/a)",
    };

    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, String(v)));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setRequestSubmittedSuccess(true);
      } else {
        setRequestSubmitError("Failed to submit request. Please try again or contact us directly.");
      }
    } catch {
      setRequestSubmitError("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmittingRequest(false);
    }
  };

  const handleReset = () => {
    setScreen("intro");
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
    setShowMobileCatNav(false);
    setShowRequestModal(null);
    setRequestNotes("");
    setRequestPreferredTime("");
    setRequestSubmittedSuccess(false);
    setRequestSubmitError("");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const hasAnyProgress =
    Object.keys(answers).length > 0 || profile.company || contact.name;

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#1E293B] font-sans antialiased selection:bg-[#D98A10]/20 selection:text-[#0C1D4A] print:bg-white">
      {/* ========================================================
          STICKY EXECUTIVE MASTHEAD
          ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#0C1D4A] text-white border-b border-[#D98A10]/20 shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand & Diagnostic Sub-title */}
          <div className="flex items-center space-x-3">
            <Link
              href="/services/indian-msme-troubleshooting"
              className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#D98A10]" />
              <span className="hidden sm:inline">MSME Troubleshooting</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-sm sm:text-base tracking-tight">
                Business Clinic
              </span>
              <span className="hidden md:inline-block text-[11px] font-mono tracking-widest text-[#D98A10] uppercase bg-white/10 px-2 py-0.5 rounded-xs">
                MSME Diagnostic Studio
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

      {/* ========================================================
          SCREEN 1: INTRO & ENTERPRISE PROFILE FORM
          ======================================================== */}
      {screen === "intro" && (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-16">
          {/* Hero Banner */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-12 shadow-sm relative overflow-hidden mb-6 sm:mb-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D98A10]/10 via-[#0C1D4A]/5 to-transparent rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="max-w-2xl relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D98A10]/10 border border-[#D98A10]/30 text-[#D98A10] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Operational Health Benchmark</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0C1D4A] tracking-tight leading-tight">
                MSME Health Check
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                A structured self-assessment across ten operational dimensions. Answer honestly — the value of this diagnostic is in surfacing operational bottlenecks, statutory risks, and margin leaks before they compound into financial distress.
              </p>
            </div>

            {/* Diagnostic Pillars Highlight Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100 text-slate-700">
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Coverage</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">10 Operational Pillars</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#D98A10] font-bold uppercase">Calibration</div>
                <div className="text-sm font-semibold text-[#0C1D4A]">Lean & MSME Aligned</div>
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
              <h2 className="font-serif text-xl font-bold text-[#0C1D4A]">
                Enterprise Profile
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Provide contextual background so your operational health diagnostic can be calibrated accurately.
              </p>
            </div>

            <div className="space-y-5">
              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Shree Enterprises Pvt. Ltd."
                  value={profile.company}
                  onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] transition-colors"
                />
              </div>

              {/* Row: Industry & Number of Employees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CustomDropdown
                  label="Industry / Sector"
                  value={profile.industry}
                  onChange={(val) => setProfile({ ...profile, industry: val })}
                  options={INDUSTRY_OPTIONS}
                  placeholder="Select sector"
                  hasSearch={true}
                />

                <CustomDropdown
                  label="Number of Employees"
                  value={profile.entryRoute}
                  onChange={(val) => setProfile({ ...profile, entryRoute: val })}
                  options={EMPLOYEE_OPTIONS}
                  placeholder="Select range"
                />
              </div>

              {/* Row: Annual Turnover & State/Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CustomDropdown
                  label="Annual Turnover"
                  value={profile.productApproach}
                  onChange={(val) => setProfile({ ...profile, productApproach: val })}
                  options={TURNOVER_OPTIONS}
                  placeholder="Select range"
                />

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    State / Location
                  </label>
                  <input
                    type="text"
                    placeholder="Pune, Maharashtra"
                    value={profile.country}
                    onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Takes about 8–10 minutes
              </span>

              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0C1D4A] hover:bg-[#142B6A] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          
          {/* ----------------------------------------------------
              MOBILE CATEGORY STEPPER & DRAWER (< lg only)
              ---------------------------------------------------- */}
          <div className="lg:hidden mb-4 space-y-2">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs">
              {/* Category Info & Total Progress */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center space-x-2 truncate pr-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D98A10] shrink-0">
                    Dimension {catIndex + 1}/{CATEGORIES.length}
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
                {CATEGORIES.map((cat, idx) => {
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
                  {CATEGORIES.filter((c) => isCategoryComplete(c)).length}/{CATEGORIES.length} completed
                </span>
              </div>

              {/* Collapsible Category List */}
              {showMobileCatNav && (
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {CATEGORIES.map((cat, idx) => {
                    const isCurrent = idx === catIndex;
                    const isDone = isCategoryComplete(cat);
                    const answeredCountInCat = cat.questions.filter(
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
                            {answeredCountInCat}/{cat.questions.length}
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
                      10 Operational Dimensions
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-slate-700">
                      {progressPercent}%
                    </span>
                    <span className="block text-[10px] text-slate-400">Answered</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full bg-gradient-to-r from-[#0C1D4A] via-[#1E3A8A] to-[#D98A10] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Categories Nav List */}
                <nav className="space-y-1.5" aria-label="Assessment Navigation">
                  {CATEGORIES.map((cat, idx) => {
                    const isCurrent = idx === catIndex;
                    const isDone = isCategoryComplete(cat);
                    const answeredCountInCat = cat.questions.filter(
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

                        <div className="flex items-center space-x-1 shrink-0 ml-2 font-mono text-[10px]">
                          <span className={isCurrent ? "text-slate-300" : "text-slate-400"}>
                            {answeredCountInCat}/{cat.questions.length}
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

                {/* Reset Trigger in Sidebar */}
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
                      <span>Category {catIndex + 1} of {CATEGORIES.length}</span>
                      <span>•</span>
                      <span>{currentCat.points} Points Weighting</span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#0C1D4A]">
                      {currentCat.name}
                    </h2>
                  </div>

                  <div className="text-xs text-slate-400 font-mono bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
                    {currentCat.questions.filter((_, i) => answers[`${currentCat.id}::${i}`]).length} of {currentCat.questions.length} answered
                  </div>
                </div>

                {/* Questions Micro-cards */}
                <div className="space-y-6 divide-y divide-slate-100">
                  {currentCat.questions.map((q, qIdx) => {
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

                        {/* Option Selectors: Yes / Partially / No / N/A */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pl-0 sm:pl-9">
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

                          {/* Option: N/A */}
                          <button
                            type="button"
                            onClick={() => handleSelectAnswer(qIdx, "na")}
                            className={`p-2 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                              currentAnswer === "na"
                                ? "bg-[#4A6D8C] border-[#4A6D8C] text-white shadow-sm ring-2 ring-[#4A6D8C]/30"
                                : "bg-slate-50/70 border-slate-200 text-slate-700 hover:border-[#4A6D8C] hover:bg-slate-100"
                            }`}
                          >
                            <HelpCircle className="w-4 h-4 shrink-0" />
                            <span>N/A</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Footer */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (catIndex === 0) {
                        setScreen("intro");
                      } else {
                        setCatIndex(catIndex - 1);
                      }
                    }}
                    className="inline-flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0C1D4A] px-4 sm:px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    disabled={!isCurrentCategoryComplete}
                    onClick={() => {
                      if (catIndex === CATEGORIES.length - 1) {
                        setScreen("results");
                      } else {
                        setCatIndex(catIndex + 1);
                      }
                    }}
                    className={`inline-flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all cursor-pointer text-center ${
                      isCurrentCategoryComplete
                        ? "bg-[#0C1D4A] hover:bg-[#142B6A] text-white shadow-sm hover:shadow"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                    }`}
                  >
                    <span>
                      {catIndex === CATEGORIES.length - 1
                        ? "Generate Health Score →"
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
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 space-y-6 sm:space-y-10">
          {/* Header Metadata Bar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl px-6 py-4 shadow-xs flex flex-wrap items-center justify-between text-xs text-slate-600">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#0C1D4A] text-white flex items-center justify-center font-serif font-bold">
                BC
              </div>
              <div>
                <span className="font-bold text-[#0C1D4A] text-sm block">
                  {profile.company || "MSME Health Diagnostic"}
                </span>
                <span className="text-slate-400 text-xs">
                  {profile.country ? `${profile.country} • ` : ""}
                  {profile.industry || "Manufacturing & Operations"}
                  {profile.productApproach ? ` • Turnover ${profile.productApproach}` : ""}
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
                <span>Executive Operational Health Score</span>
              </div>

              {/* Radial SVG Circular Donut Dial */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-slate-100"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="none"
                  />
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

              {/* N/A Footnote if applicable */}
              {resultsData.catResults.some((c) => c.isFullyNA) && (
                <div className="text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  Categories marked not applicable were excluded from calculation and normalized across remaining {resultsData.totalAchievable} points.
                </div>
              )}
            </div>

            {/* Right Col: Benchmark Comparison & Key Takeaways */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0C1D4A] to-[#142B6A] text-white rounded-2xl p-5 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                  <TrendingUp className="w-4 h-4" />
                  <span>Peer Benchmark Context</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  How You Compare Against Indian Industrial MSMEs
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed text-justify">
                  Benchmarked against empirical data from Indian manufacturing and industrial MSMEs, clear operational thresholds emerge:
                </p>

                {/* Benchmark Bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                      <span>Your Enterprise</span>
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
                      <span>MSME Sector Average</span>
                      <span className="text-slate-300">54/100</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: "54%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                      <span>Growth-Ready Benchmark</span>
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
                <span className="text-[#D98A10] font-bold">Advisory Insight:</span> MSMEs operating with scores below 70 typically face 15–25% avoidable margin loss via unmonitored scrap rates, inventory stockouts, or overdue receivables.
              </div>
            </div>
          </div>

          {/* Dimension Breakdown Grid (10 Pillars) */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-10 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                  Comprehensive Audit
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0C1D4A]">
                  Operational Health by Category
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Weighted against 100 points
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsData.catResults.map((cat) => {
                if (cat.isFullyNA) {
                  return (
                    <div
                      key={cat.id}
                      className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 space-y-3 opacity-60"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-800 leading-snug">
                          {cat.name}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 bg-slate-100 text-slate-600 border-slate-200">
                          N/A
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden" />
                        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 pt-0.5">
                          <span>Excluded</span>
                          <span>{cat.points} pts</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                const pct = Math.round(cat.pct);
                const isStrong = pct >= 70;
                const isModerate = pct >= 40 && pct < 70;
                const statusColor = isStrong ? "text-emerald-700" : isModerate ? "text-[#D98A10]" : "text-[#B4442E]";
                const barColor = isStrong ? "#16a34a" : isModerate ? "#D98A10" : "#B4442E";
                const badgeLabel = isStrong ? "Strong" : isModerate ? "Developing" : "Vulnerable";
                const badgeBg = isStrong
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : isModerate
                  ? "bg-amber-50 text-amber-800 border-amber-200"
                  : "bg-rose-50 text-rose-800 border-rose-200";

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
                Top 3 Improvement Areas
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Prioritize these operational friction points before they compound into financial loss or production slowdowns.
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
                        {Math.round(gap.pct)}% Health
                      </span>
                    </div>

                    <h4 className="font-bold text-[#0C1D4A] text-sm">
                      {gap.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      Scoring {Math.round(gap.pct)}% health — prioritize this before it compounds into a bigger operational or financial issue.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-200/50 text-[11px] font-semibold text-[#0C1D4A] flex items-center space-x-1">
                    <Compass className="w-3.5 h-3.5 text-[#D98A10]" />
                    <span>Requires Targeted Lean Intervention</span>
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
                Recommended Next Step: Turn Diagnosis into Action
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                This self-assessment is directional. Business Clinic can go deeper with a structured diagnostic — and if you want it, help you fix what&apos;s found on your plant floor, not just report on it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowRequestModal("diagnostic");
                  setRequestSubmittedSuccess(false);
                  setRequestSubmitError("");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D98A10] hover:bg-[#c57e0e] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Free 30-Minute Diagnostic Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowRequestModal("audit");
                  setRequestSubmittedSuccess(false);
                  setRequestSubmitError("");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                <span>Detailed Industrial Health Audit</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-white/15 transition-all print:hidden cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#D98A10]" />
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
            Business Clinic — action-oriented advisory for Indian MSMEs. This preliminary score is directional; a full diagnostic refines it.
          </footer>
        </main>
      )}

      {/* ========================================================
          MODAL 1: CONTACT INFORMATION / LEAD CAPTURE
          ======================================================== */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#0C1D4A]">
                  Before you begin
                </h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed text-justify">
                  Tell us who to send your health check results to. Business Clinic will use this to follow up with your Preliminary Health Check and, if relevant, an invitation to a diagnostic session.
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

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Designation <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Managing Director / Founder"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
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
          MODAL 2: REQUEST CONSULTATION / INDUSTRIAL AUDIT
          ======================================================== */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            {requestSubmittedSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Request Received
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Business Clinic has received your request and your diagnostic summary. We will reach out to you shortly at {contact.email || "your email"}.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRequestModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0C1D4A] hover:bg-[#142B6A] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h2 className="font-serif text-xl font-bold text-[#0C1D4A]">
                      {showRequestModal === "diagnostic"
                        ? "Request Free 30-Minute Diagnostic Consultation"
                        : "Request Detailed Industrial Health Audit"}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed text-justify">
                      We already have your operational assessment details. Confirm below and Business Clinic will reach out to schedule.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRequestModal(null)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleRequestSubmit} className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                      />
                    </div>

                    {showRequestModal === "diagnostic" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Date & Time
                        </label>
                        <input
                          type="datetime-local"
                          value={requestPreferredTime}
                          onChange={(e) => setRequestPreferredTime(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Anything specific you&apos;d like us to know?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Optional notes regarding key bottlenecks or timeline..."
                      value={requestNotes}
                      onChange={(e) => setRequestNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-[#0C1D4A]"
                    />
                  </div>

                  {requestSubmitError && (
                    <div className="text-[11px] text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-200">
                      {requestSubmitError}
                    </div>
                  )}

                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowRequestModal(null)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmittingRequest}
                      className="inline-flex items-center space-x-2 bg-[#0C1D4A] hover:bg-[#142B6A] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-sm hover:shadow transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <span>{isSubmittingRequest ? "Sending..." : "Send Request →"}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    This sends your request directly to Business Clinic by email.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 3: RESET CONFIRMATION
          ======================================================== */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 text-center">
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
