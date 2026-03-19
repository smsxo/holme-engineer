import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { projects, services } from "@/data/site-data";

function ProjectsGrid() {
  return (
    <Section>
      <Container>
        <h2 className="sr-only">All Projects</h2>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project) => {
            const relatedServices = services.filter((s) =>
              project.relevantSlugs.includes(s.slug),
            );
            return (
            <StaggerItem key={project.title}>
              <Card className="group h-full overflow-hidden p-0">
                {/* Image placeholder */}
                <div className="aspect-16/10 bg-linear-to-br from-border to-border-bright border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-surface/30 group-hover:bg-transparent transition-colors duration-200" />
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="default" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {project.description}
                  </p>
                  {/* Specs */}
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center rounded-md bg-border px-2.5 py-1 text-xs font-medium text-foreground-muted border border-border"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  {/* Technologies Used */}
                  {relatedServices.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-1.5">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

function HighlightSection() {
  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="default">Featured Project</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nordic Green Port Initiative
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                Our flagship shore connection project enabled one of
                Scandinavia&apos;s largest ports to achieve near-zero emissions
                from berthed vessels. The system handles over 200 vessel
                connections per year with a 16 MW high-voltage shore power
                supply.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "16 MW", label: "Shore Power" },
                  { value: "200+", label: "Vessels/Year" },
                  { value: "98%", label: "Emission Reduction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-cyan-400 lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-foreground-dim sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="aspect-4/3 rounded-2xl bg-linear-to-br from-border to-border-bright border border-border flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-foreground/10">HE</div>
                <p className="mt-2 text-sm text-foreground/40">
                  Project Showcase
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Our Projects"
        title="Proven Results,"
        titleHighlight="Global Impact"
        description="Explore selected projects showcasing our engineering capabilities across power management, energy storage, automation, and sustainability."
      />
      <ProjectsGrid />
      <HighlightSection />
      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss how our engineering expertise can bring your next project to life."
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
