import { Section } from "@/components/Section";
import { Star } from "@/components/Icons";
import { MAPS_URL } from "@/lib/constants";

// Replace these with real reviews copied from your Google Business profile
const reviews = [
  {
    name: "Mike T.",
    rating: 5,
    date: "2 weeks ago",
    text: "Best liquor store in Austin. Staff is super friendly and they always have what I'm looking for. Great selection of local spirits!",
    initials: "MT",
  },
  {
    name: "Sarah L.",
    rating: 5,
    date: "1 month ago",
    text: "I've been coming here for years. Prices are fair and the delivery through DoorDash is super convenient. Highly recommend!",
    initials: "SL",
  },
  {
    name: "Carlos R.",
    rating: 5,
    date: "3 weeks ago",
    text: "Huge selection, clean store, easy parking. They helped me find a great wine for a dinner party. Will definitely be back.",
    initials: "CR",
  },
  {
    name: "Jennifer M.",
    rating: 4,
    date: "1 month ago",
    text: "Great neighborhood spot. They carry a solid range of craft beers and the staff knows their stuff. Quick in and out every time.",
    initials: "JM",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-border"}`}
      />
    ))}
  </div>
);

export const Reviews = () => (
  <Section
    id="reviews"
    eyebrow="Google reviews"
    title="What customers are saying"
    subtitle="Rated 4.8 stars by hundreds of Austin customers on Google."
  >
    {/* Overall rating banner */}
    <div className="flex items-center gap-5 p-6 rounded-2xl bg-gradient-card border border-border mb-6">
      <div className="text-center">
        <div className="text-5xl font-display font-bold gradient-gold-text leading-none">4.8</div>
        <Stars count={5} />
        <div className="text-xs text-muted-foreground mt-1">out of 5</div>
      </div>
      <div className="h-14 w-px bg-border" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <GoogleLogo />
          <span className="font-semibold text-sm">Google Reviews</span>
        </div>
        <p className="text-xs text-muted-foreground">Based on verified customer reviews. Visit us in-store and leave your own review!</p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-xs text-gold hover:underline font-medium"
        >
          See all reviews on Google →
        </a>
      </div>
    </div>

    {/* Review cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {reviews.map((r) => (
        <a
          key={r.name}
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block group p-5 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift transition-smooth"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold shrink-0">
              {r.initials}
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">{r.name}</div>
              <div className="text-[10px] text-muted-foreground">{r.date}</div>
            </div>
            <GoogleLogo />
          </div>
          <Stars count={r.rating} />
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-4">{r.text}</p>
        </a>
      ))}
    </div>
  </Section>
);
