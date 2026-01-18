import { motion, Variants } from 'framer-motion';
import { FaSuitcase } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import AnimatedLine from '../ui/AnimatedLine';

function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } }
  };

  return (
    <section className="py-32 px-6 relative z-10 border-t border-foreground/5 overflow-hidden" id="about">
      {/* Background Section Index */}
      <div className="absolute top-0 right-10 text-[20vw] md:text-[25vw] font-bold text-foreground/5 leading-none pointer-events-none select-none">
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 md:mb-32">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="max-w-2xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <AnimatedLine text="About" lines={1} textColor={"text-primary"} lineColor={"bg-primary/40"}/>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold leading-[0.85] tracking-tighter">
                    Creative <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-foreground/90">Identity</span>
                </h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="hidden lg:block text-right"
            >
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/20 mb-2">Current Focus</p>
                <p className="text-sm font-mono text-primary/80 tracking-widest uppercase">Frontend Architecture</p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Wing: Narrative */}
            <div className="lg:col-span-5 space-y-16">
                <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <p className="text-2xl md:text-3xl font-light leading-snug text-foreground/90">
                        I am a developer who believes <span className="text-primary italic">complexity</span> should be beautiful and <span className="text-primary italic">simplicity</span> should be felt.
                    </p>
                    
                    <div className="space-y-6 text-muted-foreground/60 leading-relaxed text-lg font-light">
                        <p>
                            My approach to engineering is rhythmic. I view code as a medium for artistic expression, where performance and aesthetics coexist in a delicate equilibrium.
                        </p>
                        <p>
                            Based in Egypt, I bridge the gap between technical constraints and creative possibilities, building interfaces that resonate on a human level.
                        </p>
                    </div>

                    <div className="pt-4 flex items-center gap-8">
                        <div>
                             <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-1">Status</p>
                             <p className="text-xs uppercase tracking-widest text-foreground/80">Available for hire</p>
                        </div>
                        <div className="w-px h-10 bg-foreground/10" />
                        <div>
                             <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-1">Vibe</p>
                             <p className="text-xs uppercase tracking-widest text-foreground/80">Boutique & Precise</p>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Stats Grid */}
                <div className="grid grid-cols-2 gap-px bg-foreground/5 border border-foreground/5">
                    {[
                        { label: 'Precision', value: '99%' },
                        { label: 'Passion', value: '100%' },
                        { label: 'Creative', value: 'Driven' },
                        { label: 'Stack', value: 'Modern' }
                    ].map((stat) => (
                        <div key={stat.label} className="bg-background p-6 space-y-1">
                            <p className="text-[8px] font-mono uppercase tracking-[0.4em] text-foreground/20">{stat.label}</p>
                            <p className="text-xl font-heading font-medium text-foreground/60 group-hover:text-primary transition-colors">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Wing: Timeline */}
            <motion.div 
                className="lg:col-span-7 space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Subtitle */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-[1em] text-foreground/20">Background</span>
                    <motion.div variants={lineVariants} className="h-px flex-1 bg-foreground/5 origin-left" />
                </div>
                
                {/* Experience Card */}
                <motion.div 
                    variants={itemVariants}
                    className="group relative p-10 bg-secondary/50 border border-border rounded-3xl hover:bg-secondary hover:border-primary/20 transition-all duration-700 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <FaSuitcase size={120} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                            <FaSuitcase size={24} />
                         </div>
                         <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold font-heading tracking-tight">Professional Path</h3>
                                <span className="text-[9px] font-mono px-3 py-1 rounded-full border border-primary/20 text-primary">2023 - PRESENT</span>
                            </div>
                            <p className="text-muted-foreground/80 leading-relaxed font-light">
                                Architecting fluid user experiences and robust frontend systems. Specializing in high-performance React architectures and component-driven design systems.
                            </p>
                         </div>
                    </div>
                </motion.div>

                {/* Education Card */}
                <motion.div 
                    variants={itemVariants}
                    className="group relative p-10 bg-secondary/50 border border-border rounded-3xl hover:bg-secondary hover:border-primary/20 transition-all duration-700 overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <RiGraduationCapFill size={28} />
                         </div>
                         <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold font-heading tracking-tight">Canadian International College</h3>
                                <span className="text-[9px] font-mono px-3 py-1 rounded-full border border-border text-foreground/40">BIS DEGREE</span>
                            </div>
                            <p className="text-muted-foreground/80 leading-relaxed font-light">
                                Bachelor's in Business Information Systems. Providing a unique bridge between complex business logic and creative technology solutions.
                            </p>
                         </div>
                    </div>
                </motion.div>

                {/* Training Card */}
                <motion.div 
                    variants={itemVariants}
                    className="group relative p-10 bg-secondary/50 border border-border rounded-3xl hover:bg-secondary hover:border-primary/20 transition-all duration-700 overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <PiMedalFill size={26} />
                         </div>
                         <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold font-heading tracking-tight">Specializations</h3>
                                <span className="text-[9px] font-mono px-3 py-1 rounded-full border border-border text-foreground/40">CERTIFIED</span>
                            </div>
                            <p className="text-muted-foreground/80 leading-relaxed font-light mb-6">
                                Focused training at coach Academy and Upskilling Program. Mastery of the modern JavaScript ecosystem and advanced React patterns.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'Redux', 'System Design'].map(tag => (
                                    <span key={tag} className="text-[10px] font-mono py-1 px-4 rounded-lg bg-secondary border border-border text-foreground/30 group-hover:text-primary transition-colors">{tag}</span>
                                ))}
                            </div>
                         </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;