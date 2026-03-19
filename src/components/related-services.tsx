import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import type { Service } from "@/types";

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-6">
        Related Systems
      </h3>
      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
              >
                <Card className="h-full transition-colors duration-200 group-hover:border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <IconBox icon={Icon} size="sm" hover className="shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-200">
                        {service.title}
                      </h4>
                      <p className="mt-1 text-xs text-foreground-muted line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
