import { DIRECTIONS_URL, PHONE } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";
import { getSeasonTheme } from "@/lib/season";
import { useParallax } from "@/hooks/use-parallax";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import heroBottle from "@/assets/hero-bottle.webp";

export const Hero = () => {
  const store = getStoreStatus();
  const glow = useParallax(0.06);
  const season = getSeasonTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div
      id="home"
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
    >
      {/* Background Glows */}
      <div ref={glow.ref} className="absolute inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${glow.offset}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center pt-24 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 mb-8 glass-panel rounded-full">
          <div className={`w-2 h-2 rounded-full ${store.isOpen ? 'bg-primary shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-pulse' : 'bg-white/20'}`} />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">{store.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-8 relative">
          <h1 className="text-[clamp(3.5rem,14vw,140px)] leading-[0.8] font-display font-black tracking-tighter text-white italic drop-shadow-2xl">
            {season.headline.line1} <br />
            <span className="text-primary text-glow block mt-2">{season.headline.line2}</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
          <p className="text-base md:text-xl text-white/60 uppercase tracking-[0.2em] font-light leading-relaxed">
            {season.promoText ?? "Austin's Premier Destination for Rare Spirits & Craft Selection. Since 2004."}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            { label: "Open Today" },
            { label: "Rare Finds" },
            { label: "Local Favorites" },
          ].map((chip) => (
            <span key={chip.label} className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-white/70 backdrop-blur-md">
              {chip.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton className="w-full sm:w-auto h-16 px-12 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-none shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,0,0,0.6)]">
            <a href={`tel:${PHONE}`} className="w-full h-full flex items-center justify-center">Call Now</a>
          </MagneticButton>
          <MagneticButton className="w-full sm:w-auto h-16 px-12 glass-panel text-white font-black uppercase tracking-[0.2em] rounded-none hover:bg-white/10 transition-colors">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">Get Directions</a>
          </MagneticButton>
        </motion.div>

        {/* Bottle */}
        <motion.div 
          variants={itemVariants} 
          className="mt-20 pointer-events-none relative"
        >
          {/* Backlight for the bottle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/20 blur-[100px] rounded-full" />
          <img
            src={heroBottle}
            alt="Featured spirit"
            width={240}
            height={400}
            className="w-[180px] md:w-[280px] mx-auto h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] relative z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
