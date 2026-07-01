import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { PHONE, PHONE_DISPLAY, ADDRESS } from "@/lib/constants";

const TOTAL_STAMPS = 10;

// Gold star SVG matching the physical card
const StarIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={filled ? "#B8952A" : "none"}
      stroke="#B8952A"
      strokeWidth={filled ? "0" : "1.5"}
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#B8952A" aria-hidden>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#B8952A" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhysicalCard = () => {
  const [stamped, setStamped] = useState(0);

  // Animate stamps filling in on mount
  useEffect(() => {
    if (stamped >= TOTAL_STAMPS) return;
    const id = setTimeout(() => setStamped((s) => s + 1), 220);
    return () => clearTimeout(id);
  }, [stamped]);

  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9)]"
      style={{ background: "#ffffff" }}
      role="img"
      aria-label="Johnnies Loyalty Card — collect 10 stamps, reach the star for a free shot"
    >
      {/* ── Card header ──────────────────────────────────── */}
      <div className="px-8 pt-7 pb-5">
        <div className="flex items-start justify-between gap-4">
          {/* Left — brand */}
          <div>
            <div
              className="font-display font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", color: "#111" }}
            >
              JOHNNIE'S LIQUOR
            </div>
            {/* Gold rule */}
            <div className="my-2" style={{ height: "2px", background: "#B8952A", width: "100%" }} />
            <div
              className="font-black uppercase tracking-[0.25em] text-sm"
              style={{ color: "#111", letterSpacing: "0.22em" }}
            >
              SPIRITS &nbsp;·&nbsp; WINE &nbsp;·&nbsp; BEER &nbsp;·&nbsp; MORE
            </div>
          </div>

          {/* Right — "LOYALTY CARD" */}
          <div className="text-right shrink-0">
            <div
              className="font-display font-black italic leading-tight"
              style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", color: "#111" }}
            >
              LOYALTY<br />CARD
            </div>
            {/* Gold underline */}
            <div className="mt-1" style={{ height: "2px", background: "#B8952A" }} />
          </div>
        </div>
      </div>

      {/* ── Black banner ─────────────────────────────────── */}
      <div
        className="px-8 py-3 text-center text-sm md:text-base font-bold"
        style={{ background: "#111", color: "#fff" }}
      >
        Reach the{" "}
        <span style={{ color: "#B8952A" }} className="font-black">STAR</span>
        {" "}to get a{" "}
        <span style={{ color: "#B8952A" }} className="font-black">FREE</span>
        {" "}shot from the basket!
      </div>

      {/* ── Stamp grid ───────────────────────────────────── */}
      <div className="px-6 py-5" style={{ borderBottom: "2px solid #111" }}>
        <div className="grid grid-cols-10 border-l border-t" style={{ borderColor: "#111" }}>
          {Array.from({ length: TOTAL_STAMPS }).map((_, i) => {
            const isStar = i === TOTAL_STAMPS - 1;
            const isStamped = i < stamped;

            return (
              <div
                key={i}
                className="aspect-square flex items-center justify-center transition-all duration-200 border-r border-b"
                style={{
                  borderColor: "#111",
                  background: isStamped && isStar ? "rgba(184,149,42,0.08)" : "transparent",
                }}
              >
                {isStar ? (
                  <StarIcon
                    filled={isStamped}
                    className={`w-7 h-7 md:w-9 md:h-9 transition-all duration-300 ${
                      isStamped ? "scale-110" : "scale-90 opacity-60"
                    }`}
                  />
                ) : isStamped ? (
                  /* Stamped mark — bold X in red matching the website primary */
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7 transition-all duration-200" aria-hidden>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="hsl(0 85% 50%)" strokeWidth="3" strokeLinecap="round" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="hsl(0 85% 50%)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Card footer ──────────────────────────────────── */}
      <div className="px-6 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <span className="font-bold text-sm" style={{ color: "#111" }}>{PHONE_DISPLAY}</span>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "32px", background: "#B8952A" }} className="hidden sm:block" aria-hidden />

        {/* Address */}
        <div className="flex items-center gap-2">
          <MapPinIcon />
          <span className="text-sm font-medium" style={{ color: "#111", lineHeight: 1.35 }}>
            13201 Pond Springs Rd. #203<br />Austin, TX 78729
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "32px", background: "#B8952A" }} className="hidden sm:block" aria-hidden />

        {/* Thank you */}
        <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
          <StarIcon filled className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium text-center" style={{ color: "#111" }}>
            We appreciate your patronage<br />and support!
          </span>
          <StarIcon filled className="w-4 h-4 shrink-0" />
        </div>
      </div>

      {/* Bottom gold rule */}
      <div style={{ height: "4px", background: "#B8952A" }} />
    </div>
  );
};

export const LoyaltyCard = () => (
  <Section
    id="loyalty"
    className="bg-[#050508]"
    eyebrow="Johnnies Reserve Club"
    title="Loyalty Card"
    subtitle="10 visits. Reach the star. Get a free shot from the basket — it's that simple."
  >
    <PhysicalCard />

    {/* How it works strip */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-1">
      {[
        { step: "01", title: "Visit & Shop", desc: "Every time you visit the store, ask our staff to stamp your card." },
        { step: "02", title: "Collect Stamps", desc: "Fill all 9 squares to reach the gold star on your 10th visit." },
        { step: "03", title: "Claim Your Shot", desc: "Show the completed card and pick a free shot from our basket." },
      ].map((item) => (
        <div
          key={item.step}
          className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors duration-500"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-3">
            {item.step}
          </div>
          <h3 className="text-lg font-display font-black italic text-white mb-3 tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-white/40 font-medium leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
      <p className="text-white/30 text-sm font-medium">
        Don't have a card yet? Ask for one next time you're in — it's free.
      </p>
      <a
        href={`tel:${PHONE}`}
        className="h-14 px-10 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-boutique whitespace-nowrap"
      >
        Call the Store
      </a>
    </div>
  </Section>
);
