
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import { Briefcase } from "lucide-react";

type JobProps = {
  position: string;
  company: string;
  period: string;
  description: string;
  isInView: boolean;
  delay: number;
};

const Job = ({ position, company, period, description, isInView, delay }: JobProps) => (
  <div 
    className={`relative pl-8 py-4 transition-all duration-700 ${
      isInView 
        ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
        : "opacity-0 translate-y-10"
    }`}
  >
    <div className="absolute left-0 top-5 w-4 h-4 bg-secondary/20 rounded-full border-2 border-secondary"></div>
    
    <div className="absolute left-2 top-9 bottom-0 w-[1px] bg-border"></div>
    
    <h3 className="text-xl font-semibold">{position}</h3>
    <p className="text-muted-foreground">
      {company} | <span className="text-sm">{period}</span>
    </p>
    <p className="mt-2 text-balance">{description}</p>
  </div>
);

const ExperienceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const experiences = [
    {
      position: "Front-end Developer React.js",
      company: "Dolphin",
      period: "2024 - Present",
      description: "Desenvolvimento e refatoração de componentes e telas para ERP utilizando React.js com TypeScript, seguindo princípios de código limpo, MVVM, POO e testes com Cypress.",
    },
    {
      position: "Freelance Developer",
      company: "Autônomo",
      period: "2023 - Present",
      description: "Desenvolvimento de sistemas para pequenas empresas utilizando React.js, TypeScript, Tailwind CSS e outras tecnologias modernas.",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section bg-background relative"
    >
      <div 
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-mesh-purple to-transparent opacity-30"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className={`p-2 rounded-full bg-secondary/10 transition-all duration-500 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Briefcase className="h-6 w-6 text-secondary" />
            </div>
            <h2 
              className={`section-title transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {t("experienceTitle")}
            </h2>
          </div>
          
          <div className="mt-8 border-l border-border pl-6">
            {experiences.map((exp, index) => (
              <Job
                key={index}
                position={exp.position}
                company={exp.company}
                period={exp.period}
                description={exp.description}
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

export default ExperienceSection;
