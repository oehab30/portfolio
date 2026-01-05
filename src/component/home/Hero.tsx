import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden z-20">
      
      {/* Background Ambience (Glows) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-primary/80 mb-8">

          Frontend Developer (React.js)
        
        </motion.p>
        
        <div className="overflow-hidden mb-10 relative">
           {/* Subtle glow behind title */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]  -z-10" />
           
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-heading font-light tracking-tight bg-clip-text text-transparent "
          >
            <h1>Omar</h1>
            <h1>Ehab</h1>
          </motion.h1>
      
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-light font-body italic tracking-wide"
        >
          <span className="text-primary">"</span> Passionate Frontend Developer building responsive and user-friendly web applications with strong focus on UI/UX, performance, clean code, and <span className="text-[var(--lonpink)]">SEO optimization.</span> 


 <span className="text-primary">"</span>
 
        </motion.p>
        <div className="flex items-center gap-4 mt-4"> <span className="flex items-center gap-2"><FaLocationDot className="text-[var(--lonpink)]" /> Cairo, Egypt </span> <span className="flex items-center gap-2"> <IoMailSharp className="text-[var(--lonpink)]" />
oehab785@gmail.com</span></div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-center"
        >
          
          <Link 
            to="/contact"
            className="relative px-5 py-2 text-sm tracking-[0.2em] uppercase border border-white/20 hover:border-primary transition-colors duration-500 hover:text-primary hover:shadow-[0_0_20px_rgba(229,211,179,0.2)]"
          >
            <span className="flex items-center gap-2">view my work<FaArrowUpRightFromSquare /></span>

          </Link>
          <Link 
            to="/contact"
            className="relative px-5 py-2 text-sm tracking-[0.2em] uppercase border border-white/20 hover:border-primary transition-colors duration-500 hover:text-primary hover:shadow-[0_0_20px_rgba(229,211,179,0.2)]"
          >
            Get In Touch
          </Link>

        
          

        </motion.div>
        <Link 
            to="/contact"
            className="mt-5 relative px-5 py-2 text-sm tracking-[0.2em] uppercase border border-white/20 hover:border-primary transition-colors duration-500 hover:text-primary hover:shadow-[0_0_20px_rgba(229,211,179,0.2)]"
          >
                <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}>
<span className="flex items-center gap-2">Download CV <IoDocumentTextOutline /></span>
        </motion.div>
          </Link>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
      </motion.div>

    </section>
  );
};

export default Hero;
