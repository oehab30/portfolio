import { motion } from 'framer-motion'
import { IoDocumentTextOutline } from "react-icons/io5";

function HeroDownloadCV() {
  return (
   <motion.div
           custom={5}
           initial="hidden"
           animate="visible"
           className="mt-6 md:mt-10"
        >
             <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-3 px-5 py-2 
                  bg-secondary border border-primary/20 rounded-full 
                  text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground/50 
                  hover:text-foreground hover:border-primary/60 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] 
                  transition-all duration-300 hover:scale-105 mt-3
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> {/* Live Indicator */}
                <span>Download Resume</span>
                <IoDocumentTextOutline className="text-lg group-hover:text-primary transition-colors" />
              </a>
        </motion.div>  )
}

export default HeroDownloadCV