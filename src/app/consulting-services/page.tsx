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
import { Divider } from "@/components/ui/divider";
import { marineServices, essSolutions } from "@/data/site-data";
import Link from "next/link";

export default function ConsultingServicesPage() {
  return (
    <>
      <PageHero
        badge="Consulting Services"
        title="Engineering Consulting for"
        titleHighlight="Complex Systems"
        description="Holme Engineering provides specialized consulting services across maritime and energy sectors, with deep domain expertise in marine electrical systems and energy storage solutions."
      />

      {/* ── Marine Section ── */}
      <Section id="marine">
        <Container>
          <AnimatedSection>
            <SectionHeader
              badge="Marine"
              title="Comprehensive Marine Engineering"
              description="Our marine division delivers end-to-end consulting across all critical vessel systems — from propulsion to cyber security."
              large
            />
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 items-stretch">
            {marineServices.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <Card className="h-full">
                    <IconBox icon={Icon} />
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {service.description}
                    </p>
                    {service.relatedServiceSlugs &&
                      service.relatedServiceSlugs.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.relatedServiceSlugs.map((slug) => (
                            <Link
                              key={slug}
                              href={`/services/${slug}`}
                              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                            >
                              Learn more &rarr;
                            </Link>
                          ))}
                        </div>
                      )}
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Divider ── */}
      <div className="flex justify-center" aria-hidden="true">
        <Divider vertical className="h-16" />
      </div>

      {/* ── ESS Solutions Section ── */}
      <Section id="ess-solutions" dark>
        <Container>
          <AnimatedSection>
            <SectionHeader
              badge="ESS Solutions"
              title="Energy Storage for Critical Applications"
              description="Advanced energy storage solutions tailored for the unique demands of each sector — from data centers to critical infrastructure."
              large
            />
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 items-stretch">
            {essSolutions.map((solution, i) => {
              const Icon = solution.icon;
              const isLast =
                i === essSolutions.length - 1 && essSolutions.length % 2 !== 0;
              return (
                <StaggerItem
                  key={solution.title}
                  className={
                    isLast ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""
                  }
                >
                  <Card className="h-full">
                    <IconBox icon={Icon} />
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {solution.description}
                    </p>
                    {solution.relatedServiceSlug && (
                      <div className="mt-4">
                        <Link
                          href={`/services/${solution.relatedServiceSlug}`}
                          className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          Learn more &rarr;
                        </Link>
                      </div>
                    )}
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      <CTASection
        title="Need Engineering Consulting?"
        description="From marine systems to energy storage — our consulting team delivers proven solutions for complex engineering challenges worldwide."
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "About Us", href: "/about" }}
      />
    </>
  );
}
