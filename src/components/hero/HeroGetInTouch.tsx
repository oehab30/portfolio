import React from 'react'
import Magnetic from '@/components/layout/Magnetic Wrapper'

function HeroGetInTouch() {
  return (
    <Magnetic strength={0.2}>
             <a 
                href="#contact"
                className="group relative px-8 py-3 text-muted-foreground hover:text-white uppercase text-xs tracking-[0.2em] transition-colors duration-300"
            >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          </Magnetic>
    )
}

export default HeroGetInTouch