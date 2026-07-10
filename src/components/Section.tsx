import React from "react";
import { motion } from "framer-motion";

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className={`relative overflow-hidden py-32 z-20 ${className}`}
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-24 relative z-20">
            {eyebrow && (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">{eyebrow}</span>
              </motion.div>
            )}
            {title && (
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="mt-8 max-w-xl text-lg text-white/50 leading-relaxed font-sans"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
