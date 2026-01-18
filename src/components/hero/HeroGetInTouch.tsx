import React from 'react'
import Magnetic from '@/components/common/Magnetic Wrapper'

function HeroGetInTouch() {
  return (
    <Magnetic strength={0.2}>
      <a 
        href="#contact"
        className="group relative px-8 py-3 text-muted-foreground hover:text-foreground uppercase text-xs tracking-[0.2em] transition-colors duration-300"
      >
        {/* Text turns to Foreground color (Black in Light / White in Dark) on hover */}
        <span className="relative z-10">Get In Touch</span>
        
        {/* Animated Underline */}
        <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        {/* Optional: Subtle background glow on hover for Dark Mode */}
        <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </Magnetic>
  )
}
                                                                                                                                                                                                                         
export default HeroGetInTouch