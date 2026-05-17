import { MapPin, Phone, Clock, Instagram, Facebook } from "@/components/Icons";
import { ADDRESS, PHONE, PHONE_DISPLAY, MAPS_URL, IG_URL, FB_URL } from "@/lib/constants";

export const Footer = () => (
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
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-smooth"><Instagram className="w-4 h-4"/></a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-smooth"><Facebook className="w-4 h-4"/></a>
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
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-smooth">
            <iframe title="Mini map" src="https://www.google.com/maps?q=13201+Pond+Springs+Rd+Suite+203+Austin+TX+78729&output=embed" className="w-full h-32 pointer-events-none" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row flex-wrap gap-4 md:gap-x-12 items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Johnnies Liquor. All rights reserved.</p>
        <p>Please drink responsibly. Must be 21+ to purchase alcohol.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-gold transition-smooth">Privacy Policy</a>
          <a href="/terms" className="hover:text-gold transition-smooth">Terms of Service</a>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/cybiconz-logo.webp"
            alt="CybiconZ"
            className="h-8 w-auto object-contain"
          />
          <p>Designed and Built by CybiconZ</p>
        </div>
      </div>
    </div>
  </footer>
);
