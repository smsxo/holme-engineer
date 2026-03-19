"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyThemeClass(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  document.documentElement.classList.toggle("light", next === "light");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored || "dark";
    setTheme(initial);
    applyThemeClass(initial);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      if (isAnimating.current) return;

      const next = theme === "dark" ? "light" : "dark";

      // Get origin point from click event or fallback to top-right
      const x = event?.clientX ?? window.innerWidth - 60;
      const y = event?.clientY ?? 36;

      // Calculate the maximum radius needed to cover the entire viewport
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // Try the View Transition API for the smoothest experience
      const supportsViewTransition =
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (supportsViewTransition) {
        isAnimating.current = true;

        // Set the CSS custom property for the animation origin
        document.documentElement.style.setProperty("--ripple-x", `${x}px`);
        document.documentElement.style.setProperty("--ripple-y", `${y}px`);
        document.documentElement.style.setProperty(
          "--ripple-radius",
          `${maxRadius}px`,
        );

        const transition = (
          document as unknown as {
            startViewTransition: (cb: () => void) => {
              ready: Promise<void>;
              finished: Promise<void>;
            };
          }
        ).startViewTransition(() => {
          localStorage.setItem("theme", next);
          applyThemeClass(next);
          setTheme(next);
        });

        transition.ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 500,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: "::view-transition-new(root)",
            },
          );
        });

        transition.finished.then(() => {
          isAnimating.current = false;
        });
      } else {
        // Fallback: use clip-path overlay for browsers without View Transition API
        isAnimating.current = true;

        // Create an overlay that captures the NEW theme appearance
        const overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          inset: 0;
          z-index: 99999;
          pointer-events: none;
          clip-path: circle(0px at ${x}px ${y}px);
          transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          background: ${next === "dark" ? "#0a0a0f" : "#ffffff"};
        `;
        document.body.appendChild(overlay);

        // Trigger the expanding circle
        requestAnimationFrame(() => {
          overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
        });

        // Halfway through the animation, apply the actual theme
        setTimeout(() => {
          localStorage.setItem("theme", next);
          applyThemeClass(next);
          setTheme(next);
        }, 200);

        // Clean up overlay after animation
        setTimeout(() => {
          overlay.remove();
          isAnimating.current = false;
        }, 550);
      }
    },
    [theme],
  );

  return (
    <ThemeContext value={{ theme: mounted ? theme : "dark", toggleTheme }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
