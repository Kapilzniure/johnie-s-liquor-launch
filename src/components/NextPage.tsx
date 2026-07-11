import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NextPage = ({ title, href }: { title: string; href: string }) => {
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <Link to={href} onClick={() => window.scrollTo(0,0)} className="group inline-flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-primary transition-colors">Keep Exploring</span>
          <div className="flex items-center gap-6">
            <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">{title}</span>
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white/30 group-hover:text-primary group-hover:translate-x-4 transition-all duration-500" />
          </div>
        </Link>
      </div>
    </section>
  );
};
