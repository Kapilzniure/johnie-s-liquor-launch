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

// Sample events — currently no events are scheduled.
export const STORE_EVENTS: StoreEvent[] = [];
