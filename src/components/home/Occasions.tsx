import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import occasionBbq from "@/assets/occasion_bbq.png";
import occasionDate from "@/assets/occasion_date.png";
import heroCandid from "@/assets/hero-candid.png";

const occasions = [
  {
    id: "cookout",
    title: "The Cookout",
    img: occasionBbq,
    desc: "Cold beer and bold reds for the grill.",
    number: "01"
  },
  {
    id: "datenight",
    title: "Date Night",
    img: occasionDate,
    desc: "Intimate pours and deep conversations.",
    number: "02"
  },
  {
    id: "afterhours",
    title: "After Hours",
    img: heroCandid,
    desc: "When the night is just getting started.",
    number: "03"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export const Occasions = () => {
  return (
    <section id="occasions" className="relative py-32 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Cinematic Chapter Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-32 relative z-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Right Bottle, Right Time</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
            The <span className="italic text-primary block mt-2">Occasions</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/50 leading-relaxed font-sans">
            Whether you're firing up the grill, winding down after hours, or planning the perfect date night, we've got the pour.
          </p>
        </motion.header>

        {/* Overlapping Cinematic Grid (Breaking the Card layout) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 relative"
        >
          {occasions.map((occ, idx) => (
            <motion.div 
              key={occ.id} 
              variants={itemVariants}
              className={`group cursor-pointer relative ${idx === 1 ? 'md:mt-24' : ''} ${idx === 2 ? 'md:mt-48' : ''}`}
            >
              <Link to="/catalog" className="block relative">
                
                {/* The Window (Image) */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-color-dodge" />
                  <img
                    src={occ.img}
                    alt={occ.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale-[30%] group-hover:grayscale-0"
                  />
                  {/* Faded bottom for text overlap */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none" />
                </div>
                
                {/* Overlapping Text (Negative Margin) */}
                <div className="relative z-30 -mt-20 px-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-[10px] font-display italic text-primary/70">{occ.number}</span>
                    <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-white/80 transition-colors duration-500">
                      {occ.title}
                    </h3>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-4" />
                  <p className="text-sm font-sans text-white/50 leading-relaxed">
                    {occ.desc}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
