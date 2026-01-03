import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "nav.contactMe": "Me contacter",
    
    // Hero
    "hero.available": "Disponible pour des opportunités",
    "hero.role1": "Product Manager & Designer",
    "hero.role2": "Web3 Builder",
    "hero.role3": "AI Enthusiast",
    "hero.description": "Créateur de solutions digitales innovantes à l'intersection du Blockchain, de l'IA et du design centré utilisateur. Basé en Côte d'Ivoire.",
    "hero.contact": "Me contacter",
    "hero.portfolio": "Portfolio",
    "hero.stat1": "Années d'expérience",
    "hero.stat2": "Projets réalisés",
    "hero.stat3": "Passion & Dévouement",
    
    // About
    "about.title": "À propos de",
    "about.titleHighlight": "moi",
    "about.builder.title": "Builder Web3",
    "about.builder.desc": "Développement de dApps et intégration blockchain pour des solutions financières transparentes et anti-fraude en Afrique.",
    "about.pm.title": "Product Manager",
    "about.pm.desc": "Expert en gestion de produit, UX/UI design et stratégie NFT. Conception centrée utilisateur pour des expériences optimales.",
    "about.visionary.title": "Visionnaire",
    "about.visionary.desc": "Engagé pour l'innovation technologique au service de la croissance économique et de l'équité sociale en Afrique de l'Ouest.",
    "about.quote": "\"Mon engagement est double : concevoir des infrastructures digitales transparentes et résistantes à la fraude pour le marché africain, tout en contribuant au discours mondial sur les droits humains.\"",
    
    // Skills
    "skills.title": "Compétences &",
    "skills.titleHighlight": "Expertise",
    "skills.subtitle": "Un ensemble de compétences polyvalent alliant technologie, design et management",
    "skills.vibecoding": "VibeCoding & Outils IA",
    "skills.design": "Design & IA Créative",
    "skills.team": "Gestion d'équipe & Collaboration",
    "skills.blockchain": "Blockchain & Web3",
    "skills.pm": "Product Management",
    "skills.uxui": "UX/UI Design",
    
    // Experience
    "experience.title": "Expérience",
    "experience.titleHighlight": "Professionnelle",
    "experience.subtitle": "Un parcours orienté vers l'innovation technologique et l'impact social",
    "experience.present": "Présent",
    "experience.viewProject": "Voir le projet",
    
    // Projects
    "projects.title": "Projets",
    "projects.titleHighlight": "Phares",
    "projects.subtitle": "Des solutions innovantes pour l'Afrique et au-delà",
    "projects.featured": "Featured",
    "projects.view": "Voir le projet",
    
    // Education
    "education.title": "Formation &",
    "education.titleHighlight": "Certifications",
    "education.subtitle": "Une formation continue pour rester à la pointe de l'innovation",
    "education.ongoing": "En cours",
    "education.viewCert": "Voir le certificat",
    
    // Contact
    "contact.title": "Travaillons",
    "contact.titleHighlight": "ensemble",
    "contact.subtitle": "Intéressé par une collaboration ? Je suis ouvert aux opportunités en Product Management, Design et développement Web3.",
    "contact.email": "Email",
    "contact.location": "Localisation",
    "contact.sendEmail": "Envoyer un email",
    "contact.viewPortfolio": "Voir mon portfolio principal",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.designedBy": "designed by Alan promé",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.contactMe": "Contact me",
    
    // Hero
    "hero.available": "Available for opportunities",
    "hero.role1": "Product Manager & Designer",
    "hero.role2": "Web3 Builder",
    "hero.role3": "AI Enthusiast",
    "hero.description": "Creator of innovative digital solutions at the intersection of Blockchain, AI and user-centered design. Based in Côte d'Ivoire.",
    "hero.contact": "Contact me",
    "hero.portfolio": "Portfolio",
    "hero.stat1": "Years of experience",
    "hero.stat2": "Projects completed",
    "hero.stat3": "Passion & Dedication",
    
    // About
    "about.title": "About",
    "about.titleHighlight": "me",
    "about.builder.title": "Web3 Builder",
    "about.builder.desc": "Development of dApps and blockchain integration for transparent and anti-fraud financial solutions in Africa.",
    "about.pm.title": "Product Manager",
    "about.pm.desc": "Expert in product management, UX/UI design and NFT strategy. User-centered design for optimal experiences.",
    "about.visionary.title": "Visionary",
    "about.visionary.desc": "Committed to technological innovation for economic growth and social equity in West Africa.",
    "about.quote": "\"My commitment is twofold: designing transparent and fraud-resistant digital infrastructures for the African market, while contributing to the global discourse on human rights.\"",
    
    // Skills
    "skills.title": "Skills &",
    "skills.titleHighlight": "Expertise",
    "skills.subtitle": "A versatile skill set combining technology, design and management",
    "skills.vibecoding": "VibeCoding & AI Tools",
    "skills.design": "Design & Creative AI",
    "skills.team": "Team Management & Collaboration",
    "skills.blockchain": "Blockchain & Web3",
    "skills.pm": "Product Management",
    "skills.uxui": "UX/UI Design",
    
    // Experience
    "experience.title": "Professional",
    "experience.titleHighlight": "Experience",
    "experience.subtitle": "A journey oriented towards technological innovation and social impact",
    "experience.present": "Present",
    "experience.viewProject": "View project",
    
    // Projects
    "projects.title": "Featured",
    "projects.titleHighlight": "Projects",
    "projects.subtitle": "Innovative solutions for Africa and beyond",
    "projects.featured": "Featured",
    "projects.view": "View project",
    
    // Education
    "education.title": "Education &",
    "education.titleHighlight": "Certifications",
    "education.subtitle": "Continuous learning to stay at the forefront of innovation",
    "education.ongoing": "Ongoing",
    "education.viewCert": "View certificate",
    
    // Contact
    "contact.title": "Let's work",
    "contact.titleHighlight": "together",
    "contact.subtitle": "Interested in collaboration? I'm open to opportunities in Product Management, Design and Web3 development.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.sendEmail": "Send an email",
    "contact.viewPortfolio": "View my main portfolio",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.designedBy": "designed by Alan promé",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved as Language) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
