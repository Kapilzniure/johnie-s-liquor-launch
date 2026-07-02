import { Section } from "@/components/Section";
import { Truck } from "@/components/Icons";
import { DOORDASH_URL, GRUBHUB_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const platforms = [
  { name: "DoorDash", href: DOORDASH_URL, trackLabel: "doordash", badge: "30-45 Min",
    description: "Premium on-demand delivery for West Austin. Spirits, wine, and beer at your door." },
  { name: "GrubHub",  href: GRUBHUB_URL,  trackLabel: "grubhub",  badge: "30-50 Min",
    description: "Reliable boutique service. Real-time tracking from our shelf to your hands." },
];

export const Delivery = () => (
  <Section id="delivery" className="bg-[#050508]" eyebrow="Rapid Access" title="Order Online" subtitle="Elite delivery partners. Your selection from our shelf to your door in under 60 minutes.">
    <div className="grid md:grid-cols-2 gap-1 px-1 bg-white/5">
      {platforms.map((p) => (
        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
          onClick={() => trackEvent('delivery_click', p.trackLabel)}
          className="group bg-[#050508] p-10 hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-700">
              <Truck className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-primary transition-colors">{p.badge}</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-3xl font-display font-black italic text-white mb-4 tracking-tighter uppercase">{p.name}</h4>
            <p className="text-white/40 text-base leading-relaxed mb-8 italic">"{p.description}"</p>
            <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-primary group-hover:text-white transition-colors">
              Access Platform
              <span className="w-10 h-[1px] bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
            </div>
          </div>
        </a>
      ))}
    </div>
  </Section>
);
