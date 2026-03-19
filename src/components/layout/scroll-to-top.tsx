"use client";

import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function ScrollToTop() {
  const show = useScrollPosition(400);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4.5 w-4.5" />
    </button>
  );
}
