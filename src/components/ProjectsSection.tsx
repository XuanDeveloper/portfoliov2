
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  liveLink?: string;
  githubLink?: string;
  isInView: boolean;
  delay: number;
};

const ProjectCard = ({
  title,
  description,
  tech,
  liveLink,
  githubLink,
  isInView,
  delay,
}: ProjectCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={`group bg-card rounded-lg overflow-hidden shadow-sm hover-lift card-shadow transition-all duration-700 ${
        isInView 
          ? `opacity-100 translate-y-0 delay-[${delay}ms]` 
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-full bg-secondary/10 text-secondary">
            <FolderOpen className="h-6 w-6" />
          </div>
          
          <div className="flex gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`${t("viewCode")} - ${title}`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`${t("viewProject")} - ${title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-balance mb-4 text-muted-foreground">
          {description}
        </p>
        
        <div className="text-sm text-muted-foreground">
          <p>{tech}</p>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-muted/50 flex justify-between items-center">
        {liveLink && (
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              {t("viewProject")}
            </a>
          </Button>
        )}
        
        {githubLink && (
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="hover:bg-secondary/10"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {t("viewCode")}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: t("project1Title"),
      description: t("project1Description"),
      tech: t("project1Tech"),
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/XuanDeveloper/echo-of-titans",
    },
    {
      title: t("project2Title"),
      description: t("project2Description"),
      tech: t("project2Tech"),
      liveLink: "https://gestaodejogos.vercel.app/",
      githubLink: "https://github.com/XuanDeveloper/gestaodejogos",
    },
    {
      title: t("project3Title"),
      description: t("project3Description"),
      tech: t("project3Tech"),
      liveLink: "https://portfoliov2-rho-brown.vercel.app/",
      githubLink: "https://github.com/XuanDeveloper/portfoliov2",
    },
    {
      title: t("project4Title"),
      description: t("project4Description"),
      tech: t("project4Tech"),
      liveLink: "https://example.com/project4",
      githubLink: "https://github.com/XuanDeveloper/MobaApp",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section bg-mesh-purple relative"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`section-title text-center mb-12 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t("projectsTitle")}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
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

export default ProjectsSection;
