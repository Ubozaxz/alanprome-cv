import { ArrowDown, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-12">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up animation-delay-200">
          Alan Emmanuel{" "}
          <span className="gradient-text">Beugré</span>
        </h1>
        
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up animation-delay-400">
          Product Manager & Designer{" "}
          <span className="text-foreground">•</span>{" "}
          Web3 Builder{" "}
          <span className="text-foreground">•</span>{" "}
          AI Enthusiast
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-fade-up animation-delay-600">
          Créateur de solutions digitales innovantes à l'intersection du Blockchain, 
          de l'IA et du design centré utilisateur. Basé en Côte d'Ivoire.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-600">
          <Button size="lg" className="glow-primary hover-lift font-display">
            <Mail className="mr-2 h-5 w-5" />
            Me contacter
          </Button>
          <Button size="lg" variant="outline" className="hover-lift font-display" asChild>
            <a href="https://www.linkedin.com/in/alan-emmanuel-559544360" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="hover-lift font-display" asChild>
            <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Portfolio
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;