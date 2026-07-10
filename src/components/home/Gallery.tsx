import { Section } from "@/components/Section";
import bacardi from "@/assets/bacardi-superior-rum.webp";
import shelves from "@/assets/freeze.webp";
import storeInside from "@/assets/johnniesliquor.webp";

export const Gallery = () => {
  // We double the items array to create a seamless infinite marquee effect
  const items = [
    { img: bacardi, label: "01 SITE" },
    { img: storeInside, label: "02 VAULT" },
    { img: shelves, label: "03 STOCK" },
    { img: bacardi, label: "04 SITE" },
    { img: storeInside, label: "05 VAULT" },
    { img: shelves, label: "06 STOCK" },
  ];

  return (
    <Section id="gallery" className="!pb-0" eyebrow="Our Space" title="Inside Johnnie's" subtitle="Step inside the heart of North Austin's premier selection.">
      
      {/* Cinematic Film Strip Marquee */}
      <div className="relative w-screen -ml-[50vw] left-1/2 mt-16 overflow-hidden py-10">
        
        {/* Gradient fades for the edges to make it look like it's fading into the dark */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, idx) => (
            <div 
              key={idx} 
              className="group relative w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08] shadow-2xl shrink-0 cursor-grab active:cursor-grabbing"
            >
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <div className="text-[10px] font-black uppercase text-white tracking-widest bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                   {item.label}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </Section>
  );
};
