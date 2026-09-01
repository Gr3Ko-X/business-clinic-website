export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string; // Used to map to Lucide icons
  description: string;
  bulletPoints: string[];
  detailedServices?: ServiceItem[];
  path: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "business-consulting",
    title: "Business & Industrial Consulting",
    tagline: "Diagnose • Validate • Execute • Scale",
    iconName: "Globe",
    description: "Strategic and operational consulting, including custom market entry advisory, plant floor troubleshooting, and legal/statutory alignment.",
    bulletPoints: [
      "India Entry Support for Foreign Industry",
      "Indian MSME Troubleshooting",
      "Operational Consulting",
      "Manufacturing Advisory",
      "Industrial Setup Support",
      "Legal, Company Secretary & CA Services"
    ],
    detailedServices: [
      { name: "India Entry Support for Foreign Industry", description: "Market assessment, entry strategy, regulatory validation, and landing coordination." },
      { name: "Indian MSME Troubleshooting", description: "Identifying plant bottleneck points, yield failures, and shop-floor delays." },
      { name: "Operational Consulting", description: "Restructuring process flows, optimizing line configurations, and resolving capacity issues." },
      { name: "Manufacturing Advisory", description: "Strategic counsel on technology absorption, equipment validation, and scaling capacity." },
      { name: "Industrial Setup Support", description: "Land selection assistance, structural readiness audits, and plant launch oversight." },
      { name: "Legal, Company Secretary & CA Services", description: "Incorporation, statutory filing, legal agreements, and corporate tax compliance." }
    ],
    path: "/services#business-consulting"
  },
  {
    id: "documentation-services",
    title: "Industrial Documentation & Technical Knowledge Services",
    tagline: "Standardize • Transfer • Secure • Governance",
    iconName: "FileText",
    description: "Developing robust techno-commercial documentation, operational SOP guidelines, and facilitating joint technology transfer files.",
    bulletPoints: [
      "India Vendor Validation Services",
      "Techno-Commercial Documentation",
      "Technology Transfer (ToT) Documentation",
      "SOP & Process Documentation",
      "Governance Documentation",
      "Industrial Knowledge Management"
    ],
    detailedServices: [
      { name: "India Vendor Validation Services", description: "Technical capability assessment profiles, quality readiness files, and credentials verification." },
      { name: "Techno-Commercial Documentation", description: "Tender bids preparation, technical proposals, commercial models, and project charter plans." },
      { name: "Technology Transfer (ToT) Documentation", description: "Documentation and compliance coordination for importing overseas industrial engineering specifications." },
      { name: "SOP & Process Documentation", description: "Drafting shop-floor Standard Operating Procedures, work instructions, and equipment steps manuals." },
      { name: "Governance Documentation", description: "Plant Standing Orders, safety codes, statutory documentation, and environmental safety manuals." },
      { name: "Industrial Knowledge Management", description: "Creating and preserving corporate technical manuals, training logs, and process wisdom files." }
    ],
    path: "/services#documentation-services"
  },
  {
    id: "assurance-services",
    title: "Industrial Assurance & Validation Services",
    tagline: "Verify • Audits • Compliance • Integrity",
    iconName: "ShieldCheck",
    description: "Rigorous quality surveillance, vendor audits, and validation testing for mission-critical manufacturing and engineering.",
    bulletPoints: [
      "Quality Surveillance",
      "Vendor Reliability",
      "Compliance",
      "Production Validation: FAT, FAI, ATP, PDI",
      "Inspection Integrity: Vendor Audit & Process Audit"
    ],
    detailedServices: [
      { name: "Quality Surveillance", description: "Continuous on-ground surveillance of component assembly lines to ensure zero-defect output." },
      { name: "Vendor Reliability", description: "Analyzing supply chain dependencies, financial risks, capacity claims, and quality records." },
      { name: "Compliance", description: "Verifying systems conform strictly to military specifications, global standards, and licensing laws." },
      { name: "Production Validation: FAT, FAI, ATP, PDI", description: "Independent Factory Acceptance Testing, First Article Inspection, Acceptance Test Procedures, and Pre-Dispatch Inspection." },
      { name: "Inspection Integrity: Vendor Audit & Process Audit", description: "Independent manufacturing reviews, process audits, and strict compliance certification validation." }
    ],
    path: "/services#assurance-services"
  }
];
