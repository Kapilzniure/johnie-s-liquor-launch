import { Section } from "@/components/Section";
import pTequila from "@/assets/p-tequila.webp";
import rum from "@/assets/rum.webp";
import pBeer from "@/assets/p-beer.webp";
import { Phone, ArrowRight } from "@/components/Icons";
import { PHONE } from "@/lib/constants";
import { categoryColor } from "@/lib/category";
import { cn } from "@/lib/utils";

import Magnetic from "@/components/ui/Magnetic";

const items = [
  { img: pTequila, cat: "Tequila", name: "Casamigos Blanco" },
  { img: rum,      cat: "Rum",     name: "Captain Morgan" },
  { img: pBeer,    cat: "Beer",    name: "Modelo Especial" },
];

export const Favorites = () => (
  <Section id="favorites" className="" eyebrow="Rare & Allocated" title="The Heritage Collection" subtitle="The bottles that define our collection. Hand-selected, precisely handled.">
    <div className="flex flex-col gap-24 mt-20">
      {items.map((it, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={it.name} className={cn("flex flex-col md:flex-row items-center gap-12 lg:gap-24", isEven ? "" : "md:flex-row-reverse")}>
            
            {/* Museum Display Pedestal */}
            <div className="w-full md:w-1/2 relative flex justify-center items-center py-20 bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-3xl overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors duration-1000" />
               <img src={it.img} alt={it.name} className="relative z-10 max-h-[400px] md:max-h-[600px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
                 <div className="shine-el shine-hover-el" />
               </div>
            </div>

            {/* Typography & Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6">{it.cat}</span>
              <h3 className="font-display text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-none tracking-tighter">
                {it.name}
              </h3>
              <p className="text-white/60 text-sm md:text-base font-medium max-w-md mb-12 leading-relaxed">
                Experience the pinnacle of craftsmanship. This {it.cat.toLowerCase()} represents our commitment to sourcing only the most exceptional spirits for our heritage collection. Reserved for the true connoisseur.
              </p>
              <Magnetic>
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-xl group/btn w-fit">
                  Acquire <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </a>
              </Magnetic>
            </div>
          </div>
        )
      })}
    </div>
  </Section>
);
