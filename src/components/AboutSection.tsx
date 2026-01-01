import { Briefcase, GraduationCap, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          {t("about.title")} <span className="gradient-text">{t("about.titleHighlight")}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t("about.builder.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("about.builder.desc")}
            </p>
          </div>
          
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t("about.pm.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("about.pm.desc")}
            </p>
          </div>
          
          <div className="glass-card p-6 sm:p-8 hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t("about.visionary.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("about.visionary.desc")}
            </p>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 glass-card p-6 sm:p-8 md:p-12">
          <blockquote className="text-base sm:text-lg md:text-xl text-center italic text-muted-foreground">
            {t("about.quote")}
          </blockquote>
          <p className="text-center mt-3 sm:mt-4 text-primary font-display font-medium text-sm sm:text-base">— Alan Emmanuel Beugré</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
