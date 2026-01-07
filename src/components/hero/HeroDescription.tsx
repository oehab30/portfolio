import React from 'react'
import { motion } from 'framer-motion'

function HeroDescription() {
  return (
    <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto text-sm md:text-lg text-muted-foreground/90 leading-relaxed font-light font-body tracking-wide mb-6 md:mb-10"
        >
          <span className="text-primary text-xl ">"</span> 
          Crafting immersive, high-performance web experiences with a focus on 
          <span className="text-primary font-medium "> precision</span>, 
          <span className="text-primary font-medium"> aesthetics</span>, and 
          <span className="text-primary font-medium"> user-centric design</span>.
          <span className="text-primary text-xl">"</span>
        </motion.p>  )
}

export default HeroDescription