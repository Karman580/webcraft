"use client";

import { scrollToSection } from "@/lib/scroll";

/* Tiny client island so the sections that only needed a scroll handler can
   stay Server Components. */

export default function ScrollLink({
  to,
  children,
  className,
  ariaLabel,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button type="button" onClick={() => scrollToSection(to)} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
