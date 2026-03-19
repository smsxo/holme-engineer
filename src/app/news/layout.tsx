import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from Holme Engineering AS — developments in maritime engineering, energy systems, and autonomous solutions.",
  openGraph: {
    title: "News — Holme Engineering AS",
    description:
      "Stay updated with the latest engineering developments from Holme Engineering.",
    url: "https://holme-engineering.com/news",
  },
  twitter: {
    title: "News — Holme Engineering",
    description:
      "Latest developments in maritime engineering, energy systems & autonomous solutions.",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
