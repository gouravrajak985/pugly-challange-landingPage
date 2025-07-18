import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  speed?: string;
}

const StarBorder = ({ children, className, speed = "6s" }: StarBorderProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-[1px]",
        className
      )}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22c55e_0%,#16a34a_50%,#22c55e_100%)]"
        style={{
          animationDuration: speed,
        }}
      />
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl">
        {children}
      </div>
    </div>
  );
};

export default StarBorder;