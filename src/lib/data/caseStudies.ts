export interface CategorizedChallenge {
  category: string;
  challenge: string;
}

export interface KeyFeatures {
  title?: string;
  developer?: string;
  purpose?: string;
  components?: string[];
  capabilities?: string[];
}

export interface CaseStudyAuthor {
  name: string;
  title: string;
  role?: string;
  company?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  summary: string;
  category: string;
  details: {
    overview: string;
    keyDeliverables: string[];
    executiveSummary?: string[];
    background?: string[];
    association?: string[];
    associationPreamble?: string;
    associationPostscript?: string;
    designPhilosophy?: string[];
    designMethodology?: string[];
    keyFeatures?: KeyFeatures;
    categorizedChallenges?: CategorizedChallenge[];
    challenges?: string[];
    challengesTitle?: string;
    solutionsRemediesTitle?: string;
    remedies?: string[];
    lessonsLearnedTitle?: string;
    lessonsLearned?: string[];
    conclusion?: string[];
    acknowledgmentsTitle?: string;
    acknowledgments?: string[];
    author?: CaseStudyAuthor;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "indigenous-ew-system",
    title: "India’s Indigenous Electronic Warfare Revolution",
    subtitle: "(Integrated Electronic Warfare Project)",
    client: "Indian Army & DRDO",
    summary: "Genesis, design philosophy, operational challenges, and institutional lessons from India’s landmark Integrated Electronic Warfare Project — laying the foundation for Make in India and Atma Nirbhar Bharat.",
    category: "Defence & Aerospace",
    details: {
      overview: "Integrated Electronic Warfare Project, launched under the visionary leadership of Army and DRDO, marked a turning point in India’s defence technology evolution. Conceived to replace imported Electronic Warfare (EW) systems with indigenous solutions, it became the foundation for Make in India and Atma Nirbhar Bharat.",
      keyDeliverables: [
        "Drafting General Staff Qualitative Requirements (GSQRs) and Technical Specifications",
        "Collaborating with DRDO’s nodal design laboratory in Hyderabad during design phase",
        "Leading production and delivery as Project Director, overseeing acceptance by the Indian Army",
        "Architecting consortium-based supply chain integrating Indian and global vendors"
      ],
      executiveSummary: [
        "Integrated Electronic Warfare Project , launched under the visionary leadership of Army and DRDO, marked a turning point in India’s defence technology evolution. Conceived to replace imported Electronic Warfare (EW) systems with indigenous solutions, it became the foundation for Make in India and Atma Nirbhar Bharat.",
        "This case study outlines the project’s genesis, design philosophy, challenges, solutions, and lessons learned — offering insights into how collaborative innovation between the Indian Army, DRDO, and industry partners shaped India’s EW capabilities.",
        "The lessons learned during the development of this primal initiative towards indigenization of electronic warfare systems brought significant changes in Defence Acquisition Procedure from time to time. They also provided insight into changes that need to be incorporated into the flexibility that needs to be integrated in the rigid army structure if complex high tech programmes need to be developed to meet their operational requirements. It also highlighted that the DRDO had to fill gaps in their capability to carry out cutting edge design development to address the issue of sanctions and restrictions on sharing of technology by developed countries."
      ],
      background: [
        "In the early 1990s, India relied heavily on foreign suppliers for terrestrial EW systems. Recognizing the strategic vulnerability. Army and DRDO took the singular decision to develop an Integrated Electronic Warfare System indigenously.",
        "The program united the Indian Army, DRDO, and public-sector undertakings in a mission to design, manufacture, and deploy advanced Electronic Warfare (EW) systems tailored to India’s operational environments."
      ],
      associationPreamble: "Col XYZ contributed across multiple phases:",
      association: [
        "Drafting General Staff Qualitative Requirements (GSQRs) and Technical Specifications.",
        "Collaborating with DRDO’s nodal design laboratory in Hyderabad during the design phase.",
        "Leading production and delivery as Project Director, overseeing acceptance by the Indian Army."
      ],
      associationPostscript: "The project’s dedication to the nation underscored its strategic and technological significance.",
      designPhilosophy: [
        "Procurement of LRUs and subsystems off-the-shelf, followed by military-grade ruggedization.",
        "Electrical and mechanical integration with fully indigenous software development.",
        "A balance between global technology adoption and local innovation."
      ],
      designMethodology: [
        "Align state-of-the-art technologies with finalized specifications.",
        "Implement minimal modifications to maintain reliability.",
        "Streamline the Software Development Cycle to reduce the OODA loop.",
        "Build a consortium-based supply chain integrating Indian and foreign vendors.",
        "Ensure continuous user involvement for operational validation."
      ],
      categorizedChallenges: [
        { category: "Technology", challenge: "Rapid obsolescence vs. long design cycles" },
        { category: "Operational", challenge: "Dynamic battlefield and evolving threat perceptions" },
        { category: "Human Factors", challenge: "Frequent user rotations affecting continuity" },
        { category: "Economic", challenge: "Asymmetric price escalation during delays" },
        { category: "Institutional", challenge: "Misalignment between DGQA and development agencies" },
        { category: "Maintenance", challenge: "Complexity due to extended production timelines" },
        { category: "Quality", challenge: "Friction between the DGQA and developers (DA and PAs) causes misalignments, significantly extending development cycles." },
        { category: "Trials", challenge: "User trials before acceptance take a long time since they have to be conducted in all terrains viz high Altitude, Mountains, Plains, Jungles and Deserts and in extreme weather conditions viz summers and winters." }
      ],
      challenges: [
        "Technology: Rapid obsolescence vs. long design cycles.",
        "Operational: Dynamic battlefield and evolving threat perceptions.",
        "Human Factors: Frequent user rotations affecting continuity.",
        "Economic: Asymmetric price escalation during delays.",
        "Institutional: Misalignment between DGQA and development agencies.",
        "Maintenance: Complexity due to extended production timelines.",
        "Quality: Friction between the DGQA and developers (DA and PAs) causes misalignments, significantly extending development cycles.",
        "Trials: User trials before acceptance take a long time since they have to be conducted in all terrains viz high Altitude, Mountains, Plains, Jungles and Deserts and in extreme weather conditions viz summers and winters."
      ],
      solutionsRemediesTitle: "Solutions & Remedies",
      remedies: [
        "Extend tenures for user teams and re-induct experienced personnel.",
        "Freeze requirements post-design review; avoid mid-development changes.",
        "Address evolving threats through upgraded versions, not ongoing redesigns.",
        "Encourage outsourcing of specialized tasks beyond internal capacity.",
        "Phase user trials to align with delivery and payment schedules."
      ],
      lessonsLearnedTitle: "Lessons Learned",
      lessonsLearned: [
        "Laboratory and field results often diverge.",
        "Systems must be soldier-proof, not just demonstration-ready.",
        "GSQRs should reflect achievable capabilities, not aspirational wish lists.",
        "Technology absorption and product maturity require time.",
        "Quality assurance must supersede timelines and budgets.",
        "Risk analysis should be integrated throughout development, not treated as a formality."
      ],
      conclusion: [
        "Integrated Electronic Warfare Project stands as one of DRDO’s most ambitious undertakings. Beyond its technical outcomes, it fostered a shared understanding of Electronic Warfare as the future battlefield domain.",
        "Its legacy endures — enriching India’s scientific and industrial ecosystem and laying the groundwork for future indigenous defence systems.",
        "The project’s lessons continue to guide India’s journey toward technological sovereignty and operational excellence."
      ],
      acknowledgmentsTitle: "References & Acknowledgments",
      acknowledgments: [
        "Defence Research and Development Organisation (DRDO)",
        "Indian Army Signal Corps",
        "Directorate General of Quality Assurance (DGQA)",
        "Public Sector and Private Industry Partners"
      ],
      author: {
        name: "Col Sanjay Chandra (Retd)",
        title: "Founder, Business Clinic",
        role: "Former Director, PMO Suraj, Indian Army",
        company: "MSME Growth Strategist | Defence Manufacturing Expert"
      }
    }
  },
  {
    slug: "harbour-surveillance-system",
    title: "Integrated Underwater Harbour Defence and Surveillance System",
    subtitle: "(IUHDSS)",
    client: "Indian Navy",
    summary: "Installation and commissioning of multi-sensor harbour defence across 4 Indian ports — integrating radars, sonars, electro-optical sensors, and C2 systems against asymmetric threats post-26/11.",
    category: "Defence & Aerospace",
    details: {
      overview: "Post-26/11 Mumbai attacks, the Armed Forces were tasked with securing India’s 7,516 km coastline. The IUHDSS supplied by Elta Systems (subsidiary of IAI) is a multi-sensor security solution deployed by the Indian Navy to protect harbours and naval assets from underwater and surface threats. As Senior Vice President of the partnering Indian public limited company, Col Sanjay Chandra was in charge of the entire installation and commissioning program across 4 naval ports.",
      keyDeliverables: [
        "Installation & Commissioning across 4 different naval ports customized to harbour threat and topography",
        "Integration of coastal surveillance radars, diver-detection sonars, electro-optical sensors, and C2 centre",
        "Local sourcing and qualification of masts, towers (upto 30m), shelters, power systems, and OFC cables",
        "Multi-agency liaison across Naval HQs, local commanders, foreign OEMs, and on-ground contractors"
      ],
      background: [
        "Post-26/11 Mumbai attacks: The Armed Forces were tasked with securing India’s 7,516 km coastline. IUHDSS strengthens harbour security against infiltration attempts.",
        "The IUHDSS (Integrated Underwater Harbour Defence and Surveillance System) supplied by Elta Systems, a subsidiary of Israel Aerospace Industries (IAI), is a multi-sensor security solution deployed by the Indian Navy to protect harbours and naval assets from underwater and surface threats. It integrates radars, sonars, electro-optical sensors, and command-and-control systems to detect, track, and neutralize threats such as divers, swimmers, boats, and submersibles."
      ],
      association: [
        "M/s Elta, Israel had partnered with a public limited company in India for Installation and Commissioning of its system on 4 different ports in India. The systems were customised according to the threat and topography of the harbours.",
        "As the Senior Vice President of the Indian company I was in charge of the entire program."
      ],
      keyFeatures: {
        developer: "ABC Systems.",
        purpose: "Harbour defence and surveillance against asymmetric threats.",
        components: [
          "Coastal surveillance radars mounted on towers upto 30m.",
          "Diver-detection sonars and high-power underwater sensors.",
          "Electro-optical cameras and advanced sensors mounted on towers upto 30m.",
          "Integrated command-and-control system for real-time situational awareness.",
          "Power systems, shelters, OFC, Power and data cables.",
          "Acoustic sensor arrays.",
          "AIS and vessel tracking integration.",
          "Command & Control (C2) centre.",
          "Data fusion and alerting software.",
          "Harbour communication network.",
          "Response integration with patrol craft and marine commandos."
        ],
        capabilities: [
          "Detects and tracks surface and underwater threats (boats, swimmers, divers, SDVs, submersibles).",
          "Provides automatic threat identification and generates alerts.",
          "Creates a common operational picture for harbour defence."
        ]
      },
      challenges: [
        "Finding Indian suppliers for towers, shelters, masts, generators, cables for equipment designed by Israeli designers for world market.",
        "Most of these have to be customised to the Israeli systems hence lead to lesser choice, high costs and long delivery periods.",
        "Documentation in terms of test certificates, manufacturing facility approvals, Quality audits etc preclude the majority of suppliers.",
        "Approval of Installation and commissioning of Sonars required by integrator and UK based supplier of Sonars a time consuming, effort intensive and expensive activity.",
        "Hauling of radars on top of high towers with antennas as large as 8m in length on a three legged tower with a monkey ladder access to the platform on top.",
        "Vibration of electro optic sensor due to high wind velocity leading to blurred images.",
        "Different dates of delivery of sub systems viz Radars, Electro-Optical sensors and Sonars as the suppliers were different. This resulted in major delays in integration and installation as multiple teams were required to service different harbours.",
        "Integration took a long time and in many cases the warranty expired before the systems got commissioned.",
        "Security clearance for civilian personnel required and their subsequent process of entry was extremely cumbersome which restricted active working hours in the harbour to 5 hours a day at best.",
        "The harbour area responsibility is divided internally amongst various divisions of the naval establishment located inside. Poor internal coordination between these divisions resulted in delays in clearance for work.",
        "Locations chosen by M/s RST after preliminary reconnaissance while submitting the bid were not found suitable by the different OEMs when their teams arrived for confirmatory reconnaissance after award of project to Elta. These needed to be changed at times resulting in fresh approvals which were all required to be approved by the HQs.",
        "Local Defense authorities at times proved uncooperative for allowing installation at locations approved by HQs as it required them to shift and adjust their present layout of facilities and installations.",
        "In XYZ harbour the local labour union would not allow workers from outside states to be employed by the sub-contractors. The sub contractors were forced to pay higher wages to these workers while their working capability/capacity was sub optimal.",
        "Theft of material brought by the sub contractor inside the harbour. The sub contractor is not allowed to put in own security and the Navy does not take responsibility once the theft is reported."
      ],
      remedies: [
        "Integration of all sub systems as a pilot to be carried out at the Prime system integrators premises (in this case M/s Elta) before shipping of systems/sub systems to user location.",
        "All hardware to be procured locally by partner Indian company to be inspected and approved on sample basis in advance.",
        "Carry out installation and commissioning of such systems at one location and get it approved by highest competent authority of the User with the caveat that no changes would be carried out at the remaining locations. If at any time the user demands a change for any reason whatsoever it will be at additional mutually agreed price with delay in delivery factored in.",
        "Carry out a thorough reconnaissance of the site before commencement of actual activity and deployment of manpower. Take approvals in writing from local authorities before commencement of work. This has to be in addition to the approvals from Naval HQs or Harbour HQs. Many a times the local commander has been seen to override orders from his higher ups.",
        "For security clearance, daily entry and exit of outside manpower engage retired Navy personnel and local sub contractor(s) for facilitation.",
        "Have a core team of expert technicians and junior engineers permanently engaged on payroll for quick deployment at sites as technical issues of installation and integration arise frequently on a day to day basis and cannot be predicted in advance due to unique local conditions.",
        "Have a crack team of technical trouble shooters as in many cases the engineering and integrations aspects worked out on paper and laboratory conditions by the system integrator need to be tweaked during installation and commissioning."
      ],
      lessonsLearnedTitle: "Key Lessons Learned from IUHDSS Deployment",
      lessonsLearned: [
        "Imported systems as far as possible should be procured with Transfer of Technology for production. All support infrastructure required to be procured in India should be sent to foreign OEM for pilot integration.",
        "Stocking of critical spares is a must to address maintenance challenges of equipment which goes out of warranty even before commissioning. The stocking of the spares is a dynamic and continuous function as repairs and replacement will be required before the system is handed over to the User.",
        "All necessary documentation required for support systems along with qualification required by manufacturing facility should be specified by the OEM well in advance and the process to be completed before the systems arrive in India.",
        "The Installation & Commissioning team needs to be led by a senior personnel with operational and financial authority ad quick decision making is a must. He should be assisted by a team of experienced domain experts. These should not be changed during the entire project.",
        "A separate Risk Analysis and Mitigation organisation should be in place throughout the operation covering all bases. This should be centrally controlled providing near real time inputs to the Program Director in charge of Installation and commissioning.",
        "A separate Quality team controlled centrally at the Program director level should be created to oversee the local quality function at different site locations. This team should have a section which should exclusively deal with the handing/taking over process and the documentation being carried on various site locations."
      ],
      conclusion: [
        "The IUHDSS programme demonstrated the importance of integrated, layered harbour defence systems for protecting critical naval infrastructure against evolving asymmetric threats. The project also highlighted the strategic importance of indigenous capability development, technology absorption and sustainable lifecycle support within India’s defence ecosystem.",
        "The case study above pertains only to the installation and commissioning aspects of the IUHDSS system. It does not cover the operational and performance parameters."
      ],
      author: {
        name: "Col Sanjay Chandra (Retd)",
        title: "Former Senior Vice President",
        company: "PQR Company"
      }
    }
  },
  {
    slug: "ge-collaboration-pdu",
    title: "Super Value CT Scan Power Distribution Unit",
    subtitle: "(SVCT 8 / Wipro GE Healthcare)",
    client: "Wipro GE Healthcare",
    summary: "Production partner qualification and manufacturing execution for the Super Value CT PDU (SVCT 8) — helping Wipro GE Healthcare capture 80% market share in India.",
    category: "Electronics & Industrial",
    details: {
      overview: "Development and manufacturing facility qualification for the Super Value CT Scan Power Distribution Unit (model name SVCT 8) for Wipro GE Healthcare. Established supply chain, tooling, facility layout, and defense-grade workmanship to achieve GE approval and 80% market share.",
      keyDeliverables: [
        "Complete facility approval and production commencement within strict 12-month timeline",
        "PDU supply chain, tooling, test setups, and GE-standard work instructions established from scratch",
        "Leveraged Defense manufacturing division technicians for immediate IPC/medical-standard start",
        "Hybrid procurement model and component substitution meeting GE target pricing and CBOM"
      ],
      background: [
        "M/s GE Healthcare was facing a major challenge from M/s Siemens Healtheneers, M/s Cannon Medical Systems, M/s Phillips Brilliance in the CT Scan machine retail business. This was further aggravated by M/s Fujifilm Healthcare/Hitachi Healthcare, United Imaging Healthcare and M/s Neusoft Medical Systems joining the competition.",
        "Internal brainstorming at GE HQs to increase sales revealed that the emerging market was in India where the requirement of CT scan machines was growing exponentially due to government impetus to reach its large rural areas to provide at least minimal health care to its poorest citizens. GE being the front runner in CT Scan machines was providing the state of the art high end machines which were consequently the costliest. They realized that in order to address the bulk emerging market in India they would be required to develop a minimalist CT Scan machine at very competitive price. This resulted in an exercise to reduce the cost of each sub-system/LRU of the CT Scan machine to its lowest cost without compromising on its basic functions. Wipro GE Healthcare was given the task of designing the Power distribution Unit for this machine which called Super Value CT PDU model name SVCT 8. They were also tasked to identify a supplier who could productionize it at bare minimum cost."
      ],
      association: [
        "I was the Senior Vice President (Engg & Operations) of the company chosen by Wipro GE Healthcare to carry out production of SVCT 8. I was solely responsible for the task. I was given a free hand to get the work done as to be a production partner to GE was considered a premier branding."
      ],
      challenges: [
        "Company selected as production partner was not from a medical manufacturing background.",
        "GE Healthcare process of getting approved as a production partner was not understood in entirety.",
        "The time frame given by GE Healthcare for getting our facility approved and to commence production was 12 months which included prototyping and pilot.",
        "The supply chain for the PDU was to be established from scratch as it was a new vertical for the company.",
        "Test set ups with complementary hardware, software, tooling etc were to be established.",
        "The manufacturer for the mechanicals was to be approved by GE separately but to be identified by us.",
        "Manpower had to be trained and certified as per GE Healthcare standards.",
        "Documentation was to be carried out as per GE Healthcare standards and formats.",
        "Production facility layout as per manufacturing process flow including shop floor, testing bay, Quality check, store and inventory control, work instructions, finished goods area, packaging were to be brought up for Approval by GE Healthcare.",
        "Pricing was to conform to GE Healthcare target."
      ],
      remedies: [
        "Our company had a Defense manufacturing arm. Defense standards are similar to medical standards in production and certain process certifications like IPC standards are common. The workmanship standards are similar. We did not hire from scratch but pulled out experienced technicians, junior engineers and supervisors from our Defense manufacturing division along with quality and documentation personnel. This gave us a ready start to the activity.",
        "While the design was being finalized by Wipro GE Healthcare we sent our material management team to GE facility to get an insight into their supply chain management.",
        "We associated our technicians and engineers with the Wipro GE Healthcare team during prototyping stage at their facility.",
        "We made our production floor manager to visit GE production site to understand their work flow.",
        "We adopted the same ERP as Wipro GE Healthcare to have uniformity of process.",
        "Once the BOM was frozen by the GE team of designers our material management team sat down with GE procurement team to optimize the same. We worked out a hybrid arrangement between GE and ourselves where we would procure from suppliers which gave us the best prices and then ask them to deliver at our location to get the best CBOM.",
        "Due to our extensive exposure in the Defense manufacturing we could offer substitutes which were less expensive than the components being used by GE which in turn helped to reduce our CBOM and ultimately meet GE target pricing.",
        "We procured twice the quantity of material than the order value so that we did not have issues of material shortage, material rejection, material delay, material lost in transit as we had a 100% back up. We also kept a buffer stock of 10% machines of our six monthly supply to cater for emergent requirements or unforeseen delays.",
        "Over a period of 6 months we built up a SVCT 8 specific workforce and repatriated back the manpower we had initially borrowed from the Defense manufacturing arm."
      ],
      lessonsLearnedTitle: "Lessons Learned",
      lessonsLearned: [
        "Learn from the best. We learned from GE Healthcare.",
        "While starting a new venture spend on process, quality of equipment and tools, skilled and experienced manpower.",
        "The power of correct and complete documentation leads to extensive risk mitigation.",
        "At all levels of management concentrate on back up and reserves.",
        "Senior leadership should look at long term view of profitability as premium branding will open new avenues for business growth."
      ],
      conclusion: [
        "The SVCT 8 initiative of was a total success with Wipro GE Healthcare garnering 80% of the market share and giving even Tier III competitors a stiff challenge in pricing itself."
      ],
      author: {
        name: "Col Sanjay Chandra (Retd)",
        title: "Former Sr Vice President",
        company: "XYZ Company"
      }
    }
  }
];
