import { Phone, Truck, Navigation } from "@/components/Icons";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const StickyMobileBar = () => {
  const store = getStoreStatus();
  return (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-gold/30 shadow-deep">
    <div className="flex items-center justify-center gap-2 py-1.5 text-[11px] uppercase tracking-widest text-gold/90">
      <span className={`w-1.5 h-1.5 rounded-full ${store.isOpen ? "bg-gold animate-pulse" : "bg-muted-foreground"}`} /> {store.status}
    </div>
    <div className="grid grid-cols-3 divide-x divide-border border-t border-border/50">
      <a href={`tel:${PHONE}`} className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs active:bg-gold/10">
        <span className="sr-only">Call Johnnies Liquor</span>
        <Phone className="w-5 h-5 text-gold" /> Call
      </a>
      <a href="#delivery" className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs active:bg-gold/10">
        <Truck className="w-5 h-5 text-gold" /> Delivery
      </a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs bg-gradient-gold text-primary-foreground">
        <Navigation className="w-5 h-5" /> Directions
      </a>
    </div>
  </div>
  );
};
