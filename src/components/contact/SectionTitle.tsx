
import React, { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  isInView: boolean;
  icon: ReactNode;
}

const SectionTitle = ({ title, isInView, icon }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div 
        className={`p-2 rounded-full bg-primary/10 transition-all duration-500 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {icon}
      </div>
      <h2 
        className={`section-title transition-all duration-700 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
