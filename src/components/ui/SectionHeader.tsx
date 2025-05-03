import React from "react";

type Align = "left" | "center" | "right";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  align?: Align;
}

 

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  icon,
 }) => {
  return (
    <div className={`mb-6 flex flex-col  gap-1`}>
      <div className="flex items-center gap-2">
        {icon && <span className="text-blue-600">{icon}</span>}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
