import { useState, useEffect } from "react";
import { Menu, X, Phone, Navigation } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { SurveyButton } from "@/components/Survey";
import { PHONE, PHONE_DISPLAY, DIRECTIONS_URL } from "@/lib/constants";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/#home" },
    { label: "Specials", href: "/#specials" },
    { label: "Products", href: "/catalog" },
    { label: "Story", href: "/#story" },
    { label: "Delivery", href: "/#delivery" },
    { label: "Contact", href: "/#contact" },
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
        <div className="md:hidden flex items-center ml-auto mr-2">
          <SurveyButton />
        </div>
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
          <SurveyButton />
          <Button asChild variant="gold" size="sm">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-1.5" /> Directions</a>
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
            <div className="pt-4 border-t border-border">
              <SurveyButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
