import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAtmosphere } from "@/components/AtmosphereProvider";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { config } = useAtmosphere();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half the size of the lens glow (which will be 150px)
      cursorX.set(e.clientX - 75);
      cursorY.set(e.clientY - 75);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);



  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: `radial-gradient(circle, ${config.lensFlare} 0%, transparent 70%)`
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 3 : 1,
            opacity: isHovering ? 0.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </motion.div>
    </>
  );
};
