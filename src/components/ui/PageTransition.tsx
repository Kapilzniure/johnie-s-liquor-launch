import { motion } from "framer-motion";
import { ReactNode } from "react";
import { pageTransitionVariants } from "@/lib/motion";

export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.main
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransitionVariants}
    className="w-full min-h-screen"
  >
    {children}
  </motion.main>
);
