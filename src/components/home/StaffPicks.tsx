import { Section } from "@/components/Section";
import { PHONE } from "@/lib/constants";
import pBourbon from "@/assets/p-bourbon.webp";
import pTequila from "@/assets/p-tequila.webp";
import pWine from "@/assets/p-wine.webp";

const picks = [
  {
    img: pBourbon,
    staff: "Mike",
    role: "Owner",
    cat: "Whiskey",
    name: "Maker's Mark",
    quote: "My go-to weekend pour. Smooth enough to sip neat, priced right for a Tuesday.",
  },
  {
    img: pTequila,
    staff: "Sarah",
    role: "Store Manager",
    cat: "Tequila",
    name: "Casamigos Blanco",
    quote: "Clean, easy, never harsh. What I hand to anyone who says they \"don't like tequila.\"",
  },
  {
    img: pWine,
    staff: "David",
    role: "Wine Buyer",
    cat: "Wine",
    name: "Josh Cabernet",
    quote: "Punches way above its price point. Our regulars keep coming back for it.",
  },
];

export const StaffPicks = () => (
  <Section
    id="staff-picks"
    className="bg-[#050508]"
    eyebrow="From The Floor"
    title="Staff Picks"
    subtitle="Not algorithms. Not ads. Just the bottles our team actually reaches for."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5">
      {picks.map((p) => (
        <article
          key={p.staff}
          className="group relative bg-[#050508] p-10 hover:bg-white/[0.02] transition-all duration-700 flex flex-col"
        >
          <div className="relative mb-8 overflow-hidden bg-black">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-auto group-hover:scale-110 transition-all duration-1000"
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2 block">
            {p.cat}
          </span>
          <h3 className="text-2xl font-display font-black italic text-white mb-4 tracking-tighter uppercase">
            {p.name}
          </h3>
          <p className="text-sm text-white/40 font-medium leading-relaxed italic mb-6 flex-1">
            "{p.quote}"
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white">{p.staff}</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest">{p.role}</div>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-all duration-500"
            >
              Ask For This →
            </a>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
