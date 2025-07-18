import React from 'react';

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
        </div>
        
        {/* Aurora Waves */}
       
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {children}
    </div>
  );
}