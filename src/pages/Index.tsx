import { useEffect, useState } from "react";
import {
  Phone, MapPin, Clock, Navigation, Menu, X,
  Wine, Beer, GlassWater, Truck, ChevronDown, Sparkles, Star, Package, Award,
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

import hero from "@/assets/hero-store.jpg";
import heroBottle from "@/assets/hero-bottle.png";
import catWine from "@/assets/cat-wine.jpg";
import catBeer from "@/assets/cat-beer.jpg";
import catSpirits from "@/assets/cat-spirits.jpg";
import storefront from "/public/rum.jpg";
import storeInside from "/public/johnniesliquor.webp";
import shelves from "/public/freeze.jpg";
import pBourbon from "@/assets/p-bourbon.jpg";
import pWine from "@/assets/p-wine.jpg";
import pBeer from "@/assets/p-beer.jpg";

const PHONE = "+15123835004";
const PHONE_DISPLAY = "(512) 383-5004";
const ADDRESS = "13201 Pond Springs Rd, Suite 203, Austin, TX 78729";
const MAPS_URL = "https://www.google.com/maps/place/Johnnie's+Liquor+Store/@30.445839,-97.7809739,17z/data=!3m2!4b1!5s0x8644cd2fb7b7f3f1:0xc10671f0e8c46ad0!4m6!3m5!1s0x8644cd31e09cd681:0x7df1cdbd4a044e3!8m2!3d30.4458344!4d-97.778399!16s%2Fg%2F11h_prtsbz?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Johnnie%27s+Liquor+Store%2C+13201+Pond+Springs+Rd+Suite+203%2C+Austin%2C+TX+78729&destination_place_id=ChIJgdac4DHNRIYRY04ETb3N8X0";
const REVIEWS_URL = MAPS_URL;
const IG_URL = "https://www.instagram.com/johnniesliquor_store/";
const FB_URL = "https://www.facebook.com/people/Johnnies-Liquor-Store/61567907153640/";
const DOORDASH_URL = "https://www.doordash.com/";
const GRUBHUB_URL = "https://www.grubhub.com/";

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
    { label: "Specials", href: "#specials" },
    { label: "Offerings", href: "#products" },
    { label: "Story", href: "#story" },
    { label: "Delivery", href: "#delivery" },
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
          <span className="gradient-gold-text italic">Johnnie's</span><br />Liquor Store
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl">
          Wine • Beer • Spirits and more in Austin, TX
        </p>
        <p className="mt-2 text-base text-foreground/60 max-w-xl">
          Fast, friendly service — delivery available.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button asChild variant="gold" size="xl">
            <a href={`tel:${PHONE}`}><Phone className="w-5 h-5 mr-2" /> Call Now</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-5 h-5 mr-2" /> Get Directions</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href="#delivery"><Truck className="w-5 h-5 mr-2" /> Order Delivery</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold" /> Open today until 9 PM · Free parking
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
    { icon: Navigation, label: "Get Directions", href: DIRECTIONS_URL, ext: true },
    { icon: Phone, label: "Call Now", href: `tel:${PHONE}` },
    { icon: Truck, label: "Order Delivery", href: "#delivery" },
    { icon: Instagram, label: "Instagram", href: IG_URL, ext: true },
    { icon: Facebook, label: "Facebook", href: FB_URL, ext: true },
  ];
  return (
    <section id="quick" className="border-y border-border bg-card/50">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
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



const Delivery = () => (
  <Section id="delivery" eyebrow="Delivery available" title="Order from home" subtitle="Get your favorite drinks delivered. Available on DoorDash & Grubhub.">
    <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
      <a href={DOORDASH_URL} target="_blank" rel="noopener"
         className="group flex items-center justify-between p-7 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-2">Order on</div>
          <div className="text-2xl md:text-3xl font-display font-bold">DoorDash</div>
          <p className="text-sm text-muted-foreground mt-1">Fast local delivery</p>
        </div>
        <Truck className="w-10 h-10 text-gold group-hover:scale-110 transition-smooth" />
      </a>
      <a href={GRUBHUB_URL} target="_blank" rel="noopener"
         className="group flex items-center justify-between p-7 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-2">Order on</div>
          <div className="text-2xl md:text-3xl font-display font-bold">Grubhub</div>
          <p className="text-sm text-muted-foreground mt-1">Door-to-door service</p>
        </div>
        <Truck className="w-10 h-10 text-gold group-hover:scale-110 transition-smooth" />
      </a>
    </div>
  </Section>
);

const Favorites = () => {
  const items = [
    { img: pBourbon, cat: "Whiskey · 750ml", name: "Single Barrel Bourbon"  },
    { img: pWine, cat: "Wine · 750ml", name: "Texas Reserve Red"},
    { img: pBeer, cat: "Beer · 6-pack", name: "Local Craft IPA"},
  ];
  return (
    <Section id="favorites" eyebrow="Customer favorites" title="Popular this month" subtitle="What our regulars are picking up. Stop by to see the full lineup in store.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.name} className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
            <div className="aspect-[4/5] overflow-hidden bg-background/40">
              <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="p-5 flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{it.cat}</div>
                <h3 className="font-display text-xl font-bold leading-tight">{it.name}</h3>
              </div>
              <div className="font-display text-2xl font-bold gradient-gold-text shrink-0">{it.price}</div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Prices may vary. Selection rotates weekly — call to confirm availability.</p>
    </Section>
  );
};

// const Specials = () => {
//   const offers = [
//     { tag: "Weekly", title: "20% Off Wine Wednesdays", desc: "Every Wednesday on bottles over $20.", icon: Wine },
//     { tag: "Limited", title: "Buy 2, Get 1 Free Craft Beer", desc: "Mix & match local Texas craft six-packs.", icon: Beer },
//     { tag: "Monthly", title: "Whiskey of the Month", desc: "Featured premium bourbon at $10 off.", icon: GlassWater },
//   ];
//   return (
//     <Section id="specials" eyebrow="Promotions" title="Weekly specials & offers" subtitle="Fresh deals every week — stop in or order delivery to save more.">
//       <div className="grid md:grid-cols-3 gap-6">
//         {offers.map((o) => (
//           <article key={o.title} className="group relative p-7 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 hover-lift">
//             <div className="flex items-center justify-between mb-5">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 bg-gold/5">
//                 <Sparkles className="w-3 h-3" /> {o.tag}
//               </span>
//               <o.icon className="w-7 h-7 text-gold/70 group-hover:text-gold transition-smooth" />
//             </div>
//             <h3 className="text-2xl font-display font-bold leading-tight mb-2">{o.title}</h3>
//             <p className="text-foreground/70 text-sm">{o.desc}</p>
//           </article>
//         ))}
//       </div>
//       <p className="mt-8 text-xs text-muted-foreground">Offers subject to availability. Must be 21+. Please drink responsibly.</p>
//     </Section>
//   );
// };

const OurStory = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Years serving Austin" },
    { icon: Package, value: "3.2k", label: "Products in store" },
    { icon: Star, value: "4.8★", label: "Customer rating" },
  ];
  return (
    <Section id="story" eyebrow="Our Story" title="A family-owned Austin staple" subtitle="Proudly serving Austin for 20+ years — focused on great selection, fair prices, and friendly service.">
      <div className="grid md:grid-cols-3 gap-5">
        {stats.map((s) => (
          <a
            key={s.label}
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-2xl bg-gradient-card border border-border text-center hover-lift hover:border-gold/50 transition-smooth"
          >
            <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
            <div className="text-7xl md:text-4xl font-display font-bold gradient-gold-text">{s.value}</div>
            <div className="mt-7 text-sm text-muted-foreground uppercase tracking-widest">{s.label}</div>
          </a>
        ))}
      </div>
    </Section>
  );
};

const Gallery = () => {
  const shots = [
    { img: storeInside , caption: "Easy to find location" },
    { img: storefront, caption: "Clean and organized" },
    { img: shelves, caption: "Wide selection" },
  ];
  return (
    <Section id="gallery" eyebrow="Inside the store" title="Visit the store" subtitle="Take a look around — friendly faces, well-stocked shelves, easy parking.">
      <div className="grid md:grid-cols-3 gap-5">
        {shots.map((s) => (
          <figure key={s.caption} className="group relative overflow-hidden rounded-2xl border border-border hover-lift">
            <div className="aspect-[5/5] overflow-hidden">
              <img src={s.img} alt={s.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
              <figcaption className="text-sm font-medium text-foreground/90">{s.caption}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
};

const VisitUs = () => (
  <Section id="contact" eyebrow="Visit us" title="Find us, call us, stop by">
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-5">
        <div className="p-6 rounded-2xl bg-gradient-card border border-border">
          <MapPin className="w-6 h-6 text-gold mb-3" />
          <h3 className="font-display text-xl font-bold mb-1">Address</h3>
          <p className="text-foreground/80 text-sm">{ADDRESS}</p>
          <Button asChild variant="gold" className="mt-4 w-full">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" /> Get Directions</a>
          </Button>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-card border border-border">
          <Clock className="w-6 h-6 text-gold mb-3" />
          <h3 className="font-display text-xl font-bold mb-3">Opening Hours</h3>
          <ul className="space-y-1 text-sm">
            {[["Mon – Sat", "10:00 AM – 9:00 PM"], ["Sunday", "Closed"]].map(([d,h]) => (
              <li key={d} className="flex justify-between gap-4 py-1.5 border-b border-border/60 last:border-0">
                <span className="text-muted-foreground">{d}</span><span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outlineGold" className="mt-4 w-full">
            <a href={`tel:${PHONE}`}><Phone className="w-4 h-4 mr-2" /> {PHONE_DISPLAY}</a>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border min-h-[360px] shadow-deep">
        <iframe
          title="Johnnies Liquor location"
          src="https://www.google.com/maps?q=13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729&output=embed"
          className="w-full h-full min-h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </Section>
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
    <div className="grid grid-cols-3 divide-x divide-border border-t border-border/50">
      <a href={`tel:${PHONE}`} className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs active:bg-gold/10">
        <Phone className="w-5 h-5 text-gold" /> Call
      </a>
      <a href="#delivery" className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs active:bg-gold/10">
        <Truck className="w-5 h-5 text-gold" /> Delivery
      </a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 font-semibold text-xs bg-gradient-gold text-primary-foreground">
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
      <Favorites />
      {/* <Specials /> */}
      {/* <Categories /> */}
      <OurStory />
      <Gallery />
      <Delivery />
      <VisitUs />
    </main>
    <Footer />
    <StickyMobileBar />
  </div>
);

export default Index;
