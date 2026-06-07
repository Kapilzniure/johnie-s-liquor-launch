import { Navigation, Phone, Truck, Instagram, Facebook } from "@/components/Icons";
import { DIRECTIONS_URL, PHONE, IG_URL, FB_URL } from "@/lib/constants";

export const QuickActions = () => {
  const items = [
    { icon: Navigation, label: "Directions", href: DIRECTIONS_URL, ext: true },
    { icon: Phone,      label: "Call Now",   href: `tel:${PHONE}` },
    { icon: Truck,      label: "Order",      href: "#delivery" },
    { icon: Instagram,  label: "Instagram",  href: IG_URL, ext: true },
    { icon: Facebook,   label: "Facebook",   href: FB_URL, ext: true },
  ];
  return (
    <div id="quick" className="py-6 bg-background border-y border-foreground/5">
      <div className="container mx-auto px-6">
        {/* Mobile: horizontal scroll row | Desktop: 5-col grid */}
        <div className="flex md:grid md:grid-cols-5 gap-2 md:gap-6 lg:gap-12 overflow-x-auto scrollbar-hide pb-1 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.ext ? "_blank" : undefined}
              rel={it.ext ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center text-center group hover:translate-y-[-4px] transition-all duration-500 shrink-0 w-[72px] md:w-auto"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-card border border-foreground/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <it.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 group-hover:text-primary transition-colors leading-tight">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
