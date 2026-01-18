import React from 'react'
import { motion } from 'framer-motion'

function Mousescroll() {
  return (
    <>
      {/* Scroll indicator - Enhanced Dynamic Version */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 translate-y-[-57px] flex flex-col items-center gap-3 group
        lg:bottom-2 xl:bottom-1 2xl:mb-12">
        <div className="relative w-6 h-10 border-2 border-foreground/20
         dark:border-white/30 rounded-full p-1 flex justify-center
          backdrop-blur-sm group-hover:border-primary transition-colors duration-300 shadow-sm
          mb-4  xl:mb-8 ">
          {/* Animated "Wheel" */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.4, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"
          />
        </div>
        
        {/* Text changes color based on theme */}
        <span className="text-[10px] mb-4    uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Scroll
        </span>
      </motion.a>
    </>
  )
}

export default Mousescroll