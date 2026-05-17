import { Section } from "@/components/Section";
import { MapPin, Clock, Navigation, Phone } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, DIRECTIONS_URL, PHONE, PHONE_DISPLAY } from "@/lib/constants";

export const VisitUs = () => (
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
