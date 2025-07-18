import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
  speed?: string;
}

export default function ShinyText({ 
  text, 
  className = "", 
  shimmerWidth = 100,
  speed = "3s"
}: ShinyTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span 
        className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-300 bg-clip-text text-transparent animate-gradient-x"
        style={{
          backgroundSize: '200% 100%',
          animation: `shimmer ${speed} infinite linear`
        }}
      >
        {text}
      </span>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"
        style={{
          width: `${shimmerWidth}px`,
          animation: `shimmer-slide ${speed} infinite linear`
        }}
      />
    </div>
  );
}