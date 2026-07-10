import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/Section";
import { MapPin, Phone, Navigation, Mail, Instagram, Facebook, Star } from "@/components/Icons";
import { ADDRESS, DIRECTIONS_URL, PHONE, PHONE_DISPLAY, EMAIL, IG_URL, FB_URL, MAPS_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const CONTACT_CHANNELS = [
  { icon: Phone, label: "Call", href: `tel:${PHONE}` },
  { icon: Navigation, label: "Directions", href: DIRECTIONS_URL, ext: true },
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}` },
  { icon: Instagram, label: "Instagram", href: IG_URL, ext: true },
  { icon: Facebook, label: "Facebook", href: FB_URL, ext: true },
  { icon: Star, label: "Reviews", href: MAPS_URL, ext: true },
];

const ContactHub = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1 bg-white/5 mb-10 relative z-20">
    {CONTACT_CHANNELS.map((c) => (
      <a
        key={c.label}
        href={c.href}
        target={c.ext ? "_blank" : undefined}
        rel={c.ext ? "noopener noreferrer" : undefined}
        onClick={() => trackEvent("contact_click", c.label.toLowerCase())}
        className="group relative min-h-[88px] flex flex-col items-center justify-center gap-3 bg-black p-4 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden border border-white/5"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="shine-el shine-hover-el" />
        </div>
        <c.icon className="relative z-10 w-5 h-5 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
        <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
          {c.label}
        </span>
      </a>
    ))}
  </div>
);

export const VisitUs = () => {
  const todayIdx = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })).getDay();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="contact"
      eyebrow="Location"
      title="Come Say Hello"
      subtitle="Located in the heart of Pond Springs, Austin. We're easy to find and hard to forget."
      className="text-white relative py-24"
    >
      <div ref={ref} className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }}>
        {/* Animated Route Line */}
        <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path 
            d="M -10 110 Q 30 80 50 50 T 110 -10" 
            stroke="#ff0000" 
            strokeWidth="0.5" 
            fill="none" 
            style={{ pathLength }}
            className="drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <ContactHub />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact card */}
          <article className="bg-black/60 backdrop-blur-md p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

            <h3 className="text-2xl md:text-3xl font-display font-black mb-8 tracking-tighter uppercase">Get In Touch</h3>

            <div className="space-y-8 flex-1">
              <div className="flex gap-4 group">
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black mb-3">The Address</div>
                  <p className="text-base font-medium leading-tight mb-3 text-white/80">{ADDRESS}</p>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:text-white transition-colors"
                  >
                    Directions in Maps
                    <span className="w-8 h-[1px] bg-primary" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black mb-3">The Phone</div>
                  <a href={`tel:${PHONE}`} className="text-xl md:text-2xl font-display font-black hover:text-primary transition-colors tracking-tighter text-white">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-hand text-2xl text-white/30 rotate-[-2deg] block">See you soon — Johnnie</span>
            </div>
          </article>

          {/* Map + hours */}
          <div className="flex flex-col gap-8">
            <div className="flex-1 relative overflow-hidden border border-white/10 shadow-2xl min-h-[240px] md:min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.421712128543!2d-97.778399!3d30.4458344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cd31e09cd681%3A0x7df1cdbd4a044e3!2sJohnnie&#39;s%20Liquor%20Store!5e0!3m2!1sen!2sus!4v1714150000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 transition-all duration-1000 opacity-90 hover:opacity-100"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-5 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Store Hours</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Mon – Sat", hours: "10:00 AM – 9:00 PM", isToday: todayIdx >= 1 && todayIdx <= 6 },
                  { label: "Sunday",   hours: "Closed",              isToday: todayIdx === 0 },
                ].map((row) => (
                  <li key={row.label} className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 ${row.isToday ? 'text-primary font-bold' : 'text-white/60'}`}>
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
      </div>
    </Section>
  );
};
