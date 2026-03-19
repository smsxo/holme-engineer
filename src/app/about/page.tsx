import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { values } from "@/data/site-data";
import { Users, Clock, MapPin, ArrowRight } from "lucide-react";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "Foundation",
    title: "Norwegian Roots",
    description:
      "Founded with a vision to bring Norwegian engineering excellence to the global maritime and energy sectors.",
  },
  {
    year: "Growth",
    title: "Expanding Capabilities",
    description:
      "Developed our core competencies in PMS, ESS, and IAS — establishing ourselves as a trusted engineering partner.",
  },
  {
    year: "Innovation",
    title: "Green Transition Leader",
    description:
      "Pioneered shore connection systems and micro grids, enabling emission-free port operations and resilient infrastructure.",
  },
  {
    year: "Today",
    title: "Global Impact",
    description:
      "Operating across 30+ countries with 200+ projects delivered, pushing the boundaries of autonomous marine solutions and AI-driven systems.",
  },
];

function MissionSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <SectionHeader
              badge="Our Mission"
              title="Enabling Cleaner, Smarter Operations at Sea and on Shore"
              className="max-w-none"
            />
            <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
              We exist to bridge the gap between cutting-edge technology and
              real-world engineering challenges. From reducing emissions in port
              cities to ensuring zero-downtime power for hospitals, our
              solutions are designed to make a measurable difference.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
              Grounded in Norwegian maritime tradition and propelled by
              innovation, we approach every project with rigorous technical
              discipline and a commitment to long-term sustainability.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 items-stretch">
              {[
                {
                  icon: Users,
                  label: "50+ Engineers",
                  description: "Experienced multidisciplinary team",
                },
                {
                  icon: MapPin,
                  label: "30+ Countries",
                  description: "Global project deployment",
                },
                {
                  icon: Clock,
                  label: "99.9% Uptime",
                  description: "Industry-leading reliability",
                },
                {
                  icon: ArrowRight,
                  label: "200+ Projects",
                  description: "Successfully delivered worldwide",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="h-full flex flex-col rounded-xl border border-border bg-border p-5 transition-all duration-200 hover:bg-border-bright hover:border-border-bright hover:shadow-lg hover:shadow-black/20"
                  >
                    <Icon
                      className="h-5 w-5 text-cyan-400"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-lg font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Our Journey"
            title="From Norway to the World"
            centered
          />
        </AnimatedSection>

        <div className="mt-12 max-w-3xl mx-auto">
          <StaggerContainer className="relative space-y-0">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-border-bright lg:left-1/2 lg:-translate-x-px"
              aria-hidden="true"
            />

            {timeline.map((item, i) => (
              <StaggerItem key={item.year}>
                <div className="relative flex items-start gap-6 pb-12 lg:gap-0">
                  {/* Dot */}
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-background lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold text-cyan-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:w-[calc(50%-40px)] ${
                      i % 2 === 0
                        ? "lg:pr-0 lg:text-right lg:ml-0 lg:mr-auto"
                        : "lg:pl-0 lg:text-left lg:ml-auto lg:mr-0"
                    }`}
                  >
                    <span className="text-sm font-semibold text-cyan-400">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}

function ValuesSection() {
  return (
    <Section>
      <Container>
        <AnimatedSection>
          <SectionHeader badge="Our Values" title="What Drives Us" centered />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <div className="h-full flex flex-col text-center p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Engineering a"
        titleHighlight="Sustainable Future"
        description="Holme Engineering AS is a Norwegian engineering company specializing in advanced power management, energy storage, automation, and autonomous solutions for the maritime and energy industries."
      />
      <MissionSection />
      <TimelineSection />
      <ValuesSection />
      <CTASection
        title="Join Our Team"
        description="We're always looking for talented engineers and innovators to push the boundaries of maritime technology."
        primaryAction={{ label: "View Open Positions", href: "/careers" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
