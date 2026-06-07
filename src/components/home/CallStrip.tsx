import { Phone } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

export const CallStrip = () => (
  <div className="bg-primary py-8 relative overflow-hidden">
    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.08]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }}
      aria-hidden
    />
    {/* Diagonal stripe accent */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute -right-20 top-0 bottom-0 w-64 bg-white/[0.03] skew-x-[-12deg]" />
      <div className="absolute -right-4 top-0 bottom-0 w-24 bg-white/[0.04] skew-x-[-12deg]" />
    </div>

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70 mb-2">
          Have a question? Talk to us directly.
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight leading-none">
          We're here to help.
        </h2>
      </div>
      <a
        href={`tel:${PHONE}`}
        className="flex items-center gap-3 bg-white text-primary px-6 py-3 font-black text-base md:text-lg tracking-tight hover:bg-white/90 transition-colors whitespace-nowrap shadow-2xl"
      >
        <Phone className="w-6 h-6" />
        {PHONE_DISPLAY}
      </a>
    </div>
  </div>
);
