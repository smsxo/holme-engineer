import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Product Development — R&D",
  description:
    "Software and product development at Holme Engineering AS — autonomous marine solutions, AI-driven navigation, and next-generation vessel technology.",
  openGraph: {
    title: "Software & Product Dev — Holme Engineering AS",
    description:
      "Autonomous marine solutions and cutting-edge software product development for the maritime industry.",
    url: "https://holme-engineering.com/research-development/software-product-dev",
  },
  twitter: {
    title: "Software & Product Dev — Holme Engineering",
    description:
      "AI-driven autonomous navigation & next-gen vessel software development.",
  },
};

export default function SoftwareProductDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
