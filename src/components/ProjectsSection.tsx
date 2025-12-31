import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "CoinFinance",
    description: "Plateforme de tokenisation de factures pour PME africaines. Intégration blockchain et IA pour une gestion financière transparente.",
    tags: ["Blockchain", "FinTech", "AI", "Product Management"],
    liveUrl: "https://coinfi-ci.com",
    featured: true,
  },
  {
    title: "COMPTARA",
    description: "Solution comptable décentralisée anti-fraude. Blockchain pour garantir l'intégrité des données financières des entreprises.",
    tags: ["Blockchain", "Accounting", "Web3", "dApp"],
    liveUrl: "https://comptara-flow.vercel.app",
    featured: true,
  },
  {
    title: "Ethereum Côte d'Ivoire",
    description: "Hub communautaire Ethereum pour l'Afrique francophone. Éducation, networking et adoption blockchain.",
    tags: ["Community", "Ethereum", "Web3", "Social Media"],
    liveUrl: "https://www.linkedin.com/company/ethabidjan/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Projets <span className="gradient-text">Phares</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Des solutions innovantes pour l'Afrique et au-delà
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className={`glass-card overflow-hidden hover-lift group ${
                project.featured ? "ring-1 ring-primary/30" : ""
              }`}
            >
              {/* Gradient placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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

export default ProjectsSection;