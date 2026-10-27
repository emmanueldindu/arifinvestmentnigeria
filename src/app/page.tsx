import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { Services } from "@/components/layout/Services";
import { Portfolio } from "@/components/layout/Portfolio";
import { FaqAccordion } from "@/components/layout/FaqAccordion";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FaqAccordion />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
