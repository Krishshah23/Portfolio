import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PathPilotShowcase from "@/components/PathPilotShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceExperience from "@/components/FreelanceExperience";
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
        <FreelanceExperience />
        <PathPilotShowcase />
        <ProjectsSection />
        <Observations />
        <EngineeringDNA />
        <Signal />
      </main>
      <Footer />
    </>
  );
}
