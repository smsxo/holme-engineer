import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { IconBox } from "@/components/ui/icon-box";
import { services } from "@/data/site-data";
import { Radar, Brain, Navigation2 } from "lucide-react";

const autonomousService = services.find(
  (s) => s.slug === "autonomous-marine-solutions",
)!;

function AutonomousMarineSolutions() {
  const capabilities = [
    {
      icon: Radar,
      title: "Sensor Fusion & Situational Awareness",
      description:
        "Integrating lidar, camera, radar, and AIS data into a unified situational picture for autonomous decision-making.",
    },
    {
      icon: Brain,
      title: "AI-Driven Navigation",
      description:
        "Machine learning algorithms for autonomous path planning, collision avoidance, and adaptive route optimization.",
    },
    {
      icon: Navigation2,
      title: "Remote Operations Center",
      description:
        "Shore-based monitoring and control systems for supervising autonomous vessel operations in real-time.",
    },
  ];

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge={autonomousService.title}
            title="The Future of Maritime Operations"
            description={
              autonomousService.detailedDescription
                .split(". ")
                .slice(0, 2)
                .join(". ") + "."
            }
            large
          />
        </AnimatedSection>

        {/* ── Visual connector: Software & Product Dev → Autonomous Marine Solutions ── */}
        <div
          className="flex flex-col items-center mt-10 mb-6"
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-linear-to-b from-cyan-500/40 to-cyan-500/20" />
          <div className="h-2 w-2 rounded-full bg-cyan-500/40" />
        </div>

        <AnimatedSection delay={0.1}>
          <Card className="border-cyan-500/20 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <autonomousService.icon
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {autonomousService.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                  {autonomousService.description}
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 items-stretch">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <StaggerItem key={cap.title}>
                <Card className="h-full">
                  <IconBox icon={Icon} />
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {cap.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export default function SoftwareProductDevPage() {
  return (
    <>
      <PageHero
        badge="R&D — Software & Product Dev"
        title="Software &"
        titleHighlight="Product Development"
        description="Our software and product development division pioneers autonomous marine solutions — combining AI, sensor fusion, and advanced navigation into the next generation of maritime technology."
        breadcrumbs={[
          { label: "R&D", href: "/research-development" },
          { label: "Software & Product Dev" },
        ]}
      />
      <AutonomousMarineSolutions />
      <CTASection
        title="Interested in Autonomous Solutions?"
        description="Partner with us to bring autonomous marine technology to your fleet. From concept to deployment, we engineer the future."
        primaryAction={{ label: "Explore Technology", href: "/contact" }}
        secondaryAction={{
          label: "R&D Overview",
          href: "/research-development",
        }}
      />
    </>
  );
}
