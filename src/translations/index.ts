
export type TranslationKey = 
  | "home" | "about" | "experience" | "education" | "skills" | "projects" | "contact"
  | "greeting" | "profession" | "heroDescription"
  | "aboutTitle" | "aboutDescription"
  | "experienceTitle" | "experienceYears" | "experienceProjects" | "experienceClients"
  | "jobPosition1" | "jobCompany1" | "jobPeriod1" | "jobDescription1"
  | "jobPosition2" | "jobCompany2" | "jobPeriod2" | "jobDescription2" 
  | "jobPosition3" | "jobCompany3" | "jobPeriod3" | "jobDescription3"
  | "educationTitle"
  | "degree1" | "school1" | "eduPeriod1" | "eduDescription1"
  | "degree2" | "school2" | "eduPeriod2" | "eduDescription2"
  | "skillsTitle" | "frontendTech" | "backendTech" | "databaseTech" | "otherTech"
  | "projectsTitle" | "viewProject" | "viewCode"
  | "project1Title" | "project1Description" | "project1Tech"
  | "project2Title" | "project2Description" | "project2Tech"
  | "project3Title" | "project3Description" | "project3Tech"
  | "project4Title" | "project4Description" | "project4Tech"
  | "contactTitle" | "contactName" | "contactEmail" | "contactMessage" | "contactSend" | "contactSuccess" | "contactError"
  | "copyright"
  | "lightMode" | "darkMode"
  | "switchToPortuguese" | "switchToEnglish";

export type Language = 'en' | 'pt';

export interface Translations {
  [key: string]: {
    [key in TranslationKey]: string;
  };
}
