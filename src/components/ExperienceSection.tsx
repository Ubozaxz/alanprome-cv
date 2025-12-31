import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    title: "Co-founder & Product Manager",
    company: "CoinFinance",
    period: "2025 – Présent",
    description: "Direction du développement d'une plateforme de tokenisation de factures pour optimiser les opérations des PME. Gestion de l'intégration des technologies IA et blockchain pour le MVP.",
    link: "https://coinfi-ci.com",
    tags: ["Blockchain", "Product Management", "AI Integration"],
  },
  {
    title: "Founder",
    company: "COMPTARA",
    period: "2024 – Présent",
    description: "Développement d'une solution comptable basée sur la blockchain pour réduire la fraude et la corruption pour les PME africaines.",
    link: "https://comptara-flow.vercel.app",
    tags: ["Blockchain", "Accounting", "Anti-fraud"],
  },
  {
    title: "Social Media Manager",
    company: "Ethereum Côte d'Ivoire (EthAbidjan)",
    period: "2024 – Présent",
    description: "Direction de la croissance communautaire et de la communication stratégique pour le principal hub Ethereum en Afrique francophone.",
    link: "https://www.linkedin.com/company/ethabidjan/",
    tags: ["Community", "Web3", "Social Media"],
  },
  {
    title: "Social Media Manager",
    company: "WellBlock Conseils",
    period: "2024 – Présent",
    description: "Cabinet de conseil à Abidjan, spécialisé dans les médias et le contenu pour l'Afrique.",
    link: "https://www.linkedin.com/company/wellblock-conseils/",
    tags: ["Consulting", "Media", "Content"],
  },
  {
    title: "Leader & Theorist",
    company: "Institut du Genre et de la Transvirginité",
    period: "2023 – Présent",
    description: "Théoricien et concepteur du concept de 'Transvirginité', axé sur la défense de l'identité de genre et des droits humains.",
    link: "https://www.linkedin.com/company/institut-du-genre-et-de-la-transvirginite/",
    tags: ["Human Rights", "Theory", "Advocacy"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Expérience <span className="gradient-text">Professionnelle</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Un parcours orienté vers l'innovation technologique et l'impact social
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.title + exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary md:-translate-x-1/2 -translate-x-1/2" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card p-6 hover-lift">
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="font-display text-xl font-semibold mt-2">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link && (
                    <Button variant="ghost" size="sm" className="mt-4 -ml-2" asChild>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Voir le projet
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