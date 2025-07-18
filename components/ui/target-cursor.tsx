"use client";

import { useEffect, useState } from "react";

const TargetCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border-2 border-green-400 transition-all duration-100 ease-out"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
        }}
      />
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-green-400 transition-all duration-75 ease-out"
        style={{
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
        }}
      />
    </>
  );
};

export default TargetCursor;