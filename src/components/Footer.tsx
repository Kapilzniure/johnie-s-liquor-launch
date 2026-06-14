import { MapPin, Phone, Clock, Instagram, Facebook } from "@/components/Icons";
import { ADDRESS, PHONE, PHONE_DISPLAY, IG_URL, FB_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const Footer = () => {
  const store = getStoreStatus();
  return (
  <footer className="bg-black border-t border-white/5 pt-16 pb-32 md:pb-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-white font-display font-black text-lg italic shadow-boutique">J</div>
            <span className="font-display font-black italic text-xl uppercase tracking-tighter text-white">Johnnies Liquor</span>
          </div>
          <p className="text-white/40 text-sm mb-6 max-w-sm leading-relaxed">
            Austin's trusted neighborhood liquor store. Wine, beer &amp; spirits — serving the community for over 20 years.
          </p>
          <div className="flex gap-3">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white/50">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white/50">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />{ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-primary/60" />
              <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-primary/60" />{store.status}
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row flex-wrap gap-3 md:gap-8 items-center text-[10px] text-white/25 font-medium uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Johnnies Liquor Austin</p>
        <p className="text-primary/40">21+ · Drink Responsibly</p>
        <div className="flex gap-5">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <img
            src="/cybiconz-logo.webp"
            alt="CybiconZ"
            className="h-7 w-auto object-contain"
            style={{ mixBlendMode: 'screen', opacity: 0.85 }}
          />
          <span className="text-white/30">by CybiconZ</span>
        </div>
      </div>
    </div>
  </footer>
  );
};
