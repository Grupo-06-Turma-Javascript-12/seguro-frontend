import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useRevealOnScroll<T extends HTMLElement>(
  options: RevealOptions = {}
) {
  const {
    threshold = 0.25,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}