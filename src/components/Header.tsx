"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"night" | "bright">("night");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeTheme = document.documentElement.getAttribute("data-theme") as "night" | "bright" || "night";
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "bright" : "night";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-header-bg backdrop-blur-xl border-b border-luxury-border shadow-md"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <img 
            src="/logo.png" 
            alt="WebCraft Technologies Logo" 
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(134,92,255,0.35)] theme-logo"
          />
          <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:to-foreground transition-all duration-300">
            WebCraft<span className="text-accent-purple font-light">.tech</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-luxury-muted">
          {[
            { name: "Services", id: "services" },
            { name: "The Offer", id: "offer" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-foreground transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Button & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-luxury-border bg-luxury-gray/45 text-foreground hover:bg-luxury-gray hover:border-luxury-border-hover transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun className={`w-4.5 h-4.5 absolute transition-all duration-500 transform ${
                theme === "bright" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
              }`} />
              <Moon className={`w-4 h-4 absolute transition-all duration-500 transform ${
                theme === "night" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
              }`} />
            </div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
          >
            Start Free Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent-purple transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[60px] bottom-0 bg-luxury-bg z-30 flex flex-col px-8 py-10 gap-6 text-[15px] font-semibold border-t border-luxury-border md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {[
          { name: "Services", id: "services" },
          { name: "The Offer", id: "offer" },
          { name: "How It Works", id: "how-it-works" },
          { name: "Portfolio", id: "portfolio" },
          { name: "Pricing", id: "pricing" },
          { name: "FAQ", id: "faq" },
        ].map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="text-left py-2.5 border-b border-luxury-border hover:text-accent-cyan transition-colors cursor-pointer text-foreground"
          >
            {link.name}
          </button>
        ))}
        
        {/* Mobile Theme Toggle */}
        <div className="flex items-center justify-between py-2.5 border-b border-luxury-border">
          <span className="text-luxury-muted font-medium text-sm">Theme Mode</span>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-border bg-luxury-gray text-foreground font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            {theme === "night" ? (
              <>
                <Moon className="w-3.5 h-3.5 text-accent-purple" />
                Night
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-accent-cyan" />
                Bright
              </>
            )}
          </button>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="mt-4 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          Start Free Demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
