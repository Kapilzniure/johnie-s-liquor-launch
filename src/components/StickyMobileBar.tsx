import { Phone, Truck, Navigation } from "@/components/Icons";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const StickyMobileBar = () => {
  const store = getStoreStatus();
  return (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-black/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
    <div className="flex items-center justify-center gap-2 py-1.5 text-[8px] uppercase tracking-[0.4em] font-black text-white/30 bg-white/5 border-b border-white/5">
      <span className={`w-1 h-1 rounded-full ${store.isOpen ? "bg-primary animate-pulse" : "bg-white/20"}`} /> {store.status}
    </div>
    <div className="grid grid-cols-3 divide-x divide-white/5">
      <a href={`tel:${PHONE}`} className="flex flex-col items-center justify-center gap-2 py-5 font-black uppercase tracking-widest text-[9px] text-white/60 active:bg-primary/20 transition-all">
        <Phone className="w-5 h-5 text-primary" />
        <span>Connect</span>
      </a>
      <a href="#delivery" className="flex flex-col items-center justify-center gap-2 py-5 font-black uppercase tracking-widest text-[9px] text-white/60 active:bg-primary/20 transition-all">
        <Truck className="w-5 h-5 text-primary" />
        <span>Access</span>
      </a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 py-5 font-black uppercase tracking-widest text-[9px] bg-primary text-white active:brightness-110 transition-all">
        <Navigation className="w-5 h-5" />
        <span>Locate</span>
      </a>
    </div>
  </div>
  );
};