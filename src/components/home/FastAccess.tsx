import { Section } from "@/components/Section";
import { Navigation, Phone, Package, Instagram, Facebook } from "@/components/Icons";
import { DIRECTIONS_URL, PHONE, IG_URL, FB_URL } from "@/lib/constants";
import Magnetic from "@/components/ui/Magnetic";

export const FastAccess = () => {
  const actions = [
    { label: "Directions", icon: Navigation, href: DIRECTIONS_URL, external: true },
    { label: "Call", icon: Phone, href: `tel:${PHONE}`, external: false },
    { label: "Pickup", icon: Package, href: "/catalog", external: false },
    { label: "Instagram", icon: Instagram, href: IG_URL, external: true },
    { label: "Facebook", icon: Facebook, href: FB_URL, external: true },
  ];

  return (
    <Section 
      id="fast-access" 
      className="bg-transparent"
      eyebrow="Fast access"
      title="Everything you need, one tap away"
      subtitle="Visit, call, or browse the latest picks without digging around the site."
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 pt-10 max-w-5xl mx-auto px-4">
        {actions.map((act) => (
          <Magnetic key={act.label}>
            <a 
              href={act.href} 
              target={act.external ? "_blank" : undefined}
              rel={act.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-4 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group shadow-xl h-full"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-md">
                <act.icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors text-center mt-2">{act.label}</span>
            </a>
          </Magnetic>
        ))}
      </div>
    </Section>
  );
};
