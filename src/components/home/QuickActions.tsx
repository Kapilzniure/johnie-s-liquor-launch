import { Navigation, Phone, Truck, Instagram, Facebook } from "@/components/Icons";
import { DIRECTIONS_URL, PHONE, IG_URL, FB_URL } from "@/lib/constants";

export const QuickActions = () => {
  const items = [
    { icon: Navigation, label: "Directions", href: DIRECTIONS_URL, ext: true },
    { icon: Phone, label: "Call", href: `tel:${PHONE}` },
    { icon: Truck, label: "Pickup", href: "#delivery" },
    { icon: Instagram, label: "Instagram", href: IG_URL, ext: true },
    { icon: Facebook, label: "Facebook", href: FB_URL, ext: true },
  ];
  return (
    <div id="quick" className="py-14 bg-[#090c14] border-y border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Fast access</p>
            <h2 className="text-2xl md:text-3xl font-display font-black italic uppercase tracking-tighter text-white">Everything you need, one tap away</h2>
          </div>
          <p className="text-sm text-white/40 max-w-md">Visit, call, or browse the latest picks without digging around the site.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.ext ? "_blank" : undefined}
              rel={it.ext ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)] group/item hover:border-primary/50 hover:bg-white/[0.06] transition-all duration-500 sm:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover/item:scale-110 sm:h-12 sm:w-12">
                <it.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70 group-hover/item:text-white transition-colors">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
