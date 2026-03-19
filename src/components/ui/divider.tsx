import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  /** Vertical divider (w-px) vs horizontal (h-px, default) */
  vertical?: boolean;
}

export function Divider({ className, vertical = false }: DividerProps) {
  return (
    <div
      className={cn(
        vertical
          ? "w-px bg-linear-to-b from-transparent via-cyan-500/15 to-transparent"
          : "h-px bg-linear-to-r from-transparent via-cyan-500/15 to-transparent",
        className,
      )}
      aria-hidden="true"
    />
  );
}
