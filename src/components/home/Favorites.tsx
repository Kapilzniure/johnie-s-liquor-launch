import { Section } from "@/components/Section";
import pTequila from "@/assets/p-tequila.webp";
import rum from "@/assets/rum.webp";
import pBeer from "@/assets/p-beer.webp";
import { Phone } from "@/components/Icons";
import { PHONE } from "@/lib/constants";

const items = [
  { img: pTequila, cat: "Tequila", name: "Casamigos Blanco" },
  { img: rum,      cat: "Rum",     name: "Captain Morgan" },
  { img: pBeer,    cat: "Beer",    name: "Modelo Especial" },
];

export const Favorites = () => (
  <Section id="favorites" className="bg-[#050508]" eyebrow="Top Tier" title="Curated Stock" subtitle="The bottles that define our collection. Hand-selected, precisely handled.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-white/5">
      {items.map((it, idx) => (
        <article key={it.name} className="group relative animate-fade-up bg-[#050508] p-12 hover:bg-white/[0.02] transition-all duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
          <div className="relative mb-12 overflow-hidden bg-black">
            <img src={it.img} alt={it.name} className="w-full h-auto group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-3 block">{it.cat}</span>
            <h3 className="text-3xl font-display font-black italic text-white mb-6 tracking-tighter uppercase">{it.name}</h3>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all duration-500">
              Inquire Inventory
              <span className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-primary transition-all duration-1000" />
            </a>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
