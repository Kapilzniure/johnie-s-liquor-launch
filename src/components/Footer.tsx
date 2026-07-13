import { MapPin, Phone, Clock, Instagram, Facebook } from "@/components/Icons";
import { ADDRESS, PHONE, PHONE_DISPLAY, MAPS_URL, IG_URL, FB_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const Footer = () => {
  const store = getStoreStatus();
  return (
  <footer className="border-t border-border bg-black pt-16 pb-28 md:pb-12 relative z-10">
    <div className="container mx-auto px-5 max-w-7xl">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">J</span>
            </div>
            <span className="font-display font-bold text-xl text-white">Johnnies Liquor</span>
          </div>
          <p className="text-white/60 max-w-md">Austin's trusted neighborhood liquor store. Wine, beer & spirits — serving the community for over 20 years.</p>
          <div className="flex gap-3 mt-5">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white"><Instagram className="w-4 h-4"/></a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white"><Facebook className="w-4 h-4"/></a>
          </div>
        </div>
        <div className="md:col-start-4">
          <h4 className="font-display font-bold mb-3 text-primary">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60 flex flex-col">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" /> <span className="text-left">{ADDRESS}</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-white/40" /> <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-white/40" /> <span>{store.status}</span></li>
          </ul>
        </div>
        
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row flex-wrap gap-4 md:gap-x-12 items-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Johnnies Liquor. All rights reserved.</p>
        <p>Please drink responsibly. Must be 21+ to purchase alcohol.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
        <a 
          href="https://cybiconz.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 group hover:text-white transition-colors cursor-pointer"
        >
          <img
            src="/cybiconz-logo.webp"
            alt="CybiconZ"
            className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <p>Designed and Built by CybiconZ</p>
        </a>
      </div>
    </div>
  </footer>
  );
};
