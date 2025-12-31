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
    <section id="education" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Formation & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Une formation continue pour rester à la pointe de l'innovation
        </p>
        
        <div className="grid gap-6">
          {education.map((item) => (
            <div 
              key={item.title}
              className="glass-card p-6 flex items-start gap-5 hover-lift"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                item.type === "degree" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-accent/10 text-accent"
              }`}>
                {item.type === "degree" ? (
                  <GraduationCap className="h-7 w-7" />
                ) : (
                  <Award className="h-7 w-7" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                  <span className="text-sm text-primary font-medium whitespace-nowrap">{item.year}</span>
                </div>
                
                {item.link && (
                  <Button variant="ghost" size="sm" className="mt-3 -ml-2" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
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