import { Section } from "@/components/Section";
import { Star } from "@/components/Icons";
import { MAPS_URL } from "@/lib/constants";

const reviews = [
  { name: "Lane Myers",    rating: 5, date: "A year ago",   initials: "LM", text: "Owners a great guy and so is his team. Great selection of all types of drinks and spirits. From high end sippers to every day mixers." },
  { name: "Adam Dunlap",   rating: 4, date: "3 years ago",  initials: "AD", text: "Good selection, prices are a bit high but I like to support small businesses. Very friendly staff. Drop on over for a free sample or two..." },
  { name: "Shalimar B.",   rating: 5, date: "3 years ago",  initials: "SB", text: "This shop is well stocked, and even carries one of my favorite sake. Really nice staff, helpful and friendly!" },
  { name: "Bryan Méndez",  rating: 5, date: "2 months ago", initials: "BM", text: "A fantastic local business! Great prices, wonderful atmosphere, and top-tier customer service. I'll definitely be a regular customer from now on." },
  { name: "Nirmal K.",     rating: 5, date: "2 months ago", initials: "NK", text: "Johnnie's has made a huge comeback with its new management — neat, fully stocked, easy to shop. Wide range of spirits, wines, and beers at solid prices. Super friendly team." },
  { name: "Robert Miller", rating: 5, date: "2 months ago", initials: "RM", text: "A fantastic neighborhood liquor store in north Austin! Impressive selection, friendly staff, and a welcoming feel that keeps customers coming back." },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-3 h-3 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-foreground/20 fill-transparent"}`} />
    ))}
  </div>
);

export const Reviews = () => (
  <Section
    id="reviews"
    eyebrow="Google Reviews"
    title="The Word on the Street"
    subtitle="Rated 4.8 stars by Austin customers on Google."
    className="bg-background paper-texture"
    glow
  >
    {/* Rating banner */}
    <div className="flex flex-col gap-5 rounded-3xl border border-foreground/10 bg-card p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)] mb-6 md:flex-row md:items-center">
      <div className="text-center shrink-0">
        <div className="text-4xl font-display font-black leading-none mb-1">4.8</div>
        <Stars count={5} />
        <div className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">out of 5</div>
      </div>
      <div className="w-px h-12 bg-foreground/10 shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <GoogleLogo />
          <span className="text-sm font-bold">Google Reviews</span>
        </div>
        <p className="text-xs text-muted-foreground mb-2">Based on verified customer reviews from Google Maps.</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline font-black uppercase tracking-widest">
          See all reviews on Google →
        </a>
      </div>
    </div>

    {/* Review cards grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((r) => (
        <a
          key={r.name}
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block group p-4 bg-card border border-foreground/10 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-black text-primary shrink-0">
              {r.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold leading-tight truncate">{r.name}</div>
              <div className="text-[10px] text-muted-foreground">{r.date}</div>
            </div>
            <GoogleLogo />
          </div>
          <Stars count={r.rating} />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{r.text}</p>
        </a>
      ))}
    </div>
  </Section>
);
