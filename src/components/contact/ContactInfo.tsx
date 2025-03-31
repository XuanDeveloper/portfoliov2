
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm card-shadow h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
        <p className="text-muted-foreground mb-6">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <a href="mailto:juanmachado123@hotmail.com" className="hover:text-primary transition-colors">
            juanmachado123@hotmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-secondary/10">
            <Github className="h-5 w-5 text-secondary" />
          </div>
          <a
            href="https://github.com/XuanDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            github.com/XuanDeveloper
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-blue-500/10">
            <Linkedin className="h-5 w-5 text-blue-500" />
          </div>
          <a
            href="https://www.linkedin.com/in/juan-machado-de-paula-7b6507226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            linkedin.com/in/juan-machado-de-paula-7b6507226/
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
