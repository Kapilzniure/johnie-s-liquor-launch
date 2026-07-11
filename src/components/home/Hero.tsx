import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-bg.mp4";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Cinematic Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full pt-20">
        
        <div className="relative z-30 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-display italic text-3xl md:text-4xl tracking-wide drop-shadow-lg mb-2 md:mb-0 block text-center">
              Welcome to
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <h1 className="text-[16vw] md:text-[12vw] font-serif font-black uppercase tracking-tighter text-white leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              JOHNNIE'S
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="mt-6 md:mt-8 text-center"
          >
             <p className="text-white/60 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold">Fine Spirits & Quality Goods</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 z-40"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
            Unwind
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};
