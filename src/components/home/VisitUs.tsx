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
    <section id="contact" className="relative py-32 z-10 overflow-hidden">
      
      {/* Immersive Map Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] z-10" />
        {/* Placeholder for an actual map background image if desired. We use a heavy gradient to simulate the vibe. */}
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=1200x800&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:water|element:geometry|color:0x000000&style=feature:landscape|element:geometry|color:0x111111&style=feature:road|element:geometry|color:0x222222&style=feature:poi|element:geometry|color:0x111111&key=YOUR_API_KEY')", // Stylized fallback
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(120%) brightness(50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Location</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
            Come Say <span className="italic text-primary block mt-2">Hello</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/50 leading-relaxed font-sans">
            Drop by our North Austin location. We've got something special waiting for you on the shelves.
          </p>
        </div>

        {/* Floating Glass Card */}
        <div className="max-w-5xl">
          <TiltCard className="w-full">
            <div className="grid md:grid-cols-2 bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_100px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden">
              
              <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full mb-8">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase text-white tracking-widest mb-2">Our Store</h3>
                <p className="text-white/60 font-sans leading-relaxed max-w-sm mb-8">
                  {ADDRESS}
                </p>

                <Magnetic>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-black h-12 px-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
                  >
                    Open in Maps
                  </a>
                </Magnetic>
              </div>

              <div className="p-10 md:p-16 flex flex-col justify-center bg-white/[0.01]">
                <div className="space-y-10">
                  
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

            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
