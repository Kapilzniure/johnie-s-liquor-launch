import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/ui/PageTransition";
import { NextPage } from "@/components/NextPage";
import { OurStory } from "@/components/home/OurStory";
import { StaffPicks } from "@/components/home/StaffPicks";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import heritageVideo from "@/assets/heritage-vault.mp4";

const About = () => {
  return (
    <PageTransition>
      <Seo title="Our Story | Johnnie's Liquor Store" description="Learn about the heritage of Johnnie's Liquor Store." />
      <div className="bg-[#050505] min-h-screen">
        
        {/* About Page Hero */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          >
            <source src={heritageVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
          
          <div className="relative z-10 text-center px-6 pt-20">
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-6 drop-shadow-lg">EST. 2004</div>
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              Our<br/>
              <span className="italic text-white/50">Heritage</span>
            </h1>
          </div>
        </section>

        <div className="flex flex-col gap-24 sm:gap-32 py-24 relative z-20">
          <OurStory />
          <StaffPicks />
          <Gallery />
          <Reviews />
        </div>
      </div>
          <NextPage title="Contact Us" href="/contact" />
    </PageTransition>
  );
};

export default About;
