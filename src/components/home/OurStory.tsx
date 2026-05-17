import { Section } from "@/components/Section";
import { Award, Package, Star } from "@/components/Icons";
import { MAPS_URL } from "@/lib/constants";

export const OurStory = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Years serving Austin" },
    { icon: Package, value: "3.2k", label: "Products in store" },
    { icon: Star, value: "4.8★", label: "Customer rating" },
  ];
  return (
    <Section id="story" eyebrow="Our Story" title="A family-owned Austin staple" subtitle="Proudly serving Austin for 20+ years — focused on great selection, fair prices, and friendly service.">
      <div className="grid md:grid-cols-3 gap-5">
        {stats.map((s) => (
          <a
            key={s.label}
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-2xl bg-gradient-card border border-border text-center hover-lift hover:border-gold/50 transition-smooth"
          >
            <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
            <div className="text-5xl md:text-6xl font-display font-bold gradient-gold-text leading-none">{s.value}</div>
            <div className="mt-3 text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
          </a>
        ))}
      </div>
    </Section>
  );
};
