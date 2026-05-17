import { Section } from "@/components/Section";
import storefront from "@/assets/rum.webp";
import storeInside from "@/assets/johnniesliquor.webp";
import shelves from "@/assets/freeze.webp";

export const Gallery = () => {
  const shots = [
    { img: storeInside , caption: "Easy to find location" },
    { img: storefront, caption: "Clean and organized" },
    { img: shelves, caption: "Wide selection" },
  ];
  return (
    <Section id="gallery" eyebrow="Inside the store" title="Visit the store" subtitle="Take a look around — friendly faces, well-stocked shelves, easy parking.">
      <div className="grid md:grid-cols-3 gap-5">
        {shots.map((s) => (
          <figure key={s.caption} className="group relative overflow-hidden rounded-2xl border border-border hover-lift">
            <div className="aspect-[5/5] overflow-hidden">
              <img src={s.img} alt={s.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
              <figcaption className="text-sm font-medium text-foreground/90">{s.caption}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
};
