import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface VariableProximityProps {
  text: string;
  className?: string;
  animationDuration?: number;
}

const VariableProximity = ({ 
  text, 
  className, 
  animationDuration = 0.5 
}: VariableProximityProps) => {
  const letters = text.split("");

  return (
    <div className={cn("flex flex-wrap justify-center", className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: animationDuration,
            delay: index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ 
            marginRight: letter === " " ? "0.5rem" : "0.1rem",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default VariableProximity;