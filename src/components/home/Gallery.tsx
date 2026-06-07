import { Section } from "@/components/Section";
import storeInside from "@/assets/store-inside.webp";
import storefront from "@/assets/storefront.webp";
import shelves from "@/assets/freeze.webp";

export const Gallery = () => {
  const shots = [
    { img: storeInside, caption: "Inside the Store",     pos: "50% 30%" },
    { img: storefront,  caption: "West Austin Location", pos: "50% 50%" },
    { img: shelves,     caption: "Cold Selection",       pos: "50% 50%" },
  ];
  return (
    <Section
      id="gallery"
      eyebrow="Atmosphere"
      title="Inside the Shop"
      subtitle="Take a visual tour of our Pond Springs Road location. Established in 2004."
      className="dark-section bg-background text-foreground"
      glow
    >
      <div className="grid md:grid-cols-3 gap-5">
        {shots.map((s, idx) => (
          <figure
            key={s.caption}
            className={`group relative bg-card p-3 md:p-4 shadow-2xl overflow-hidden ${idx % 2 === 0 ? 'mt-0' : 'md:mt-20'}`}
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted relative">
              <img
                src={s.img}
                alt={s.caption}
                loading="lazy"
                style={{ objectPosition: s.pos, transition: 'all 1200ms cubic-bezier(0.4,0,0.2,1)' }}
                className="w-full h-full object-cover grayscale-[0.3] md:grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
            <div className="p-3 text-left relative">
              <div className="absolute top-0 left-3 w-6 h-[2px] bg-primary" />
              <figcaption className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/80 mb-1">{s.caption}</figcaption>
              <div className="font-hand text-lg text-primary/40 lowercase italic">Austin, TX</div>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
};
