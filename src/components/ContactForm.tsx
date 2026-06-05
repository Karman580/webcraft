"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, CheckCircle, ShieldAlert, Coins, PhoneCall, Mail, User, Briefcase } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Startup",
    budget: 40000,
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessTypes = [
    "Startup",
    "Clinic / Doctor",
    "E-Commerce",
    "Portfolio",
    "Restaurant",
    "Corporate",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, budget: parseInt(e.target.value) }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Project description helps us design your demo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate submission to API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00f2fe", "#865cff", "#ff007f", "#ffffff"],
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-luxury-bg overflow-hidden"
    >
      {/* Visual background blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
                Claim Your Demo
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight glow-text-primary mb-6 leading-tight">
              Let’s Build <br />Your Website.
            </h2>
            
            <p className="text-luxury-muted text-sm sm:text-base leading-relaxed mb-8">
              Submit your project details today, and our premium design team will construct a fully custom homepage mockup for your business within 48 hours—entirely for free.
            </p>

            <div className="flex flex-col gap-4 border-t border-luxury-border pt-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-accent-cyan">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:karmantalwar@gmail.com" className="text-xs sm:text-sm text-luxury-muted/90 hover:text-accent-cyan transition-colors font-medium font-mono">karmantalwar@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-accent-purple">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-luxury-muted/90 font-medium font-mono">+91 8264386780</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-luxury-border bg-luxury-dark/10 shadow-2xl relative overflow-hidden min-h-[500px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1">
                          <User className="w-3 h-3 text-neutral-600" /> Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Kabir Malhotra"
                          className="bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-purple transition-all"
                        />
                        {errors.name && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1">
                          <Mail className="w-3 h-3 text-neutral-600" /> Email Coordinates
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. kabir@gmail.com"
                          className="bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-purple transition-all"
                        />
                        {errors.email && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1">
                          <PhoneCall className="w-3 h-3 text-neutral-600" /> Contact Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 99887 76655"
                          className="bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-purple transition-all"
                        />
                        {errors.phone && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Business Type Selector */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-neutral-600" /> Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                          className="bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-luxury-muted/90 focus:outline-none focus:border-accent-purple transition-all appearance-none cursor-pointer"
                        >
                          {businessTypes.map((t) => (
                            <option key={t} value={t} className="bg-luxury-dark text-luxury-muted/90">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Slider */}
                    <div className="flex flex-col gap-2 bg-luxury-gray/40 border border-luxury-border p-4 rounded-2xl">
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1">
                          <Coins className="w-3.5 h-3.5 text-neutral-600" /> Estimated Project Budget
                        </label>
                        <span className="text-sm font-bold text-accent-cyan font-mono">
                          {formData.budget >= 150000 ? "₹1,50,000+" : `₹${formData.budget.toLocaleString()}`}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="15000"
                        max="150000"
                        step="5000"
                        value={formData.budget}
                        onChange={handleSliderChange}
                        className="w-full accent-accent-purple bg-luxury-muted/20 h-1.5 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-bold text-neutral-600 font-mono uppercase tracking-wide">
                        <span>₹15,000 Min</span>
                        <span>₹1,50,000+ Scaled</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono">
                        Tell us about your project & vision
                      </label>
                      <textarea
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Detail your goals, sections required, or design inspiration links..."
                        className="bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-purple transition-all resize-none"
                      />
                      {errors.description && (
                        <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" /> {errors.description}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-foreground border-t-transparent animate-spin" />
                          Scheduling Request...
                        </>
                      ) : (
                        <>
                          Get My Free Demo Website
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4 gap-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shadow-[0_0_20px_rgba(0,242,254,0.15)] animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2">Request Transmitted Successfully</h3>
                      <p className="text-xs text-luxury-muted max-w-sm leading-relaxed mx-auto">
                        Your free custom homepage request has been logged. Our design leads will reach out via email/phone in less than 4 hours to verify specifications.
                      </p>
                    </div>

                    <div className="bg-luxury-gray/40 border border-luxury-border rounded-2xl p-4 w-full max-w-xs text-left text-xs font-mono text-luxury-muted mt-2">
                      <div className="text-accent-purple mb-1">{"// client_spec_package.json"}</div>
                      <div>{`Name: "${formData.name}"`}</div>
                      <div>{`Type: "${formData.businessType}"`}</div>
                      <div>{`Budget: "₹${formData.budget.toLocaleString()}"`}</div>
                      <div className="text-accent-cyan mt-1">{"Status: \"QUEUED_FOR_DEV\""}</div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          businessType: "Startup",
                          budget: 40000,
                          description: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full border border-luxury-border text-[10px] font-semibold uppercase tracking-wider text-luxury-muted hover:text-foreground hover:border-luxury-border-hover transition-all cursor-pointer mt-4"
                    >
                      Submit Another Spec
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
