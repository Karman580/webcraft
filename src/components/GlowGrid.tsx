"use client";

import { useRef } from "react";

/* One delegated pointer listener for a whole grid of cards. Writes the cursor
   position into CSS custom properties and lets CSS paint the glow.

   The previous version stored cursor coords in React state per card, which
   re-rendered a component on every mousemove frame. This does zero renders. */

export default function GlowGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-glow]");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className={className}>
      {children}
    </div>
  );
}
