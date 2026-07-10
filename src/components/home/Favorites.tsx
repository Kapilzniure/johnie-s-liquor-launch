import { Section } from "@/components/Section";
import pTequila from "@/assets/p-tequila.webp";
import rum from "@/assets/rum.webp";
import pBeer from "@/assets/p-beer.webp";
import { Phone, ArrowRight } from "@/components/Icons";
import { PHONE } from "@/lib/constants";
import { categoryColor } from "@/lib/category";

import { TiltCard } from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";

const items = [
  { img: pTequila, cat: "Tequila", name: "Casamigos Blanco" },
  { img: rum,      cat: "Rum",     name: "Captain Morgan" },
  { img: pBeer,    cat: "Beer",    name: "Modelo Especial" },
];

export const Favorites = () => (
  <Section id="favorites" className="" eyebrow="Top Tier" title="Curated Stock" subtitle="The bottles that define our collection. Hand-selected, precisely handled.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-1">
      {items.map((it, idx) => (
        <TiltCard key={it.name} className="group animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
          <article className="h-full bg-black/40 backdrop-blur-md p-12 hover:bg-white/5 transition-colors border border-white/5 rounded-2xl relative z-10 flex flex-col">
            <div className="relative mb-12 flex-grow flex items-center justify-center">
              <img src={it.img} alt={it.name} loading="lazy" decoding="async" className="w-full max-w-[200px] h-auto group-hover:scale-110 transition-all duration-1000" />
            </div>
            <div className="relative z-10 mt-auto">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary block">{it.cat}</span>
              </div>
              <h3 className="text-2xl font-display font-black text-slate-100 mb-8 tracking-tight uppercase">{it.name}</h3>
              <Magnetic>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-xl group/btn">
                  Order Now <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </article>
        </TiltCard>
      ))}
    </div>
  </Section>
);
