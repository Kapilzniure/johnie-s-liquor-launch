export type TimeOfDay = "morning" | "afternoon" | "golden-hour" | "night";

export interface AtmosphereConfig {
  ambientGlow: string;
  lensFlare: string;
  canvasParticles: string;
  canvasLines: string;
}

export const ATMOSPHERE_CONFIGS: Record<TimeOfDay, AtmosphereConfig> = {
  morning: {
    ambientGlow: "rgba(100, 150, 200, 0.05)",
    lensFlare: "rgba(150, 180, 220, 0.2)",
    canvasParticles: "rgba(120, 160, 200, 0.6)",
    canvasLines: "rgba(120, 160, 200, 0.15)",
  },
  afternoon: {
    ambientGlow: "rgba(255, 255, 255, 0.03)",
    lensFlare: "rgba(255, 255, 255, 0.15)",
    canvasParticles: "rgba(200, 200, 200, 0.5)",
    canvasLines: "rgba(200, 200, 200, 0.1)",
  },
  "golden-hour": {
    ambientGlow: "rgba(210, 100, 20, 0.08)",
    lensFlare: "rgba(220, 120, 30, 0.25)",
    canvasParticles: "rgba(220, 140, 50, 0.7)",
    canvasLines: "rgba(220, 140, 50, 0.2)",
  },
  night: {
    ambientGlow: "rgba(180, 20, 50, 0.06)",
    lensFlare: "rgba(220, 40, 80, 0.2)",
    canvasParticles: "rgba(200, 50, 80, 0.6)",
    canvasLines: "rgba(200, 50, 80, 0.15)",
  },
};

export const getAtmosphereState = (date: Date = new Date()): TimeOfDay => {
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "golden-hour";
  return "night";
};
