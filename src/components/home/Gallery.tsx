import { Section } from "@/components/Section";
import storefront from "@/assets/hero-store.webp";
import shelves from "@/assets/freeze.webp";
import storeInside from "@/assets/johnniesliquor.webp";

export const Gallery = () => {
  const items = [
    { img: storefront, label: "01 SITE" },
    { img: storeInside, label: "02 VAULT" },
    { img: shelves, label: "03 STOCK" },
  ];
  return (
    <Section id="gallery" className="bg-[#050508]" eyebrow="Visual ID" title="The Facility" subtitle="Step inside the heart of North Austin's premier selection.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {items.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-black aspect-square animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
             <img
              src={item.img}
              alt="Gallery"
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
