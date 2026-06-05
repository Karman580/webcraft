"use client";

import { useState } from "react";
import { motion as framerMotion, AnimatePresence as FramerAnimatePresence } from "framer-motion";
import { Sparkles, X, ExternalLink, ShieldAlert, Cpu, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  metrics: string;
  summary: string;
  challenge: string;
  solution: string;
  techs: string[];
  url: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { name: "All Work", id: "all" },
    { name: "Healthcare", id: "healthcare" },
    { name: "Business", id: "business" },
    { name: "Startups", id: "startup" },
    { name: "Portfolios", id: "portfolio" },
  ];

  const projects: Project[] = [
    {
      id: "glyptika",
      title: "Glyptika Creative Agency",
      category: "business",
      tag: "Business Websites",
      image: "/portfolio_glyptika.png",
      metrics: "99 Speed | 0.4s LCP",
      summary: "A premium, dark-luxury creative design and digital experience portfolio demonstrating Awwwards-level visual grids and fluid 3D transitions.",
      challenge: "Providing zero-latency image grids and high-fidelity scrolling performance in a graphic-heavy presentation.",
      solution: "We engineered custom canvas-preloaded visual pipelines, combined with Next.js static asset optimizations, resulting in a perfect 99 Speed score and 400ms load speeds.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
      url: "https://www.glyptika.com/",
    },
    {
      id: "risewave",
      title: "Risewave Smart Connectivity",
      category: "business",
      tag: "Security & Networking",
      image: "/portfolio_risewave.png",
      metrics: "99 Speed | 0.5s LCP",
      summary: "A premium smart security, networking infrastructure, and building automation portal designed for high-performance service discovery and direct consultation booking.",
      challenge: "Structuring an extensive services index (HD CCTV, alarm protocols, fiber networking) into a simple, high-converting customer flow.",
      solution: "We built a static edge-cached routing architecture using Next.js, with optimized SVG iconography and pre-cached loading states for sub-600ms responsive queries.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
      url: "https://risewave.vercel.app/",
    },
    {
      id: "sudarshan",
      title: "Sudarshan AI & Portfolio Portal",
      category: "portfolio",
      tag: "Portfolio Websites",
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
      image: "/portfolio_healingtouch.png",
      metrics: "99 Speed | 0.5s LCP",
      summary: "A high-traffic professional hospital web presence, featuring direct physician databases, appointment reservations, and patient service directions.",
      challenge: "Creating a reliable, highly accessible user experience for patients in high-stress or low-bandwidth environments.",
      solution: "We built a statically pre-rendered site, storing index information locally in the browser to enable offline page transitions.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "CMS API", "Edge Hosting"],
      url: "https://www.healingtouchhospitalddn.com/",
    },
    {
      id: "restopain",
      title: "Rest-O-Pain Clinic Portal",
      category: "healthcare",
      tag: "Healthcare Websites",
      image: "/portfolio_restopain.png",
      metrics: "99 Speed | 0.4s LCP",
      summary: "An ultra-premium, SEO-optimized web portal for Rest-O-Pain Physiotherapy Centre in Ludhiana, offering appointment booking and condition diagnostic indexes.",
      challenge: "Creating a highly accessible patient experience for users in high-stress or low-bandwidth environments, with zero layout shift.",
      solution: "We engineered a statically pre-rendered site using React and Vite, featuring structured medical schema configurations, offline pre-caching, and lightweight custom vector iconography.",
      techs: ["React", "Vite", "Tailwind CSS", "Local SEO Schema", "Vercel"],
      url: "https://docweb-alpha.vercel.app/",
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-services-bg"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <framerMotion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <Eye className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Showcase of Excellence
            </span>
          </framerMotion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Our Selected Works
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Every website is custom-crafted to exceed modern speed standards, look visually striking, and convert visitors into clients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-16 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
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

        {/* Masonry Grid */}
        <framerMotion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
        >
          <FramerAnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <framerMotion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border overflow-hidden flex flex-col justify-between hover:border-luxury-border-hover transition-all duration-300 cursor-pointer"
                >
                  {/* Homepage screenshot preview */}
                  <div className="aspect-[16/10] w-full relative overflow-hidden">
                    {/* Actual screenshot */}
                    <img
                      src={project.image}
                      alt={`${project.title} homepage`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
                    
                    {/* Header tag */}
                    <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-md border border-luxury-border rounded px-2.5 py-0.5 w-fit text-[9px] text-white/95 uppercase font-bold tracking-widest z-10">
                      {project.tag}
                    </div>

                    {/* Performance metrics display */}
                    <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md border border-luxury-border rounded-lg p-2.5 w-fit font-mono text-[9px] text-accent-cyan flex items-center gap-1.5 z-10 shadow-lg">
                      <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                      {project.metrics}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent-purple transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[12px] leading-relaxed text-luxury-muted font-medium line-clamp-3 mb-6">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-luxury-border">
                      {project.techs.slice(0, 3).map((t) => (
                        <span key={t} className="bg-luxury-gray/40 border border-luxury-border rounded px-2 py-0.5 text-[9px] font-mono text-luxury-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </framerMotion.div>
            ))}
          </FramerAnimatePresence>
        </framerMotion.div>

        {/* Case Study Details Modal */}
        <FramerAnimatePresence>
          {selectedProject && (
            <framerMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            >
              <framerMotion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel border border-luxury-border bg-luxury-dark/95 p-6 sm:p-8 shadow-2xl"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-6">
                  <span className="text-[10px] font-bold text-accent-purple tracking-widest uppercase font-mono">
                    {selectedProject.tag}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded-full bg-luxury-gray/40 border border-luxury-border hover:border-luxury-border-hover text-luxury-muted hover:text-foreground transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Case Study Content */}
                <h3 className="text-xl sm:text-2xl font-black text-foreground mb-6">
                  {selectedProject.title}
                </h3>

                {/* Project homepage screenshot */}
                <div className="w-full h-56 rounded-2xl relative overflow-hidden mb-8 border border-luxury-border">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} homepage`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-luxury-border rounded-xl p-3 w-fit text-[11px] font-mono text-accent-cyan flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Speed Score Verified: {selectedProject.metrics}
                  </div>
                </div>

                {/* Sections */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  {/* Left Column (Overview & Techs) */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-luxury-muted/70 font-bold mb-2">Project Overview</h4>
                      <p className="text-xs sm:text-sm text-luxury-muted/90 leading-relaxed font-medium">
                        {selectedProject.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-luxury-muted/70 font-bold mb-2">The Challenge</h4>
                      <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-luxury-muted/70 font-bold mb-2">Our Solution</h4>
                      <p className="text-xs sm:text-sm text-luxury-muted/90 leading-relaxed font-medium">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Sidebar specs) */}
                  <div className="md:col-span-4 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-luxury-border pt-6 md:pt-0 md:pl-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-luxury-muted/70 font-bold mb-3">Tech Architecture</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techs.map((t) => (
                          <span key={t} className="bg-luxury-gray/40 border border-luxury-border rounded px-2.5 py-1 text-[10px] font-mono text-luxury-muted/90">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                      >
                        Visit Live Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </framerMotion.div>
            </framerMotion.div>
          )}
        </FramerAnimatePresence>

      </div>
    </section>
  );
}
