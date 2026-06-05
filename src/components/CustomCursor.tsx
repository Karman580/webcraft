"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "drag" | "submit">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Apply cursor css modification
    document.documentElement.classList.add("custom-cursor-enabled");

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.animate(
          {
            transform: `translate3d(${clientX - 16}px, ${clientY - 16}px, 0)`,
          },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const interactiveEl = target.closest("a, button, [role='button'], input, select, textarea, [data-cursor]");
      
      if (interactiveEl) {
        const cursorData = interactiveEl.getAttribute("data-cursor");
        if (cursorData === "view") {
          setCursorType("view");
        } else if (cursorData === "drag") {
          setCursorType("drag");
        } else if (interactiveEl.tagName === "BUTTON" && (interactiveEl as HTMLButtonElement).type === "submit") {
          setCursorType("submit");
        } else {
          setCursorType("pointer");
        }
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[999] transition-transform duration-75 mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[998] flex items-center justify-center text-[7px] font-bold tracking-widest uppercase transition-all duration-300 ${
          cursorType === "pointer"
            ? "border-accent-purple bg-accent-purple/15 scale-125"
            : cursorType === "view"
            ? "border-accent-cyan bg-accent-cyan/25 scale-[2.0] after:content-['VIEW'] after:text-white after:font-extrabold"
            : cursorType === "drag"
            ? "border-accent-blue bg-accent-blue/25 scale-[2.0] after:content-['DRAG'] after:text-white after:font-extrabold"
            : cursorType === "submit"
            ? "border-accent-pink bg-accent-pink/25 scale-[2.0] after:content-['SEND'] after:text-white after:font-extrabold"
            : "border-luxury-border scale-100"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
