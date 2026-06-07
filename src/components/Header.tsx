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
    { label: "Our Story", href: "/#story" },
    { label: "Specials", href: "/#specials" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Catalog", href: "/catalog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-foreground/5 h-14 shadow-editorial" : "h-16"}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Editorial Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-primary flex items-center justify-center font-display font-black text-white text-lg group-hover:bg-foreground group-hover:text-background transition-colors duration-500">J</div>
          <div className="flex flex-col">
             <span className="font-display font-bold text-lg tracking-tight leading-none uppercase text-foreground">Johnnies</span>
             <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary italic">Austin, TX</span>
          </div>
        </a>

        {/* Minimal Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-300">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Action area */}
        <div className="flex items-center gap-4">
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" />{PHONE_DISPLAY}
          </a>
          <Button asChild size="sm" className="hidden md:flex bg-primary text-white rounded-none font-black tracking-widest uppercase text-[10px] h-9 px-4 hover:bg-foreground hover:text-background transition-all">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="w-3.5 h-3.5 mr-1.5" />Directions</a>
          </Button>
          <div className="hidden md:block"><SurveyButton /></div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full inset-x-0 bg-background/98 backdrop-blur-3xl border-t border-foreground/5 px-6 py-6 animate-fade-up">
           <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-display font-bold uppercase tracking-tight text-foreground hover:text-primary transition-colors border-b border-foreground/5 pb-4">
                  {l.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest">
                  <Phone className="w-4 h-4" />{PHONE_DISPLAY}
                </a>
                <SurveyButton />
              </div>
           </div>
        </div>
      )}
    </header>
  );
};