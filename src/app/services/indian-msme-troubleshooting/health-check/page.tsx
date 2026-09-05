"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  Mail,
  Phone,
  RefreshCw,
  Sparkles,
  User,
  X,
  Target,
  TrendingUp,
  Factory,
  Award,
  Truck,
  LineChart,
  Users,
  ShieldAlert,
  Cpu,
  Bookmark
} from "lucide-react";

// Web3Forms configuration from client HTML
const WEB3FORMS_ACCESS_KEY: string = "056edc09-942b-4f07-b553-9a65f7892d3a";

interface Category {
  id: string;
  name: string;
  points: number;
  questions: string[];
}

const CATEGORIES: Category[] = [
  {
    id: "strategy",
    name: "Business Strategy & Leadership",
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

const BANDS = [
  { min: 85, max: 100, label: "Growth Ready", color: "#3E7D4C", bg: "#E7F1E7", desc: "Strong systems and scalable operations." },
  { min: 70, max: 84.999, label: "Stable but Improvement Needed", color: "#C98A2C", bg: "#FBF0DE", desc: "Growth potential exists, but certain bottlenecks need attention." },
  { min: 50, max: 69.999, label: "Operational Risk Zone", color: "#B4442E", bg: "#FBEADA", desc: "Several weaknesses affecting profitability and competitiveness." },
  { min: 0, max: 49.999, label: "Critical Intervention Required", color: "#B4442E", bg: "#F7E4DF", desc: "Significant operational, financial, or compliance risks." }
];

export default function MSMEHealthCheckPage() {
  const [screen, setScreen] = useState<"intro" | "question" | "results">("intro");
  
  // Profile state
  const [profile, setProfile] = useState({
    company: "",
    country: "", // Acts as State/Location
    industry: "",
    entryRoute: "", // Acts as Employees Range
    productApproach: "" // Acts as Turnover Range
  });

  // Contact State
  const [contact, setContact] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    emailSent: false
  });

  // Answers State: key is `catId::qIndex` -> 'yes'|'partial'|'no'|'na'
  const [answers, setAnswers] = useState<Record<string, "yes" | "partial" | "no" | "na">>({});
  const [catIndex, setCatIndex] = useState(0);

  // Modals state
  const [showContactModal, setShowContactModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState<null | "diagnostic" | "audit">(null);
  
  // Modal error state
  const [modalErr, setModalErr] = useState("");
  const [requestErr, setRequestErr] = useState("");
  const [submittingLead, setSubmittingLead] = useState(false);
  const [submittingRequest, setSubmittingRequest] = useState(false);
  const [requestSentStatus, setRequestSentStatus] = useState(false);

  // Contact modal validation
  const [contactValidation, setContactValidation] = useState({
    name: true,
    designation: true,
    email: true
  });

  // Request modal validation
  const [requestValidation, setRequestValidation] = useState({
    name: true,
    email: true
  });

  // Reset function
  const resetApp = () => {
    setScreen("intro");
    setProfile({ company: "", country: "", industry: "", entryRoute: "", productApproach: "" });
    setContact({ name: "", designation: "", email: "", phone: "", website: "", emailSent: false });
    setAnswers({});
    setCatIndex(0);
    setShowContactModal(false);
    setShowRequestModal(null);
    setModalErr("");
    setRequestErr("");
    setRequestSentStatus(false);
  };

  const handleStartQuiz = () => {
    setShowContactModal(true);
  };

  const handleContactSubmit = async () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim());
    const isNameOk = !!contact.name.trim();
    const isDesigOk = !!contact.designation.trim();

    setContactValidation({
      name: isNameOk,
      designation: isDesigOk,
      email: emailOk
    });

    if (!isNameOk || !isDesigOk || !emailOk) return;

    setSubmittingLead(true);
    setModalErr("");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New MSME Health Check lead: ${profile.company || contact.name}`,
      from_name: "Business Clinic Scorecard",
      "Full Name": contact.name,
      "Designation": contact.designation,
      "Email": contact.email,
      "Telephone": contact.phone || "(not provided)",
      "Company Website": contact.website || "(not provided)",
      "Company Name": profile.company || "(not provided)",
      "State / Location": profile.country || "(not provided)",
      "Industry": profile.industry || "(not provided)",
      "Number of Employees": profile.entryRoute || "(not provided)",
      "Annual Turnover": profile.productApproach || "(not provided)"
    };

    let sent = false;
    if (WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const formData = new FormData();
        Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData
        });
        const data = await res.json();
        sent = !!data.success;
        if (!sent) {
          setModalErr("Could not send lead details. Proceeding to assessment anyway.");
        }
      } catch (err) {
        setModalErr("Network error sending details. Proceeding to assessment anyway.");
      }
    }

    setContact(prev => ({ ...prev, emailSent: sent }));
    setSubmittingLead(false);
    setShowContactModal(false);
    setScreen("question");
    setCatIndex(0);
  };

  const activeCategory = CATEGORIES[catIndex];
  const totalQ = CATEGORIES.reduce((s, c) => s + c.questions.length, 0);
  
  // Computes progress based on how many questions in total have answers
  const computeTotalAnswered = () => {
    return Object.keys(answers).length;
  };
  const totalAnswered = computeTotalAnswered();
  const progressPct = Math.round((totalAnswered / totalQ) * 100);

  // Check if all questions in the active category are answered
  const allAnsweredInActiveCat = activeCategory.questions.every(
    (_, i) => answers[`${activeCategory.id}::${i}`] !== undefined
  );

  const handleNext = () => {
    if (catIndex === CATEGORIES.length - 1) {
      setScreen("results");
    } else {
      setCatIndex(catIndex + 1);
    }
  };

  const handleBack = () => {
    if (catIndex === 0) {
      setScreen("intro");
    } else {
      setCatIndex(catIndex - 1);
    }
  };

  const scoreValue = (v: string, perQ: number) => {
    if (v === "yes") return perQ;
    if (v === "partial") return perQ / 2;
    return 0;
  };

  const computeResults = () => {
    let totalEarned = 0;
    let totalAchievable = 0;

    const catResults = CATEGORIES.map(c => {
      const perQ = c.points / c.questions.length;
      const applicable = c.questions.filter((_, i) => answers[`${c.id}::${i}`] !== "na");
      const naCount = c.questions.length - applicable.length;
      const isFullyNA = applicable.length === 0;

      if (isFullyNA) {
        return { name: c.name, points: c.points, earned: 0, pct: 0, isFullyNA: true, naCount };
      }

      let rawSum = 0;
      c.questions.forEach((_, i) => {
        const v = answers[`${c.id}::${i}`];
        if (v && v !== "na") rawSum += scoreValue(v, perQ);
      });
      
      const maxApplicable = perQ * applicable.length;
      const rescaledEarned = (rawSum / maxApplicable) * c.points;

      totalEarned += rescaledEarned;
      totalAchievable += c.points;

      return {
        name: c.name,
        points: c.points,
        earned: rescaledEarned,
        pct: (rescaledEarned / c.points) * 100,
        isFullyNA: false,
        naCount
      };
    });

    const total = totalAchievable > 0 ? (totalEarned / totalAchievable) * 100 : 0;
    return { total, catResults, totalAchievable };
  };

  const handleRequestSubmit = async () => {
    const isNameOk = !!contact.name.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim());

    setRequestValidation({
      name: isNameOk,
      email: emailOk
    });

    if (!isNameOk || !emailOk) return;

    setSubmittingRequest(true);
    setRequestErr("");

    const isDiagnostic = showRequestModal === "diagnostic";
    const { total, catResults } = computeResults();
    const roundedTotal = Math.round(total);
    const band = BANDS.find(b => total >= b.min && total <= b.max) || BANDS[BANDS.length - 1];
    
    // Top 3 improvement areas
    const gapsSummary = [...catResults]
      .filter(c => !c.isFullyNA)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3)
      .map(c => `${c.name} (${Math.round(c.pct)}%)`)
      .join(", ");

    const preferredEl = document.getElementById("r-preferred") as HTMLInputElement;
    let preferred = "";
    if (preferredEl && preferredEl.value) {
      const d = new Date(preferredEl.value);
      preferred = d.toLocaleString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
      });
    }

    const notesEl = document.getElementById("r-notes") as HTMLInputElement;
    const notes = notesEl ? notesEl.value.trim() : "";

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New ${isDiagnostic ? "Diagnostic Consultation" : "Industrial Health Audit"} request: ${profile.company || contact.name}`,
      from_name: "Business Clinic MSME Health Check",
      "Request Type": isDiagnostic ? "Free 30-Minute Diagnostic Consultation" : "Detailed Industrial Health Audit",
      "Full Name": contact.name,
      "Email": contact.email,
      "Telephone": contact.phone || "(not provided)",
      ...(isDiagnostic ? { "Preferred Date/Time": preferred || "(not specified)" } : {}),
      "Notes": notes || "(none)",
      "Company Name": profile.company || "(not provided)",
      "Industry": profile.industry || "(not provided)",
      "Health Check Score": `${roundedTotal}/100 — ${band.label}`,
      "Top Improvement Areas": gapsSummary || "(n/a)"
    };

    let sent = false;
    if (WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const formData = new FormData();
        Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData
        });
        const data = await res.json();
        sent = !!data.success;
        if (!sent) {
          setRequestErr("Could not send request — please try again or contact us directly.");
          setSubmittingRequest(false);
          return;
        }
      } catch (err) {
        setRequestErr("Network error — please try again.");
        setSubmittingRequest(false);
        return;
      }
    }

    setRequestSentStatus(true);
    setSubmittingRequest(false);
  };

  const handleOptionSelect = (catId: string, qIdx: number, val: "yes" | "partial" | "no" | "na") => {
    setAnswers(prev => ({
      ...prev,
      [`${catId}::${qIdx}`]: val
    }));
  };

  const { total, catResults, totalAchievable } = computeResults();
  const roundedTotal = Math.round(total);
  const band = BANDS.find(b => total >= b.min && total <= b.max) || BANDS[BANDS.length - 1];
  const sortedGaps = [...catResults]
    .filter(c => !c.isFullyNA)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 3);

  // Scroll to top on screen or category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [screen, catIndex]);

  return (
    <div className="min-h-screen bg-[#EEEBE3] text-[#122031] font-sans antialiased selection:bg-[#1F7A6C] selection:text-white pb-20">
      
      {/* Header Bar */}
      <header className="max-w-[760px] mx-auto px-5 pt-8 pb-4 border-b border-[#D8D3C6] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/services/indian-msme-troubleshooting" className="text-[#3c4d5f] hover:text-[#122031] p-1 rounded-full transition-colors mr-1">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="font-mono text-xs tracking-wider uppercase text-[#3c4d5f] font-semibold">
            <b>Business Clinic</b> · MSME Troubleshooting
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => {
              if (Object.keys(answers).length > 0 || profile.company || contact.name) {
                if (window.confirm("Start a new assessment? This will clear all answers and profile info.")) {
                  resetApp();
                }
              } else {
                resetApp();
              }
            }} 
            className="border border-[#D8D3C6] hover:border-[#B4442E] hover:text-[#B4442E] cursor-pointer text-xs font-semibold text-[#3c4d5f] px-3 py-1 rounded-full bg-transparent transition-all"
          >
            ↺ Reset
          </button>
          <span className="hidden sm:inline-block font-mono text-xs tracking-wide text-[#144F45] bg-[#1F7A6C]/10 px-2.5 py-1 rounded-full font-medium">
            Self-Assessment
          </span>
        </div>
      </header>

      {/* Main Wrapper */}
      <main className="max-w-[760px] mx-auto px-5 pt-8">
        
        {/* Intro Screen */}
        {screen === "intro" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-serif font-semibold text-3xl sm:text-4xl tracking-tight leading-tight">
                MSME Health Check
              </h1>
              <p className="text-[#3c4d5f] text-sm sm:text-base leading-relaxed max-w-[56ch]">
                A structured self-assessment across ten operational dimensions. Answer honestly — the value of this tool is in the gaps it surfaces, not a high score.
              </p>
            </div>

            <div className="bg-white border border-[#D8D3C6] rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Shree Enterprises Pvt. Ltd." 
                  value={profile.company}
                  onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] bg-[#FCFBF8] text-sm text-[#122031] focus:outline-none focus:border-[#1F7A6C] focus:ring-1 focus:ring-[#1F7A6C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Industry / Sector</label>
                  <select 
                    value={profile.industry}
                    onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] bg-[#FCFBF8] text-sm text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  >
                    <option value="">Select sector</option>
                    {[
                      "Engineering & Fabrication",
                      "Textiles & Apparel",
                      "Auto Components",
                      "Chemicals & Plastics",
                      "Food Processing",
                      "Electronics & Electricals",
                      "Pharma & Life Sciences",
                      "Other Manufacturing",
                      "Services"
                    ].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Number of Employees</label>
                  <select 
                    value={profile.entryRoute}
                    onChange={(e) => setProfile({ ...profile, entryRoute: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] bg-[#FCFBF8] text-sm text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  >
                    <option value="">Select range</option>
                    {["Under 20", "20–50", "51–100", "101–250", "250+"].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Annual Turnover</label>
                  <select 
                    value={profile.productApproach}
                    onChange={(e) => setProfile({ ...profile, productApproach: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] bg-[#FCFBF8] text-sm text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  >
                    <option value="">Select range</option>
                    {["Under ₹1 Cr", "₹1–5 Cr", "₹5–25 Cr", "₹25–100 Cr", "Above ₹100 Cr"].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">State / Location</label>
                  <input 
                    type="text" 
                    placeholder="Pune, Maharashtra" 
                    value={profile.country}
                    onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] bg-[#FCFBF8] text-sm text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EEEBE3]">
                <span className="text-xs text-[#3c4d5f] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1F7A6C]" /> Takes about 8–10 minutes
                </span>
                <button 
                  onClick={handleStartQuiz}
                  className="w-full sm:w-auto bg-[#122031] hover:bg-[#1F7A6C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-sm active:scale-98 transition-all"
                >
                  Begin Assessment →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Question Screen */}
        {screen === "question" && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Progress Area */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-mono text-[#3c4d5f] font-semibold">
                <span>CATEGORY {catIndex + 1} OF {CATEGORIES.length}</span>
                <span>{progressPct}% COMPLETE</span>
              </div>
              <div className="h-1.5 bg-[#E2DECF] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#1F7A6C] to-[#144F45] rounded-full transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                ></div>
              </div>
            </div>

            {/* Questions Card */}
            <div className="bg-white border border-[#D8D3C6] rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
              
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#144F45] tracking-wider uppercase bg-[#1F7A6C]/10 px-2.5 py-1 rounded-full">
                  {activeCategory.points} points available
                </span>
                <h2 className="font-serif font-bold text-xl sm:text-2xl pt-2">
                  {activeCategory.name}
                </h2>
              </div>

              <div className="divide-y divide-[#D8D3C6]">
                {activeCategory.questions.map((q, i) => {
                  const key = `${activeCategory.id}::${i}`;
                  const currentAnswer = answers[key];

                  return (
                    <div key={i} className="py-5 first:pt-0 last:pb-0 space-y-3">
                      <p className="text-sm font-semibold text-[#122031] leading-relaxed">
                        {q}
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { val: "yes", label: "Yes", activeClass: "bg-[#1F7A6C] border-[#1F7A6C] text-white" },
                          { val: "partial", label: "Partially", activeClass: "bg-[#C98A2C] border-[#C98A2C] text-white" },
                          { val: "no", label: "No", activeClass: "bg-[#8B8577] border-[#8B8577] text-white" },
                          { val: "na", label: "N/A", activeClass: "bg-[#4A6D8C] border-[#4A6D8C] text-white" }
                        ].map(opt => {
                          const isActive = currentAnswer === opt.val;
                          return (
                            <button
                              key={opt.val}
                              onClick={() => handleOptionSelect(activeCategory.id, i, opt.val as any)}
                              className={`py-2 px-1 border border-[#D8D3C6] rounded-lg text-xs font-semibold text-[#3c4d5f] cursor-pointer text-center bg-[#FCFBF8] transition-all hover:border-[#1F7A6C] select-none ${
                                isActive ? opt.activeClass : ""
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-[#EEEBE3] flex justify-between gap-4">
                <button 
                  onClick={handleBack}
                  className="px-5 py-3 border border-[#D8D3C6] hover:bg-[#F3F1EA] text-xs font-bold uppercase tracking-wider text-[#122031] rounded-xl cursor-pointer transition-colors"
                >
                  ← Back
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!allAnsweredInActiveCat}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow-sm transition-all flex items-center space-x-1.5 ${
                    allAnsweredInActiveCat 
                      ? "bg-[#122031] hover:bg-[#1F7A6C] text-white cursor-pointer" 
                      : "bg-[#122031]/10 text-[#122031]/30 cursor-not-allowed"
                  }`}
                >
                  <span>{catIndex === CATEGORIES.length - 1 ? "See Results →" : "Next Category →"}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Results Screen */}
        {screen === "results" && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-white border border-[#D8D3C6] rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">
              
              {/* Respondent info */}
              {profile.company && (
                <div className="text-sm font-mono font-bold text-[#3c4d5f] border-b border-[#EEEBE3] pb-3 flex flex-wrap gap-x-3">
                  <span>{profile.company}</span>
                  {profile.industry && <span>• {profile.industry}</span>}
                  {profile.country && <span>• {profile.country}</span>}
                </div>
              )}

              {/* Big Score Gauge */}
              <div className="flex flex-col items-center justify-center text-center space-y-3 py-4">
                <span className="font-mono text-xs tracking-wider uppercase text-[#3c4d5f] font-bold">Your Health Check Score</span>
                <div 
                  className="font-serif text-6xl sm:text-7xl font-bold leading-none tracking-tight"
                  style={{ color: band.color }}
                >
                  {roundedTotal}
                </div>
                <div className="font-mono text-xs text-[#3c4d5f] tracking-widest uppercase">OUT OF 100</div>
                <div 
                  className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold border"
                  style={{ backgroundColor: band.bg, color: band.color, borderColor: band.color + "33" }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: band.color }}></span>
                  <span>{band.label}</span>
                </div>
                <p className="text-sm font-medium text-[#3c4d5f] max-w-[46ch] pt-1">
                  {band.desc}
                </p>

                {catResults.filter(c => c.isFullyNA).length > 0 && (
                  <p className="text-xs text-[#3c4d5f] max-w-sm">
                    {catResults.filter(c => c.isFullyNA).length} category/ies marked N/A. Scored across remaining {totalAchievable} points and normalized to 100.
                  </p>
                )}
              </div>

              {/* Category-wise Vitals */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold tracking-widest text-[#3c4d5f] uppercase border-b border-[#EEEBE3] pb-2">
                  Health by Category
                </h3>

                <div className="space-y-3">
                  {catResults.map((c, idx) => {
                    if (c.isFullyNA) {
                      return (
                        <div key={idx} className="grid grid-cols-1 sm:grid-cols-[1fr_120px_45px] items-center gap-2 text-xs">
                          <span className="font-semibold text-[#3c4d5f]">{c.name}</span>
                          <div className="h-2 bg-[#E2DECF] rounded-full overflow-hidden">
                            <div 
                              className="h-full w-full opacity-35" 
                              style={{ 
                                backgroundImage: "repeating-linear-gradient(45deg, #4A6D8C, #4A6D8C 4px, transparent 4px, transparent 8px)" 
                              }}
                            ></div>
                          </div>
                          <span className="font-mono font-bold text-[#4A6D8C] text-right">N/A</span>
                        </div>
                      );
                    }

                    const pctRound = Math.round(c.pct);
                    const color = pctRound >= 70 ? "#3E7D4C" : pctRound >= 40 ? "#C98A2C" : "#B4442E";

                    return (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-[1fr_120px_45px] items-center gap-2 text-xs">
                        <span className="font-semibold text-[#122031]">{c.name}</span>
                        <div className="h-2 bg-[#E2DECF] rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500" 
                            style={{ width: `${c.pct}%`, backgroundColor: color }}
                          ></div>
                        </div>
                        <span className="font-mono font-semibold text-right" style={{ color: color }}>
                          {pctRound}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top 3 Gaps */}
              <div className="space-y-4 pt-2">
                <h3 className="font-mono text-xs font-bold tracking-widest text-[#3c4d5f] uppercase border-b border-[#EEEBE3] pb-2">
                  Your Top 3 Improvement Areas
                </h3>

                <div className="space-y-3">
                  {sortedGaps.map((g, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 bg-[#FBF3EC] border border-[#EAD9C6] rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-[#B4442E] mt-1.5 shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#122031]">{g.name}</h4>
                        <p className="text-xs text-[#3c4d5f] leading-relaxed">
                          Scoring {Math.round(g.pct)}% health — prioritize building standards or capability in this area to prevent operational or yield bottlenecks.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-[#122031] text-white rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif font-semibold text-xl text-white">Recommended Next Step</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    This self-assessment is directional. Business Clinic can go deeper with a structured diagnostic — and if you want it, help you fix what's found, not just report on it.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => setShowRequestModal("diagnostic")}
                    className="w-full sm:w-auto bg-[#1F7A6C] hover:bg-[#279e8c] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer transition-colors"
                  >
                    Free 30-Min Diagnostic
                  </button>
                  <button 
                    onClick={() => setShowRequestModal("audit")}
                    className="w-full sm:w-auto bg-transparent border border-white/35 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer transition-colors"
                  >
                    Detailed Industrial Audit
                  </button>
                </div>
              </div>

              {/* Reset Actions */}
              <div className="pt-4 border-t border-[#EEEBE3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <button 
                  onClick={resetApp}
                  className="w-full sm:w-auto border border-[#D8D3C6] hover:bg-[#F3F1EA] text-[#122031] font-bold uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer transition-colors"
                >
                  Start Over
                </button>
                <span className="text-[#3c4d5f] font-mono text-xs">
                  Generated on {new Date().toLocaleDateString("en-IN")}
                </span>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer Text */}
      <footer className="max-w-[760px] mx-auto px-5 mt-10 text-center text-xs text-[#3c4d5f] leading-relaxed">
        Business Clinic — action-oriented advisory for Indian MSMEs. This preliminary score is directional; a full diagnostic refines it.
      </footer>

      {/* ============================================================== */}
      {/* 1. LEAD CONTACT MODAL (Before assessment starts) */}
      {/* ============================================================== */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#122031]/60 backdrop-blur-xs">
          <div className="w-full max-w-[460px] bg-white border border-[#D8D3C6] rounded-2xl shadow-2xl p-6 sm:p-7 space-y-5 text-[#122031] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start">
              <h2 className="font-serif font-semibold text-xl tracking-tight">Before you begin</h2>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-[#3c4d5f] hover:text-[#122031] p-1 rounded-full cursor-pointer hover:bg-slate-100 transition-all text-xl leading-none"
              >
                &times;
              </button>
            </div>
            
            <p className="text-xs text-[#3c4d5f] leading-relaxed">
              Tell us who to send your health check results to. Business Clinic will use this to follow up with your Preliminary Health Check and, if relevant, an invitation to a diagnostic session.
            </p>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">
                  Full Name <span className="text-[#B4442E]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Jane Müller" 
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#122031] focus:outline-none ${
                    contactValidation.name ? "border-[#D8D3C6] focus:border-[#1F7A6C]" : "border-[#B4442E]"
                  }`}
                />
                {!contactValidation.name && <div className="text-xs text-[#B4442E]">Please enter your name.</div>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">
                  Designation <span className="text-[#B4442E]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="VP International Business" 
                  value={contact.designation}
                  onChange={(e) => setContact({ ...contact, designation: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#122031] focus:outline-none ${
                    contactValidation.designation ? "border-[#D8D3C6] focus:border-[#1F7A6C]" : "border-[#B4442E]"
                  }`}
                />
                {!contactValidation.designation && <div className="text-xs text-[#B4442E]">Please enter your designation.</div>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">
                  Company Email <span className="text-[#B4442E]">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="jane@company.com" 
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#122031] focus:outline-none ${
                    contactValidation.email ? "border-[#D8D3C6] focus:border-[#1F7A6C]" : "border-[#B4442E]"
                  }`}
                />
                {!contactValidation.email && <div className="text-xs text-[#B4442E]">Please enter a valid company email.</div>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Telephone</label>
                  <input 
                    type="text" 
                    placeholder="+91 98765 43210" 
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] text-xs text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Website</label>
                  <input 
                    type="text" 
                    placeholder="company.com" 
                    value={contact.website}
                    onChange={(e) => setContact({ ...contact, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] text-xs text-[#122031] focus:outline-none focus:border-[#1F7A6C]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col items-stretch gap-2 border-t border-[#EEEBE3]">
              {modalErr && <span className="text-xs text-[#B4442E] leading-normal">{modalErr}</span>}
              <button 
                onClick={handleContactSubmit}
                disabled={submittingLead}
                className="w-full bg-[#122031] hover:bg-[#1F7A6C] disabled:bg-[#122031]/40 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl cursor-pointer transition-colors"
              >
                {submittingLead ? "Submitting..." : "Continue to Assessment →"}
              </button>
              <div className="text-xs text-[#3c4d5f] bg-[#F3F1EA] p-3 rounded-lg leading-relaxed text-center">
                Submitting this form sends your details to Business Clinic via email. It is not stored anywhere else.
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. SCHEDULING REQUEST MODALS (Results CTA screen) */}
      {/* ============================================================== */}
      {showRequestModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#122031]/60 backdrop-blur-xs">
          <div className="w-full max-w-[460px] bg-white border border-[#D8D3C6] rounded-2xl shadow-2xl p-6 sm:p-7 space-y-5 text-[#122031] animate-in fade-in zoom-in-95 duration-200">
            
            {!requestSentStatus ? (
              <>
                <div className="flex justify-between items-start">
                  <h2 className="font-serif font-semibold text-xl tracking-tight leading-snug">
                    {showRequestModal === "diagnostic" 
                      ? "Request Your Free 30-Minute Diagnostic Consultation" 
                      : "Request a Detailed Industrial Health Audit"
                    }
                  </h2>
                  <button 
                    onClick={() => setShowRequestModal(null)}
                    className="text-[#3c4d5f] hover:text-[#122031] p-1 rounded-full cursor-pointer hover:bg-slate-100 transition-all text-xl leading-none"
                  >
                    &times;
                  </button>
                </div>
                
                <p className="text-xs text-[#3c4d5f] leading-relaxed">
                  We already have your details from the assessment. Confirm below and Business Clinic will reach out to schedule.
                </p>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">
                      Full Name <span className="text-[#B4442E]">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        requestValidation.name ? "border-[#D8D3C6] focus:border-[#1F7A6C]" : "border-[#B4442E]"
                      }`}
                    />
                    {!requestValidation.name && <div className="text-xs text-[#B4442E]">Please enter your name.</div>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">
                      Email <span className="text-[#B4442E]">*</span>
                    </label>
                    <input 
                      type="email" 
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        requestValidation.email ? "border-[#D8D3C6] focus:border-[#1F7A6C]" : "border-[#B4442E]"
                      }`}
                    />
                    {!requestValidation.email && <div className="text-xs text-[#B4442E]">Please enter a valid email.</div>}
                  </div>

                  {showRequestModal === "diagnostic" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Telephone</label>
                        <input 
                          type="text" 
                          value={contact.phone}
                          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] text-xs focus:outline-none focus:border-[#1F7A6C]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Preferred Date & Time</label>
                        <input 
                          type="datetime-local" 
                          id="r-preferred"
                          className="w-full px-3.5 py-2 rounded-xl border border-[#D8D3C6] text-xs focus:outline-none focus:border-[#1F7A6C]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Telephone</label>
                      <input 
                        type="text" 
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] text-xs focus:outline-none focus:border-[#1F7A6C]"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4d5f]">Anything specific you'd like us to know?</label>
                    <input 
                      type="text" 
                      id="r-notes"
                      placeholder="Optional" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D3C6] text-xs focus:outline-none focus:border-[#1F7A6C]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-stretch gap-2 border-t border-[#EEEBE3]">
                  {requestErr && <span className="text-xs text-[#B4442E] leading-normal">{requestErr}</span>}
                  <button 
                    onClick={handleRequestSubmit}
                    disabled={submittingRequest}
                    className="w-full bg-[#122031] hover:bg-[#1F7A6C] disabled:bg-[#122031]/40 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl cursor-pointer transition-colors"
                  >
                    {submittingRequest ? "Sending..." : "Send Request →"}
                  </button>
                  <div className="text-xs text-[#3c4d5f] text-center">
                    This sends your request directly to Business Clinic by email.
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4 space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-serif font-bold text-xl">Request Sent</h2>
                  <p className="text-xs text-[#3c4d5f] leading-relaxed max-w-xs mx-auto">
                    Business Clinic has received your request and will be in touch shortly at <b>{contact.email}</b>.
                  </p>
                </div>
                <button 
                  onClick={() => setShowRequestModal(null)}
                  className="bg-[#122031] hover:bg-[#1F7A6C] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
