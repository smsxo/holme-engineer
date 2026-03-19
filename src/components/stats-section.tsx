"use client";

import { Container } from "@/components/ui/container";
import { stats } from "@/data/site-data";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-background py-16 lg:py-20">
      <Container>
        <dl>
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <dd className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm font-medium text-foreground-dim lg:text-base">
                  {stat.label}
                </dt>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </dl>
      </Container>
    </section>
  );
}
