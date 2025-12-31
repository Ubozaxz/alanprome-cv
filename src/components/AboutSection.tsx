import { Briefcase, GraduationCap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          À propos de <span className="gradient-text">moi</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Builder Web3</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Développement de dApps et intégration blockchain pour des solutions financières 
              transparentes et anti-fraude en Afrique.
            </p>
          </div>
          
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Product Manager</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Expert en gestion de produit, UX/UI design et stratégie NFT. 
              Conception centrée utilisateur pour des expériences optimales.
            </p>
          </div>
          
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Visionnaire</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Engagé pour l'innovation technologique au service de la croissance économique 
              et de l'équité sociale en Afrique de l'Ouest.
            </p>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 glass-card p-6 sm:p-8 md:p-12">
          <blockquote className="text-base sm:text-lg md:text-xl text-center italic text-muted-foreground">
            "Mon engagement est double : concevoir des infrastructures digitales transparentes 
            et résistantes à la fraude pour le marché africain, tout en contribuant au discours 
            mondial sur les droits humains."
          </blockquote>
          <p className="text-center mt-3 sm:mt-4 text-primary font-display font-medium text-sm sm:text-base">— Alan Emmanuel Beugré</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
