import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";
import coinfinanceImg from "@/assets/coinfinance-preview.jpg";
import comptaraImg from "@/assets/comptara-preview.jpg";
import ethabidjanImg from "@/assets/ethabidjan-preview.jpg";

interface Project {
  title: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "CoinFinance",
    descriptionFr: "Plateforme de tokenisation de factures pour PME africaines. Intégration blockchain et IA pour une gestion financière transparente.",
    descriptionEn: "Invoice tokenization platform for African SMEs. Blockchain and AI integration for transparent financial management.",
    image: coinfinanceImg,
    tags: ["Blockchain", "FinTech", "AI", "Product Management"],
    liveUrl: "https://coinfi-ci.com",
    githubUrl: "https://github.com/YOHOUJOSIAS/COINFI_PLATFORM",
    featured: true,
  },
  {
    title: "COMPTARA",
    descriptionFr: "Solution comptable décentralisée anti-fraude. Blockchain pour garantir l'intégrité des données financières des entreprises.",
    descriptionEn: "Decentralized anti-fraud accounting solution. Blockchain to ensure the integrity of corporate financial data.",
    image: comptaraImg,
    tags: ["Blockchain", "Accounting", "Web3", "dApp"],
    liveUrl: "https://comptara-flow.vercel.app",
    githubUrl: "https://github.com/Ubozaxz/ledger-on-chain-comptara",
    featured: true,
  },
  {
    title: "Ethereum Côte d'Ivoire",
    descriptionFr: "Hub communautaire Ethereum pour l'Afrique francophone. Éducation, networking et adoption blockchain.",
    descriptionEn: "Ethereum community hub for francophone Africa. Education, networking and blockchain adoption.",
    image: ethabidjanImg,
    tags: ["Community", "Ethereum", "Web3", "Social Media"],
    liveUrl: "https://www.linkedin.com/company/ethabidjan/",
  },
];

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05),transparent_50%)]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Rocket className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            {t("projects.subtitle")}
          </p>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div 
                className={`glass-card overflow-hidden group h-full relative ${
                  project.featured ? "ring-2 ring-primary/30" : ""
                }`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image container with overlay */}
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={`${project.title} - ${language === "fr" ? "Aperçu de la plateforme" : "Platform preview"}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.span 
                      className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      ⭐ {t("projects.featured")}
                    </motion.span>
                  )}
                  
                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-primary hover:bg-background transition-colors shadow-lg"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {language === "fr" ? project.descriptionFr : project.descriptionEn}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 group/btn" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                          {t("projects.view")}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1 group/btn" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;
