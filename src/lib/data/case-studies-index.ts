/**
 * Lightweight case study metadata for nav/card UI (Header, CaseStudiesGrid).
 *
 * Deliberately excludes `details` (the full case study body — executive
 * summary, background, deliverables, etc.) so client components that only
 * need to render a title/summary/card don't ship every case study's full
 * text to the browser.
 *
 * Full case study bodies live in `caseStudies.ts` and are only imported by
 * the server-rendered `/case-studies/[slug]` detail pages.
 *
 * Keep this list in sync with `caseStudies.ts` (same slugs, same order).
 */
export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  summary: string;
  category: string;
}

export const caseStudiesIndexData: CaseStudyMeta[] = [
  {
    slug: "indigenous-ew-system",
    title: "India’s Indigenous Electronic Warfare Revolution",
    subtitle: "(Integrated Electronic Warfare Project)",
    client: "Indian Army & DRDO",
    summary: "Genesis, design philosophy, operational challenges, and institutional lessons from India’s landmark Integrated Electronic Warfare Project — laying the foundation for Make in India and Atma Nirbhar Bharat.",
    category: "Defence & Aerospace",
  },
  {
    slug: "harbour-surveillance-system",
    title: "Integrated Underwater Harbour Defence and Surveillance System",
    subtitle: "(IUHDSS)",
    client: "Indian Navy",
    summary: "Installation and commissioning of multi-sensor harbour defence across 4 Indian ports — integrating radars, sonars, electro-optical sensors, and C2 systems against asymmetric threats post-26/11.",
    category: "Defence & Aerospace",
  },
  {
    slug: "ge-collaboration-pdu",
    title: "Super Value CT Scan Power Distribution Unit",
    subtitle: "(SVCT 8 / Wipro GE Healthcare)",
    client: "Wipro GE Healthcare",
    summary: "Production partner qualification and manufacturing execution for the Super Value CT PDU (SVCT 8) — helping Wipro GE Healthcare capture 80% market share in India.",
    category: "Electronics & Industrial",
  },
];
