import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "R&D at Holme Engineering AS — advancing energy storage solutions for data centers, shore connections, micro grids, telecommunication, and critical infrastructure.",
  openGraph: {
    title: "R&D — Holme Engineering AS",
    description:
      "Pioneering research and development in energy storage systems for critical applications.",
  },
};

export default function ResearchDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
