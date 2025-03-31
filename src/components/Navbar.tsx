
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  Moon, 
  Sun,
  Globe,
  Menu,
  X, 
  Github, 
  Linkedin 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track scrolling for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: t("home"), href: "#home" },
    { title: t("about"), href: "#about" },
    { title: t("experience"), href: "#experience" },
    { title: t("education"), href: "#education" },
    { title: t("skills"), href: "#skills" },
    { title: t("projects"), href: "#projects" },
    { title: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-display font-bold text-gradient-primary">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Social links */}
          <div className="hidden md:flex items-center space-x-2 mr-2">
            <a
              href="https://github.com/XuanDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1 rounded-full hover:bg-muted transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-machado-de-paula-7b6507226/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 rounded-full hover:bg-muted transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Language toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={language === "en" ? t("switchToPortuguese") : t("switchToEnglish")}
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[90vh] p-4 overflow-auto" : "max-h-0 overflow-hidden p-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-md text-base font-medium hover:bg-muted hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {link.title}
            </a>
          ))}
          <div className="flex items-center space-x-2 px-4 py-4 border-t border-border">
            <a
              href="https://github.com/XuanDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-machado-de-paula-7b6507226/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
