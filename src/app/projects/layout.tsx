import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore selected projects showcasing our engineering capabilities across power management, energy storage, automation, and sustainability.",
  openGraph: {
    title: "Our Projects — Holme Engineering AS",
    description:
      "Selected projects across power management, energy storage, automation, and sustainability.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
