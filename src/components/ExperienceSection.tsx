import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          {t("experience.title")} <span className="gradient-text">{t("experience.titleHighlight")}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          {t("experience.subtitle")}
        </p>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-border" />
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.title + exp.company}
              className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot - mobile */}
              <div className="md:hidden absolute left-2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1/2 top-2" />
              
              {/* Timeline dot - desktop */}
              <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary glow-primary -translate-x-1/2 top-6" />
              
              {/* Content */}
              <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}>
                <div className="glass-card p-4 sm:p-6 hover-lift">
                  <span className="text-xs sm:text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="font-display text-base sm:text-xl font-semibold mt-1 sm:mt-2">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base">{exp.company}</p>
                  <p className="text-muted-foreground mt-2 sm:mt-3 text-xs sm:text-sm">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 sm:py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link && (
                    <Button variant="ghost" size="sm" className="mt-3 sm:mt-4 -ml-2 text-xs sm:text-sm" asChild>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        {t("experience.viewProject")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
