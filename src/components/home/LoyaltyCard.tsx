import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ConfettiBurst } from "@/components/ConfettiBurst";
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
  const [burst, setBurst] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Reset when scrolling out of view
  useEffect(() => {
    if (!isInView) {
      setStamped(0);
      setBurst(false);
    }
  }, [isInView]);

  // Animate stamps filling in when in view
  useEffect(() => {
    if (!isInView) return;
    if (stamped >= TOTAL_STAMPS) return;
    
    const id = setTimeout(() => setStamped((s) => s + 1), stamped === 0 ? 600 : 220);
    return () => clearTimeout(id);
  }, [stamped, isInView]);

  // One-shot confetti burst the moment the final stamp (the star) lands
  useEffect(() => {
    if (stamped !== TOTAL_STAMPS) return;
    setBurst(true);
    const id = setTimeout(() => setBurst(false), 1000);
    return () => clearTimeout(id);
  }, [stamped]);

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-xl mx-auto overflow-hidden rounded-[1.25rem] border border-black/10 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9)] aspect-video flex flex-col justify-between"
      style={{ background: "#ffffff" }}
      role="img"
      aria-label="Johnnies Loyalty Card — collect 10 stamps, reach the star for a free shot"
    >
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="shine-el shine-el-gold shine-loop-el" />
      </div>
      {/* ── Card header ──────────────────────────────────── */}
      <div className="px-3 pt-3 pb-2 sm:px-6 sm:pt-4 sm:pb-2">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          {/* Left — brand */}
          <div className="w-full sm:w-auto">
            <div
              className="font-display font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(1.05rem, 3.25vw, 2.6rem)", color: "#111" }}
            >
              JOHNNIE'S LIQUOR
            </div>
            {/* Gold rule */}
            <div className="my-1" style={{ height: "2px", background: "#B8952A", width: "100%" }} />
            <div
              className="font-black uppercase tracking-[0.2em] text-[0.65rem] sm:text-sm"
              style={{ color: "#111", letterSpacing: "0.22em" }}
            >
              SPIRITS &nbsp;·&nbsp; WINE &nbsp;·&nbsp; BEER &nbsp;·&nbsp; MORE
            </div>
          </div>

          {/* Right — "LOYALTY CARD" */}
          <div className="shrink-0 text-left sm:text-right">
            <div
              className="font-display font-black italic leading-tight"
              style={{ fontSize: "clamp(0.85rem, 2.6vw, 1.5rem)", color: "#111" }}
            >
              LOYALTY<br />CARD
            </div>
            {/* Gold underline */}
            <div className="mt-0.25" style={{ height: "2px", background: "#B8952A" }} />
          </div>
        </div>
      </div>

      {/* ── Black banner ─────────────────────────────────── */}
      <div
        className="px-2 py-1 sm:py-1.5 text-center text-[0.6rem] sm:text-xs font-bold md:text-sm"
        style={{ background: "#111", color: "#fff" }}
      >
        Reach the{" "}
        <span style={{ color: "#B8952A" }} className="font-black">STAR</span>
        {" "}to get a{" "}
        <span style={{ color: "#B8952A" }} className="font-black">FREE</span>
        {" "}shot from the basket!
      </div>

      {/* ── Stamp grid ───────────────────────────────────── */}
      <div className="px-2 py-2 sm:px-6 sm:py-3 flex-1 flex flex-col justify-center" style={{ borderBottom: "2px solid #111" }}>
        <div className="grid grid-cols-10 border-l border-t w-full" style={{ borderColor: "#111" }}>
          {Array.from({ length: TOTAL_STAMPS }).map((_, i) => {
            const isStar = i === TOTAL_STAMPS - 1;
            const isStamped = i < stamped;

            return (
              <div
                key={i}
                className="relative aspect-square flex items-center justify-center transition-all duration-200 border-r border-b"
                style={{
                  borderColor: "#111",
                  background: isStamped && isStar ? "rgba(184,149,42,0.08)" : "transparent",
                }}
              >
                {isStar ? (
                  <StarIcon
                    filled={isStamped}
                    className={`w-4 h-4 sm:w-7 sm:h-7 md:w-9 md:h-9 transition-all duration-300 ${
                      isStamped ? "scale-110 animate-stamp-pop" : "scale-90 opacity-60"
                    }`}
                  />
                ) : isStamped ? (
                  /* Stamped mark — bold X in red matching the website primary */
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7 transition-all duration-200 animate-stamp-pop" aria-hidden>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="hsl(0 85% 50%)" strokeWidth="3" strokeLinecap="round" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="hsl(0 85% 50%)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ) : null}
                {isStar && burst && <ConfettiBurst />}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Card footer ──────────────────────────────────── */}
      <div className="flex flex-col gap-1 px-2 py-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1 sm:px-6 sm:py-2">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <span className="text-[0.72rem] font-bold sm:text-sm" style={{ color: "#111" }}>{PHONE_DISPLAY}</span>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "32px", background: "#B8952A" }} className="hidden sm:block" aria-hidden />

        {/* Address */}
        <div className="flex items-center gap-2">
          <MapPinIcon />
          <span className="text-[0.68rem] font-medium sm:text-sm" style={{ color: "#111", lineHeight: 1.35 }}>
            13201 Pond Springs Rd. #203<br />Austin, TX 78729
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "32px", background: "#B8952A" }} className="hidden sm:block" aria-hidden />

        {/* Thank you */}
        <div className="flex items-center gap-2 min-w-0 sm:flex-1 sm:justify-end">
          <StarIcon filled className="w-4 h-4 shrink-0" />
          <span className="text-[0.68rem] font-medium text-center sm:text-sm" style={{ color: "#111" }}>
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
    className="bg-transparent"
    eyebrow="Johnnies Reserve Club"
    title="Loyalty Card"
    subtitle="10 visits. Reach the star. Get a free shot from the basket — it's that simple."
  >
    <PhysicalCard />

    {/* How it works strip */}
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
      {[
        { step: "01", title: "Visit & Shop", desc: "Every time you visit the store, ask our staff to stamp your card." },
        { step: "02", title: "Collect Stamps", desc: "Fill all 9 squares to reach the gold star on your 10th visit." },
        { step: "03", title: "Claim Your Shot", desc: "Show the completed card and pick a free shot from our basket." },
      ].map((item, i) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          key={item.step}
          className="group relative overflow-hidden glass-smoked p-5 md:p-6 rounded-2xl hover:bg-white/5 hover:border-primary/30 transition-all duration-700 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                Step {item.step}
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-md">
                 <StarIcon filled className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <h3 className="text-lg font-display font-black text-white mb-2 tracking-tight uppercase group-hover:text-primary transition-colors duration-500">
              {item.title}
            </h3>
            <p className="text-xs text-white/50 font-medium leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] pt-6 sm:mt-10 sm:flex-row sm:gap-6 sm:pt-8">
      <p className="text-white/40 text-sm font-medium">
        Don't have a card yet? Ask for one next time you're in — it's free.
      </p>
      <a
        href={`tel:${PHONE}`}
        className="group relative inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-10 py-4 font-black uppercase tracking-[0.2em] text-[11px] text-white overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 h-14 w-full sm:w-auto shadow-xl"
      >
        <span className="relative z-10 flex items-center gap-2">
          Call the Store
        </span>
      </a>
    </div>
  </Section>
);
