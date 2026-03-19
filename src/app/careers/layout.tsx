import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Holme Engineering — explore career opportunities in power systems, automation software, project management, and battery systems engineering.",
  openGraph: {
    title: "Careers — Holme Engineering AS",
    description:
      "Join a team of world-class engineers working on cutting-edge maritime and energy solutions.",
    url: "https://holme-engineering.com/careers",
  },
  twitter: {
    title: "Careers at Holme Engineering",
    description:
      "Join world-class engineers building the future of maritime power & automation.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
