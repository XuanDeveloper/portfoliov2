
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import { Code } from "lucide-react";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  isInView: boolean;
  delay: number;
};

const SkillCategory = ({ title, skills, isInView, delay }: SkillCategoryProps) => (
  <div 
    className={`bg-card rounded-lg p-6 shadow-sm transition-all duration-700 ${
      isInView 
        ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
        : "opacity-0 translate-y-10"
    }`}
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: t("frontendTech"),
      skills: ["React", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: t("backendTech"),
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      title: t("databaseTech"),
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      title: t("otherTech"),
      skills: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Responsive Design", "TDD"],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section bg-background relative"
    >
      <div 
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-mesh-green to-transparent opacity-30"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className={`p-2 rounded-full bg-primary/10 transition-all duration-500 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h2 
              className={`section-title transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {t("skillsTitle")}
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                isInView={isInView}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
