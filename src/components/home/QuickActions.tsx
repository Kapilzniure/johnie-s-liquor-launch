import { Navigation, Phone, Truck, Instagram, Facebook } from "@/components/Icons";
import { DIRECTIONS_URL, PHONE, IG_URL, FB_URL } from "@/lib/constants";

export const QuickActions = () => {
  const items = [
    { icon: Navigation, label: "Get Directions", href: DIRECTIONS_URL, ext: true },
    { icon: Phone, label: "Call Now", href: `tel:${PHONE}` },
    { icon: Truck, label: "Order Delivery", href: "#delivery" },
    { icon: Instagram, label: "Instagram", href: IG_URL, ext: true },
    { icon: Facebook, label: "Facebook", href: FB_URL, ext: true },
  ];
  return (
    <section id="quick" className="border-y border-white/10 bg-black/40 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {items.map((it) => (
            <a key={it.label} href={it.href} target={it.ext ? "_blank" : undefined} rel={it.ext ? "noopener noreferrer" : undefined}
               className="flex items-center justify-center gap-3 py-6 md:py-7 hover:bg-primary/10 transition-colors group text-white/80 hover:text-white">
              <it.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium text-[11px] uppercase tracking-[0.2em]">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
