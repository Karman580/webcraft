"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const NAV_LINKS = [
  { name: "What We Build", id: "services" },
  { name: "AI Agents", id: "ai" },
  { name: "Our Work", id: "work" },
  { name: "Process", id: "process" },
  { name: "Technology", id: "technology" },
  { name: "Pricing", id: "pricing" },
  { name: "About", id: "about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"night" | "bright">("night");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The inline script in layout.tsx sets data-theme before paint. Reading it
  // here (rather than in the initial state) is what keeps SSR and the client
  // in agreement, so the setState-in-effect rule is a false positive.
  useEffect(() => {
    const activeTheme = (document.documentElement.getAttribute("data-theme") as "night" | "bright") || "night";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "bright" : "night";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const go = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
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
        {/* Wordmark */}
        <div
          onClick={() => go("hero")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <img
            src="/logo-mark.png"
            alt="Karman Singh Talwar"
            width={108}
            height={36}
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300 theme-logo"
          />
          <span className="flex flex-col leading-none">
            <span className="font-extrabold text-[15px] sm:text-base tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:to-foreground transition-all duration-300">
              Karman Singh Talwar
            </span>
            <span className="hidden sm:block text-[8px] font-bold tracking-[0.22em] uppercase text-luxury-muted/70 font-mono mt-1">
              Software <span className="text-accent-purple">·</span> AI <span className="text-accent-purple">·</span> Systems
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-luxury-muted">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="hover:text-foreground transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA + Theme */}
        <div className="hidden lg:flex items-center gap-4">
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
            onClick={() => go("quote")}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
          >
            Get a Free Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground hover:text-accent-purple transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[60px] bottom-0 bg-luxury-bg z-30 flex flex-col px-8 py-10 gap-5 text-[15px] font-semibold border-t border-luxury-border lg:hidden transition-all duration-500 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => go(link.id)}
            className="text-left py-2.5 border-b border-luxury-border hover:text-accent-cyan transition-colors cursor-pointer text-foreground"
          >
            {link.name}
          </button>
        ))}

        <div className="flex items-center justify-between py-2.5 border-b border-luxury-border">
          <span className="text-luxury-muted font-medium text-sm">Theme Mode</span>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-border bg-luxury-gray text-foreground font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            {theme === "night" ? (
              <><Moon className="w-3.5 h-3.5 text-accent-purple" />Night</>
            ) : (
              <><Sun className="w-3.5 h-3.5 text-accent-cyan" />Bright</>
            )}
          </button>
        </div>

        <button
          onClick={() => go("quote")}
          className="mt-4 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          Get a Free Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
