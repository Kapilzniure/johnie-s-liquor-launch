import { Section } from "@/components/Section";
import { Phone } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";
import pTequila from "@/assets/p-tequila.webp";

const specials = [
  { img: pBourbon, tag: "Staff Pick",  cat: "Whiskey",  name: "Maker's Mark Bourbon",       desc: "Soft, smooth, and slightly sweet. One of the most approachable bourbons we carry.", rotate: "sm:rotate-[-1deg]" },
  { img: pWine,    tag: "Best Value",  cat: "Wine",     name: "Josh Cabernet Sauvignon",    desc: "Consistently great California Cab. Full-bodied with dark fruit and a smooth finish.", rotate: "sm:rotate-[1deg]"  },
  { img: pBeer,    tag: "Cold & Ready",cat: "Beer",     name: "Shiner Bock 6-Pack",         desc: "Texas-brewed, always fresh. Our most popular local beer — grab it ice cold.",         rotate: "sm:rotate-[-1deg]" },
  { img: pTequila, tag: "Hot Deal",    cat: "Tequila",  name: "Patron Silver",              desc: "Ultra-premium silver tequila. Clean, smooth, and perfect for cocktails.",            rotate: "sm:rotate-[1deg]"  },
];

export const Specials = () => (
  <Section id="specials" className="bg-card/30 relative">

    <div className="mb-8">
      <div className="inline-block border border-primary/40 px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter rotate-[-2deg] bg-primary/10 text-primary mb-3">
        Limited Availability
      </div>
      <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter">
        Weekly <span className="text-primary italic">Picks</span>
      </h2>
      <div className="flex items-center gap-2 mt-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Updated this week</span>
      </div>
      <p className="mt-2 text-muted-foreground max-w-xl text-sm italic">
        Hand-selected deals updated every week. Come grab 'em before they're gone.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {specials.map((s, idx) => (
        <article
          key={s.name}
          style={{ animationDelay: `${idx * 80}ms` }}
          className={`group relative bg-background p-2 paper-shadow transition-smooth hover:scale-[1.02] animate-fade-up ${s.rotate} hover:rotate-0`}
        >
          <div className="absolute -top-3 -right-3 z-20">
            <div className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 paper-shadow uppercase tracking-widest rotate-[12deg]">
              {s.tag}
            </div>
          </div>

          <div className="aspect-[3/4] overflow-hidden relative border border-border/50">
            <img src={s.img} alt={s.name} loading="lazy"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>

          <div className="p-3 relative">
            <div className="font-mono text-[9px] text-primary/70 uppercase tracking-[0.3em] mb-1">{s.cat}</div>
            <h3 className="font-display text-sm font-bold leading-tight mb-1 group-hover:text-primary transition-colors">{s.name}</h3>
            <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium italic line-clamp-2">"{s.desc}"</p>

            <div className="mt-3 pt-3 border-t border-dashed border-border flex justify-between items-center">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">In-Store Only</span>
              <a href={`tel:${PHONE}`} className="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Phone className="w-3 h-3" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 md:p-5 border border-dashed border-primary/20">
      <div className="flex items-center gap-3 mb-3 sm:mb-0">
        <div className="w-8 h-8 bg-primary/10 flex items-center justify-center text-primary">
          <Phone className="w-4 h-4" />
        </div>
        <div>
          <div className="font-bold text-sm uppercase tracking-tight">Confirm Availability</div>
          <div className="text-xs text-muted-foreground">Call us to check today's prices</div>
        </div>
      </div>
      <a href={`tel:${PHONE}`} className="text-lg md:text-xl font-display font-black text-primary hover:scale-105 transition-transform">
        {PHONE_DISPLAY}
      </a>
    </div>
  </Section>
);
