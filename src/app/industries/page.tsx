import Link from "next/link";
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
import { industries, services, projects } from "@/data/site-data";

interface IndustryStat {
  title: string;
  value: string;
  description: string;
}

function IndustriesGrid() {
  return (
    <Section>
      <Container>
        <div className="space-y-20 lg:space-y-24">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const industryProjects = projects.filter((p) =>
              p.relevantSlugs.some((slug) =>
                industry.relevantSlugs.includes(slug),
              ),
            );
            return (
              <AnimatedSection key={industry.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground">
                          {industry.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="rounded-2xl border border-border bg-border p-5 sm:p-6">
                      <h3 className="text-sm font-semibold text-foreground-secondary mb-4">
                        Relevant Solutions
                      </h3>
                      <div
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
                        role="list"
                      >
                        {services
                          .filter((s) => industry.relevantSlugs.includes(s.slug))
                          .map((service) => {
                          const SIcon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              role="listitem"
                              className="flex items-center gap-3 rounded-lg bg-surface p-3 border border-border hover:border-border-bright hover:bg-surface-elevated transition-all duration-200"
                            >
                              <SIcon
                                className="h-4 w-4 text-cyan-400 shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-foreground-secondary">
                                {service.shortTitle}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      {industryProjects.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-dim mb-3">
                            Related Projects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {industryProjects.map((project) => (
                              <Link
                                key={project.title}
                                href="/projects"
                                className="inline-flex items-center rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground-muted border border-border hover:border-border-bright hover:text-foreground transition-colors duration-200"
                              >
                                {project.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {i < industries.length - 1 && (
                  <div
                    className="mt-20 lg:mt-24 border-b border-border"
                    aria-hidden="true"
                  />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function IndustryStats() {
  const industryStats: IndustryStat[] = [
    {
      title: "Maritime Vessels Powered",
      value: "150+",
      description:
        "Cargo ships, tankers, and offshore support vessels running our PMS and automation systems.",
    },
    {
      title: "Shore Power Installations",
      value: "20+",
      description:
        "Major ports equipped with our cold ironing solutions for emission-free berthing.",
    },
    {
      title: "Critical Facilities Protected",
      value: "35+",
      description:
        "Hospitals, data centers, and government facilities with zero-downtime micro grid power.",
    },
  ];

  return (
    <Section dark>
      <Container>
        <AnimatedSection className="mb-16">
          <SectionHeader
            badge="By the Numbers"
            title="Industry Impact"
            dark
            centered
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {industryStats.map((stat) => (
            <StaggerItem key={stat.title}>
              <div className="h-full flex flex-col rounded-2xl border border-border bg-border p-8 text-center">
                <div className="text-4xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="Powering Critical"
        titleHighlight="Industries Worldwide"
        description="Our engineering solutions operate in the most demanding environments — from Arctic waters to offshore platforms to critical infrastructure facilities."
      />
      <IndustriesGrid />
      <IndustryStats />
      <CTASection
        title="Operating in Your Industry?"
        description="Let's discuss how our engineering solutions can meet your sector's unique challenges."
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
