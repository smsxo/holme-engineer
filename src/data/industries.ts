import { Anchor, Waves, Leaf, Building2, Factory, Shield } from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    title: "Maritime & Shipping",
    description:
      "Powering cargo vessels, tankers, cruise ships, and offshore support vessels with intelligent electrical systems and automation.",
    icon: Anchor,
    relevantSlugs: ["power-management-systems", "integrated-automation-systems", "propulsion-performance-monitoring"],
  },
  {
    title: "Offshore Energy",
    description:
      "Reliable power management and automation for drilling rigs, FPSOs, and offshore wind installations in demanding environments.",
    icon: Waves,
    relevantSlugs: ["power-management-systems", "energy-storage-systems", "integrated-automation-systems"],
  },
  {
    title: "Renewable Energy",
    description:
      "Integrating solar, wind, and battery storage into micro grids and hybrid systems for sustainable power generation.",
    icon: Leaf,
    relevantSlugs: ["energy-storage-systems", "micro-grids", "shore-connections"],
  },
  {
    title: "Critical Infrastructure",
    description:
      "Ensuring uninterrupted power for hospitals, data centers, and essential facilities through resilient grid solutions.",
    icon: Building2,
    relevantSlugs: ["micro-grids", "energy-storage-systems", "power-management-systems"],
  },
  {
    title: "Industrial Automation",
    description:
      "Advanced control and monitoring systems for manufacturing, processing, and heavy industry operations.",
    icon: Factory,
    relevantSlugs: ["integrated-automation-systems", "power-management-systems", "propulsion-performance-monitoring"],
  },
  {
    title: "Defense & Government",
    description:
      "Secure, mission-critical power and automation systems for naval vessels and government infrastructure.",
    icon: Shield,
    relevantSlugs: ["power-management-systems", "integrated-automation-systems", "autonomous-marine-solutions"],
  },
];
