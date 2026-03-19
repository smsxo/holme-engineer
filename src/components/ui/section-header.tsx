import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  /** Center-align text and constrain width (default: false → left-aligned) */
  centered?: boolean;
  /** Dark section variant — adjusts badge + text colors */
  dark?: boolean;
  /** Larger heading scale for primary sections */
  large?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  dark = false,
  large = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        centered ? "text-center mx-auto max-w-xl" : "max-w-2xl",
        className,
      )}
    >
      <Badge variant="default">{badge}</Badge>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
          large && "lg:text-5xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
