import type { ParticleType } from "@/lib/particles";

export interface SeasonalFeature {
  name: string;
  cat: string;
  tag: string;
}

export interface SeasonTheme {
  id: "christmas" | "newyear" | "valentines" | "summer" | "july4" | "halloween" | "default";
  particle: ParticleType;
  /** Overrides the particle system's default white tint for drift-type (snow/smoke) particles. */
  particleColor?: string;
  headline: { line1: string; line2: string };
  promoText?: string;
  /** Optional themed swap for the first Specials slot. */
  featuredOverride?: SeasonalFeature;
}

const THEMES: Record<SeasonTheme["id"], SeasonTheme> = {
  christmas: {
    id: "christmas",
    particle: "snow",
    headline: { line1: "PURE", line2: "CHRISTMAS" },
    promoText: "Holiday gift bundles & rare bottle releases — through Dec 25.",
    featuredOverride: { name: "Holiday Reserve Bourbon", cat: "Whiskey", tag: "Seasonal" },
  },
  newyear: {
    id: "newyear",
    particle: "firework",
    headline: { line1: "PURE", line2: "CELEBRATION" },
    promoText: "Ring in the new year with champagne & top-shelf spirits.",
    featuredOverride: { name: "Prosecco Brut", cat: "Wine", tag: "Bubbly" },
  },
  valentines: {
    id: "valentines",
    particle: "snow",
    particleColor: "#E8A0BF",
    headline: { line1: "PURE", line2: "ROMANCE" },
    promoText: "Wine, rosé & gift sets built for two.",
    featuredOverride: { name: "Rosé", cat: "Wine", tag: "Date Night" },
  },
  summer: {
    id: "summer",
    particle: "smoke",
    particleColor: "#FFD27D",
    headline: { line1: "PURE", line2: "SUMMER" },
    promoText: "Cold beer, poolside tequila & backyard essentials.",
    featuredOverride: { name: "Modelo Especial", cat: "Beer", tag: "Ice Cold" },
  },
  july4: {
    id: "july4",
    particle: "firework",
    headline: { line1: "PURE", line2: "HERITAGE" },
    promoText: "Austin's Premier Destination for Rare Spirits & Craft Selection. Since 2004.",
    featuredOverride: { name: "Corona Extra", cat: "Beer", tag: "Cookout" },
  },
  halloween: {
    id: "halloween",
    particle: "smoke",
    particleColor: "#FF8C1A",
    headline: { line1: "PURE", line2: "MISCHIEF" },
    promoText: "Spiced spirits & party punch for the spookiest night out.",
    featuredOverride: { name: "Captain Morgan", cat: "Rum", tag: "Spiced" },
  },
  default: {
    id: "default",
    particle: "smoke",
    headline: { line1: "PURE", line2: "HERITAGE" },
  },
};

/** Pure date -> seasonal theme (visuals + copy + optional featured swap). No weather API — calendar-driven only. */
export const getSeasonTheme = (date: Date = new Date()): SeasonTheme => {
  const month = date.getMonth(); // 0-indexed
  const day = date.getDate();

  if ((month === 11 && day >= 30) || (month === 0 && day <= 2)) return THEMES.newyear;
  if (month === 11 && day <= 29) return THEMES.christmas;
  if (month === 1 && day >= 10 && day <= 16) return THEMES.valentines;
  if ((month === 5 && day >= 28) || (month === 6 && day <= 5)) return THEMES.july4;
  if (month === 9 && day >= 20) return THEMES.halloween;
  if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day <= 21)) return THEMES.summer;

  return THEMES.default;
};
