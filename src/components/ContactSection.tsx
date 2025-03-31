
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "../hooks/use-in-view";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import SectionTitle from "./contact/SectionTitle";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section bg-background relative"
    >
      <div 
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-mesh-purple to-transparent opacity-30"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={t("contactTitle")} 
            isInView={isInView} 
            icon={<Mail className="h-6 w-6 text-primary" />}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div 
              className={`transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ContactForm />
            </div>
            
            <div 
              className={`transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
