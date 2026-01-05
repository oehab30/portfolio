import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Magnetic from "@/components/layout/Magnetic Wrapper";
import TrueFocus from "../ui/TrueFocus"; // Path adjusted: ../TrueFocus -> ../../TrueFocus
import Mousescroll from "./mousescroll";

const Hero = () => {
  

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden z-20">
      
      {/* Background Ambience (Deep Purple Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--primary-deep) rounded-full blur-[120px] -z-10 mix-blend-screen opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl px-4">
        
        {/* Role / Label - Animated Lines */}
        <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-8"
        >
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "3rem", opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="h-px bg-primary/40" 
          />
    <motion.div
  initial={{ opacity: 0, y: 12, letterSpacing: "0.8em" }}
  animate={{
    opacity: 1,
    y: 0,
    letterSpacing: "0.4em",
  }}
  transition={{
    duration: 1.4,
    ease: "easeOut",
  }}
  className="text-xs md:text-sm font-heading tracking-[0.4em] 
  uppercase text-primary/80 font-medium relative"
>
  <motion.span
    animate={{ opacity: [1, 0.6, 1] }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.6, // 👈 starts AFTER intro animation
    }}
    className="inline-block"
  >
    Frontend Developer
  </motion.span>
</motion.div>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "3rem", opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="h-px bg-primary/40" 
          />
        </motion.div>
        


        {/* Main Title - Name (TrueFocus) */}
        <div className="overflow-hidden mb-8 mt-2 mix-blend-screen relative z-20">
            <TrueFocus
              sentence="OMAR EHAB"
              blurAmount={7}
              pauseBetweenAnimations={1.5}
              borderColor="#8b5cf6" // Lighter violet for visibility
              glowColor="#43109a"   // Deep purple glow
            />
        </div>
        
        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground/90 leading-relaxed font-light font-body tracking-wide mb-10"
        >
          <span className="text-primary text-xl">"</span> 
          Crafting immersive, high-performance web experiences with a focus on 
          <span className="text-primary font-medium"> precision</span>, 
          <span className="text-primary font-medium"> aesthetics</span>, and 
          <span className="text-primary font-medium"> user-centric design</span>.
          <span className="text-primary text-xl">"</span>
        </motion.p>
        
        {/* Contact Info */}
        <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm font-body text-muted-foreground mb-12"
        >
            <div className="flex items-center gap-2 transition-all hover:text-primary duration-300 hover:scale-105">
                <FaLocationDot className="text-primary" /> 
                <span className="tracking-wide">Cairo, Egypt</span>
            </div>
            <a href="mailto:oehab785@gmail.com" className="flex items-center gap-2 transition-all hover:text-primary duration-300 hover:scale-105">
                 <IoMailSharp className="text-primary" />
                 <span className="tracking-wide">oehab785@gmail.com</span>
            </a>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Magnetic strength={0.3}>
            <a 
                href="#projects"
                className="group relative px-8 py-3 bg-transparent border border-primary/30 text-primary uppercase text-xs tracking-[0.2em] transition-all duration-500 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden rounded-[2px]"
            >
                <div className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative flex items-center gap-3">
                    View Works <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </a>
          </Magnetic>

          <Magnetic strength={0.2}>
             <a 
                href="#contact"
                className="group relative px-8 py-3 text-muted-foreground hover:text-white uppercase text-xs tracking-[0.2em] transition-colors duration-300"
            >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          </Magnetic>
        </motion.div>

        {/* CV Download - Tech Badge Style */}
        <motion.div
           custom={5}
           initial="hidden"
           animate="visible"
           className="mt-10"
        >
             <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-3 px-5 py-2 
                  bg-[#0f0720] border border-primary/20 rounded-full 
                  text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/50 
                  hover:text-white hover:border-primary/60 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] 
                  transition-all duration-300
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> {/* Live Indicator */}
                <span>Download Resume</span>
                <IoDocumentTextOutline className="text-lg group-hover:text-primary transition-colors" />
              </a>
        </motion.div>

      </div>
      
      {/* Scroll indicator - Enhanced Dynamic Version */}
     <Mousescroll/>

    </section>
  );
};

export default Hero;
