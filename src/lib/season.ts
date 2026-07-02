import type { ParticleType } from "@/lib/particles";

export type SeasonTheme = Extract<ParticleType, "snow" | "firework" | "smoke">;

/** Pure date -> ambient theme. No weather API — just calendar-driven mood. */
export const getSeasonTheme = (date: Date = new Date()): SeasonTheme => {
  const month = date.getMonth(); // 0-indexed
  const day = date.getDate();

  const isNewYear = (month === 11 && day >= 30) || (month === 0 && day <= 2);
  const isJuly4 = month === 5 && day >= 28 ? true : month === 6 && day <= 5;
  if (isNewYear || isJuly4) return "firework";

  const isHolidaySeason = (month === 10 && day >= 20) || month === 11;
  if (isHolidaySeason) return "snow";

  return "smoke";
};
