import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { IconBox } from "@/components/ui/icon-box";
import { ArrowRight, Code2, Bot } from "lucide-react";

export default function ResearchDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="R&D"
        title="Research &"
        titleHighlight="Development"
        description="Pushing the boundaries of autonomous marine systems — from software product development to next-generation maritime technology."
        breadcrumbs={[{ label: "Research & Development" }]}
      />
      <Section>
        <Container>
          {/* ── Software & Product Dev block (parent) ── */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/research-development/software-product-dev"
                className="group block"
              >
                <Card className="relative overflow-hidden border-dashed border-cyan-500/20">
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-200 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                      <Code2 className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                        Software & Product Dev
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                        Our software and product development division pioneers
                        autonomous marine solutions — combining AI, sensor
                        fusion, and advanced navigation into the next generation
                        of maritime technology.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                        Explore Software & Product Dev
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* ── Visual connector: Software & Product Dev → Autonomous Marine Solutions ── */}
              <div
                className="flex flex-col items-center my-4"
                aria-hidden="true"
              >
                <div className="w-px h-8 bg-linear-to-b from-cyan-500/40 to-cyan-500/20" />
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/30" />
                <div className="w-px h-4 bg-linear-to-b from-cyan-500/20 to-transparent" />
              </div>

              {/* ── Autonomous Marine Solutions (child) ── */}
              <Link
                href="/research-development/software-product-dev"
                className="group block"
              >
                <Card className="rounded-2xl">
                  <div className="flex items-start gap-5">
                    <IconBox icon={Bot} size="lg" hover className="shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                        Autonomous Marine Solutions
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                        Cutting-edge technology for self-driving and remotely
                        controlled vessels, leveraging sensors, AI, and advanced
                        navigation systems.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <CTASection
        title="Explore Our Technology"
        description="Discover how our R&D initiatives are shaping the future of autonomous marine operations and intelligent energy systems."
        primaryAction={{ label: "Explore Technology", href: "/contact" }}
        secondaryAction={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
