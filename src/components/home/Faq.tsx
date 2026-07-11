import { Section } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq";

export const Faq = () => (
  <Section
    id="faq"
    className="border-t border-white/5 bg-black"
  >
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
      
      {/* Left: Architectural Sticky Header */}
      <div className="lg:col-span-5 lg:sticky lg:top-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">Good to Know</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter leading-[0.9]">
          Questions,<br/>
          <span className="italic text-primary">Answered</span>
        </h2>
        <p className="mt-8 max-w-sm text-lg text-white/50 leading-relaxed font-sans">
          The things customers ask us most — hours, delivery, our loyalty program, and more.
        </p>
      </div>

      {/* Right: Massive Expanding Rows */}
      <div className="lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`} className="border-white/10 py-4">
              <AccordionTrigger className="text-left text-xl md:text-2xl font-display font-black uppercase tracking-tight text-white/80 hover:text-primary [&[data-state=open]]:text-primary transition-colors py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-base md:text-lg leading-relaxed pb-8 max-w-2xl">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  </Section>
);
