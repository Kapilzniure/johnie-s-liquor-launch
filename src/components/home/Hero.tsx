import { PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { getStoreStatus } from "@/lib/hours";
import heroBottle from "@/assets/hero-bottle.webp";

export const Hero = () => {
  const store = getStoreStatus();
  return (
    <div id="home" className="relative overflow-hidden" style={{ minHeight: '100svh', background: '#050508' }}>

      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center" style={{ paddingBottom: '60px' }}>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-3 py-1 mb-8 glass-dark rounded-full border border-white/10 animate-fade-up">
          <div className={`w-1.5 h-1.5 rounded-full ${store.isOpen ? 'bg-primary shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse' : 'bg-white/20'}`} />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/70">{store.badge}</span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-[clamp(3rem,12vw,120px)] leading-[0.85] font-display font-black tracking-tighter text-white animate-fade-up italic">
            PURE <br />
            <span className="text-primary text-glow">HERITAGE</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium leading-relaxed">
            Austin's Premier Destination for Rare Spirits & Craft Selection. Since 2004.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="w-full sm:w-auto h-14 px-12 bg-white text-black font-black uppercase tracking-widest rounded-none hover:bg-primary hover:text-white transition-all duration-500 border-none">
            <a href={`tel:${PHONE}`}>Call Now</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-12 glass-dark text-white border-white/10 font-black uppercase tracking-widest rounded-none hover:bg-white/5 transition-all">
            <a href="#specials">Browse Catalog</a>
          </Button>
        </div>

        {/* Bottle */}
        <div className="mt-10 animate-fade-up pointer-events-none" style={{ animationDelay: '0.3s' }}>
          <img
            src={heroBottle}
            alt="Featured spirit"
            className="w-[160px] md:w-[240px] mx-auto h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </div>
  );
};
