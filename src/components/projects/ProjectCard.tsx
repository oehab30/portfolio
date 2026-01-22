import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  isMobile: boolean;
}

export const ProjectCard = memo(({ project, index, activeIndex, setActiveIndex, isMobile }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative py-8 border-b group border-border md:py-12 lg:cursor-none transition-all duration-300",
        isMobile ? "shrink-0 w-[calc(85vw-40px)] border-none p-0 snap-center" : "w-full"
      )}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
      onMouseLeave={() => !isMobile && setActiveIndex(null)}
    >
      <a href={project.link} target="_blank"  className=" flex flex-col gap-4 transition-all duration-500 md:flex-row md:items-end md:gap-12">
        <span className="text-[10px] md:text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" aria-hidden="true">
          {`/${project.id}`}
        </span>
        
        <div className="flex-1">
          <h3 className={cn(
            "text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter transition-all duration-500",
            activeIndex === index ? "text-primary lg:translate-x-4" : "text-foreground/40 group-hover:text-foreground"
          )}>
            {project.title}
          </h3>
          <p className="text-[10px] md:text-xs font-mono text-muted-foreground/30 mt-2 md:mt-4 uppercase tracking-[0.3em] group-hover:text-primary/60 transition-colors">
            {project.category}
          </p>
        </div>

        <div className={cn(
          "hidden md:flex p-4 rounded-full border border-border transition-all duration-500 opacity-0 group-hover:opacity-100",
          activeIndex === index ? "bg-primary text-primary-foreground scale-110" : "scale-75"
        )} aria-hidden="true">
          <ArrowUpRight size={24} />
        </div>
      </a>

      {/* Mobile Image Preview */}
      {isMobile && (
        <div className="overflow-hidden relative mt-6 w-full rounded-2xl border aspect-video border-border shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full opacity-60 dark:opacity-80 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 via-transparent to-transparent opacity-60 bg-linear-to-t from-background" />
          <div className="absolute bottom-4 left-4 right-4">
             <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono text-primary uppercase tracking-widest">View Project</span>
                <ArrowUpRight size={16} className="text-primary" aria-hidden="true" />
             </div>
          </div>
        </div>
      )}
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";
