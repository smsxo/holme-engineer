import { useEffect } from "react";

/**
 * Locks / unlocks body scroll.
 * Restores original overflow on unmount.
 */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}
