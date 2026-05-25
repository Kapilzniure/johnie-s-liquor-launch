import { useEffect, useState } from "react";
import { ChevronDown } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import Survey from "@/components/Survey";
import { Hero } from "@/components/home/Hero";
import { QuickActions } from "@/components/home/QuickActions";
import { Favorites } from "@/components/home/Favorites";
import { Specials } from "@/components/home/Specials";
import { OurStory } from "@/components/home/OurStory";
import { Reviews } from "@/components/home/Reviews";
import { Gallery } from "@/components/home/Gallery";
import { Delivery } from "@/components/home/Delivery";
import { VisitUs } from "@/components/home/VisitUs";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Favorites />
        <Specials />
        <OurStory />
        <Reviews />
        <Gallery />
        <Delivery />
        <VisitUs />
      </main>
      <Footer />
      <StickyMobileBar />
      <WhatsAppButton />
      <Survey />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gold text-primary-foreground shadow-gold transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } md:bottom-8`}
        aria-label="Back to top"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
};

export default Index;
