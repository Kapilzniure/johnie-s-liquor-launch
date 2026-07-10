import { Section } from "@/components/Section";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Phone, ArrowRight } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { categoryColor } from "@/lib/category";
import { getSeasonTheme } from "@/lib/season";
import Magnetic from "@/components/ui/Magnetic";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";
import pTequila from "@/assets/p-tequila.webp";

const baseSpecials = [
  { img: pBourbon, tag: "Rare",    cat: "Whiskey", name: "Maker's Mark",  delay: 0   },
  { img: pWine,    tag: "Select",  cat: "Wine",    name: "Josh Cabernet", delay: 100 },
  { img: pBeer,    tag: "Cold",    cat: "Beer",    name: "Shiner Bock",   delay: 200 },
  { img: pTequila, tag: "Premium", cat: "Tequila", name: "Patron Silver", delay: 300 },
];

export const Specials = () => {
  const { featuredOverride } = getSeasonTheme();
  // Seasonal theme can swap the first slot's name/category/tag (image stays — no new photography per swap)
  const specials = featuredOverride
    ? [{ ...baseSpecials[0], ...featuredOverride }, ...baseSpecials.slice(1)]
    : baseSpecials;

  return (
  <Section id="specials" className="" eyebrow="System Select" title="Weekly Specials" subtitle="Elite labels. Precise pricing. Curated for the modern Austin lifestyle.">

    <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Why shoppers return</p>
        <h3 className="text-xl md:text-2xl font-display font-black italic uppercase tracking-tighter text-white">Fresh picks, fair pricing, and staff that knows their shelves.</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-white/50">
        <span className="rounded-full border border-white/10 px-3 py-2">Curated</span>
        <span className="rounded-full border border-white/10 px-3 py-2">Local</span>
        <span className="rounded-full border border-white/10 px-3 py-2">Trusted</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {specials.map((s, i) => (
        <TiltCard key={`${i}-${s.name}`} className="h-full">
          <article className="group relative bg-black/40 backdrop-blur-md p-12 hover:bg-white/5 transition-colors border border-white/5 rounded-2xl h-full flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-30 text-[8px] font-black group-hover:opacity-100 transition-opacity z-10">{s.tag}</div>
            <div className="mb-10 relative flex-grow flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={s.img} alt={s.name} loading="lazy" decoding="async" className="relative z-10 w-full h-auto group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                <div className="shine-el shine-hover-el" />
              </div>
              {s.cat === "Beer" && (
                <div className="absolute inset-0 z-20 condensation-el opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">{s.cat}</div>
                <div className="pour-meter" style={{ background: categoryColor(s.cat) }} />
              </div>
              <h3 className="text-2xl font-display font-black tracking-tight text-white mb-6 uppercase">{s.name}</h3>
              <Magnetic>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-xl group/btn">
                  Reserve <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </article>
        </TiltCard>
      ))}
    </div>

    {/* Contact Bar */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-white/5">
      <div className="text-left">
        <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-3">Direct Communication</div>
        <div className="font-display text-3xl md:text-5xl font-black italic text-white leading-none">THE HOTLINE</div>
      </div>
      <a href={`tel:${PHONE}`} className="text-3xl md:text-6xl font-display font-black text-primary hover:text-white transition-all tracking-tighter text-glow">
        {PHONE_DISPLAY}
      </a>
    </div>
  </Section>
  );
};
