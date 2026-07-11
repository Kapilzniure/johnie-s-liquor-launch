import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
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

  const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    { label: "VIP Club", href: "/vip" },
    { label: "Visit Us", href: "/contact" },
  ];

  const moreLinks = [
    { label: "Our Story", href: "/about" },
    { label: "Staff Picks", href: "/about#staff" },
    { label: "Gallery", href: "/about#gallery" },
    { label: "Reviews", href: "/about#reviews" },
    { label: "Specials", href: "/services" },
    { label: "Delivery", href: "/services#delivery" },
    { label: "Occasions", href: "/services#occasions" },
    { label: "FAQ", href: "/contact#faq" },
  ];

  const mobileLinks = [
    ...primaryLinks,
    ...moreLinks
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#09090b]/70 backdrop-blur-3xl border-b border-white/[0.08] h-16 shadow-2xl" : "bg-transparent h-24"}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Modern Minimal Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-display font-bold text-white text-xl shadow-lg group-hover:bg-white group-hover:text-primary transition-all duration-500">J</div>
          <div className="flex flex-col">
             <span className="font-display font-bold text-[0.95rem] sm:text-lg tracking-tight leading-none uppercase text-white">Johnnies Liquor Store</span>
          </div>
        </a>

        {/* Simplified desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {primaryLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all duration-300 relative group/link">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover/link:w-full" />
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all duration-300">
              More
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-[#09090b] border-white/10 shadow-2xl backdrop-blur-3xl">
              {moreLinks.map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  asChild
                >
                  <a href={link.href} className="block w-full px-4 py-2 text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                    {link.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Action area */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all">
            <Phone className="w-4 h-4 text-primary" />{PHONE_DISPLAY}
          </a>
          <div className="hidden md:block"><SurveyButton /></div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white relative z-[70]" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#09090b]/95 backdrop-blur-3xl flex flex-col justify-center px-10 animate-fade-up">
           <div className="flex flex-col gap-10">
              {mobileLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-5xl font-display font-black italic tracking-tighter text-white hover:text-primary transition-colors border-b border-white/10 pb-8">
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
