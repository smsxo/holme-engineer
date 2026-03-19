import {
  Zap,
  Battery,
  Monitor,
  Ship,
  Plug,
  LayoutGrid,
  Bot,
  Wrench,
  Server,
  Radio,
  Shield,
  Building2,
} from "lucide-react";
import type { MarineService, ESSSolution, Service } from "@/types";

// ─── Marine Services (under Consulting Services) ────────────
export const marineServices: MarineService[] = [
  {
    title:
      "Propulsion Systems, Performance monitoring, cross system integration",
    description:
      "Advanced propulsion control and monitoring systems with full cross-system integration for optimal vessel performance.",
    icon: Ship,
    relatedServiceSlugs: ["propulsion-performance-monitoring"],
  },
  {
    title: "Commissioning support and management",
    description:
      "End-to-end commissioning services including planning, execution, testing, and handover for marine electrical systems.",
    icon: Wrench,
  },
  {
    title: "System Design and Cyber Security",
    description:
      "Comprehensive system architecture design with built-in cyber security measures meeting maritime classification requirements.",
    icon: Shield,
  },
  {
    title: "Power Management Systems, Energy Storage, Integrated Automation",
    description:
      "Integrated solutions combining PMS, ESS, and automation platforms for complete vessel electrical system management.",
    icon: Zap,
    relatedServiceSlugs: [
      "power-management-systems",
      "energy-storage-systems",
      "integrated-automation-systems",
    ],
  },
];

// ─── ESS Solutions (under Consulting Services) ──────────────
export const essSolutions: ESSSolution[] = [
  {
    title: "Data Centers",
    description:
      "Energy storage solutions ensuring uninterrupted power supply for data center operations with seamless failover capability.",
    icon: Server,
  },
  {
    title: "Shore Connections",
    description:
      "High-voltage shore connection systems enabling emission-free port operations through grid-connected power transfer.",
    icon: Plug,
    relatedServiceSlug: "shore-connections",
  },
  {
    title: "Micro Grids",
    description:
      "Self-sufficient power grids integrating renewable energy sources, battery storage, and intelligent load management.",
    icon: LayoutGrid,
    relatedServiceSlug: "micro-grids",
  },
  {
    title: "Telecommunication",
    description:
      "Reliable energy storage and power management for critical telecommunication infrastructure and remote base stations.",
    icon: Radio,
  },
  {
    title: "Critical Infra Structure",
    description:
      "Resilient energy solutions for hospitals, emergency services, and essential public infrastructure requiring zero-downtime power.",
    icon: Building2,
  },
];

// ─── Services ───────────────────────────────────────────────
export const services: Service[] = [
  {
    slug: "power-management-systems",
    title: "Power Management Systems",
    shortTitle: "PMS",
    description:
      "The intelligent brain of a vessel's electrical grid. Our PMS solutions control power generation and distribution to ensure uninterrupted operations and prevent blackouts at sea.",
    detailedDescription:
      "Power Management Systems form the critical decision-making layer of any vessel or offshore installation's electrical network. Operating in real-time, PMS continuously monitors generator load, bus-tie status, and consumer demand — automatically starting, stopping, and load-sharing generators to maintain grid stability. In heavy-sea conditions or during dynamic positioning, PMS prevents cascading failures through predictive load shedding and fast-acting blackout recovery sequences. Our systems integrate with propulsion drives, thrusters, and hotel loads to deliver mathematically optimal power distribution across all operating profiles.",
    developerContext:
      "PMS is the 'brain' of the ship's electrical grid. It controls how much power is generated and distributed to ensure the ship doesn't have a blackout. Think of it as a real-time resource scheduler — continuously balancing supply (generators) against demand (consumers) with zero tolerance for failure.",
    systemContext:
      "PMS sits at the top of the vessel's electrical hierarchy. It commands generators, coordinates with ESS for peak-shaving and backup, feeds status data to IAS for unified monitoring, and receives operational constraints from propulsion systems. It is the single point of authority for all power-related decisions onboard.",
    visualCues: [
      "Digital control screens with real-time power flow diagrams",
      "Switchboard status panels with breaker positions",
      "Engine room monitoring displays with generator load bars",
      "Bus-tie and load-sharing visualization",
    ],
    category: "marine",
    features: [
      "Real-time load monitoring & automatic balancing",
      "Automatic generator start/stop sequencing",
      "Blackout prevention & fast recovery",
      "Predictive load shedding algorithms",
      "Bus-tie management & power flow optimization",
      "Dynamic positioning power reservation",
    ],
    keyMetrics: [
      { label: "Response Time", value: "<100ms" },
      { label: "Blackout Recovery", value: "<30s" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Load Accuracy", value: "±0.5%" },
    ],
    relatedSlugs: [
      "energy-storage-systems",
      "integrated-automation-systems",
      "propulsion-performance-monitoring",
    ],
    icon: Zap,
  },
  {
    slug: "energy-storage-systems",
    title: "Energy Storage Systems",
    shortTitle: "ESS",
    description:
      "Large-scale battery solutions that store excess energy to reduce fuel consumption and provide reliable backup power for vessels, offshore platforms, and critical infrastructure.",
    detailedDescription:
      "Energy Storage Systems are industrial-scale battery installations — analogous to a giant Tesla Powerwall engineered for the extreme demands of marine and critical infrastructure environments. Our ESS solutions integrate lithium-ion and emerging solid-state battery technologies with sophisticated Battery Management Systems (BMS) that monitor cell-level voltage, temperature, and state-of-charge. ESS enables peak-shaving (generators run at optimal load), spinning reserve (instant backup without starting a generator), and hybrid operations that can reduce fuel consumption by 15–30% while dramatically cutting emissions.",
    developerContext:
      "ESS is essentially a large-scale battery bank. These are used to store excess energy (like a giant Tesla Powerwall for a ship or a data center) to reduce fuel consumption or provide backup power. The BMS layer is the software-critical component — it must guarantee safe cell operation under all thermal and electrical conditions.",
    systemContext:
      "ESS operates as the energy buffer in the power architecture. It receives charging commands from PMS during low-load periods and discharges during peak demand. It feeds state-of-charge data to IAS dashboards and provides instantaneous backup that Shore Connections and Micro Grids rely on for seamless power transitions.",
    visualCues: [
      "Rows of battery rack modules with LED status indicators",
      "Cooling system thermal management displays",
      "State-of-charge and cell-voltage monitoring screens",
      "Capacity and discharge rate dashboards",
    ],
    category: "ess",
    features: [
      "Battery bank design & cell-level integration",
      "Hybrid power system optimization",
      "Peak-shaving & spinning reserve capability",
      "Advanced Battery Management System (BMS)",
      "Thermal management & safety monitoring",
      "15–30% fuel consumption reduction",
    ],
    keyMetrics: [
      { label: "Fuel Savings", value: "15–30%" },
      { label: "Response Time", value: "<20ms" },
      { label: "Cycle Life", value: "6,000+" },
      { label: "Round-trip η", value: ">95%" },
    ],
    relatedSlugs: [
      "power-management-systems",
      "shore-connections",
      "micro-grids",
    ],
    icon: Battery,
  },
  {
    slug: "integrated-automation-systems",
    title: "Integrated Automation Systems",
    shortTitle: "IAS",
    description:
      "A centralized platform connecting all mechanical and electrical systems into one unified interface — the operating system of modern vessels and industrial facilities.",
    detailedDescription:
      "Integrated Automation Systems serve as the central nervous system of a vessel — the 'Operating System' that connects every onboard subsystem into a single, coherent interface. IAS aggregates data from PMS, propulsion, HVAC, ballast, cargo, and safety systems into unified monitoring dashboards with real-time alarm management, event logging, and trend analysis. Our IAS solutions feature clean, modern UI/UX design with intuitive navigation, contextual alerts, and role-based access controls. Remote diagnostics capability allows shore-based engineers to monitor and configure systems without being onboard.",
    developerContext:
      "IAS is the 'Operating System' of the vessel. It connects all the ship's mechanical and electrical systems into one interface. Think of it as a SCADA/HMI platform purpose-built for maritime — handling thousands of I/O points, real-time data streams, alarm prioritization, and multi-screen bridge displays.",
    systemContext:
      "IAS is the integration layer that sits above all subsystems. PMS reports power status to it, propulsion reports speed and efficiency, HVAC reports climate data, and safety systems report fire and flooding status. IAS presents all of this through a unified operator interface and logs every event for regulatory compliance.",
    visualCues: [
      "Clean, modern UI/UX dashboards with graphs and alerts",
      "Multi-panel bridge displays with system overview",
      "Real-time alarm priority lists with color coding",
      "Trend graphs and historical data visualization",
    ],
    category: "marine",
    features: [
      "Unified multi-system monitoring dashboards",
      "Real-time alarm management & prioritization",
      "Comprehensive event logging & audit trails",
      "Remote diagnostics & configuration",
      "Role-based access control & security",
      "Regulatory compliance data recording",
    ],
    keyMetrics: [
      { label: "I/O Points", value: "10,000+" },
      { label: "Alarm Latency", value: "<500ms" },
      { label: "Data Retention", value: "10 years" },
      { label: "Uptime SLA", value: "99.95%" },
    ],
    relatedSlugs: [
      "power-management-systems",
      "propulsion-performance-monitoring",
      "autonomous-marine-solutions",
    ],
    icon: Monitor,
  },
  {
    slug: "propulsion-performance-monitoring",
    title: "Propulsion & Performance Monitoring",
    shortTitle: "Propulsion",
    description:
      "Data-driven propulsion analytics that track vessel efficiency, reduce CO₂ emissions, and optimize fuel consumption through advanced performance monitoring.",
    detailedDescription:
      "Propulsion & Performance Monitoring transforms raw engine and navigation data into actionable intelligence for fleet operators. By continuously measuring shaft power, fuel flow, vessel speed through water, trim, and weather conditions, our systems calculate real-time propulsion efficiency and detect degradation trends in hull fouling and propeller condition. The platform generates automated reporting for IMO DCS and EU MRV compliance, and provides AI-assisted voyage optimization recommendations that typically reduce fuel consumption by 5–15% — directly translating to measurable CO₂ emission reductions.",
    developerContext:
      "This is about tracking how efficiently the ship moves through water, focusing on reducing CO₂ emissions and saving fuel through data analysis. The system ingests high-frequency sensor data (shaft torque, RPM, GPS, weather) and runs analytics models to derive efficiency KPIs and degradation trends.",
    systemContext:
      "Performance monitoring receives propulsion data (shaft power, RPM, fuel flow) from engine room sensors, GPS and weather data from navigation systems, and power consumption data from PMS. Results feed into IAS dashboards for bridge display and are transmitted to shore-based fleet management platforms for fleet-wide benchmarking.",
    visualCues: [
      "Propeller and engine performance data displays",
      "Green efficiency charts and trend lines",
      "CO₂ emission tracking dashboards",
      "Voyage fuel consumption comparison graphs",
    ],
    category: "marine",
    features: [
      "Real-time fuel consumption analytics",
      "CO₂ emission tracking & automated reporting",
      "Hull & propeller performance degradation analysis",
      "IMO DCS & EU MRV regulatory compliance",
      "AI-assisted voyage optimization",
      "Fleet-wide performance benchmarking",
    ],
    keyMetrics: [
      { label: "Fuel Savings", value: "5–15%" },
      { label: "CO₂ Reduction", value: "Proportional" },
      { label: "Data Points", value: "500+/sec" },
      { label: "Report Cadence", value: "Daily" },
    ],
    relatedSlugs: [
      "power-management-systems",
      "integrated-automation-systems",
      "energy-storage-systems",
    ],
    icon: Ship,
  },
  {
    slug: "shore-connections",
    title: "Shore Connections",
    shortTitle: "Shore Power",
    description:
      "Cold ironing solutions that allow vessels to connect to local power grids while at port, eliminating diesel engine operation and reducing pollution in port cities.",
    detailedDescription:
      "Shore Connections — also known as Cold Ironing or Alternative Maritime Power (AMP) — enable vessels to shut down their diesel generators while berthed and draw clean electricity from the port's local power grid. Our systems handle the complex electrical engineering of high-voltage power transfer: voltage transformation (typically 11 kV shore to 690 V vessel), frequency conversion when needed, automatic synchronization, and seamless load transfer. The result is zero emissions, zero noise, and zero vibration at berth — transforming port cities from pollution hotspots into clean maritime hubs.",
    developerContext:
      "Shore Connections are 'Cold Ironing' — allowing ships to plug into the local power grid while at port. This allows them to turn off their diesel engines, reducing noise and pollution in cities. The engineering challenge is managing high-voltage power transfer with different frequencies and voltage levels safely.",
    systemContext:
      "Shore connection systems interface with the port's high-voltage grid on one side and the vessel's main switchboard on the other. PMS coordinates the transition from generator power to shore power (and back), ESS can provide bridge power during the switchover, and IAS monitors the entire process with safety interlocks.",
    visualCues: [
      "Heavy-duty electrical cables and plug connections",
      "Dockside power station equipment",
      "Voltage transformation and synchronization panels",
      "Emission reduction status displays",
    ],
    category: "ess",
    features: [
      "High-voltage shore connection systems (IEC/IEEE 80005)",
      "Automatic power transfer & synchronization",
      "Frequency conversion (50/60 Hz)",
      "Emission-free port operations",
      "Seamless load transfer with zero blackout",
      "Multi-voltage compatibility (6.6–11 kV)",
    ],
    keyMetrics: [
      { label: "Transfer Speed", value: "<60s" },
      { label: "Voltage Range", value: "6.6–11 kV" },
      { label: "Emission at Berth", value: "Zero" },
      { label: "Vessels/Year", value: "200+" },
    ],
    relatedSlugs: [
      "energy-storage-systems",
      "power-management-systems",
      "micro-grids",
    ],
    icon: Plug,
  },
  {
    slug: "micro-grids",
    title: "Micro Grids",
    shortTitle: "Micro Grids",
    description:
      "Self-sufficient, resilient power grids designed for remote locations and critical infrastructure that cannot afford power failures — including hospitals, data centers, and remote communities.",
    detailedDescription:
      "Micro Grids are self-contained power ecosystems that integrate multiple energy sources — solar, wind, diesel backup, and battery storage — into an intelligent, independently managed grid. Designed for locations where grid connection is unreliable, unavailable, or insufficient for critical operations, our micro grids feature automatic islanding capability: seamlessly disconnecting from the main grid during outages and maintaining uninterrupted power to essential loads. Smart load management prioritizes critical consumers (hospitals, data centers, emergency services) and optimally dispatches generation resources to minimize fuel consumption and maximize renewable utilization.",
    developerContext:
      "A micro grid is a small, self-sufficient power grid, often used in remote areas or for 'Critical Infrastructure' like hospitals or data centers that cannot afford a power failure. The control system must balance intermittent renewable sources with battery storage and backup generators in real-time — essentially a miniature version of national grid management.",
    systemContext:
      "Micro grids operate as standalone power systems that can optionally connect to the main utility grid. ESS provides the energy buffer for renewable intermittency, PMS logic manages generation dispatch and load shedding, and the micro grid controller coordinates islanding transitions. Shore connection technology may provide the grid tie-point.",
    visualCues: [
      "Solar panels and wind turbine installations",
      "Local energy hub with battery storage",
      "Grid topology diagrams with source-to-load flows",
      "Islanding mode status indicators",
    ],
    category: "ess",
    features: [
      "Renewable energy integration (solar, wind, hydro)",
      "Seamless islanded & grid-connected operation",
      "Critical infrastructure load prioritization",
      "Intelligent generation dispatch optimization",
      "Zero-downtime islanding transitions",
      "72+ hour autonomous operation capability",
    ],
    keyMetrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Islanding Time", value: "<200ms" },
      { label: "Renewable Mix", value: "Up to 80%" },
      { label: "Autonomy", value: "72+ hours" },
    ],
    relatedSlugs: [
      "energy-storage-systems",
      "shore-connections",
      "power-management-systems",
    ],
    icon: LayoutGrid,
  },
  {
    slug: "autonomous-marine-solutions",
    title: "Autonomous Marine Solutions",
    shortTitle: "Autonomous",
    description:
      "Cutting-edge technology for self-driving and remotely controlled vessels, leveraging sensors, AI, and advanced navigation systems to define the future of maritime operations.",
    detailedDescription:
      "Autonomous Marine Solutions represent the frontier of maritime technology — engineering vessels that can navigate, make decisions, and operate with minimal or zero human intervention. Our systems fuse data from multiple sensor modalities (lidar, radar, cameras, AIS, GPS) into a unified situational awareness picture, then apply AI algorithms for collision avoidance compliant with COLREGs (International Regulations for Preventing Collisions at Sea), adaptive path planning, and anomaly detection. Shore-based Remote Operations Centers enable human supervisors to monitor autonomous vessels in real-time and intervene when needed, creating a graduated autonomy model from assisted navigation to fully unmanned operation.",
    developerContext:
      "Autonomous Marine Solutions involve self-driving or remote-controlled ships. This is high-tech research involving sensors, AI, and cameras. The software stack includes real-time sensor fusion, machine learning inference pipelines, decision-making engines with COLREGs compliance, and low-latency communication links to shore-based operations centers.",
    systemContext:
      "Autonomous systems sit at the highest level of vessel intelligence. They consume sensor data directly, receive power and propulsion status from PMS, leverage IAS for system health monitoring, and command propulsion and steering systems. The shore-side Remote Operations Center receives compressed situational data and can override autonomous decisions.",
    visualCues: [
      "Radar and Lidar point-cloud scan visualizations",
      "Sleek futuristic vessel designs",
      "AI decision-making overlays on navigation charts",
      "Computer code and algorithm visualization",
    ],
    category: "software",
    features: [
      "Multi-modal sensor fusion (lidar, radar, camera, AIS)",
      "AI-driven navigation & COLREGs compliance",
      "Real-time collision avoidance algorithms",
      "Shore-based Remote Operations Center",
      "Graduated autonomy levels (assisted → fully unmanned)",
      "Redundant communication & fail-safe protocols",
    ],
    keyMetrics: [
      { label: "Sensor Fusion", value: "5+ modalities" },
      { label: "Decision Rate", value: "10 Hz" },
      { label: "Latency to Shore", value: "<500ms" },
      { label: "Autonomy Level", value: "IMO 1–4" },
    ],
    relatedSlugs: [
      "integrated-automation-systems",
      "propulsion-performance-monitoring",
      "power-management-systems",
    ],
    icon: Bot,
  },
];
