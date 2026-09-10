/**
 * Lightweight insights metadata for nav/card UI (Header, InsightsGrid, etc.).
 *
 * Deliberately excludes `contentMarkdown` (the full article body, ~90KB
 * across all articles) so client components that only need to render a
 * title/summary/card don't ship every article's full text to the browser.
 *
 * Full article bodies live in `insights.ts` and are only imported by the
 * server-rendered `/insights/[slug]` detail pages.
 *
 * Keep this list in sync with `insights.ts` (same slugs, same order —
 * mirrors the INSIGHTS_ORDER curation in that file).
 */
export interface InsightArticleMeta {
  slug: string;
  title: string;
  summary: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
}

export const insightsIndexData: InsightArticleMeta[] = [
  {
    slug: "bts-2026-strategy-guide",
    title: "How to Make the Most of BTS 2026",
    summary: "Smarter business development strategies for Bengaluru Tech Summit 2026 - maximizing qualified conversations and outcomes.",
    publishDate: "August 2026",
    readTime: "10 min read",
    category: "Corporate Strategy",
  },
  {
    slug: "from-advice-to-delivery",
    title: "The India Business Clinic Model",
    summary: "A practical framework for helping global companies understand, establish and scale in India—bridging the gap between advisory and on-ground execution.",
    publishDate: "September 2026",
    readTime: "7 min read",
    category: "India Entry",
  },
  {
    slug: "india-market-entry-handbook",
    title: "India Market Entry Handbook for Global Companies",
    summary: "A practical, execution-oriented roadmap for global companies establishing business and manufacturing footprints in India.",
    publishDate: "August 2026",
    readTime: "15 min read",
    category: "India Entry",
  },
  {
    slug: "india-entry-challenges-global-companies",
    title: "India Entry Made Easy",
    summary: "A sequential & modular roadmap for foreign enterprises establishing a compliant, scalable, and sustainable business presence in India.",
    publishDate: "August 2026",
    readTime: "10 min read",
    category: "India Entry",
  },
  {
    slug: "great-msme-disconnect",
    title: "The Great MSME Disconnect",
    summary: "Exploring the operational gaps between executive-level planning and shop-floor manufacturing execution in Indian MSMEs.",
    publishDate: "August 2026",
    readTime: "6 min read",
    category: "MSME Growth",
  },
  {
    slug: "why-msmes-fail-to-deliver",
    title: "Why MSMEs Fail to Deliver",
    summary: "An analytical review of capacity bottlenecks, quality leakage, and supply chain friction that hinder delivery performance in Indian manufacturing MSMEs.",
    publishDate: "July 2026",
    readTime: "10 min read",
    category: "MSME Growth",
  },
  {
    slug: "hr-gaps-msme-recruitment",
    title: "HR Gaps in MSME Recruitment & Best Practices",
    summary: "An operational analysis of recruitment vulnerabilities, vetting risks, and retention remedies in Indian MSMEs.",
    publishDate: "August 2026",
    readTime: "12 min read",
    category: "MSME Growth",
  },
  {
    slug: "manufacturing-msmes-at-a-crossroads",
    title: "Manufacturing MSMEs at a Crossroads",
    summary: "Why delaying digital transformation could become a competitive risk — and a practical phased roadmap for MSME manufacturers to digitise, automate and stay competitive.",
    publishDate: "September 2026",
    readTime: "12 min read",
    category: "MSME Growth",
  },
  {
    slug: "defence-industrial-wpc-licensing",
    title: "Licensing & Regulatory Support: Defence & RF Manufacturing",
    summary: "A comprehensive capability note on securing Defence Industrial Licenses (DIL), WPC wireless approvals, SACFA site clearances, and radar antenna manufacturing in the 3 GHz and 10 GHz bands in India.",
    publishDate: "September 2026",
    readTime: "8 min read",
    category: "Defence & Aerospace",
  },
];
