import { Phone, Navigation, Truck, Clock, ChevronDown } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_DISPLAY, DIRECTIONS_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";
import hero from "@/assets/hero-store.webp";
import heroBottle from "@/assets/hero-bottle.webp";

// Lightweight GA event helper (no-op if gtag not loaded)
const track = (action: string, label?: string) => {
  try {
    const windowWithGtag = window as typeof window & { gtag?: (type: string, action: string, data: Record<string, unknown>) => void };
    windowWithGtag.gtag?.('event', action, {
      event_category: 'cta',
      event_label: label,
    });
  } catch { /* ignore */ }
};

export const Hero = () => {
  const store = getStoreStatus();
  return (
  <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
    <img src={hero} alt="Inside Johnnies Liquor store in Austin, Texas with shelves of whiskey and wine" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
    <div className="container mx-auto px-5 relative z-10 pt-28 pb-16">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{store.badge}</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]">
          <span className="gradient-gold-text italic">Johnnies</span><br />Liquor Store
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl">
          Wine • Beer • Spirits and more in Austin, TX
        </p>
        <p className="mt-2 text-base text-foreground/60 max-w-xl">
          Fast, friendly service — delivery available.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button asChild variant="gold" size="xl">
            <a href={`tel:${PHONE}`} aria-label={`Call Johnnies Liquor at ${PHONE_DISPLAY}`} onClick={() => track('call_click', 'hero')}><Phone className="w-5 h-5 mr-2" /> Call Now</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Johnnies Liquor on Google Maps" onClick={() => track('directions_click', 'hero')}><Navigation className="w-5 h-5 mr-2" /> Get Directions</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href="#delivery" onClick={() => track('delivery_click', 'hero')}><Truck className="w-5 h-5 mr-2" /> Order Delivery</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold" /> {store.status}
        </p>
      </div>
      <div className="hidden lg:block absolute right-6 xl:right-20 top-20 xl:top-16 z-10 pointer-events-none animate-fade-up">
        <div className="relative">
          <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full scale-75" aria-hidden />
          <img
            src={heroBottle}
            alt="Premium whiskey bottle from Johnnies Liquor selection"
            width={768}
            height={1280}
            className="relative w-[280px] xl:w-[360px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] rotate-[6deg]"
          />
        </div>
      </div>
    </div>
    <a href="#quick" className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gold/70 hover:text-gold transition-smooth">
      <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
      <ChevronDown className="w-5 h-5 animate-bounce" />
    </a>
  </section>
  );
};
