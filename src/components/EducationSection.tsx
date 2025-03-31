
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import { BookOpen } from "lucide-react";

type EducationProps = {
  degree: string;
  school: string;
  period: string;
  description: string;
  isInView: boolean;
  delay: number;
};

const Education = ({ degree, school, period, description, isInView, delay }: EducationProps) => (
  <div 
    className={`bg-card rounded-lg p-6 shadow-sm hover-lift card-shadow transition-all duration-700 ${
      isInView 
        ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
        : "opacity-0 translate-y-10"
    }`}
  >
    <h3 className="text-xl font-semibold mb-2">{degree}</h3>
    <p className="text-muted-foreground mb-2">
      {school} | <span className="text-sm">{period}</span>
    </p>
    <p className="text-balance text-sm">{description}</p>
  </div>
);

const EducationSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const educations = [
    {
      degree: t("degree1"),
      school: t("school1"),
      period: t("eduPeriod1"),
      description: t("eduDescription1"),
    },
    {
      degree: t("degree2"),
      school: t("school2"),
      period: t("eduPeriod2"),
      description: t("eduDescription2"),
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section bg-mesh-green relative"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className={`p-2 rounded-full bg-primary/10 transition-all duration-500 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 
              className={`section-title transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {t("educationTitle")}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {educations.map((edu, index) => (
              <Education
                key={index}
                degree={edu.degree}
                school={edu.school}
                period={edu.period}
                description={edu.description}
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

export default EducationSection;
