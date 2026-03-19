"use client";

import { useEffect, useRef, useCallback } from "react";
import { Container } from "@/components/ui/container";

// ─── Configuration ──────────────────────────────────────────
const FILL_TEXT =
  "We don't just build systems — we engineer the future of maritime and energy infrastructure. Every connection is deliberate, every solution optimized, and precision is the language that powers operations across 30+ countries worldwide.";

/**
 * InteractiveAnimationSection
 *
 * Scroll-driven text-fill reveal inspired by cameronknight's CodePen (GgqKPZq).
 *
 * Each word starts muted and progressively fills with a bright gradient as the
 * section scrolls into and through the viewport. Uses background-clip: text with
 * an animated background-size, driven by scroll position via IntersectionObserver
 * + requestAnimationFrame — no heavy animation libraries needed.
 *
 * - Words reveal sequentially as scroll progresses
 * - GPU-friendly: only background-size changes per word (composite-friendly)
 * - Pauses when tab is inactive (rAF naturally stops)
 * - Respects prefers-reduced-motion
 */
export function InteractiveAnimationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  // Store word refs in array
  const setWordRef = useCallback(
    (el: HTMLSpanElement | null, index: number) => {
      if (el) wordsRef.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordsRef.current.forEach((word) => {
        word.style.backgroundSize = "200% 200%";
      });
      return;
    }

    // ── Scroll-driven update ─────────────────────────────
    const update = () => {
      if (!isVisibleRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Progress: 0 when section top hits 80% of viewport,
      //           1 when section bottom hits 35% of viewport
      const start = vh * 0.8;
      const end = vh * 0.3;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end + rect.height)),
      );

      const words = wordsRef.current;
      const count = words.length;

      for (let i = 0; i < count; i++) {
        // Each word fills over a portion of the total progress
        const wordStart = i / count;
        const wordEnd = (i + 1.8) / count; // slight overlap for smoother feel
        const wordProgress = Math.min(
          1,
          Math.max(0, (progress - wordStart) / (wordEnd - wordStart)),
        );

        // background-size from 0% (muted) to 200% (fully revealed)
        const size = wordProgress * 200;
        words[i].style.backgroundSize = `${size}% 200%`;
      }

      rafRef.current = requestAnimationFrame(update);
    };

    // ── Intersection Observer: only run when section is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          rafRef.current = requestAnimationFrame(update);
        } else {
          cancelAnimationFrame(rafRef.current);
        }
      },
      { rootMargin: "100px 0px" },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const words = FILL_TEXT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-32 md:py-44 lg:py-56 overflow-hidden"
    >
      {/* Subtle top/bottom fade borders */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/15 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/15 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <p className="fill-text mx-auto max-w-4xl text-center text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {words.map((word, i) => (
            <span key={i} ref={(el) => setWordRef(el, i)} className="fill-word">
              {word}{" "}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
