import { memo } from "react";
import { motion } from "framer-motion";

interface TechCardProps {
  tech: {
    name: string;
    color: string;
    icon: string;
  };
  index: number;
}

export const TechCard = memo(({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col gap-4 justify-center items-center p-6 rounded-2xl border transition-all duration-300 group bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary shrink-0 w-[calc(50vw-40px)] md:w-auto snap-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className="flex relative justify-center items-center w-16 h-16"
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ 
            backgroundColor: tech.color === "#000000" ? "var(--foreground)" : tech.color 
          }}
          aria-hidden="true"
        />
        
        <img
          src={tech.icon}
          alt={tech.name}
          className={`w-12 h-12 relative z-10 transition-all duration-300 
            ${tech.color === "#000000" ? "dark:invert" : ""}`}
        />
      </motion.div>

      <span className="text-sm font-bold tracking-wide transition-colors text-muted-foreground group-hover:text-foreground">
        {tech.name}
      </span>
    </motion.div>
  );
});

TechCard.displayName = "TechCard";
