import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import coinfinanceImg from "@/assets/coinfinance-preview.jpg";
import comptaraImg from "@/assets/comptara-preview.jpg";
import ethabidjanImg from "@/assets/ethabidjan-preview.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "CoinFinance",
    description: "Plateforme de tokenisation de factures pour PME africaines. Intégration blockchain et IA pour une gestion financière transparente.",
    image: coinfinanceImg,
    tags: ["Blockchain", "FinTech", "AI", "Product Management"],
    liveUrl: "https://coinfi-ci.com",
    featured: true,
  },
  {
    title: "COMPTARA",
    description: "Solution comptable décentralisée anti-fraude. Blockchain pour garantir l'intégrité des données financières des entreprises.",
    image: comptaraImg,
    tags: ["Blockchain", "Accounting", "Web3", "dApp"],
    liveUrl: "https://comptara-flow.vercel.app",
    featured: true,
  },
  {
    title: "Ethereum Côte d'Ivoire",
    description: "Hub communautaire Ethereum pour l'Afrique francophone. Éducation, networking et adoption blockchain.",
    image: ethabidjanImg,
    tags: ["Community", "Ethereum", "Web3", "Social Media"],
    liveUrl: "https://www.linkedin.com/company/ethabidjan/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          Projets <span className="gradient-text">Phares</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          Des solutions innovantes pour l'Afrique et au-delà
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className={`glass-card overflow-hidden hover-lift group ${
                project.featured ? "ring-1 ring-primary/30" : ""
              }`}
            >
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Aperçu de la plateforme`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                {project.featured && (
                  <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 sm:py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 text-xs sm:text-sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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

export default ProjectsSection;
