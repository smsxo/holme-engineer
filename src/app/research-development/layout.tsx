import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "R&D at Holme Engineering AS — advancing energy storage solutions for data centers, shore connections, micro grids, telecommunication, and critical infrastructure.",
  openGraph: {
    title: "R&D — Holme Engineering AS",
    description:
      "Pioneering research and development in energy storage systems for critical applications.",
    url: "https://holme-engineering.com/research-development",
  },
  twitter: {
    title: "R&D — Holme Engineering",
    description:
      "Advancing ESS for data centers, micro grids, telecom & critical infrastructure.",
  },
};

export default function ResearchDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
