import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground-secondary"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-lg border border-border-bright bg-border px-4 text-sm text-foreground placeholder:text-foreground/40 transition-all duration-200",
            "focus:border-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:bg-surface-elevated",
            error &&
              "border-red-500/50 focus:border-red-500 focus:ring-red-500/10",
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground-secondary"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "flex min-h-30 w-full rounded-lg border border-border-bright bg-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-all duration-200 resize-none",
            "focus:border-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:bg-surface-elevated",
            error &&
              "border-red-500/50 focus:border-red-500 focus:ring-red-500/10",
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
