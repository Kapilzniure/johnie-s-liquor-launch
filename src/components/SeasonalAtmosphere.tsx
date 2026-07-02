import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { startParticleSystem } from "@/lib/particles";
import { getSeasonTheme } from "@/lib/season";

/**
 * Full-viewport, non-interactive ambient layer driven by src/lib/season.ts —
 * snow for Christmas, fireworks for New Year's/July 4th, tinted smoke for
 * Valentine's/Summer/Halloween, soft ambient smoke the rest of the year.
 * Renders nothing under prefers-reduced-motion.
 */
export const SeasonalAtmosphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !canvasRef.current) return;
    const theme = getSeasonTheme();
    const stop = startParticleSystem(canvasRef.current, theme.particle, theme.particleColor);
    return stop;
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
};
