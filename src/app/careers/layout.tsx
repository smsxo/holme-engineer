import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Holme Engineering — explore career opportunities in power systems, automation software, project management, and battery systems engineering.",
  openGraph: {
    title: "Careers — Holme Engineering AS",
    description:
      "Join a team of world-class engineers working on cutting-edge maritime and energy solutions.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
