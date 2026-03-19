import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/services",
    children: [
      {
        label: "Power Management (PMS)",
        href: "/services/power-management-systems",
      },
      {
        label: "Energy Storage (ESS)",
        href: "/services/energy-storage-systems",
      },
      {
        label: "Automation (IAS)",
        href: "/services/integrated-automation-systems",
      },
      {
        label: "Propulsion Monitoring",
        href: "/services/propulsion-performance-monitoring",
      },
      { label: "Shore Connections", href: "/services/shore-connections" },
      { label: "Micro Grids", href: "/services/micro-grids" },
      {
        label: "Autonomous Marine",
        href: "/services/autonomous-marine-solutions",
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting-services",
    children: [
      { label: "Marine", href: "/consulting-services#marine" },
      { label: "ESS Solutions", href: "/consulting-services#ess-solutions" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "R&D", href: "/research-development" },
      { label: "News", href: "/news" },
    ],
  },
];
