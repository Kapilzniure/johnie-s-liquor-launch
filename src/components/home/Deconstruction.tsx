import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import charTexture from "@/assets/char_texture.png";
import harvestGrains from "@/assets/harvest_grains.png";
import liquidSplash from "@/assets/liquid_splash.png";

export const Deconstruction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3 Phases Opacity Maps
  const opacityChar = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const opacityHarvest = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const opacityLiquid = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  // Text Animations
  const charTextY = useTransform(scrollYProgress, [0, 0.15], [100, 0]);
  const charTextOp = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.33], [0, 1, 1, 0]);

  const harvestTextY = useTransform(scrollYProgress, [0.33, 0.45], [100, 0]);
  const harvestTextOp = useTransform(scrollYProgress, [0.33, 0.4, 0.58, 0.66], [0, 1, 1, 0]);

  const liquidTextY = useTransform(scrollYProgress, [0.66, 0.75], [100, 0]);
  const liquidTextOp = useTransform(scrollYProgress, [0.66, 0.7, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- PHASE 1: THE CHAR --- */}
        <motion.div style={{ opacity: opacityChar }} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={charTexture} alt="Char" className="w-full h-full object-cover opacity-60 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
          </div>
          <div className="relative z-10 w-full max-w-7xl px-6 flex justify-center items-center text-center">
             <motion.div style={{ y: charTextY, opacity: charTextOp }} className="w-full max-w-2xl flex flex-col gap-6 items-center mx-auto p-10 md:p-16">
                <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary drop-shadow-md">01 The Char</div>
                <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-[0.85]">
                  Fire &<br/><span className="italic text-white/50">Oak</span>
                </h2>
                <div className="w-16 h-px bg-primary/30 my-2" />
                <p className="text-white/80 font-sans max-w-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium leading-relaxed">
                  A heavy char on new American oak barrels extracts the deep vanilla, caramel, and smoke that defines our rarest bourbons.
                </p>
             </motion.div>
          </div>
        </motion.div>

        {/* --- PHASE 2: THE HARVEST --- */}
        <motion.div style={{ opacity: opacityHarvest }} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={harvestGrains} alt="Harvest" className="w-full h-full object-cover opacity-60 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
          </div>
          <div className="relative z-10 w-full max-w-7xl px-6 flex justify-center items-center text-center">
             <motion.div style={{ y: harvestTextY, opacity: harvestTextOp }} className="w-full max-w-2xl flex flex-col gap-6 items-center mx-auto p-10 md:p-16">
                <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary drop-shadow-md">02 The Harvest</div>
                <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-[0.85]">
                  Winter<br/><span className="italic text-white/50">Wheat</span>
                </h2>
                <div className="w-16 h-px bg-primary/30 my-2" />
                <p className="text-white/80 font-sans max-w-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium leading-relaxed">
                  We seek out spirits born from the finest grains. The softness of winter wheat creates a gentle, sweet profile on the palate.
                </p>
             </motion.div>
          </div>
        </motion.div>

        {/* --- PHASE 3: THE LIQUID --- */}
        <motion.div style={{ opacity: opacityLiquid }} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={liquidSplash} alt="Liquid" className="w-full h-full object-cover opacity-80 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
          </div>
          <div className="relative z-10 w-full max-w-7xl px-6 flex justify-center items-center text-center">
             <motion.div style={{ y: liquidTextY, opacity: liquidTextOp }} className="w-full max-w-2xl flex flex-col gap-6 items-center mx-auto p-10 md:p-16">
                <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary drop-shadow-md">03 The Liquid</div>
                <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-[0.85]">
                  Pure<br/><span className="italic text-white/50">Gold</span>
                </h2>
                <div className="w-16 h-px bg-primary/30 my-2" />
                <p className="text-white/80 font-sans max-w-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium leading-relaxed">
                  The final pour. A symphony of age, climate, and craft resulting in a complex, unforgettable finish.
                </p>
             </motion.div>
          </div>
        </motion.div>

        {/* Persistent Vignette Overlay to maintain focus and readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] pointer-events-none" />
      </div>
    </section>
  );
};
