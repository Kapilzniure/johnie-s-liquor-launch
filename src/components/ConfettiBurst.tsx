import type { CSSProperties } from "react";

const DEFAULT_COLORS = ["#B8952A", "hsl(0 85% 50%)", "#111111"];

/** One-shot radial confetti burst + glow ring, used for "you did it" moments (loyalty card, VIP signup). */
export const ConfettiBurst = ({ colors = DEFAULT_COLORS, count = 12 }: { colors?: string[]; count?: number }) => (
  <div className="absolute inset-0 pointer-events-none z-30">
    <div
      className="absolute inset-0 rounded-full animate-pulse-glow"
      style={{ background: "radial-gradient(circle, rgba(184,149,42,0.35) 0%, transparent 70%)" }}
    />
    {Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const dist = 26 + Math.random() * 14;
      const style = {
        "--tx": `${Math.cos(angle) * dist}px`,
        "--ty": `${Math.sin(angle) * dist}px`,
        background: colors[i % colors.length],
      } as CSSProperties;
      return <span key={i} className="confetti-particle" style={style} />;
    })}
  </div>
);
