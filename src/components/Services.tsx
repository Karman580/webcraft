"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Stethoscope,
  ShoppingBag,
  Award,
  Rocket,
  MousePointer,
  Layers,
  Brain,
  Workflow,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  glowColor: string;
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate normalized coords (-0.5 to 0.5) for tilt
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Set rotation limits (e.g. max 10 degrees)
    const rx = -normY * 12;
    const ry = normX * 12;

    setCoords({ x, y });
    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-panel theme-card-shadow rounded-[24px] p-7 border border-luxury-border relative overflow-hidden transition-all duration-300 select-none cursor-default hover:-translate-y-1.5"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${isHovered ? 1.01 : 1})`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Cursor Glow Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, ${service.glowColor}, transparent 100%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[180px]" style={{ transform: "translateZ(30px)" }}>
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center text-foreground shadow-inner group-hover:scale-110 transition-transform">
              <Icon className="w-5.5 h-5.5 text-accent-purple" />
            </div>
            <span className="text-[9px] font-bold tracking-widest text-luxury-muted/70 uppercase font-mono">
              {service.tag}
            </span>
          </div>
          <h3 className="text-base font-bold text-foreground mb-2">{service.title}</h3>
          <p className="text-[12px] leading-relaxed text-luxury-muted font-medium">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Website Development",
      description: "Fast, responsive custom websites built with Next.js & Tailwind CSS. Designed to represent your brand's unique identity.",
      icon: Code,
      tag: "CORE",
      glowColor: "rgba(0, 242, 254, 0.08)",
    },
    {
      title: "Doctor & Clinic Websites",
      description: "Professional layouts optimized for patient appointment bookings, medical credentials showcase, and Google Maps integration.",
      icon: Stethoscope,
      tag: "HEALTHCARE",
      glowColor: "rgba(16, 185, 129, 0.08)",
    },
    {
      title: "E-Commerce Websites",
      description: "Modern storefronts featuring smooth cart systems, payment gateways, product grids, and instant customer checkout speeds.",
      icon: ShoppingBag,
      tag: "COMMERCE",
      glowColor: "rgba(245, 158, 11, 0.08)",
    },
    {
      title: "Portfolio Websites",
      description: "Award-winning creative portfolios for designers, architects, photographers, and executives showing case studies in high resolution.",
      icon: Award,
      tag: "CREATIVE",
      glowColor: "rgba(236, 72, 153, 0.08)",
    },
    {
      title: "Startup Websites",
      description: "Linear/Vercel inspired layouts with clean hero animations, dark luxury features, and clear CTA tracks for early product conversion.",
      icon: Rocket,
      tag: "SAAS",
      glowColor: "rgba(134, 92, 255, 0.08)",
    },
    {
      title: "Landing Pages",
      description: "Single-page visual structures built for specific marketing funnels, search campaigns, product launches, or event signups.",
      icon: MousePointer,
      tag: "MARKETING",
      glowColor: "rgba(59, 130, 246, 0.08)",
    },
    {
      title: "Web Applications",
      description: "Full-scale custom SaaS software, interactive client dashboards, CRM workflows, and dynamic database integrations.",
      icon: Layers,
      tag: "ENTERPRISE",
      glowColor: "rgba(168, 85, 247, 0.08)",
    },
    {
      title: "AI Integrations",
      description: "Enriching interfaces with Gemini API, OpenAI models, custom chat agents, data summarization cards, and cognitive utilities.",
      icon: Brain,
      tag: "FUTURE",
      glowColor: "rgba(244, 63, 94, 0.08)",
    },
    {
      title: "Business Automation",
      description: "Integrating custom workflows, auto WhatsApp messaging alerts, mail responders, and dashboard analytics to optimize team processes.",
      icon: Workflow,
      tag: "PRODUCTIVITY",
      glowColor: "rgba(6, 182, 212, 0.08)",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-services-bg"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Tailored Digital Products
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Services We Perfect
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            We develop premium interfaces, customized business automations, and fast web infrastructure designed to scale with your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
