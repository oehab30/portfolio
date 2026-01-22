import { useRef, useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { technologies } from "./Stackicons";
import { TechCard } from "./TechCard";

export const StackContainer = memo(() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative group/scroll">
      <div 
        ref={scrollRef}
        className="grid grid-rows-2 grid-flow-col overflow-x-auto pb-8 gap-4 scrollbar-hide snap-x md:grid-rows-none md:grid-flow-row md:grid-cols-4 lg:grid-cols-6 md:gap-8 md:pb-0 mx-auto max-w-6xl"
        aria-label="Technologies list"
      >
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>

      {/* Navigation Arrows - Mobile Only */}
      <AnimatePresence>
        {showLeftArrow && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll("left")}
            className="absolute left-[-12px] top-[calc(50%-16px)] z-20 flex justify-center items-center w-10 h-10 rounded-full border shadow-lg backdrop-blur-md bg-background/80 border-primary/20 text-primary md:hidden active:scale-95 transition-transform"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        )}

        {showRightArrow && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => scroll("right")}
            className="absolute right-[-12px] top-[calc(50%-16px)] z-20 flex justify-center items-center w-10 h-10 rounded-full border shadow-lg backdrop-blur-md bg-background/80 border-primary/20 text-primary md:hidden active:scale-95 transition-transform"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

StackContainer.displayName = "StackContainer";
