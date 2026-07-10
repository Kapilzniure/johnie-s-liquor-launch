import { PageTransition } from "@/components/ui/PageTransition";
import { Seo } from "@/components/Seo";
import { SkipLink } from "@/components/SkipLink";
import { Section } from "@/components/Section";
import { EventCard } from "@/components/events/EventCard";
import { STORE_EVENTS } from "@/lib/events";
import { buildBreadcrumbSchema, buildEventSchema } from "@/lib/structuredData";

const Events = () => (
  <PageTransition>
    <div className="bg-transparent text-foreground">
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
    <main id="main">
      <Section
        id="events"
        className="bg-[#090c14] pt-32"
        eyebrow="What's Happening"
        title="Upcoming Events"
        subtitle="Tastings, showcases, and community nights at Johnnies — come meet the people behind the shelf."
      >
        {STORE_EVENTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORE_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Events</p>
            <h2 className="text-4xl font-display font-black italic tracking-tighter text-white mb-4">
              There are no events right now.
            </h2>
            <p className="max-w-2xl mx-auto text-white/60 text-base leading-relaxed">
              We don’t have any scheduled tastings, showcases, or live nights at the moment. Check back soon for the next announcement or give us a call for details.
            </p>
          </div>
        )}
      </Section>
    </main>
    </div>
  </PageTransition>
);

export default Events;
