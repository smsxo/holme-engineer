/** Shared easing curve — easeOutQuart for smooth deceleration */
export const EASE_OUT_QUART = [0.25, 0.46, 0.45, 0.94] as const;

/** Animation configuration used across all scroll-triggered reveals */
export const ANIMATION = {
  /** Standard entrance duration (seconds) */
  duration: 0.7,
  /** Stagger child item duration (seconds) */
  staggerDuration: 0.55,
  /** Delay between staggered children (seconds) */
  staggerDelay: 0.08,
  /** IntersectionObserver rootMargin for triggering animations */
  viewMargin: "-60px" as const,
  /** Default easing curve */
  ease: EASE_OUT_QUART,
} as const;

/** Direction-based motion offsets for entrance animations */
export const DIRECTION_OFFSET = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export type AnimationDirection = keyof typeof DIRECTION_OFFSET;
