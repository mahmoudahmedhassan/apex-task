import React from "react";

type Align = "left" | "center" | "right";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  align?: Align;
}

const alignmentClasses: Record<Align, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  icon,
  align = "center",
}) => {
  return (
    <div className={`mb-6 flex flex-col ${alignmentClasses[align]} gap-1`}>
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
