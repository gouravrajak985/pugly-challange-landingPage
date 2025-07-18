import { cn } from "@/lib/utils";

interface DarkVeilProps {
  className?: string;
}

const DarkVeil = ({ className }: DarkVeilProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Main dark veil with subtle pattern */}
      <div className="absolute inset-0 bg-black/90" />
      
      {/* Animated gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-300/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-green-400/60 rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-green-300/60 rounded-full animate-float animation-delay-500" />
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-green-500/60 rounded-full animate-float animation-delay-1000" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-green-200/60 rounded-full animate-float animation-delay-1500" />
    </div>
  );
};

export default DarkVeil;