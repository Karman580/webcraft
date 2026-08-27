// Single scroll helper — replaces the copy of this function that lived in
// Header, Hero, Footer, Pricing, OfferComparison and Portfolio.
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(element, { offset: -80 });
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: number) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
