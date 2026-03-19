import { useState, useEffect } from "react";

/**
 * Returns `true` when the page has been scrolled past the given threshold.
 * Uses a passive scroll listener for performance.
 */
export function useScrollPosition(threshold = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
