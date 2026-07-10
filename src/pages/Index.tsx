import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useTransform, motion, useMotionTemplate } from "framer-motion";
import { Seo } from "@/components/Seo";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/home/Hero";
import { buildFaqSchema } from "@/lib/structuredData";
import { FAQ_ITEMS } from "@/lib/faq";
import { Occasions } from "@/components/home/Occasions";
import { StaffPicks } from "@/components/home/StaffPicks";
import { Specials } from "@/components/home/Specials";
import { OurStory } from "@/components/home/OurStory";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { Faq } from "@/components/home/Faq";
import { LoyaltyCard } from "@/components/home/LoyaltyCard";
import { VipClub } from "@/components/home/VipClub";
import { VisitUs } from "@/components/home/VisitUs";
import { QuickActions } from "@/components/home/QuickActions";
import { Delivery } from "@/components/home/Delivery";
import { Favorites } from "@/components/home/Favorites";
import { CallStrip } from "@/components/home/CallStrip";

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
      
      {/* Scrollable Content Layer */}
      <div id="main" className="relative z-10 flex flex-col pt-16">
        <Hero />
        
        {/* We use clear spacing between sections now instead of overlapping chaos */}
        <div className="flex flex-col gap-24 sm:gap-32 py-24">
          <QuickActions />
          <Specials />
          <Delivery />
          <Favorites />
          <Occasions />
          <StaffPicks />
          <OurStory />
          <Gallery />
          <Reviews />
          <Faq />
          <LoyaltyCard />
          <VipClub />
          <CallStrip />
          <VisitUs />
        </div>
      </div>

    </div>
  );
};

export default Index;
