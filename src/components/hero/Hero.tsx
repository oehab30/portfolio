import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Magnetic from "@/components/layout/Magnetic Wrapper";
import TrueFocus from "../ui/TrueFocus";
import MouseScroll from "./MouseScroll";
import HeroDescription from "./HeroDescription";
import HeroGetInTouch from "./HeroGetInTouch";
import HeroViewWork from "./HeroViewWork";
import HeroDownloadCV from "./HeroDownloadCV";
import Animated_line from "../ui/Animated_line";

const Hero = () => {
  

  return (
    <section className="relative min-h-dvh flex flex-col justify-center items-center text-center overflow-hidden z-20 py-20 px-4">
      
      {/* Background Ambience (Dynamic Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary-deep rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-40 pointer-events-none transition-all duration-700" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl px-4 -translate-y-8 md:-translate-y-12 transition-transform duration-500">

      <Animated_line text="Frontend Developer" />

 
        


        {/* Main Title - Name (TrueFocus) */}
        <div className=" mb-6 md:mb-8 mt-2 relative z-20">
            <TrueFocus
              sentence="OMAR EHAB"
              blurAmount={7}
              pauseBetweenAnimations={1.6}
              borderColor="var(--primary)"
              glowColor="var(--primary-deep)"
            />
        </div>
        
        {/* Description */}
     <HeroDescription/>
        
        {/* Contact Info */}
        <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center gap-6 md:gap-12 text-[10px] md:text-sm font-body text-muted-foreground mb-8 md:mb-12"
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

        {/* container buttons */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-row gap-6 items-center" >
            
        {/* View Works */} <HeroViewWork/>
        {/* Get In Touch */} <HeroGetInTouch/>
        
        </motion.div>



        {/* Download Resume */}
     <HeroDownloadCV/>

      </div>
      
      {/* Scroll indicator - Enhanced Dynamic Version */}
     <MouseScroll/>

    </section>
  );
};

export default Hero;
