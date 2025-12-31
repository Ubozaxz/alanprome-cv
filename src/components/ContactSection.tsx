import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Travaillons <span className="gradient-text">ensemble</span>
        </h2>
        <p className="text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
          Intéressé par une collaboration ? Je suis ouvert aux opportunités en Product Management, 
          Design et développement Web3.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <a 
            href="mailto:allanbeugre@gmail.com"
            className="glass-card p-4 sm:p-6 hover-lift group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">allanbeugre@gmail.com</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/alan-emmanuel-559544360"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 sm:p-6 hover-lift group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-1 sm:mb-2 text-sm sm:text-base">LinkedIn</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Alan Emmanuel Beugré</p>
          </a>
          
          <div className="glass-card p-4 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Location</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Côte d'Ivoire</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Button size="lg" className="glow-primary font-display w-full sm:w-auto" asChild>
            <a href="mailto:allanbeugre@gmail.com">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Envoyer un email
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-display w-full sm:w-auto" asChild>
            <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Voir mon portfolio principal
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
