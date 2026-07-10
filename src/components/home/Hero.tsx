import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "@/components/Icons";
import { ADDRESS } from "@/lib/constants";
import { SplitText } from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import heroBottle from "@/assets/hero-bottle.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content (Cinematic Text & Magnetic Buttons) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              Welcome to Johnnie's
            </span>
          </motion.div>

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.85] tracking-tight mb-8">
            <SplitText text="PREMIER" />
            <SplitText text="SELECTION" delay={0.2} className="text-primary" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm sm:text-base text-white/60 font-medium max-w-lg mb-10 leading-relaxed"
          >
            Discover Pasadena's most exquisite collection of rare bourbons, vintage wines, and craft spirits. Curated for the connoisseur, delivered with prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Magnetic>
              <Link 
                to="/catalog" 
                className="group relative inline-flex items-center justify-center gap-3 bg-white/[0.05] backdrop-blur-3xl border border-white/10 shadow-2xl rounded-full px-8 py-4 font-black uppercase tracking-[0.2em] text-[11px] text-white overflow-hidden transition-all hover:bg-white/10 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 font-black uppercase tracking-[0.2em] text-[11px] text-white/60 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 shadow-sm flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Visit Store</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center z-0 lg:ml-10">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full flex items-center justify-center"
          >
            <img 
              src={heroBottle} 
              alt="Premium Bourbon" 
              className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(178,34,34,0.3)] filter brightness-110 contrast-125"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
