import { useState } from "react";
import { Section } from "@/components/Section";
import { TiltCard } from "@/components/ui/TiltCard";
import { PHONE } from "@/lib/constants";
import { Trophy, Utensils, Gift, PartyPopper, Heart, GlassWater } from "@/components/Icons";
import { categoryColor } from "@/lib/category";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";
import pTequila from "@/assets/p-tequila.webp";
import rum from "@/assets/rum.webp";

const occasions = [
  {
    key: "game",
    label: "Game Night",
    icon: Trophy,
    blurb: "Beer runs and easy pours for the fourth quarter.",
    picks: [
      { img: pBeer, cat: "Beer", name: "Shiner Bock" },
      { img: rum, cat: "Rum", name: "Captain Morgan" },
    ],
  },
  {
    key: "bbq",
    label: "BBQ",
    icon: Utensils,
    blurb: "Bold reds and cold beer for the grill.",
    picks: [
      { img: pWine, cat: "Wine", name: "Josh Cabernet" },
      { img: pBeer, cat: "Beer", name: "Modelo Especial" },
    ],
  },
  {
    key: "gift",
    label: "Gift",
    icon: Gift,
    blurb: "Bottles worth giving.",
    picks: [
      { img: pBourbon, cat: "Whiskey", name: "Maker's Mark" },
      { img: pTequila, cat: "Tequila", name: "Patron Silver" },
    ],
  },
  {
    key: "party",
    label: "Party",
    icon: PartyPopper,
    blurb: "Crowd-pleasers that keep the night going.",
    picks: [
      { img: pTequila, cat: "Tequila", name: "Casamigos Blanco" },
      { img: rum, cat: "Rum", name: "Captain Morgan" },
    ],
  },
  {
    key: "date",
    label: "Date Night",
    icon: Heart,
    blurb: "Wine built for two.",
    picks: [{ img: pWine, cat: "Wine", name: "Josh Cabernet" }],
  },
  {
    key: "whiskey",
    label: "Whiskey Lover",
    icon: GlassWater,
    blurb: "Rare pours for the collector.",
    picks: [{ img: pBourbon, cat: "Whiskey", name: "Maker's Mark" }],
  },
];

export const Occasions = () => {
  const [active, setActive] = useState(occasions[0].key);
  const current = occasions.find((o) => o.key === active)!;

  return (
    <Section
      id="occasions"
      className="bg-[#090c14]"
      eyebrow="Shop By Moment"
      title="What's the Occasion?"
      subtitle="Tell us what you're planning — we'll point you to the right bottles."
    >
      {/* Chip selector */}
      <div className="flex flex-wrap gap-3 mb-14">
        {occasions.map((o) => {
          const isActive = o.key === active;
          return (
            <button
              key={o.key}
              onClick={() => setActive(o.key)}
              className={`flex items-center gap-3 px-6 py-4 border transition-all duration-500 ${
                isActive
                  ? "bg-primary border-primary text-white"
                  : "glass-dark border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
            >
              <o.icon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{o.label}</span>
            </button>
          );
        })}
      </div>

      {/* Picks for the active occasion */}
      <div>
        <p className="text-white/40 text-sm md:text-base font-medium mb-8 max-w-lg">{current.blurb}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-white/5">
          {current.picks.map((p) => (
            <TiltCard key={p.name}>
              <article
                className="group p-10 bg-black/40 h-full"
              >
                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-24 shrink-0 relative overflow-hidden bg-slate-950 rounded-lg">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <div className="shine-el shine-hover-el" />
                    </div>
                    {p.cat === "Beer" && (
                      <div className="absolute inset-0 z-20 condensation-el opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary block">
                        {p.cat}
                      </span>
                      <div className="pour-meter" style={{ background: categoryColor(p.cat) }} />
                    </div>
                    <h3 className="text-xl font-display font-black italic text-white tracking-tighter uppercase mb-3 drop-shadow-md">
                      {p.name}
                    </h3>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-primary transition-all duration-500"
                    >
                      Check Stock →
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
