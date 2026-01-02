import { ArrowDown, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-12 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t("hero.available")}
          </span>
        </motion.div>
        
        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block">Alan Emmanuel</span>
          <motion.span 
            className="gradient-text block"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Beugré
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm sm:text-base font-medium">
              {t("hero.role1")}
            </span>
            <span className="text-primary">•</span>
            <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm sm:text-base font-medium">
              {t("hero.role2")}
            </span>
            <span className="text-accent hidden sm:inline">•</span>
            <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm sm:text-base font-medium">
              {t("hero.role3")}
            </span>
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("hero.description")}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" className="glow-primary hover-lift font-display w-full sm:w-auto group" asChild>
            <a href="mailto:allanbeugre@gmail.com">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              {t("hero.contact")}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="hover-lift font-display w-full sm:w-auto group border-primary/30 hover:border-primary/50" asChild>
            <a href="https://www.linkedin.com/in/alan-emmanuel-prom%C3%A9-559544360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="hover-lift font-display w-full sm:w-auto group" asChild>
            <a href="https://coinfi-ci.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              {t("hero.portfolio")}
            </a>
          </Button>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl font-bold gradient-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              3+
            </motion.span>
            <span className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat1")}</span>
          </div>
          <div className="text-center">
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl font-bold gradient-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              5+
            </motion.span>
            <span className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat2")}</span>
          </div>
          <div className="text-center">
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl font-bold gradient-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              100%
            </motion.span>
            <span className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat3")}</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
