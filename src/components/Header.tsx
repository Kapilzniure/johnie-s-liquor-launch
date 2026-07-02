import { useState, useEffect } from "react";
import { Menu, X, Phone } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { SurveyButton } from "@/components/Survey";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Heritage", href: "/#story" },
    { label: "Occasions", href: "/#occasions" },
    { label: "Specials", href: "/#specials" },
    { label: "Delivery", href: "/#delivery" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Catalog", href: "/catalog" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 h-16 shadow-lg" : "bg-transparent h-20"}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Modern Minimal Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-display font-bold text-white text-xl shadow-boutique group-hover:bg-white group-hover:text-black transition-all duration-500">J</div>
          <div className="flex flex-col">
             <span className="font-display font-bold text-lg tracking-tight leading-none uppercase text-white">Johnnies</span>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary italic leading-none mt-1">Austin</span>
          </div>
        </a>

        {/* Minimal Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all duration-300 relative group/link">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover/link:w-full" />
            </a>
          ))}
        </nav>

        {/* Action area */}
        <div className="flex items-center gap-6">
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-all">
            <Phone className="w-4 h-4 text-primary" />{PHONE_DISPLAY}
          </a>
          <div className="hidden md:block"><SurveyButton /></div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white relative z-[70]" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col justify-center px-10 animate-fade-up">
           <div className="flex flex-col gap-10">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-5xl font-display font-black italic tracking-tighter text-white hover:text-primary transition-colors border-b border-white/5 pb-8">
                  {l.label}
                </a>
              ))}
              <div className="pt-10 flex flex-col gap-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 text-xl font-bold text-primary uppercase tracking-widest">
                  <Phone className="w-6 h-6" />{PHONE_DISPLAY}
                </a>
                <SurveyButton />
              </div>
           </div>
        </div>
      )}
    </header>
  );
};
