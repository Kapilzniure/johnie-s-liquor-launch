import { Section } from "@/components/Section";
import pTequila from "@/assets/p-tequila.webp";
import rum from "@/assets/rum.webp";
import pBeer from "@/assets/p-beer.webp";
import { Phone } from "@/components/Icons";
import { PHONE } from "@/lib/constants";

const items = [
  { img: pTequila, cat: "Tequila · 750ml", name: "Casamigos Blanco",   desc: "Smooth, clean agave with a light citrus finish. Always a crowd favorite at the store." },
  { img: rum,      cat: "Rum · 750ml",     name: "Captain Morgan Spiced", desc: "Smooth Caribbean rum with warming spices. Great for cocktails or sipping." },
  { img: pBeer,    cat: "Beer · 6-pack",   name: "Modelo Especial",     desc: "Rich, full-flavored Mexican lager. Our coldest and best-selling 6-pack." },
];

export const Favorites = () => (
  <Section
    id="favorites"
    eyebrow="Top Shelf"
    title="The Local Favorites"
    subtitle="The bottles our regulars keep coming back for."
    className="bg-background paper-texture"
  >
    <div className="flex flex-col gap-3 lg:gap-4">
      {items.map((it, idx) => (
        <article
          key={it.name}
          style={{ animationDelay: `${idx * 100}ms` }}
          className="group bg-card p-3 shadow-editorial flex flex-row gap-3 md:gap-5 hover:translate-x-2 transition-all duration-500 animate-fade-up"
        >
          {/* Image — fixed width on left */}
          <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 overflow-hidden bg-muted relative">
            <img
              src={it.img}
              alt={it.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center flex-1 min-w-0 py-2">
            <div className="text-[9px] uppercase tracking-[0.3em] text-primary font-black mb-1.5">{it.cat}</div>
            <h3 className="font-display text-sm md:text-base font-bold leading-tight mb-1 group-hover:text-primary transition-colors truncate">{it.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed italic hidden sm:block line-clamp-2">"{it.desc}"</p>

            <div className="mt-3 flex items-center gap-4">
              <a href={`tel:${PHONE}`} className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-colors flex items-center gap-2 group/link">
                Check Price
                <span className="w-4 h-[1px] bg-foreground/10 group-hover/link:w-8 group-hover/link:bg-primary transition-all" />
              </a>
              <span className="font-hand text-lg text-primary/30">Johnnie's Pick</span>
            </div>
          </div>

          {/* Right accent */}
          <div className="hidden md:flex items-center px-4 text-foreground/5 font-display font-black text-4xl select-none">
            {String(idx + 1).padStart(2, "0")}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-6 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/20 italic">
        Selection rotates weekly — call to confirm today's prices
      </p>
    </div>
  </Section>
);
