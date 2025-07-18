import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
}

const BlurText = ({ text, className, variant, duration = 1, delay = 0 }: BlurTextProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {text}
    </motion.h1>
  );
};

export default BlurText;