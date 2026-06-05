import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferComparison from "@/components/OfferComparison";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import WhyWebCraft from "@/components/WhyWebCraft";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <OfferComparison />
        <Services />
        <HowItWorks />
        <Portfolio />
        <WhyWebCraft />
        <TechStack />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
