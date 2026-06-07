import { Phone, Navigation, Truck } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";
import heroStore from "@/assets/hero-store.webp";
import heroBottle from "@/assets/hero-bottle.webp";

const track = (action: string, label?: string) => {
  try {
    const w = window as typeof window & { gtag?: (t: string, a: string, d: Record<string, unknown>) => void };
    w.gtag?.('event', action, { event_category: 'cta', event_label: label });
  } catch { /* ignore */ }
};

export const Hero = () => {
  const store = getStoreStatus();
  return (
  /* py-0 overrides the global "section { py-20 }" base rule so hero has no extra padding */
  <div id="home" className="relative overflow-hidden" style={{ minHeight: '100svh' }}>

    {/* Full-bleed store photo */}
    <img
      src={heroStore}
      alt="Inside Johnnies Liquor Store, Austin TX"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    {/* Dark overlays so text pops */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

    <div className="container mx-auto px-6 relative z-10 pb-12" style={{ paddingTop: '72px' }}>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">

        {/* ── Text ── */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Live store status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 border border-primary/30 bg-background/40 backdrop-blur-sm">
            <div className={`w-2 h-2 rounded-full ${store.isOpen ? 'bg-primary animate-pulse' : 'bg-foreground/40'}`} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{store.badge}</span>
          </div>

          {/* Cursive / handwritten title */}
          <h1 className="font-hand normal-case text-[clamp(3.6rem,10vw,92px)] leading-[0.9] text-foreground mb-3">
            Johnnies<br />
            <span className="text-primary">Liquor Store</span>
          </h1>

          {/* Quote */}
          <div className="max-w-lg mb-5">
            <p className="text-sm md:text-lg lg:text-xl font-display font-medium text-foreground/80 leading-snug italic">
              "Fine spirits, local wine, and the city's coldest selection of craft beer."
            </p>
          </div>

          {/* 3 CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button asChild className="h-12 lg:h-14 px-8 bg-primary text-white font-black tracking-widest uppercase text-xs rounded-none shadow-ink hover:bg-foreground hover:text-background transition-all duration-500">
              <a href={`tel:${PHONE}`} onClick={() => track('call_click', 'hero')}><Phone className="w-4 h-4 mr-2" />Call Now</a>
            </Button>
            <Button asChild variant="outline" className="h-12 lg:h-14 px-8 border-foreground/30 text-foreground bg-background/20 backdrop-blur-sm font-black tracking-widest uppercase text-xs rounded-none hover:bg-foreground/10 transition-all duration-500">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('directions_click', 'hero')}><Navigation className="w-4 h-4 mr-2" />Get Directions</a>
            </Button>
            <Button asChild variant="outline" className="h-12 lg:h-14 px-8 border-foreground/30 text-foreground bg-background/20 backdrop-blur-sm font-black tracking-widest uppercase text-xs rounded-none hover:bg-foreground/10 transition-all duration-500">
              <a href="#delivery" onClick={() => track('delivery_click', 'hero')}><Truck className="w-4 h-4 mr-2" />Order Delivery</a>
            </Button>
          </div>

          {/* Address line */}
          <div className="mt-8 lg:mt-10 flex flex-col text-[9px] font-black uppercase tracking-[0.25em] text-foreground/40">
            <span>Pond Springs Rd. · West Austin · Est. 2004</span>
          </div>
        </div>

        {/* spacer — only on xl+ where bottle is visible */}
        <div className="hidden xl:block xl:col-span-5" />

      </div>
    </div>

    {/* Bottle — absolute right, desktop only */}
    <div className="hidden xl:block absolute right-20 2xl:right-28 top-0 pointer-events-none z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full" aria-hidden />
        <img
          src={heroBottle}
          alt="Featured whiskey — Johnnies Liquor"
          loading="eager"
          width={768}
          height={1280}
          className="w-[220px] xl:w-[260px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)] rotate-[5deg]"
        />
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-primary/40">
      <span className="text-[10px] font-black uppercase tracking-[0.6em]">Scroll</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
    </div>
  </div>
  );
};
