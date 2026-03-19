import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "card-elevated h-full flex flex-col rounded-2xl border border-border bg-surface p-6 lg:p-8",
        hover &&
          "transition-all duration-200 hover:border-border-bright hover:bg-surface-elevated hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
