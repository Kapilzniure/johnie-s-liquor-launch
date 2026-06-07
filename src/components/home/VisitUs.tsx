import { Section } from "@/components/Section";
import { MapPin, Phone } from "@/components/Icons";
import { ADDRESS, DIRECTIONS_URL, PHONE, PHONE_DISPLAY } from "@/lib/constants";


export const VisitUs = () => {
  const todayIdx = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })).getDay();

  return (
    <Section
      id="contact"
      eyebrow="Location"
      title="Come Say Hello"
      subtitle="Located in the heart of Pond Springs, Austin. We're easy to find and hard to forget."
      className="dark-section bg-background text-foreground"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* Contact card */}
        <article className="bg-card p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col animate-fade-up">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 tracking-tighter uppercase">Get In Touch</h3>

          <div className="space-y-8 flex-1">
            <div className="flex gap-4 group">
              <div className="w-9 h-9 border border-foreground/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-black mb-3">The Address</div>
                <p className="text-base font-display font-medium leading-tight mb-3">{ADDRESS}</p>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-black text-primary hover:underline uppercase tracking-widest"
                >
                  Directions in Maps
                  <span className="w-8 h-[1px] bg-primary" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-9 h-9 border border-foreground/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-black mb-3">The Phone</div>
                <a href={`tel:${PHONE}`} className="text-xl md:text-2xl font-display font-black hover:text-primary transition-colors tracking-tighter">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <span className="font-hand text-2xl text-foreground/30 rotate-[-2deg] block">See you soon — Johnnie</span>
          </div>
        </article>

        {/* Map + hours */}
        <div className="flex flex-col gap-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex-1 relative overflow-hidden border border-foreground/10 shadow-2xl min-h-[240px] md:min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.421712128543!2d-97.778399!3d30.4458344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cd31e09cd681%3A0x7df1cdbd4a044e3!2sJohnnie&#39;s%20Liquor%20Store!5e0!3m2!1sen!2sus!4v1714150000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>

          <div className="bg-card border border-foreground/10 p-5 shadow-xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Store Hours</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Mon – Sat", hours: "10:00 AM – 9:00 PM", isToday: todayIdx >= 1 && todayIdx <= 6 },
                { label: "Sunday",   hours: "Closed",              isToday: todayIdx === 0 },
              ].map((row) => (
                <li key={row.label} className={`flex justify-between items-center py-2 border-b border-foreground/5 last:border-0 ${row.isToday ? 'text-primary font-bold' : ''}`}>
                  <span className="font-bold uppercase tracking-wider text-xs">
                    {row.label}
                    {row.isToday && <span className="ml-2 text-[9px] font-black tracking-widest text-primary/70">TODAY</span>}
                  </span>
                  <span className="font-mono text-xs">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </Section>
  );
};
