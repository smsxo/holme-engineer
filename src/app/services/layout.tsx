import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Explore our engineering services — power management systems, energy storage, integrated automation, propulsion monitoring, shore connections, micro grids, and autonomous marine solutions.",
  openGraph: {
    title: "Engineering Services — Holme Engineering AS",
    description:
      "Full spectrum of electrical and automation engineering for maritime and energy industries.",
    url: "https://holme-engineering.com/services",
  },
  twitter: {
    title: "Engineering Services — Holme Engineering",
    description:
      "PMS, ESS, IAS, propulsion monitoring, shore power, micro grids & autonomous marine solutions.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
