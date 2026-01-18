import { motion } from 'framer-motion';
import AnimatedLine from '../common/AnimatedLine';
import { itemVariants } from './AboutVariants';

function AboutHeader() {
  return (
    <div className="flex flex-col gap-8 justify-between items-start mb-24 md:flex-row md:items-end md:mb-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="max-w-2xl"
      >
        <div className="flex gap-4 items-center mb-6">
          <AnimatedLine text="About" lines={1} textColor={"text-primary"} lineColor={"bg-primary/40"}/>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold leading-[0.85] tracking-tighter">
          Creative <br />
          <span className="text-transparent bg-clip-text via-purple-400 bg-linear-to-r from-primary to-foreground/90">Identity</span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="hidden text-right lg:block"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/20 mb-2">Current Focus</p>
        <p className="font-mono text-sm tracking-widest uppercase text-primary/80">Frontend Architecture</p>
      </motion.div>
    </div>
  );
}

export default AboutHeader;
