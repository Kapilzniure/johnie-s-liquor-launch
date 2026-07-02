import type { StoreEvent } from "@/lib/events";
import { Calendar, Clock } from "@/components/Icons";

export const EventCard = ({ event }: { event: StoreEvent }) => (
  <article className="group relative bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-700 overflow-hidden flex flex-col">
    <div className="relative aspect-[4/3] overflow-hidden bg-black">
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">
        <span className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          {event.displayDate}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          {event.displayTime}
        </span>
      </div>
      <h3 className="text-2xl font-display font-black italic text-white mb-4 tracking-tighter">{event.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">{event.description}</p>
      <a
        href={event.ctaHref}
        target={event.ctaHref.startsWith("http") ? "_blank" : undefined}
        rel={event.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-all duration-500 self-start"
      >
        {event.ctaLabel}
        <span className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-primary transition-all duration-1000" />
      </a>
    </div>
  </article>
);
