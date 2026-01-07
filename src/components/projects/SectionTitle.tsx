import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={` mb-12  ${className}`} ref={ref}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm tracking-wider uppercase block mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      <div className="h-1 w-20 bg-primary/50 mt-4 rounded-full" />
    </div>
  );
};

export default SectionTitle;
