import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Phone, ArrowRight } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { categoryColor } from "@/lib/category";
import { getSeasonTheme } from "@/lib/season";
import { cn } from "@/lib/utils";
import isoBourbon from "@/assets/iso-bourbon.png";
import isoWine from "@/assets/iso-wine.png";
import isoBeer from "@/assets/iso-beer.png";
import isoTequila from "@/assets/iso-tequila.png";

const baseSpecials = [
  { img: isoBourbon, tag: "Rare",    cat: "Whiskey", name: "Crown Royal",  delay: 0   },
  { img: isoWine,    tag: "Select",  cat: "Wine",    name: "Reserve Cabernet", delay: 100 },
  { img: isoBeer,    tag: "Cold",    cat: "Beer",    name: "Blue Moon",   delay: 200 },
  { img: isoTequila, tag: "Premium", cat: "Tequila", name: "Casamigos Blanco", delay: 300 },
];

export const Specials = () => {
  const { featuredOverride } = getSeasonTheme();
  // Seasonal theme can swap the first slot's name/category/tag (image stays — no new photography per swap)
  const specials = featuredOverride
    ? [{ ...baseSpecials[0], ...featuredOverride }, ...baseSpecials.slice(1)]
    : baseSpecials;

  const [activeIndex, setActiveIndex] = useState(0);

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

    <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[500px] gap-4">
      {specials.map((s, i) => {
        const isActive = activeIndex === i;

        return (
          <div
            key={s.name}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
            className="relative rounded-3xl overflow-hidden glass-smoked border border-white/[0.05] cursor-pointer flex-shrink-0 md:flex-shrink transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ flex: isActive ? 4 : 1, minHeight: "80px", minWidth: "80px" }}
          >
            {/* Massive background typography for active item */}
            <motion.div 
              animate={{ opacity: isActive ? 0.03 : 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none"
            >
              <span className="text-[120px] md:text-[250px] font-display font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white">
                {s.name.split(' ')[0]}
              </span>
            </motion.div>

            {/* The Bottle */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
              <motion.div 
                className="absolute inset-0 bg-primary/20 blur-[80px]"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
              <img 
                src={s.img} 
                alt={s.name} 
                className={cn(
                  "relative z-10 object-contain drop-shadow-2xl transition-all duration-700 ease-out",
                  isActive ? "h-[70%] md:h-[90%] scale-100 opacity-100 translate-y-[-5%]" : "h-[60%] md:h-[60%] opacity-60 scale-100"
                )} 
              />
            </div>

            {/* Inactive State: Subtle Interactive Overlay */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-20 bg-black/20 hover:bg-black/0 transition-colors pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Active State: Details & CTA */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col justify-end bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-auto"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[9px] text-primary font-black uppercase tracking-[0.4em]">{s.cat}</div>
                    <div className="pour-meter" style={{ background: categoryColor(s.cat) }} />
                    <div className="ml-auto text-[9px] font-black tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-3 py-1 bg-black/50 backdrop-blur-md">{s.tag}</div>
                  </div>
                  
                  <h3 className="font-display font-black tracking-tight text-white mb-6 uppercase leading-none text-4xl md:text-6xl">{s.name}</h3>
                  
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-4 bg-white hover:bg-primary text-black hover:text-white border border-white/10 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl group w-fit">
                    Reserve Bottle <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
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
