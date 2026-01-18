import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { projects } from "./project_data";
import { ProjectCard } from "./ProjectCard";
import { FloatingImage } from "./FloatingImage";

export function ProjectsContainer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Smooth spring physics for the following image
  const springConfig = { damping: 25, stiffness: 150 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <div className="relative group/scroll-projects">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 gap-8 scrollbar-hide snap-x lg:flex-col lg:overflow-visible lg:pb-0 lg:gap-0"
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Mobile Navigation Arrows */}
      <AnimatePresence>
        {isMobile && showLeftArrow && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll("left")}
            className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-20 flex justify-center items-center w-12 h-12 rounded-full border shadow-xl backdrop-blur-xl bg-background/90 border-primary/30 text-primary active:scale-90 transition-all"
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}

        {isMobile && showRightArrow && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => scroll("right")}
            className="absolute right-[-12px] top-1/2 -translate-y-1/2 z-20 flex justify-center items-center w-12 h-12 rounded-full border shadow-xl backdrop-blur-xl bg-background/90 border-primary/30 text-primary active:scale-90 transition-all"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop Floating Image */}
      <AnimatePresence>
        {!isMobile && activeIndex !== null && (
          <FloatingImage 
            activeIndex={activeIndex} 
            imageX={imageX} 
            imageY={imageY} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
