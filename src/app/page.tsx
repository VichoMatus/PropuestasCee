import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Equipo from "@/components/Equipo";
import Vision from "@/components/Vision";
import PropuestasAccordion from "@/components/PropuestasAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Equipo />
        <Vision />
        <PropuestasAccordion />
      </main>
      <Footer />
    </div>
  );
}
