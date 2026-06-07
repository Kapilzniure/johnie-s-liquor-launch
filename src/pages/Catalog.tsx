import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Phone, Navigation } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PHONE, DIRECTIONS_URL, PHONE_DISPLAY } from "@/lib/constants";
import pWine     from "@/assets/p-wine.webp";
import pBeer     from "@/assets/p-beer.webp";
import pBourbon  from "@/assets/p-bourbon.webp";
import pTequila  from "@/assets/p-tequila.webp";
import catWine   from "@/assets/cat-wine.webp";
import catBeer   from "@/assets/cat-beer.webp";
import catSpirits from "@/assets/cat-spirits.webp";
import heroBottle from "@/assets/hero-bottle.webp";
import freeze      from "@/assets/freeze.webp";
import rum         from "@/assets/rum.webp";
import msWhiskey from "@/assets/Messenger_creation_778A06FE-5026-499C-B0D5-57C792C0EFDC.jpeg";
import msDarkSpirits from "@/assets/Messenger_creation_9A25B156-EF4B-418D-B65B-39C7BB14DAB1.jpeg";
import msGameOn from "@/assets/Messenger_creation_14C57FDC-A1BD-4F63-8AF4-4475266835C6.jpeg";
import msMiniWall from "@/assets/Messenger_creation_B45D2388-2346-4A48-A85D-53866F5C61E7.jpeg";
import msMiniCase from "@/assets/Messenger_creation_AC6B393A-8A11-413E-8AA8-9AA50AF4DC1A.jpeg";
import msTequila from "@/assets/Messenger_creation_D1DF73E3-C2ED-484D-AD7C-B20E7A9D9AF8.jpeg";
import msRumMixes from "@/assets/Messenger_creation_29592D56-5229-4FBB-865F-A8973D2886D1.jpeg";
import msGinVodka from "@/assets/Messenger_creation_ECCBCD7C-140B-4E64-828A-7C7C9F36A177.jpeg";

type Category = "all" | "whiskey" | "wine" | "beer" | "spirits";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "whiskey", label: "Whiskey & Bourbon" },
  { id: "wine", label: "Wine" },
  { id: "beer", label: "Beer" },
  { id: "spirits", label: "Spirits" },
];

const products = [
  { id: 1,  cat: "whiskey" as Category, img: pBourbon,     pos: "50% 50%", zoom: false, name: "Single Barrel Bourbon",          size: "750ml",   desc: "Rich and full-bodied with notes of caramel and toasted oak." },
  { id: 2,  cat: "whiskey" as Category, img: msDarkSpirits,pos: "25% 25%", zoom: true,  name: "Jack Daniel's Tennessee Whiskey", size: "750ml",   desc: "America's best-selling whiskey — smooth, mellow, and unmistakable." },
  { id: 3,  cat: "whiskey" as Category, img: heroBottle,   pos: "50% 50%", zoom: false, name: "Jameson Irish Whiskey",           size: "750ml",   desc: "Triple distilled for exceptional smoothness. Perfect neat or on the rocks." },
  { id: 4,  cat: "whiskey" as Category, img: msWhiskey,    pos: "85% 50%", zoom: true,  name: "Wild Turkey 101 Bourbon",         size: "750ml",   desc: "Bold, spicy Kentucky bourbon. A staple for serious whiskey lovers." },
  { id: 5,  cat: "whiskey" as Category, img: catSpirits,   pos: "50% 50%", zoom: false, name: "Maker's Mark Bourbon",            size: "750ml",   desc: "Soft, smooth, and slightly sweet. One of the most approachable bourbons." },
  { id: 6,  cat: "whiskey" as Category, img: msGameOn,     pos: "75% 60%", zoom: true,  name: "Crown Royal Canadian Whisky",     size: "750ml",   desc: "Smooth and light with hints of vanilla. A crowd-pleasing classic." },
  { id: 7,  cat: "wine" as Category, img: pWine,      pos: "50% 50%", zoom: false, name: "Texas Reserve Red Blend", size: "750ml",   desc: "Bold, fruit-forward blend from Texas Hill Country vineyards." },
  { id: 8,  cat: "wine" as Category, img: catWine,    pos: "50% 50%", zoom: false, name: "Cabernet Sauvignon",      size: "750ml",   desc: "Classic full-bodied red with dark fruit and cedar notes." },
  { id: 11, cat: "wine" as Category, pos: "50% 50%", zoom: false, cardBg: "linear-gradient(150deg,#BE185D 0%,#F472B6 50%,#9D174D 100%)", cardAccent: "#FBCFE8", cardLabel: "ROSÉ",          name: "Rosé",          size: "750ml",   desc: "Refreshing and dry with strawberry and floral notes. Great chilled." },
  { id: 12, cat: "wine" as Category, pos: "50% 50%", zoom: false, cardBg: "linear-gradient(150deg,#5C4A00 0%,#A88B00 50%,#F5E676 100%)", cardAccent: "#FEF9C3", cardLabel: "PROSECCO BRUT", name: "Prosecco Brut", size: "750ml",   desc: "Light Italian sparkling wine. Perfect for celebrations." },
  { id: 13, cat: "beer" as Category, img: pBeer,      pos: "50% 50%", zoom: false, name: "Local Craft IPA",         size: "6-pack",  desc: "Hoppy and aromatic, brewed fresh right here in Austin." },
  { id: 14, cat: "beer" as Category, img: catBeer,    pos: "50% 50%", zoom: false, name: "Corona Extra",            size: "12-pack", desc: "Classic Mexican lager. Best served ice-cold with lime." },
  { id: 15, cat: "beer" as Category, img: freeze,     pos: "50% 50%", zoom: false, name: "Modelo Especial",         size: "6-pack",  desc: "Rich, full-flavored pilsner-style lager from Mexico." },
  { id: 18, cat: "beer" as Category, img: msRumMixes, pos: "20% 35%", zoom: true,  name: "Blue Moon Belgian White", size: "6-pack",  desc: "Smooth wheat ale brewed with Valencia orange peel." },
  { id: 19, cat: "spirits" as Category, img: pTequila,   pos: "50% 50%", zoom: false, name: "Patron Silver Tequila",    size: "750ml",   desc: "Ultra-premium tequila. Smooth, clean, and great for cocktails." },
  { id: 20, cat: "spirits" as Category, img: msTequila,  pos: "60% 45%", zoom: true,  name: "Casamigos Blanco",         size: "750ml",   desc: "George Clooney's premium tequila — light agave with a smooth finish." },
  { id: 21, cat: "spirits" as Category, img: rum,        pos: "50% 50%", zoom: false, name: "Captain Morgan Spiced Rum",size: "750ml",   desc: "Smooth Caribbean rum blended with warming spices." },
  { id: 22, cat: "spirits" as Category, img: msMiniWall, pos: "70% 40%", zoom: true,  name: "Bacardi Superior Rum",     size: "750ml",   desc: "Light, dry, and versatile. The world's most popular rum." },
  { id: 23, cat: "spirits" as Category, img: msGinVodka, pos: "25% 15%", zoom: true,  name: "Grey Goose Vodka",         size: "750ml",   desc: "French grain vodka — silky smooth and clean from start to finish." },
  { id: 24, cat: "spirits" as Category, img: msMiniCase, pos: "35% 55%", zoom: true,  name: "Tito's Handmade Vodka",    size: "750ml",   desc: "Made in Austin, TX. America's #1 selling vodka." },
];

const Catalog = () => {
  const [active, setActive] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const [showTop, setShowTop] = useState(false);
  const filtered = products.filter((p) => {
    const matchesCat = active === "all" || p.cat === active;
    const matchesQuery = query.trim() === "" || p.name.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <section className="bg-card border-b border-foreground/5 pb-16 pt-10">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
              <span className="w-10 h-[1px] bg-primary" />
              The Catalog
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-5">
              Our <span className="text-primary italic">Selection</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-12">
              Over 3,200 products in-store. Use the filters below to browse our favorites, then call us to confirm availability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-white rounded-none font-bold tracking-widest uppercase text-xs h-12 px-8 boutique-shadow">
                <a href={`tel:${PHONE}`}>Call Store</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground rounded-none font-bold tracking-widest uppercase text-xs h-12 px-8 hover:bg-foreground/5">
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Directions</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-12 md:py-16">
          {/* Search bar */}
          <div className="mb-6">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name — bourbon, tequila, IPA…"
              className="w-full md:max-w-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/30 text-sm font-medium px-5 py-3 outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Filter pills — horizontal scroll on mobile */}
          <div className="flex gap-3 mb-10 border-b border-foreground/5 pb-8 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 px-5 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
                  active === c.id
                    ? "bg-primary text-white boutique-shadow scale-105"
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
            <span className="ml-auto self-center shrink-0 text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-40">
              {filtered.length} {filtered.length === 1 ? "Item" : "Items"}
            </span>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-4xl mb-3">🍾</p>
              <p className="font-display font-bold text-lg mb-1">No products found</p>
              <p className="text-sm text-muted-foreground mb-4">Try a different search or browse by category.</p>
              <button onClick={() => { setQuery(""); setActive("all"); }} className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                Clear search
              </button>
            </div>
          )}

          {/* Product grid — 1 col on mobile, 2 on sm, 3 on md, 4 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                style={{ animationDelay: `${(i % 4) * 60}ms` }}
                className="group bg-card border border-foreground/10 p-3 hover:translate-y-[-4px] transition-all duration-300 shadow-xl animate-fade-up"
              >
                <div className="aspect-square overflow-hidden bg-muted relative mb-4">
                  {p.zoom ? (
                    <div
                      style={{ transformOrigin: p.pos }}
                      className="w-full h-full [transform:scale(1.8)] group-hover:[transform:scale(1.95)] transition-all duration-700"
                    >
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ) : p.cardBg ? (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center" style={{ background: p.cardBg }}>
                      <div className="text-[10px] uppercase font-bold text-white tracking-widest drop-shadow-lg">{p.cardLabel}</div>
                    </div>
                  ) : (
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  )}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5">{p.size}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-1">{p.cat}</div>
                  <h3 className="font-display text-base font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 italic">"{p.desc}"</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 p-12 bg-primary text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">Can't find it?</h2>
              <p className="text-white/80 font-medium italic text-lg mb-8 max-w-xl mx-auto">"Our inventory changes daily. Give us a call and we'll check the shelf for you."</p>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-4 text-3xl md:text-5xl font-display font-black hover:scale-105 transition-transform">
                <Phone className="w-8 h-8 md:w-12 md:h-12" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileBar />

      {/* Scroll-to-top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-11 h-11 bg-primary text-white flex items-center justify-center shadow-ink hover:scale-110 transition-transform md:bottom-8"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Catalog;
