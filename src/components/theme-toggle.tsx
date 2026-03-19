"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const iconVariants = {
  initial: { opacity: 0, rotate: -120, scale: 0 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    rotate: 120,
    scale: 0,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-border-bright hover:bg-surface-elevated hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute flex items-center justify-center"
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute flex items-center justify-center"
          >
            <Sun className="h-4.5 w-4.5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
