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
  openGraph: {
    title: "Holme Engineering AS — Maritime & Energy Systems",
    description:
      "Norwegian engineering excellence in power management, energy storage, and automation — 200+ projects delivered across 30+ countries.",
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
