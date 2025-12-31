import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alan Emmanuel Beugré | Product Manager & Designer | Web3 Builder</title>
        <meta 
          name="description" 
          content="Portfolio d'Alan Emmanuel Beugré - Product Manager, Designer et Web3 Builder basé en Côte d'Ivoire. Expert en blockchain, IA et design centré utilisateur." 
        />
        <meta name="keywords" content="Product Manager, Designer, Web3, Blockchain, IA, Côte d'Ivoire, NFT, dApp" />
        <meta property="og:title" content="Alan Emmanuel Beugré | Product Manager & Designer" />
        <meta property="og:description" content="Portfolio d'Alan Emmanuel Beugré - Expert en Product Management, Design et Web3." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://coinfi-ci.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;