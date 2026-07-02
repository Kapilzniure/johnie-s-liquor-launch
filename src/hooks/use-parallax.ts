import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Returns a ref + a small translateY offset that tracks scroll position,
 * for layered parallax on elements near the top of the page.
 * speed: fraction of scroll distance to translate (e.g. 0.15 = subtle drift).
 */
export const useParallax = (speed: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setOffset(0);
      return;
    }

    let ticking = false;
    const update = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) setOffset(-rect.top * speed);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, reducedMotion]);

  return { ref, offset };
};
