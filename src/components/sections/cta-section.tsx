import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

interface CTAAction {
  label: string;
  href: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
}

export function CTASection({
  title = "Ready to Power Your Next Project?",
  description = "Let's discuss how our engineering solutions can optimize your operations, reduce emissions, and deliver lasting reliability.",
  primaryAction = { label: "Start a Project", href: "/contact" },
  secondaryAction = { label: "View Our Services", href: "/services" },
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/8 rounded-full blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={primaryAction.href} variant="primary" size="lg">
              {primaryAction.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={secondaryAction.href} variant="outline" size="lg">
              {secondaryAction.label}
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
