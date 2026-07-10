import { Section } from "@/components/Section";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Phone, ArrowRight } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { categoryColor } from "@/lib/category";
import { getSeasonTheme } from "@/lib/season";
import { cn } from "@/lib/utils";
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
  <Section id="specials" className="" eyebrow="Limited Releases" title="The Curator's Selection" subtitle="Elite labels. Precise pricing. Curated for the modern Austin lifestyle.">

    <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl shadow-2xl p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Why shoppers return</p>
        <h3 className="text-xl md:text-2xl font-display font-black italic uppercase tracking-tighter text-white">Fresh picks, fair pricing, and staff that knows their shelves.</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-white/50">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Curated</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Local</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Trusted</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
      {specials.map((s, i) => {
        const isFeatured = i === 0;
        return (
          <TiltCard key={`${i}-${s.name}`} className={cn("h-full", isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1")}>
            <article className="group relative glass-smoked p-8 md:p-12 hover:bg-white/5 transition-all duration-700 rounded-3xl h-full flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-40 text-[10px] font-black tracking-widest uppercase group-hover:opacity-100 transition-opacity z-20 text-white/40">{s.tag}</div>
              
              {/* Massive background typography for the featured item */}
              {isFeatured && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] pointer-events-none">
                  <span className="text-[150px] md:text-[250px] font-display font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white">{s.name.split(' ')[0]}</span>
                </div>
              )}

              <div className="relative z-10 flex-grow flex items-center justify-center my-8">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img src={s.img} alt={s.name} loading="lazy" decoding="async" className={cn("relative z-10 h-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-all duration-1000", isFeatured ? "max-h-[500px]" : "max-h-[250px]")} />
                <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                  <div className="shine-el shine-hover-el" />
                </div>
                {s.cat === "Beer" && (
                  <div className="absolute inset-0 z-20 condensation-el opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}
              </div>
              
              <div className="relative z-20 flex flex-col items-start mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[9px] text-primary font-black uppercase tracking-[0.4em]">{s.cat}</div>
                  <div className="pour-meter" style={{ background: categoryColor(s.cat) }} />
                </div>
                <h3 className={cn("font-display font-black tracking-tight text-white mb-8 uppercase leading-none", isFeatured ? "text-5xl md:text-7xl" : "text-3xl")}>{s.name}</h3>
                <Magnetic>
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-xl group/btn">
                    Reserve <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </a>
                </Magnetic>
              </div>
            </article>
          </TiltCard>
        );
      })}
    </div>

    {/* Contact Bar */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-white/[0.08]">
      <div className="text-left">
        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-3">Direct Communication</div>
        <div className="font-display text-3xl md:text-5xl font-black italic text-white leading-none">THE HOTLINE</div>
      </div>
      <a href={`tel:${PHONE}`} className="text-3xl md:text-6xl font-display font-black text-primary hover:text-white transition-all tracking-tighter text-glow">
        {PHONE_DISPLAY}
      </a>
    </div>
  </Section>
  );
};
