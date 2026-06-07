import { Phone, Truck, Navigation } from "@/components/Icons";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const StickyMobileBar = () => {
  const store = getStoreStatus();
  return (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t-4 border-primary shadow-2xl" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
    <div className="flex items-center justify-center gap-2 py-2 text-[10px] uppercase tracking-[0.4em] font-black text-primary/80 bg-primary/5">
      <span className={`w-1.5 h-1.5 rounded-full ${store.isOpen ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} /> {store.status}
    </div>
    <div className="grid grid-cols-3 divide-x-2 divide-border/50 border-t-2 border-border/50">
      <a href={`tel:${PHONE}`} className="flex flex-col items-center justify-center gap-1.5 py-4 font-black uppercase tracking-widest text-[10px] active:bg-primary/10">
        <Phone className="w-5 h-5 text-primary" />
        <span>Call</span>
      </a>
      <a href="#delivery" className="flex flex-col items-center justify-center gap-1.5 py-4 font-black uppercase tracking-widest text-[10px] active:bg-primary/10">
        <Truck className="w-5 h-5 text-primary" />
        <span>Order</span>
      </a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1.5 py-4 font-black uppercase tracking-widest text-[10px] bg-primary text-white">
        <Navigation className="w-5 h-5" />
        <span>Find Us</span>
      </a>
    </div>
  </div>
  );
};