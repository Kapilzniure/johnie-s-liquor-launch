import type { FaqItem } from "@/lib/faq";
import type { StoreEvent } from "@/lib/events";

const SITE_URL = "https://johnniesliquor.com";

export interface BreadcrumbEntry {
  name: string;
  path: string; // relative, e.g. "/catalog"
}

export const buildBreadcrumbSchema = (items: BreadcrumbEntry[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const buildFaqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildEventSchema = (event: StoreEvent) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  startDate: `${event.date}T${event.time}`,
  location: {
    "@type": "Place",
    name: "Johnnies Liquor Store",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13201 Pond Springs Rd, Suite 203",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78729",
      addressCountry: "US",
    },
  },
  description: event.description,
  image: event.image,
  organizer: {
    "@type": "Organization",
    name: "Johnnies Liquor Store",
    url: SITE_URL,
  },
});
