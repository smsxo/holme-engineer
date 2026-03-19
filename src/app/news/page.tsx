import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site-data";
import { Linkedin, Bell } from "lucide-react";

export default function NewsPage() {
  return (
    <>
      <PageHero
        badge="News"
        title="Latest from"
        titleHighlight="Holme Engineering"
        description="Stay informed about our latest projects, technological breakthroughs, and company developments in maritime and energy engineering."
      />
      <Section>
        <Container>
          <AnimatedSection>
            <div className="max-w-lg mx-auto text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 mb-6">
                <Bell className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Coming Soon
              </h2>
              <p className="mt-3 text-base text-foreground-muted leading-relaxed">
                We&apos;re preparing our news section. In the meantime, follow
                us on LinkedIn for the latest project updates and company
                developments.
              </p>
              <div className="mt-8">
                <Button
                  href={company.social.linkedin}
                  variant="secondary"
                  size="md"
                >
                  <Linkedin className="h-4 w-4" />
                  Follow on LinkedIn
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
