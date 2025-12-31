import { Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-xl gradient-text">
              Alan Emmanuel Beugré
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Product Manager & Designer | Web3 Builder
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:allanbeugre@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/alan-emmanuel-559544360"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://coinfi-ci.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-8">
          © {currentYear} Alan Emmanuel Beugré. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;