import { Briefcase, GraduationCap, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const cards = [
    {
      icon: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />,
      titleKey: "about.builder.title",
      descKey: "about.builder.desc",
      gradient: "from-primary to-primary/50",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />,
      titleKey: "about.pm.title",
      descKey: "about.pm.desc",
      gradient: "from-accent to-accent/50",
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-7 sm:w-7" />,
      titleKey: "about.visionary.title",
      descKey: "about.visionary.desc",
      gradient: "from-primary to-accent",
      bgColor: "bg-gradient-to-br from-primary/10 to-accent/10",
      iconColor: "text-primary",
    },
  ];
  
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Zap className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            {t("about.title")} <span className="gradient-text">{t("about.titleHighlight")}</span>
          </h2>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12" staggerDelay={0.15}>
          {cards.map((card, index) => (
            <StaggerItem key={card.titleKey}>
              <motion.div 
                className="glass-card p-6 sm:p-8 hover-lift h-full group relative overflow-hidden"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${card.bgColor} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className={card.iconColor}>{card.icon}</div>
                  {/* Animated ring on hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 relative">{t(card.titleKey)}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed relative">
                  {t(card.descKey)}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation variant="scale" delay={0.4}>
          <motion.div 
            className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-primary/10 font-serif rotate-180">"</div>
            
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-center italic text-muted-foreground relative z-10 max-w-3xl mx-auto">
              {t("about.quote")}
            </blockquote>
            <div className="flex items-center justify-center mt-4 sm:mt-6 gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-primary font-display font-semibold text-sm sm:text-base">Alan Emmanuel Beugré</p>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
