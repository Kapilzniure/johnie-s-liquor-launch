import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pTequila from "@/assets/p-tequila.webp";
import pBeer from "@/assets/p-beer.webp";

// Configuration Logic
const MATCHES = [
  { vibe: 0, profile: 0, title: "Vintage Cabernet", desc: "Relaxed & Smooth. Perfect for a quiet evening.", img: pWine },
  { vibe: 0, profile: 1, title: "Aged Stout", desc: "Relaxed & Bold. Dark, rich, and slow-sipping.", img: pBeer },
  { vibe: 1, profile: 0, title: "Blanco Tequila", desc: "Energetic & Smooth. The core of a perfect margarita.", img: pTequila },
  { vibe: 1, profile: 1, title: "Cask Strength Bourbon", desc: "Energetic & Bold. High proof for a high-energy night.", img: pBourbon },
];

export const MoodMatcher = () => {
  // 0 = Relaxed, 1 = Energetic
  const [vibe, setVibe] = useState(0);
  // 0 = Smooth, 1 = Bold
  const [profile, setProfile] = useState(0);

  const activeMatch = MATCHES.find(m => m.vibe === vibe && m.profile === profile) || MATCHES[0];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The Configurator */}
          <div className="relative z-20 space-y-16">
            <div>
              <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-4">Build Your Pour</div>
              <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                The Mood<br/>
                <span className="italic text-white/50">Matcher</span>
              </h2>
              <p className="text-white/50 font-sans max-w-sm">Adjust the sliders below to find the perfect bottle for your exact situation.</p>
            </div>

            <div className="space-y-12">
              {/* Vibe Slider */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/40">
                  <span className={vibe === 0 ? "text-primary" : ""}>Relaxed</span>
                  <span className={vibe === 1 ? "text-primary" : ""}>Energetic</span>
                </div>
                <div className="relative h-px w-full bg-white/10">
                  <input 
                    type="range" 
                    min="0" max="1" step="1" 
                    value={vibe} 
                    onChange={(e) => setVibe(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <motion.div 
                    layout
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] pointer-events-none"
                    animate={{ left: vibe === 0 ? "0%" : "100%", x: vibe === 0 ? "-50%" : "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

              {/* Profile Slider */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/40">
                  <span className={profile === 0 ? "text-primary" : ""}>Smooth</span>
                  <span className={profile === 1 ? "text-primary" : ""}>Bold</span>
                </div>
                <div className="relative h-px w-full bg-white/10">
                  <input 
                    type="range" 
                    min="0" max="1" step="1" 
                    value={profile} 
                    onChange={(e) => setProfile(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <motion.div 
                    layout
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] pointer-events-none"
                    animate={{ left: profile === 0 ? "0%" : "100%", x: profile === 0 ? "-50%" : "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>
            </div>
            
            <Link to="/catalog" className="inline-block mt-8 text-xs font-black uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors">
              Explore Entire Catalog
            </Link>
          </div>

          {/* Right: The Spotlight */}
          <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
            {/* Ambient Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMatch.title}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <img 
                  src={activeMatch.img} 
                  alt={activeMatch.title}
                  className="h-2/3 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8"
                />
                <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-2">{activeMatch.title}</h3>
                <p className="text-white/50 font-sans italic">{activeMatch.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
