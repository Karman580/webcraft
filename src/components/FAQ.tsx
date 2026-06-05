"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

function AccordionItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-accent-cyan transition-colors cursor-pointer"
      >
        <span className="text-sm sm:text-base">{item.question}</span>
        <div className="w-8 h-8 rounded-full bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-foreground flex-shrink-0">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 pt-2 text-xs sm:text-sm leading-relaxed text-luxury-muted border-t border-luxury-border">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does the free demo work?",
      answer: "We design and build a personalized homepage mockup containing your colors, logo, and copy within 48 hours for free. You test it interactively on desktop and mobile. If you love it, we proceed with the project. If not, you walk away.",
    },
    {
      question: "Is there any commitment?",
      answer: "Absolutely none. We do not ask for any credit card or upfront payments. You only commit to full development after reviewing and approving your custom homepage design.",
    },
    {
      question: "How long does development take?",
      answer: "Exactly 7 days. After the homepage is approved, we build the subpages, form routes, database schemas, and AI integrations, running automated speed checks to launch inside 1 week.",
    },
    {
      question: "Can I request changes?",
      answer: "Yes, feedback loops are extremely fast. During both the demo phase and the 7-day development process, you can submit revisions via WhatsApp or direct email, and they are processed in real-time.",
    },
    {
      question: "Will the website work on mobile?",
      answer: "Absolutely. Mobile responsiveness is not an afterthought for us. Every structural container is engineered for mobile touch coordinates, smooth font sizes, and fast load speeds on mobile networks.",
    },
    {
      question: "Do you deploy the website?",
      answer: "Yes, complete deployment is included. We host your site on premium, secure, global edge CDN networks (Vercel or Cloudflare) and coordinate configuring your custom domain names.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-24 bg-services-bg"
    >
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Common Queries Answered
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Have questions about our process, payment terms, or technology stack? Find instant answers below.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
