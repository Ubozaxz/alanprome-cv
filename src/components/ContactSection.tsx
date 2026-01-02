import { Mail, Linkedin, MapPin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactCards = [
    {
      icon: <Mail className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: t("contact.email"),
      value: "allanbeugre@gmail.com",
      href: "mailto:allanbeugre@gmail.com",
      color: "primary",
    },
    {
      icon: <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "LinkedIn",
      value: "Alan Emmanuel Promé",
      href: "https://www.linkedin.com/in/alan-emmanuel-prom%C3%A9-559544360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "primary",
    },
    {
      icon: <MapPin className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: t("contact.location"),
      value: "Côte d'Ivoire",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_60%)]" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Send className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground mb-10 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            {t("contact.subtitle")}
          </p>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12" staggerDelay={0.1}>
          {contactCards.map((card, index) => (
            <StaggerItem key={card.title}>
              {card.href ? (
                <motion.a 
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-6 sm:p-8 hover-lift group cursor-pointer block h-full relative overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-${card.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-${card.color}/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-${card.color}/20 transition-all duration-300 text-${card.color}`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="font-display font-semibold mb-2 text-base sm:text-lg">{card.title}</h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{card.value}</p>
                </motion.a>
              ) : (
                <motion.div 
                  className="glass-card p-6 sm:p-8 h-full relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-${card.color}/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 text-${card.color}`}>
                    {card.icon}
                  </div>
                  <h3 className="font-display font-semibold mb-2 text-base sm:text-lg">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.value}</p>
                </motion.div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation variant="scale" delay={0.3}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="glow-primary font-display w-full sm:w-auto group" asChild>
                <a href="mailto:allanbeugre@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t("contact.sendEmail")}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="font-display w-full sm:w-auto group border-primary/30 hover:border-primary/50" asChild>
                <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  {t("contact.viewPortfolio")}
                </a>
              </Button>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactSection;
