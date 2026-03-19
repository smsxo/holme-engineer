import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
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
import { RelatedServices } from "@/components/related-services";
import { IconBox } from "@/components/ui/icon-box";
import { services, industries, projects } from "@/data/site-data";
import { CheckCircle2, ArrowLeft, Beaker } from "lucide-react";

// ─── Static params for build-time generation ────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ─── Dynamic metadata ───────────────────────────────────────
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Holme Engineering`,
    description: service.description,
    openGraph: {
      title: `${service.title} — Holme Engineering AS`,
      description: service.description,
    },
  };
}

// ─── Category labels ────────────────────────────────────────
const categoryLabels: Record<string, string> = {
  marine: "Marine Systems",
  ess: "Energy & Infrastructure",
  software: "Software & R&D",
};

// ─── Page component ─────────────────────────────────────────
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) =>
    service.relatedSlugs.includes(s.slug),
  );

  const relatedIndustries = industries.filter((ind) =>
    ind.relevantSlugs.includes(service.slug),
  );

  const relatedProjects = projects.filter((p) =>
    p.relevantSlugs.includes(service.slug),
  );

  const Icon = service.icon;

  return (
    <>
      <PageHero
        badge={`${categoryLabels[service.category]} — ${service.shortTitle}`}
        title={service.title.split(" ").slice(0, -1).join(" ")}
        titleHighlight={service.title.split(" ").pop() ?? ""}
        description={service.description}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* ── Visual + Overview ── */}
      <Section>
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Interactive Visual */}
              <ServiceVisual
                slug={service.slug}
                className="aspect-square max-h-120"
              />

              {/* Detailed Description */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <IconBox icon={Icon} size="lg" />
                  <Badge variant="secondary" size="md">
                    {service.shortTitle}
                  </Badge>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4">
                  System Overview
                </h2>
                <p className="text-base leading-relaxed text-foreground-muted mb-6">
                  {service.detailedDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {service.keyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border bg-surface-elevated p-4"
                    >
                      <div className="text-xl font-bold text-cyan-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-foreground-muted mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Developer Context ── */}
      <Section dark>
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                badge="How It Works"
                title="Technical Context"
                description="Understanding the engineering significance and system role."
                dark
                centered
              />

              <div className="mt-10 space-y-6">
                <Card>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    In Plain Terms
                  </h3>
                  <p className="text-base leading-relaxed text-foreground-muted">
                    {service.developerContext}
                  </p>
                </Card>

                <Card>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    Within the System
                  </h3>
                  <p className="text-base leading-relaxed text-foreground-muted">
                    {service.systemContext}
                  </p>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ── Capabilities ── */}
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeader
              badge="Capabilities"
              title="What We Deliver"
              description={`Core engineering capabilities of our ${service.title} solutions.`}
              large
            />
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <Card className="h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Visual Cues / What You'll See ── */}
      <Section dark>
        <Container>
          <AnimatedSection>
            <SectionHeader
              badge="Visual Identity"
              title="What This Looks Like"
              description="The real-world visual elements associated with this system."
              dark
              centered
            />
          </AnimatedSection>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {service.visualCues.map((cue) => (
              <StaggerItem key={cue}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-border p-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="text-sm text-foreground-muted">{cue}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── R&D Cross-reference (Autonomous only) ── */}
      {service.slug === "autonomous-marine-solutions" && (
        <Section>
          <Container>
            <AnimatedSection>
              <Card className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Beaker className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    Part of Our R&D Program
                  </h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    Autonomous Marine Solutions is a core focus of our Software
                    &amp; Product Development research initiative.
                  </p>
                </div>
                <Link
                  href="/research-development/software-product-dev"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-400 transition-colors duration-200 hover:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  Explore R&D
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </Card>
            </AnimatedSection>
          </Container>
        </Section>
      )}

      {/* ── Related Systems ── */}
      {relatedServices.length > 0 && (
        <Section dark>
          <Container>
            <AnimatedSection>
              <RelatedServices services={relatedServices} />
            </AnimatedSection>
          </Container>
        </Section>
      )}

      {/* ── Related Industries & Projects ── */}
      {(relatedIndustries.length > 0 || relatedProjects.length > 0) && (
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {relatedIndustries.length > 0 && (
                <AnimatedSection>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-6">
                    Industries Using {service.shortTitle}
                  </h3>
                  <div className="space-y-3">
                    {relatedIndustries.map((industry) => {
                      const IIcon = industry.icon;
                      return (
                        <Link
                          key={industry.title}
                          href="/industries"
                          className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-4 hover:border-border-bright transition-colors duration-200"
                        >
                          <IIcon
                            className="h-5 w-5 text-cyan-400 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-foreground">
                            {industry.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </AnimatedSection>
              )}
              {relatedProjects.length > 0 && (
                <AnimatedSection>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-6">
                    Projects Using {service.shortTitle}
                  </h3>
                  <div className="space-y-3">
                    {relatedProjects.map((project) => (
                      <Link
                        key={project.title}
                        href="/projects"
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-4 hover:border-border-bright transition-colors duration-200"
                      >
                        <Badge variant="default" size="sm">
                          {project.category}
                        </Badge>
                        <span className="text-sm font-medium text-foreground">
                          {project.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Back ── */}
      <Section dark>
        <Container>
          <AnimatedSection>
            <div className="text-center mb-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-cyan-400 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <CTASection
        title={`Need ${service.shortTitle} Expertise?`}
        description={`Our engineering team delivers proven ${service.title.toLowerCase()} solutions. Let's discuss your project requirements.`}
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "All Services", href: "/services" }}
      />
    </>
  );
}
