import { Section } from "@/components/Section";
import storeInside from "@/assets/johnniesliquor.webp";
import { Award, Package, Star } from "@/components/Icons";
import { useCounter } from "@/hooks/use-counter";

const StatBlock = ({ icon: Icon, value, suffix, label, duration, display }: {
  icon: React.ComponentType<{ className?: string }>;
  value: number; suffix: string; label: string; duration: number; display?: string;
}) => {
  const { count, ref } = useCounter(value, duration);
  return (
    <div className="flex items-center gap-10 group" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-3xl font-display font-black leading-none mb-1 italic tabular-nums">
          {display ?? `${count}${suffix}`}
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">{label}</div>
      </div>
    </div>
  );
};

export const OurStory = () => (
  <Section id="story" className="" eyebrow="The Heritage" title="An Austin Original" subtitle="For over two decades, we've been more than just a store — we're a part of the local fabric.">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      <div className="animate-fade-up">
        <div className="relative mb-8">
          <p className="text-lg md:text-2xl font-display font-black italic leading-tight text-white/90 mb-6">
            "Every bottle has a story. Our mission is to help you find the one that fits yours."
          </p>
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-sm text-primary/60 italic">Hand-crafted selection</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
          <StatBlock icon={Award}   value={20}   suffix="+" label="Years in Austin"  duration={1400} />
          <StatBlock icon={Package} value={3200} suffix="+" label="Curated Products" duration={2000} />
          <StatBlock icon={Star}    value={48}   suffix=""  label="Customer Rating"  duration={1200} display="4.8★" />
        </div>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-2xl p-3 relative group overflow-hidden rounded-3xl">
          <img src={storeInside} alt="Johnnies Interior"
            className="w-full h-auto transition-all duration-1000 group-hover:scale-105 rounded-xl" />
        </div>
        <div className="absolute -bottom-4 right-4 bg-primary text-white px-5 py-3 shadow-2xl rotate-[-2deg] rounded-xl border border-primary/20">
          <div className="text-xl font-display font-black italic">EST. 2004</div>
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-80">Local Neighborhood Shop</div>
        </div>
      </div>

    </div>
  </Section>
);
