import React, { useEffect, useRef, useState } from "react";

export const Section = ({ id, eyebrow, title, subtitle, children, className = "", glow = false }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >

      {glow && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber/4 rounded-full blur-[110px]" />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-8 md:mb-12">
            {eyebrow && (
              <div className={`text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-4 flex items-center gap-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <span className="w-8 h-[1px] bg-primary" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-black leading-[0.95] tracking-tight mb-4 reveal-mask ${isVisible ? 'is-visible' : ''}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-sm md:text-base text-muted-foreground/80 font-medium max-w-2xl leading-relaxed transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};
