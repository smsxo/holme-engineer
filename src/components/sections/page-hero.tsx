import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/ui/breadcrumb";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/6 rounded-full blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="page-hero-animate max-w-3xl">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          <Badge variant="default" size="md">
            {badge}
          </Badge>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {title}{" "}
            <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted max-w-2xl sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
