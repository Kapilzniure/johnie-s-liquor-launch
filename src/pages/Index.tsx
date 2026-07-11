import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, motion, useMotionTemplate } from "framer-motion";
import { Seo } from "@/components/Seo";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/home/Hero";
import { Deconstruction } from "@/components/home/Deconstruction";
import { Carousel } from "@/components/home/Carousel";
import { FeaturedVideos } from "@/components/home/FeaturedVideos";
import { MoodMatcher } from "@/components/home/MoodMatcher";
import { buildFaqSchema } from "@/lib/structuredData";
import { FAQ_ITEMS } from "@/lib/faq";
import { Gallery } from "@/components/home/Gallery";
import { VisitUs } from "@/components/home/VisitUs";
import { NextPage } from "@/components/NextPage";

const Index = () => {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  
  const mouseXSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const maskImage = useMotionTemplate`radial-gradient(circle 600px at ${mouseXSpring}px ${mouseYSpring}px, black 0%, transparent 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#050505] text-foreground relative min-h-screen selection:bg-primary selection:text-white">
      {/* Background Spotlight Grid */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage,
          WebkitMaskImage: maskImage
        }}
      />
      <div className="grain absolute inset-0 z-50 pointer-events-none opacity-50" />

      <Seo jsonLd={[buildFaqSchema(FAQ_ITEMS)]} />
      <SkipLink />
      
      {/* The Sensory Pour Cinematic Flow */}
      <div id="main" className="relative z-10 flex flex-col bg-[#050505]">
        <Hero />
        <Deconstruction />
        <Carousel />
        <FeaturedVideos />
        <MoodMatcher />
        
        {/* Supporting Architecture */}
        <div className="flex flex-col border-t border-white/[0.02]">
          <Gallery />
          <VisitUs />
        </div>
        
        <NextPage title="VIP Access" href="/vip" />
      </div>

    </div>
  );
};

export default Index;
