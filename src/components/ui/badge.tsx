import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
        secondary:
          "bg-border text-foreground-secondary border border-border-bright",
        outline: "border border-border-bright text-foreground-muted",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs tracking-wide",
        md: "px-3.5 py-1 text-xs tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}
