import { cn } from "@/lib/utils";

type IconBoxSize = "sm" | "md" | "lg";

const sizeMap: Record<IconBoxSize, { box: string; icon: string }> = {
  sm: { box: "h-10 w-10", icon: "h-4.5 w-4.5" },
  md: { box: "h-11 w-11", icon: "h-5 w-5" },
  lg: { box: "h-12 w-12", icon: "h-6 w-6" },
};

interface IconBoxProps {
  icon: React.ElementType;
  size?: IconBoxSize;
  className?: string;
  /** Use darker bg-border base instead of cyan tint */
  dark?: boolean;
  /** Add hover effect (needs parent `group` class) */
  hover?: boolean;
}

export function IconBox({
  icon: Icon,
  size = "md",
  className,
  dark = false,
  hover = false,
}: IconBoxProps) {
  const s = sizeMap[size];
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        dark ? "bg-border text-cyan-400" : "bg-cyan-500/10 text-cyan-400",
        hover &&
          "transition-all duration-200 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/20",
        s.box,
        className,
      )}
    >
      <Icon className={s.icon} aria-hidden="true" />
    </div>
  );
}
