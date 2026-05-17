import React from "react";

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="container mx-auto px-5">
      {(eyebrow || title) && (
        <div className="max-w-3xl mb-12 md:mb-16">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" /> {eyebrow}
            </div>
          )}
          {title && <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05]">{title}</h2>}
          {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
