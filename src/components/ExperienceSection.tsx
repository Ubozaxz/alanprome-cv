import { ExternalLink, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  tags: string[];
}

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  const experiences: Experience[] = [
    {
      title: "Co-founder & Product Manager",
      company: "CoinFinance",
      period: `2025 – ${t("experience.present")}`,
      description: language === "fr" 
        ? "Direction du développement d'une plateforme de tokenisation de factures pour optimiser les opérations des PME. Gestion de l'intégration des technologies IA et blockchain pour le MVP."
        : "Leading the development of an invoice tokenization platform to optimize SME operations. Managing AI and blockchain technology integration for the MVP.",
      link: "https://coinfi-ci.com",
      tags: ["Blockchain", "Product Management", "AI Integration"],
    },
    {
      title: "Founder",
      company: "COMPTARA",
      period: `2025 – ${t("experience.present")}`,
      description: language === "fr"
        ? "Développement d'une solution comptable basée sur la blockchain pour réduire la fraude et la corruption pour les PME africaines."
        : "Development of a blockchain-based accounting solution to reduce fraud and corruption for African SMEs.",
      link: "https://comptara-flow.vercel.app",
      tags: ["Blockchain", "Accounting", "Anti-fraud"],
    },
    {
      title: "Social Media Manager",
      company: "Ethereum Côte d'Ivoire (EthAbidjan)",
      period: `2025 – ${t("experience.present")}`,
      description: language === "fr"
        ? "Direction de la croissance communautaire et de la communication stratégique pour le principal hub Ethereum en Afrique francophone."
        : "Leading community growth and strategic communication for the main Ethereum hub in francophone Africa.",
      link: "https://www.linkedin.com/company/ethabidjan/",
      tags: ["Community", "Web3", "Social Media"],
    },
    {
      title: "Social Media Manager",
      company: "WellBlock Conseils",
      period: `2025 – ${t("experience.present")}`,
      description: language === "fr"
        ? "Cabinet de conseil à Abidjan, spécialisé dans les médias et le contenu pour l'Afrique."
        : "Consulting firm in Abidjan, specialized in media and content for Africa.",
      link: "https://www.linkedin.com/company/wellblock-conseils/",
      tags: ["Consulting", "Media", "Content"],
    },
    {
      title: "Leader & Theorist",
      company: "Institut du Genre et de la Transvirginité",
      period: `2025 – ${t("experience.present")}`,
      description: language === "fr"
        ? "Théoricien et concepteur du concept de 'Transvirginité', axé sur la défense de l'identité de genre et des droits humains."
        : "Theorist and creator of the 'Transvirginity' concept, focused on gender identity advocacy and human rights.",
      link: "https://www.linkedin.com/company/institut-du-genre-et-de-la-transvirginite/",
      tags: ["Human Rights", "Theory", "Advocacy"],
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Briefcase className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
            {t("experience.title")} <span className="gradient-text">{t("experience.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            {t("experience.subtitle")}
          </p>
        </ScrollAnimation>
        
        <div className="relative">
          {/* Timeline line - gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
          </div>
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5">
            <div className="h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
          </div>
          
          {experiences.map((exp, index) => (
            <ScrollAnimation 
              key={exp.title + exp.company}
              variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
              delay={index * 0.1}
            >
              <div 
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot - mobile */}
                <motion.div 
                  className="md:hidden absolute left-3 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent -translate-x-1/2 top-6 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="absolute inset-1 rounded-full bg-background" />
                  <div className="absolute inset-2 rounded-full bg-primary" />
                </motion.div>
                
                {/* Timeline dot - desktop */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent -translate-x-1/2 top-6 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="absolute inset-1 rounded-full bg-background" />
                  <div className="absolute inset-2 rounded-full bg-primary" />
                </motion.div>
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-10 lg:pr-14" : "md:pl-10 lg:pl-14"}`}>
                  <motion.div 
                    className="glass-card p-5 sm:p-6 hover-lift group relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 mb-3">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-semibold mt-2">{exp.title}</h3>
                      <p className="text-accent font-medium text-sm sm:text-base">{exp.company}</p>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {exp.link && (
                        <Button variant="ghost" size="sm" className="mt-4 -ml-2 text-xs sm:text-sm group/btn" asChild>
                          <a href={exp.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:rotate-12 transition-transform" />
                            {t("experience.viewProject")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
