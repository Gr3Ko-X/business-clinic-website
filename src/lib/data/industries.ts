export interface IndustryBullet {
  text: string;
}

export interface IndustryCategory {
  id: string;
  number: string;
  name: string;
  iconName: string; // Used to map to Lucide icons
  bullets: string[];
  path: string;
}

export const industriesData: IndustryCategory[] = [
  {
    id: "defence-aerospace",
    number: "01",
    name: "Defence & Aerospace",
    iconName: "Plane",
    bullets: [
      "EW systems & electronic warfare solutions",
      "Harbour surveillance & security systems",
      "Defence industrial licensing & compliance",
      "Offset facilitation & military-grade standards"
    ],
    path: "/industries#defence-aerospace"
  },
  {
    id: "electronics-semiconductors",
    number: "02",
    name: "Electronics & Semiconductors",
    iconName: "Cpu",
    bullets: [
      "Cleanroom setups & precision environments",
      "SMT lines & advanced assembly solutions",
      "Component localization & value addition",
      "Testing automation & supply chain security"
    ],
    path: "/industries#electronics-semiconductors"
  },
  {
    id: "power-renewable-energy",
    number: "03",
    name: "Power & Renewable Energy",
    iconName: "Zap",
    bullets: [
      "Power Distribution Units (PDUs) & systems",
      "Cable deployment & EPC execution",
      "Grid infrastructure & substation solutions",
      "Green manufacturing & energy transition"
    ],
    path: "/industries#power-renewable-energy"
  },
  {
    id: "industrial-manufacturing",
    number: "04",
    name: "Industrial Manufacturing",
    iconName: "Settings",
    bullets: [
      "Plant layout optimization & engineering",
      "Lean manufacturing & waste reduction",
      "OEE improvement & process excellence",
      "Assembly line automation & SOP frameworks"
    ],
    path: "/industries#industrial-manufacturing"
  },
  {
    id: "telecommunications-ofc",
    number: "05",
    name: "Telecommunications & OFC",
    iconName: "Rss",
    bullets: [
      "OFC & power cable deployment",
      "RF equipment imports & integration",
      "WPC licensing & regulatory facilitation",
      "Network hardware manufacturing support"
    ],
    path: "/industries#telecommunications-ofc"
  },
  {
    id: "power-high-tech",
    number: "06",
    name: "Power & High Technology",
    iconName: "Activity",
    bullets: [
      "PDU manufacturing & power grids integration",
      "ISO 17025 compliance & calibration systems",
      "Global OEM technology transfer (ToT) support",
      "Precision engineering & high-reliability systems"
    ],
    path: "/industries#power-high-tech"
  }
];
