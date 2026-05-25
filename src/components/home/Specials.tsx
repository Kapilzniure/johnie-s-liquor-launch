import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Phone } from "@/components/Icons";
import { PHONE } from "@/lib/constants";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";
import pTequila from "@/assets/p-tequila.webp";

// Update these every week — swap name, tag, and description as needed
const specials = [
  {
    img: pBourbon,
    tag: "Staff Pick",
    cat: "Whiskey",
    name: "Single Barrel Bourbon",
    desc: "Smooth, rich, and perfect for sipping. Ask us about this week's in-store price.",
  },
  {
    img: pWine,
    tag: "Best Value",
    cat: "Wine",
    name: "Texas Reserve Red Blend",
    desc: "A bold Texas red that pairs with anything. Limited bottles — come grab yours.",
  },
  {
    img: pBeer,
    tag: "Cold & Ready",
    cat: "Beer",
    name: "Local Craft IPA 6-Pack",
    desc: "Brewed right here in Austin. Fresh batch in — always a crowd favorite.",
  },
  {
    img: pTequila,
    tag: "Hot Deal",
    cat: "Tequila",
    name: "Premium Blanco Tequila",
    desc: "Smooth, clean, and great for cocktails or straight. Don't miss this week's price.",
  },
];

export const Specials = () => (
  <Section
    id="specials"
    eyebrow="Weekly specials"
    title="This week's picks"
    subtitle="Hand-selected deals updated every week. Stop by or call to confirm today's in-store price."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {specials.map((s) => (
        <article
          key={s.name}
          className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift"
        >
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-gold text-primary-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
              {s.tag}
            </Badge>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-background/40">
            <img
              src={s.img}
              alt={s.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
            />
          </div>
          <div className="p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{s.cat}</div>
            <h3 className="font-display text-lg font-bold leading-tight mb-1">{s.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </article>
      ))}
    </div>
    <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
      <Phone className="w-4 h-4 text-gold shrink-0" />
      <span>
        Call <a href={`tel:${PHONE}`} className="text-gold hover:underline">(512) 383-5004</a> to confirm availability before you visit.
      </span>
    </div>
  </Section>
);
