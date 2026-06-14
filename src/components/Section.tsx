import React, { useEffect, useRef, useState } from "react";

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
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
      <div className="container mx-auto px-6 relative z-10">
        {(eyebrow || title) && (
          <div className="max-w-4xl mb-20 md:mb-32">
            {eyebrow && (
              <div className={`text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-6 flex items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="w-8 h-px bg-primary" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className={`text-5xl md:text-8xl lg:text-9xl font-display font-black italic leading-[0.8] tracking-tighter text-white transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-10 text-lg md:text-xl text-white/30 font-medium max-w-xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};
