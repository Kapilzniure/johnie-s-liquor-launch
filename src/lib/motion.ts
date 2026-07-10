// Master physics and motion configuration for Project Afterglow

export const motionConfig = {
  // Standard slow, deliberate ease. Imitates heavy glass/wood moving.
  ease: [0.22, 1, 0.36, 1],
  
  // Spring settings for tactile, magnetic elements
  spring: {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 1.2
  },
  
  // Stagger times for lists/children
  stagger: 0.1
};

export const pageTransitionVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: motionConfig.ease,
      staggerChildren: motionConfig.stagger
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    filter: "blur(10px)",
    transition: { 
      duration: 0.5, 
      ease: motionConfig.ease 
    }
  }
};
