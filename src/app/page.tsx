import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CrictalxShowcase from "@/components/CrictalxShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import Observations from "@/components/Observations";
import EngineeringDNA from "@/components/EngineeringDNA";
import Signal from "@/components/Signal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CrictalxShowcase />
        <ProjectsSection />
        <Observations />
        <EngineeringDNA />
        <Signal />
      </main>
      <Footer />
    </>
  );
}
