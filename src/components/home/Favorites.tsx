import { Section } from "@/components/Section";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";

export const Favorites = () => {
  const items = [
    { img: pBourbon, cat: "Whiskey · 750ml", name: "Single Barrel Bourbon" },
    { img: pWine,    cat: "Wine · 750ml",    name: "Texas Reserve Red"  },
    { img: pBeer,    cat: "Beer · 6-pack",   name: "Local Craft IPA" },
  ];
  return (
    <Section id="favorites" eyebrow="Customer favorites" title="Popular this month" subtitle="What our regulars are picking up. Stop by to see the full lineup in store.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.name} className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
            <div className="aspect-[4/5] overflow-hidden bg-background/40">
              <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="p-5 flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{it.cat}</div>
                <h3 className="font-display text-xl font-bold leading-tight">{it.name}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Selection rotates weekly — call to confirm availability.</p>
    </Section>
  );
};
