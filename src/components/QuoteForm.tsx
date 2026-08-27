"use client";

import { useState } from "react";
import {
  Send, ShieldAlert, Coins, PhoneCall, Mail, User,
  Briefcase, Building2, MessageCircle, FileText,
} from "lucide-react";
import { CONTACT, WHATSAPP_URL, MAILTO_URL } from "@/lib/contact";

const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "Mobile Application",
  "AI & Automation",
  "AI Agent",
  "Custom Software",
  "Not Sure Yet",
];

// Web3Forms access key. Public by design — it only accepts submissions,
// it cannot read them. NEXT_PUBLIC_* would be inlined into the bundle anyway.
const WEB3FORMS_KEY = "9c175b35-6698-48b7-9c8d-77b95a4d8c68";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: PROJECT_TYPES[0],
  budget: 2500,
  description: "",
};

export default function QuoteForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name is required";

    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      next.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      next.phone = "Please enter a valid phone number";
    }

    if (!formData.description.trim()) {
      next.description = "A short description helps us scope the quote";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const form = e.currentTarget as HTMLFormElement & { botcheck?: HTMLInputElement };
    const isBot = form.botcheck?.checked ?? false;

    setIsSubmitting(true);
    setSubmitError("");

    const budgetLabel =
      formData.budget >= 25000
        ? "$25,000+"
        : `$${formData.budget.toLocaleString("en-US")}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote request \u2014 ${formData.name} (${formData.projectType})`,
          from_name: "Karman Singh Talwar — Website",
          replyto: formData.email,
          botcheck: isBot,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company || "\u2014",
          "Project Type": formData.projectType,
          Budget: budgetLabel,
          Description: formData.description,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");
    } catch {
      setIsSubmitting(false);
      setSubmitError(
        "We couldn\u2019t send that. Please retry, or reach us on WhatsApp / email below."
      );
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Loaded only on submit, so it never lands in the initial bundle.
    const { default: confetti } = await import("canvas-confetti");
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00f2fe", "#865cff", "#ff007f", "#ffffff"],
    });
  };

  const inputClass =
    "bg-luxury-gray/40 border border-luxury-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-purple transition-all";
  const labelClass =
    "text-[10px] uppercase font-bold tracking-wider text-luxury-muted/70 font-mono flex items-center gap-1.5";

  return (
    <section id="quote" className="relative py-16 sm:py-28 bg-services-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 flex flex-col text-left lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-6 w-fit">
              <FileText className="w-3.5 h-3.5 text-accent-pink" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
                Free Quote
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight glow-text-primary mb-6 leading-tight">
              Have a Project in Mind? Let&apos;s Build It.
            </h2>

            <p className="text-luxury-muted text-sm sm:text-base leading-relaxed mb-8">
              Tell us what you&apos;re trying to build, what problem you&apos;re solving, and where
              you want to take it. We&apos;ll help define the right technical approach.
            </p>

            {/* Direct channels */}
            <div className="flex flex-col gap-3 border-t border-luxury-border pt-8">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-luxury-muted/60 mb-1">
                Or reach us directly
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover px-4 py-3.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-foreground">WhatsApp</div>
                  <div className="text-[11px] text-luxury-muted font-mono truncate">{CONTACT.phone}</div>
                </div>
              </a>

              <a
                href={MAILTO_URL}
                className="group flex items-center gap-3 rounded-2xl border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover px-4 py-3.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-foreground">Email</div>
                  <div className="text-[11px] text-luxury-muted font-mono truncate">{CONTACT.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <div className="glass-panel theme-card-shadow rounded-3xl p-5 sm:p-8 border border-luxury-border bg-luxury-dark/10 shadow-2xl relative overflow-hidden min-h-[520px]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="fade-in flex flex-col gap-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="q-name" className={labelClass}>
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <input
                          id="q-name" type="text" name="name"
                          value={formData.name} onChange={handleInputChange}
                          placeholder="e.g. Kabir Malhotra" className={inputClass}
                        />
                        {errors.name && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="q-email" className={labelClass}>
                          <Mail className="w-3 h-3" /> Email
                        </label>
                        <input
                          id="q-email" type="email" name="email"
                          value={formData.email} onChange={handleInputChange}
                          placeholder="e.g. kabir@company.com" className={inputClass}
                        />
                        {errors.email && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="q-phone" className={labelClass}>
                          <PhoneCall className="w-3 h-3" /> Phone
                        </label>
                        <input
                          id="q-phone" type="tel" name="phone"
                          value={formData.phone} onChange={handleInputChange}
                          placeholder="e.g. +91 99887 76655" className={inputClass}
                        />
                        {errors.phone && (
                          <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="q-company" className={labelClass}>
                          <Building2 className="w-3 h-3" /> Company <span className="opacity-50">(optional)</span>
                        </label>
                        <input
                          id="q-company" type="text" name="company"
                          value={formData.company} onChange={handleInputChange}
                          placeholder="e.g. FinNova Analytics" className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-type" className={labelClass}>
                        <Briefcase className="w-3 h-3" /> Project Type
                      </label>
                      <select
                        id="q-type" name="projectType"
                        value={formData.projectType} onChange={handleInputChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-luxury-dark text-luxury-muted">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-2 bg-luxury-gray/40 border border-luxury-border p-4 rounded-2xl">
                      <div className="flex justify-between items-center mb-1">
                        <label htmlFor="q-budget" className={labelClass}>
                          <Coins className="w-3.5 h-3.5" /> Budget
                        </label>
                        <span className="text-sm font-bold text-accent-cyan font-mono">
                          {formData.budget >= 25000
                            ? "$25,000+"
                            : `$${formData.budget.toLocaleString("en-US")}`}
                        </span>
                      </div>
                      <input
                        id="q-budget" type="range" name="budget"
                        min="500" max="25000" step="500"
                        value={formData.budget}
                        onChange={(e) => setFormData((p) => ({ ...p, budget: parseInt(e.target.value, 10) }))}
                        className="w-full h-6 cursor-pointer touch-pan-y"
                      />
                      <div className="flex justify-between text-[8px] font-bold text-luxury-muted/50 font-mono uppercase tracking-wide">
                        <span>$500 min</span>
                        <span>$25,000+ scaled</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="q-desc" className={labelClass}>
                        <FileText className="w-3 h-3" /> Project Description
                      </label>
                      <textarea
                        id="q-desc" name="description" rows={4}
                        value={formData.description} onChange={handleInputChange}
                        placeholder="What are you building, what problem does it solve, and where do you want to take it?"
                        className={`${inputClass} resize-none`}
                      />
                      {errors.description && (
                        <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" /> {errors.description}
                        </span>
                      )}
                    </div>

                    {/* Honeypot — bots fill it, humans never see it. */}
                    <input
                      type="checkbox" name="botcheck" tabIndex={-1}
                      className="hidden" aria-hidden="true"
                    />

                    {submitError && (
                      <span className="text-[11px] font-semibold text-red-500 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 shrink-0" /> {submitError}
                      </span>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-1 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] disabled:opacity-70 disabled:cursor-wait"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                </form>
              ) : (
                <div className="fade-in flex flex-col items-center justify-center text-center py-20 px-4">
                    {/* Animated tick */}
                    <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="tick-halo absolute inset-0 rounded-full bg-accent-cyan/15"
                      />
                      <svg
                        viewBox="0 0 52 52"
                        className="relative w-24 h-24"
                        role="img"
                        aria-label="Message sent"
                      >
                        <circle
                          cx="26" cy="26" r="24"
                          fill="none"
                          stroke="var(--accent-cyan)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="tick-ring"
                          transform="rotate(-90 26 26)"
                        />
                        <path
                          d="M14 27 L22 35 L38 19"
                          fill="none"
                          stroke="var(--accent-cyan)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tick-check"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
                      Thank You for Reaching Out
                    </h3>

                    <p className="text-[13px] sm:text-sm text-luxury-muted max-w-md leading-relaxed mx-auto mb-2">
                      Your message is on its way to us
                      {formData.name ? `, ${formData.name.trim().split(" ")[0]}` : ""}. We read
                      every enquiry personally.
                    </p>
                    <p className="text-[13px] sm:text-sm text-luxury-muted max-w-md leading-relaxed mx-auto mb-10">
                      We&apos;ll come back to you with the right technical approach and a
                      proper quote — usually within a day.
                    </p>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold uppercase tracking-wider text-accent-cyan hover:text-foreground transition-colors flex items-center gap-1.5 mb-6"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Need it faster? Message on WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData(EMPTY_FORM);
                      }}
                      className="px-6 py-2.5 rounded-full border border-luxury-border text-[10px] font-semibold uppercase tracking-wider text-luxury-muted hover:text-foreground hover:border-luxury-border-hover transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
