import { Section } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq";

export const Faq = () => (
  <Section
    id="faq"
    className=""
    eyebrow="Good to Know"
    title="Questions, Answered"
    subtitle="The things customers ask us most — hours, delivery, our loyalty program, and more."
  >
    <div className="max-w-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-2xl rounded-3xl p-8 md:p-12 mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`} className="border-white/10">
            <AccordionTrigger className="text-left text-lg md:text-xl font-display font-black italic text-white tracking-tight hover:text-primary [&[data-state=open]]:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/50 text-sm md:text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);
