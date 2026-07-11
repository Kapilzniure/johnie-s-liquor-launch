import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pWine from "@/assets/p-wine.webp";
import casamigosBlanco from "@/assets/casamigos-blanco-tequila.webp";
import wildTurkey from "@/assets/wild-turkey-101-bourbon.webp";

const picks = [
  { id: "1", title: "Silver Oak", type: "Cabernet Sauvignon", img: pWine, rating: "98 pts" },
  { id: "2", title: "Casamigos Blanco", type: "Blanco Tequila", img: casamigosBlanco, rating: "Staff Favorite" },
  { id: "3", title: "Wild Turkey 101", type: "Kentucky Bourbon", img: wildTurkey, rating: "Rare Find" }
];

export const StaffPicks = () => {
  return (
    <section className="relative py-32 z-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Cinematic Chapter Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-24 relative z-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Staff Picks</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-light text-white tracking-tighter leading-[0.9]">
            The <span className="italic text-primary block mt-2">Vault</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed font-sans">
            Rare finds and highly allocated bottles. If it's on this list, it's worth your time.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {picks.map((pick, idx) => (
            <motion.div 
              key={pick.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <Link to={`/catalog?s=${pick.title}`} className="block relative bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-2xl rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                
                {/* Spotlit Image Area */}
                <div className="relative h-[400px] flex items-center justify-center p-8 overflow-hidden bg-black/40">
                  <div className="cinematic-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img 
                    src={pick.img} 
                    alt={pick.title} 
                    className="relative z-10 max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-1000" 
                  />
                  {/* Subtle edge highlight */}
                  <div className="absolute inset-0 border border-white/5 transition-colors duration-500 pointer-events-none" />
                </div>
                
                {/* Information Card */}
                <div className="p-8 relative bg-white/5 border-t border-white/[0.08]">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl font-display text-white group-hover:text-primary transition-colors duration-500">{pick.title}</h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-sans font-black text-white/40 uppercase tracking-[0.3em]">
                      {pick.type}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 border border-white/20 px-2 py-1 rounded-sm">
                      {pick.rating}
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center justify-center gap-6"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/10" />
          <Link to="/catalog" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300">
            <span>Explore the Cellar</span>
            <span className="w-8 h-px bg-white/20 group-hover:bg-primary/50 transition-colors" />
          </Link>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

      </div>
    </section>
  );
};
