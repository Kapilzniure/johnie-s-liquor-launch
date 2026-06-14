import { Navigation, Phone, Truck, Instagram, Facebook } from "@/components/Icons";
import { DIRECTIONS_URL, PHONE, IG_URL, FB_URL } from "@/lib/constants";

export const QuickActions = () => {
  const items = [
    { icon: Navigation, label: "Maps",      href: DIRECTIONS_URL, ext: true },
    { icon: Phone,      label: "Call",      href: `tel:${PHONE}` },
    { icon: Truck,      label: "Order",     href: "#delivery" },
    { icon: Instagram,  label: "Instagram", href: IG_URL, ext: true },
    { icon: Facebook,   label: "Facebook",  href: FB_URL, ext: true },
  ];
  return (
    <div id="quick" className="py-12 bg-[#050508] border-y border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-12">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.ext ? "_blank" : undefined}
              rel={it.ext ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center p-6 glass-dark group/item hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover/item:scale-110 transition-transform">
                <it.icon className="w-6 h-6 text-white group-hover/item:text-primary transition-colors" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover/item:text-white transition-colors">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
