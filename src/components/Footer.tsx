"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
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
    <footer className="relative bg-luxury-bg border-t border-luxury-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand block */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="WebCraft Technologies Logo" 
                className="h-7 w-auto object-contain drop-shadow-[0_0_10px_rgba(134,92,255,0.3)] theme-logo"
              />
              <span className="font-extrabold text-sm tracking-wider text-foreground">
                WebCraft<span className="text-accent-purple font-light">.tech</span>
              </span>
            </div>
            <p className="text-luxury-muted/70 text-xs max-w-xs leading-relaxed mt-2 font-medium">
              We design and build premium websites and custom web software in 7 days, backed by a risk-free homepage prototype before commitment.
            </p>
          </div>

          {/* Nav groups */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">STUDIO</h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium">
              <button onClick={() => scrollToSection("services")} className="text-left hover:text-foreground transition-colors cursor-pointer">Services</button>
              <button onClick={() => scrollToSection("offer")} className="text-left hover:text-foreground transition-colors cursor-pointer">The Offer</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-left hover:text-foreground transition-colors cursor-pointer">Portfolio</button>
              <button onClick={() => scrollToSection("pricing")} className="text-left hover:text-foreground transition-colors cursor-pointer">Pricing Plans</button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">SUPPORT</h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium">
              <button onClick={() => scrollToSection("faq")} className="text-left hover:text-foreground transition-colors cursor-pointer">FAQ</button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-foreground transition-colors cursor-pointer">Request Demo</button>
              <span className="text-left select-none opacity-40">Privacy Policy</span>
              <span className="text-left select-none opacity-40">Terms of Service</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">COORDINATES</h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium font-mono">
              <a href="mailto:karmantalwar@gmail.com" className="text-luxury-muted/90 hover:text-accent-cyan transition-colors">karmantalwar@gmail.com</a>
              <span>+91 8264386780</span>
              <span>Mumbai, India</span>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="border-t border-luxury-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-neutral-600 font-mono">
            &copy; 2026 WebCraft Technologies. A brand owned and operated by NobleCraft IT Solutions (Proprietorship). All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* Socials */}
            <div className="flex gap-4 text-xs font-mono text-luxury-muted/70">
              <span className="hover:text-foreground transition-colors cursor-pointer">TWITTER</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">GITHUB</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">LINKEDIN</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray/60 text-luxury-muted hover:text-foreground flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
