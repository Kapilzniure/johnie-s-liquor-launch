import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone, Navigation } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PHONE, DIRECTIONS_URL } from "@/lib/constants";
import pBourbon from "@/assets/p-bourbon.webp";
import pWine from "@/assets/p-wine.webp";
import pBeer from "@/assets/p-beer.webp";
import pTequila from "@/assets/p-tequila.webp";
import pRum from "@/assets/rum.webp";
import catBeer from "@/assets/cat-beer.webp";
import catWine from "@/assets/cat-wine.webp";
import catSpirits from "@/assets/cat-spirits.webp";

type Category = "all" | "whiskey" | "wine" | "beer" | "spirits";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "whiskey", label: "Whiskey & Bourbon" },
  { id: "wine", label: "Wine" },
  { id: "beer", label: "Beer" },
  { id: "spirits", label: "Spirits" },
];

const products = [
  // Whiskey / Bourbon
  { id: 1, cat: "whiskey" as Category, img: pBourbon, name: "Single Barrel Bourbon", size: "750ml", desc: "Rich and full-bodied with notes of caramel and toasted oak." },
  { id: 2, cat: "whiskey" as Category, img: pBourbon, name: "Jack Daniel's Tennessee Whiskey", size: "750ml", desc: "America's best-selling whiskey — smooth, mellow, and unmistakable." },
  { id: 3, cat: "whiskey" as Category, img: pBourbon, name: "Jameson Irish Whiskey", size: "750ml", desc: "Triple distilled for exceptional smoothness. Perfect neat or on the rocks." },
  { id: 4, cat: "whiskey" as Category, img: pBourbon, name: "Wild Turkey 101 Bourbon", size: "750ml", desc: "Bold, spicy Kentucky bourbon. A staple for serious whiskey lovers." },
  { id: 5, cat: "whiskey" as Category, img: pBourbon, name: "Maker's Mark Bourbon", size: "750ml", desc: "Soft, smooth, and slightly sweet. One of the most approachable bourbons." },
  { id: 6, cat: "whiskey" as Category, img: pBourbon, name: "Crown Royal Canadian Whisky", size: "750ml", desc: "Smooth and light with hints of vanilla. A crowd-pleasing classic." },

  // Wine
  { id: 7,  cat: "wine" as Category, img: pWine,    name: "Texas Reserve Red Blend",    size: "750ml", desc: "Bold, fruit-forward blend from Texas Hill Country vineyards." },
  { id: 8,  cat: "wine" as Category, img: catWine,  name: "Cabernet Sauvignon",          size: "750ml", desc: "Classic full-bodied red with dark fruit and cedar notes." },
  { id: 9,  cat: "wine" as Category, img: pWine,    name: "Chardonnay Select",            size: "750ml", desc: "Crisp and lightly oaked with citrus and green apple flavors." },
  { id: 10, cat: "wine" as Category, img: catWine,  name: "Merlot Reserve",               size: "750ml", desc: "Smooth and velvety with plum and chocolate undertones." },
  { id: 11, cat: "wine" as Category, img: pWine,    name: "Rosé",                         size: "750ml", desc: "Refreshing and dry with strawberry and floral notes. Great chilled." },
  { id: 12, cat: "wine" as Category, img: catWine,  name: "Prosecco Brut",                size: "750ml", desc: "Light Italian sparkling wine. Perfect for celebrations." },

  // Beer
  { id: 13, cat: "beer" as Category, img: pBeer,   name: "Local Craft IPA",              size: "6-pack",  desc: "Hoppy and aromatic, brewed fresh right here in Austin." },
  { id: 14, cat: "beer" as Category, img: catBeer, name: "Corona Extra",                 size: "12-pack", desc: "Classic Mexican lager. Best served ice-cold with lime." },
  { id: 15, cat: "beer" as Category, img: pBeer,   name: "Modelo Especial",              size: "6-pack",  desc: "Rich, full-flavored pilsner-style lager from Mexico." },
  { id: 16, cat: "beer" as Category, img: catBeer, name: "Heineken",                     size: "6-pack",  desc: "Premium European lager. Crisp, clean, and always refreshing." },
  { id: 17, cat: "beer" as Category, img: pBeer,   name: "Bud Light",                    size: "12-pack", desc: "Light, easy-drinking American lager. Perfect for any occasion." },
  { id: 18, cat: "beer" as Category, img: catBeer, name: "Blue Moon Belgian White",       size: "6-pack",  desc: "Smooth wheat ale brewed with Valencia orange peel." },

  // Spirits
  { id: 19, cat: "spirits" as Category, img: pTequila,  name: "Patron Silver Tequila",         size: "750ml", desc: "Ultra-premium tequila. Smooth, clean, and great for cocktails." },
  { id: 20, cat: "spirits" as Category, img: pTequila,  name: "Casamigos Blanco",               size: "750ml", desc: "George Clooney's premium tequila — light agave with a smooth finish." },
  { id: 21, cat: "spirits" as Category, img: pRum,      name: "Captain Morgan Spiced Rum",       size: "750ml", desc: "Smooth Caribbean rum blended with warming spices." },
  { id: 22, cat: "spirits" as Category, img: pRum,      name: "Bacardi Superior Rum",            size: "750ml", desc: "Light, dry, and versatile. The world's most popular rum." },
  { id: 23, cat: "spirits" as Category, img: catSpirits, name: "Grey Goose Vodka",               size: "750ml", desc: "French grain vodka — silky smooth and clean from start to finish." },
  { id: 24, cat: "spirits" as Category, img: catSpirits, name: "Tito's Handmade Vodka",          size: "750ml", desc: "Made in Austin, TX. America's #1 selling vodka." },
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background/40">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{p.cat} · {p.size}</div>
                <h3 className="font-display text-base font-bold leading-tight mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
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
