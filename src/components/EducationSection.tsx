import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

interface Education {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certification";
  link?: string;
}

const EducationSection = () => {
  const { t } = useLanguage();

  const education: Education[] = [
    {
      title: "Degree in Blockchain & Product Design",
      institution: "Altash University",
      year: `${t("education.ongoing")} – 2026`,
      type: "degree",
    },
    {
      title: "Hedera Hashgraph Certification",
      institution: "Hedera",
      year: "2025",
      type: "certification",
    },
    {
      title: "NFT Designer Certification",
      institution: "Profunda W3 Academy",
      year: "2025",
      type: "certification",
      link: "https://drive.google.com/file/d/1WedVNEaqvuNMJr40xlpWWy7OCne8G1b2/view",
    },
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--accent)/0.06),transparent_40%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <GraduationCap className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
            {t("education.title")} <span className="gradient-text">{t("education.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            {t("education.subtitle")}
          </p>
        </ScrollAnimation>
        
        <StaggerContainer className="grid gap-4 sm:gap-6" staggerDelay={0.15}>
          {education.map((item, index) => (
            <StaggerItem key={item.title}>
              <motion.div 
                className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover-lift group relative overflow-hidden"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient line on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  item.type === "degree" 
                    ? "bg-gradient-to-b from-primary to-primary/50" 
                    : "bg-gradient-to-b from-accent to-accent/50"
                }`} />
                
                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 relative ${
                    item.type === "degree" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-accent/10 text-accent"
                  }`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.type === "degree" ? (
                    <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8" />
                  ) : (
                    <Award className="h-7 w-7 sm:h-8 sm:w-8" />
                  )}
                  
                  {/* Animated ring */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 ${
                      item.type === "degree" ? "border-primary/30" : "border-accent/30"
                    }`}
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                    <span className={`inline-flex items-center text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full ${
                      item.type === "degree" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  
                  {item.link && (
                    <Button variant="ghost" size="sm" className="mt-3 -ml-2 text-sm group/btn" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        {t("education.viewCert")}
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EducationSection;
