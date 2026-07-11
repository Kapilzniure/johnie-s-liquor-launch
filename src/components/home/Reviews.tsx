import { useState, useEffect } from "react";
import { Section } from "@/components/Section";
import { Star } from "@/components/Icons";
import { MAPS_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { name: "Lane Myers",    rating: 5, date: "A year ago",   initials: "LM", text: "Owners a great guy and so is his team. Great selection of all types of drinks and spirits. From high end sippers to every day mixers." },
  { name: "Adam Dunlap",   rating: 4, date: "3 years ago",  initials: "AD", text: "Good selection, prices are a bit high but I like to support small businesses. Very friendly staff. Drop on over for a free sample or two..." },
  { name: "Shalimar B.",   rating: 5, date: "3 years ago",  initials: "SB", text: "This shop is well stocked, and even carries one of my favorite sake. Really nice staff, helpful and friendly!" },
  { name: "Bryan Méndez",  rating: 5, date: "2 months ago", initials: "BM", text: "A fantastic local business! Great prices, wonderful atmosphere, and top-tier customer service. I'll definitely be a regular customer from now on." },
  { name: "Nirmal K.",     rating: 5, date: "2 months ago", initials: "NK", text: "Johnnie's has made a huge comeback with its new management — neat, fully stocked, easy to shop. Wide range of spirits, wines, and beers at solid prices. Super friendly team." },
  { name: "Robert Miller", rating: 5, date: "2 months ago", initials: "RM", text: "A fantastic neighborhood liquor store in north Austin! Impressive selection, friendly staff, and a welcoming feel that keeps customers coming back." },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-white/10 fill-transparent"}`} />
    ))}
  </div>
);

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = reviews[activeIndex];

  return (
    <Section
      id="reviews"
      className="bg-[#050505] relative overflow-hidden"
    >
      {/* Massive subtle background quotes */}
      <div className="absolute -top-10 left-10 text-[300px] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>
      
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left: Introduction & Google Rating */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
            Word on the <span className="italic text-primary block mt-2">Street</span>
          </h2>
          <p className="mt-8 max-w-sm text-lg text-white/50 leading-relaxed font-sans mb-12">
            Don't just take our word for it. We've been rated 4.8 stars by Austin customers.
          </p>

          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl p-6 rounded-[2rem] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-display font-black text-white leading-none mb-2">4.8</div>
              <Stars count={5} />
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GoogleLogo />
                <span className="font-bold text-white tracking-wide">Google</span>
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-black group-hover:text-primary transition-colors">
                Read All Reviews →
              </div>
            </div>
          </a>
        </div>

        {/* Right: Immersive Testimonial Spotlight */}
        <div className="lg:col-span-7 relative min-h-[400px] flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <Stars count={activeReview.rating} />
              <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-white leading-[1.4] tracking-tight mt-6 mb-6">
                "{activeReview.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black rounded-full shrink-0">
                  {activeReview.initials}
                </div>
                <div>
                  <div className="text-lg font-bold text-white tracking-wide">{activeReview.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">{activeReview.date}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Pagination Avatars */}
          <div className="flex flex-wrap gap-3">
            {reviews.map((r, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 ${
                  idx === activeIndex 
                    ? 'bg-primary text-white scale-110 shadow-[0_0_20px_rgba(220,20,60,0.4)]' 
                    : 'bg-white/5 text-white/30 border border-white/10 hover:bg-white/10 hover:text-white hover:scale-105'
                }`}
              >
                {r.initials}
              </button>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
};
