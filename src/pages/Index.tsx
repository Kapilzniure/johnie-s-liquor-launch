import { useEffect, useState } from "react";
import { ChevronDown } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import Survey from "@/components/Survey";
import { SeasonalAtmosphere } from "@/components/SeasonalAtmosphere";
import { Hero } from "@/components/home/Hero";

import { QuickActions } from "@/components/home/QuickActions";
import { Occasions } from "@/components/home/Occasions";
import { Specials } from "@/components/home/Specials";
import { Favorites } from "@/components/home/Favorites";
import { StaffPicks } from "@/components/home/StaffPicks";
import { OurStory } from "@/components/home/OurStory";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { LoyaltyCard } from "@/components/home/LoyaltyCard";
import { Delivery } from "@/components/home/Delivery";
import { CallStrip } from "@/components/home/CallStrip";
import { VisitUs } from "@/components/home/VisitUs";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <SeasonalAtmosphere />
      <Header />
      <main>
        <Hero />
        <div className="relative z-10">
          <QuickActions />
        </div>
        <Occasions />
        <Specials />
        <Delivery />
        <Favorites />
        <StaffPicks />
        <OurStory />
        <Gallery />
        <Reviews />
        <LoyaltyCard />
        <CallStrip />
        <VisitUs />
      </main>
      <Footer />
      <StickyMobileBar />
      <Survey />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-32 right-4 z-40 p-3 bg-primary text-white shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } md:bottom-8 md:right-6`}
        aria-label="Back to top"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
};

export default Index;
