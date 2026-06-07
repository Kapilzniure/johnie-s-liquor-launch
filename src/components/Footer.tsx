import { MapPin, Phone, Clock, Instagram, Facebook } from "@/components/Icons";
import { ADDRESS, PHONE, PHONE_DISPLAY, MAPS_URL, IG_URL, FB_URL } from "@/lib/constants";
import { getStoreStatus } from "@/lib/hours";

export const Footer = () => {
  const store = getStoreStatus();
  return (
  <footer className="border-t border-foreground/10 bg-card/50 pt-10 pb-28 md:pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 bg-primary flex items-center justify-center text-white font-display font-black text-base shadow-lg">J</div>
            <span className="font-display font-bold text-lg">Johnnies Liquor</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 max-w-sm">
            Austin's trusted neighborhood liquor store. Wine, beer &amp; spirits — serving the community for over 20 years.
          </p>
          <div className="flex gap-3">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold mb-3 text-primary text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{ADDRESS}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-primary" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0 text-primary" />{store.status}</li>
          </ul>
        </div>

        {/* Mini Map */}
        <div>
          <h4 className="font-display font-bold mb-3 text-primary text-sm">Find Us</h4>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block rounded overflow-hidden border border-border hover:border-primary/50 transition-colors">
            <iframe
              title="Johnnies Liquor location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.421712128543!2d-97.778399!3d30.4458344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cd31e09cd681%3A0x7df1cdbd4a044e3!2sJohnnie&#39;s%20Liquor%20Store!5e0!3m2!1sen!2sus!4v1714150000000!5m2!1sen!2sus"
              className="w-full h-28 pointer-events-none"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Copyright bar — one line */}
      <div className="mt-8 pt-5 border-t border-border flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Johnnies Liquor. All rights reserved.</p>
        <p>Please drink responsibly. Must be 21+.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <img src="/cybiconz-logo.webp" alt="CybiconZ" className="h-8 w-auto object-contain" style={{ mixBlendMode: 'screen', opacity: 0.9 }} />
          <span>Designed and Built by CybiconZ</span>
        </div>
      </div>
    </div>
  </footer>
  );
};
