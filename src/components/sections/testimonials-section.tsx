import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { testimonials } from "@/data/site-data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <Section dark>
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Trusted Worldwide"
            title="What Our Partners Say"
            dark
            large
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="h-full flex flex-col rounded-2xl border border-border bg-border p-6 lg:p-8">
                <Quote
                  className="h-6 w-6 text-cyan-500/40 mb-4"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground-muted italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/8">
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-foreground-dim mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
