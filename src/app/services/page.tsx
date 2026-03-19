import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceVisual } from "@/components/features/service-visual";
import { IconBox } from "@/components/ui/icon-box";
import { services } from "@/data/site-data";
import {
  CheckCircle2,
  ArrowRight,
  Anchor,
  Battery as BatteryIcon,
  Code2,
} from "lucide-react";
import type { ServiceCategory } from "@/types";

const categoryConfig: Record<
  ServiceCategory,
  { icon: React.ElementType; label: string; description: string }
> = {
  marine: {
    icon: Anchor,
    label: "Marine Systems",
    description:
      "Power management, automation, and performance monitoring for vessels and offshore installations.",
  },
  ess: {
    icon: BatteryIcon,
    label: "Energy & Infrastructure",
    description:
      "Energy storage, shore power, and resilient micro grids for critical applications.",
  },
  software: {
    icon: Code2,
    label: "Software & R&D",
    description:
      "Autonomous navigation, AI-driven systems, and next-generation maritime technology.",
  },
};

const categoryOrder: ServiceCategory[] = ["marine", "ess", "software"];

function ServicesList() {
  return (
    <>
      {categoryOrder.map((category) => {
        const config = categoryConfig[category];
        const categoryServices = services.filter(
          (s) => s.category === category,
        );
        if (categoryServices.length === 0) return null;
        const CategoryIcon = config.icon;

        return (
          <Section key={category} id={category}>
            <Container>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-2">
                  <IconBox icon={CategoryIcon} size="sm" />
                  <Badge variant="secondary" size="md">
                    {config.label}
                  </Badge>
                </div>
                <p className="text-sm text-foreground-muted mb-10 ml-13">
                  {config.description}
                </p>
              </AnimatedSection>

              <div className="space-y-20 lg:space-y-28">
                {categoryServices.map((service, i) => {
                  const Icon = service.icon;
                  const isEven = i % 2 === 0;
                  return (
                    <AnimatedSection key={service.slug} delay={0.05}>
                      <div
                        className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center`}
                      >
                        <div className={!isEven ? "lg:order-2" : ""}>
                          <div className="flex items-center gap-3">
                            <IconBox icon={Icon} size="lg" />
                            <Badge variant="secondary" size="md">
                              {service.shortTitle}
                            </Badge>
                          </div>
                          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            {service.title}
                          </h2>
                          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                            {service.description}
                          </p>
                          <ul className="mt-6 space-y-3" role="list">
                            {service.features.slice(0, 3).map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-sm text-foreground-muted"
                              >
                                <CheckCircle2
                                  className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5"
                                  aria-hidden="true"
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                          >
                            View full details
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>

                        <div className={!isEven ? "lg:order-1" : ""}>
                          <ServiceVisual
                            slug={service.slug}
                            className="aspect-square max-h-100"
                          />
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We begin with a thorough assessment of your operational requirements, existing systems, and project constraints.",
    },
    {
      step: "02",
      title: "System Design",
      description:
        "Our engineers develop detailed system architectures, selecting optimal components and designing for reliability and maintainability.",
    },
    {
      step: "03",
      title: "Engineering & Integration",
      description:
        "We build, test, and integrate systems at our facilities before deployment, ensuring quality at every stage.",
    },
    {
      step: "04",
      title: "Commissioning & Support",
      description:
        "On-site commissioning with comprehensive testing, followed by ongoing technical support and optimization.",
    },
  ];

  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Our Process"
            title="How We Deliver"
            description="A disciplined engineering process that ensures quality, reliability, and timely delivery on every project."
            centered
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <Card className="h-full text-center">
                <span className="text-4xl font-bold text-cyan-500/15">
                  {s.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {s.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

// ─── System Interconnections ────────────────────────────────
function SystemInterconnections() {
  const connections = [
    {
      from: "PMS",
      to: "ESS",
      description:
        "PMS commands ESS charging/discharging for peak-shaving and backup power",
    },
    {
      from: "PMS",
      to: "IAS",
      description:
        "PMS reports power status to IAS for unified bridge monitoring",
    },
    {
      from: "ESS",
      to: "Micro Grids",
      description:
        "ESS provides the energy buffer that enables renewable intermittency in micro grids",
    },
    {
      from: "ESS",
      to: "Shore Power",
      description:
        "ESS bridges power during shore-to-generator and generator-to-shore transitions",
    },
    {
      from: "Propulsion",
      to: "PMS",
      description:
        "Propulsion monitoring feeds efficiency data back to PMS for power optimization",
    },
    {
      from: "Autonomous",
      to: "IAS",
      description:
        "Autonomous systems leverage IAS for vessel health monitoring and subsystem control",
    },
  ];

  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="System Architecture"
            title="How Everything Connects"
            description="Our solutions form an integrated ecosystem — each system communicates with and enhances the others."
            centered
            large
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {connections.map((conn) => (
            <StaggerItem key={`${conn.from}-${conn.to}`}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                    {conn.from}
                  </span>
                  <span className="text-foreground-dim">→</span>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                    {conn.to}
                  </span>
                </div>
                <p className="text-sm text-foreground-muted">
                  {conn.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Engineering Solutions for"
        titleHighlight="Complex Challenges"
        description="From power management systems to autonomous navigation, we deliver the full spectrum of electrical and automation engineering for the world's most demanding industries."
      />
      <ServicesList />
      <SystemInterconnections />
      <ProcessSection />
      <CTASection />
    </>
  );
}
