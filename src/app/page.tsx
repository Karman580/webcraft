import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConnectedSystem from "@/components/ConnectedSystem";
import Services from "@/components/Services";
import AIAgents from "@/components/AIAgents";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Performance from "@/components/Performance";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* What we build → how it connects → AI → what we've built → why us →
            performance → how we work → technology → pricing → proof → FAQ →
            about → quote */}
        <Hero />
        <ConnectedSystem />
        <Services />
        <AIAgents />
        <Portfolio />
        <WhyUs />
        <Performance />
        <Process />
        <Technology />
        <Pricing />
        <Testimonials />
        <FAQ />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
