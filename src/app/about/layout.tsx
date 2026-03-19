import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Holme Engineering AS — a Norwegian engineering company specializing in power management, energy storage, automation, and autonomous solutions for maritime and energy industries.",
  openGraph: {
    title: "About Us — Holme Engineering AS",
    description:
      "Norwegian engineering company specializing in power management, energy storage, and automation for maritime and energy industries.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
