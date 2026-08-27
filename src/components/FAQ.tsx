import { HelpCircle, Plus } from "lucide-react";
import Reveal from "./Reveal";

/* Server Component with zero JavaScript: native <details>/<summary>, animated
   open/close in CSS. Replaces the framer-motion accordion. */

const FAQS = [
  {
    question: "What do you build?",
    answer: "Websites, web and mobile applications, AI agents and automation, and the cloud systems that run behind them — databases, logins, integrations. Most projects are a mix: something your customers use, plus something your team uses to run the business.",
  },
  {
    question: "How does the process work?",
    answer: "Six stages: Understand, Plan, Build, Test, Launch, Scale. Each one gives you something real before the next starts — a written brief, then a scope and price, then designs, then the working product. You're never waiting in the dark until the end.",
  },
  {
    question: "How much does it cost?",
    answer: "Websites and standard web builds start at $1,500, $2,500 or $5,000 depending on how much you need. Those are starting prices, not final ones — get in touch and we'll quote your actual project, which often comes in better once we drop whatever doesn't apply to you. Mobile apps, AI systems and custom software are quoted per project: we split the work into parts and price each part, so you can remove anything you don't want.",
  },
  {
    question: "How long does it take?",
    answer: "A standard website is usually about a week. Apps, AI systems and custom software depend on what's involved — you get dated milestones before work begins, and you're told straight away if anything is at risk of slipping, not on the deadline itself.",
  },
  {
    question: "Can you work with an existing product?",
    answer: "Yes. We take over existing systems, add features to live products, and replace the parts that have stopped coping. The first step is always reading what's already there, so the plan is based on your actual system rather than a guess about it.",
  },
  {
    question: "Can you build AI agents?",
    answer: "Yes — AI agents that do real work inside your business, connected to your actual data and tools. That includes sales and lead agents, support agents, appointment agents, and purpose-built agents for a job nobody sells software for.",
  },
  {
    question: "Can you build AI calling agents and chatbots?",
    answer: "Yes. Calling agents can answer or make phone calls, handle routine conversations, book appointments and pass anything important to your team. Chatbots work on your website and WhatsApp, answer questions around the clock, and hand over to a person when the conversation needs one.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Every project includes support after launch, and there's an optional package covering six months of support and updates. After that, ongoing work can continue as a rolling arrangement — most systems keep growing, and they're built expecting it.",
  },
  {
    question: "Who owns the code and the product?",
    answer: "You do — completely. The code, the repository, the accounts and the hosting all transfer to you. Nothing is locked to a platform only we can access, and you can hand the project to any other engineer at any time without asking us.",
  },
  {
    question: "How reliable and scalable are the systems?",
    answer: "They're built for real conditions, not demos: slow connections, unexpected input, and the days when everything happens at once. Speed and behaviour are tested before launch. And because the pieces are kept separate, growing usually means adding a part rather than rebuilding from scratch.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-luxury-bg">
      <div className="max-w-4xl mx-auto px-6 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            What we build, what it costs, how long it takes, and what happens after launch.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 4) * 60}>
              <details
                className="group glass-panel theme-card-shadow rounded-2xl overflow-hidden border border-luxury-border open:border-luxury-border-hover transition-colors duration-300"
                open={i === 0}
              >
                <summary className="w-full p-6 flex items-center justify-between gap-4 font-bold text-foreground hover:text-accent-cyan transition-colors cursor-pointer">
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-foreground flex-shrink-0">
                    <Plus className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>

                <div className="acc-content">
                  <div>
                    <div className="px-6 pb-6 pt-4 text-xs sm:text-sm leading-relaxed text-luxury-muted border-t border-luxury-border">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
