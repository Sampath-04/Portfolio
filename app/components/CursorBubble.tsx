"use client";
import React, { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const CusorBubble: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="bubble"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
    </div>
  );
};

export default CusorBubble;
