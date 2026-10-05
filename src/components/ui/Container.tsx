import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
  size?: "default" | "narrow" | "wide";
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function Container({
  children,
  as: Component = "div",
  size = "default",
  className = "",
  id,
  style,
}: ContainerProps) {
  const sizeClass = size === "narrow" ? "container-narrow" : "container";
  const combinedClass = `${sizeClass} ${className}`.trim();

  return (
    <Component id={id} className={combinedClass} style={style}>
      {children}
    </Component>
  );
}
