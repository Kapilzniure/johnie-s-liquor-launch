import { Phone } from "@/components/Icons";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

export const CallStrip = () => (
  <div className="bg-black py-24">
    <div className="container mx-auto px-6 relative z-10">
      <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-2xl p-8 md:p-12 lg:p-16 rounded-[2rem] overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
          aria-hidden
        />

        <div className="flex flex-col items-center text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-6">Concierge</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-white tracking-tighter leading-tight mb-6">
            Need A <span className="font-black italic text-primary block mt-2">Recommendation?</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-md font-medium leading-relaxed mb-10">
            Text or call our store directly. We'll check inventory, set aside bottles, or guide you to something extraordinary.
          </p>
          <a 
            href={`tel:${PHONE}`}
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-black rounded-full px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] overflow-hidden transition-all hover:bg-primary hover:text-white hover:scale-105 shadow-xl whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
