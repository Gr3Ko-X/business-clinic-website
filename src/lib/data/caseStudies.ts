export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  summary: string;
  category: string;
  details: {
    overview: string;
    keyDeliverables: string[];
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "indigenous-ew-system",
    title: "Indigenous Electronic Warfare (EW) System",
    client: "Indian Army",
    summary: "Coordination and execution support for the Samyukta Integrated Electronic Warfare Project, establishing critical military hardware systems.",
    category: "Defence & Aerospace",
    details: {
      overview: "Support for the SAMYUKTA Integrated Electronic Warfare program of the Indian Army. This involved complex industrial coordination and execution for specialized tactical defence systems.",
      keyDeliverables: [
        "Liaison and program support for tactical electronics integration",
        "Assurance of compliance with military-grade ruggedization standards",
        "Local vendor coordination for subsystem fabrication"
      ]
    }
  },
  {
    slug: "harbour-surveillance-system",
    title: "Integrated Harbour Defence & Surveillance System",
    client: "Indian Navy",
    summary: "Implementation support for the underwater and surface harbour surveillance systems to safeguard key maritime infrastructure.",
    category: "Defence & Aerospace",
    details: {
      overview: "Execution and deployment support for the Integrated Underwater Harbour Surveillance System. This project enhanced maritime security and surveillance infrastructure for sensitive navy ports.",
      keyDeliverables: [
        "On-ground logistics and installation coordination of underwater sensors",
        "Facilitating local technical support and alignment with naval specifications",
        "Systems validation and maintenance support framework setup"
      ]
    }
  },
  {
    slug: "ge-collaboration-pdu",
    title: "GE Collaboration – Power Distribution Units",
    client: "GE (Healthcare Systems)",
    summary: "Industrial execution and manufacturing setup for high-reliability Power Distribution Units used in advanced CT Scan systems.",
    category: "Electronics & Industrial",
    details: {
      overview: "Setting up dedicated manufacturing lines and ensuring rigorous quality compliance for Power Distribution Units (PDUs) supplying power to GE CT scan medical systems.",
      keyDeliverables: [
        "Industrial assembly line planning and documentation",
        "Quality surveillance conforming to global ISO standards",
        "Ensuring 100% test compliance and First Article Inspection (FAI)"
      ]
    }
  }
];
