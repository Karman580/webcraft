"use client";

import { useEffect } from "react";

type Lenis = { stop: () => void; start: () => void };

/* Locks the page behind an open drawer or modal.

   `overflow: hidden` on <body> is not enough on iOS Safari — touch scrolling
   still bleeds through to the page underneath. Pinning the body with
   position: fixed and restoring the offset on close is the approach that
   actually holds there. Lenis is stopped first so it doesn't fight the pin. */

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    lenis?.stop();

    const y = window.scrollY;
    const { position, top, left, right, width, overflow } = document.body.style;

    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.left = left;
      document.body.style.right = right;
      document.body.style.width = width;
      document.body.style.overflow = overflow;

      window.scrollTo(0, y);
      lenis?.start();
    };
  }, [active]);
}
