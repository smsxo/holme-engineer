import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { jobOpenings, benefits } from "@/data/site-data";
import {
  MapPin,
  Clock,
  Building,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function WhyJoinSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <SectionHeader
              badge="Why Holme Engineering"
              title="Where Engineering Meets Impact"
              className="max-w-none"
            />
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              At Holme Engineering, you won&apos;t just write specs and run
              simulations — you&apos;ll see your work deployed on real vessels,
              in real ports, and at critical facilities around the world.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-foreground-muted">
              We foster a culture of technical excellence, curiosity, and
              ownership. Our engineers work on challenging problems with global
              impact.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-border bg-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Benefits & Perks
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-foreground-muted"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-cyan-400"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}

function OpeningsSection() {
  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Open Positions"
            title="Current Openings"
            description="We're looking for talented engineers, developers, and project leaders to join our growing team."
            className="max-w-xl"
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 space-y-4">
          {jobOpenings.map((job) => (
            <StaggerItem key={job.title}>
              <Card className="group">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {job.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-foreground-dim">
                      <span className="inline-flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button variant="outline" size="sm" href="/contact">
                      Apply
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Build the Future of"
        titleHighlight="Maritime Technology"
        description="Join a team of world-class engineers working on cutting-edge power systems, energy storage, and autonomous solutions that shape the future of maritime and energy industries."
      />
      <WhyJoinSection />
      <OpeningsSection />
      <CTASection
        title="Don't See the Right Role?"
        description="We're always interested in hearing from talented people. Send us your CV and tell us what you're passionate about."
        primaryAction={{ label: "Work With Us", href: "/contact" }}
        secondaryAction={{ label: "About Us", href: "/about" }}
      />
    </>
  );
}
