import { 
  Sparkles, 
  Palette, 
  Users, 
  Code, 
  Database,
  Layers
} from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "VibeCoding & Outils IA",
    skills: [
      "Lovable",
      "Bolt",
      "Claude AI",
      "Google AI Studio",
      "ChatGPT",
      "Cursor",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & IA Créative",
    skills: [
      "Gamma",
      "Napkin AI",
      "Nano Banana",
      "Gemini",
      "Flow",
      "Sora",
      "Figma",
      "Canva",
    ],
    gradient: "from-accent to-primary",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestion d'équipe & Collaboration",
    skills: [
      "Google Workspace",
      "Notion",
      "Microsoft Teams",
      "Google Meet",
      "Slack",
      "Trello",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Blockchain & Web3",
    skills: [
      "Ethereum",
      "Hedera Hashgraph",
      "Smart Contracts",
      "dApps",
      "NFT Design",
      "Tokenization",
    ],
    gradient: "from-accent to-primary",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Product Management",
    skills: [
      "Agile/Scrum",
      "User Research",
      "Product Strategy",
      "MVP Development",
      "Roadmapping",
      "A/B Testing",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "UX/UI Design",
    skills: [
      "User-Centered Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
    ],
    gradient: "from-accent to-primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Compétences & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Un ensemble de compétences polyvalent alliant technologie, design et management
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 text-primary-foreground group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;