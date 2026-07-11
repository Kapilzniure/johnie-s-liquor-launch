import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pTequila from "@/assets/p-tequila.webp";
import pBeer from "@/assets/p-beer.webp";

const MOODS = [
  { id: 0, vibe: "Relaxed", profile: "Smooth", title: "Vintage Cabernet", desc: "Perfect for a quiet evening.", img: pWine },
  { id: 1, vibe: "Relaxed", profile: "Bold", title: "Aged Stout", desc: "Dark, rich, and slow-sipping.", img: pBeer },
  { id: 2, vibe: "Energetic", profile: "Smooth", title: "Blanco Tequila", desc: "The core of a perfect margarita.", img: pTequila },
  { id: 3, vibe: "Energetic", profile: "Bold", title: "Cask Strength Bourbon", desc: "High proof for a high-energy night.", img: pBourbon },
];

export const MoodMatcher = () => {
  const [activeMood, setActiveMood] = useState(0);
  const activeMatch = MOODS[activeMood];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The Configurator */}
          <div className="relative z-20">
            <div className="mb-12">
              <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-4">Build Your Pour</div>
              <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                The Mood<br/>
                <span className="italic text-white/50">Matcher</span>
              </h2>
              <p className="text-white/50 font-sans max-w-sm">Select your current vibe to reveal the perfect bottle for the occasion.</p>
            </div>

            <div className="relative mt-8 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md shadow-2xl">
              <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-6">
                <span>Relaxed</span>
                <span className="text-primary">{activeMatch.vibe} / {activeMatch.profile}</span>
                <span>Energetic</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1" 
                value={activeMood} 
                onChange={(e) => setActiveMood(parseInt(e.target.value))} 
                className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all"
              />
              <div className="mt-8 text-center">
                <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em] bg-primary/10 px-4 py-2 rounded-full border border-primary/20 inline-block animate-pulse">← Slide to adjust your vibe →</span>
              </div>
            </div>
            
            <Link to="/catalog" className="inline-block mt-12 text-xs font-black uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors">
              Explore Entire Catalog
            </Link>
          </div>

          {/* Right: The Spotlight */}
          <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMatch.id}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <img 
                  src={activeMatch.img} 
                  alt={activeMatch.title}
                  className="h-2/3 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8"
                />
                <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white mb-2">{activeMatch.title}</h3>
                <p className="text-white/50 font-sans italic text-lg">{activeMatch.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
