"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  ChevronRight,
  Sparkles,
  ListOrdered,
  Users,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
  PhoneCall,
  UserCheck,
  Search,
  Check,
  XCircle,
  Building2,
  Briefcase
} from "lucide-react";

export default function HRGapsMSMERecruitment() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-slate-100/70 min-h-screen py-8 sm:py-12 print:bg-white print:py-0 font-sans antialiased text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0C1D4A] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <article className="bg-white border border-slate-200/80 shadow-md rounded-2xl p-6 sm:p-12 lg:p-16 print:shadow-none print:border-none print:p-0">
          
          {/* Masthead / Header */}
          <header className="border-b border-slate-200 pb-8 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>MSME Advisory Paper</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C1D4A] tracking-tight leading-tight mb-2">
              MSME: HR GAPS IN RECRUITMENT
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#D98A10] uppercase tracking-wider mb-4">
              Diagnostics, Selection Flaws &amp; Actionable Remedies
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 gap-3">
              <div>
                <p className="font-semibold text-slate-900">
                  By Business Clinic
                </p>
                <p className="text-slate-500 font-medium">
                  People &amp; Operations Advisory
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10 min read</span>
                </span>
                <span>•</span>
                <span>MSME Growth &amp; Talent</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-10 p-5 bg-slate-50 border border-slate-200/90 rounded-xl print:hidden">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0C1D4A] uppercase tracking-wider mb-3">
              <ListOrdered className="w-4 h-4 text-[#D98A10]" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              <a href="#introduction" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>1. Introduction &amp; Background</span>
              </a>
              <a href="#terms-of-reference" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2. Terms of Reference &amp; Scope</span>
              </a>
              <a href="#stage-1-telephonic" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>3. Stage 1: Remote / Telephonic Interaction</span>
              </a>
              <a href="#stage-2-onsite" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>4. Stage 2: Onsite HR Interview &amp; Evaluation</span>
              </a>
              <a href="#stage-3-verification" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>5. Stage 3: Document Verification &amp; Risks</span>
              </a>
              <a href="#best-practices-checklist" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>6. MSME Recruitment Best Practices Checklist</span>
              </a>
              <a href="#conclusion" className="text-slate-600 hover:text-[#D98A10] transition-colors py-0.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>7. Conclusion</span>
              </a>
            </div>
          </nav>

          {/* Main Paper Content */}
          <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base [&_p]:text-justify [&_p]:[text-justify:inter-word] [&_li]:text-justify">
            
            {/* SECTION 1: INTRODUCTION & BACKGROUND */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A] border-b border-slate-100 pb-2">
                Introduction
              </h2>
              <p>
                Organizations are not built on bricks and mortar or plant and machinery. Quality human resources are the backbone of any establishment — they drive productivity, innovation and success by ensuring the right people are hired, trained, motivated, and retained. Without skilled and engaged employees, even the best strategies or technologies cannot deliver sustainable results.
              </p>
              <p>
                Recruitment and retention of resources who prove to be valuable is a mission critical task. Similarly, termination of an undesirable resource also needs immediate attention. While the former provides a positive impetus the latter limits negative effect.
              </p>
              <p>
                The issue gains critical importance for MSMEs in India as they do not have the best talent available to them and they cannot let go the sub-standard resource available to them because the show must go on. At this juncture the human resource function of recruitment and termination comes to the fore but the same is not given the attention it deserves by top leadership. This could be due to the lack of understanding on their part or incorrect prioritisation of the respective business functions that contribute to business success. An analysis of the same is being carried in this paper leading to logical deductions which in the end will prompt recommendations for actions that can be taken and processes that can be built to ensure what is best for the organization.
              </p>

              <h3 className="text-lg font-serif font-bold text-[#0C1D4A] pt-3">
                Background: The Attrition &amp; Key-Man Dilemma
              </h3>
              <p>
                The annual attrition rate for MSMEs in the public domain is stated to be between <strong>18% to 25%</strong> between various industrial sectors. However, this figure is suspect as most of the micro industries are not included in the survey where the resource number is less than 25. Even if we take the figure in the public domain as true it means that the team changes completely in four years. With hardly any training or workshops being conducted by MSMEs to keep their manpower current and updated one can imagine the strength and robustness of teams sustaining the business functions. The result is the extreme dependence of entire organizations on a few individuals. In any event if these key personnel leave, the operations of these organizations get severely affected with serious consequences.
              </p>
              <p>
                In this scenario if we factor in a risk of a wrong hire one can imagine the resultant chaos and catastrophe. Hence the criticality of selecting the right resource for any and each function is a business necessity and must be accorded top priority. In the same vein since the entire MSME class is resource stretched the removal of an unproductive resource also assumes the same priority so that a vacancy for a good fresh resource can be initiated and filled at the earliest.
              </p>
            </section>

            {/* SECTION 2: TERMS OF REFERENCE */}
            <section id="terms-of-reference" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Terms of Reference
              </h2>
              <p>
                This approach paper is limited to activities that are undertaken after the initial screening and short listing of the candidates by the HR department. For reference it is assumed that while processing the requirement request for a new hiring, the job description, qualification, and experience by the head of the indenting section/division and the approximate time frame for the hiring to be completed and its due approval by competent authority has been obtained as per existing SOP of the establishment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0C1D4A]">Applicability</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Applicable to junior and middle management with experience ranging from <strong>4 to 15 years</strong>.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0C1D4A]">Pre-requisite State</span>
                  <p className="text-xs sm:text-sm text-slate-600">
                    The HR department at this juncture has resumes of shortlisted candidates and a budgetary approval of the compensation/salary.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic">
                *Note: Other functions are listed for comprehensiveness but annotated as <strong>Not in Scope</strong>. The process that is being discussed is the selection of the resource from the list of shortlisted candidates.
              </p>
            </section>

            {/* SECTION 3: STAGE 1 - REMOTE / TELEPHONIC */}
            <section id="stage-1-telephonic" className="space-y-4 pt-4 border-t border-slate-200">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                <PhoneCall className="w-4 h-4" />
                <span>Selection Stage 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Remote: Telephonic Interaction
              </h2>
              
              <p>
                The initial interaction is always remote unless a walk-in interview has been advertised or a candidate through reference has been asked to meet the HR department in person.
              </p>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                  HR Representative Focus Areas
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  At this stage a small brief regarding the recruiting company is provided. The HR focus is strictly on the following:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                  <li>Confirmation on availability for hire.</li>
                  <li>Time frame for joining, if selected.</li>
                  <li>Expected salary / compensation.</li>
                  <li>Notice period of current employment, bond etc.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  On positive match of the above to the job requirement the candidate is asked for a suitable time/date for telephonic audio/video interaction with the Indenting/Technical head.
                </p>
              </div>

              {/* Mistakes, Consequence, Remedy Block */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                    <XCircle className="w-4 h-4" />
                    <span>Common Mistakes at This Stage</span>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>The entire interaction is kept informal. The questions asked by HR department are adhoc and arbitrary based on experience/discretion of the HR resource conducting the interview.</li>
                    <li>No questionnaire for the interview is prepared by HR before the interaction.</li>
                    <li>No records of the interview are maintained.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-[#D98A10]" />
                    <span>Consequences</span>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>No record is available for supervisor (HR/Leadership) to evaluate whether the recommendation of the HR resource on whether to process the case further or not is correct or otherwise. It has been observed that an HR resource may be inimical to a candidate and may reject him at this stage for reasons other than professional.</li>
                    <li>No standardization — different candidates may be asked different questions and evaluated on an uneven playing field.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Remedy &amp; Standardized Protocol</span>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li><strong>Standard Pre-approved Questionnaire:</strong> Must be provided to the HR resource. The same should be filled based on answers received during the interview, endorsed by the interviewer with his/her recommendations, and maintained on record for all candidates.</li>
                    <li><strong>Recorded Audio:</strong> The interviewer should be asked to record the interview (with a standard disclaimer provided before commencement that recording is for training purposes). This verifies that the recorded data is true, offers an insight into the interviewer’s capability, and serves as an invaluable training aid.</li>
                  </ul>
                </div>
              </div>

              <div className="text-xs text-slate-400 italic">
                * Indenting Department Head interaction: Not in Scope.
              </div>
            </section>

            {/* SECTION 4: STAGE 2 - ONSITE INTERVIEW */}
            <section id="stage-2-onsite" className="space-y-4 pt-4 border-t border-slate-200">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                <Building2 className="w-4 h-4" />
                <span>Selection Stage 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Onsite: HR Representative Interview &amp; Evaluation
              </h2>

              <p className="text-xs text-slate-400 italic">
                * Written test: Not in Scope.
              </p>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                <h4 className="font-bold text-[#0C1D4A] text-sm sm:text-base">
                  HR Representative Scope &amp; Focus
                </h4>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li><strong>Company Briefing:</strong> Corporate profile including culture and environment details, incentives, facilities offered, and terms of engagement.</li>
                  <li><strong>Profile Mapping:</strong> Matching the job profile (education, qualification, experience) with resume and additional competencies that complement organizational requirements.</li>
                  <li><strong>Reasons for Leaving Current Employment.</strong></li>
                  <li><strong>Relocation &amp; Working Policy:</strong> Remote/Onsite requirements as applicable.</li>
                  <li><strong>Family details and residential address.</strong></li>
                  <li><strong>Verification:</strong> Confirmation of all information provided during telephonic interview matched against documented data.</li>
                  <li><strong>Recruitment Form:</strong> Ensuring the comprehensive candidate form is completely filled and endorsed with recommendations/comments of all stakeholders in the recruitment chain.</li>
                </ul>
              </div>

              {/* 4 Critical Mistakes in Onsite Screening */}
              <div className="space-y-3 pt-2">
                <h3 className="font-serif font-bold text-base text-[#0C1D4A]">
                  Four Common Mistakes at This Stage
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700">1. Not Ascertaining Health Condition</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Failure to enquire if the candidate has undergone major surgery in the past 2 years, suffers from chronic diseases (diabetes, hypertension, asthma/bronchitis), has had serious accidents, is under ongoing medication, or when the latest checkup was done.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700">2. Overlooking Current Liabilities</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Not ascertaining the health condition of parents/siblings and dependent support (financial, treatment, logistical) or ongoing litigation that could disrupt focus.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700">3. Blindness to Counter-Offer Leverage</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Many candidates apply with no intention of joining, purely seeking an offer letter to negotiate a pay hike or promotion with their current employer.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700">4. Ignoring Value Systems &amp; Maturity</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Neglecting cultural adaptability, communication flexibility, family background, and social maturity required for long-term organizational fit.
                    </p>
                  </div>
                </div>

                {/* Consequences */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-mono">
                    Consequences &amp; Statistical Reality
                  </span>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li>Unfit or chronic health-compromised hires cannot commit full potential, creating regular absenteeism and disruption.</li>
                    <li>Overwhelming personal liabilities result in ongoing financial stress that impedes optimal professional performance (a red flag).</li>
                    <li><strong>Statistical Loss:</strong> Nearly <strong>25% of total candidates</strong> and more than <strong>50% of top candidates</strong> apply solely to leverage offer letters, wasting substantial organizational time and hiring budgets.</li>
                    <li>A socially maladjusted hire is a toxic liability: even if technically sound, negative behavioral impact on shop-floor morale far offsets individual skill.</li>
                  </ul>
                </div>

                {/* Remedies */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                    Recommended Safeguards &amp; Remedies
                  </span>
                  <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                    <li><strong>3 References Mandatory:</strong> Require at least three professional references and speak to them directly.</li>
                    <li><strong>Social Media Due Diligence:</strong> Review public profiles to gauge personality traits, personal dispositions, and behavioral red flags.</li>
                    <li><strong>Safeguard Offer Letters:</strong> In the initial offer letter, avoid detailing full compensation breakdowns. <em>Do not issue the formal appointment letter until documentary proof of resignation from their current employer is submitted.</em></li>
                    <li><strong>Probationary Flexibility:</strong> Explicitly mandate a minimum 3-month probation period with unilateral termination clauses.</li>
                    <li><strong>Multiple Offers:</strong> Always extend more than one offer and secure acceptance to maintain fallback options.</li>
                    <li><strong>Minimize Joining Time:</strong> Resist lengthy notice periods; where critical, consider buying out the candidate’s notice period to minimize poaching risk.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 5: STAGE 3 - DOCUMENT VERIFICATION */}
            <section id="stage-3-verification" className="space-y-4 pt-4 border-t border-slate-200">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D98A10]">
                <FileCheck className="w-4 h-4" />
                <span>Selection Stage 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Document Verification &amp; Credential Authentication
              </h2>

              <p>
                The authenticity of educational qualifications and certifications is paramount given the high incidence of fabricated credentials in the market. While third-party background screening agencies exist, <strong>it is recommended that this verification remain strictly under the direct purview of the internal HR department.</strong>
              </p>

              {/* Common Verification Mistakes */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Common Mistakes Made by HR at This Stage
                </span>
                <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                  <li>Xerox copies offered with resumes are taken at face value without physical examination of original certificates.</li>
                  <li>Mark sheets are not tallied for numerical correctness and cumulative percentages.</li>
                  <li>Faded, low-resolution photocopies with unreadable sections are casually accepted.</li>
                  <li>Passing year is not correlated against age and chronological employment gaps.</li>
                </ul>
              </div>

              {/* Triple Threat Impact Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="text-xs font-bold uppercase text-rose-800 font-mono">1. Organizational Risks</span>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    <li>Fraudulent hires lacking core competency.</li>
                    <li>Legal liability and lawsuits for negligence.</li>
                    <li>Compliance breaches in regulated sectors (finance, defence, healthcare).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="text-xs font-bold uppercase text-rose-800 font-mono">2. Financial Losses</span>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    <li>Wasted onboarding, salary, and training expenditure.</li>
                    <li>Productivity bottlenecks and low output.</li>
                    <li>Vulnerability to workplace theft, data leaks, or financial fraud.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="text-xs font-bold uppercase text-rose-800 font-mono">3. Workforce Fallout</span>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    <li>Erosion of team morale among genuine high performers.</li>
                    <li>Skilled employee attrition due to perceived unfairness.</li>
                    <li>Reputational damage in the local recruitment market.</li>
                  </ul>
                </div>
              </div>

              {/* Practical Authentication Remedies */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                  Practical Authentication Checks
                </span>
                <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-700">
                  <li><strong>Visual Cross-Check:</strong> Compare the institutional logo, official naming, layout, background security patterns, and font placement against verified public domain records.</li>
                  <li><strong>Signatory Cross-Verification:</strong> Verify whether the named signatory was holding office at that institution during the candidate’s stated graduation window.</li>
                  <li><strong>Batchmate Reference Calls:</strong> Request names of 2–3 college batchmates and telephonically verify attendance and graduation credentials.</li>
                  <li><strong>Expert Technical Panel:</strong> The single most reliable safeguard is conducting rigorous written evaluations and practical interviews led by seasoned technical experts. Verified live competency always supersedes paper documentation.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 6: BEST PRACTICES CHECKLIST */}
            <section id="best-practices-checklist" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                MSME Recruitment Best Practices Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Eight foundational protocols to safeguard your MSME from costly recruitment failures:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Standardized Interview Protocols
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Prepare pre-approved questionnaires, record telephonic interviews, and maintain structured evaluation notes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Health &amp; Liability Screening
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ask about medical history, family responsibilities, and financial/legal liabilities to assess long-term stability.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Candidate Intent Verification
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Identify applicants using offers for leverage; minimize joining time and enforce probation periods.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Cultural &amp; Value Fit Assessment
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Evaluate communication skills, adaptability, and social maturity alongside technical competence.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    5
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Reference &amp; Background Checks
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Collect at least three references, verify via direct calls, and review social media presence for red flags.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    6
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Document Authentication
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Examine originals, check institutional logos, fonts, and authorized signatories; avoid reliance on faded xerox copies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    7
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Expert Panel Evaluation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conduct rigorous written tests and interviews by subject experts to validate actual capability beyond paper credentials.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    8
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[#0C1D4A] text-xs uppercase tracking-wider">
                      Probationary Safeguards
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clearly define probation terms (minimum 3 months) with unilateral termination clauses for maximum organizational flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: CONCLUSION */}
            <section id="conclusion" className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1D4A]">
                Conclusion
              </h2>
              <p>
                For MSMEs, the objective should be to <strong>hire right the first time</strong>, verify before appointment and continuously assess capability during employment. Standard questionnaires, documented interviews, reference checks, verification of credentials and competency-based assessment can significantly reduce recruitment risk.
              </p>
              <p>
                Ultimately, people are the most critical operating asset of an MSME. A disciplined approach to selecting, developing, retaining and, when necessary, replacing employees is therefore essential for building a resilient organization capable of sustaining growth. <strong>The investment in a robust recruitment process is small compared with the cost of a wrong hire.</strong>
              </p>
            </section>

          </div>

          {/* Business Clinic Callout Box */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#0C1D4A] text-white flex items-center justify-center font-serif text-xl font-bold shrink-0">
              BC
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0C1D4A]">
                  Business Clinic Talent Advisory
                </h3>
                <p className="text-xs text-[#D98A10] font-bold uppercase tracking-wider">
                  HR Audits &amp; Organizational Restructuring for MSMEs
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                We assist MSME leadership in establishing structured recruitment matrices, conducting independent third-party candidate technical audits, and building robust onboarding and retention frameworks.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0C1D4A] hover:text-[#D98A10] transition-colors"
                >
                  <span>Request an HR &amp; Workforce Process Audit</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 print:hidden">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-1.5 font-semibold text-slate-600 hover:text-[#0C1D4A]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all Insights</span>
            </Link>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-[#0C1D4A] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Complete Paper</span>
            </button>
          </div>

        </article>
      </div>
    </div>
  );
}
