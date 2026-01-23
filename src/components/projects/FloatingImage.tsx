import { memo } from "react";
import { motion, MotionValue } from "framer-motion";
import { projects } from "./project_data";

interface FloatingImageProps {
  activeIndex: number;
  imageX: MotionValue<number>;
  imageY: MotionValue<number>;
}

export const FloatingImage = memo(({ activeIndex, imageX, imageY }: FloatingImageProps) => {
  return (
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
      className="fixed pointer-events-none z-50 w-[400px] aspect-4/5 overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-border hidden lg:block"
    >
      <motion.img
        key={projects[activeIndex].image}
        src={projects[activeIndex].image}
        alt={projects[activeIndex].title}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 via-transparent to-transparent bg-linear-to-t from-black/80" />
      <div className="absolute right-10 bottom-10 left-10">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-primary mb-2 block">Case Study</span>
        <p className="text-xl font-bold tracking-tight text-foreground">{projects[activeIndex].title}</p>
      </div>
    </motion.div>
  );
});

FloatingImage.displayName = "FloatingImage";
