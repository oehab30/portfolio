import { motion } from "framer-motion";

const Animated_line = ({
  text = "Frontend Developer",
  lines = 2,               // 1 or 2
  lineColor = "bg-primary/40",
  textColor = "text-primary/80",
}) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      {/* Left line */}
      {(lines === 2 || lines === 1) && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "3rem", opacity: 1, x: [0, -6, 6, 0] }}
          transition={{
            width: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 1.2 },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
          }}
          className={`h-px ${lineColor}`}
        />
      )}

      {/* Text */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`text-xs md:text-sm font-heading tracking-[0.4em]
        uppercase font-medium ${textColor}`}
      >
        {text}
      </motion.span>

      {/* Right line */}
      {lines === 2 && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "3rem", opacity: 1, x: [0, 6, -6, 0] }}
          transition={{
            width: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 1.2 },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
          }}
          className={`h-px ${lineColor}`}
        />
      )}
    </div>
  );
};

export default Animated_line;
