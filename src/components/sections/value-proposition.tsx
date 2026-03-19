import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { services, marineServices, essSolutions } from "@/data/site-data";
import { Wrench, ArrowRight, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "What We Build",
    description:
      "Power management, energy storage, integrated automation, and autonomous marine systems — engineered for mission-critical operations.",
    items: services.slice(0, 4).map((s) => s.shortTitle),
  },
  {
    icon: Wrench,
    title: "How We Deliver",
    description:
      "From marine consulting and commissioning to system design and cyber security — deep domain expertise at every project stage.",
    items: marineServices.slice(0, 4).map((s) => s.title.split(",")[0].trim()),
  },
  {
    icon: ArrowRight,
    title: "Where We Apply",
    description:
      "Maritime vessels, offshore platforms, shore-side infrastructure, data centers, hospitals, and renewable energy installations worldwide.",
    items: essSolutions.slice(0, 4).map((s) => s.title),
  },
];

export function ValueProposition() {
  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Why Holme Engineering"
            title="End-to-End Engineering Excellence"
            description="Norwegian precision meets global scale — from concept to commissioning across maritime and energy infrastructure."
            large
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <Card className="group h-full">
                <IconBox icon={pillar.icon} hover />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {pillar.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground-dim"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
