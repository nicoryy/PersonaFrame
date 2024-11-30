import React, { ReactElement } from "react";

interface IconTitleProps {
    title: string;
    icon?: React.ReactNode;
}

function IconTitle({title, icon}: IconTitleProps) {
  const hasIcon = !!icon;

  return (
    <span className="flex items-center gap-2">
      {hasIcon && (
        <svg width="1.3em" height="1.3em">
          <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#6c006c" offset="0%" />
            <stop stopColor="#9f00c5" offset="70%" />
          </linearGradient>
          {React.cloneElement(icon as ReactElement, { style: { fill: "url(#blue-gradient)" } })}
        </svg>
      )}
      <p className="font-semibold text-lg">{title}</p>
    </span>
  );
}

export default IconTitle;




