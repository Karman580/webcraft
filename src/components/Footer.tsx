"use client";

import { ArrowUp, Mail, MessageCircle, Link2, Code2 } from "lucide-react";
import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { CONTACT, WHATSAPP_URL, MAILTO_URL } from "@/lib/contact";

const SERVICES = [
  { name: "Full Stack Development", to: "services" },
  { name: "AI & Automation", to: "ai" },
  { name: "AI Agents", to: "ai" },
  { name: "Web & Mobile Applications", to: "services" },
  { name: "Cloud Infrastructure", to: "services" },
  { name: "Custom Software", to: "services" },
];

const COMPANY = [
  { name: "About", id: "about" },
  { name: "Our Work", id: "work" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "quote" },
];

const CONNECT = [
  { name: "Email", href: MAILTO_URL, icon: Mail, external: false },
  { name: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle, external: true },
  { name: "LinkedIn", href: CONTACT.linkedin, icon: Link2, external: true },
  { name: "GitHub", href: CONTACT.github, icon: Code2, external: true },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-luxury-bg border-t border-luxury-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Upper grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-8 mb-12">
          {/* Brand */}
          <div className="xs:col-span-2 flex flex-col gap-4">
            <div
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2.5 cursor-pointer w-fit group"
            >
              <img
                src="/logo-mark.png"
                alt=""
                aria-hidden="true"
                width={96}
                height={32}
                className="h-8 w-auto object-contain theme-logo group-hover:scale-105 transition-transform duration-300"
              />
              <span className="flex flex-col leading-none">
                <span className="font-extrabold text-sm tracking-tight text-foreground">
                  {CONTACT.name}
                </span>
                <span className="text-[8px] font-bold tracking-[0.22em] uppercase text-luxury-muted/70 font-mono mt-1">
                  Software <span className="text-accent-purple">·</span> AI <span className="text-accent-purple">·</span> Systems
                </span>
              </span>
            </div>

            <p className="text-luxury-muted/70 text-xs max-w-xs leading-relaxed mt-2 font-medium">
              We build the digital systems behind modern businesses — software, AI, mobile,
              web and cloud, designed around how the business actually works.
            </p>

            <div className="flex flex-col gap-1.5 mt-2 text-xs text-luxury-muted/70 font-mono">
              <a href={MAILTO_URL} className="hover:text-accent-cyan transition-colors w-fit">
                {CONTACT.email}
              </a>
              <span>{CONTACT.phone}</span>
              <span>{CONTACT.location}</span>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">
              Services
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium">
              {SERVICES.map((s) => (
                <button
                  key={s.name}
                  onClick={() => scrollToSection(s.to)}
                  className="text-left hover:text-foreground transition-colors cursor-pointer"
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">
              Company
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium">
              {COMPANY.map((c) => (
                <button
                  key={c.id}
                  onClick={() => scrollToSection(c.id)}
                  className="text-left hover:text-foreground transition-colors cursor-pointer"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-luxury-muted uppercase tracking-widest font-mono">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-luxury-muted/70 font-medium">
              {CONNECT.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lower bar */}
        <div className="border-t border-luxury-border pt-8 pb-[max(0px,env(safe-area-inset-bottom))] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-luxury-muted/50 font-mono text-center sm:text-left">
            &copy; {currentYear} {CONTACT.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-muted/50">
              Software · AI · Systems
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
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
