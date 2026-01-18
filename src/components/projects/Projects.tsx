import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedLine from "../ui/AnimatedLine";

const projects = [
  {
    id: "01",
    title: "Mazraaty Digital Agriculture Platform",
    category: "Next.js 15 • TypeScript • React",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "02",
    title: "EFB System (Egyptian Food Bank)",
    category: "React 18 • TypeScript • Chakra UI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "03",
    title: "Qamhawy (Agricultural Services)",
    category: "React 18 • TypeScript • Refine",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "04",
    title: "Takweed System (Plant Quarantine)",
    category: "React 18 • TypeScript • Bootstrap",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "05",
    title: "Egy Medya",
    category: "Next.js 14 • React 18 • Tailwind CSS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    link: "#"
  }
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    // Smooth spring physics for the following image
    const springConfig = { damping: 25, stiffness: 150 };
    const imageX = useSpring(mouseX, springConfig);
    const imageY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!isMobile) {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY, isMobile]);

    return (
        <section className="py-24 px-6 relative z-10 border-t border-foreground/5" id="projects">
              <div className="absolute top-0 right-10 text-[20vw] md:text-[25vw] font-bold text-foreground/5 leading-none pointer-events-none select-none">
        04
      </div>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-2 mb-10 md:mb-16">
                    <AnimatedLine text="Selected Projects" lines={1} textColor={"text-primary"} lineColor={"bg-primary/60"}/>
                </div>

                {/* Projects List */}
                <div className="flex flex-col relative">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative border-b border-border py-8 md:py-12 lg:cursor-none"
                            onMouseEnter={() => !isMobile && setActiveIndex(index)}
                            onMouseLeave={() => !isMobile && setActiveIndex(null)}
                        >
                            <a href={project.link} className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12 transition-all duration-500">
                                <span className="text-[10px] md:text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
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
                                )}>
                                    <ArrowUpRight size={24} />
                                </div>
                            </a>

                            {/* Mobile Image Preview (Compact) */}
                            {isMobile && (
                                <div className="mt-8 w-full aspect-video rounded-2xl overflow-hidden border border-border relative">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover opacity-60 dark:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hover Floating Image Popup (Desktop Only) */}
            {!isMobile && (
                <AnimatePresence>
                    {activeIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                            style={{
                                left: imageX,
                                top: imageY,
                                x: 50,
                                y: -180,
                            }}
                            className="fixed pointer-events-none z-50 w-[400px] aspect-4/5 overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-border"
                        >
                            <motion.img
                                key={projects[activeIndex].image}
                                src={projects[activeIndex].image}
                                alt={projects[activeIndex].title}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-primary mb-2 block">Case Study</span>
                                <p className="text-xl font-bold text-foreground tracking-tight">{projects[activeIndex].title}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </section>
    );
};

export default Projects;
