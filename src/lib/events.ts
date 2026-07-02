import tasting from "@/assets/johnniesliquor.webp";
import holiday from "@/assets/hero-store.webp";
import liveMusic from "@/assets/store-inside.webp";

export interface StoreEvent {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-08-14"
  time: string; // 24h, e.g. "18:00"
  displayDate: string; // human-friendly, e.g. "August 14, 2026"
  displayTime: string; // human-friendly, e.g. "6:00 PM – 8:00 PM"
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

// Sample events — replace with real dates/details when scheduled.
export const STORE_EVENTS: StoreEvent[] = [
  {
    id: "bourbon-bbq-tasting",
    slug: "bourbon-bbq-tasting-night",
    title: "Bourbon & BBQ Tasting Night",
    date: "2026-08-14",
    time: "18:00",
    displayDate: "August 14, 2026",
    displayTime: "6:00 PM – 8:00 PM",
    description:
      "Sample five Texas bourbons paired with smoked bites from a local pitmaster. Meet our staff pickers and take home a tasting notes card.",
    image: tasting,
    ctaLabel: "Reserve a Spot",
    ctaHref: "tel:+15123835004",
  },
  {
    id: "holiday-spirits-showcase",
    slug: "holiday-spirits-showcase",
    title: "Holiday Spirits Showcase",
    date: "2026-12-12",
    time: "17:00",
    displayDate: "December 12, 2026",
    displayTime: "5:00 PM – 8:00 PM",
    description:
      "Our biggest tasting of the year — rare bottles, gift bundles, and seasonal cocktails. First look at limited holiday releases before they hit the shelf.",
    image: holiday,
    ctaLabel: "Learn More",
    ctaHref: "tel:+15123835004",
  },
  {
    id: "live-music-weekend",
    slug: "live-music-weekend-send-off",
    title: "Live Music Weekend Send-Off",
    date: "2026-09-05",
    time: "19:00",
    displayDate: "September 5, 2026",
    displayTime: "7:00 PM – 9:00 PM",
    description:
      "Acoustic sets from local Austin artists in the parking lot, cold beer specials, and a build-your-own cooler station.",
    image: liveMusic,
    ctaLabel: "Get Directions",
    ctaHref: "https://www.google.com/maps/place/Johnnie's+Liquor+Store/@30.4458344,-97.778399,17z",
  },
];
