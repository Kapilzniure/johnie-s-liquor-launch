import { Section } from "@/components/Section";
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
    <section id="quick" className="border-y border-border bg-card/50">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
          {items.map((it) => (
            <a key={it.label} href={it.href} target={it.ext ? "_blank" : undefined} rel={it.ext ? "noopener noreferrer" : undefined}
               className="flex items-center justify-center gap-3 py-6 md:py-7 hover:bg-gold/5 transition-smooth group">
              <it.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-smooth" />
              <span className="font-medium">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
