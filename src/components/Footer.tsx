import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg sm:text-xl gradient-text">
              Alan Emmanuel Beugré
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Product Manager & Designer | Web3 Builder
            </p>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="mailto:allanbeugre@gmail.com"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/alan-emmanuel-prom%C3%A9-559544360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://coinfi-ci.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8 space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Alan Emmanuel Beugré. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground/70 italic">
            {t("footer.designedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
