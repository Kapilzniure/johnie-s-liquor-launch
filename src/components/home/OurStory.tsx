import { Section } from "@/components/Section";
import { Award, Package, Star } from "@/components/Icons";
import storeInside from "@/assets/store-inside.webp";
import { useCounter } from "@/hooks/use-counter";

const StatBlock = ({ icon: Icon, value, suffix, label, duration, display }: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  duration: number;
  display?: string; // optional override — use for decimals like "4.8"
}) => {
  const { count, ref } = useCounter(value, duration);
  return (
    <div className="flex items-center gap-10 group" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 rounded-full shadow-xl shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-3xl font-display font-bold leading-none mb-1 uppercase tracking-tighter tabular-nums">
          {display ?? `${count}${suffix}`}
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-black">{label}</div>
      </div>
    </div>
  );
};

export const OurStory = () => (
  <Section
    id="story"
    eyebrow="The Heritage"
    title="An Austin Original"
    subtitle="For over two decades, we've been more than just a store — we're a part of the local fabric."
    className="dark-section bg-background text-foreground"
    glow
  >
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      <div className="animate-fade-up">
        <div className="relative mb-8">
          <p className="text-lg md:text-2xl font-display font-medium leading-tight italic text-foreground/90 mb-6">
            "Every bottle has a story. Our mission is to help you find the one that fits yours."
          </p>
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="font-hand text-3xl text-primary/80 lowercase italic">Hand-crafted selection</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
          <StatBlock icon={Award}   value={20}   suffix="+"  label="Years in Austin"    duration={1400} />
          <StatBlock icon={Package} value={3200} suffix="+"  label="Curated Products"   duration={2000} />
          <StatBlock icon={Star}    value={48}   suffix=""    label="Customer Rating"    duration={1200} display="4.8★" />
        </div>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-card p-4 shadow-2xl relative overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={storeInside}
              alt="Johnnies Liquor Interior"
              className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="absolute top-10 left-[-20px] rotate-[-90deg] origin-top-left">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">WEST AUSTIN TRADITION</span>
          </div>
        </div>

        <div className="absolute -bottom-6 right-6 bg-primary text-white p-6 shadow-2xl rotate-[-2deg]">
          <div className="text-2xl font-display font-black leading-none mb-1 italic">EST. 2004</div>
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-80 border-t border-white/20 pt-2 mt-2">Local Neighborhood Shop</div>
        </div>
      </div>

    </div>
  </Section>
);
