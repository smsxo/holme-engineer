import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { projects } from "@/data/site-data";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Featured Work"
            title="Projects That Define Us"
            description="A selection of projects that showcase our engineering capabilities across maritime, energy, and critical infrastructure."
            dark
            large
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {featured.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group h-full">
                {/* Visual placeholder — gradient based on category */}
                <div className="h-40 -mx-6 -mt-6 mb-5 rounded-t-2xl bg-linear-to-br from-cyan-500/10 via-surface-elevated to-surface flex items-end px-5 pb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-cyan-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {project.description.slice(0, 140)}…
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.specs.map((spec) => (
                    <li
                      key={spec}
                      className="rounded-full bg-cyan-500/8 px-2.5 py-0.5 text-xs font-medium text-cyan-300"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Button href="/projects" variant="outline" size="md">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
