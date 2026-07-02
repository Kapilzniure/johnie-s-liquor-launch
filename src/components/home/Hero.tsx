import { PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { getStoreStatus } from "@/lib/hours";
import { getSeasonTheme } from "@/lib/season";
import { useParallax } from "@/hooks/use-parallax";
import heroBottle from "@/assets/hero-bottle.webp";

// Drop a looped background clip at public/hero.mp4 (and optionally a poster
// frame at public/hero-poster.jpg) whenever it's ready — referenced by plain
// path so the build never depends on the file existing. Keep it short, muted,
// H.264 mp4, ideally under ~8MB, roughly 1280px wide.
const HERO_VIDEO_SRC = "/hero.mp4";
const HERO_POSTER_SRC = "/hero-poster.jpg";

export const Hero = () => {
  const store = getStoreStatus();
  const glow = useParallax(0.06);
  const season = getSeasonTheme();

  return (
    <div id="home" className="relative overflow-hidden" style={{ minHeight: '100svh', background: '#050508' }}>

      {/* Background video (falls back to the plain dark background until the file is supplied) */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark gradient overlay to keep headline legible over the video */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050508] via-[#050508]/80 to-[#050508]" />

      {/* Background Glows */}
      <div ref={glow.ref} className="absolute inset-0 z-0 pointer-events-none" style={{ transform: `translateY(${glow.offset}px)` }}>
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
            {season.headline.line1} <br />
            <span className="text-primary text-glow">{season.headline.line2}</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium leading-relaxed">
            {season.promoText ?? "Austin's Premier Destination for Rare Spirits & Craft Selection. Since 2004."}
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
        <div className="mt-10 pointer-events-none animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <img
            src={heroBottle}
            alt="Featured spirit"
            width={240}
            height={400}
            className="w-[160px] md:w-[240px] mx-auto h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </div>
  );
};
