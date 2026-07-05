import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Seo } from "@/components/Seo";
import { SkipLink } from "@/components/SkipLink";
import { Section } from "@/components/Section";
import { EventCard } from "@/components/events/EventCard";
import { STORE_EVENTS } from "@/lib/events";
import { buildBreadcrumbSchema, buildEventSchema } from "@/lib/structuredData";

const Events = () => (
  <div className="min-h-screen bg-background text-foreground">
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
    <Header />
    <main id="main">
      <Section
        id="events"
        className="bg-[#090c14] pt-32"
        eyebrow="What's Happening"
        title="Upcoming Events"
        subtitle="Tastings, showcases, and community nights at Johnnies — come meet the people behind the shelf."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </main>
    <Footer />
    <StickyMobileBar />
  </div>
);

export default Events;
