import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Our engineering solutions operate across maritime, offshore energy, renewable energy, critical infrastructure, industrial automation, and defense sectors.",
  openGraph: {
    title: "Industries We Serve — Holme Engineering AS",
    description:
      "Engineering solutions for the most demanding environments — from Arctic waters to offshore platforms.",
    url: "https://holme-engineering.com/industries",
  },
  twitter: {
    title: "Industries — Holme Engineering",
    description:
      "Maritime, offshore, renewables, defense & critical infrastructure — engineered for extreme demands.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
