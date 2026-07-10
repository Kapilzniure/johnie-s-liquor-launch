import { Section } from "@/components/Section";
import { Truck } from "@/components/Icons";
import { DOORDASH_URL, GRUBHUB_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { TiltCard } from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";
import { SiDoordash } from "react-icons/si";
import { ShoppingBag } from "lucide-react";
import doordashImg from "@/assets/doordash.png";
import grubhubImg from "@/assets/grubhub.png";

const platforms = [
  { name: "DoorDash", href: DOORDASH_URL, trackLabel: "doordash", badge: "30-45 Min",
    description: "Premium on-demand delivery for West Austin. Spirits, wine, and beer at your door.",
    Icon: SiDoordash, brandColor: "#FF3008", img: doordashImg },
  { name: "GrubHub",  href: GRUBHUB_URL,  trackLabel: "grubhub",  badge: "30-50 Min",
    description: "Reliable boutique service. Real-time tracking from our shelf to your hands.",
    Icon: ShoppingBag, brandColor: "#FF8000", img: grubhubImg },
];

export const Delivery = () => (
  <Section id="delivery" className="" eyebrow="White-Glove Delivery" title="From Cellar To Door" subtitle="Elite delivery partners. Your selection from our shelf to your door in under 60 minutes.">
    <div className="grid md:grid-cols-2 gap-8 px-1">
      {platforms.map((p) => (
        <TiltCard key={p.name}>
          <a href={p.href} target="_blank" rel="noopener noreferrer"
            onClick={() => trackEvent('delivery_click', p.trackLabel)}
            className="group relative flex flex-col items-center justify-center gap-6 bg-white/[0.02] backdrop-blur-3xl p-12 hover:bg-white/5 transition-colors border border-white/[0.08] shadow-2xl rounded-3xl h-full overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-transparent">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:opacity-20 transition-opacity duration-700" />
            </div>

            {/* Brand Glow Background */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" 
                 style={{ background: `radial-gradient(circle at center, ${p.brandColor} 0%, transparent 40%)` }} 
            />
            <div className="flex justify-between items-start mb-10 relative z-10 w-full transition-opacity duration-700"
                 style={{ '--brand-color': p.brandColor } as React.CSSProperties}
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-white/50 group-hover:scale-110 transition-all duration-700 rounded-full group-hover:text-[var(--brand-color)] group-hover:bg-white group-hover:opacity-100">
                <p.Icon className="w-8 h-8 transition-colors duration-500 opacity-50 group-hover:opacity-100" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary transition-colors">{p.badge}</span>
            </div>
            <div className="relative z-10 w-full text-center mt-auto">
              <div className="transition-opacity duration-700">
                <h4 className="text-2xl font-display font-black text-white mb-4 tracking-tight uppercase">{p.name}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-8 group-hover:opacity-0 transition-opacity duration-700">{p.description}</p>
              </div>
              <Magnetic>
                <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-white group-hover:bg-primary transition-all duration-500 shadow-sm">
                  Access Platform
                </div>
              </Magnetic>
            </div>
          </a>
        </TiltCard>
      ))}
    </div>
  </Section>
);
