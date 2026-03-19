import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroAnimation } from "@/components/hero-animation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-background">
      {/* Animated 3D panels background layer */}
      <HeroAnimation />

      {/* Layered background effects */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-150 bg-cyan-500/8 rounded-full blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-0 w-150 h-100 bg-purple-500/5 rounded-full blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-animate-1">
            <Badge variant="default" size="md">
              Norwegian Engineering Excellence
            </Badge>
          </div>

          <h1 className="hero-animate-2 mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Powering the Future of{" "}
            <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              Maritime & Energy
            </span>{" "}
            Systems
          </h1>

          <p className="hero-animate-3 mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg lg:text-xl max-w-2xl mx-auto">
            We design and deliver advanced power management, energy storage, and
            automation solutions — reducing emissions and optimizing operations
            across the globe.
          </p>

          <div className="hero-animate-4 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/services" variant="primary" size="xl">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="xl"
              className="text-foreground-muted hover:text-foreground hover:bg-border"
            >
              Learn About Holme
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-animate-scroll absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 animate-[bounce-subtle_2.5s_ease-in-out_infinite]">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-dim">
              Scroll
            </span>
            <div className="h-8 w-px bg-linear-to-b from-foreground-dim to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
