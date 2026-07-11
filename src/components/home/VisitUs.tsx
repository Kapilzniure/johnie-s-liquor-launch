import { MapPin, Clock, Phone, Mail } from "@/components/Icons";
import { ADDRESS, MAPS_URL, PHONE, EMAIL } from "@/lib/constants";

const HOURS = [
  { days: "Mon - Sat", hours: "10:00 AM - 9:00 PM" },
  { days: "Sunday", hours: "Closed" }
];
import { TiltCard } from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";

export const VisitUs = () => {
  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Location</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
            Come Say <span className="italic text-primary block mt-2">Hello</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Glass Contact Card */}
          <TiltCard className="w-full h-full">
            <div className="h-full flex flex-col bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_100px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden p-10 md:p-14">
              
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full mb-8">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-black uppercase text-white tracking-widest mb-2">Our Store</h3>
              <p className="text-white/60 font-sans leading-relaxed max-w-sm mb-12">
                {ADDRESS}
              </p>

              <div className="space-y-8 mt-auto">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-4 h-4 text-white/30" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Store Hours</h4>
                  </div>
                  <ul className="space-y-3">
                    {HOURS.map((h) => (
                      <li key={h.days} className="flex justify-between items-center text-sm font-sans">
                        <span className="text-white/70 font-medium">{h.days}</span>
                        <span className="text-white/40 font-mono">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">Call Us</h4>
                    <a href={`tel:${PHONE}`} className="text-sm text-white/80 hover:text-primary transition-colors font-mono">{PHONE}</a>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">Email Us</h4>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-white/80 hover:text-primary transition-colors">{EMAIL}</a>
                  </div>
                </div>
              </div>

            </div>
          </TiltCard>

          {/* Embedded Map Container */}
          <div className="relative w-full h-[500px] lg:h-full rounded-[2rem] overflow-hidden border border-white/[0.08] shadow-[0_20px_100px_rgba(0,0,0,0.5)] group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <iframe 
              src="https://maps.google.com/maps?q=13201%20Pond%20Springs%20Rd%20Austin&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%) grayscale(30%)' 
              }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Johnnie's Liquor Store Location Map"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay button */}
            <div className="absolute bottom-6 right-6 z-20">
              <Magnetic>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black h-12 px-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-2xl"
                >
                  Open in Maps
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
