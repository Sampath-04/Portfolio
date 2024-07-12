"use client";
import React, { ReactNode } from "react";
const GradientPosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX + window.scrollX,
        y: ev.clientY + window.scrollY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

interface GradientdivProps {
  children: ReactNode;
  className?: string;
}

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient( circle at ${
          GradientPosition().x
        }px ${
          GradientPosition().y
        }px, rgba(234, 234, 234, 0.1)  , #030712 40% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
export default Gradientdiv;
