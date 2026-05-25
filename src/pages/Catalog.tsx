import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone, Navigation } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
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
  // Whiskey — mix of product shots (no zoom) + Messenger shelf photos (zoom)
  { id: 1,  cat: "whiskey" as Category, img: pBourbon,     pos: "50% 50%", zoom: false, name: "Single Barrel Bourbon",          size: "750ml",   desc: "Rich and full-bodied with notes of caramel and toasted oak." },
  { id: 2,  cat: "whiskey" as Category, img: msDarkSpirits,pos: "25% 25%", zoom: true,  name: "Jack Daniel's Tennessee Whiskey", size: "750ml",   desc: "America's best-selling whiskey — smooth, mellow, and unmistakable." },
  { id: 3,  cat: "whiskey" as Category, img: heroBottle,   pos: "50% 50%", zoom: false, name: "Jameson Irish Whiskey",           size: "750ml",   desc: "Triple distilled for exceptional smoothness. Perfect neat or on the rocks." },
  { id: 4,  cat: "whiskey" as Category, img: msWhiskey,    pos: "85% 50%", zoom: true,  name: "Wild Turkey 101 Bourbon",         size: "750ml",   desc: "Bold, spicy Kentucky bourbon. A staple for serious whiskey lovers." },
  { id: 5,  cat: "whiskey" as Category, img: catSpirits,   pos: "50% 50%", zoom: false, name: "Maker's Mark Bourbon",            size: "750ml",   desc: "Soft, smooth, and slightly sweet. One of the most approachable bourbons." },
  { id: 6,  cat: "whiskey" as Category, img: msGameOn,     pos: "75% 60%", zoom: true,  name: "Crown Royal Canadian Whisky",     size: "750ml",   desc: "Smooth and light with hints of vanilla. A crowd-pleasing classic." },

  // Wine — real photos + 2 CSS label cards (ran out of unique photos)
  { id: 7,  cat: "wine" as Category, img: pWine,      pos: "50% 50%", zoom: false, name: "Texas Reserve Red Blend", size: "750ml",   desc: "Bold, fruit-forward blend from Texas Hill Country vineyards." },
  { id: 8,  cat: "wine" as Category, img: catWine,    pos: "50% 50%", zoom: false, name: "Cabernet Sauvignon",      size: "750ml",   desc: "Classic full-bodied red with dark fruit and cedar notes." },
  { id: 11, cat: "wine" as Category, pos: "50% 50%", zoom: false, cardBg: "linear-gradient(150deg,#BE185D 0%,#F472B6 50%,#9D174D 100%)", cardAccent: "#FBCFE8", cardLabel: "ROSÉ",          name: "Rosé",          size: "750ml",   desc: "Refreshing and dry with strawberry and floral notes. Great chilled." },
  { id: 12, cat: "wine" as Category, pos: "50% 50%", zoom: false, cardBg: "linear-gradient(150deg,#5C4A00 0%,#A88B00 50%,#F5E676 100%)", cardAccent: "#FEF9C3", cardLabel: "PROSECCO BRUT", name: "Prosecco Brut", size: "750ml",   desc: "Light Italian sparkling wine. Perfect for celebrations." },

  // Beer — real photos (product shots + store cooler + storefronts)
  { id: 13, cat: "beer" as Category, img: pBeer,      pos: "50% 50%", zoom: false, name: "Local Craft IPA",         size: "6-pack",  desc: "Hoppy and aromatic, brewed fresh right here in Austin." },
  { id: 14, cat: "beer" as Category, img: catBeer,    pos: "50% 50%", zoom: false, name: "Corona Extra",            size: "12-pack", desc: "Classic Mexican lager. Best served ice-cold with lime." },
  { id: 15, cat: "beer" as Category, img: freeze,     pos: "50% 50%", zoom: false, name: "Modelo Especial",         size: "6-pack",  desc: "Rich, full-flavored pilsner-style lager from Mexico." },
  { id: 18, cat: "beer" as Category, img: msRumMixes, pos: "20% 35%", zoom: true,  name: "Blue Moon Belgian White", size: "6-pack",  desc: "Smooth wheat ale brewed with Valencia orange peel." },

  // Spirits — product shots (no zoom) + Messenger shelf sections (zoom)
  { id: 19, cat: "spirits" as Category, img: pTequila,   pos: "50% 50%", zoom: false, name: "Patron Silver Tequila",    size: "750ml",   desc: "Ultra-premium tequila. Smooth, clean, and great for cocktails." },
  { id: 20, cat: "spirits" as Category, img: msTequila,  pos: "60% 45%", zoom: true,  name: "Casamigos Blanco",         size: "750ml",   desc: "George Clooney's premium tequila — light agave with a smooth finish." },
  { id: 21, cat: "spirits" as Category, img: rum,        pos: "50% 50%", zoom: false, name: "Captain Morgan Spiced Rum",size: "750ml",   desc: "Smooth Caribbean rum blended with warming spices." },
  { id: 22, cat: "spirits" as Category, img: msMiniWall, pos: "70% 40%", zoom: true,  name: "Bacardi Superior Rum",     size: "750ml",   desc: "Light, dry, and versatile. The world's most popular rum." },
  { id: 23, cat: "spirits" as Category, img: msGinVodka, pos: "25% 15%", zoom: true,  name: "Grey Goose Vodka",         size: "750ml",   desc: "French grain vodka — silky smooth and clean from start to finish." },
  { id: 24, cat: "spirits" as Category, img: msMiniCase, pos: "35% 55%", zoom: true,  name: "Tito's Handmade Vodka",    size: "750ml",   desc: "Made in Austin, TX. America's #1 selling vodka." },
];

const Catalog = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.cat === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page hero */}
      <section className="pt-28 pb-12 md:pt-32 bg-gradient-to-b from-card/60 to-transparent border-b border-border">
        <div className="container mx-auto px-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold">Browse the store</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Our <span className="gradient-gold-text italic">Products</span>
          </h1>
          <p className="mt-3 text-lg text-foreground/70 max-w-xl">
            Over 3,200 products in-store — wine, beer, spirits and more. Browse below, then come in or call to check availability.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="sm">
              <a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-1.5" /> Call to Order</a>
            </Button>
            <Button asChild variant="outlineGold" size="sm">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-1.5" /> Get Directions</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-5 py-12">
        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${
                active === c.id
                  ? "bg-gold text-primary-foreground border-gold"
                  : "border-border text-foreground/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {c.label}
            </button>
          ))}
          <span className="ml-auto self-center text-xs text-muted-foreground">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl bg-gradient-card border border-border hover:border-gold/50 hover-lift transition-smooth"
            >
              <div className="aspect-[10/10] overflow-hidden bg-background/40">
                {p.zoom ? (
                  <div
                    style={{ transformOrigin: p.pos }}
                    className="w-full h-full [transform:scale(1.8)] group-hover:[transform:scale(1.95)] transition-smooth duration-700"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      style={{ objectPosition: p.pos }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : p.cardBg ? (
                  /* CSS label art — unique gradient, no photo repeat */
                  <div
                    className="w-full h-full flex items-center justify-center relative transition-smooth duration-700 group-hover:brightness-110"
                    style={{ background: p.cardBg }}
                  >
                    <div className="absolute inset-3 rounded border opacity-25" style={{ borderColor: p.cardAccent }} />
                    <div className="absolute inset-5 rounded border opacity-10" style={{ borderColor: p.cardAccent }} />
                    <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 50% 40%, ${p.cardAccent}, transparent 70%)` }} />
                    <div className="relative text-center px-5">
                      <div className="text-[7px] uppercase tracking-[0.35em] mb-3 font-medium" style={{ color: p.cardAccent }}>
                        Johnnie's Liquor
                      </div>
                      <div className="font-display font-bold text-white text-sm leading-tight tracking-wide drop-shadow-lg">
                        {p.cardLabel}
                      </div>
                      <div className="mt-3 mx-auto w-6 h-px opacity-40" style={{ backgroundColor: p.cardAccent }} />
                      <div className="mt-2 text-[7px] uppercase tracking-[0.25em] opacity-50 text-white">
                        {p.size}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Single real photo — plain object-cover, no zoom */
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                )}
              </div>
              <div className="p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-gold mb-0.5">{p.cat} · {p.size}</div>
                <h3 className="font-display text-sm font-bold leading-tight mb-1">{p.name}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-card border border-border text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground text-sm mb-5">We carry 3,200+ products in-store. Call us and we'll check if it's in stock.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold">
              <a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" /> (512) 383-5004</a>
            </Button>
            <Button asChild variant="outlineGold">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" /> Visit the Store</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalog;
