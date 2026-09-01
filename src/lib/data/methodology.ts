export interface MethodologyStep {
  stepNumber: string;
  name: string;
  subTitle: string;
  description: string;
  iconName: string;
}

export interface MethodologyFramework {
  id: string;
  title: string;
  subtitle: string;
  steps: MethodologyStep[];
}

export const methodologiesData: MethodologyFramework[] = [
  {
    id: "global-oem",
    title: "GLOBAL ENTERPRISES: 4E METHODOLOGY",
    subtitle: "Structured roadmap for entering, establishing, operating, and scaling in India.",
    steps: [
      {
        stepNumber: "01",
        name: "ENTER",
        subTitle: "Assess & Validate",
        description: "Identify opportunities, understand the market, and evaluate India-entry feasibility.",
        iconName: "SearchCode"
      },
      {
        stepNumber: "02",
        name: "ESTABLISH",
        subTitle: "Build the Foundation",
        description: "Set up the required organisation, infrastructure, resources, and local partnerships.",
        iconName: "Building2"
      },
      {
        stepNumber: "03",
        name: "ENABLE",
        subTitle: "Become Operational",
        description: "Navigate licensing, approvals, compliance, and stakeholder liaison to enable operations.",
        iconName: "FileCheck2"
      },
      {
        stepNumber: "04",
        name: "EXPAND",
        subTitle: "Scale & Grow",
        description: "Build revenue, strengthen the order pipeline, improve profitability, and scale sustainably.",
        iconName: "TrendingUp"
      }
    ]
  },
  {
    id: "indian-msme",
    title: "INDIAN INDUSTRIES: 5D METHODOLOGY",
    subtitle: "From diagnostics to execution, we drive operational efficiency and sustainable scale.",
    steps: [
      {
        stepNumber: "01",
        name: "DISCOVER",
        subTitle: "Understand the Challenge",
        description: "Listen, investigate, and identify the core business problems and symptoms.",
        iconName: "Compass"
      },
      {
        stepNumber: "02",
        name: "DIAGNOSE",
        subTitle: "Find the Root Cause",
        description: "Perform operational, organisational, and compliance audits to pinpoint gaps.",
        iconName: "ShieldAlert"
      },
      {
        stepNumber: "03",
        name: "DESIGN",
        subTitle: "Develop the Solution",
        description: "Create practical, commercially viable, and execution-friendly blueprints.",
        iconName: "Lightbulb"
      },
      {
        stepNumber: "04",
        name: "DEPLOY",
        subTitle: "Execute & Implement",
        description: "Support actual shop-floor implementation and provide handholding to drive results.",
        iconName: "GitMerge"
      },
      {
        stepNumber: "05",
        name: "SUSTAIN",
        subTitle: "Monitor & Improve",
        description: "Track outcomes, resolve emerging issues, and continuously optimise performance/OEE.",
        iconName: "CheckCircle2"
      }
    ]
  }
];
