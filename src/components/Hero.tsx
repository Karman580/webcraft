"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X, Check, ArrowDown, ShieldAlert, Heart, Calendar, MessageSquare, Star, Globe, Lock, Clock } from "lucide-react";
import WebGLBackground from "./WebGLBackground";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

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

  const trustBadges = [
    "More Trust",
    "More Leads",
    "Better Google Presence",
    "More Bookings",
    "Stronger Brand Image",
    "Mobile Optimized",
    "Ongoing Support",
  ];

  const problemCards = [
    "Missing Potential Customers",
    "No Online Booking",
    "No WhatsApp Integration",
    "Difficult To Stand Out",
    "Limited Trust Online",
    "Losing Leads To Competitors",
  ];

  const successCards = [
    { text: "★★★★★ 4.9 Google Rating", icon: Star, color: "text-amber-400" },
    { text: "+ New Customer Inquiry", icon: Sparkles, color: "text-accent-cyan" },
    { text: "Appointment Confirmed", icon: Calendar, color: "text-emerald-400" },
    { text: "WhatsApp Message Received", icon: MessageSquare, color: "text-green-400" },
    { text: "Website Live", icon: Globe, color: "text-accent-blue" },
    { text: "Mobile Optimized", icon: Sparkles, color: "text-accent-pink" },
    { text: "Secure HTTPS", icon: Lock, color: "text-blue-400" },
    { text: "Fast Loading", icon: Clock, color: "text-accent-cyan" },
  ];

  return (
    <>
      {/* Premium Loading Sequence */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="fixed inset-0 bg-luxury-bg z-[9999] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <img 
                  src="/logo_transparent.png" 
                  alt="WebCraft Technologies Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(134,92,255,0.4)] animate-pulse"
                />
              </div>
              <h2 className="text-lg font-bold tracking-widest text-luxury-muted mt-2">
                WEBCRAFT <span className="text-accent-purple font-light">TECHNOLOGIES</span>
              </h2>
              <div className="w-48 h-[2px] bg-luxury-border rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-20 px-6 bg-luxury-bg"
      >
        {/* WebGL Background */}
        <WebGLBackground />

        {/* Ambient Dark Overlay to separate content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-bg/45 to-luxury-bg pointer-events-none z-[1]" />

        {/* Hero Copy (Full-width Text) */}
        <div className="relative max-w-5xl mx-auto text-center z-[2] mt-6 mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-wrap items-center gap-2 px-1.5 py-1.5 rounded-full border border-luxury-border bg-luxury-gray/35 backdrop-blur-md w-fit mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-luxury-gray/55 text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
              Your Professional Website
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mr-1.5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live in 7 Days
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] glow-text-primary mb-6 max-w-4xl"
          >
            See What Happens When Your Business Gets A <span className="glow-text-blue-purple">Professional Website</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-luxury-muted text-sm sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-normal"
          >
            Most businesses rely only on a Google listing. The businesses growing fastest combine trust, visibility, and customer conversion through a professionally designed website.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-wide uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background hover:scale-105 shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Start Your Free Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-wide uppercase text-foreground border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Trust badges checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pt-6 border-t border-luxury-border max-w-4xl"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-muted font-mono">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Split Before-vs-After Showcase visual container */}
        <div className="relative w-full max-w-6xl mx-auto z-[2] mt-6 px-2">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Side: Before WebCraft */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest font-mono">
                Before WebCraft
              </span>
              
              <div className="w-full max-w-[390px] rounded-2xl border border-luxury-border bg-luxury-dark/20 backdrop-blur-md p-6 flex flex-col gap-4 filter grayscale opacity-50 relative overflow-hidden shadow-2xl">
                {/* Visual grid blur overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Simulated Google Listing Card */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="h-4.5 w-24 bg-white/10 rounded" />
                  <div className="h-7 w-48 bg-white/10 rounded mt-1" />
                  
                  <div className="flex gap-1 text-neutral-600 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-[10px] text-luxury-muted/70 ml-1 font-mono">(0 reviews)</span>
                  </div>

                  <div className="h-[1px] bg-luxury-border w-full my-3" />

                  <div className="flex flex-col gap-2.5 text-[10px] text-luxury-muted/70 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-neutral-800" />
                      <span>Phone: +91 XXXXX XXXXX</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-neutral-800" />
                      <span>Hours: Closed / Unknown</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-500/80 font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-950" />
                      <span>No Website Address Registered</span>
                    </div>
                  </div>
                </div>

                {/* Subheading */}
                <div className="text-center mt-4 border-t border-luxury-border pt-4 relative z-10">
                  <span className="text-xs text-luxury-muted font-medium italic">
                    &ldquo;Customers Find You. But Don't Convert.&rdquo;
                  </span>
                </div>
              </div>

              {/* Floating Problem Cards */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-[390px] mt-2">
                {problemCards.map((prob, idx) => (
                  <motion.div
                    key={prob}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + (idx % 3), ease: "easeInOut" }}
                    className="bg-red-950/5 border border-red-900/10 rounded-xl p-2.5 flex items-start gap-1.5 shadow-inner grayscale opacity-60"
                  >
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[9px] font-bold text-luxury-muted uppercase tracking-wide leading-normal">
                      {prob}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center: Pulsing Arrow */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <span className="text-[8px] font-mono font-bold text-accent-cyan tracking-widest uppercase mb-3 text-center block">
                TRANSFORM YOUR BUSINESS ONLINE
              </span>

              {/* Large Glowing Animated Arrow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,242,254,0.4)] relative cursor-default"
              >
                {/* Horizontal arrow for desktop, Down arrow for mobile */}
                <ArrowRight className="hidden lg:block w-6 h-6 fill-current text-black font-bold" />
                <ArrowDown className="lg:hidden w-6 h-6 fill-current text-black font-bold" />
                
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full border border-accent-cyan animate-ping pointer-events-none opacity-30" />
              </motion.div>
            </div>

            {/* Right Side: After WebCraft */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <span className="text-[11px] font-bold text-accent-cyan uppercase tracking-widest font-mono">
                After WebCraft
              </span>

              {/* Stunning Premium Business Homepage mockup */}
              <div className="w-full max-w-[390px] rounded-2xl border border-accent-purple/30 bg-luxury-dark/85 shadow-[0_20px_50px_rgba(134,92,255,0.2)] p-6 flex flex-col gap-4 relative overflow-hidden transition-colors hover:border-accent-cyan/40 duration-500">
                {/* Ambient glow spotlight */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent-purple/15 rounded-full blur-xl pointer-events-none" />

                {/* Homepage Mock header */}
                <div className="flex items-center justify-between border-b border-luxury-border pb-3 relative z-10">
                  <span className="text-[10px] font-extrabold tracking-wider text-foreground">
                    Premium Clinic
                  </span>
                  <div className="bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-2.5 py-0.5 text-[8px] font-bold text-accent-cyan uppercase tracking-wider font-mono">
                    Book Appointment
                  </div>
                </div>

                {/* Mock hero info */}
                <div className="flex flex-col gap-1.5 relative z-10 pt-1">
                  <h3 className="text-sm font-extrabold text-foreground leading-snug">
                    Advanced Healthcare & Personal Healing Solutions.
                  </h3>
                  <p className="text-[10px] text-luxury-muted leading-normal">
                    Designed for swift patient assistance, interactive scheduling directories, and direct consultation lines.
                  </p>
                </div>

                {/* Quick actions mockup */}
                <div className="grid grid-cols-2 gap-2 relative z-10 mt-1">
                  <div className="bg-luxury-gray/40 border border-luxury-border rounded-lg p-2 flex flex-col justify-center">
                    <span className="text-[7px] text-luxury-muted/75 uppercase font-mono">Consultation</span>
                    <span className="text-[10px] font-bold text-foreground mt-0.5">WhatsApp Chat</span>
                  </div>
                  <div className="bg-luxury-gray/40 border border-luxury-border rounded-lg p-2 flex flex-col justify-center">
                    <span className="text-[7px] text-luxury-muted/75 uppercase font-mono">Specialists</span>
                    <span className="text-[10px] font-bold text-foreground mt-0.5">Doctor List</span>
                  </div>
                </div>

                {/* Subheading */}
                <div className="text-center mt-3 border-t border-luxury-border pt-4 relative z-10">
                  <span className="text-xs text-accent-cyan font-bold">
                    &ldquo;Turn Visitors Into Customers.&rdquo;
                  </span>
                </div>
              </div>

              {/* Floating Success Cards */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-[390px] mt-2">
                {successCards.map((sc, idx) => {
                  const Icon = sc.icon;
                  return (
                    <motion.div
                      key={sc.text}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.5 + (idx % 4), ease: "easeInOut" }}
                      className="glass-panel rounded-xl p-2.5 flex items-start gap-1.5 border border-luxury-border bg-luxury-gray/90 shadow-md"
                    >
                      <Icon className={`w-4 h-4 ${sc.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-[9px] font-bold text-foreground uppercase tracking-wide leading-normal">
                        {sc.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => scrollToSection("trust-bar")}
          className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer z-[2]"
        >
          <span className="text-[9px] font-bold tracking-widest text-luxury-muted uppercase">
            Scroll To Discover
          </span>
          <div className="w-5 h-8 rounded-full border border-luxury-border-hover p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-accent-purple rounded-full"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
