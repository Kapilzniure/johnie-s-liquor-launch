import { useEffect, useState } from "react";
import {
  Phone, MapPin, Clock, Star, Navigation, Menu, X,
  Wine, Beer, GlassWater, Tag, Shield, Heart, ChevronDown, QrCode,
} from "lucide-react";

const Instagram = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import hero from "@/assets/hero-store.jpg";
import heroBottle from "@/assets/hero-bottle.png";
import catWine from "@/assets/cat-wine.jpg";
import catBeer from "@/assets/cat-beer.jpg";
import catSpirits from "@/assets/cat-spirits.jpg";
import storefront from "@/assets/storefront.jpg";
import storeInside from "@/assets/store-inside.jpg";
import pBourbon from "@/assets/p-bourbon.jpg";
import pWine from "@/assets/p-wine.jpg";
import pBeer from "@/assets/p-beer.jpg";
import pTequila from "@/assets/p-tequila.jpg";

const PHONE = "+15123835004";
const PHONE_DISPLAY = "(512) 383-5004";
const ADDRESS = "13201 Pond Springs Rd, Suite 203, Austin, TX 78729";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729";
const REVIEWS_URL = "https://www.google.com/maps/place/13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729";
const IG_URL = "https://www.instagram.com/johnniesliquorstore/";
const FB_URL = "https://facebook.com";

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="container mx-auto px-5">
      {(eyebrow || title) && (
        <div className="max-w-3xl mb-12 md:mb-16">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" /> {eyebrow}
            </div>
          )}
          {title && <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05]">{title}</h2>}
          {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold">
            <span className="font-display font-bold text-primary-foreground text-lg">J</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">Johnnies</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold -mt-0.5">Liquor · Austin</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-gold transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="text-sm font-medium hover:text-gold transition-smooth flex items-center gap-2">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <Button asChild variant="gold" size="sm">
            <a href={MAPS_URL} target="_blank" rel="noopener"><Navigation className="w-4 h-4 mr-1.5" /> Directions</a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-medium hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
    <img src={hero} alt="Inside Johnnies Liquor store in Austin, Texas with shelves of whiskey and wine" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
    <div className="container mx-auto px-5 relative z-10 pt-28 pb-16">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold">Open today · Visit us</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95]">
          Best <span className="gradient-gold-text italic">Liquor Store</span><br />
          in Austin, Texas
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl">
          Wine, Beer & Spirits at Great Prices – Visit Today
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-sm text-muted-foreground">4.8 ★ from 327+ Austin neighbors</span>
        </div>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Button asChild variant="gold" size="xl">
            <a href={MAPS_URL} target="_blank" rel="noopener"><Navigation className="w-5 h-5 mr-2" /> Find us in minutes</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href={`tel:${PHONE}`}><Phone className="w-5 h-5 mr-2" /> Call to check availability</a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold" /> Open today until 9 PM · Free parking available
        </p>
    </div>
    <div className="hidden lg:block absolute right-6 xl:right-20 top-20 xl:top-16 z-10 pointer-events-none animate-fade-up">
      <div className="relative">
        <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full scale-75" aria-hidden />
        <img
          src={heroBottle}
          alt="Premium whiskey bottle from Johnnies Liquor selection"
          width={768}
          height={1280}
          className="relative w-[280px] xl:w-[360px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] rotate-[6deg]"
        />
      </div>
    </div>
    </div>
    <a href="#quick" className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gold/70 hover:text-gold transition-smooth">
      <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
      <ChevronDown className="w-5 h-5 animate-bounce" />
    </a>
  </section>
);

const QuickActions = () => {
  const items = [
    { icon: Navigation, label: "Get Directions", href: MAPS_URL, ext: true },
    { icon: Phone, label: "Call Now", href: `tel:${PHONE}` },
    { icon: Star, label: "Google Reviews", href: REVIEWS_URL, ext: true },
    { icon: Instagram, label: "Instagram", href: IG_URL, ext: true },
  ];
  return (
    <section id="quick" className="border-y border-border bg-card/50">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {items.map((it) => (
            <a key={it.label} href={it.href} target={it.ext ? "_blank" : undefined} rel={it.ext ? "noopener" : undefined}
               className="flex items-center justify-center gap-3 py-6 md:py-7 hover:bg-gold/5 transition-smooth group">
              <it.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-smooth" />
              <span className="font-medium">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => (
  <Section className="!py-16">
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="flex items-center gap-4">
        <div className="text-5xl font-display font-bold gradient-gold-text">4.8</div>
        <div>
          <div className="flex text-gold">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current"/>)}</div>
          <p className="text-sm text-muted-foreground mt-1">327+ Google reviews</p>
        </div>
      </div>
      <blockquote className="md:col-span-1 text-lg italic text-foreground/80 leading-relaxed">
        "Best selection in East Austin. Friendly staff, fair prices, and they always have what I'm looking for."
        <footer className="not-italic text-sm text-muted-foreground mt-2">— Marcus R., regular customer</footer>
      </blockquote>
      <div className="md:text-right">
        <Button asChild variant="outlineGold">
          <a href={REVIEWS_URL} target="_blank" rel="noopener">See all reviews</a>
        </Button>
      </div>
    </div>
  </Section>
);

const Categories = () => {
  const cats = [
    { icon: Wine, title: "Wine", img: catWine, desc: "Reds, whites, rosés & sparkling from around the world." },
    { icon: Beer, title: "Beer", img: catBeer, desc: "Local Texas craft, imports, ciders & cold six-packs." },
    { icon: GlassWater, title: "Spirits", img: catSpirits, desc: "Whiskey, bourbon, tequila, vodka, gin, rum & more." },
  ];
  return (
    <Section id="products" eyebrow="What we sell" title="Everything you came for" subtitle="A carefully curated selection across three signature categories. If we don't have it, we'll help you find it.">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cats.map((c) => (
          <article key={c.title} className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover-lift">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={c.img} alt={`${c.title} selection at Johnnies Liquor`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7">
              <c.icon className="w-7 h-7 text-gold mb-3" />
              <h3 className="text-3xl font-display font-bold mb-2">{c.title}</h3>
              <p className="text-foreground/70">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

const Popular = () => {
  const items = [
    { name: "Single Barrel Bourbon", tag: "Whiskey · 750ml", img: pBourbon, price: "$42" },
    { name: "Texas Reserve Red", tag: "Wine · 750ml", img: pWine, price: "$28" },
    { name: "Local Craft IPA", tag: "Beer · 6-pack", img: pBeer, price: "$14" },
    { name: "Reposado Tequila", tag: "Tequila · 750ml", img: pTequila, price: "$36" },
  ];
  return (
    <Section eyebrow="Customer favorites" title="Popular this month" subtitle="What our regulars are picking up. Stop by to see the full lineup in store.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((p) => (
          <div key={p.name} className="group rounded-xl bg-gradient-card border border-border overflow-hidden hover-lift">
            <div className="aspect-[3/4] bg-deep overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500" />
            </div>
            <div className="p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-widest text-gold mb-1.5">{p.tag}</p>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-base md:text-lg leading-tight">{p.name}</h3>
                <span className="text-gold font-semibold whitespace-nowrap">{p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Deals = () => {
  const deals = [
    { title: "20% Off Wine Wednesdays", body: "Every Wednesday on all bottles over $20.", tag: "Weekly" },
    { title: "Buy 2, Get 1 Free Craft Beer", body: "Mix & match local Texas craft six-packs.", tag: "Limited" },
    { title: "Whiskey of the Month", body: "Featured premium bourbon at $10 off retail.", tag: "April" },
  ];
  return (
    <Section eyebrow="Deals & offers" title="This week's specials" subtitle="Real savings every week — limited stock, so visit today for the best selection.">
      <div className="grid md:grid-cols-3 gap-6">
        <p className="md:col-span-3 -mt-6 mb-2 text-sm text-gold/90 uppercase tracking-widest">⏳ Available in store only · while supplies last</p>
        {deals.map((d) => (
          <div key={d.title} className="relative p-8 rounded-2xl bg-gradient-card border border-gold/20 hover-lift">
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
              <Tag className="w-3 h-3" /> {d.tag}
            </div>
            <h3 className="text-2xl font-display font-bold mt-2 mb-3 pr-20">{d.title}</h3>
            <p className="text-muted-foreground">{d.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const WhyUs = () => {
  const items = [
    { icon: GlassWater, t: "Wide Selection", d: "Hundreds of wines, beers and spirits — local and international." },
    { icon: Tag, t: "Best Prices", d: "Fair, honest pricing with weekly deals you'll actually use." },
    { icon: Heart, t: "Friendly Service", d: "Family-owned. Real recommendations from people who care." },
    { icon: MapPin, t: "Convenient Location", d: "Located at 13201 Pond Springs Rd with easy access and plenty of parking." },
  ];
  return (
    <Section eyebrow="Why locals choose us" title="A neighborhood store, done right">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.t} className="p-7 rounded-xl border border-border bg-card hover:border-gold/40 transition-smooth">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
              <i.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{i.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const About = () => (
  <Section id="about" className="bg-card/30">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" /> Our Story
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Proudly serving the Austin community for 20+ years</h2>
        <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
          Johnnies Liquor started as a family-owned shop with a simple idea — give our neighbors great drinks at fair prices, and treat everyone like family.
        </p>
        <p className="mt-4 text-foreground/70 leading-relaxed">
          Two decades later we're still right here. Same friendly faces, a bigger selection, and the same promise: you'll always find what you came for at Johnnies Liquor.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6">
          {[["20+", "Years"], ["1.2k", "Products"], ["4.8★", "Rated"]].map(([n,l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-gold-text">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src={storefront} alt="Johnnies Liquor storefront" loading="lazy" className="rounded-xl aspect-[4/5] object-cover shadow-deep" />
        <img src={storeInside} alt="Inside Johnnies Liquor — wine and spirits aisles" loading="lazy" className="rounded-xl aspect-[4/5] object-cover shadow-deep mt-10" />
      </div>
    </div>
  </Section>
);

const Experience = () => (
  <Section eyebrow="Visit the store" title="Step inside Johnie's" subtitle="Visit our store for a great selection — and the warm welcome you'd expect from a neighbor.">
    <div className="grid md:grid-cols-2 gap-6">
      <figure className="relative overflow-hidden rounded-2xl group shadow-deep">
        <img src={storefront} alt="Storefront at Johnnies Liquor" loading="lazy" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-700" />
        <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background to-transparent">
          <p className="text-gold text-xs uppercase tracking-widest mb-1">Outside</p>
          <p className="font-display text-xl">Easy to spot on East 6th Street</p>
        </figcaption>
      </figure>
      <figure className="relative overflow-hidden rounded-2xl group shadow-deep">
        <img src={storeInside} alt="Aisles inside Johnnies Liquor" loading="lazy" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-700" />
        <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background to-transparent">
          <p className="text-gold text-xs uppercase tracking-widest mb-1">Inside</p>
          <p className="font-display text-xl">Organized aisles, real selection</p>
        </figcaption>
      </figure>
    </div>
  </Section>
);

const Location = () => (
  <Section id="contact" eyebrow="Location & hours" title="Find us, call us, visit us">
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="p-7 rounded-2xl bg-gradient-card border border-border">
          <MapPin className="w-6 h-6 text-gold mb-3" />
          <h3 className="font-display text-2xl font-bold mb-1">Address</h3>
          <p className="text-foreground/80">{ADDRESS}</p>
          <Button asChild variant="gold" className="mt-5 w-full">
            <a href={MAPS_URL} target="_blank" rel="noopener"><Navigation className="w-4 h-4 mr-2" /> Get Directions</a>
          </Button>
        </div>
        <div className="p-7 rounded-2xl bg-gradient-card border border-border">
          <Phone className="w-6 h-6 text-gold mb-3" />
          <h3 className="font-display text-2xl font-bold mb-1">Phone</h3>
          <a href={`tel:${PHONE}`} className="text-foreground/80 hover:text-gold transition-smooth">{PHONE_DISPLAY}</a>
          <Button asChild variant="outlineGold" className="mt-5 w-full">
            <a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" /> Call Now</a>
          </Button>
        </div>
        <div className="p-7 rounded-2xl bg-gradient-card border border-border">
          <Clock className="w-6 h-6 text-gold mb-3" />
          <h3 className="font-display text-2xl font-bold mb-3">Opening Hours</h3>
          <ul className="space-y-1.5 text-sm">
            {[["Mon – Sat", "10:00 AM – 9:00 PM"], ["Sunday", "Closed"]].map(([d,h]) => (
              <li key={d} className="flex justify-between gap-4 py-1.5 border-b border-border/60 last:border-0">
                <span className="text-muted-foreground">{d}</span><span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border min-h-[400px] shadow-deep">
        <iframe
          title="Johnnies Liquor location"
          src="https://www.google.com/maps?q=13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729&output=embed"
          className="w-full h-full min-h-[500px] grayscale-[0.3] contrast-110"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </Section>
);

const FAQ = () => (
  <Section eyebrow="FAQ" title="Quick answers">
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {[
          { q: "What are your hours?", a: "Mon–Sat 10am–9pm. We're closed on Sundays." },
          { q: "What products do you sell?", a: "Wine (red, white, rosé, sparkling), beer (local Texas craft, imports, domestic), and spirits including whiskey, bourbon, tequila, vodka, gin, rum and liqueurs." },
          { q: "Where are you located?", a: "13201 Pond Springs Rd, Suite 203, Austin, TX 78729. Conveniently located with plenty of parking." },
          { q: "Do you have a loyalty program?", a: "Yes — ask the staff in store about our regulars program. You'll get exclusive deals on your favorites." },
          { q: "Do you carry rare or limited bottles?", a: "We get regular allocations of limited whiskey, tequila and wine. Call ahead to check stock or ask for a special order." },
        ].map((f, i) => (
          <AccordionItem key={i} value={`f${i}`} className="border border-border rounded-xl px-6 bg-card/50">
            <AccordionTrigger className="text-left font-display text-lg hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

const QRConnect = () => {
  const linksUrl = "https://johnniesliquor.com";
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&bgcolor=18120c&color=e8c870&data=${encodeURIComponent(linksUrl)}`;
  const channels = [
    { icon: Star, label: "Google Reviews", sub: "See what locals say", href: REVIEWS_URL, accent: true },
    { icon: Instagram, label: "Instagram", sub: "@johnniesliquorstore", href: IG_URL },
    { icon: Facebook, label: "Facebook", sub: "Updates & events", href: FB_URL },
  ];
  return (
    <Section eyebrow="Stay in touch" title="Connect with Johnie's Liquor" subtitle="Check reviews, follow updates, and stay connected with your East Austin liquor store.">
      <div className="grid lg:grid-cols-3 gap-5 mb-6">
        {channels.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener"
             className={`group flex items-center gap-4 p-6 rounded-2xl border transition-smooth hover-lift ${c.accent ? "border-gold/40 bg-gradient-card shadow-soft" : "border-border bg-card hover:border-gold/40"}`}>
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-smooth">
              <c.icon className="w-6 h-6 text-gold" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-lg leading-tight">{c.label}</div>
              <div className="text-sm text-muted-foreground truncate">{c.sub}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl border border-dashed border-gold/30 bg-card/40">
        <img src={qrSrc} alt="QR code linking to all Johnie's Liquor channels" loading="lazy" width={96} height={96} className="rounded-md w-24 h-24 shrink-0" />
        <div className="text-center sm:text-left flex-1">
          <p className="text-xs uppercase tracking-widest text-gold mb-1">Scan to explore more</p>
          <p className="text-foreground/80">Point your camera at the code to save our contact, hours and links.</p>
        </div>
      </div>
    </Section>
  );
};

const FinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <img src={hero} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
    <div className="container mx-auto px-5 relative z-10 text-center max-w-3xl">
      <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.3em] text-gold">
        <Shield className="w-3 h-3" /> Open today
      </div>
      <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1]">
        Visit <span className="gradient-gold-text italic">Johnie's Liquor</span> today
      </h2>
      <p className="mt-6 text-lg text-foreground/75">Conveniently located with plenty of parking · Friendly faces waiting inside.</p>
      <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild variant="gold" size="xl">
          <a href={MAPS_URL} target="_blank" rel="noopener"><Navigation className="w-5 h-5 mr-2" /> Find us in minutes</a>
        </Button>
        <Button asChild variant="outlineGold" size="xl">
          <a href={`tel:${PHONE}`}><Phone className="w-5 h-5 mr-2" /> Call to check availability</a>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border bg-card/50 pt-16 pb-28 md:pb-12">
    <div className="container mx-auto px-5">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-md bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">J</span>
            </div>
            <span className="font-display font-bold text-xl">Johnnies Liquor</span>
          </div>
          <p className="text-muted-foreground max-w-md">Austin's trusted neighborhood liquor store. Wine, beer & spirits — serving the community for over 20 years.</p>
          <div className="flex gap-3 mt-5">
            <a href={IG_URL} aria-label="Instagram" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-smooth"><Instagram className="w-4 h-4"/></a>
            <a href={FB_URL} aria-label="Facebook" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-smooth"><Facebook className="w-4 h-4"/></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3 text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {ADDRESS}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href={`tel:${PHONE}`} className="hover:text-gold">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Open today · 10am–9pm</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3 text-gold">Find us</h4>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="block rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-smooth">
            <iframe title="Mini map" src="https://www.google.com/maps?q=13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729&output=embed" className="w-full h-32 pointer-events-none" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Johnie's Liquor. All rights reserved.</p>
        <p>Please drink responsibly. Must be 21+ to purchase alcohol.</p>
      </div>
    </div>
  </footer>
);

const StickyMobileBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-gold/30 shadow-deep">
    <div className="flex items-center justify-center gap-2 py-1.5 text-[11px] uppercase tracking-widest text-gold/90">
      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Open now · Until 9 PM
    </div>
    <div className="grid grid-cols-2 divide-x divide-border border-t border-border/50">
      <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 py-4 font-semibold text-base active:bg-gold/10">
        <Phone className="w-5 h-5 text-gold" /> Call Store
      </a>
      <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-4 font-semibold text-base bg-gradient-gold text-primary-foreground">
        <Navigation className="w-5 h-5" /> Directions
      </a>
    </div>
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <QuickActions />
      <TrustBar />
      <Categories />
      <Popular />
      <Deals />
      <WhyUs />
      <About />
      <Experience />
      <Location />
      <FAQ />
      <QRConnect />
      <FinalCTA />
    </main>
    <Footer />
    <StickyMobileBar />
  </div>
);

export default Index;
