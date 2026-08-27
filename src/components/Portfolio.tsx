"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, Cpu, Eye, ArrowUpRight, Target, Wrench, Building2, Boxes } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

/* Interactive (filters + case-study modal), so this stays a Client Component.
   Screenshots go through next/image: AVIF/WebP, responsive sizes, and lazy
   loading for everything below the featured project. */

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  /** One-line description of the client's business, compressed from `summary`.
      Not researched or invented — it restates the brief we were given. */
  business: string;
  image: string;
  metrics: string;
  summary: string;
  challenge: string;
  solution: string;
  techs: string[];
  url: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "risewave",
    title: "Risewave Smart Connectivity",
    category: "business",
    tag: "Security & Networking",
    business: "Smart security, networking infrastructure and building automation services.",
    image: "/portfolio_risewave.png",
    metrics: "99 Speed | 0.5s LCP",
    summary: "A premium smart security, networking infrastructure, and building automation portal designed for high-performance service discovery and direct consultation booking.",
    challenge: "Structuring an extensive services index (HD CCTV, alarm protocols, fiber networking) into a simple, high-converting customer flow.",
    solution: "We built a static edge-cached routing architecture using Next.js, with optimized SVG iconography and pre-cached loading states for sub-600ms responsive queries.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
    url: "https://risewave.vercel.app/",
    featured: true,
  },
  {
    id: "sudarshan",
    title: "Sudarshan AI & Portfolio Portal",
    category: "portfolio",
    tag: "Portfolio Websites",
    business: "A developer portfolio showcasing AI integrations and research work.",
    image: "/portfolio_sudarshan.png",
    metrics: "100 Speed | 0.3s LCP",
    summary: "A sleek developer portfolio showcasing advanced artificial intelligence integrations, smooth mouse-following indicators, and detailed research directories.",
    challenge: "Highlighting complex interactive models and software links in a clean, uncluttered layout that remains mobile-optimized.",
    solution: "We deployed a single-page App Router framework, with asynchronous module loading and dynamic layout hooks that reduce initial load speeds.",
    techs: ["Next.js", "TypeScript", "GSAP ScrollTrigger", "Tailwind CSS"],
    url: "https://sudarshan-portfolio-tanf.vercel.app",
  },
  {
    id: "healingtouch",
    title: "Healing Touch Hospital Portal",
    category: "healthcare",
    tag: "Healthcare Websites",
    business: "A hospital serving patients across Dehradun.",
    image: "/portfolio_healingtouch.png",
    metrics: "99 Speed | 0.5s LCP",
    summary: "A high-traffic professional hospital web presence, featuring direct physician databases, appointment reservations, and patient service directions.",
    challenge: "Creating a reliable, highly accessible user experience for patients in high-stress or low-bandwidth environments.",
    solution: "We built a statically pre-rendered site, storing index information locally in the browser to enable offline page transitions.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "CMS API", "Edge Hosting"],
    url: "https://hthdehradun.com/",
  },
  {
    id: "restopain",
    title: "Rest-O-Pain Clinic Portal",
    category: "healthcare",
    tag: "Healthcare Websites",
    business: "A physiotherapy centre in Ludhiana taking patient appointments.",
    image: "/portfolio_restopain.png",
    metrics: "99 Speed | 0.4s LCP",
    summary: "An ultra-premium, SEO-optimized web portal for Rest-O-Pain Physiotherapy Centre in Ludhiana, offering appointment booking and condition diagnostic indexes.",
    challenge: "Creating a highly accessible patient experience for users in high-stress or low-bandwidth environments, with zero layout shift.",
    solution: "We engineered a statically pre-rendered site using React and Vite, featuring structured medical schema configurations, offline pre-caching, and lightweight custom vector iconography.",
    techs: ["React", "Vite", "Tailwind CSS", "Local SEO Schema", "Vercel"],
    url: "https://docweb-alpha.vercel.app/",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  healthcare: "Healthcare",
  business: "Business",
  portfolio: "Portfolios",
};

const CATEGORIES = [
  { id: "all", name: "All Work" },
  ...Object.keys(CATEGORY_LABELS)
    .filter((id) => PROJECTS.some((p) => p.category === id))
    .map((id) => ({ id, name: CATEGORY_LABELS[id] })),
];

function TechTags({ techs, limit }: { techs: string[]; limit?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {(limit ? techs.slice(0, limit) : techs).map((t) => (
        <span key={t} className="bg-luxury-gray/40 border border-luxury-border rounded px-2 py-0.5 text-[9px] font-mono text-luxury-muted">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const showFeatured = activeCategory === "all";
  const featured = showFeatured ? PROJECTS.find((p) => p.featured) ?? null : null;
  const grid = PROJECTS.filter((p) =>
    activeCategory === "all" ? p.id !== featured?.id : p.category === activeCategory
  );

  return (
    <section id="work" className="relative py-24 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Eye className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">Selected Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Our Selected Work
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Real digital products and platforms we&apos;ve designed and built — the business,
            the problem, and what we shipped.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-2xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-foreground text-background font-bold shadow-md"
                  : "bg-luxury-gray/40 text-luxury-muted hover:text-foreground border border-luxury-border hover:border-luxury-border-hover"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured */}
          {featured && (
            <div className="glass-panel theme-card-shadow rounded-3xl border border-luxury-border overflow-hidden mb-8 group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <button
                  onClick={() => setSelected(featured)}
                  className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden cursor-pointer text-left"
                  aria-label={`Open case study: ${featured.title}`}
                >
                  <Image
                    src={featured.image}
                    alt={`${featured.title} homepage`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/35 lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/50 pointer-events-none" />

                  <span className="absolute top-5 left-5 flex items-center gap-2 z-10">
                    <span className="bg-accent-purple/15 backdrop-blur-md border border-accent-purple/30 rounded px-2.5 py-1 text-[9px] text-accent-purple uppercase font-bold tracking-widest">
                      Featured
                    </span>
                    <span className="bg-black/55 backdrop-blur-md border border-luxury-border rounded px-2.5 py-1 text-[9px] text-white/95 uppercase font-bold tracking-widest">
                      {featured.tag}
                    </span>
                  </span>

                  <span className="absolute bottom-5 left-5 bg-black/65 backdrop-blur-md border border-luxury-border rounded-lg px-3 py-2 font-mono text-[10px] text-accent-cyan flex items-center gap-2 z-10">
                    <Cpu className="w-3.5 h-3.5" />
                    {featured.metrics}
                  </span>
                </button>

                <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-luxury-border">
                  <span className="text-[9px] font-bold text-accent-cyan tracking-[0.2em] uppercase font-mono mb-3">
                    Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 leading-snug">
                    {featured.title}
                  </h3>

                  <div className="flex items-start gap-2 mb-5">
                    <Building2 className="w-3.5 h-3.5 text-luxury-muted/60 mt-0.5 flex-shrink-0" />
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted/90">{featured.business}</p>
                  </div>

                  <div className="space-y-3.5 mb-6">
                    <div>
                      <h4 className="text-[9px] uppercase tracking-wider text-luxury-muted/60 font-bold mb-1">The Problem</h4>
                      <p className="text-[11.5px] leading-relaxed text-luxury-muted">{featured.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-wider text-luxury-muted/60 font-bold mb-1">What We Built</h4>
                      <p className="text-[11.5px] leading-relaxed text-luxury-muted">{featured.summary}</p>
                    </div>
                  </div>

                  <div className="mb-7">
                    <h4 className="text-[9px] uppercase tracking-wider text-luxury-muted/60 font-bold mb-2">The Technology</h4>
                    <TechTags techs={featured.techs} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelected(featured)}
                      className="flex-1 px-5 py-3 rounded-xl bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Full Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 rounded-xl border border-luxury-border bg-luxury-gray/40 text-foreground hover:bg-luxury-gray hover:border-luxury-border-hover text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Live Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {grid.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="group text-left h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border overflow-hidden flex flex-col hover:border-luxury-border-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} homepage`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />

                  <span className="absolute top-4 left-4 bg-black/55 backdrop-blur-md border border-luxury-border rounded px-2.5 py-0.5 text-[9px] text-white/95 uppercase font-bold tracking-widest z-10">
                    {project.tag}
                  </span>

                  <span className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md border border-luxury-border rounded-lg p-2.5 font-mono text-[9px] text-accent-cyan flex items-center gap-1.5 z-10">
                    <Cpu className="w-3.5 h-3.5" />
                    {project.metrics}
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-luxury-border text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted/90 mb-2.5">{project.business}</p>
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted line-clamp-3 mb-6">{project.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-luxury-border">
                    <TechTags techs={project.techs} limit={3} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => scrollToSection("quote")}
            className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
          >
            Start a Project Like These
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Case study modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} case study`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel border border-luxury-border bg-luxury-dark/95 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-5">
                <span className="text-[10px] font-bold text-accent-purple tracking-widest uppercase font-mono">
                  {selected.tag}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close case study"
                  className="p-1 rounded-full bg-luxury-gray/40 border border-luxury-border hover:border-luxury-border-hover text-luxury-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-foreground">{selected.title}</h3>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  Live Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-44 rounded-2xl relative overflow-hidden mb-6 border border-luxury-border">
                <Image
                  src={selected.image}
                  alt={`${selected.title} homepage`}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover object-top"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Business → Problem → Built → How → Tech → Performance */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 flex flex-col gap-4">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-1 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-luxury-muted/60" /> The Business
                    </h4>
                    <p className="text-[11.5px] text-luxury-muted/95 leading-relaxed">{selected.business}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-1 flex items-center gap-1.5">
                      <Target className="w-3 h-3 text-accent-pink" /> The Problem
                    </h4>
                    <p className="text-[11.5px] text-luxury-muted/95 leading-relaxed">{selected.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-1 flex items-center gap-1.5">
                      <Boxes className="w-3 h-3 text-accent-cyan" /> What We Built
                    </h4>
                    <p className="text-[11.5px] text-luxury-muted/95 leading-relaxed">{selected.summary}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-1 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3 text-accent-purple" /> How We Built It
                    </h4>
                    <p className="text-[11.5px] text-luxury-muted/95 leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-5 border-t md:border-t-0 md:border-l border-luxury-border pt-5 md:pt-0 md:pl-5">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-2">The Technology</h4>
                    <TechTags techs={selected.techs} />
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-luxury-muted/70 font-bold mb-2">Performance</h4>
                    <div className="rounded-xl border border-luxury-border bg-luxury-gray/40 p-3">
                      <div className="flex items-center gap-1.5 text-accent-cyan font-mono text-[11px] font-bold">
                        <Cpu className="w-3.5 h-3.5" />
                        {selected.metrics}
                      </div>
                      <p className="text-[9px] font-mono text-luxury-muted/60 mt-1.5 leading-relaxed">
                        Measured on the live site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
