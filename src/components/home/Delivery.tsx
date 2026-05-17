import { Section } from "@/components/Section";
import { Truck } from "@/components/Icons";
import { DOORDASH_URL, GRUBHUB_URL } from "@/lib/constants";

// Lightweight GA event helper (no-op if gtag not loaded)
const track = (action: string, label?: string) => {
  try {
    const windowWithGtag = window as typeof window & { gtag?: (type: string, action: string, data: Record<string, unknown>) => void };
    windowWithGtag.gtag?.('event', action, {
      event_category: 'cta',
      event_label: label,
    });
  } catch { /* ignore */ }
};

export const Delivery = () => (
  <Section id="delivery" eyebrow="Delivery available" title="Order from home" subtitle="Get your favorite drinks delivered. Available on DoorDash & Grubhub.">
    <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
      <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('delivery_click', 'doordash')}
         className="group flex items-center justify-between p-7 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-2">Order on</div>
          <div className="text-2xl md:text-3xl font-display font-bold">DoorDash</div>
          <p className="text-sm text-muted-foreground mt-1">Fast local delivery</p>
        </div>
        <Truck className="w-10 h-10 text-gold group-hover:scale-110 transition-smooth" />
      </a>
      <a href={GRUBHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('delivery_click', 'grubhub')}
         className="group flex items-center justify-between p-7 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-2">Order on</div>
          <div className="text-2xl md:text-3xl font-display font-bold">Grubhub</div>
          <p className="text-sm text-muted-foreground mt-1">Door-to-door service</p>
        </div>
        <Truck className="w-10 h-10 text-gold group-hover:scale-110 transition-smooth" />
      </a>
    </div>
  </Section>
);
