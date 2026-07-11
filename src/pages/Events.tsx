import { PageTransition } from "@/components/ui/PageTransition";
import { NextPage } from "@/components/NextPage";
import { Seo } from "@/components/Seo";
import { SkipLink } from "@/components/SkipLink";
import { Section } from "@/components/Section";
import { EventCard } from "@/components/events/EventCard";
import { STORE_EVENTS } from "@/lib/events";
import { buildBreadcrumbSchema, buildEventSchema } from "@/lib/structuredData";
import socialVideo from "@/assets/social-clink.mp4";

const Events = () => (
  <PageTransition>
    <Seo
      title="Upcoming Events | Johnnies Liquor Store Austin"
      description="Tastings, showcases, and live music at Johnnies Liquor Store in Austin, TX. See what's coming up and reserve your spot."
      path="/events"
      jsonLd={[
        buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Events", path: "/events" }]),
        ...STORE_EVENTS.map(buildEventSchema),
      ]}
    />
    <SkipLink />
    
    <div className="bg-[#050505] min-h-screen">
      
      {/* Events Page Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src={socialVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 pt-20">
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <div className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-primary mb-6 drop-shadow-lg">Tastings & Community</div>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            Social<br/>
            <span className="italic text-white/50">Gatherings</span>
          </h1>
        </div>
      </section>

      <main id="main" className="relative z-20 py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {STORE_EVENTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STORE_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-[3rem] border border-white/[0.08] bg-white/[0.02] p-12 text-center shadow-2xl backdrop-blur-md max-w-4xl mx-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Events</p>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-white mb-6">
                No <span className="italic text-white/50">Upcoming Events</span>
              </h2>
              <p className="max-w-xl mx-auto text-white/50 text-sm leading-relaxed font-sans">
                We don’t have any scheduled tastings, showcases, or live nights at the moment. Check back soon for the next announcement or give us a call for details.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
        <NextPage title="Our Story" href="/about" />
    </PageTransition>
);

export default Events;
