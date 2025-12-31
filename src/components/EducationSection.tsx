import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Education {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certification";
  link?: string;
}

const education: Education[] = [
  {
    title: "Degree in Blockchain & Product Design",
    institution: "Altash University",
    year: "En cours – 2026",
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

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          Formation & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          Une formation continue pour rester à la pointe de l'innovation
        </p>
        
        <div className="grid gap-4 sm:gap-6">
          {education.map((item) => (
            <div 
              key={item.title}
              className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-5 hover-lift"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 ${
                item.type === "degree" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-accent/10 text-accent"
              }`}>
                {item.type === "degree" ? (
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                  <Award className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.institution}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-primary font-medium whitespace-nowrap">{item.year}</span>
                </div>
                
                {item.link && (
                  <Button variant="ghost" size="sm" className="mt-2 sm:mt-3 -ml-2 text-xs sm:text-sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Voir le certificat
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
