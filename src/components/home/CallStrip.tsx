import { Phone } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

export const CallStrip = () => (
  <div className="bg-black/60 backdrop-blur-md border-y border-white/5 py-16 relative overflow-hidden">
    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.05]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }}
      aria-hidden
    />

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 max-w-5xl">
      <div className="max-w-2xl text-center md:text-left">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">
          Have a question? Talk to us directly.
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-light text-white tracking-tight leading-tight">
          Friendly experts. Fast answers.<br />
          <span className="italic text-white/50">Zero guesswork.</span>
        </h2>
      </div>
      <a 
        href={`tel:${PHONE}`}
        className="group relative inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] text-white overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 shadow-xl whitespace-nowrap"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Phone className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  </div>
);
