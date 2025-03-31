
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Particles from "./Particles";

const HeroSection = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add a small delay to trigger animations after component mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh-green pt-16"
    >
      <Particles className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.15),transparent_50%)]"></div>
      
      <div className="container px-6 py-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <span className="inline-block text-lg md:text-xl font-medium text-muted-foreground mb-3">
              {t("greeting")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
              <span className="animated-text relative">
                <span className="relative">Juan Machado</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-70"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-display mb-6 text-secondary">
              {t("profession")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 h-auto"
              >
                <a href="#projects">{t("projects")}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-medium px-6 py-2 h-auto"
              >
                <a href="#contact">{t("contact")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground/70" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
