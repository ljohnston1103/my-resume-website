"use client";

import { useEffect, useRef, useState } from "react";

// Plays the teaching-bar drawing once, the first time the chart scrolls into
// view. The bars are fully drawn in the server HTML, so without script, with
// reduced motion, or when the chart is already on screen, nothing moves.
export default function DrawOnView({ className, children }) {
  const ref = useRef(null);
  const [state, setState] = useState("static");

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.85) return undefined;

    setState("waiting");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("drawn");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-draw={state}>
      {children}
    </div>
  );
}
