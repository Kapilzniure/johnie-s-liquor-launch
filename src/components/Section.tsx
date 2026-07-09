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
      className={`relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {(eyebrow || title) && (
          <div className="max-w-4xl mb-20 md:mb-32">
            {eyebrow && (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-6 flex items-center gap-4"
              >
                <div className="w-8 h-px bg-primary" />
                {eyebrow}
              </motion.div>
            )}
            {title && (
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="text-5xl md:text-8xl lg:text-9xl font-display font-black italic leading-[0.8] tracking-tighter text-white"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="mt-10 text-lg md:text-xl text-white/40 font-light max-w-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
