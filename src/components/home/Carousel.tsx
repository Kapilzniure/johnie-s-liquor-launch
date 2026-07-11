import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pTequila from "@/assets/p-tequila.webp";
import pBeer from "@/assets/p-beer.webp";

const CATEGORIES = [
  { id: "bourbon", title: "Rare Bourbon", subtitle: "Aged to perfection.", img: pBourbon },
  { id: "wine", title: "Fine Wine", subtitle: "Old world & new world.", img: pWine },
  { id: "gin", title: "Craft Gin", subtitle: "Botanical & crisp.", img: pTequila },
  { id: "beer", title: "Craft Beer", subtitle: "Local and imported.", img: pBeer },
];

export const Carousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Intro text on the left */}
        <div className="absolute left-6 md:left-24 z-20 pointer-events-none">
          <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-4">The Collection</div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white leading-none">
            Curated<br/>
            <span className="italic text-white/50">Selections</span>
          </h2>
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-[100vw] md:pl-[60vw] items-center h-full">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.id} className="relative group shrink-0 w-[75vw] md:w-[400px] aspect-[3/4]">
              <Link to="/catalog" className="block w-full h-full relative perspective-[2000px]">
                <div className="w-full h-full relative transition-transform duration-700 ease-out preserve-3d group-hover:[transform:rotateY(-10deg)_rotateX(5deg)]">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
                    
                    {cat.video ? (
                      <video 
                        muted 
                        loop 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      >
                        <source src={cat.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img 
                        src={cat.img} 
                        alt={cat.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-10 left-8 z-20 translate-z-[50px]">
                    <div className="text-[10px] font-display italic text-primary/70 mb-2">0{i + 1}</div>
                    <h3 className="font-display text-4xl text-white font-black uppercase tracking-tighter mb-2">{cat.title}</h3>
                    <p className="text-sm font-sans text-white/50">{cat.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
