
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-mesh-purple relative"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`section-title mb-12 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {t("aboutTitle")}
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div 
              className={`md:col-span-2 transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="https://avatars.githubusercontent.com/u/145291152?s=400&u=fcdacac99fb8da0026c3be6b33b109f782bf533b&v=4" 
                      alt="Juan Machado" 
                      className="object-cover"
                    />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-lg -z-10"></div>
              </div>
            </div>
            
            <div 
              className={`md:col-span-3 transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg leading-relaxed mb-6 text-balance">
                {t("aboutDescription")}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card rounded-lg p-4 text-center shadow-sm hover-lift card-shadow">
                  <div className="text-3xl font-bold text-primary mb-1">1+</div>
                  <div className="text-sm text-muted-foreground">{t("experienceYears")}</div>
                </div>
                
                <div className="bg-card rounded-lg p-4 text-center shadow-sm hover-lift card-shadow">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">{t("experienceProjects")}</div>
                </div>
                
                <div className="bg-card rounded-lg p-4 text-center shadow-sm hover-lift card-shadow">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">{t("experienceClients")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
