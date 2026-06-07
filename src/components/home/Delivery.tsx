import { Section } from "@/components/Section";
import { Truck } from "@/components/Icons";
import { DOORDASH_URL, GRUBHUB_URL } from "@/lib/constants";

const track = (action: string, label?: string) => {
  try {
    const windowWithGtag = window as typeof window & { gtag?: (type: string, action: string, data: Record<string, unknown>) => void };
    windowWithGtag.gtag?.('event', action, { event_category: 'cta', event_label: label });
  } catch { /* ignore */ }
};

const platforms = [
  {
    name: "DoorDash",
    href: DOORDASH_URL,
    trackLabel: "doordash",
    badge: "Fast Delivery",
    description: '"Fast local delivery across West Austin. Perfect for last-minute gatherings."',
    eta: "~30–45 min",
    accentBorder: "border-t-4 border-primary",
    badgeClass: "text-primary border-2 border-primary",
    iconClass: "text-primary",
  },
  {
    name: "GrubHub",
    href: GRUBHUB_URL,
    trackLabel: "grubhub",
    badge: "Easy Tracking",
    description: '"Reliable door-to-door service. Live tracking from the shelf to your hand."',
    eta: "~30–50 min",
    accentBorder: "border-t-4 border-amber",
    badgeClass: "text-amber border-2 border-amber",
    iconClass: "text-amber",
  },
];

export const Delivery = () => (
  <Section id="delivery" eyebrow="On Demand" title="Order From Home" subtitle="Get your favorites delivered directly to your door. Partnered with the best." className="bg-background paper-texture">
    <div className="grid md:grid-cols-2 gap-6">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('delivery_click', p.trackLabel)}
          className={`bg-card p-5 lg:p-7 shadow-editorial hover:translate-y-[-4px] transition-all group flex flex-col relative overflow-hidden ${p.accentBorder}`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Truck className="w-16 h-16 rotate-[-12deg]" />
          </div>

          <div className="flex justify-between items-start mb-5 relative z-10">
            <div className={`w-10 h-10 bg-foreground/5 border border-foreground/10 flex items-center justify-center ${p.iconClass}`}>
              <Truck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 ${p.badgeClass}`}>{p.name}</span>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-display font-black uppercase tracking-tighter mb-1">{p.name}</h4>
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">{p.badge} · {p.eta}</div>
            <p className="text-muted-foreground font-medium italic text-sm leading-relaxed">{p.description}</p>
          </div>

          <div className="mt-5 pt-4 border-t border-foreground/5 flex items-center justify-between relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center gap-2">
              Order Now
              <span className="w-6 h-[1px] bg-primary" />
            </span>
            <span className="font-hand text-xl text-primary/30">Verified</span>
          </div>
        </a>
      ))}
    </div>
  </Section>
);
