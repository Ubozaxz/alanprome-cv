import { 
  Sparkles, 
  Palette, 
  Users, 
  Code, 
  Database,
  Layers,
  Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

interface SkillCategory {
  icon: React.ReactNode;
  titleKey: string;
  skills: string[];
  gradient: string;
  accentColor: string;
}

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.vibecoding",
      skills: [
        "Lovable",
        "Bolt",
        "Claude AI",
        "Google AI Studio",
        "ChatGPT",
        "Cursor",
      ],
      gradient: "from-primary to-accent",
      accentColor: "primary",
    },
    {
      icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.design",
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
      accentColor: "accent",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.team",
      skills: [
        "Google Workspace",
        "Notion",
        "Microsoft Teams",
        "Google Meet",
        "Slack",
        "Trello",
      ],
      gradient: "from-primary to-accent",
      accentColor: "primary",
    },
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.blockchain",
      skills: [
        "Ethereum",
        "Hedera Hashgraph",
        "Smart Contracts",
        "dApps",
        "NFT Design",
        "Tokenization",
      ],
      gradient: "from-accent to-primary",
      accentColor: "accent",
    },
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.pm",
      skills: [
        "Agile/Scrum",
        "User Research",
        "Product Strategy",
        "MVP Development",
        "Roadmapping",
        "A/B Testing",
      ],
      gradient: "from-primary to-accent",
      accentColor: "primary",
    },
    {
      icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6" />,
      titleKey: "skills.uxui",
      skills: [
        "User-Centered Design",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Responsive Design",
        "Accessibility",
      ],
      gradient: "from-accent to-primary",
      accentColor: "accent",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Zap className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
            {t("skills.title")} <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            {t("skills.subtitle")}
          </p>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.titleKey}>
              <motion.div 
                className="glass-card p-5 sm:p-6 hover-lift group h-full relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 sm:mb-5 text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-5">{t(category.titleKey)}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill}
                      className={`px-3 py-1.5 text-xs sm:text-sm rounded-full bg-muted text-muted-foreground hover:bg-${category.accentColor}/10 hover:text-${category.accentColor} transition-all duration-300 cursor-default border border-transparent hover:border-${category.accentColor}/30`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
