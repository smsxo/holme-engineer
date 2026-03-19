import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Arctic Explorer Vessel",
    category: "Power Management",
    description:
      "Complete PMS integration for a polar research vessel, ensuring reliable power operation in extreme sub-zero conditions with full redundancy.",
    specs: [
      "Dual-redundant PMS",
      "6 MW total capacity",
      "IMO Tier III compliant",
    ],
    image: "/projects/arctic-vessel.jpg",
    relevantSlugs: ["power-management-systems", "integrated-automation-systems"],
  },
  {
    title: "Nordic Green Port",
    category: "Shore Connections",
    description:
      "High-voltage shore connection system for one of Scandinavia's busiest ports, enabling emissions-free berthing for over 200 vessels annually.",
    specs: ["16 MW shore power", "200+ vessels/year", "Zero-emission port"],
    image: "/projects/green-port.jpg",
    relevantSlugs: ["shore-connections", "energy-storage-systems"],
  },
  {
    title: "Offshore Wind Farm Grid",
    category: "Micro Grids",
    description:
      "Designed and commissioned the power management and micro grid system for an offshore wind farm's operations base and crew facilities.",
    specs: ["12 MW wind integration", "4 MWh battery storage", "99.99% uptime"],
    image: "/projects/wind-farm.jpg",
    relevantSlugs: ["micro-grids", "energy-storage-systems"],
  },
  {
    title: "Autonomous Ferry Prototype",
    category: "Autonomous Solutions",
    description:
      "Sensor fusion and autonomous navigation system for a zero-emission electric ferry connecting two Norwegian fjord communities.",
    specs: [
      "Full autonomous capability",
      "Electric propulsion",
      "Lidar + camera + radar",
    ],
    image: "/projects/autonomous-ferry.jpg",
    relevantSlugs: ["autonomous-marine-solutions", "propulsion-performance-monitoring"],
  },
  {
    title: "LNG Carrier Fleet Upgrade",
    category: "Energy Storage",
    description:
      "Retrofitted ESS solutions across a fleet of LNG carriers, reducing fuel consumption by 15% and enabling peak-shaving operations.",
    specs: ["8 vessels retrofitted", "15% fuel reduction", "3 MWh per vessel"],
    image: "/projects/lng-carrier.jpg",
    relevantSlugs: ["energy-storage-systems", "power-management-systems"],
  },
  {
    title: "Hospital Resilience Grid",
    category: "Critical Infrastructure",
    description:
      "Micro grid with integrated battery storage ensuring zero-downtime power for a regional hospital, including seamless islanding capability.",
    specs: ["2 MW micro grid", "Zero transfer time", "72h island capability"],
    image: "/projects/hospital-grid.jpg",
    relevantSlugs: ["micro-grids", "energy-storage-systems", "power-management-systems"],
  },
];
