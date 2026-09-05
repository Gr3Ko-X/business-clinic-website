import React from "react";
import { 
  Building2, 
  Printer, 
  GitCommit, 
  Wrench, 
  AlertCircle, 
  Workflow,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function SolutionsWeOffer() {
  const solutions = [
    {
      title: "Make In India",
      desc: "Comprehensive guidance for setting up manufacturing in India, securing industrial licenses, mapping local supply chains, and establishing regulatory compliance.",
      icon: Building2,
      path: "/services/india-entry-support-foreign-industry"
    },
    {
      title: "Build to Print",
      desc: "Translating overseas technical files, drawings, and specs into executable process sheets and local material validation plans for on-ground production.",
      icon: Printer,
      path: "/services/documentation-technical-knowledge"
    },
    {
      title: "Interconnect (Cable/Harness/OFC)",
      desc: "Specialized process planning, tooling configuration, routing design, validation and testing templates for high-reliability industrial and defence interconnect systems.",
      icon: GitCommit,
      path: "/services/documentation-technical-knowledge"
    },
    {
      title: "Repair & Maintenance",
      desc: "Designing Standard Operating Procedures (SOPs), maintenance schedules, yield metrics and troubleshooting workflows for machinery and electronics MRO.",
      icon: Wrench,
      path: "/services/business-industrial-consulting"
    },
    {
      title: "Rejection Troubleshoot",
      desc: "Diagnosing shop-floor quality spikes, implementing FAI/FAT protocols, identifying process drift, and restructuring workflows to eliminate scrap and product rejections.",
      icon: AlertCircle,
      path: "/services/indian-msme-troubleshooting"
    },
    {
      title: "Process Restructuring",
      desc: "Streamlining operations, standardizing floor layouts, auditing key suppliers, and scaling organizational capabilities via execution-oriented frameworks.",
      icon: Workflow,
      path: "/services/business-industrial-consulting"
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100" id="solutions-offered">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#D98A10] uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Solutions We Offer
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto pt-2 leading-relaxed">
            Hands-on technical advisory and process configuration to optimize manufacturing output, validate quality, and scale capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div 
                key={sol.title} 
                className="bg-white border border-slate-200/60 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all hover:border-slate-300 group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-cream text-accent rounded-xl w-12 h-12 flex items-center justify-center border border-amber-100 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href={sol.path}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D98A10] uppercase tracking-wider hover:text-accent transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
