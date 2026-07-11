import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import isoBourbon from "@/assets/iso-bourbon.png";
import isoWine from "@/assets/iso-wine.png";
import isoVodka from "@/assets/iso-vodka.png";
import isoBeer from "@/assets/iso-beer.png";
import isoTequila from "@/assets/iso-tequila.png";

const CATEGORIES = [
  { id: "bourbon", title: "Rare Bourbon", subtitle: "Aged to perfection.", img: isoBourbon },
  { id: "wine", title: "Fine Wine", subtitle: "Old world & new world.", img: isoWine },
  { id: "vodka", title: "Premium Vodka", subtitle: "Smooth & crisp.", img: isoVodka },
  { id: "tequila", title: "Agave Spirits", subtitle: "100% Blue Weber.", img: isoTequila },
  { id: "beer", title: "Craft Beer", subtitle: "Local and imported.", img: isoBeer },
];

export const Carousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Intro text on the left */}
        <div className="absolute left-6 md:left-24 z-20 pointer-events-none">
          <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-4 drop-shadow-md">The Collection</div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white leading-none drop-shadow-xl">
            Curated<br/>
            <span className="italic text-white/50">Selections</span>
          </h2>
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-[100vw] md:pl-[50vw] items-center h-full">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.id} className="relative group shrink-0 w-[75vw] md:w-[400px] aspect-[3/4]">
              <Link to="/catalog" className="block w-full h-full relative perspective-[2000px]">
                <div className="w-full h-full relative transition-transform duration-700 ease-out preserve-3d group-hover:[transform:rotateY(-10deg)_rotateX(5deg)] group-hover:scale-[1.02]">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-[#050505] border border-white/[0.05] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] z-0 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 pointer-events-none" />
                    
                    <div className="absolute inset-0 flex items-center justify-center p-12 pb-24 z-0">
                      <img 
                        src={cat.img} 
                        alt={cat.title} 
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-1000"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-10 left-8 z-20 translate-z-[50px]">
                    <div className="text-[10px] font-display italic text-primary/70 mb-2">0{i + 1}</div>
                    <h3 className="font-display text-3xl md:text-4xl text-white font-black uppercase tracking-tighter mb-2 drop-shadow-lg">{cat.title}</h3>
                    <p className="text-sm font-sans text-white/50 group-hover:text-white/80 transition-colors font-medium">{cat.subtitle}</p>
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
