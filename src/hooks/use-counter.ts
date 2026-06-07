import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(startOnMount ? 0 : target);
  const [triggered, setTriggered] = useState(startOnMount);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (startOnMount) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          setCount(0);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnMount]);

  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [triggered, target, duration]);

  return { count, ref };
}
