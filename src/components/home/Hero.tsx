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
        
        {/* Massive Minimalist Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-display font-black uppercase tracking-tighter text-white leading-none mix-blend-overlay">
            JOHNNIE'S
          </h1>
        </motion.div>

        {/* The Text Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative z-30"
        >
          <span className="block text-primary font-black uppercase tracking-[0.4em] mb-6 text-sm">Welcome to</span>
        </motion.div>

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
