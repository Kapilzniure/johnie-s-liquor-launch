import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = "", delay = 0 }: SplitTextProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.split-char');

    gsap.fromTo(chars, 
      { 
        y: 100, 
        opacity: 0, 
        rotateX: -90 
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, [delay, text]);

  return (
    <div className="overflow-hidden" ref={containerRef as any}>
      <div className={`flex flex-wrap ${className}`}>
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex mr-[0.25em] whitespace-nowrap overflow-hidden">
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="split-char inline-block origin-bottom transform-gpu will-change-transform">
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};
