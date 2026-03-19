import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Engineering consulting services from Holme Engineering AS — specializing in marine electrical systems, power management, and integrated automation.",
  openGraph: {
    title: "Consulting Services — Holme Engineering AS",
    description:
      "Marine engineering consulting: propulsion systems, commissioning, system design, cyber security, and integrated automation.",
    url: "https://holme-engineering.com/consulting-services",
  },
  twitter: {
    title: "Marine Consulting — Holme Engineering",
    description:
      "Expert consulting for propulsion, commissioning, system design & cyber security in maritime.",
  },
};

export default function ConsultingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
