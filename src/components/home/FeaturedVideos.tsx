import { motion } from "framer-motion";
import whiskeyPour from "@/assets/whiskey-pour.mp4";
import bottleRotator from "@/assets/bottle-rotator.mp4";
import botanicalsVid from "@/assets/botanicals.mp4";

export const FeaturedVideos = () => {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 border-t border-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-4">The Art of the Pour</div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white">
            Cinematic<br/>
            <span className="italic text-white/50">Exhibition</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Video 1: Whiskey Pour */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full group rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black">
            <video 
              src={whiskeyPour}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
               <div className="w-8 h-px bg-primary mb-4 transition-all duration-500 group-hover:w-16" />
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-2">The Perfect Pour</h3>
               <p className="text-white/60 font-sans text-sm max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Every drop is a testament to the craftsmanship and patience required to create truly exceptional spirits.</p>
            </div>
          </div>

          {/* Video 2: Bottle Rotator */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full md:mt-32 group rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black">
            <video 
              src={bottleRotator}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
               <div className="w-8 h-px bg-primary mb-4 transition-all duration-500 group-hover:w-16" />
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-2">Liquid Gold</h3>
               <p className="text-white/60 font-sans text-sm max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Experience the rich textures, deep amber hues, and premium quality of our curated selections.</p>
            </div>
          </div>

          {/* Video 3: Botanicals */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full md:mt-16 group rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black md:col-span-2 lg:col-span-1">
            <video 
              src={botanicalsVid}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
               <div className="w-8 h-px bg-primary mb-4 transition-all duration-500 group-hover:w-16" />
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white mb-2">Botanic Craft</h3>
               <p className="text-white/60 font-sans text-sm max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">A delicate infusion of juniper and wild herbs defining the fresh, crisp notes of craft gin.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
