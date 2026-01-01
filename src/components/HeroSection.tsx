import { ArrowDown, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-12 pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {t("hero.available")}
          </span>
        </div>
        
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-up animation-delay-200">
          Alan Emmanuel{" "}
          <span className="gradient-text">Beugré</span>
        </h1>
        
        <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 animate-fade-up animation-delay-400">
          <span className="block sm:inline">{t("hero.role1")}</span>{" "}
          <span className="hidden sm:inline text-foreground">•</span>{" "}
          <span className="block sm:inline">{t("hero.role2")}</span>{" "}
          <span className="hidden sm:inline text-foreground">•</span>{" "}
          <span className="block sm:inline">{t("hero.role3")}</span>
        </h2>
        
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 animate-fade-up animation-delay-600">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up animation-delay-600">
          <Button size="lg" className="glow-primary hover-lift font-display w-full sm:w-auto" asChild>
            <a href="mailto:allanbeugre@gmail.com">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t("hero.contact")}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="hover-lift font-display w-full sm:w-auto" asChild>
            <a href="https://www.linkedin.com/in/alan-emmanuel-beugre-559544360/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="hover-lift font-display w-full sm:w-auto" asChild>
            <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t("hero.portfolio")}
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
