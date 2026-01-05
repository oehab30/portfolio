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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <div className=" mb-4 relative w-6 h-10 border-2 border-white/30 rounded-full p-1 flex justify-center backdrop-blur-sm group-hover:border-primary/60 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
       
          <motion.div
      animate={{
        y: [0, 10, 0],
        opacity: [1, 0.3, 1],
        scale: [1, 0.75, 1],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-2 h-2 bg-primary rounded-full
      shadow-[0_0_12px_var(--primary),0_0_24px_var(--primary)]"
    />
  </div>
        <span className="text-[10px] uppercase tracking-[0.3em]   ">Scroll</span>
      </motion.a>
    </>
  )
}

export default Mousescroll