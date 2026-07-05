import { Section } from "@/components/Section";
import storefront from "@/assets/hero-store.webp";
import shelves from "@/assets/freeze.webp";
import storeInside from "@/assets/johnniesliquor.webp";

export const Gallery = () => {
  const items = [
    { img: storefront, label: "01 SITE", alt: "Johnnies Liquor Store storefront exterior in Austin, TX" },
    { img: storeInside, label: "02 VAULT", alt: "Inside Johnnies Liquor Store — premium spirits vault and shelving" },
    { img: shelves, label: "03 STOCK", alt: "Fully stocked shelves of wine, beer, and spirits at Johnnies Liquor" },
  ];
  return (
    <Section id="gallery" className="bg-[#090c14]" eyebrow="Visual ID" title="The Facility" subtitle="Step inside the heart of North Austin's premier selection.">
      <div className="mb-8 flex flex-col gap-3 rounded-3xl border border-white/10 bg-card p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Store experience</p>
          <p className="text-sm text-white/50 max-w-xl">A welcoming shop with premium shelving, strong selections, and a polished atmosphere built for serious shoppers.</p>
        </div>
        <a href="#contact" className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60 hover:text-primary transition-colors">Visit us in person →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {items.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-slate-950 aspect-square animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
             <img
              src={item.img}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-6 left-6">
               <div className="text-[10px] font-black text-white/50 tracking-widest">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
