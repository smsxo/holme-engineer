import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

// Lazy-load heavy below-fold components
const ScrollFeatureSection = dynamic(
  () =>
    import("@/components/scroll-feature-section").then(
      (mod) => mod.ScrollFeatureSection,
    ),
  { ssr: true },
);
const CTASection = dynamic(
  () => import("@/components/cta-section").then((mod) => mod.CTASection),
  { ssr: true },
);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://holme-engineering.com",
  },
  openGraph: {
    title: "Holme Engineering — Maritime & Energy Systems",
    description:
      "Norwegian engineering excellence in power management, energy storage, and automation — 200+ systems delivered across 30+ countries.",
    url: "https://holme-engineering.com",
  },
  twitter: {
    title: "Holme Engineering — Maritime & Energy Systems",
    description:
      "Power management, energy storage & automation — Norwegian precision, globally deployed.",
  },
};

// ─── Page Export ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ScrollFeatureSection />
      <TestimonialsSection />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
