"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { services } from "@/data/site-data";

// Derive scroll features from the first 4 services (PMS, ESS, IAS, Propulsion)
const features = services.slice(0, 4).map((s) => ({
  icon: s.icon,
  label: s.shortTitle,
  title: s.title,
  tagline: s.description.split(/\.\s/)[0] + ".",
  description: s.description.split(/\.\s/).slice(1).join(". ") || s.description,
  highlights: s.features.slice(0, 3),
  slug: s.slug,
}));

/**
 * ScrollFeatureSection
 *
 * Scroll-driven storytelling section inspired by karabharat's CodePen (wBWKXLp).
 *
 * Layout:
 *   Left column  — scrollable feature descriptions (each ~100vh tall)
 *   Right column — sticky visual area that transitions between feature visuals
 *
 * Scroll behavior:
 *   IntersectionObserver tracks which left-side feature block is most visible.
 *   The right-side visual crossfades to the matching feature's icon/graphic.
 *   Text content animates in/out with blur + translate + opacity transitions.
 *
 * Performance:
 *   - No animation libraries; pure CSS transitions + IntersectionObserver
 *   - GPU-friendly transforms (translate, scale, opacity)
 *   - No layout shifts; all animated properties are composite-only
 *   - Observer disconnects on unmount
 *
 * Responsiveness:
 *   - Desktop: two-column sticky layout
 *   - Mobile: stacked single-column with simpler transitions
 */
export function ScrollFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSectionRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      sectionRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;

    // Only run on desktop (lg breakpoint = 1024px)
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    // Track which section is most in-view
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best) {
          const idx = sections.indexOf(best.target as HTMLDivElement);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      {
        // Multiple thresholds for fine-grained detection
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-surface">
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/15 to-transparent"
        aria-hidden="true"
      />

      {/* ── Mobile: stacked cards ─────────────────────────── */}
      <div className="lg:hidden px-6 py-24">
        <div className="mx-auto max-w-lg space-y-8">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-400">
                <feature.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {feature.label}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">
                {feature.tagline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {feature.description}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {feature.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-foreground-dim"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop two-column layout ──────────────────────── */}
      <div className="mx-auto hidden max-w-7xl lg:grid lg:grid-cols-2">
        {/* LEFT: Scrollable text content */}
        <div className="relative z-10 px-6 lg:px-12">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              ref={(el) => setSectionRef(el, i)}
              className="flex min-h-[70vh] flex-col justify-center py-20 lg:min-h-screen lg:py-24"
            >
              <div
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: activeIndex === i ? 1 : 0.2,
                  filter: activeIndex === i ? "blur(0px)" : "blur(6px)",
                  transform:
                    activeIndex === i
                      ? "translateY(0) scale(1)"
                      : activeIndex > i
                        ? "translateY(-20px) scale(0.97)"
                        : "translateY(20px) scale(0.97)",
                }}
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-400">
                  <feature.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {feature.label}
                </span>

                {/* Tagline */}
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-foreground-dim sm:text-3xl lg:text-4xl lg:leading-[1.15]">
                  {feature.tagline}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-md border-l-2 border-cyan-500/30 pl-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 flex flex-col gap-2">
                  {feature.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-foreground-dim"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky visual panel (desktop only) */}
        <div
          className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:items-center lg:justify-center lg:border-l lg:border-white/5"
          aria-hidden="true"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] transition-all duration-1000"
              style={{
                transform: `translate(-50%, -50%) scale(${1 + activeIndex * 0.08})`,
              }}
            />
          </div>

          {/* Feature visuals — crossfade */}
          <div className="relative h-80 w-80">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = activeIndex === i;

              return (
                <div
                  key={feature.label}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0) scale(1)"
                      : i < activeIndex
                        ? "translateY(-30px) scale(1.05)"
                        : "translateY(30px) scale(0.9)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* Large icon with glow ring */}
                  <div className="relative flex h-32 w-32 items-center justify-center">
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 shadow-[0_0_60px_rgba(6,182,212,0.08)]" />
                    <div className="absolute inset-2 rounded-full border border-cyan-500/10" />
                    <Icon
                      className="h-14 w-14 text-cyan-400"
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Title */}
                  <p className="text-center text-lg font-semibold text-foreground">
                    {feature.title}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {feature.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-foreground-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vertical progress indicator */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-white/5">
            <div
              className="w-full bg-cyan-500/60 transition-all duration-700 ease-out"
              style={{
                height: `${((activeIndex + 1) / features.length) * 100}%`,
              }}
            />
          </div>

          {/* Step dots */}
          <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-4">
            {features.map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 transition-all duration-500"
              >
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500"
                  style={{
                    opacity: activeIndex === i ? 0.8 : 0,
                    transform:
                      activeIndex === i ? "translateX(0)" : "translateX(8px)",
                    color: "var(--fg-dim)",
                  }}
                >
                  {features[i].label}
                </span>
                <div
                  className="h-2 w-2 rounded-full border transition-all duration-500"
                  style={{
                    borderColor:
                      activeIndex === i
                        ? "rgb(6, 182, 212)"
                        : "rgba(255,255,255,0.12)",
                    backgroundColor:
                      activeIndex === i ? "rgb(6, 182, 212)" : "transparent",
                    transform: activeIndex === i ? "scale(1.3)" : "scale(1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/15 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
