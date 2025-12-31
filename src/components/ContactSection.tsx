import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Travaillons <span className="gradient-text">ensemble</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Intéressé par une collaboration ? Je suis ouvert aux opportunités en Product Management, 
          Design et développement Web3.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:allanbeugre@gmail.com"
            className="glass-card p-6 hover-lift group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">allanbeugre@gmail.com</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/alan-emmanuel-559544360"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 hover-lift group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm">Alan Emmanuel Beugré</p>
          </a>
          
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Côte d'Ivoire</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="glow-primary font-display" asChild>
            <a href="mailto:allanbeugre@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un email
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-display" asChild>
            <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Voir mon portfolio principal
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;