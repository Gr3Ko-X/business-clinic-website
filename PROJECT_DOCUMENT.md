# Business Clinic — Complete Project Document

**Generated:** 1 September 2026  
**Repository:** `/Users/greko/Downloads/Business-Clinic`  
**Product:** Marketing and advisory website for Business Clinic (a division/brand of Spuntech Solutions Pvt Ltd)

---

## 1. Executive summary

Business Clinic is a **static-content marketing site** for an industrial advisory practice. It is built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. There is **no CMS, no database, and no authenticated backend**. Almost all copy lives in TypeScript data modules and page components.

The firm’s positioning:

- Help **global companies** enter, set up, and operate in India.
- Help **Indian MSMEs** diagnose shop-floor, quality, delivery, and compliance problems.
- Specialise in **defence/aerospace licensing**, **documentation / technology transfer**, and **industrial assurance** (audits, FAT/FAI/ATP/PDI).
- Led by **Col Sanjay Chandra (Retd)**; 35+ years of industrial and defence-adjacent experience.

Primary conversion actions: **Talk to an Expert / Schedule a Consultation** (`/contact`) and an interactive **MSME Health Check** questionnaire that emails results via **Web3Forms**.

---

## 2. Business identity

| Item | Value |
|------|--------|
| Brand | Business Clinic |
| Legal framing | Business division/brand of **Spuntech Solutions Pvt Ltd** |
| Founder | Col Sanjay Chandra (Retd) |
| Email | indiabusinessclinic@gmail.com |
| WhatsApp | +91 9560714343 (`wa.me/919560714343`) |
| LinkedIn | Col Sanjay Chandra (Retd) profile linked in footer |
| Locale / SEO | `en_IN`; keywords around India entry, defence licensing, vendor audit, factory setup |

Client change notes in `Changes.txt` (labelled “Omega Vercel”) drove much of the current IA: service taxonomy, “Why Business Clinic” credentials, capability spectrum, footer legal line, and clinic naming (India Entry, Indian MSME, Defence & Aerospace, Support).

---

## 3. Technology stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js **16.3.1** (App Router, `src/app`) |
| UI | React **19.2.8**, React DOM 19.2.8 |
| Language | TypeScript 5, `strict: true` |
| Styling | Tailwind CSS **4** (`@import "tailwindcss"`), PostCSS `@tailwindcss/postcss` |
| Fonts | Google fonts via `next/font`: **Lora** (serif headings), **Outfit** (body) |
| Icons | `lucide-react` |
| Lint | ESLint 9 + `eslint-config-next` 16.3.1 |
| Path alias | `@/*` → `./src/*` |
| Unused in UI | `mammoth` (Word), `pdf-parse` — likely leftover from ingesting client PDFs into `insights.ts` |

**Scripts:** `npm run dev` / `build` / `start` / `lint`. Package name is still `temp-app` (create-next-app default).

**Next.js notes:** This tree includes `AGENTS.md` / `CLAUDE.md` pointing agents at `node_modules/next/dist/docs/` because Next 16 APIs differ from older training data. Dynamic route `params` are typed as **`Promise<{ slug: string }>`** (async params).

---

## 4. Architecture

```
src/
  app/                 # Routes (pages + layout)
  components/
    layout/            # Header, Footer (site chrome)
    sections/          # Home page blocks (Hero, Pillars, etc.)
  lib/data/            # Typed content: services, industries, methodology, insights, case studies
```

**Pattern:** Server Components by default. Client Components (`"use client"`) only where needed: Header (scroll, mega menu, mobile drawer), Contact form, MSME Health Check, Expertise (interactive diagnostic UI).

**Data flow:** Pages import arrays from `src/lib/data/*.ts`. Insight and case-study detail pages use `generateStaticParams()` so slugs are known at build time. There is no fetch to a CMS.

**Redirects** (`next.config.ts`, permanent):

| Old | New |
|-----|-----|
| `/solutions/india-entry-clinic` | `/services/india-entry-support-foreign-industry` |
| `/solutions/indian-msme-clinic` | `/services/indian-msme-troubleshooting` |
| `/solutions/defence-aerospace-clinic` | `/services/defence-aerospace-clinic` |
| `/solutions/support-clinic` | `/services/legal-company-secretary-ca-services` |

---

## 5. Site map (routes)

### Global

- `/` — Home
- `/about` — Firm, founder, projects, capability spectrum
- `/contact` — Consultation form + email/WhatsApp
- `/methodology` — 4E (global OEMs) and 5D (Indian industry)
- `/industries` — Sector pages (hash IDs from data)
- `/services` — Three service pillars + links into dedicated pages
- `/insights` — Article index
- `/insights/[slug]` — Article body (markdown stored as a string; rendered as structured text)
- `/case-studies` — Index
- `/case-studies/[slug]` — Detail

### Service / clinic pages

| Path | Role |
|------|------|
| `/services/business-industrial-consulting` | Operational consulting, manufacturing advisory, industrial setup |
| `/services/india-entry-support-foreign-industry` | India Entry Clinic |
| `/services/indian-msme-troubleshooting` | MSME Clinic |
| `/services/indian-msme-troubleshooting/health-check` | Interactive scored questionnaire → Web3Forms email |
| `/services/legal-company-secretary-ca-services` | Support Clinic (legal / CS / CA) |
| `/services/documentation-technical-knowledge` | Documentation & ToT / SOPs / KM |
| `/services/industrial-assurance-validation` | Quality, vendor reliability, FAT/FAI/ATP/PDI, audits |
| `/services/defence-aerospace-clinic` | Defence & aerospace + licensing narrative |

Header mega-menu maps many sub-items onto a **smaller set of URLs** (several consulting/documentation/assurance items share one page).

**Not in main nav (but exist):** `/methodology`, `/industries`, `/case-studies` — linked from footer and home sections.

---

## 6. Home page composition

Order in `src/app/page.tsx`:

1. **Hero** — positioning, clinic CTAs, assessment-style UI (file is very large; older Hero implementation is commented at the top).
2. **Expertise** — “Industrial Expertise | Strategic Guidance | Seamless Growth” and related cards; includes diagnostic/save UI.
3. **Pillars** — three service categories from `servicesData`.
4. **MethodologyRoad** — 4E and 5D journeys.
5. **IndustryGrid** — “Industries We Transform”.
6. **SolutionsWeOffer** — Make in India, build-to-print, interconnect, repair, rejection troubleshooting, process restructuring (per `Changes.txt`).
7. **CaseStudiesGrid** — three featured studies.
8. **FounderSection** — Col Chandra quote.
9. **Testimonials** — two anonymised quotes hardcoded on the home page (not in data files).
10. **InsightsGrid** — featured articles.
11. **Why Business Clinic** — credentials list + consultation CTA.

Layout wraps all pages with fixed Header and Footer; `main` has top padding for the sticky header (`pt-[92px]` / `lg:pt-[112px]`).

---

## 7. Content model

### 7.1 Services (`src/lib/data/services.ts`)

Three categories:

1. **Business & Industrial Consulting** — Diagnose • Validate • Execute • Scale  
   India entry, MSME troubleshooting, operational consulting, manufacturing advisory, industrial setup, legal/CS/CA.
2. **Industrial Documentation & Technical Knowledge** — Standardize • Transfer • Secure • Governance  
   Vendor validation, techno-commercial docs, ToT, SOP, governance, knowledge management.
3. **Industrial Assurance & Validation** — Verify • Audits • Compliance • Integrity  
   Quality surveillance, vendor reliability, compliance, production validation, inspection integrity.

### 7.2 Methodologies (`src/lib/data/methodology.ts`)

**4E — Global enterprises:** Enter → Establish → Enable → Expand  

**5D — Indian industries:** Discover → Diagnose → Design → Deploy → Sustain  

### 7.3 Industries (`src/lib/data/industries.ts`)

1. Defence & Aerospace  
2. Electronics & Semiconductors  
3. Power & Renewable Energy  
4. Industrial Manufacturing  
5. Telecommunications & OFC  
6. Power & High Technology  

Home “who we serve” / transform cards also mention Global Companies, Indian Industry, Homeland Security, Software & Cyber Security (check `IndustryGrid` / Expertise vs this list — IA is slightly duplicated across components).

### 7.4 Case studies (`src/lib/data/caseStudies.ts`)

| Slug | Title | Client |
|------|--------|--------|
| `indigenous-ew-system` | Indigenous EW System | Indian Army (Samyukta) |
| `harbour-surveillance-system` | Harbour Defence & Surveillance | Indian Navy |
| `ge-collaboration-pdu` | GE PDUs for CT systems | GE Healthcare |

### 7.5 Insights (`src/lib/data/insights.ts`)

Long-form markdown strings (some articles are handbook-length):

| Slug | Title (approx.) |
|------|-----------------|
| `great-msme-disconnect` | The Great MSME Disconnect |
| `why-msmes-fail-to-deliver` | Why MSMEs Fail to Deliver |
| `india-entry-challenges-global-companies` | India entry challenges |
| `defence-industrial-wpc-licensing` | Defence & WPC licensing |
| `india-market-entry-handbook` | India Market Entry Handbook |
| `bts-2026-strategy-guide` | Bengaluru Tech Summit 2026 |
| `hr-gaps-msme-recruitment` | HR gaps in MSME recruitment |

**Nav mismatch:** Header Insights dropdown links “Why MSMEs Fail to Deliver” to `/insights/hr-gaps-msme-recruitment` instead of `/insights/why-msmes-fail-to-deliver`. “India Entry Challenges” points at the handbook slug, not `india-entry-challenges-global-companies`.

---

## 8. Interactive features

### Contact form (`/contact`)

Client-side only. Fields: name, email, organisation, phone, service interest, details. On submit it **`console.log`s the payload** and shows a success state. **It does not send email.** Real contact is mailto and WhatsApp.

### MSME Health Check (`/services/indian-msme-troubleshooting/health-check`)

Scored questionnaire by category (strategy, operations, vendors, etc.). Submit uses **Web3Forms** (`https://api.web3forms.com/submit`) with a **hardcoded access key** in the page source. Copy states results are emailed to Business Clinic and not stored elsewhere.

### Expertise section

Includes a diagnostic / “information saved” style flow on the home page (local UI state; not a full backend).

---

## 9. Design system

Defined in `src/app/globals.css` and `@theme`:

| Token | Role | Approx. hex |
|-------|------|-------------|
| `primary` | Navy (text, footer, headers) | `#0b2240` |
| `primary-dark` | Footer bar | `#0a1d37` |
| `accent` | Gold CTAs, highlights | `#c58f1a` |
| `accent-dark` | Hover | `#a37210` |
| `cream` | Soft backgrounds / active mobile nav | `#f7f4ed` |

Many inner pages still use **hardcoded** navy/gold (`#0C1D4A`, `#D98A10`) alongside tokens. Hero/service headers: gradient navy, gold left border, serif titles, Outfit body.

Logo in Header/Footer is **typographic** (serif “B” + “USINESS” / “Clinic”), not an image file — consistent with client note “no tagline” on the logo.

---

## 10. SEO and metadata

Root `layout.tsx` sets default title, description, keywords, Open Graph (`locale: en_IN`). Individual pages export `metadata` or `generateMetadata` (insights). There is no `sitemap.ts`, `robots.ts`, or structured data (JSON-LD) in the tree reviewed.

---

## 11. Gaps, risks, and technical debt

1. **Contact form is not wired** — leads can be lost unless users use email/WhatsApp.  
2. **Web3Forms API key in client JS** — anyone can submit or abuse the key; rotate and restrict if possible.  
3. **`package.json` name `temp-app`** — leftover scaffold.  
4. **`mammoth` / `pdf-parse`** unused in the app; client PDF/Word sources were deleted from git (`clientDocs/…` in status). Content now lives in TS.  
5. **Hero.tsx size** — large commented-out previous design increases noise.  
6. **Insight URL vs menu labels** — wrong/ambiguous slugs (see §7.5).  
7. **Defence clinic disclaimer** — licensing copy is general, not legal advice (already on page).  
8. **No tests** — no Playwright/Jest in `package.json`.  
9. **README** is still create-next-app boilerplate; this document is the real project description.  
10. **Testimonials** are generic (“Industrial Partner”) — not named clients.

---

## 12. How to run

```bash
cd /Users/greko/Downloads/Business-Clinic
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production: `npm run build` then `npm start`, or deploy to Vercel (typical for this stack). Environment variables are not required for the static site; Health Check depends on the Web3Forms key remaining valid.

---

## 13. Suggested next steps (product / engineering)

- Connect `/contact` to the same email pipeline as Health Check (or a server action / form service).  
- Move secrets to env vars; never commit API keys.  
- Fix Insights dropdown slugs; generate nav from `insightsData`.  
- Add `sitemap.ts` and per-page canonical URLs.  
- Slim Hero; delete dead commented code.  
- Rename npm package; document deploy in README.  
- Optional: CMS (Sanity, etc.) if non-developers will edit insights/handbooks.

---

## 14. File index (primary)

| Path | Purpose |
|------|---------|
| `src/app/layout.tsx` | Fonts, metadata, Header/Footer |
| `src/app/page.tsx` | Home |
| `src/app/globals.css` | Design tokens, marquee |
| `src/components/layout/Header.tsx` | Mega menu + mobile |
| `src/components/layout/Footer.tsx` | Clinics, links, contact |
| `src/lib/data/*.ts` | Canonical content |
| `next.config.ts` | Legacy `/solutions/*` redirects |
| `Changes.txt` | Client copy/IA brief |

---

*This document describes the codebase as analysed on 1 September 2026. Uncommitted local edits may differ from any remote default branch.*
