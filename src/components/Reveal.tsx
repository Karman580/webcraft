"use client";

import { useEffect, useRef } from "react";

/* One shared IntersectionObserver for every reveal on the page, instead of
   framer-motion's whileInView on ~120 elements. Costs ~1KB and lets the
   sections that use it stay Server Components. */

type Variant = "up" | "left" | "right" | "scale" | "fade";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  return observer;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already on screen at mount (above the fold): show immediately, no observer.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      node.classList.add("is-visible");
      return;
    }

    const io = getObserver();
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
