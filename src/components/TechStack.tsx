"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Sparkles } from "lucide-react";

interface TechItem {
  name: string;
  color: string; // Brand color hex code
}

const frontendTechs: TechItem[] = [
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Framer Motion", color: "#ff00a0" },
  { name: "GSAP", color: "#88ce02" },
  { name: "Three.js", color: "#ffffff" },
];

const backendTechs: TechItem[] = [
  { name: "Node.js", color: "#539e43" },
  { name: "Express.js", color: "#ffffff" },
  { name: "Python", color: "#3776ab" },
  { name: "REST APIs", color: "#00f2fe" },
];

const databaseTechs: TechItem[] = [
  { name: "MongoDB", color: "#47a248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MySQL", color: "#00758f" },
  { name: "Firebase", color: "#ffca28" },
  { name: "Supabase", color: "#3ecf8e" },
];

const aiTechs: TechItem[] = [
  { name: "OpenAI", color: "#10a37f" },
  { name: "Claude AI", color: "#d97757" },
  { name: "LangChain", color: "#f5a623" },
  { name: "Vector DBs", color: "#865cff" },
  { name: "AI Agents", color: "#00f2fe" },
  { name: "RAG Systems", color: "#ff007f" },
];

const cloudTechs: TechItem[] = [
  { name: "AWS", color: "#ff9900" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Cloudflare", color: "#f38020" },
  { name: "Docker", color: "#2496ed" },
  { name: "GitHub Actions", color: "#2088ff" },
];

const paymentTechs: TechItem[] = [
  { name: "Stripe", color: "#635bff" },
  { name: "Razorpay", color: "#0b72e7" },
];

// Alternate groupings for 3 clean, long scrolling rows
const row1Items = [...frontendTechs, ...paymentTechs];
const row2Items = [...backendTechs, ...databaseTechs];
const row3Items = [...aiTechs, ...cloudTechs];

function TechCard({ item }: { item: TechItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center min-w-[130px] sm:min-w-[155px] h-[65px] sm:h-[75px] rounded-xl border border-luxury-border bg-luxury-dark/85 backdrop-blur-md px-6 py-4 transition-all duration-300 hover:border-accent-cyan/30 hover:-translate-y-1.5 filter grayscale hover:grayscale-0 cursor-default group overflow-hidden select-none"
    >
      {/* Radial Cyan Glow Spot */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 75px at ${coords.x}px ${coords.y}px, rgba(0, 242, 254, 0.12), transparent 100%)`,
          }}
        />
      )}
      
      <span
        style={{ color: isHovered ? item.color : "#6b7280" }}
        className="text-[12px] sm:text-[13px] font-mono font-bold tracking-wider transition-colors duration-300"
      >
        {item.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const marquee1 = [...row1Items, ...row1Items, ...row1Items];
  const marquee2 = [...row2Items, ...row2Items, ...row2Items];
  const marquee3 = [...row3Items, ...row3Items, ...row3Items];

  const trustBadges = [
    "Modern Tech Stack",
    "AI Integration",
    "Custom Development",
    "Scalable Architecture",
    "Cloud Deployment",
    "Ongoing Support",
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-28 bg-luxury-bg overflow-hidden border-b border-luxury-border"
    >
      {/* Global CSS Styles for alternated loop speeds & hover pausing */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-left-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll-left 45s linear infinite;
        }
        .marquee-right-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll-right 45s linear infinite;
        }
        .marquee-wrapper:hover .marquee-left-track,
        .marquee-wrapper:hover .marquee-right-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative center grid glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Technology Ecosystem
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight glow-text-primary mb-6">
            Technologies We Master
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            We build high-performance websites, AI-powered applications, SaaS platforms, and custom software using modern technologies trusted by leading startups and global enterprises.
          </p>
        </div>

        {/* Categories Marquee Tracks */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto mb-20">
          
          {/* Row 1: Left scrolling */}
          <div className="marquee-wrapper overflow-hidden relative py-2 mask-gradient-h">
            <div className="marquee-left-track">
              {marquee1.map((item, idx) => (
                <TechCard key={`row1-${item.name}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Right scrolling */}
          <div className="marquee-wrapper overflow-hidden relative py-2 mask-gradient-h">
            <div className="marquee-right-track">
              {marquee2.map((item, idx) => (
                <TechCard key={`row2-${item.name}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 3: Left scrolling */}
          <div className="marquee-wrapper overflow-hidden relative py-2 mask-gradient-h">
            <div className="marquee-left-track">
              {marquee3.map((item, idx) => (
                <TechCard key={`row3-${item.name}-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Statement & Trust badges */}
        <div className="max-w-3xl mx-auto text-center border-t border-luxury-border pt-12">
          <p className="text-luxury-muted/90 text-xs sm:text-sm leading-relaxed font-semibold mb-10 max-w-2xl mx-auto">
            From startup landing pages to enterprise-grade AI systems, WebCraft Technologies delivers scalable digital products engineered for performance, security, and growth.
          </p>

          {/* Small Trust badges row */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-2xl mx-auto">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-wide uppercase text-luxury-muted">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
