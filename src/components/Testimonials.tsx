"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Play, Pause, ChevronLeft, ChevronRight, X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  videoThumb: string; // gradient profile classes
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Sameer Shah",
      role: "Chief Cardiologist",
      company: "CareFlow Cardiology Group",
      quote: "WebCraft launched our clinic website in 6 days. The patient booking integrations are seamless, and local patient registrations doubled in the first month. Incredible speed!",
      rating: 5,
      videoThumb: "from-teal-900 to-cyan-950",
    },
    {
      id: 2,
      name: "Riya Sen",
      role: "Co-Founder",
      company: "FinNova Analytics",
      quote: "The free custom homepage demo was beautiful. Seeing our actual product wireframes styled inside an ultra-premium layout before paying anything made the choice trivial. 10/10.",
      rating: 5,
      videoThumb: "from-blue-900 to-indigo-950",
    },
    {
      id: 3,
      name: "Kabir Malhotra",
      role: "Culinary Director",
      company: "Le Bistro Group",
      quote: "Highly professional design, flawless mobile responsiveness. The speed indices are unbelievable. Our customers are constantly complimenting our digital menu card.",
      rating: 5,
      videoThumb: "from-amber-900 to-orange-950",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-services-bg"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Client Appreciations
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Trusted by Professionals
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Read how businesses and medical clinics partner with WebCraft Technologies to build high-converting digital storefronts.
          </p>
        </div>

        {/* Testimonial slider shell */}
        <div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Left: Video Testimonial Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div
              onClick={() => setShowVideoModal(true)}
              className={`w-full max-w-[280px] aspect-[3/4] rounded-2xl bg-gradient-to-tr ${activeTestimonial.videoThumb} border border-luxury-border relative overflow-hidden cursor-pointer group shadow-2xl flex flex-col justify-between p-6`}
            >
              {/* Overlay lines */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
              
              <div className="relative z-10 self-end bg-black/55 backdrop-blur-md border border-luxury-border rounded px-2 py-0.5 text-[8px] font-bold text-white font-mono uppercase tracking-widest">
                Video Review
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center flex-1 my-auto">
                <div className="w-14 h-14 rounded-full bg-luxury-gray/80 backdrop-blur-md border border-luxury-border-hover flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col">
                <span className="text-[10px] text-white font-extrabold">{activeTestimonial.name}</span>
                <span className="text-[8px] text-luxury-muted">{activeTestimonial.company}</span>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Text Card */}
          <div className="md:col-span-7 flex flex-col justify-between h-full py-2">
            <div className="min-h-[220px]">
              {/* Rating stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-foreground text-sm sm:text-base leading-relaxed italic mb-8">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-extrabold text-foreground">{activeTestimonial.name}</h4>
                    <p className="text-xs text-luxury-muted/70 mt-0.5">
                      {activeTestimonial.role}, <span className="text-luxury-muted font-semibold">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8 border-t border-luxury-border pt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray/60 hover:border-luxury-border-hover text-foreground flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray/60 hover:border-luxury-border-hover text-foreground flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Progress dashes */}
              <div className="flex gap-1.5 ml-auto">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-6 bg-accent-cyan" : "w-2 bg-neutral-800"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Video Player Modal Placeholder */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setShowVideoModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="w-full max-w-xl aspect-[16/10] bg-neutral-950 border border-luxury-border rounded-2xl flex flex-col justify-center items-center p-8 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-luxury-gray/40 border border-luxury-border text-luxury-muted hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
                <h4 className="text-base font-bold text-white mb-2">Video Review Playing</h4>
                <p className="text-xs text-luxury-muted/70 text-center max-w-sm">
                  (In a production environment, this overlay loads the streaming video player API. We build responsive media frameworks out-of-the-box.)
                </p>
                <div className="w-16 h-16 rounded-full border-2 border-accent-purple/40 border-t-accent-purple animate-spin mt-6" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
